import {type ErApi} from '../index.js';
import {type ErMetaData, type ErMetaTypes} from '../../types/__generated__/erMetaTypes.js';
import {type ErResponse} from '../../types/index.js';

export type ErMetaTypesResponse = ErResponse<Record<ErMetaTypes, number>>;

/**
 * Get available keys for the metadata
 * @param this ErApi
 * @param version The metadata version; version 1 is deprecated
 * @returns An array list of the static data of the game
 */
export async function getMetaTypes(this: ErApi, version: 1 | 2 = 2) {
	const response = await this.fetcher.get(`v${version}/data/hash`);
	const json = await response.json<ErMetaTypesResponse>();

	return json;
}

export type ErMetaDataResponse<T extends ErMetaData> = ErResponse<T[]>;

/**
 * Get static data for the given metadata namespace
 * @param this ErApi
 * @param type The static data type to query
 * @param version The metadata version; version 1 is deprecated
 * @returns An array of constants in the specific metadata namespace
 */
export async function getMetaData<T extends ErMetaData>(this: ErApi, type: ErMetaTypes, version: 1 | 2 = 2) {
	const response = await this.fetcher.get(`v${version}/data/${type}`);
	const json = await response.json<ErMetaDataResponse<T>>();

	return json;
}
