import QueryString from 'qs';
import {type ErMatchmakingTeamTypes, type ErMatchModes} from '../../types/constants.js';
import {type ErEmptyResponse} from '../../types/index.js';
import {type ErApi} from '../index.js';

export type ErUserIdByNicknameResponse = ErEmptyResponse & {
	user: {
		/** The user identifier */
		userNum: number;
		/** The user nickname */
		nickname: string;
	};
};

/**
 * Get the nickname of the user by their id
 * @param this ErApi
 * @param nickname The nickname of the user
 * @returns The user id including their nickname
 */
export async function getUserIdByNickname(this: ErApi, nickname: string) {
	const response = await this.fetcher.get('v1/user/nickname?' + QueryString.stringify({
		nickname,
	}));
	const json = await response.json<ErUserIdByNicknameResponse>();

	return json;
}

export type ErUserPlayedCharacterStatResource = {
	/** The character identifier */
	characterCode: number;
	/** The count of cumulative played games with the character */
	totalGames: number;
	/** The count of cumulative played games with the character */
	usages: number;
	/** The highest kill streak in this season */
	maxKillings: number;
	/** The count of third placement or above */
	top3: number;
	/** The count of first placement */
	wins: number;
	/** The rate of third placement or above */
	top3Rate: number;
	/** The average placement */
	averageRank: number;
};

export type ErUserStatResource = {
	/** The season identifier */
	seasonId: number;
	/** The user identifier */
	userNum: number;
	/** The matching mode; see ErMatchModes */
	matchingMode: ErMatchModes;
	/** The team format considered in the matchmaking process */
	matchingTeamMode: ErMatchmakingTeamTypes;
	/** The user nickname */
	nickname: string;
	/** The user placement in the bracket */
	rank: number;
	/** The size of the bracket */
	rankSize: number;
	/** The count of cumulative played games */
	totalGames: number;
	/** The count of cumulative played games placed at first placement */
	totalWins: number;
	/** The count of cumulative kills by all team members */
	totalTeamKills: number;
	/** The count of cumulative deaths */
	totalDeaths: number;
	/** The count of cumulative escapes */
	escapeCount: number;
	/** The user position in the bracket in percentage */
	rankPercent: number;
	/** The average placement */
	averageRank: number;
	/** The average kills count */
	averageKills: number;
	/** The average assists count */
	averageAssistants: number;
	/** The average monster hunts count */
	averageHunts: number;
	/** The ratio of first placement */
	top1: number;
	/** The ratio of second placement and above */
	top2: number;
	/** The ratio of third placement and above */
	top3: number;
	/** The ratio of fifth placement and above */
	top5: number;
	/** The ratio of seventh placement and above */
	top7: number;
	/** The character-wise stats */
	characterStats: ErUserPlayedCharacterStatResource[];
};

export type ErUserRankedStatResource = ErUserStatResource & {
	/** The MMR value */
	mmr: number;
};

export type ErUserResponse = ErEmptyResponse & {
	userStats: Array<ErUserStatResource | ErUserRankedStatResource>;
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
