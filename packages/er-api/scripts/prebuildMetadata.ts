import {existsSync} from 'fs';
import {mkdir, writeFile} from 'fs/promises';
import {ErApi, ErApiQueue} from '../src/api/index.js';
import {parseRawTranslation} from '../src/client/translations.js';
import {type ErMetaTypes} from '../src/types/__generated__/erMetaTypes.js';
import {ErLanguages} from '../src/types/constants.js';

const client = new ErApi(undefined, {
	queue: new ErApiQueue({
		size: 1,
		period: 1 * 1000,
	}),
	fetcherOptions: {
		retry: {
			limit: 3,
			delay(attemptCount) {
				return attemptCount * 500;
			},
		},
	},
});

const writeErMetaTypes = async () => {
	const metaTypesResponse = await client.getMetaTypes();
	const metaTypes = Object.keys(metaTypesResponse.data) as ErMetaTypes[];

	console.log(`Loaded ${metaTypes.length} meta types`);

	if (!existsSync('./resources/')) {
		console.log('Created ./resources/');

		await mkdir('./resources/', {recursive: true});
	}

	let content = '';

	content += `/* eslint-disable */
export type ErMetaTypes = ${metaTypes.map(type => `'${type}'`).join(' |\n')} |
(string & {__erType: 'erMetaTypes'});

`;

	const typeNames: string[] = [];

	for (const metaType of metaTypes) {
		console.log(`Retrieving meta data of ${metaType}`);

		if (/[^a-zA-Z0-9]/.test(metaType)) {
			console.warn(`Skipping possible invalid meta type of ${metaType}`);

			continue;
		}

		try {
			const metaDataResponse = await client.getMetaData(metaType);

			if (metaDataResponse.code !== 200) {
				throw new Error(`Got non-200 response code on meta type of ${metaType}`);
			}

			content += `export type ErMetaData${metaType} = {
	${Object
		.entries(metaDataResponse.data[0])
		.filter(([key]) => key.replace(/\s/g, '').length > 0)
		.map(([key, value]) => {
			if (/[^a-zA-Z0-9]/.test(key)) {
				return `'${key}': ${typeof value};`;
			}

			return `${key}: ${typeof value};`;
		})
		.join('\n	')}
};

`;

			typeNames.push(metaType);

			await writeFile(`./resources/${metaType}.json`, JSON.stringify(metaDataResponse.data), 'utf-8');
		} catch (e) {
			console.error(`Failed to retrieve meta type of ${metaType}`);

			if (e instanceof Error) {
				console.error(e.message);
			}
		}
	}

	content += `export type ErMetaData = ${typeNames.map(type => `ErMetaData${type}[]`).join(' |\n')};

`;

	await writeFile('types/__generated__/erMetaTypes.ts', content, 'utf8');
};

const writeTranslations = async () => {
	if (!existsSync('./resources/translations')) {
		console.log('Created ./resources/translations');

		await mkdir('./resources/translations', {recursive: true});
	}

	const languages: ErLanguages[] = [
		ErLanguages.Korean,
		ErLanguages.English,
		ErLanguages.Japanese,
		ErLanguages.ChineseSimplified,
		ErLanguages.ChineseTraditional,
		ErLanguages.French,
		ErLanguages.Spanish,
		ErLanguages.SpanishLatin,
		ErLanguages.Portuguese,
		ErLanguages.PortugueseLatin,
		ErLanguages.Indonesian,
		ErLanguages.German,
		ErLanguages.Russian,
		ErLanguages.Thai,
		ErLanguages.Vietnamese,
	];

	for (const language of languages) {
		try {
			console.log(`Retrieving translation of ${language}`);

			const pathResponse = await client.getTranslationPath(language);
			const fileResponse = await client.fetcher.get(pathResponse.data.l10Path, {
				prefixUrl: '',
				headers: {
					accept: 'text/text',
					'x-api-key': '(redacted)',
				},
				retry: {
					limit: 4,
					delay(attemptCount) {
						return attemptCount * 1000;
					},
				},
			});
			const file = await fileResponse.text();

			const object = parseRawTranslation(file);

			await writeFile(`./resources/translations/${language}.json`, JSON.stringify(object), 'utf-8');
		} catch (e) {
			console.error(`Failed to retrieve ${language} translation`);

			if (e instanceof Error) {
				console.error(e.message);
			}
		}
	}
};

const entrypoint = async () => {
	if (!process.env.ER_SKIP_METADATA_GENERATION) {
		await writeErMetaTypes();
	}

	if (!process.env.ER_SKIP_TRANSLATION_GENERATION) {
		await writeTranslations();
	}
};

void entrypoint();
