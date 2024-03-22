import QueryString from 'qs';
import {type ErApi} from '../index.js';
import {type ErEmptyResponse} from '../../types/index.js';
import {type ErMatchModes} from '../../types/constants.js';

export type ErUserIdByNickname = ErEmptyResponse & {
	user: {
		userNum: number;
		nickname: string;
	};
};

/**
 * Get the nickname of the user by their id
 * @param this ErApi
 * @param nickname The nickname of the user
 * @returns The user id including their nickname
 */
export async function getUserByNickname(this: ErApi, nickname: string) {
	const response = await this.fetcher.get('user/nickname?' + QueryString.stringify({
		nickname,
	}));
	const json = await response.json<ErUserIdByNickname>();

	return json;
}

export type ErUserPlayedCharacterStat = {
	characterCode: number;
	totalGames: number;
	usages: number;
	maxKillings: number;
	top3: number;
	wins: number;
	top3Rate: number;
	averageRank: number;
};

export type ErUserStat = {
	seasonId: number;
	userNum: number;
	matchingMode: ErMatchModes;
	matchingTeamMode: number;
	nickname: string;
	rank: number;
	rankSize: number;
	totalGames: number;
	totalWins: number;
	totalTeamKills: number;
	totalDeaths: number;
	escapeCount: number;
	rankPercent: number;
	averageRank: number;
	averageKills: number;
	averageAssistants: number;
	averageHunts: number;
	top1: number;
	top2: number;
	top3: number;
	top5: number;
	top7: number;
	characterStats: ErUserPlayedCharacterStat[];
};

export type ErUserResponse = ErEmptyResponse & {
	userStats: ErUserStat[];
};

/**
 * Get user stats by id
 * @param this ErApi
 * @param id The user id
 * @param season The season id; zero for normal game mode
 * @returns The user stats for the given season
 */
export async function getUser(this: ErApi, id: number, season = 0) {
	const response = await this.fetcher.get(`user/stats/${id}/${season}`);
	const json = await response.json<ErUserResponse>();

	return json;
}
