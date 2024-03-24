import {type ErApi} from '../index.js';
import {type ErResponse} from '../../types/index.js';
import {type ErLanguages} from '../../types/constants.js';

export type ErTranslationResponse = ErResponse<{
	l10Path: string;
}>;

/**
 * Get the path to translation path
 * @param this ErApi
 * @param language The language to query translation path
 * @returns The path to translation text file encoded in UTF8
 */
export async function getTranslationPath(this: ErApi, language: ErLanguages) {
	const response = await this.fetcher.get(`v1/l10n/${language}`);
	const json = await response.json<ErTranslationResponse>();

	return json;
}
