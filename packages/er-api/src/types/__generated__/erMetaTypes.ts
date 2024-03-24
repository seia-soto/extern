/* eslint-disable */
export type ErMetaTypes = 'ActionCost' |
'Area' |
'BattleZoneReward' |
'BulletCapacity' |
'Character' |
'CharacterAttributes' |
'CharacterExp' |
'CharacterLevelUpStat' |
'CharacterMastery' |
'CharacterModeModifier' |
'CharacterSkin' |
'Collectible' |
'DropGroup' |
'GainExp' |
'GainScore' |
'GameTip' |
'HowToFindItem' |
'InfusionProduct' |
'ItemArmor' |
'ItemConsumable' |
'ItemMisc' |
'ItemSearchOptionV2' |
'ItemSpawn' |
'ItemSpecial' |
'ItemWeapon' |
'Level' |
'LoadingTip' |
'MasteryExp' |
'MasteryLevel' |
'MasteryStat' |
'Monster' |
'MonsterDropGroup' |
'MonsterLevelUpStat' |
'MonsterSpawnLevel' |
'NaviCollectAndHunt' |
'NearByArea' |
'RandomEquipment' |
'RecommendedList' |
'Season' |
'SummonObjectStat' |
'TacticalSkillSet' |
'TacticalSkillSetGroup' |
'Trait' |
'TransferConsole' |
'VFCredit' |
'WeaponTypeInfo' |
(string & {__erType: 'erMetaTypes'});

export type ErMetaDataActionCost = {
	code: number;
	type: string;
	sp: number;
	time1: number;
	time2: number;
	actionWaitTime: number;
	castingAnimTrigger: string;
	effectCancelCondition: string;
	castingBarImgName: string;
};

export type ErMetaDataArea = {
	code: number;
	name: string;
	modeType: number;
	maskCode: number;
	startingArea: boolean;
	areaType: string;
	isProvideCollectibleItem: boolean;
	routeCalcBitCode: number;
	isHyperLoopInstalled: boolean;
};

export type ErMetaDataBattleZoneReward = {
	code: number;
	modeType: number;
	areaAttributesCreateEventCount: number;
	itemCode: number;
	type: string;
	value: number;
	selectable: boolean;
};

export type ErMetaDataBulletCapacity = {
	itemCode: number;
	capacity: number;
	loadType: string;
	time: number;
	initCount: number;
	count: number;
};

export type ErMetaDataCharacter = {
	code: number;
	name: string;
	maxHp: number;
	maxSp: number;
	strLearnStartSkill: string;
	strUsePointLearnStartSkill: string;
	initExtraPoint: number;
	maxExtraPoint: number;
	attackPower: number;
	defense: number;
	skillAmp: number;
	adaptiveForce: number;
	criticalStrikeChance: number;
	hpRegen: number;
	spRegen: number;
	attackSpeed: number;
	attackSpeedRatio: number;
	increaseBasicAttackDamageRatio: number;
	skillAmpRatio: number;
	preventBasicAttackDamagedRatio: number;
	preventSkillDamagedRatio: number;
	attackSpeedLimit: number;
	attackSpeedMin: number;
	moveSpeed: number;
	sightRange: number;
	radius: number;
	pathingRadius: number;
	uiHeight: number;
	initStateDisplayIndex: number;
	localScaleInCutscene: number;
	localScaleInVictoryScene: string;
	resource: string;
	lobbySubObject: string;
};

export type ErMetaDataCharacterAttributes = {
	character: string;
	characterCode: number;
	mastery: string;
	controlDifficulty: number;
	attack: number;
	defense: number;
	disruptor: number;
	move: number;
	assistance: number;
};

export type ErMetaDataCharacterExp = {
	level: number;
	levelUpExp: number;
};

export type ErMetaDataCharacterLevelUpStat = {
	code: number;
	name: string;
	maxHp: number;
	maxSp: number;
	attackPower: number;
	defense: number;
	skillAmp: number;
	adaptiveForce: number;
	criticalChance: number;
	hpRegen: number;
	spRegen: number;
	attackSpeed: number;
	moveSpeed: number;
	attackSpeedRatio: number;
	increaseBasicAttackDamageRatio: number;
	skillAmpRatio: number;
	preventBasicAttackDamagedRatio: number;
	preventSkillDamagedRatio: number;
};

export type ErMetaDataCharacterMastery = {
	code: number;
	weapon1: string;
	weapon2: string;
	weapon3: string;
	weapon4: string;
	combat1: string;
	combat2: string;
	survival1: string;
	survival2: string;
	survival3: string;
};

export type ErMetaDataCharacterModeModifier = {
	characterCode: number;
	weaponType: string;
	soloIncreaseModeDamageRatio: number;
	soloPreventModeDamageRatio: number;
	soloIncreaseModeHealRatio: number;
	soloIncreaseModeShieldRatio: number;
	duoIncreaseModeDamageRatio: number;
	duoPreventModeDamageRatio: number;
	duoIncreaseModeHealRatio: number;
	duoIncreaseModeHealerGiveHealRatio: number;
	duoIncreaseModeShieldRatio: number;
	duoIncreaseModeHealerGiveShieldRatio: number;
	squadIncreaseModeDamageRatio: number;
	squadPreventModeDamageRatio: number;
	squadIncreaseModeHealRatio: number;
	squadIncreaseModeHealerGiveHealRatio: number;
	squadIncreaseModeShieldRatio: number;
	squadIncreaseModeHealerGiveShieldRatio: number;
	cobaltIncreaseModeDamageRatio: number;
	cobaltPreventModeDamageRatio: number;
	cobaltIncreaseModeHealRatio: number;
	cobaltIncreaseModeHealerGiveHealRatio: number;
	cobaltIncreaseModeShieldRatio: number;
	cobaltIncreaseModeHealerGiveShieldRatio: number;
	cobaltIncreaseModeUltCooldownRatio: number;
	cobaltIncreaseModeMaxSpRatio: number;
	cobaltIncreaseModeSpRegenRatio: number;
	soloIncreaseModeDamageToMonsterRatio: number;
	duoIncreaseModeDamageToMonsterRatio: number;
	squadIncreaseModeDamageToMonsterRatio: number;
	cobaltIncreaseModeDamageToMonsterRatio: number;
};

export type ErMetaDataCharacterSkin = {
	name: string;
	code: number;
	characterCode: number;
	index: number;
	grade: number;
	eventFree: boolean;
	purchaseType: string;
	effectsPath: string;
	projectilesPath: string;
	objectPath: string;
	fxSoundPath: string;
	voicePath: string;
	weaponMountPath: string;
	weaponMountCommonPath: string;
	indicatorPath: string;
	projectilesDeflectorPath: string;
};

export type ErMetaDataCollectible = {
	code: number;
	cooldown: number;
	itemCode1: string;
	itemCode2: string;
	probability1: number;
	probability2: number;
	dropCount: number;
	castingActionType: string;
};

export type ErMetaDataDropGroup = {
	groupCode: number;
	itemCode: string;
	min: number;
	max: number;
	probability: number;
	dropType: string;
};

export type ErMetaDataGainExp = {
	startTime: number;
	endTime: number;
	gainExp: number;
};

export type ErMetaDataGainScore = {
	code: number;
	phase: number;
	conditionType: string;
	conditionValue: number;
	pointsEnemy: number;
	pointsAlly: number;
};

export type ErMetaDataGameTip = {
	key: number;
	code: number;
	gameTipType: string;
	gameTipCategory: string;
	sequence: number;
	titleTextKey: string;
	contentTextKey: string;
	imageName: string;
	'##참고': string;
	link: string;
};

export type ErMetaDataHowToFindItem = {
	code: number;
	itemCode: number;
	huntChicken: number;
	huntBat: number;
	huntBoar: number;
	huntWildDog: number;
	huntWolf: number;
	huntBear: number;
	huntWickline: number;
	huntAlpha: number;
	huntOmega: number;
	collectibleCode: number;
	airSupply: number;
};

export type ErMetaDataInfusionProduct = {
	code: number;
	productType: string;
	productGroup: number;
	productCode: number;
	storeType: string;
	stockType: string;
	stock: number;
	isRestore: boolean;
	price: number;
	specialWeight: number;
	weight: number;
	requirement: number;
	icon: string;
	simpleIcon: string;
	alertInSpectator: boolean;
	characterCodes: string;
};

export type ErMetaDataItemArmor = {
	code: number;
	name: string;
	modeType: number;
	itemType: string;
	armorType: string;
	itemGrade: string;
	isCompletedItem: boolean;
	alertInSpectator: boolean;
	markingType: string;
	craftAnimTrigger: string;
	stackable: number;
	initialCount: number;
	itemUsableType: string;
	itemUsableValueList: number;
	exclusiveProducer: number;
	isRemovedFromPlayerCorpseInventoryWhenPlayerKilled: boolean;
	makeMaterial1: number;
	makeMaterial2: number;
	notDisarm: boolean;
	manufacturableType: number;
	attackPower: number;
	attackPowerByLv: number;
	defense: number;
	defenseByLv: number;
	skillAmp: number;
	skillAmpByLevel: number;
	skillAmpRatio: number;
	skillAmpRatioByLevel: number;
	adaptiveForce: number;
	adaptiveForceByLevel: number;
	maxHp: number;
	maxHpByLv: number;
	maxSp: number;
	hpRegenRatio: number;
	hpRegen: number;
	spRegenRatio: number;
	spRegen: number;
	attackSpeedRatio: number;
	attackSpeedRatioByLv: number;
	criticalStrikeChance: number;
	criticalStrikeDamage: number;
	preventCriticalStrikeDamaged: number;
	cooldownReduction: number;
	cooldownLimit: number;
	lifeSteal: number;
	normalLifeSteal: number;
	skillLifeSteal: number;
	moveSpeed: number;
	moveSpeedOutOfCombat: number;
	sightRange: number;
	attackRange: number;
	increaseBasicAttackDamage: number;
	increaseBasicAttackDamageByLv: number;
	preventBasicAttackDamaged: number;
	preventBasicAttackDamagedByLv: number;
	preventBasicAttackDamagedRatio: number;
	preventBasicAttackDamagedRatioByLv: number;
	increaseBasicAttackDamageRatio: number;
	increaseBasicAttackDamageRatioByLv: number;
	preventSkillDamaged: number;
	preventSkillDamagedByLv: number;
	preventSkillDamagedRatio: number;
	preventSkillDamagedRatioByLv: number;
	penetrationDefense: number;
	penetrationDefenseRatio: number;
	trapDamageReduce: number;
	trapDamageReduceRatio: number;
	hpHealedIncreaseRatio: number;
	healerGiveHpHealRatio: number;
	uniqueAttackRange: number;
	uniqueHpHealedIncreaseRatio: number;
	uniqueCooldownLimit: number;
	uniqueTenacity: number;
	uniqueMoveSpeed: number;
	uniquePenetrationDefense: number;
	uniquePenetrationDefenseRatio: number;
	uniqueLifeSteal: number;
	uniqueSkillAmpRatio: number;
	restoreItemWhenResurrected: boolean;
	creditValueWhenConvertedToBounty: number;
};

export type ErMetaDataItemConsumable = {
	code: number;
	name: string;
	modeType: number;
	itemType: string;
	consumableType: string;
	consumableTag: string;
	itemGrade: string;
	isCompletedItem: boolean;
	alertInSpectator: boolean;
	markingType: string;
	craftAnimTrigger: string;
	stackable: number;
	initialCount: number;
	itemUsableType: string;
	itemUsableValueList: number;
	exclusiveProducer: number;
	isRemovedFromPlayerCorpseInventoryWhenPlayerKilled: boolean;
	manufacturableType: number;
	makeMaterial1: number;
	makeMaterial2: number;
	heal: number;
	hpRecover: number;
	spRecover: number;
	attackPowerByBuff: number;
	defenseByBuff: number;
	skillAmpByBuff: number;
	skillAmpRatioByBuff: number;
	addStateCode: number;
	isVPadQuickSlotItem: boolean;
	restoreItemWhenResurrected: boolean;
	creditValueWhenConvertedToBounty: number;
	isReduceLootOnDeath: boolean;
};

export type ErMetaDataItemMisc = {
	code: number;
	name: string;
	modeType: number;
	itemType: string;
	miscItemType: string;
	itemGrade: string;
	gradeBgOverride: string;
	isCompletedItem: boolean;
	alertInSpectator: boolean;
	markingType: string;
	craftAnimTrigger: string;
	stackable: number;
	initialCount: number;
	itemUsableType: string;
	itemUsableValueList: number;
	exclusiveProducer: number;
	isRemovedFromPlayerCorpseInventoryWhenPlayerKilled: boolean;
	manufacturableType: number;
	makeMaterial1: number;
	makeMaterial2: number;
	restoreItemWhenResurrected: boolean;
	creditValueWhenConvertedToBounty: number;
};

export type ErMetaDataItemSearchOptionV2 = {
	code: number;
	name: string;
	attackPowerSearch: boolean;
	attackSpeedSearch: boolean;
	criticalStrikeSearch: boolean;
	lifeStealSearch: boolean;
	normalAttackIncreaseSearch: boolean;
	skillAttackIncreaseSearch: boolean;
	cooldownReductionSearch: boolean;
	maxSpSearch: boolean;
	spRegenSearch: boolean;
	defenseSearch: boolean;
	maxHpSearch: boolean;
	hpRegenSearch: boolean;
	damageReductionSearch: boolean;
	moveSpeedSearch: boolean;
	sightRangeSearch: boolean;
	tag1: string;
	tag2: string;
	tag3: string;
};

export type ErMetaDataItemSpawn = {
	code: number;
	areaCode: number;
	areaSpawnGroup: number;
	itemCode: number;
	dropPoint: string;
	dropCount: number;
};

export type ErMetaDataItemSpecial = {
	code: number;
	name: string;
	modeType: number;
	itemType: string;
	specialItemType: string;
	itemGrade: string;
	isCompletedItem: boolean;
	alertInSpectator: boolean;
	markingType: string;
	craftAnimTrigger: string;
	stackable: number;
	initialCount: number;
	cooldownGroupCode: number;
	cooldown: number;
	itemUsableType: string;
	itemUsableValueList: number;
	exclusiveProducer: number;
	isRemovedFromPlayerCorpseInventoryWhenPlayerKilled: boolean;
	manufacturableType: number;
	makeMaterial1: number;
	makeMaterial2: number;
	consumeCount: number;
	summonCode: number;
	ghostItemStateGroup: number;
	isVPadQuickSlotItem: boolean;
	restoreItemWhenResurrected: boolean;
	creditValueWhenConvertedToBounty: number;
	isReduceLootOnDeath: boolean;
};

export type ErMetaDataItemWeapon = {
	code: number;
	name: string;
	modeType: number;
	itemType: string;
	weaponType: string;
	itemGrade: string;
	gradeBgOverride: string;
	isCompletedItem: boolean;
	alertInSpectator: boolean;
	markingType: string;
	craftAnimTrigger: string;
	stackable: number;
	initialCount: number;
	itemUsableType: string;
	itemUsableValueList: number;
	exclusiveProducer: number;
	isRemovedFromPlayerCorpseInventoryWhenPlayerKilled: boolean;
	makeMaterial1: number;
	makeMaterial2: number;
	notDisarm: boolean;
	consumable: boolean;
	manufacturableType: number;
	attackPower: number;
	attackPowerByLv: number;
	defense: number;
	defenseByLv: number;
	skillAmp: number;
	skillAmpByLevel: number;
	skillAmpRatio: number;
	skillAmpRatioByLevel: number;
	adaptiveForce: number;
	adaptiveForceByLevel: number;
	maxHp: number;
	maxHpByLv: number;
	hpRegenRatio: number;
	hpRegen: number;
	maxSP: number;
	spRegenRatio: number;
	spRegen: number;
	attackSpeedRatio: number;
	attackSpeedRatioByLv: number;
	criticalStrikeChance: number;
	criticalStrikeDamage: number;
	cooldownReduction: number;
	preventCriticalStrikeDamaged: number;
	cooldownLimit: number;
	lifeSteal: number;
	normalLifeSteal: number;
	skillLifeSteal: number;
	moveSpeed: number;
	moveSpeedOutOfCombat: number;
	sightRange: number;
	attackRange: number;
	increaseBasicAttackDamage: number;
	increaseBasicAttackDamageByLv: number;
	increaseBasicAttackDamageRatio: number;
	increaseBasicAttackDamageRatioByLv: number;
	preventBasicAttackDamaged: number;
	preventBasicAttackDamagedByLv: number;
	preventBasicAttackDamagedRatio: number;
	preventBasicAttackDamagedRatioByLv: number;
	preventSkillDamaged: number;
	preventSkillDamagedByLv: number;
	preventSkillDamagedRatio: number;
	preventSkillDamagedRatioByLv: number;
	penetrationDefense: number;
	penetrationDefenseRatio: number;
	trapDamageReduce: number;
	trapDamageReduceRatio: number;
	hpHealedIncreaseRatio: number;
	healerGiveHpHealRatio: number;
	uniqueAttackRange: number;
	uniqueHpHealedIncreaseRatio: number;
	uniqueCooldownLimit: number;
	uniqueTenacity: number;
	uniqueMoveSpeed: number;
	uniquePenetrationDefense: number;
	uniquePenetrationDefenseRatio: number;
	uniqueLifeSteal: number;
	uniqueSkillAmpRatio: number;
	restoreItemWhenResurrected: boolean;
	creditValueWhenConvertedToBounty: number;
};

export type ErMetaDataLevel = {
	level: number;
	needExp: number;
	accumulateExp: number;
	rewardAcoin: number;
	reward: number;
};

export type ErMetaDataLoadingTip = {
	code: number;
	loadingTipType: string;
	minLv: number;
	maxLv: number;
	textKey: string;
	imageName: string;
};

export type ErMetaDataMasteryExp = {
	code: number;
	modeType: number;
	conditionType: string;
	grade: string;
	conditionValue: number;
	masteryType1: string;
	value1: number;
	masteryType2: string;
	value2: number;
	masteryType3: string;
	value3: number;
};

export type ErMetaDataMasteryLevel = {
	code: number;
	type: string;
	masteryLevel: number;
	nextMasteryExp: number;
	giveLevelExp: number;
	expGrowthCapRatio: number;
};

export type ErMetaDataMasteryStat = {
	code: number;
	type: string;
	characterCode: number;
	firstOption: string;
	firstOptionSection1Value: number;
	firstOptionSection2Value: number;
	firstOptionSection3Value: number;
	firstOptionSection4Value: number;
	secondOption: string;
	secondOptionSection1Value: number;
	secondOptionSection2Value: number;
	secondOptionSection3Value: number;
	secondOptionSection4Value: number;
	thirdOption: string;
	thirdOptionSection1Value: number;
	thirdOptionSection2Value: number;
	thirdOptionSection3Value: number;
	thirdOptionSection4Value: number;
};

export type ErMetaDataMonster = {
	Code: number;
	monster: string;
	isMutant: boolean;
	grade: string;
	mode: number;
	createDay: string;
	createTime: number;
	regenTime: number;
	levelUpPeriod: number;
	levelUpAmount: number;
	levelUpMax: number;
	maxHp: number;
	maxEp: number;
	initExtraPoint: number;
	attackPower: number;
	defense: number;
	attackSpeed: number;
	moveSpeed: number;
	sightRange: number;
	chasingRange: number;
	attackRange: number;
	firstAttackRange: number;
	aggressive: string;
	detectInvisible: boolean;
	radius: number;
	pathingRadius: number;
	uiHeight: number;
	gainExp: number;
	targetOnRange: number;
	randomDropCount: number;
	resource: string;
	corpseResource: string;
	appearTime: number;
};

export type ErMetaDataMonsterDropGroup = {
	monsterCode: number;
	monsterLevel: number;
	dropGroup: number;
};

export type ErMetaDataMonsterLevelUpStat = {
	code: number;
	monster: string;
	mode: number;
	maxHp: number;
	attackPower: number;
	defense: number;
	moveSpeed: number;
	gainExp: number;
};

export type ErMetaDataMonsterSpawnLevel = {
	code: number;
	mode: number;
	playerLevel: number;
	monsterCode: number;
	spawnLevel: number;
};

export type ErMetaDataNaviCollectAndHunt = {
	code: number;
	itemCode: number;
	areaCodeList: string;
};

export type ErMetaDataNearByArea = {
	code: number;
	areaCode: number;
	nearByAreaCode: number;
};

export type ErMetaDataRandomEquipment = {
	code: number;
	group: string;
	itemcode: number;
	weight: number;
	itemGrade: string;
	tagMultiplier: number;
	characterNum: number;
};

export type ErMetaDataRecommendedList = {
	code: number;
	character: string;
	characterCode: number;
	mastery: string;
	startWeapon: number;
	cobaltStartWeapon: number;
	startItemGroupCode: number;
	cobaltDraft: number;
	cobaltExtraDraft: string;
	cobaltCanChooseWeapon: boolean;
	favoriteMainTag: string;
};

export type ErMetaDataSeason = {
	seasonID: number;
	seasonName: string;
	seasonStart: string;
	seasonEnd: string;
	isCurrent: number;
};

export type ErMetaDataSummonObjectStat = {
	code: number;
	name: string;
	duration: number;
	createRange: number;
	pileRange: number;
	createVisibleTime: number;
	createStealthTime: number;
	infiltrationTime: number;
	detectionRange: number;
	maxHp: number;
	maxSp: number;
	initExtraPoint: number;
	maxExtraPoint: number;
	attackPower: number;
	defense: number;
	criticalStrikeChance: number;
	hpRegen: number;
	spRegen: number;
	rangeRadius: number;
	attackSpeed: number;
	attackRange: number;
	attackDelay: number;
	moveSpeed: number;
	radius: number;
	uiHeight: number;
	sightRange: number;
	sightAngle: number;
};

export type ErMetaDataTacticalSkillSet = {
	code: number;
	nextUpgradecode: number;
	upgradeCredit: number;
	upgradeMaterial: number;
	skillCode: number;
};

export type ErMetaDataTacticalSkillSetGroup = {
	group: number;
	modeType: number;
	startCode: number;
	equipWithStart: boolean;
	icon: string;
};

export type ErMetaDataTrait = {
	code: number;
	openAccountLv: number;
	traitGroup: string;
	traitType: string;
	active: boolean;
};

export type ErMetaDataTransferConsole = {
	itemCode: number;
	mode: number;
	itemType: string;
	transferTimeSafeArea: number;
	subtractTrasferTimeRestrictedArea: number;
	manufactureCooldown: number;
	availableTimeForPurchase: number;
	consumeVFCredit: number;
	limitCount: number;
	traitSale: boolean;
};

export type ErMetaDataVFCredit = {
	code: number;
	mode: number;
	phase: number;
	conditionType: string;
	conditionValue: number;
	acquireSelf: number;
	acquireTeam: number;
};

export type ErMetaDataWeaponTypeInfo = {
	type: string;
	attackSpeed: number;
	attackRange: number;
	shopFilter: number;
	summonObjectHitDamage: number;
};

export type ErMetaData = ErMetaDataActionCost |
ErMetaDataArea |
ErMetaDataBattleZoneReward |
ErMetaDataBulletCapacity |
ErMetaDataCharacter |
ErMetaDataCharacterAttributes |
ErMetaDataCharacterExp |
ErMetaDataCharacterLevelUpStat |
ErMetaDataCharacterMastery |
ErMetaDataCharacterModeModifier |
ErMetaDataCharacterSkin |
ErMetaDataCollectible |
ErMetaDataDropGroup |
ErMetaDataGainExp |
ErMetaDataGainScore |
ErMetaDataGameTip |
ErMetaDataHowToFindItem |
ErMetaDataInfusionProduct |
ErMetaDataItemArmor |
ErMetaDataItemConsumable |
ErMetaDataItemMisc |
ErMetaDataItemSearchOptionV2 |
ErMetaDataItemSpawn |
ErMetaDataItemSpecial |
ErMetaDataItemWeapon |
ErMetaDataLevel |
ErMetaDataLoadingTip |
ErMetaDataMasteryExp |
ErMetaDataMasteryLevel |
ErMetaDataMasteryStat |
ErMetaDataMonster |
ErMetaDataMonsterDropGroup |
ErMetaDataMonsterLevelUpStat |
ErMetaDataMonsterSpawnLevel |
ErMetaDataNaviCollectAndHunt |
ErMetaDataNearByArea |
ErMetaDataRandomEquipment |
ErMetaDataRecommendedList |
ErMetaDataSeason |
ErMetaDataSummonObjectStat |
ErMetaDataTacticalSkillSet |
ErMetaDataTacticalSkillSetGroup |
ErMetaDataTrait |
ErMetaDataTransferConsole |
ErMetaDataVFCredit |
ErMetaDataWeaponTypeInfo;
