/* eslint-disable */
export type ErMetaTypes = 'Achievement' |
'ActionCost' |
'ActionCost_Light' |
'Area' |
'AreaAttributes' |
'AreaSound' |
'BattlePassMission' |
'BattlePassReward' |
'BattlePassRewardItem' |
'BattleZoneReward' |
'BattlefieldArea' |
'Booster' |
'BotAiModel' |
'BotCraft' |
'BotMastery' |
'BotNickName' |
'BotSkillBuild' |
'BulletCapacity' |
'BulletCapacity_Light' |
'Character' |
'CharacterAttributes' |
'CharacterExp' |
'CharacterLevelUpStat' |
'CharacterMastery' |
'CharacterMastery의 사본' |
'CharacterModeModifier' |
'CharacterModeModifier_Light' |
'CharacterSkillVideos' |
'CharacterSkin' |
'CharacterState' |
'CharacterStateGroup' |
'CharacterVoice' |
'CharacterVoiceRandomCount' |
'Character_Light' |
'CobaltWall' |
'Collectible' |
'ContentOpen' |
'ControlTypeUse' |
'CriticalChance' |
'DeployingPoint' |
'DiceConsumableSheet' |
'DiceItemSheet' |
'DropGroup' |
'DropGroup_Light' |
'EffectAndSound' |
'EliteMonsterSpawn' |
'Emblem' |
'Emotion' |
'EventRewardUser' |
'FootStep' |
'GainExp' |
'GainScore' |
'GameBattleStar' |
'GameConstant' |
'GameRankExp' |
'GameTip' |
'Goods' |
'HealPack' |
'HookLineProjectile' |
'HowToFindItem' |
'HyperSynthesisDevice' |
'InfusionProduct' |
'ItemArmor' |
'ItemConsumable' |
'ItemConsumable_Light' |
'ItemMisc' |
'ItemMisc_Light' |
'ItemSearchOption' |
'ItemSearchOptionV2' |
'ItemSkill' |
'ItemSkillGroup' |
'ItemSkillLinker' |
'ItemSpawn' |
'ItemSpecial' |
'ItemSpecial_Light' |
'ItemWeapon' |
'KeyText' |
'Level' |
'LoadingTip' |
'LowestRankAdjust' |
'MasteryExp' |
'MasteryLevel' |
'MasteryStat' |
'MatchingQueueTier' |
'Mission' |
'ModRestrictedArea' |
'Monster' |
'MonsterDropGroup' |
'MonsterLevelUpStat' |
'MonsterLevelUpStat_Light' |
'MonsterSpawnLevel' |
'MonsterSpawnLevel_Light' |
'MonsterVFShard_Light' |
'Monster_Light' |
'MutantMonsterSpawn' |
'NaviCollectAndHunt' |
'NearByArea' |
'Noise' |
'ObjectSkin' |
'Phase' |
'PreMadeTeamTierRestrict' |
'ProductAsset' |
'ProductCharacter' |
'ProductInstant' |
'ProjectileDeflectorSetting' |
'ProjectileSetting' |
'ProjectileSetting_Light' |
'RandomEquipment' |
'RecommendedArea' |
'RecommendedItemList' |
'RecommendedList' |
'ReplicaPoint' |
'RestrictedArea' |
'Reward' |
'RewardItem' |
'RewindProjectile' |
'Season' |
'SeasonOutPlayers' |
'SecurityConsolEvent' |
'ServerRegion' |
'ShopProduct' |
'ShopProductItem' |
'Skill' |
'SkillEvolution' |
'SkillEvolutionPoint' |
'SkillExtension' |
'SkillGroup' |
'SoundGroup' |
'StartItem' |
'SummonObject' |
'SummonObjectGroup' |
'SummonObjectStat' |
'SummonObjectStat_Light' |
'SummonObject_Light' |
'SupportPack' |
'TimeOfDay' |
'TouringObjectData' |
'Trait' |
'TransferConsole' |
'Turbine' |
'TutorialReward' |
'VFCredit' |
'WeaponAnimatorLayers' |
'WeaponMount' |
'WeaponRoute' |
'WeaponTypeInfo' |
(string & {__erType: 'erMetaTypes'});

export type ErMetaDataAchievement = {
	code: number;
	platform: string;
	name: string;
	link: string;
	type: string;
	count: number;
	accumulate: boolean;
	parameter1: string;
	parameter2: string;
	parameter3: string;
	parameter4: string;
};

export type ErMetaDataActionCost = {
	code: number;
	type: string;
	sp: number;
	time: number;
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
};

export type ErMetaDataAreaAttributes = {
	code: number;
	modeType: number;
	areaAttributesType: string;
	areaAttributesGroup: number;
	areaAttributesPhase: string;
	areaAttributesPhaseDuration: number;
	safeZoneCode: number;
	activeLastSafeZone: boolean;
	minimumTeams: number;
	areaRestriction: boolean;
	areaIsolationByBarriers: string;
	captureCheckedInPlayers: boolean;
	addStateEffectToCapturedPlayers: number;
	stateEffectDuringPhase: number;
	penaltyToEscape: string;
	penaltyValueToEscape: number;
	penaltyToStay: string;
	penaltyValueToStay: number;
	canTeleportToTeamMember: boolean;
	canRest: boolean;
};

export type ErMetaDataAreaSound = {
	code: number;
	mode: number;
	condition: string;
	value: number;
	loopDelay: number;
	bGMSound: string;
	transitionSound: string;
	transitionStartTime: number;
	fadeOutTime: number;
	ambiSoundGroupRoom: string;
	ambiSoundGroupDay: string;
	ambiSoundGroupNight: string;
};

export type ErMetaDataBattlePassMission = {
	key: number;
	code: number;
	seq: number;
	gameKind: string;
	achieveType: string;
	type: string;
	conditionType: string;
	conditionItemCode: number;
	check: string;
	count: number;
	rewardId: number;
	tooltipTextKey: string;
	tooltipImageName: string;
};

export type ErMetaDataBattlePassReward = {
	id: number;
	adminDesc: string;
};

export type ErMetaDataBattlePassRewardItem = {
	id: number;
	battlePassID: number;
	passLevel: number;
	rewardId: number;
	itemType: string;
	itemId: number;
	amount: number;
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

export type ErMetaDataBooster = {
	id: number;
	itemCode: number;
	itemType: string;
	itemConsumptionType: number;
	amount: number;
	name: string;
	sprite: string;
};

export type ErMetaDataBotAiModel = {
	id: string;
	model: string;
};

export type ErMetaDataBotCraft = {
	craftSetPoint: number;
	type: string;
	easy: string;
	normal: string;
	hard: string;
	pvp: string;
};

export type ErMetaDataBotMastery = {
	masterySetPoint: number;
	type: string;
	easy: number;
	normal: number;
	hard: number;
	pvp: number;
};

export type ErMetaDataBotNickName = {
	botNickName: string;
	serverRegion: string;
};

export type ErMetaDataBotSkillBuild = {
	characterCode: number;
	easy: string;
	normal: string;
	hard: string;
	pvp: string;
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
	attackSpeedLimit: number;
	attackSpeedMin: number;
	moveSpeed: number;
	sightRange: number;
	radius: number;
	pathingRadius: number;
	uiHeight: number;
	initStateDisplayIndex: number;
	localScaleInCutscene: number;
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
};

export type ErMetaDataCharacterMastery = {
	code: number;
	weapon1: string;
	weapon2: string;
	weapon3: string;
	weapon4: string;
	exploration1: string;
	exploration2: string;
	exploration3: string;
	exploration4: string;
	survival1: string;
	survival2: string;
	survival3: string;
	survival4: string;
};

export type ErMetaDataCharacterModeModifier = {
	code: number;
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

export type ErMetaDataCharacterSkillVideos = {
	code: number;
	resource: string;
	otherPlatFormUrl: string;
	volume: number;
};

export type ErMetaDataCharacterSkin = {
	name: string;
	code: number;
	characterCode: number;
	index: number;
	grade: number;
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

export type ErMetaDataCharacterState = {
	code: number;
	group: number;
	level: number;
	duration: number;
	maxStack: number;
	calculatorParameter: number;
	nonCalculateStatType: string;
	nonCalculateStatValue: number;
	statType1: string;
	statValue1: number;
	coefStatType1: string;
	coefStatValue1: number;
	statType2: string;
	statValue2: number;
	coefStatType2: string;
	coefStatValue2: number;
	forcedMoveSpeed: number;
	canReserve: boolean;
	overrideIconName: string;
};

export type ErMetaDataCharacterStateGroup = {
	group: number;
	skillId: string;
	name: string;
	effectType: string;
	stateType: string;
	stateBehaviourType: string;
	statCalculationType: string;
	activateStatCalculatorOnCreate: boolean;
	uiBehaviourType: string;
	uiVisible: boolean;
	showFloatingUI: boolean;
	onlyShowMine: boolean;
	defaultStack: number;
	showStackType: string;
	isAllRemoveStackWhenExpire: boolean;
	notCheckCasterId: boolean;
	removeOnDyingCondition: boolean;
	removeOnDead: boolean;
	isAddStateOnDead: boolean;
	forcedMoveSpeedType: string;
	casterDebuffCombatTargetOn: boolean;
	targetDebuffCombatTargetOn: boolean;
	debuffCombatMode: boolean;
	sharedSightRange: number;
	eventOnCooldownCheat: string;
	iconName: string;
	canImmuned: boolean;
	exceptionStateWhenRemoveDebuffAll: boolean;
	notCheckUntargetable: boolean;
	startEffectAndSound: string;
	startEffectAndSoundRemoveWhenStateRemove: boolean;
	finishEffectAndSound: string;
	lockSkillIdList: string;
	statCoefSubject: string;
	lockMoveAction: boolean;
	lockStopAction: boolean;
};

export type ErMetaDataCharacterVoice = {
	code: number;
	useCase: string;
	battlePlaying: boolean;
	globalCoolTime: number;
	useCaseMinCoolTime: number;
	useCaseMaxCoolTime: number;
	onceRepeatIgnore: boolean;
	maxCount: number;
	spatial3D: boolean;
	listener: string;
	immediatelyPlay: boolean;
	soundName: string;
};

export type ErMetaDataCharacterVoiceRandomCount = {
	code: number;
	characterCode: number;
	skinIndex: number;
	modelIndex: number;
	useCase: string;
	skillGroup: string;
	randomCount: number;
};

export type ErMetaDataCobaltWall = {
	groupCode: number;
	conditionType: string;
	condition: number;
};

export type ErMetaDataCollectible = {
	code: number;
	cooldown: number;
	itemCode: string;
	dropCount: number;
	castingActionType: string;
};

export type ErMetaDataContentOpen = {
	id: number;
	content: string;
	contentOpenType: string;
	openValue: number;
	contentTextKey: string;
};

export type ErMetaDataControlTypeUse = {
	code: number;
	controlItemCode: number;
	interactionObjectCode: number;
	objectStatus: string;
	interactionEventCode: number;
};

export type ErMetaDataCriticalChance = {
	probability: number;
	actualUse: number;
};

export type ErMetaDataDeployingPoint = {
	phase: number;
	deployingPoint: number;
	openGroupsA: number;
	openGroupsB: number;
};

export type ErMetaDataDropGroup = {
	groupCode: number;
	itemCode: number;
	min: number;
	max: number;
	probability: number;
	dropType: string;
};

export type ErMetaDataEffectAndSound = {
	code: number;
	effectPrefabName: string;
	attachParent: boolean;
	isDestroyImmediate: boolean;
	isRemoveParent: boolean;
	effectParentName: string;
	lookAtOnwer: boolean;
	soundMixer: string;
	soundName: string;
	soundMaxDistance: number;
	childSound: boolean;
};

export type ErMetaDataEmblem = {
	itemCode: number;
	itemType: string;
	name: string;
	purchaseType: string;
	useType: string;
	useStartDtm: string;
	useEndDtm: string;
	img: string;
	effect: string;
	isDefault: boolean;
};

export type ErMetaDataEmotion = {
	code: number;
	grade: number;
	purchaseType: string;
	name: string;
	sprite: string;
	prefab: string;
	sound: string;
	inputDelayTime: number;
	defaultSlotType: string;
};

export type ErMetaDataFootStep = {
	code: number;
	material: string;
	groupName: string;
	maxDistance: number;
	specialUsingEvent: boolean;
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

export type ErMetaDataGameBattleStar = {
	level: number;
	normalPoint: number;
	rankingPoint: number;
	cobaltPoint: number;
};

export type ErMetaDataGameConstant = {
	key: string;
	value: boolean;
};

export type ErMetaDataGameRankExp = {
	rank: number;
	normalExp: number;
	rankingExp: number;
	singleExp: number;
	cobaltExp: number;
};

export type ErMetaDataGameTip = {
	key: number;
	code: number;
	gameTipType: string;
	sequence: number;
	titleTextKey: string;
	contentTextKey: string;
	imageName: string;
	link: string;
};

export type ErMetaDataGoods = {
	itemCode: number;
	itemType: string;
	purchaseType: string;
	sprite: string;
	prefab: string;
	name: string;
	grade: number;
	isDefault: boolean;
};

export type ErMetaDataHookLineProjectile = {
	code: number;
	fireLinePrefab: string;
	connectionLinePrefab: string;
	casterLineStickObjectName: string;
	targetLineStickObjectName: string;
	connectionDuration: number;
	connectionMaxRange: number;
	connectionEffectPrefab: string;
	connectionSound: string;
	stretchObjectName: string;
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
	characterNum: number;
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
	canNotBeTakeItemFromCorpse: boolean;
	isCopyableItemToBattleZoneCorpse: boolean;
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
	canNotBeTakeItemFromCorpse: boolean;
	isCopyableItemToBattleZoneCorpse: boolean;
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
	restoreItemWhenResurrected: boolean;
};

export type ErMetaDataItemMisc = {
	code: number;
	name: string;
	modeType: number;
	itemType: string;
	miscItemType: string;
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
	canNotBeTakeItemFromCorpse: boolean;
	isCopyableItemToBattleZoneCorpse: boolean;
	manufacturableType: number;
	makeMaterial1: number;
	makeMaterial2: number;
	restoreItemWhenResurrected: boolean;
};

export type ErMetaDataItemSkill = {
	itemSkillCode: string;
	itemSkillGroup: string;
	skillCodes: string;
	ingameDescriptionKey: string;
	outgameDescriptionKey: string;
	applyWeaponRangeType: string;
	applyHaveType: string;
};

export type ErMetaDataItemSkillGroup = {
	itemSkillGroup: number;
	nameKey: string;
	isUniqueSKill: boolean;
};

export type ErMetaDataItemSkillLinker = {
	itemCode: number;
	activeItemSkillCode: number;
	passiveItemSkillCode1: number;
	passiveItemSkillCode2: number;
	displayCooldownItemSkill: string;
	itemToInventoryCooldown: number;
	itemToEquipmentCooldown: number;
};

export type ErMetaDataItemSpawn = {
	code: number;
	name: string;
	areaType: string;
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
	itemUsableType: string;
	itemUsableValueList: number;
	exclusiveProducer: number;
	canNotBeTakeItemFromCorpse: boolean;
	isCopyableItemToBattleZoneCorpse: boolean;
	manufacturableType: number;
	makeMaterial1: number;
	makeMaterial2: number;
	consumeCount: number;
	summonCode: number;
	restoreItemWhenResurrected: boolean;
};

export type ErMetaDataItemWeapon = {
	code: number;
	name: string;
	modeType: number;
	itemType: string;
	weaponType: string;
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
	canNotBeTakeItemFromCorpse: boolean;
	isCopyableItemToBattleZoneCorpse: boolean;
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
};

export type ErMetaDataKeyText = {
	key: string;
	korean: string;
	english: string;
	japanese: string;
	chineseSimplified: string;
	chineseTraditional: string;
	french: string;
	spanish: string;
	spanishLatin: string;
	portuguese: string;
	portugueseLatin: string;
	indonesian: string;
	german: string;
	russian: string;
	thai: string;
	vietnamse: string;
	italian: string;
	polish: string;
};

export type ErMetaDataLevel = {
	level: number;
	needExp: number;
	accumulateExp: number;
	rewardAcoin: number;
};

export type ErMetaDataLoadingTip = {
	code: number;
	loadingTipType: string;
	minLv: number;
	maxLv: number;
	textKey: string;
	imageName: string;
};

export type ErMetaDataLowestRankAdjust = {
	code: number;
	teamMode: string;
	geBeforeMMR: number;
	ltBeforeMMR: number;
	adjustRank: number;
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
	weaponSkillPoint: number;
	expGrowthCapRatio: number;
};

export type ErMetaDataMasteryStat = {
	code: number;
	type: string;
	characterCode: number;
	option1: string;
	optionValue1: number;
	option2: string;
	optionValue2: number;
	option3: string;
	optionValue3: number;
};

export type ErMetaDataMatchingQueueTier = {
	code: number;
	matchingRegion: string;
	mmrTier: string;
	matchingMode: string;
	teamMode: string;
	mmrMoreThan: number;
	mmrLess: number;
	addBotSec: number;
	addBotMinRoster: number;
	firstPaddingSec: number;
	secondPaddingSec: number;
	thirdPaddingSec: number;
	quickStartMinRoster: number;
	quickStartSec: number;
};

export type ErMetaDataMission = {
	key: number;
	code: number;
	seq: number;
	gameKind: string;
	achieveType: string;
	type: string;
	reqMinLevel: number;
	reqMaxLevel: number;
	conditionType: string;
	conditionItemCode: number;
	check: string;
	count: number;
	rewardAcoin: number;
	rewardExp: number;
	rewardId: string;
	probability: number;
	tooltipTextKey: string;
	tooltipImageName: string;
};

export type ErMetaDataMonster = {
	code: number;
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

export type ErMetaDataMutantMonsterSpawn = {
	code: number;
	monster: string;
	monsterCode: number;
	mutantCreateCountValue: number;
	mutantCreatePercentage: number;
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

export type ErMetaDataNoise = {
	code: number;
	noiseType: string;
	pingRange: number;
	pingChanceRate: number;
	sfxRange: number;
	affectedCooldown: boolean;
};

export type ErMetaDataObjectSkin = {
	code: number;
	source1: string;
	target1: string;
	source2: string;
	target2: string;
	source3: string;
	target3: string;
	source4: string;
	target4: string;
};

export type ErMetaDataPreMadeTeamTierRestrict = {
	tier: string;
	iron: boolean;
	bronze: boolean;
	silver: boolean;
	gold: boolean;
	platinum: boolean;
	diamond: boolean;
	mithril: boolean;
	demigod: boolean;
	eternity: boolean;
};

export type ErMetaDataProjectileDeflectorSetting = {
	code: number;
	prefabName: string;
	positionType: string;
	duration: number;
	collisionCount: number;
	affectCollisionToOwner: boolean;
	affectExplosion: boolean;
	spawnEffectAndSoundCode: number;
	collisionSelfEffectAndSoundCode: number;
	collisionTargetEffectAndSoundCode: number;
	localDestroyDelay: number;
	localBaseHeight: number;
	doHideWithParticleSystem: boolean;
	collisionObjectType: string;
	collisionObjectRadius: number;
	collisionObjectAngle: number;
	collisionObjectWidth: number;
	collisionObjectDepth: number;
	collisionHostileType: number;
};

export type ErMetaDataProjectileSetting = {
	code: number;
	prefabName: string;
	type: string;
	suffixItemCode: boolean;
	enableObjectCollisionCheck: boolean;
	enableObjectCollsionCheckAfterArrival: boolean;
	collisionTypeCanNotBeAttacked: string;
	isPassWall: boolean;
	isUseCurve: boolean;
	duration: number;
	speed: number;
	distance: number;
	lifeTimeAfterArrival: number;
	lifeTimeAfterExplosion: number;
	doHideWithParticleSystem: boolean;
	damageType: string;
	attackSubType: string;
	penetrationCount: number;
	isExplosion: boolean;
	isExplosionWithoutCollision: boolean;
	explosionRadius: number;
	attachEffectAndSoundCode: number;
	shotEffectAndSoundCode: number;
	shotPoint: string;
	serverInterpolationPosition: number;
	hitPoint: string;
	collisionSelfEffectAndSoundCode: number;
	arrivedEffectAndSoundCode: number;
	explosionEffectAndSoundCode: number;
	collisionTargetEffectAndSoundCode: number;
	collisionObjectType: string;
	collisionObjectRadius: number;
	collisionObjectAngle: number;
	collisionObjectWidth: number;
	collisionObjectDepth: number;
	collisionHostileType: number;
	isOnlyPlayerCollision: boolean;
	isBullet: boolean;
	ignoreLocalMoveXZ: boolean;
	localMoveType: string;
	localHighAngleHeight: number;
	localBaseHeight: number;
	isInterpolationLocalGroundHeight: boolean;
	localDestroyDelay: number;
	isShowMiniMapIcon: boolean;
	miniMapIconName: string;
	isDestroyWhenOutSideMap: boolean;
	isCollisionWithProjectileDeflector: boolean;
};

export type ErMetaDataRandomEquipment = {
	code: number;
	group: string;
	itemcode: number;
	weight: number;
	itemGrade: string;
	tag1: string;
	tag2: string;
	tag3: string;
	tagMultiplier: number;
	characterNum: number;
};

export type ErMetaDataRecommendedArea = {
	code: number;
	character: string;
	characterCode: number;
	mastery: string;
	area1Code: number;
	area2Code: number;
	area3Code: number;
	area4Code: number;
	area5Code: number;
	recommend: number;
};

export type ErMetaDataRecommendedItemList = {
	code: number;
	character: string;
	characterCode: number;
	mastery: string;
	recommendItemType: string;
	itemCode: number;
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
	cobaltMainTag: string;
};

export type ErMetaDataRestrictedArea = {
	code: number;
	phase: number;
	mode: number;
	durationSeconds: number;
	finalAreaSafeZoneCode: number;
	escapeAreaSafeZoneCode: number;
	restrictedCount: number;
	battleZoneCount: number;
	battlezoneMarkBonus: number;
	clearCount: number;
	restoreRestrictedCount: number;
	minimumTeams: number;
	addTime: number;
	maxSurvivableTime: number;
	spawnMeteoriteCount: number;
};

export type ErMetaDataReward = {
	id: number;
	adminDesc: string;
	expireDays: number;
};

export type ErMetaDataRewardItem = {
	id: number;
	rewardId: number;
	itemType: string;
	itemId: number;
	amount: number;
};

export type ErMetaDataRewindProjectile = {
	code: number;
	type: string;
	rewindDuration: number;
	distanceAfterRewind: number;
	rotateType: string;
};

export type ErMetaDataSeason = {
	seasonID: number;
	seasonName: string;
	seasonStart: string;
	seasonEnd: string;
	isCurrent: number;
};

export type ErMetaDataSeasonOutPlayers = {
	seasonId: number;
	userNum: number;
};

export type ErMetaDataSecurityConsolEvent = {
	code: number;
	securityConsoleEvent: string;
	objectAnimation: string;
	successRate: number;
	detectionRate: number;
};

export type ErMetaDataServerRegion = {
	code: number;
	name: string;
	region: string;
	pingIP: string;
};

export type ErMetaDataShopProduct = {
	id: number;
	productId: string;
	productName: string;
	productType: string;
	shopType: string;
	purchaseType: string;
	iapProductId: string;
	price: number;
	productItemId: number;
	purchaseCondition: string;
	maxPurchaseCount: string;
	title: string;
	content: string;
	img: string;
	code: number;
	dlcDiscount: number;
	promotionValue1: number;
	promotionValue2: number;
};

export type ErMetaDataShopProductItem = {
	id: number;
	seq: number;
	itemType: string;
	itemCode: number;
	freeAmount: number;
	paidAmount: number;
};

export type ErMetaDataSkill = {
	code: number;
	group: number;
	level: number;
	activeLevel: number;
	cost: number;
	exCost: number;
	cooldown: number;
	sequenceTimeOverCooldown: number;
	stackUseIntervalTime: number;
	initStack: number;
	maxStack: number;
	concentrationCancelCooldown: number;
	range: number;
	innerRange: number;
	length: number;
	width: number;
	angle: number;
	distanceRotateAnchorToCaster: number;
	overrideIconName: string;
};

export type ErMetaDataSkillEvolution = {
	code: number;
	skillEvolutionType: string;
	skillGroup: number;
	prevEvolutionCode: number;
	level: number;
	maxEvolutionLevel: number;
	icon: string;
};

export type ErMetaDataSkillEvolutionPoint = {
	code: number;
	modeType: number;
	characterCode: number;
	conditionType: string;
	conditionValue1: string;
	conditionValue2: string;
	conditionValue3: string;
	conditionValue4: string;
	pointType: string;
	point: number;
	limitPoint: number;
};

export type ErMetaDataSkillGroup = {
	group: number;
	representGroup: number;
	skillId: string;
	passiveSkillId: string;
	name: string;
	castWaysType: string;
	targetType: string;
	castType: string;
	castingBarType: string;
	castingBarAddUpTo: string;
	afterCastingBarType: string;
	afterCastingBarTimeType: string;
	castingTime1: number;
	concentrationTime: number;
	chargingTime: number;
	concentrationBarType: string;
	castingTime2: number;
	inactionFinishDelayTime: number;
	actionFinishDelayTime: number;
	playType: string;
	interruptType: string;
	interruptHandlingType: string;
	canCastingWhileCCState: boolean;
	aggressiveSkill: boolean;
	movementSkill: boolean;
	triggerSkill: boolean;
	costType: string;
	costKey: number;
	exCostType: string;
	exCostKey: number;
	fixedActiveCoolDown: boolean;
	cooldownType: string;
	cooldownStateFinish: number;
	useWeaponRange: boolean;
	stopWhenStartSkill: boolean;
	stopAttackDuring: boolean;
	usePreAttackOrHoldAction: boolean;
	stopWhenCastReserveSkill: boolean;
	startPrevMoveWhenFinishSkill: boolean;
	convertMoveInputWhileSkillPlaying: string;
	canMoveDuringSkillPlaying: boolean;
	waitForSkillStartPossible: boolean;
	additionalAction: string;
	additionalAgainInput: string;
	additionalAgainInputCount: number;
	cooldownForAdditionalAgainInput: number;
	needInputForCast: boolean;
	sequenceIncreaseType: string;
	itemCooldownApply: string;
	sequenceCooldown: number;
	castWaitTime: number;
	evolutionable: boolean;
	stackAble: boolean;
	impossibleDyingConditionTarget: boolean;
	guideline: string;
	subGuideline: string;
	icon: string;
	lockSkillIdList: string;
	showAsDifferentSkill: boolean;
};

export type ErMetaDataSoundGroup = {
	code: number;
	groupName: string;
	fileName: string;
	rate: number;
};

export type ErMetaDataStartItem = {
	code: number;
	modeType: number;
	groupCode: number;
	itemCode: number;
	count: number;
};

export type ErMetaDataSummonObject = {
	code: number;
	group: number;
	name: string;
	objectType: string;
	useWeaponMount: boolean;
	objectStatsType: string;
	castingActionType: string;
	isInvincibility: boolean;
	pickableType: string;
	ignoredFromTrap: boolean;
	isPickingTarget: boolean;
	summonAttackType: string;
	stateEffect: number;
	targetHitEffect: string;
	useAttackerType: string;
	sightShare: boolean;
	sightPassWall: boolean;
	detectShare: boolean;
	detectInvisible: boolean;
	isEmpTarget: boolean;
	canBeHealed: boolean;
	localDestroyDelay: number;
	prefabPath: string;
	childName: string;
	spawnEffectAndSoundCode: number;
	destroyEffectAndSoundCode: number;
	survivorAimType: boolean;
	showMiniMap: boolean;
	isBurstTrigger: boolean;
	customTriggerType: string;
};

export type ErMetaDataSummonObjectGroup = {
	group: number;
	'##Name': string;
	maxCreate: number;
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
};

export type ErMetaDataSupportPack = {
	level: number;
	normalHealPackLevel: number;
	reinforcedHealPackLevel: number;
	normalShieldPackLevel: number;
	reinforcedShieldPackLevel: number;
};

export type ErMetaDataTouringObjectData = {
	code: number;
	touringObjectType: string;
	radius: number;
	pathingRadius: number;
	uiHeight: number;
	appearTime: number;
	isUnstoppable: boolean;
	isAffectedByLifeStealStatus: boolean;
	resurrectionTime: number;
	baseMoveSpeed: number;
	levelCoefMoveSpeed: number;
	baseMaxHp: number;
	levelCoefMaxHp: number;
	baseDefense: number;
	levelCoefDefense: number;
	nameLnKey: string;
	deadPlaySoundEffectCode: number;
	localDestroyDelay: number;
};

export type ErMetaDataTrait = {
	code: number;
	openAccountLv: number;
	traitGroup: string;
	traitType: string;
	traitGameMode: string;
	active: boolean;
};

export type ErMetaDataTransferConsole = {
	itemCode: number;
	mode: number;
	itemType: string;
	transferTimeSafeArea: number;
	subtractTrasferTimeRestrictedArea: number;
	manufactureCooldown: number;
	consumeVFCredit: number;
	limiteCount: number;
	traitSale: boolean;
};

export type ErMetaDataTurbine = {
	code: number;
	sightRange: number;
	soundDistance: number;
	effectPrefabName: string;
	activeEffectPrefabName: string;
};

export type ErMetaDataTutorialReward = {
	tutorialKey: number;
	goodsType: string;
	collectionCode: number;
	amount: number;
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

export type ErMetaDataWeaponAnimatorLayers = {
	code: number;
	objectType: string;
	characterCode: number;
	weaponType: string;
	layerName: string;
	layerWeight: number;
};

export type ErMetaDataWeaponMount = {
	code: number;
	objectType: string;
	characterCode: number;
	skinIndex: number;
	ownerCharacterCode: number;
	weaponType: string;
	prefab: string;
	animationController: string;
	mountType: string;
	scale: number;
};

export type ErMetaDataWeaponRoute = {
	characterCode: number;
	weaponType: number;
	slotId: number;
	title: string;
	weaponCodes: string;
	paths: string;
};

export type ErMetaDataWeaponTypeInfo = {
	type: string;
	attackSpeed: number;
	attackRange: number;
	shopFilter: number;
	summonObjectHitDamage: number;
};

export type ErMetaData = ErMetaDataAchievement |
ErMetaDataActionCost |
ErMetaDataArea |
ErMetaDataAreaAttributes |
ErMetaDataAreaSound |
ErMetaDataBattlePassMission |
ErMetaDataBattlePassReward |
ErMetaDataBattlePassRewardItem |
ErMetaDataBattleZoneReward |
ErMetaDataBooster |
ErMetaDataBotAiModel |
ErMetaDataBotCraft |
ErMetaDataBotMastery |
ErMetaDataBotNickName |
ErMetaDataBotSkillBuild |
ErMetaDataBulletCapacity |
ErMetaDataCharacter |
ErMetaDataCharacterAttributes |
ErMetaDataCharacterExp |
ErMetaDataCharacterLevelUpStat |
ErMetaDataCharacterMastery |
ErMetaDataCharacterModeModifier |
ErMetaDataCharacterSkillVideos |
ErMetaDataCharacterSkin |
ErMetaDataCharacterState |
ErMetaDataCharacterStateGroup |
ErMetaDataCharacterVoice |
ErMetaDataCharacterVoiceRandomCount |
ErMetaDataCobaltWall |
ErMetaDataCollectible |
ErMetaDataContentOpen |
ErMetaDataControlTypeUse |
ErMetaDataCriticalChance |
ErMetaDataDeployingPoint |
ErMetaDataDropGroup |
ErMetaDataEffectAndSound |
ErMetaDataEmblem |
ErMetaDataEmotion |
ErMetaDataFootStep |
ErMetaDataGainExp |
ErMetaDataGainScore |
ErMetaDataGameBattleStar |
ErMetaDataGameConstant |
ErMetaDataGameRankExp |
ErMetaDataGameTip |
ErMetaDataGoods |
ErMetaDataHookLineProjectile |
ErMetaDataHowToFindItem |
ErMetaDataInfusionProduct |
ErMetaDataItemArmor |
ErMetaDataItemConsumable |
ErMetaDataItemMisc |
ErMetaDataItemSkill |
ErMetaDataItemSkillGroup |
ErMetaDataItemSkillLinker |
ErMetaDataItemSpawn |
ErMetaDataItemSpecial |
ErMetaDataItemWeapon |
ErMetaDataKeyText |
ErMetaDataLevel |
ErMetaDataLoadingTip |
ErMetaDataLowestRankAdjust |
ErMetaDataMasteryExp |
ErMetaDataMasteryLevel |
ErMetaDataMasteryStat |
ErMetaDataMatchingQueueTier |
ErMetaDataMission |
ErMetaDataMonster |
ErMetaDataMonsterDropGroup |
ErMetaDataMonsterLevelUpStat |
ErMetaDataMonsterSpawnLevel |
ErMetaDataMutantMonsterSpawn |
ErMetaDataNaviCollectAndHunt |
ErMetaDataNearByArea |
ErMetaDataNoise |
ErMetaDataObjectSkin |
ErMetaDataPreMadeTeamTierRestrict |
ErMetaDataProjectileDeflectorSetting |
ErMetaDataProjectileSetting |
ErMetaDataRandomEquipment |
ErMetaDataRecommendedArea |
ErMetaDataRecommendedItemList |
ErMetaDataRecommendedList |
ErMetaDataRestrictedArea |
ErMetaDataReward |
ErMetaDataRewardItem |
ErMetaDataRewindProjectile |
ErMetaDataSeason |
ErMetaDataSeasonOutPlayers |
ErMetaDataSecurityConsolEvent |
ErMetaDataServerRegion |
ErMetaDataShopProduct |
ErMetaDataShopProductItem |
ErMetaDataSkill |
ErMetaDataSkillEvolution |
ErMetaDataSkillEvolutionPoint |
ErMetaDataSkillGroup |
ErMetaDataSoundGroup |
ErMetaDataStartItem |
ErMetaDataSummonObject |
ErMetaDataSummonObjectGroup |
ErMetaDataSummonObjectStat |
ErMetaDataSupportPack |
ErMetaDataTouringObjectData |
ErMetaDataTrait |
ErMetaDataTransferConsole |
ErMetaDataTurbine |
ErMetaDataTutorialReward |
ErMetaDataVFCredit |
ErMetaDataWeaponAnimatorLayers |
ErMetaDataWeaponMount |
ErMetaDataWeaponRoute |
ErMetaDataWeaponTypeInfo;
