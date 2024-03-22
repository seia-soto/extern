import {type ErClient} from '../..';
import {type ErMatchModes} from '../../types/constants';
import {type ErEmptyResponse} from '../../types';

export type ErFreeCharactersResponse = ErEmptyResponse & {
	freeCharacters: number[];
};

/**
 * Get free to play character ids in specific game mode
 * @param this ErClient
 * @param matchMode The mode to query free to play characters
 * @returns An array list of character ids
 */
export async function getFreeCharacters(this: ErClient, matchMode: ErMatchModes) {
	const response = await this.fetcher.get(`freeCharacters/${matchMode}`);
	const json = await response.json<ErFreeCharactersResponse>();

	return json;
}
