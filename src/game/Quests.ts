import { Localized } from './i18n';

/* -------------------------------------------------------------------------
 * The fifteen-stage questline
 *
 * One stage is active at a time and it is always the first one still
 * outstanding, so no stage can be shown before the thing it depends on could
 * possibly have happened. Every `done` reads a flag the game itself sets, on a
 * real event, from a real object - nothing here is a timer or a plot coupon.
 * ---------------------------------------------------------------------- */

/** Everything the chain is allowed to look at. */
export interface QuestFlags {
  /** The pin from the cot beside the ward bed. */
  lockpick: boolean;
  /** The cracked mirror in the ward room, looked into. */
  mirror: boolean;
  /** The reception desk searched: the ward plan and the security key. */
  blueprint: boolean;
  /** The CCTV bank booted in the security room. */
  cctv: boolean;
  /** Sulfuric acid taken out of a pharmacy cabinet. */
  acid: boolean;
  /** The padlock on the basement door burnt through. */
  padlock: boolean;
  /** Steam valves wound fully shut, out of three. */
  valves: number;
  /** Live fuses seated in the generator panel, out of two. */
  fuses: number;
  /** The X-ray lightbox read: the freezer code. */
  code: boolean;
  /** Bolt cutters out of freezer #12. */
  cutters: boolean;
  /** The chained door into the director's wing cut open. */
  gateCut: boolean;
  /** The wall extinguisher taken off its bracket. */
  extinguisher: boolean;
  /** The safe behind the painting: the ignition key. */
  ignition: boolean;
  /** The 12V battery out of the courtyard tool shed. */
  battery: boolean;
  /** A valve radio switched on: the noise is what pulls him off the player. */
  radio: boolean;
  /** Crash cart braced across a doorway, barring a corridor. */
  barricade: boolean;
  /** The UV lamp found in the generator room and lit once. */
  uv: boolean;
  /** Archive letters read, out of five. */
  letters: number;
  /** The van running and the run finished. */
  escaped: boolean;
}

export function newQuestFlags(): QuestFlags {
  return {
    lockpick: false,
    mirror: false,
    blueprint: false,
    cctv: false,
    acid: false,
    padlock: false,
    valves: 0,
    fuses: 0,
    code: false,
    cutters: false,
    gateCut: false,
    extinguisher: false,
    ignition: false,
    battery: false,
    radio: false,
    barricade: false,
    uv: false,
    letters: 0,
    escaped: false,
  };
}

export interface QuestStage {
  id: string;
  text: Localized;
  done: (flags: QuestFlags) => boolean;
}

export const QUEST_STAGES: QuestStage[] = [
  {
    id: 'cot',
    text: {
      uz: 'Karavot yonidagi patnisdan qulf ochadigan ignani toping — 404-xonani ochadi',
      en: 'Find a lockpick pin on the cot tray — it opens Room 404',
      ru: 'Найдите отмычку в лотке у койки — она открывает палату 404',
    },
    done: (f) => f.lockpick,
  },
  {
    id: 'mirror',
    text: {
      uz: 'Karavotdagi fonarchani oling va xonadagi ko\'zguni ko\'zdan kechiring',
      en: 'Take the bedside flashlight and look into the room mirror',
      ru: 'Возьмите фонарь у койки и загляните в зеркало в палате',
    },
    done: (f) => f.mirror,
  },
  {
    id: 'reception',
    text: {
      uz: '1-qavat qabulxonasidagi stolni qidiring: qavat rejasi va xavfsizlik kaliti',
      en: 'Search the 1F reception desk for the ward plan and the security key',
      ru: 'Обыщите стол приёмной на 1-м этаже: план этажа и ключ охраны',
    },
    done: (f) => f.blueprint,
  },
  {
    id: 'cctv',
    text: {
      uz: 'Xavfsizlik xonasiga kirib kameralarni yoqing va dorixona kalitini oling',
      en: 'Enter the security room, boot the monitors, take the pharmacy key',
      ru: 'Войдите в комнату охраны, включите мониторы, возьмите ключ аптеки',
    },
    done: (f) => f.cctv,
  },
  {
    id: 'pharmacy',
    text: {
      uz: 'Dorixona oynali shkaflaridan sulfat kislota va og\'riq qoldiruvchi oling',
      en: 'Loot the pharmacy glass cabinets for the acid and the painkillers',
      ru: 'Обыщите стеклянные шкафы аптеки: кислота и обезболивающее',
    },
    done: (f) => f.acid,
  },
  {
    id: 'padlock',
    text: {
      uz: 'Kislota bilan yerto\'la eshigidagi qulf zanjirini eritib tashlang',
      en: 'Melt the padlock chain on the basement door with the acid',
      ru: 'Растворите кислотой замок на двери подвала',
    },
    done: (f) => f.padlock,
  },
  {
    id: 'valves',
    text: {
      uz: 'Qozonxonadagi uchta bug\' klapanini to\'liq burang',
      en: 'Wind all three leaking steam valves in the boiler room shut',
      ru: 'Закрутите все три паровых вентиля в котельной',
    },
    done: (f) => f.valves >= 3,
  },
  {
    id: 'fuses',
    text: {
      uz: 'Generator shchotiga ikkita saqlagichni o\'rnatib, kasalxonani quvvatlang',
      en: 'Seat two fuses in the generator panel to power the facility',
      ru: 'Вставьте два предохранителя в щиток генератора',
    },
    done: (f) => f.fuses >= 2,
  },
  {
    id: 'xray',
    text: {
      uz: 'Morgdagi rentgen shkafini yoqib, 12-muzlatgich kodini o\'qing',
      en: 'Switch on the morgue X-ray lightbox and read the code for Freezer #12',
      ru: 'Включите рентгеновский бокс в морге и прочтите код камеры №12',
    },
    done: (f) => f.code,
  },
  {
    id: 'freezer',
    text: {
      uz: 'Kod bilan 12-muzlatgichni ochib, qaychi (bolt cutters) oling',
      en: 'Open freezer #12 with the code and take the bolt cutters',
      ru: 'Откройте камеру №12 кодом и возьмите кусачки',
    },
    done: (f) => f.cutters,
  },
  {
    id: 'chain',
    text: {
      uz: 'Direktor qanotiga olib boruvchi zanjirni qaychi bilan kesing',
      en: 'Cut the chained door leading into the director\'s wing',
      ru: 'Перекусите цепь на двери в крыло директора',
    },
    done: (f) => f.gateCut,
  },
  {
    id: 'extinguisher',
    text: {
      uz: 'Devordagi o\'t o\'chirgichni oling — o\'zini himoya qilish uchun',
      en: 'Take the wall fire extinguisher for self-defence',
      ru: 'Снимите со стены огнетушитель для защиты',
    },
    done: (f) => f.extinguisher,
  },
  {
    id: 'safe',
    text: {
      uz: 'Doktor Arisning kabinetidagi rasm ortidagi seyfni ochib, mashina kalitini oling',
      en: 'Crack the safe behind the painting in Dr Aris\'s office: the ignition key',
      ru: 'Откройте сейф за картиной в кабинете доктора Ариса: ключ зажигания',
    },
    done: (f) => f.ignition,
  },
  {
    id: 'battery',
    text: {
      uz: 'Hovlidagi asbob omboridan 12V akkumulyatorni toping',
      en: 'Search the courtyard tool shed for the 12V car battery',
      ru: 'Найдите в сарае во дворе аккумулятор 12V',
    },
    done: (f) => f.battery,
  },
  {
    id: 'barricade',
    text: {
      uz: "Yo'lakni to'sish uchun aravachaning tormozini tushirib, eshik oldiga qo'ying — u quvishda sizni sekinlashtiradi",
      en: 'Drop the brake on a crash cart and leave it in a doorway: a braced cart stops the chase',
      ru: 'Опустите тормоз каталки и оставьте её в проходе — заклиненная тележка останавливает погоню',
    },
    done: (f) => f.barricade,
  },
  {
    id: 'radio',
    text: {
      uz: 'Qavatdagi radioni yoqing — shovqin uni boshqa tomonga tortadi',
      en: 'Switch a radio on: the noise drags him to the wrong corridor',
      ru: 'Включите радио на этаже: шум уводит его в другой коридор',
    },
    done: (f) => f.radio,
  },
  {
    id: 'letters',
    text: {
      uz: 'Kasalxonada yashiringan 5 ta xatni topib o\'qing — qochish yo\'li shularda yozilgan',
      en: 'Find and read all five hidden letters - the way out is written in them',
      ru: 'Найдите и прочитайте все пять спрятанных писем — в них описан путь наружу',
    },
    done: (f) => (f.letters ?? 0) >= 5,
  },
  {
    id: 'uv',
    text: {
      uz: 'Generator xonasidagi UV chiroqni olib, qorong\'ida yashirin izlarni ko\'ring',
      en: 'Take the UV lamp from the generator room and scan the dark for hidden marks',
      ru: 'Возьмите УФ-лампу в генераторной и осмотрите темноту в поисках скрытых меток',
    },
    done: (f) => f.uv,
  },
  {
    id: 'escape',
    text: {
      uz: 'Tez yordam mashinasini o\'t oldirib, asosiy darvozadan chiqib keting',
      en: 'Hotwire the ambulance, run the main gate and get out',
      ru: 'Заведите машину скорой помощи и уйдите через главные ворота',
    },
    done: (f) => f.escaped,
  },
];

export const TOTAL_QUESTS = QUEST_STAGES.length;

/** Index of the stage on screen: the first one still outstanding. */
export function activeQuestIndex(flags: QuestFlags): number {
  for (let i = 0; i < QUEST_STAGES.length; i++) {
    if (!QUEST_STAGES[i].done(flags)) return i;
  }
  return QUEST_STAGES.length;
}
