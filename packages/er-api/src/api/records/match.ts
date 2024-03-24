import QueryString from 'qs';
import {
	type ErCollectibles,
	type ErEscapeStates,
	type ErTacticalSkillMappings,
	type ErDeathCauseProviders, type ErEquipments, type ErMasteryTypes,
	type ErMatchModes, type ErMatchmakingTeamTypes,
} from '../../types/constants.js';
import {type ErEmptyResponse} from '../../types/index.js';
import {
	type Bit,
	type DateTime,
	type JsonLiteral,
	type Numeric,
	type Percentile,
	type Ratio,
	type Seconds,
} from '../../types/utils.js';
import {type ErApi} from '../index.js';

export type ErMatchResource = {
	/** The user identifier */
	userNum: number;
	/** The user nickname */
	nickname: string;
	/** The match identifier */
	gameId: number;
	/** The season identifier */
	seasonId: number;
	/** The match mode identifier */
	matchingMode: ErMatchModes;
	/** The matchmaking team type identifier */
	matchingTeamMode: ErMatchmakingTeamTypes;
	/** The character identifier */
	characterNum: number;
	/** The character skin identifier */
	skinCode: number;
	/** The character level */
	characterLevel: number;
	/** The final placement */
	gameRank: number;
	/** The kills count in the match */
	playerKill: number;
	/** The assists count in the match */
	playerAssistant: number;
	/** The monster kills count in the match */
	monsterKill: number;
	/** The highest weapon mastery identifier of the user in the match */
	bestWeapon: ErMasteryTypes;
	/** The level of the weapon with the highest mastery of the user in the match */
	bestWeaponLevel: number;
	/** The mastery level of each weapon */
	masteryLevel: Record<Numeric<ErMasteryTypes>, number>;
	/** The character equipments */
	equipment: Record<Numeric<ErEquipments>, number>;
	/** The major version of the match; e.g. 17 */
	versionMajor: number;
	/** The minor version of the match; e.g. 0 */
	versionMinor: number;
	/** The user language in two characters; See ISO 3166-1 alpha-2 */
	language: string;
	/** The skill levels of the character */
	skillLevelInfo: Record<Numeric, number>;
	/** An array-like object containing the skill upgrade sequence */
	skillOrderInfo: Record<Numeric, number>;
	/** The name of game server; Normally, this is the region-code */
	serverName: string;
	/** The maximum hp */
	maxHp: number;
	/** The maximum sp */
	maxSp: number;
	/** The attack stat */
	attackPower: number;
	/** The defense stat */
	defense: number;
	/** The hp regeneration rate */
	hpRegen: number;
	/** The sp regeneration rate */
	spRegen: number;
	/** The attack speed */
	attackSpeed: number;
	/** The movement speed */
	moveSpeed: number;
	/** The movement speed in non-fighting cases */
	outOfCombatMoveSpeed: number;
	/** The sight range */
	sightRange: number;
	/** The attackable range of the character */
	attackRange: number;
	/** The chance of critical strike */
	criticalStrikeChance: Ratio;
	/** The damage amplifier of critical strike in percentile */
	criticalStrikeDamage: Percentile;
	/** The skill cooldown rate in percentile */
	coolDownReduction: Percentile;
	/** The hp drain rate in percentile */
	lifeSteal: Percentile;
	/** The hp drain rate on basic attack (aa; auto attack) in percentile */
	normalLifeSteal: Percentile;
	/** The hp drain rate on skill attack in percentile */
	skillLifeSteal: Percentile;
	/** The damage amplifier to monster in percentile */
	amplifierToMonster: Percentile;
	/** The damage amplifier when using trap in percentile */
	trapDamage: Percentile;
	/** *Undocumented */
	bonusCoin: number;
	/** The gained account experience for the account level */
	gainExp: number;
	/** *Undocumented */
	baseExp: number;
	/** *Undocumented; Assume exp boosting system */
	bonusExp: number;
	/** The match start datetime string */
	startDtm: DateTime;
	/** The match duration in seconds */
	duration: Seconds;
	/** The play time in seconds */
	playTime: Seconds;
	/** The spectation time in seconds */
	watchTime: Seconds;
	/** The cumulative time spent on the match in seconds */
	totalTime: Seconds;
	/** *Undocumented */
	survivableTime: Seconds;
	/** The count of bots in the match */
	botAdded: number;
	/** The count of remaining bots in the match after user exits */
	botRemain: number;
	/** Whether restricted area expansion has been accelerated */
	restrictedAreaAccelerated: Bit;
	/** The count of safe areas in the match after user exits */
	safeAreas: number;
	/** The identifier of the user team */
	teamNumber: number;
	/** The count of members before matchmaking happens */
	preMade: number;
	/** The count of event mission progress */
	eventMissionResult: Record<Numeric, number>;
	/** The normal mode MMR decision factor */
	gainedNormalMmrKFactor: number;
	/** Whether won the match */
	victory: Bit;
	/** The count of uncommon item crafts */
	craftUncommon: number;
	/** The count of rare item crafts */
	craftRare: number;
	/** The count of epic item crafts */
	craftEpic: number;
	/** The count of legendary item crafts */
	craftLegend: number;
	/** The cumulative damage to other players */
	damageToPlayer: number;
	/** The cumulative damage to other players using traps */
	damageToPlayer_trap: number;
	/** The cumulative damage to other players using basic attacks (aa; auto attack) */
	damageToPlayer_basic: number;
	/** The cumulative damage to other players using skills */
	damageToPlayer_skill: number;
	/** The cumulative damage to other players using unique damage mechenics */
	damageToPlayer_itemSkill: number;
	/** The cumulative damage to other players using fixed damanges */
	damageToPlayer_direct: number;
	/** The cumulative damage to other players using unique skills */
	damageToPlayer_uniqueSkill: number;
	/** The cumulative damage from other players */
	damageFromPlayer: number;
	/** The cumulative damage from other players using traps */
	damageFromPlayer_trap: number;
	/** The cumulative damage from other plaeyrs using basic attacks (aa; auto attack) */
	damageFromPlayer_basic: number;
	/** The cumulative damage from other players using skills */
	damageFromPlayer_skill: number;
	/** The cumulative damage from other players using unique damage mechenics */
	damageFromPlayer_itemSkill: number;
	/** The cumulative damage from other players using fixed damages */
	damageFromPlayer_direct: number;
	/** The cumulative damage from other players using unique skills */
	damageFromPlayer_uniqueSkill: number;
	/** The cumulative damage to monsters */
	damageToMonster: number;
	/** The cumulative damage to monsters using traps */
	damageToMonster_trap: number;
	/** The cumulative damage to monsters using basic attacks (aa; auto attack) */
	damageToMonster_basic: number;
	/** The cumulative damage to monsters using skills */
	damageToMonster_skill: number;
	/** The cumulative damage to monsters using unique damage mechenics */
	damageToMonster_itemSkill: number;
	/** The cumulative damage to monsters using fixed damages */
	damageToMonster_direct: number;
	/** The cumulative dmaage to monsters using unique skills */
	damageToMonster_uniqueSkill: number;
	/** The cumulative damage from monsters */
	damageFromMonster: number;
	/** The cumulative damage to other players disabled by shields */
	damageToPlayer_Shield: number;
	/** The cumulative damage from other players disabled by shields */
	damageOffsetedByShield_Player: number;
	/** The cumulative damage from monsters disabled by shields */
	damageOffsetedByShield_Monster: number;
	/** The count of monster kills by their identifier */
	killMonsters: Record<Numeric, number>;
	/** The cumulative self-heals */
	healAmount: number;
	/** The count of teammate heals */
	teamRecover: number;
	/** The cumulative protected (shields) hp amount */
	protectAbsorb: number;
	/** The count of installed surveillance cameras by the user */
	addSurveillanceCamera: number;
	/** The count of installed telephoto cameras by the user */
	addTelephotoCamera: number;
	/** The count of removed surveillance cameras by the user */
	removeSurveillanceCamera: number;
	/** The count of removed telephoto cameras by the user */
	removeTelephotoCamera: number;
	/** The count of hyper loop usages */
	useHyperLoop: number;
	/** The count of security console usages */
	useSecurityConsole: number;
	/** Whether the user gave up the match */
	giveUp: Bit;
	/** Whether the user spectated the match */
	teamSpectator: Bit;
	/** The route identifier used by the user */
	routeIdOfStart: number;
	/** The slot identifier of the route uesd by the user */
	routeSlotId: number;
	/** The area identifier selected by the user to start; This is normally decided by the route */
	placeOfStart: Numeric;
	/** *Undocumented; Assumes the count of participants */
	matchSize: number;
	/** The cumulative kills made within the team */
	teamKill: number;
	/** The cumulative kills made in the field */
	totalFieldKill: number;
	/** The account level of the user */
	accountLevel: number;
	/** The user identifier killed the player ('this' user) */
	killerUserNum: number;
	/** The cause type of the player death */
	killer: ErDeathCauseProviders;
	/** The nickname of the player killer; If the user dead in restricted areas, the area name will be recorded */
	killDetail: string;
	/** The cause skill or entity of the player death */
	causeOfDeath: string;
	/** The area identifier where the player death happended */
	placeOfDeath: Numeric;
	/** The character identifier of the killer; Omitted as an empty string if the player timed out in the restriction area */
	killerCharacter: Numeric | '';
	/** The weapon type of the killer; Omitted as an empty string if the player timed out in the restriction area or dead by monsters */
	killerWeapon: keyof typeof ErMasteryTypes | '';
	/** Secondary; See killerUserNum */
	killerUserNum2: number;
	/** Secondary; See killer */
	killer2: string;
	/** Secondary; See killerDetail */
	killDetail2: string;
	/** Secondary; See causeOfDeath */
	causeOfDeath2: string;
	/** Secondary; See placeOfDeath */
	placeOfDeath2: string;
	/** Secondary; See killerCharacter */
	killerCharacter2: string | '';
	/** Secondary; See killerWeapon */
	killerWeapon2: keyof typeof ErMasteryTypes | '';
	/** Third; See killerUserNum */
	killerUserNum3: number;
	/** The count of fishing */
	fishingCount: number;
	/** The count of emote use */
	useEmoticonCount: number;
	/** The expiration date of this record in the official storage; Normally 3 months  */
	expireDtm: DateTime;
	/** The primary trait slot identifier */
	traitFirstCore: number;
	/** The primary trait sub slot identifier */
	traitFirstSub: [number, number];
	/** The secondary trait sub slot identifier */
	traitSecondSub: [number, number];
	/** The count of air suppliment opening ordered in rarity */
	airSupplyOpenCount: number[];
	/** The count of food crafts */
	foodCraftCount: number[];
	/** The count of beverage (for sp) crafts */
	beverageCraftCount: number[];
	/** *Undocumented: RP; Rank Point */
	rankPoint: number;
	/** CobaltProtocol: The count of turbine takeovers by the user */
	totalTurbineTakeOver: number;
	/** CobaltProtocol: The count of used heal packs */
	usedNormalHealPack: number;
	/** CobaltProtocol: The count of used reinforced heal packs */
	usedReinforcedHealPack: number;
	/** CobaltProtocol: The count of used shield packs */
	usedNormalShieldPack: number;
	/** CobaltProtocol: The count of used reinforced shield packs */
	usedReinforceShieldPack: number;
	/** An array of earned credits in each minutes (maximum 20 minutes) */
	totalVFCredits: number[];
	/** An array of used credits in each minutes (maximum 20 minutes) */
	usedVFCredits: number[];
	/** *Undocumented; The cumulative earned credits */
	sumTotalVFCredits: number;
	/** *Undocumented; The cumulative used credits */
	sumUsedVFCredits: number;
	/** The count of mythic item crafts (red) */
	craftMythic: number;
	/** The count of player deaths */
	playerDeaths: number;
	/** Whether this user killed gamma */
	killGamma: boolean;
	/** CobaltProtocol: An array of scores earned in each minutes (maximum 20 minutes) */
	scoredPoint: number[];
	/** The character identifier to kills count record made by the player */
	killDetails: JsonLiteral<Record<Numeric, number>>;
	/** The character identifier to deaths count record made by other players */
	deathDetails: JsonLiteral<Record<Numeric, number>>;
	/** CobaltProtocol: The count of kills in the first phase */
	killsPhaseOne: number;
	/** CobaltProtocol: The count of kills in the second phase */
	killsPhaseTwo: number;
	/** CobaltProtocol: The count of kills in the third phase */
	killsPhaseThree: number;
	/** CobaltProtocol: The count of deaths in the first phase */
	deathsPhaseOne: number;
	/** CobaltProtocol: The count of deaths in the second phase */
	deathsPhaseTwo: number;
	/** CobaltProtocol: The count of deaths in the third phase */
	deathsPhaseThree: number;
	/** *Undocumented: The count of hyper loop to the teammates */
	usedPairLoop: number;
	/** The cumulative CC duration to other players in seconds */
	ccTimeToPlayer: Seconds;
	creditSource: {
		PreliminaryPhase: number;
		TacticalSkillUpgrade: number;
		TimeElapsedCompensationByMiliSecond: number;
		KillChicken: number;
		KillWildDog: number;
		KillBat: number;
		KillBoar: number;
		TimeElapsedCreditBonusByMiliSecond: number;
		KillMutantChicken: number;
		KillBear: number;
		KillAlpha: number;
		KillAssistDivideContribute: number;
		KillPlayerMerge: number;
		KillMutantBat: number;
		GoldSecurityConsoleAccess: number;
		KillMutantBoar: number;
		KillWolf: number;
		TransferConsoleSpecialMaterial: number;
		TransferConsoleRemoteDroneMySelf: number;
		KillMutantBear: number;
	};
	/** CobaltProtocol: The count of infusions bought by the player */
	boughtInfusion: JsonLiteral<Record<Numeric, number>>;
	/** Lumia: An array of item identifiers transferred by the console */
	itemTransferredConsole: number[];
	/** Lumia: An array of item identifiers transferred by the drone */
	itemTransferredDrone: number[];
	/** The state of the escape */
	escapeState: ErEscapeStates;
	/** The count of double kills */
	totalDoubleKill: number;
	/** The count of triple kills */
	totalTripleKill: number;
	/** The count of quadra kills */
	totalQuadraKill: number;
	/** The count of continuous kills (5 or higher) */
	totalExtraKill: number;
	/** An array of collected item identifiers in the match */
	collectItemForLog: ErCollectibles[];
	/** *Undocumented; An array of equipments to item identifiers mapping indicating the initial item pathing; This won't be logged if 1) the same grade item was applied 2) epic or higher grade item was applied 3) rare or higher grade accessory was applied */
	equipFirstItemForLog: Record<Numeric<ErEquipments>, number[]>;
	/** The first battle zone area identifier */
	battleZone1AreaCode: number;
	/** The first battle zone mark identifier */
	battleZone1BattleMark: number;
	/** The first battle zone reward item identifier */
	battleZone1ItemCode: number[];
	/** (Deprecated) The second battle zone area identifier */
	battleZone2AreaCode: number;
	/** (Deprecated) The second battle zone mark identifier */
	battleZone2BattleMark: number;
	/** (Deprecated) The second battle zone reward item identifier */
	battleZone2ItemCode: number[];
	/** (Deprecated) The third battle zone area identifier */
	battleZone3AreaCode: number;
	/** (Deprecated) The third battle zone mark identifier */
	battleZone3BattleMark: number;
	/** (Deprecated) The third battle zone reward item identifier */
	battleZone3ItemCode: number[];
	/** The kills count in the battle zone by player */
	battleZonePlayerKill: number;
	/** The deaths count in the battle zone by player */
	battleZoneDeaths: number;
	/** Whether the team won in the first battle zone */
	battleZone1Winner: Bit;
	/** (Deprecated) Whether the team won in the second battle zone */
	battleZone2Winner: Bit;
	/** (Deprecated) Whether the team won in the third battle zone */
	battleZone3Winner: Bit;
	/** The number of players entered into the first battle zone */
	battleZone1BattleMarkCount: number;
	/** (Deprecated) The number of players entered into the second battle zone */
	battleZone2BattleMarkCount: number;
	/** (Deprecated) The number of players entered into the third battle zone */
	battleZone3BattleMarkCount: number;
	/** The type of the tactical skill */
	tacticalSkillGroup: ErTacticalSkillMappings;
	/** The level of the tactical skill */
	tacticalSkillLevel: number;
	/** The cumulative credit earnings */
	totalGainVFCredit: number;
	/** The cumulative credit earnings via kills */
	killPlayerGainVFCredit: number;
	/** The cumulative credit earnings via chickens */
	killChickenGainVFCredit: number;
	/** The cumulative credit earnings via boars */
	killBoarGainVFCredit: number;
	/** The cumulative credit earnings via wild dogs */
	killWildDogGainVFCredit: number;
	/** The cumulative credit earnings via wolfs */
	killWolfGainVFCredit: number;
	/** The cumulative credit earnings via bears */
	killBearGainVFCredit: number;
	/** The cumulative credit earnings via omegas */
	killOmegaGainVFCredit: number;
	/** The cumulative credit earnings via bats */
	killBatGainVFCredit: number;
	/** The cumulative credit earnings via wickliens */
	killWicklineGainVFCredit: number;
	/** The cumulative credit earnings via alphas */
	killAlphaGainVFCredit: number;
	/** The cumulative credit earnings via item bounties */
	killItemBountyGainVFCredit: number;
	/** The cumulative credit earnings via drones */
	killDroneGainVFCredit: number;
	/** The cumulative credit earnings via gammas */
	killGammaGainVFCredit: number;
	/** The cumulative credit earnings via turrets */
	killTurretGainVFCredit: number;
	/** The cumulative credit earnings via shredders */
	itemShredderGainVFCredit: number;
	/** The cumulative credit usages */
	totalUseVFCredit: number;
	/** The cumulative credit usages via drones for self */
	remoteDroneUseVFCreditMySelf: number;
	/** The cumulative credit usages via drones for allies */
	remoteDroneUseVFCreditAlly: number;
	/** The cumulative credit usages via consoles */
	transferConsoleFromMaterialUseVFCredit: number;
	/** The cumulative credit usages via escaping keys on consoles */
	transferConsoleFromEscapeKeyUseVFCredit: number;
	/** The cumulative credit usages via teammate revivals on consoles */
	transferConsoleFromRevivalUseVFCredit: number;
	/** The cumulative credit usages via tactical skill upgrades */
	tacticalSkillUpgradeUseVFCredit: number;
	/** CobaltProtocol: The cumulative credit usages via infusion rerolls */
	infusionReRollUseVFCredit: number;
	/** CobaltProtocol: The cumulative credit usages via infusion trait purchases */
	infusionTraitUseVFCredit: number;
	/** CobaltProtocol: The cumulative credit usages via infusion relics purchases */
	infusionRelicUseVFCredit: number;
	/** CobaltProtocol: The cumulative credit usages via infusion goods purchases */
	infusionStoreUseVFCredit: number;
	/** The count of players elimiated by the player team */
	teamElimination: number;
	/** The count of players downed */
	teamDown: number;
	/** The count of players downed in the battle zone */
	teamBattleZoneDown: number;
	/** The count of players downed by the player for multiple times without eliminations or redeployments */
	teamRepeatDown: number;
	/** The dynamic stats for the character */
	adaptiveForce: number;
	/** The attack stats increased by dynamic stats */
	adaptiveForceAttack: number;
	/** The skill stats increased by dynamic stats */
	adaptiveForceAmplify: number;
	/** The skill amplification of the character */
	skillAmp: number;
	/** The uncommon food crafts in the camp fire */
	campFireCraftUncommon: number;
	/** The rare food crafts in the camp fire */
	campFireCraftRare: number;
	/** The epic food crafts in the camp fire */
	campFireCraftEpic: number;
	/** The legendary food crafts in the camp fire */
	campFireCraftLegendary: number;
	/** CobaltProtocol: The character identifier removed by the user in the CobaltProtocol */
	cobaltRandomPickRemoveCharacter: number;
	/** The count of tactical skill usages */
	tacticalSkillUseCount: number;
	/** The count of revivals via credits on consoles by teammates */
	creditRevivalCount: number;
	/** The count of teammate revivals via credits on consoles */
	creditRevivedOthersCount: number;
	/** The time spent in the briefing room */
	timeSpentInBriefingRoom: Seconds;
	/** Whether the user quit the game even revival via consoles by teammates was possible */
	IsLeavingBeforeCreditRevivalTerminate: boolean;
	/** The credits earned by animals */
	crGetAnimal: number;
	/** The credits earned by mutants */
	crGetMutant: number;
	/** The credits earned on the phase start */
	crGetPhaseStart: number;
	/** The credits earned on kills */
	crGetKill: number;
	/** The credits earned on assists */
	crGetAssist: number;
	/** The credits earned by time */
	crGetTimeElapsed: number;
	/** The credits earned by the bonus applied to the one has the lowest credits */
	crGetCreditBonus: number;
	/** The credits used by remote drones */
	crUseRemoteDrone: number;
	/** The credits used by tactical skill upgrades */
	crUseUpgradeTacticalSkill: number;
	/** The credits used to acquire the tree of life */
	crUseTreeOfLife: number;
	/** The credits used to acquire the meteorite */
	crUseMeteorite: number;
	/** The credits used to acqurie the mythril */
	crUseMythril: number;
	/** The credits used to acquire the force core */
	crUseForceCore: number;
	/** The credits used to acquire the blood sample */
	crUseVFBloodSample: number;
	/** The credits used to acquire the activation module */
	crUseActivationModule: number;
	/** The credits used to acquire the root kit */
	crUseRootkit: number;
	/** *Undocumented; The MMR changes of the player in the match */
	mmrGainInGame: number;
	/** *Undocumented */
	mmrLossEntryCost: number;
	/** *Undocumented; The count of members before matchmaking happens */
	premadeMatchingType: number;
	/** *Undocumented */
	viewContribution: number;
	/** The count of recon drone usages */
	useReconDrone: number;
	/** The count of emp drone usages */
	useEmpDrone: number;
	/** *Undocumented */
	exceptPreMadeTeam: boolean;
	/** Whether the user quit the game even revival via consoles by teammates was possible */
	isLeavingBeforeCreditRevivalTerminate: boolean;
};

export type ErMatchRankedResource = ErMatchResource & {
	/** The MMR value before the match */
	mmrBefore: number;
	/** The MMR changes after the match */
	mmrGain: number;
	/** The MMR value after the match */
	mmrAfter: number;
	/** The average MMR value of the team */
	mmrAvg: number;
};

export type ErMatchByUserIdResponse = ErEmptyResponse & {
	userGames: ErMatchResource[];
	next: number;
};

/**
 * Get matches joined by the user
 * @param this ErApi
 * @param userId The user id to query matches
 * @param next An optional pagination parameter can be retrieved by a previous request
 * @returns An array of the match joined by the user
 */
export async function getMatchesByUserId(this: ErApi, userId: number, next?: number) {
	let url = `v1/user/games/${userId}`;

	if (next !== undefined) {
		url += '?' + QueryString.stringify({
			next,
		});
	}

	const response = await this.fetcher.get(url);
	const json = await response.json<ErMatchByUserIdResponse>();

	return json;
}

/**
 * Get match data in each participated user's perspective by the given match id
 * @param this ErApi
 * @param matchId The match id
 * @param next An optional pagination parameter can be retrieved by a previous request
 * @returns An array of match data in each participated user's perspective
 */
export async function getMatchesByMatchId(this: ErApi, matchId: number, next?: number) {
	let url = `v1/games/${matchId}`;

	if (next !== undefined) {
		url += '?' + QueryString.stringify({
			next,
		});
	}

	const response = await this.fetcher.get(url);
	const json = await response.json<ErMatchByUserIdResponse>();

	return json;
}
