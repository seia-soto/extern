import {writeFile} from 'fs/promises';
import {ErApi} from '../api/index.js';
import {type ErMetaTypes} from '../types/__generated__/erMetaTypes.js';

const writeErMetaTypes = async () => {
	const client = new ErApi();

	const metaTypesResponse = await client.getMetaTypes();
	const metaTypes = Object.keys(metaTypesResponse.data) as ErMetaTypes[];

	console.log(`Loaded ${metaTypes.length} meta types`);

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
			// eslint-disable-next-line no-await-in-loop
			const metaDataResponse = await client.getMetaData(metaType);

			if (metaDataResponse.code !== 200) {
				throw new Error(`Got non-200 response code on meta type of ${metaType}`);
			}

			content += `export type ErMetaData${metaType} = {
	${Object
		.entries(metaDataResponse.data[0] as Record<string, unknown>)
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
		} catch (e) {
			console.error(`Failed to retrieve meta type of ${metaType}`);
		}
	}

	content += `export type ErMetaData = ${typeNames.map(type => `ErMetaData${type}[]`).join(' |\n')}
`;

	await writeFile('types/__generated__/erMetaTypes.ts', content, 'utf8');
};

const entrypoint = async () => {
	await writeErMetaTypes();
};

void entrypoint();
