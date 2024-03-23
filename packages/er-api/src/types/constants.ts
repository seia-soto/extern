export const enum ErMatchModes {
	Normal = 2,
	Rank = 3,
	CobaltProtocol = 6,
}

export const enum ErLanguages {
	Korean = 'Korean',
	English = 'English',
	Japanese = 'Japanese',
	ChineseSimplified = 'ChineseSimplified',
	ChineseTraditional = 'ChineseTranditional',
	French = 'French',
	Spanish = 'Spanish',
	SpanishLatin = 'SpanishLatin',
	Portuguese = 'Portuguese',
	PortugueseLatin = 'PortugueseLatin',
	Indonesian = 'Indonesian',
	German = 'German',
	Russian = 'Russian',
	Thai = 'Thai',
	Vietnamese = 'Vietnamese',
}

export const enum ErDamageTypes {
	Trap = 'trap',
	Basic = 'basic',
	Skill = 'skill',
	ItemSkill = 'itemSkill',
	Direct = 'direct',
	uniqueSkill = 'uniqueSkill',
}

export const enum ErPlayerTypes {
	Player = 'player',
	Bot = 'bot',
}

export const enum ErKnownSeasonTypes {
	Normal = 0,
}

export type ErSeasons = ErKnownSeasonTypes | number;
