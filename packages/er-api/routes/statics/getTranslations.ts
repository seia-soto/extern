import {type ErClient} from '../..';
import {type ErResponse} from '../../types';
import {type ErLanguages} from '../../types/constants';

export type ErTranslationResponse = ErResponse<{
	l10Path: string;
}>;

/**
 * Get the path to translation path
 * @param this ErClient
 * @param language The language to query translation path
 * @returns The path to translation text file encoded in UTF8
 */
export async function getTranslationPath(this: ErClient, language: ErLanguages) {
	const response = await this.fetcher.get(`l10n/${language}`);
	const json = await response.json<ErTranslationResponse>();

	return json;
}
