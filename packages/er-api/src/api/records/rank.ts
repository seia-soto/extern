import {type ErApi} from '../index.js';
import {type ErEmptyResponse} from '../../types/index.js';

export type ErRank = {
	userNum: number;
	mmr: number;
	nickname: string;
	rank: number;
};

export type ErRankResponse = ErEmptyResponse & {
	userRank: ErRank;
};

/**
 * Get a user rank data
 * @param this ErApi
 * @param userId The user id to query
 * @param seasonId The season id to query; current latest is 23
 * @param modeId A matchingTeamMode parameter; unknown
 * @returns A user rank data with their mmr
 */
export async function getRankByUserId(this: ErApi, userId: number, seasonId: number, modeId = 3) {
	const response = await this.fetcher.get(`rank/${userId}/${seasonId}/${modeId}`);
	const json = await response.json<ErRankResponse>();

	return json;
}

export type ErLeaderboardResponse = ErEmptyResponse & {
	topRanks: ErRank[];
};

/**
 * Get the leaderboard data
 * @param this ErApi
 * @param seasonId The season id to query; current latest is 23
 * @param modeId A matchingTeamMode parameter; unknown
 * @returns An array of user rank data with their mmr
 */
export async function getLeaderboard(this: ErApi, seasonId: number, modeId = 3) {
	const response = await this.fetcher.get(`rank/top/${seasonId}/${modeId}`);
	const json = await response.json<ErLeaderboardResponse>();

	return json;
}
