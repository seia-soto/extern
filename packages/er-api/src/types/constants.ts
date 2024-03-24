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

export const enum ErMatchModes {
	Normal = 2,
	Rank = 3,
	CobaltProtocol = 6,
}

export const enum ErMatchmakingTeamTypes {
	Solo = 1,
	Duo = 2,
	Squad = 3,
	CobaltProtocol = 4,
}

export const enum ErPlayerTypes {
	Player = 'player',
	Bot = 'bot',
}

export const enum ErKnownSeasons {
	Normal = 0,
}

export type ErSeasons = ErKnownSeasons | number;

export const enum ErMasteryTypes {
	None = 0,
	Glove,
	Tonfa,
	Bat,
	Whip,
	HighAngleFire,
	DirectFire,
	Bow,
	CrossBow,
	Pistol,
	AssaultRifle,
	SniperRifle,
	Hammer,
	Axe,
	OneHandSword,
	TwoHandSword,
	Polearm,
	DualSword,
	Spear,
	Nunchaku,
	Rapier,
	Guitar,
	Camera,
	Arcana,
	VFArm,
	Craft = 101,
	Search,
	Move,
	Defense = 201,
	Hunt,
}

export const enum ErEquipments {
	Weapon = 0,
	Suit,
	Headgear,
	Arms,
	Legs,
	Accessories, // Unused
}

export const enum ErCollectibles {
	Watersource = 1,
	Branch,
	Rock,
	SaltwaterFishing,
	FreshwaterFishing,
	Potato,
	TreeOfLife,
	Meteorite,
	Flower,
}

export enum ErTacticalSkillMappings {
	'Skill/Group/Name/4000000' = 30,
	'Skill/Group/Name/4001000' = 40,
	'Skill/Group/Name/4101000' = 50,
	'Skill/Group/Name/4102000' = 60,
	'Skill/Group/Name/4103000' = 70,
	'Skill/Group/Name/4104000' = 80,
	'Skill/Group/Name/4105000' = 90,
	'Skill/Group/Name/4107000' = 110,
	'Skill/Group/Name/4110000' = 120,
	'Skill/Group/Name/4112000' = 130,
	'Skill/Group/Name/4113000' = 140,
	'Skill/Group/Name/4108000' = 150,
	'Skill/Group/Name/4501000' = 500010,
	'Skill/Group/Name/4502000' = 500020,
	'Skill/Group/Name/4503000' = 500030,
	'Skill/Group/Name/4504000' = 500040,
	'Skill/Group/Name/4505000' = 500050,
	'Skill/Group/Name/4506000' = 500060,
	'Skill/Group/Name/4507000' = 500070,
	'Skill/Group/Name/4508000' = 500080,
	'Skill/Group/Name/4509000' = 500090,
	'Skill/Group/Name/4510000' = 500100,
	'Skill/Group/Name/4511000' = 500110,
}

export const enum ErDamageTypes {
	Trap = 'trap',
	Basic = 'basic',
	Skill = 'skill',
	ItemSkill = 'itemSkill',
	Direct = 'direct',
	uniqueSkill = 'uniqueSkill',
}
