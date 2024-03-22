import {type ErApi} from '../index.js';
import {type ErMatchModes} from '../../types/constants.js';
import {type ErEmptyResponse} from '../../types/index.js';

export type ErFreeCharactersResponse = ErEmptyResponse & {
	freeCharacters: number[];
};

/**
 * Get free to play character ids in specific game mode
 * @param this ErApi
 * @param matchMode The mode to query free to play characters
 * @returns An array list of character ids
 */
export async function getFreeCharacters(this: ErApi, matchMode: ErMatchModes) {
	const response = await this.fetcher.get(`freeCharacters/${matchMode}`);
	const json = await response.json<ErFreeCharactersResponse>();

	return json;
}
