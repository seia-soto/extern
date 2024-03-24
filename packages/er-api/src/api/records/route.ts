import QueryString from 'qs';
import {type ErTacticalSkillMappings} from '../../types/constants.js';
import {type ErEmptyResponse} from '../../types/index.js';
import {type Ratio, type JsonLiteral} from '../../types/utils.js';
import {type ErApi} from '../index.js';

export type ErRouteResource = {
	recommendedWeaponRoute: {
		/** The route identifier */
		id: number;
		/** The route name */
		title: string;
		/** The author (user) identifier */
		userNum: number;
		/** The author (user) nickname */
		userNickname: string;
		/** The targeted character code by the route */
		characterCode: number;
		/** The slot identifier of this route (assume the route can be multiple slots) */
		slotId: number;
		/** The targeted weapon type for the targeted character */
		weaponType: number;
		/** The available weapon codes for the targeted character; JsonLiteral; This property is marshalled by JSON in string */
		weaponCodes: JsonLiteral<number[]>;
		/** The tactical skill group identifier */
		tacticalSkillGroupCode: ErTacticalSkillMappings;
		/** An array of the in-game regional identifiers for pathing */
		paths: JsonLiteral<number[]>;
		count: number;
		/** The targeted game version */
		version: string;
		/** The targetd team mode; Omitted as zero unless specified */
		teamMode: number;
		/** The author (user) language code in two characters; See ISO 3166-1 alpha-2 */
		languageCode: string;
		/** The revision of this route */
		routeVersion: number;
		/** A boolean indicating if this route is shared */
		share: boolean;
		/** JavaScript Date-compatible timestamp value indicating when this route was updated */
		updateDtm: number;
		/** The count of recommendation for this route; Normally recommendation is available after getting the first place in matches */
		v2Like: number;
		/** The ratio of getting first placement in matches */
		v2WinRate: Ratio;
		/** The season identifier targeted by this route; Omitted as zero unless specified */
		v2SeasonId: number;
		/** The count of recommendation for this route; Normally recommendation is available after getting the first place in matches */
		v2AccumulateLike: number;
		/** The ratio of getting first placement in matches */
		v2AccumulateWinRate: Ratio;
		/** The season identifier targeted by this route; Omitted as zero unless specified */
		v2AccumulateSeasonId: number;
	};
	recommendWeaponRouteDesc: {
		/** The route identifier */
		recommendWeaponRouteId: number;
		/** A comma-spread strings of default skill key binding; q,w,e,r,t */
		skillPath?: string;
		/** The route description */
		desc?: string;
	};
};

export type ErRouteResponse = ErEmptyResponse & {
	result: ErRouteResource;
};

/**
 * Get a route by id
 * @param this ErApi
 * @param routeId The route id to query
 * @returns The route with its data
 */
export async function getRoute(this: ErApi, routeId: number) {
	const response = await this.fetcher.get(`v1/weaponRoutes/recommend/${routeId}`);
	const json = await response.json<ErRouteResponse>();

	return json;
}

export type ErRecommendedRoutesResponse = ErEmptyResponse & {
	result: ErRouteResource[];
};

/**
 * Get recommended routes
 * @param this ErApi
 * @param next An optional pagination parameter can be retrieved by a previous request
 * @returns An array of recommended routes
 */
export async function getRecommendedRoutes(this: ErApi, next?: number) {
	let url = 'v1/weaponRoutes/recommend';

	if (next !== undefined) {
		url += '?' + QueryString.stringify({
			next,
		});
	}

	const response = await this.fetcher.get(url);
	const json = await response.json<ErRecommendedRoutesResponse>();

	return json;
}
