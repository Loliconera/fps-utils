"use strict"

const DefaultSettings = {
	_version: 5,

	Mode: 0,

	OnlyParty: false,
	RaidAutoChange: false,

	ShowStyle: false,
	ActionScripts: false,

	ProjDebug: false,
	AbnDebug: false,

	Hit_Me: false,
	Hit_Other: false,
	Hit_Damage: false,

	HideFireworks: true,
	Hideguildlogos: false,
	HideMonsterDeathAnimation: true,

	HideMySummons: false,
	HideOthersSummons: false,

	HideAllAbnormalities: false,
	HideAllProjectiles: false,

	HideOwnBlacklistedAbns: false,
	HideBlacklistedAbnormalities: false,
	HideBlacklistedProjectiles: false,
	HideBlacklistedNpcs: false,
	HideBlacklistedSkills: false,
	HideBlacklistedDrop: false,

	OwnAbnormalsBlacklist: [
		4850, //Sneaky - "You've found a blind spot in their defenses. (makes your screen shadier)"
		48732, //Brain freeze - "You ate ice-cold food too quickly. Your body is cold, and your Movement Speed decreases by 10%."
		48733, //Summer Wine - "Ramsay's strong wine. The more of it consume, the tipsier you get."
		48734, //Tipsy - "You're Tipsy. Your vision is blurry and your senses are dull. Increase Endurance by 1"
		48735, //Intoxicated - "You're dizzy. Your vision is blurry and your senses are dull. Increase Endurance by 2."
		48736, //Inebriated - "You're very dizzy. Your vision is blurry and your senses are dull. Increase Endurance by 3."
		48737, //Drunk - "You're seriously dizzy. Increase Endurance by 3."
		48738, //Wasted - "If you drink any more, you will hurt yourself. Increases Endurance by 3."
		48739, //Passed Out - "You are beyond wasted and unable to move until you sober up."
		70234, //Freeholds Root Beer - "Lightens your mood for 10 sec, but the kick might make you feel very woozy."
		70235, //Shevranberry Wine - "Lightens your mood for 10 sec, but you might feel very woozy."
		70236, //Sky Lotus - "Makes you 100% resistant to knowdown and stagger for 10 sec, but you might feel very woozy."
		70237, //Lein's Dark Root Beer - "Increases Attack Speed by 20 for 10 sec, but the kick might make you feel very woozy."
		70238, //Digory's Honey Moongourd Drink - "Increases Endurance by 10 for 10 sec, but you might feel very woozy."
		776021, //Flash Blindness - "You can't see anything. (first boss SF, during the spawn of first boss, makes your screen full white)"
		905434, //Noxious Plume - "Inhaled poisonous fumes. (first boss BR, blur screen debuff)"
		47660800, //Darkness - "Makes it hard to see anything around you. (makes your screen briefly full black)"
		47660900, //White Flash - "Makes it hard to see things around you. (makes your screen briefly full white)"
		47661000, //Deep Darkness - "Makes it hard to see anything around you. (makes your screen shadier)"
		47662300, //Darkness I - "You are gradually becoming blind."
		99006000, //Flash Grenade - "A blinding flash makes it hard to see things around you!"
		99007200, //Flash Grenade - "Makes it hard to see things around you. (makes your screen white for 0.5 second)"
		999001011 //Blindfolded - "Your eyes are covered while you play the blind melon bash mini-game."
	],
	AbnormalitiesBlacklist: [
		201, 202, 902, 903, 908, 910, 911, 912, 913, 916, 917, 920, 921, 922, 1130, 1131, 1133, 1461, 1462, 1490, 1491, 1495, 1510, 1511, 1512, 1610, 1630, 1800, 2040, 2041, 2042, 2057,
		2058, 2059, 2060, 2066, 2067, 2068, 2081, 2755, 2756, 2757, 2758, 2759, 2760, 2761, 4401, 4600, 4610, 4611, 4612, 4613, 4614, 4615, 4616, 4950, 5060, 6005, 6006, 6007, 6009,
		6016, 10400, 10401, 10402, 10403, 10404, 10405, 10501, 10502, 10503, 10504, 10505, 10506, 10510, 10511, 10512, 10513, 10514, 10515, 10516, 10520, 10521, 10522, 10523,
		10524, 10525, 10600, 10601, 10602, 10603, 10604, 10605, 10606, 10610, 10611, 10612, 10613, 10614, 10615, 10616, 10620, 10621, 10622, 10623, 10624, 10625, 10625, 10700,
		10701, 10702, 10703, 10704, 10705, 10706, 10710, 10711, 10712, 10713, 10714, 10715, 10716, 10720, 10721, 10722, 10723, 10724, 10725, 10800, 10801, 10802, 10803, 10804,
		10805, 10806, 12230, 12240, 27050, 40175, 40176, 48732, 48733, 48734, 48735, 48736, 48737, 48738, 48739, 60005, 60018, 60026, 70234, 70235, 70236, 70237, 70238, 70462,
		88611, 88612, 100200, 100201, 100202, 100203, 100294, 100295, 100296, 100297, 100298, 100299, 100800, 100801, 101801, 101900, 102600, 103100, 103102, 103104, 103130,
		103131, 200200, 200201, 200202, 200230, 200231, 200232, 200500, 200900, 200901, 200930, 200931, 201200, 201300, 201301, 201302, 201303, 201304, 201305, 201700, 201807,
		201808, 201811, 201812, 201830, 201831, 300300, 300301, 400100, 400101, 400102, 400103, 400104, 400105, 401705, 401706, 401710, 401711, 401721, 401722, 401723, 401724,
		401727, 401728, 457017, 457052, 476615, 476616, 476617, 476618, 500200, 500500, 500600, 500601, 500602, 500700, 500701, 500702, 500703, 500704, 500705, 500706, 500707,
		500720, 500721, 500722, 500723, 500724, 500725, 500726, 500727, 501000, 501001, 501002, 501003, 501004, 501005, 501006, 501020, 501021, 501022, 501023, 501024, 501025,
		501026, 501400, 501402, 600900, 600901, 600902, 600903, 600904, 600905, 600906, 600907, 600908, 600920, 600921, 600922, 600923, 600924, 600925, 600926, 600927, 600928,
		601450, 620000, 620001, 621000, 622001, 622002, 700200, 700201, 700202, 700203, 700230, 700231, 700232, 700233, 700300, 700400, 700401, 700402, 700403, 700404, 700405,
		700406, 700407, 700408, 700409, 700600, 700601, 700602, 700603, 700630, 700631, 700700, 700701, 700730, 700731, 701001, 701002, 701003, 701004, 701005, 701006, 701007,
		701008, 701009, 701010, 701011, 701012, 701511, 701540, 701541, 701542, 701543, 701544, 701545, 701546, 701547, 701548, 701549, 701550, 701551, 701560, 701561, 701562,
		701563, 701564, 701565, 701566, 701567, 701568, 701569, 701570, 701571, 701604, 701605, 701606, 701607, 701700, 701701, 701702, 701703, 701704, 701705, 701706, 701707,
		701708, 701720, 701721, 701722, 701723, 701724, 701725, 701726, 701727, 701728, 701800, 701801, 701802, 701803, 701804, 701805, 701806, 701807, 701808, 701820, 701821,
		701822, 701823, 701824, 701825, 701826, 701827, 701828, 701900, 702000, 702001, 702002, 702003, 702005, 702012, 757002, 757003, 757004, 757005, 757006, 757007, 757008,
		757009, 757016, 757017, 757018, 757029, 757031, 757032, 757033, 757049, 757052, 757054, 760009, 760015, 760031, 760032, 776021, 776022, 776023, 776024, 776025, 776026,
		776028, 776029, 800100, 800101, 800102, 800103, 800104, 800105, 800106, 800107, 800108, 800300, 800301, 800302, 800303, 800304, 801000, 801001, 801100, 801101, 801400,
		801401, 806020, 806021, 806022, 806023, 806028, 830004, 905434, 905932, 999996, 4510004, 4510005, 4510006, 4510007, 4510008, 4510009, 4510010, 4510011, 4510012, 4510013,
		4510014, 4510015, 5000000, 5000003, 5020003, 5020006, 5020007, 5020008, 5020010, 5020011, 5030004, 5030005, 5690001, 7691000, 7691007, 9691000, 9691007, 9691011, 10152050,
		10152096, 10154030, 10154054, 10155550, 14400002, 14400003, 44300066, 44300073, 44300078, 44300079, 47630300, 47650400, 47660100, 47660200, 47660300, 47660400, 47660500,
		47660600, 47660700, 47660800, 47660900, 47662300, 47662800, 47680400, 74300078, 74300081, 75000016, 76600024, 77600017, 77702400, 77703433, 77703437, 78200379, 78200379,
		78200383, 80401500, 81121101, 81121102, 81121103, 81121104, 81121105, 81121201, 81121202, 81121203, 81121204, 81121205, 90341010, 90442101, 90442103, 90442107, 90442211,
		91600019, 93503301, 93503302, 93503303, 93503401, 93503402, 98200379, 98200383, 98850023, 98850024, 98850027, 98850030, 98850035, 98850036, 99000900, 99000910, 99000920,
		99000930, 99000940, 99000950, 99000960, 99000970, 99001000, 99001010, 99001020, 99001030, 99001040, 99001050, 99001060, 99001070, 99001200, 99001210, 99001220, 99001230,
		99001240, 99001250, 99001260, 99001270, 99001300, 99001301, 99001302, 99001303, 99001310, 99001320, 99001330, 99001340, 99001350, 99001360, 99001370, 99001400, 99001410,
		99001420, 99001430, 99001440, 99001450, 99001460, 99001470, 99001700, 99001710, 99001720, 99001730, 99001740, 99001750, 99001760, 99001770, 99002300, 99002310, 99002320,
		99002330, 99002340, 99002350, 99002360, 99002370, 99003200, 99003600, 99003700, 99020000, 99020010, 99020020, 99070011, 99070021, 99070023, 99070025, 99070027, 99070028,
		99070029, 99070030, 99070031, 99070032, 999001001, 999001002, 999001003, 999001004, 999001005, 999001006, 999001007, 999001008, 999001011, 999001018, 999001019, 999001020, 999001021, 999009820, 999010000
	],
	ProjectilesBlacklist: [270120, 270220, 270320, 270420, 270520, 270620, 270720, 270820, 270920, 271020],
	PlayersBlacklist: [],
	ClassesBlacklist: [],
	RolesBlacklist: [],
	NpcsBlacklist: [],
	DropBlacklist: [8000, 8001, 8002, 8005, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023],

	ClassesNames: ["warrior", "lancer", "slayer", "berserker", "sorcerer", "archer", "priest", "mystic", "reaper", "gunner", "brawler", "ninja", "valkyrie"],
	RolesNames: ["dps", "healer", "tank", "ranged"],

	ClassesData: {
		1: { name: "warrior", model: 1, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["dps"], isHidden: false },
		2: { name: "lancer", model: 2, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["tank"], isHidden: false },
		3: { name: "slayer", model: 3, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["dps"], isHidden: false },
		4: { name: "berserker", model: 4, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["dps"], isHidden: false },
		5: { name: "sorcerer", model: 5, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["dps", "ranged"], isHidden: false },
		6: { name: "archer", model: 6, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["dps", "ranged"], isHidden: false },
		7: { name: "priest", model: 7, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["healer"], isHidden: false },
		8: { name: "mystic", model: 8, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["healer"], isHidden: false },
		9: { name: "reaper", model: 9, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["dps"], isHidden: false },
		10: { name: "gunner", model: 10, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["dps", "ranged"], isHidden: false },
		11: { name: "brawler", model: 11, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["tank"], isHidden: false },
		12: { name: "ninja", model: 12, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["dps"], isHidden: false },
		13: { name: "valkyrie", model: 13, CD_SkillsBlacklist: [], CD_HideBlacklistedSkills: false, role: ["dps"], isHidden: false }
	}
}

function MigrateSettings(from_ver, to_ver, settings) {
	if (from_ver === undefined) {
		return Object.assign(Object.assign({}, DefaultSettings), settings);
	} else if (from_ver === null) {
		return DefaultSettings;
	} else {
		if (from_ver + 1 < to_ver) {
			settings = MigrateSettings(from_ver, from_ver + 1, settings);
			return MigrateSettings(from_ver + 1, to_ver, settings);
		}

		switch (to_ver) {
			case 3:
				settings._version = 3;
				settings.HideBlacklistedAbnormalities = false;
				settings.HideBlacklistedProjectiles = false;
				break;
			case 4:
				delete settings.NoZoomingToNpc;
				settings._version = 4;
				settings.ActionScripts = DefaultSettings.ActionScripts;
				settings.HideMonsterDeathAnimation = DefaultSettings.HideMonsterDeathAnimation;
				break;
			case 5:
				settings._version = DefaultSettings._version;
				settings.HideOwnBlacklistedAbns = DefaultSettings.HideOwnBlacklistedAbns;
				settings.OwnAbnormalsBlacklist = DefaultSettings.OwnAbnormalsBlacklist;
			default:
				console.log(`[FPS-UTILS] -\x1b[31m Your 'config.json' seems to be too old.\x1b[32m Re-created new one.\x1b[0m`);
				Object.keys(settings).forEach(function (key) { delete settings[key]; });
				settings = JSON.parse(JSON.stringify(DefaultSettings));
				break;
		}
		return settings;
	}
}

module.exports = MigrateSettings;