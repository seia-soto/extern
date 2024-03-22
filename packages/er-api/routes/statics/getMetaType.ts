import {type ErClient} from '../../index.js';
import {type ErMetaData, type ErMetaTypes} from '../../types/__generated__/erMetaTypes.js';
import {type ErResponse} from '../../types/index.js';

export type ErMetaTypesResponse = ErResponse<Record<ErMetaTypes, number>>;

/**
 * Get available keys for the metadata
 * @param this ErClient
 * @returns An array list of the static data of the game
 */
export async function getMetaTypes(this: ErClient) {
	const response = await this.fetcher.get('data/hash');
	const json = await response.json<ErMetaTypesResponse>();

	return json;
}

export type ErMetaDataResponse<T extends ErMetaData> = ErResponse<T[]>;

/**
 * Get static data for the given metadata namespace
 * @param this ErClient
 * @param type The static data type to query
 * @returns An array of constants in the specific metadata namespace
 */
export async function getMetaData<T extends ErMetaData>(this: ErClient, type: ErMetaTypes) {
	const response = await this.fetcher.get(`data/${type}`);
	const json = await response.json<ErMetaDataResponse<T>>();

	return json;
}
