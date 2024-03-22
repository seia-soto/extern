export function parseRawTranslation(text: string, delimiter = '┃') {
	// Remove potential CRLF line seq
	text = text.replace(/\r/g, '');

	return Object.fromEntries(
		text.split('\n')
			.map(line => line.split(delimiter) as [string, string]),
	);
}

export class ErTranslationClient {
	public source: Map<string, string>;

	constructor(bindings: Record<string, string>) {
		this.source = new Map();

		for (const [key, value] of Object.entries(bindings)) {
			this.source.set(key, value);
		}
	}

	public compile(key: string, ...args: string[]) {
		if (!this.source.has(key)) {
			return '';
		}

		let value = this.source.get(key)!;

		for (let i = 0; i < args.length; i++) {
			value = value.replace(new RegExp(`{${i}}`, 'g'), args[i]);
		}

		return value;
	}
}
