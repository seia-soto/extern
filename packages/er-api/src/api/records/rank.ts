import {type ErMatchmakingTeamTypes} from '../../types/constants.js';
import {type ErEmptyResponse} from '../../types/index.js';
import {type ErApi} from '../index.js';

export type ErRankResource = {
	/** The user identifier */
	userNum: number;
	/** The user MMR */
	mmr: number;
	/** The user nickname */
	nickname: string;
	/** The current position of the user in the bracket */
	rank: number;
};

export type ErRankResponse = ErEmptyResponse & {
	userRank: ErRankResource;
};

/**
 * Get a user rank data
 * @param this ErApi
 * @param userId The user id to query
 * @param seasonId The season id to query; current latest is 23
 * @param matchmakingTeamType The match making team type
 * @returns A user rank data with their mmr
 */
export async function getRankByUserId(this: ErApi, userId: number, seasonId: number, matchmakingTeamType: ErMatchmakingTeamTypes) {
	const response = await this.fetcher.get(`v1/rank/${userId}/${seasonId}/${matchmakingTeamType}`);
	const json = await response.json<ErRankResponse>();

	return json;
}

export type ErLeaderboardResponse = ErEmptyResponse & {
	topRanks: ErRankResource[];
};

/**
 * Get the leaderboard data
 * @param this ErApi
 * @param seasonId The season id to query; current latest is 23
 * @param matchmakingTeamType The match making team type
 * @returns An array of user rank data with their mmr
 */
export async function getLeaderboard(this: ErApi, seasonId: number, matchmakingTeamType: ErMatchmakingTeamTypes) {
	const response = await this.fetcher.get(`v1/rank/top/${seasonId}/${matchmakingTeamType}`);
	const json = await response.json<ErLeaderboardResponse>();

	return json;
}
