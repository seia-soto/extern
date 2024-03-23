import {type ErSeasons} from '../../types/constants.js';
import {type ErClient} from '../index.js';

export type ErUserStat = {
	matchesCount: number;
	wonMatchesCount: number;
	teamWiseKillsCount: number;
	deathsCount: number;
	escapesCount: number;

	averageKills: number;
	averageAssists: number;
	averageHunts: number;
	averagePlacement: number;

	performanceBracketPlacement: number;
	performanceBracketSize: number;

	placementRatios: Record<`at${number}`, number>;

	characterWise: Array<{
		characterId: number;

		matchesCount: number;
		highestKillsCount: number;
		top3PlacementCount: number;

		averagePlacement: number;
	}>;
	createdAt?: number;
};

export type ErAccumulatedUserStat = Omit<ErUserStat, 'performanceBracketPlacement' | 'performanceBracketSize' | 'createdAt'> & {averagePerformanceBracketPercentage: number};

export class ErUser {
	public static async fromNickname(client: ErClient, nickname: string) {
		const userIdResponse = await client.api.getUserByNickname(nickname);
		const user = new this(client, {id: userIdResponse.user.userNum, nickname: userIdResponse.user.nickname});

		return user;
	}

	public id: number;
	public nickname?: string;

	public stats = new Map<ErSeasons, ErUserStat>();

	constructor(
		private readonly client: ErClient,
		{
			id,
			nickname,
			stats,
		}: {
			id: ErUser['id'];
			nickname?: ErUser['nickname'];
			stats?: Record<ErSeasons, ErUserStat>;
		},
	) {
		this.id = id;
		this.nickname = nickname;

		if (stats) {
			for (const [season, data] of Object.entries(stats)) {
				this.stats.set(parseInt(season, 10), data);
			}
		}
	}

	/**
	 * Get a seasonal user stats; fetch unless cached or expired
	 * @param seasonId ErSeasons
	 * @param ignoreCacheExpiration Whether to ignore cache expiration
	 * @returns A seasonal user stats by id
	 */
	public async getStats(seasonId: ErSeasons, ignoreCacheExpiration = false) {
		if (!this.stats.has(seasonId)) {
			await this.fetchStats(seasonId);
		}

		const data = this.stats.get(seasonId)!;

		if (
			!ignoreCacheExpiration
			&& data.createdAt
			&& Date.now() - data.createdAt > this.client.options.cacheThresholds.userStats
		) {
			await this.fetchStats(seasonId);

			return this.stats.get(seasonId)!;
		}

		return data;
	}

	/**
	 * Update a seasonal user stats regardless of cache
	 * @param seasonId ErSeasons
	 */
	public async fetchStats(seasonId: ErSeasons) {
		const userResponse = await this.client.api.getUser(this.id, seasonId);
		const user = userResponse.userStats[0];

		this.nickname = user.nickname;
		this.stats.set(seasonId, {
			matchesCount: user.totalGames,
			wonMatchesCount: user.totalWins,
			teamWiseKillsCount: user.totalTeamKills,
			deathsCount: user.totalDeaths,
			escapesCount: user.escapeCount,

			averageKills: user.averageKills,
			averageAssists: user.averageAssistants,
			averageHunts: user.averageHunts,
			averagePlacement: user.averageRank,

			performanceBracketPlacement: user.rank,
			performanceBracketSize: user.rankSize,

			placementRatios: {
				at1: user.top1,
				at2: user.top2,
				at3: user.top3,
				at5: user.top5,
				at7: user.top7,
			},

			characterWise: user.characterStats.map(characterData => ({
				characterId: characterData.characterCode,

				matchesCount: characterData.totalGames,
				highestKillsCount: characterData.maxKillings,
				top3PlacementCount: characterData.top3,

				averagePlacement: characterData.averageRank,
			})),
			createdAt: Date.now(),
		});
	}

	/**
	 * Get accumulative stats of the user; see ErAccumulatedUserStatResource
	 * @param seasonIds An array of ErSeasons to accumulate
	 * @param ignoreCacheExpiration Whether to ignore existing caches
	 * @returns Accumulated stats of the user
	 */
	public async getAccumulatedStats(seasonIds: ErSeasons[], ignoreCacheExpiration?: boolean): Promise<ErAccumulatedUserStat> {
		const [firstSeason, ...laterSeasons] = await Promise.all(seasonIds.map(async seasonId => this.getStats(seasonId, ignoreCacheExpiration)));
		const accumulatedStats = laterSeasons.reduce<ErAccumulatedUserStat>((state, data) => ({
			matchesCount: state.matchesCount + data.matchesCount,
			wonMatchesCount: state.wonMatchesCount + data.wonMatchesCount,
			teamWiseKillsCount: state.teamWiseKillsCount + data.teamWiseKillsCount,
			deathsCount: state.deathsCount + data.deathsCount,
			escapesCount: state.escapesCount + data.escapesCount,

			averageKills: (state.averageKills + data.averageKills) / 2,
			averageAssists: (state.averageAssists + data.averageAssists) / 2,
			averageHunts: (state.averageHunts + data.averageHunts) / 2,
			averagePlacement: (state.averagePlacement + data.averagePlacement) / 2,
			averagePerformanceBracketPercentage: (state.averagePerformanceBracketPercentage + (data.performanceBracketPlacement / data.performanceBracketSize)) / 2,

			placementRatios: Object.fromEntries(
				Object
					.entries(state.placementRatios)
					// @ts-expect-error key is type of `at${number}`
					.map(([key, ratio]: [`at${number}`, number]) => {
						if (data.placementRatios[key]) {
							return [key, (ratio + data.placementRatios[key]) / 2];
						}

						return [key, ratio];
					}),
			),

			characterWise: state.characterWise.map(one => {
				const another = data.characterWise.find(characterData => characterData.characterId === one.characterId);

				if (!another) {
					return one;
				}

				return {
					characterId: one.characterId,

					matchesCount: one.matchesCount + another.matchesCount,
					highestKillsCount: Math.max(one.highestKillsCount, another.highestKillsCount),
					top3PlacementCount: one.top3PlacementCount + another.top3PlacementCount,

					averagePlacement: (one.averagePlacement + another.averagePlacement) / 2,
				};
			}),
		}), {
			matchesCount: firstSeason.matchesCount,
			wonMatchesCount: firstSeason.wonMatchesCount,
			teamWiseKillsCount: firstSeason.teamWiseKillsCount,
			deathsCount: firstSeason.deathsCount,
			escapesCount: firstSeason.escapesCount,

			averageKills: firstSeason.averageKills,
			averageAssists: firstSeason.averageAssists,
			averageHunts: firstSeason.averageHunts,
			averagePlacement: firstSeason.averagePlacement,
			averagePerformanceBracketPercentage: firstSeason.performanceBracketPlacement / firstSeason.performanceBracketSize,

			placementRatios: {...firstSeason.placementRatios},

			characterWise: [...firstSeason.characterWise],
		});

		return accumulatedStats;
	}
}
