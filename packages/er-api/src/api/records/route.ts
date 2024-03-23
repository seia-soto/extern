import QueryString from 'qs';
import {type ErApi} from '../index.js';
import {type ErEmptyResponse} from '../../types/index.js';
import {type JsonLiteral} from '../../types/utils.js';

export type ErRoute = {
	recommendedWeaponRoute: {
		id: number;
		title: string;
		userNum: number;
		userNickname: string;
		characterCode: number;
		slotId: 0;
		weaponType: 9;
		weaponCodes: JsonLiteral<number[]>;
		tacticalSkillGroupCode: number;
		paths: JsonLiteral<number[]>;
		count: number;
		version: string;
		teamMode: number;
		languageCode: string;
		routeVersion: number;
		share: boolean;
		updateDtm: number;
		v2Like: number;
		v2WinRate: number;
		v2SeasonId: number;
		v2AccumulateLike: number;
		v2AccumulateWinRate: number;
		v2AccumulateSeasonId: number;
	};
	recommendWeaponRouteDesc: {
		recommendWeaponRouteId: number;
		skillPath?: string;
		desc?: string;
	};
};

export type ErRouteResponse = ErEmptyResponse & {
	result: ErRoute;
};

/**
 * Get a route by id
 * @param this ErApi
 * @param routeId The route id to query
 * @returns The route with its data
 */
export async function getRoute(this: ErApi, routeId: number) {
	const response = await this.fetcher.get(`weaponRoutes/recommend/${routeId}`);
	const json = await response.json<ErRouteResponse>();

	return json;
}

export type ErRecommendedRoutesResponse = ErEmptyResponse & {
	result: ErRoute[];
};

/**
 * Get recommended routes
 * @param this ErApi
 * @param next An optional pagination parameter can be retrieved by a previous request
 * @returns An array of recommended routes
 */
export async function getRecommendedRoutes(this: ErApi, next?: number) {
	let url = 'weaponRoutes/recommend';

	if (next !== undefined) {
		url += '?' + QueryString.stringify({
			next,
		});
	}

	const response = await this.fetcher.get(url);
	const json = await response.json<ErRecommendedRoutesResponse>();

	return json;
}