import QueryString from 'qs';
import {type ErClient} from '../../index.js';
import {
	type ErDamageTypes, type ErLanguages, type ErMatchModes, type ErPlayerTypes,
} from '../../types/constants.js';
import {
	type DateTime, type JsonLiteral, type Numeric, type Seconds,
} from '../../types/utils.js';
import {type ErEmptyResponse} from '../../types/index.js';

export type ErMatchCreditSources = 'PreliminaryPhase'
| 'TacticalSkillUpgrade'
| 'TimeElapsedCompensationByMiliSecond'
| 'TimeElapsedCreditBonusByMiliSecond'
| 'KillChicken'
| 'KillWildDog'
| 'KillBat'
| 'TransferConsoleRemoteDroneMySelf'
| 'KillBoar'
| 'KillBear'
| 'KillMutantChicken'
| 'KillAssistDivideContribute';

export type ErMatchEntityTypes = 'Player'
| 'Chicken'
| 'Boar'
| 'WildDog'
| 'Wolf'
| 'Bear'
| 'Omega'
| 'Bat'
| 'Wickline'
| 'Alpha'
| 'Gamma';

export type ErMatch = {
	userNum: number;
	nickname: string;
	gameId: number;
	seasonId: number;
	matchingMode: ErMatchModes;
	matchingTeamMode: number;
	characterNum: number;
	skinCode: number;
	characterLevel: number;
	gameRank: number;
	playerKill: number;
	playerAssistant: number;
	monsterKill: number;
	bestWeapon: number;
	bestWeaponLevel: number;
	masteryLevel: Record<Numeric, number>;
	equipment: Record<Numeric, number>;
	versionMajor: number;
	versionMinor: number;
	language: ErLanguages;
	skillLevelInfo: Record<Numeric, number>;
	skillOrderInfo: Record<Numeric, number>;
	serverName: string;
	maxHp: number;
	maxSp: number;
	attackPower: number;
	defense: number;
	hpRegen: number;
	spRegen: number;
	attackSpeed: number;
	moveSpeed: number;
	outOfCombatMoveSpeed: number;
	sightRange: number;
	attackRange: number;
	criticalStrikeChance: number;
	criticalStrikeDamage: number;
	coolDownReduction: number;
	lifeSteal: number;
	normalLifeSteal: number;
	amplifierToMoster: number;
	trapDamage: number;
	bonusCoin: number;
	gainExp: number;
	baseExp: number;
	startDtm: DateTime;
	duration: Seconds;
	playTime: Seconds;
	watchTime: Seconds;
	totalTime: Seconds;
	survivableTime: Seconds;
	botAdded: number;
	botRemain: number;
	restrictedAreaAccelerated: number;
	safeAreas: number;
	teamNumber: number;
	preMade: number;
	eventMissionResult: unknown;
	gainedNormalMmrKFactor: number;
	victory: number;
	craftUncommon: number;
	craftRate: number;
	craftEpic: number;
	craftLegend: number;
} & {
	[key in `${'damageToPlayer' | 'damageFromPlayer' | 'damageToMonster'}_${ErDamageTypes}`]: number;
} & {
	damageFromMoster: number;
	damageToPlayer_Shield: number;
	damageOffsetedByShield_Player: number;
	damageOffsetedByShield_Monster: number;
	killMonsters: Record<Numeric, number>;
	healAmount: number;
	teamRecover: number;
	protectAbsorb: number;
	addSurveillanceCamera: number;
	removeTelephotoCamera: number;
	useHyperLoop: number;
	useSecurityConsole: number;
	giveUp: number;
	teamSpectator: number;
	routeIdOfStart: number;
	routeSlotId: number;
	placeOfStart: Numeric;
	matchSize: number;
	teamKill: number;
	totalFieldKill: number;
	accountLevel: number;
	killerUserNumber: number;
	killer: ErPlayerTypes;
	killDetail: string;
	causeOfDeath: string;
	placeOfDeath: Numeric;
	killerCharacter: string;
	killerWeapon: string;
	killerUserNum2: number;
	killerUserNum3: number;
	fishingCount: number;
	useEmoticonCount: number;
	expireDtm: DateTime;
	traitFirstCore: number;
	traitFirstSub: number[];
	traitSecondSub: number[];
	airSupplyOpenCount: number[];
	foodCraftCount: number[];
	beverageCraftCount: number[];
	rankPoint: number;
	totalTurbineTakeOver: number;
	usedNormalHealPack: number;
	usedReinforcedHealPack: number;
	usedNromalShieldPack: number;
	usedReinforcedShieldPack: number;
	totalVFCredits: number[];
	usedVFCredits: number[];
	sumTotalVFCredits: number;
	sumUsedVFCredits: number;
	craftMythic: number;
	playerDeaths: number;
	killGamma: boolean;
	scoredPoint: number[];
	killDetails: JsonLiteral<Record<Numeric, number>>;
	dealDetails: JsonLiteral<Record<Numeric, number>>;
	killsPhaseOne: number;
	killsPhaseTwo: number;
	killsPhaseThree: number;
	deathsPhaseOne: number;
	deathsPhaseTwo: number;
	deathsPhaseThree: number;
	usedPairLoop: number;
	ccTimeToPlayer: number;
	creditSource: Record<ErMatchCreditSources | (string & {__erType: 'erMatch.creditSource'}), unknown>;
	boughtInfusion: JsonLiteral;
	itemTransferredConsole: number[];
	itemTransferredDrone: number[];
	escapeState: number;
	totalDoubleKill: number;
	totalTripleKill: number;
	totalQuadraKill: number;
	totalExtraKill: number;
	collectItemForLog: number[];
	equipFirstItemForLog: Record<Numeric, number[]>;
} & {
	[key in `battleZone${1 | 2 | 3}${'AreaCode' | 'BattleMark' | 'battleZone2BattleMarkCount'}`]: number;
} & {
	[key in `battleZone${1 | 2 | 3}ItemCode`]: number[];
} & {
	battleZoneDeaths: number;
} & {
	[key in `battleZone${1 | 2 | 3}Winner`]: number;
} & {
	tacticalSkillGroup: number;
	tacticalSkillLevel: number;
	totalGainVFCredit: number;
} & {
	[key in `kill${ErMatchEntityTypes | 'ItemBounty' | 'Drone' | 'Turret' | 'Shredder'}`]: number;
} & {
	totalUseVFCredit: number;
	remoteDroneUseVFCreditMySelf: number;
	remoteDroneUseVFCreditAlly: number;
	transferConsoleFromMaterialUseVFCredit: number;
	transferConsoleFromEscapeKeyUseVFCredit: number;
	transferConsoleFromRevivalUseVFCredit: number;
	tacticalSkillUpgradeUseVFCredit: number;
	infusionReRollUseVFCredit: number;
	infusionTraitUseVFCredit: number;
	infusionRelicUseVFCredit: number;
	infusionStoreUseVFCredit: number;
	teamElimination: number;
	teamDown: number;
	teamBattleZoneDown: number;
	teamRepeatDown: number;
	adaptiveForce: number;
	adaptiveForceAttack: number;
	adaptiveForceAmplify: number;
	skillAmp: number;
	campFireCraftUncommon: number;
	campFireCraftRate: number;
	campFireCraftEpic: number;
	campFireCraftLegendary: number;
	cobaltRandomPickRemoveCharacter: number;
	tacticalSkillUseCount: number;
	creditRevivalCount: number;
	creditRevivedOthersCount: number;
	timeSpentInBriefingRoom: Seconds;
	IsLeavingBeforeCreditRevivalTerminate: boolean;
	crGetAnimal: number;
	crGetMutant: number;
	crGetPhaseStart: number;
	crGetKill: number;
	crGetTimeElapsed: number;
	crGetCreditBonus: number;
	crUseRemoteDrone: number;
	crUseUpgradeTacticalSkill: number;
	crUseTreeOfLife: number;
	crUseMeteorite: number;
	crUseMythril: number;
	crUseForceCore: number;
	crUseVFBloodSample: number;
	crUseActivationModule: number;
	crUseRootkit: number;
	mmrGainInGame: number;
	mmrLossEntryCost: number;
	premadeMatchingType: number;
	viewContribution: number;
	useReconDrone: number;
	useEmpDrone: number;
	exceptPreMadeTeam: boolean;
	isLeavingBeforeCreditRevivalTermiate: boolean;
};

export type ErMatchByUserIdResponse = ErEmptyResponse & {
	userGames: ErMatch[];
	next: number;
};

/**
 * Get matches joined by the user
 * @param this ErClient
 * @param userId The user id to query matches
 * @param next An optional pagination parameter can be retrieved by a previous request
 * @returns An array of the match joined by the user
 */
export async function getMatchesByUserId(this: ErClient, userId: number, next?: number) {
	let url = `user/games/${userId}`;

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
 * @param this ErClient
 * @param matchId The match id
 * @param next An optional pagination parameter can be retrieved by a previous request
 * @returns An array of match data in each participated user's perspective
 */
export async function getMatchesByMatchId(this: ErClient, matchId: number, next?: number) {
	let url = `games/${matchId}`;

	if (next !== undefined) {
		url += '?' + QueryString.stringify({
			next,
		});
	}

	const response = await this.fetcher.get(url);
	const json = await response.json<ErMatchByUserIdResponse>();

	return json;
}
