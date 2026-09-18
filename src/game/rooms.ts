import type { Localized } from './i18n';

/**
 * Every named room in St Jude, in all three languages.
 *
 * Room metadata lives here rather than in World.ts because a name has to exist
 * three times over, and the level file is already the largest in the project.
 * The keys are the LAYOUT characters, so a missing room is a build error rather
 * than a room called "undefined".
 */
export interface RoomMeta {
  name: Localized;
  subtitle: Localized;
}

export const ROOM_META: Record<string, RoomMeta> = {
  /* ---- Hospital, ground floor ---- */
  a: {
    name: { uz: 'QABULXONA', en: 'RECEPTION', ru: 'ПРИЁМНАЯ' },
    subtitle: {
      uz: 'Chiqish eshigi shu yerda',
      en: 'The exit door is here',
      ru: 'Здесь выходная дверь',
    },
  },
  b: {
    name: { uz: 'TELEFON MARKAZI', en: 'SWITCHBOARD', ru: 'ТЕЛЕФОННЫЙ УЗЕЛ' },
    subtitle: {
      uz: 'Simlar uzilgan — faqat shitirlash eshitiladi',
      en: 'The lines are cut — only static comes through',
      ru: 'Провода обрезаны — слышен только треск',
    },
  },
  c: {
    name: { uz: 'HAMSHIRA XONASI', en: "NURSES' STATION", ru: 'ПОСТ МЕДСЕСТРЫ' },
    subtitle: {
      uz: 'Kimdir hozirgina chiqib ketgan',
      en: 'Someone just stepped out',
      ru: 'Кто-то только что вышел',
    },
  },
  d: {
    name: { uz: 'XONA 201', en: 'ROOM 201', ru: 'ПАЛАТА 201' },
    subtitle: {
      uz: "Karavotlar bo'sh emas",
      en: 'The beds are not empty',
      ru: 'Кровати не пусты',
    },
  },
  e: {
    name: { uz: 'XONA 202', en: 'ROOM 202', ru: 'ПАЛАТА 202' },
    subtitle: {
      uz: 'Devorda tirnoq izlari',
      en: 'Scratch marks on the wall',
      ru: 'На стене следы ногтей',
    },
  },
  f: {
    name: { uz: 'OMBORXONA', en: 'STORE ROOM', ru: 'КЛАДОВАЯ' },
    subtitle: {
      uz: 'Eshik tashqaridan qulflangan',
      en: 'The door is locked from the outside',
      ru: 'Дверь заперта снаружи',
    },
  },

  /* ---- Hospital, surgical floor ---- */
  g: {
    name: { uz: 'KUTUBXONA', en: 'LIBRARY', ru: 'БИБЛИОТЕКА' },
    subtitle: {
      uz: 'Har bir bemorning ismi yozilgan',
      en: "Every patient's name is written down",
      ru: 'Записано имя каждого пациента',
    },
  },
  h: {
    name: { uz: 'OPERATSIYA XONASI', en: 'OPERATING THEATRE', ru: 'ОПЕРАЦИОННАЯ' },
    subtitle: {
      uz: 'Qon hali qurimagan',
      en: 'The blood has not dried yet',
      ru: 'Кровь ещё не высохла',
    },
  },
  i: {
    name: { uz: 'INTENSIV TERAPIYA', en: 'INTENSIVE CARE', ru: 'РЕАНИМАЦИЯ' },
    subtitle: { uz: 'Monitorlar jim', en: 'The monitors are silent', ru: 'Мониторы молчат' },
  },
  j: {
    name: { uz: 'RENTGEN XONASI', en: 'X-RAY ROOM', ru: 'РЕНТГЕН-КАБИНЕТ' },
    subtitle: {
      uz: 'Suratlar devorga mixlangan',
      en: 'The films are nailed to the wall',
      ru: 'Снимки прибиты к стене',
    },
  },
  k: {
    name: { uz: 'LABORATORIYA', en: 'LABORATORY', ru: 'ЛАБОРАТОРИЯ' },
    subtitle: {
      uz: 'Namunalar hali ham sovuq',
      en: 'The samples are still cold',
      ru: 'Образцы всё ещё холодные',
    },
  },
  m: {
    name: { uz: 'GENERATOR XONASI', en: 'GENERATOR ROOM', ru: 'ГЕНЕРАТОРНАЯ' },
    subtitle: {
      uz: 'Elektr shu yerdan boshqariladi',
      en: 'The power is controlled from here',
      ru: 'Отсюда управляют электричеством',
    },
  },

  /* ---- Hospital, basement ---- */
  n: {
    name: { uz: 'XONA 101', en: 'ROOM 101', ru: 'ПАЛАТА 101' },
    subtitle: { uz: 'Kundaliklar yirtilgan', en: 'The diaries are torn up', ru: 'Дневники разорваны' },
  },
  o: {
    name: { uz: 'MORGNIY', en: 'MORGUE', ru: 'МОРГ' },
    subtitle: {
      uz: 'Bu yerda hamma narsa sovuq',
      en: 'Everything here is cold',
      ru: 'Здесь всё холодное',
    },
  },
  p: {
    name: { uz: 'ARXIV', en: 'ARCHIVE', ru: 'АРХИВ' },
    subtitle: {
      uz: 'Hujjatlar yoqib yuborilgan',
      en: 'The records were burned',
      ru: 'Документы сожжены',
    },
  },
  q: {
    name: { uz: 'DUSH XONASI', en: 'SHOWER ROOM', ru: 'ДУШЕВАЯ' },
    subtitle: {
      uz: 'Kranlardan qon oqadi',
      en: 'Blood runs from the taps',
      ru: 'Из кранов течёт кровь',
    },
  },
  r: {
    name: { uz: 'OSHXONA', en: 'KITCHEN', ru: 'КУХНЯ' },
    subtitle: {
      uz: 'Idishlar hali yuvilmagan',
      en: 'The dishes are still unwashed',
      ru: 'Посуда ещё не вымыта',
    },
  },
  s: {
    name: { uz: 'XONA 102', en: 'ROOM 102', ru: 'ПАЛАТА 102' },
    subtitle: {
      uz: "Deraza tashqarisida hech narsa yo'q",
      en: 'There is nothing outside the window',
      ru: 'За окном ничего нет',
    },
  },

  /* ---- The grounds ---- */
  t: {
    name: { uz: 'PODSTANSIYA', en: 'SUBSTATION', ru: 'ПОДСТАНЦИЯ' },
    subtitle: {
      uz: "Asosiy darvoza quvvati shu yerdan o'tadi",
      en: 'The main gate draws its power from here',
      ru: 'Отсюда питаются главные ворота',
    },
  },
  u: {
    name: { uz: 'DARVOZA MAYDONI', en: 'GATE YARD', ru: 'ПЛОЩАДКА У ВОРОТ' },
    subtitle: {
      uz: "Qochish yo'li shu yerda tugaydi",
      en: 'The way out ends here',
      ru: 'Здесь заканчивается путь наружу',
    },
  },
  v: {
    name: { uz: 'QABRISTON', en: 'GRAVEYARD', ru: 'КЛАДБИЩЕ' },
    subtitle: {
      uz: "Kasalxona o'liklarini shu yerga ko'mishardi",
      en: 'The hospital used to bury its dead here',
      ru: 'Здесь хоронили умерших из больницы',
    },
  },
  w: {
    name: { uz: 'HOVLI', en: 'COURTYARD', ru: 'ДВОР' },
    subtitle: {
      uz: "Kasalxona ortidagi bo'sh hovli",
      en: 'An empty yard behind the hospital',
      ru: 'Пустой двор за больницей',
    },
  },
  x: {
    name: { uz: 'AVTOTURARGOH', en: 'PARKING LOT', ru: 'ПАРКОВКА' },
    subtitle: {
      uz: 'Tez yordam mashinasi hali ham shu yerda',
      en: 'The ambulance is still here',
      ru: 'Машина скорой всё ещё здесь',
    },
  },
  y: {
    name: { uz: "QO'RIQXONA", en: 'GUARD POST', ru: 'СТОРОЖКА' },
    subtitle: {
      uz: 'Chiroq yonib turgan edi — kim yoqqan?',
      en: 'The light was on — who lit it?',
      ru: 'Свет горел — кто его включил?',
    },
  },
  z: {
    name: { uz: 'KREMATORIY', en: 'CREMATORIUM', ru: 'КРЕМАТОРИЙ' },
    subtitle: {
      uz: 'Bu yerda hech narsa qolmadi',
      en: 'Nothing is left here',
      ru: 'Здесь ничего не осталось',
    },
  },

  /* ---- Second floor ---- */
  A: {
    name: { uz: 'BOSH SHIFOKOR XONASI', en: "CHIEF SURGEON'S OFFICE", ru: 'КАБИНЕТ ГЛАВВРАЧА' },
    subtitle: {
      uz: 'Protokol 7 shu yerda imzolangan',
      en: 'Protocol 7 was signed in this room',
      ru: 'Здесь был подписан Протокол 7',
    },
  },
  B: {
    name: { uz: 'KIR YUVISH XONASI', en: 'LAUNDRY', ru: 'ПРАЧЕЧНАЯ' },
    subtitle: {
      uz: 'Mashinada hali ham qonli kiyimlar',
      en: 'Bloody clothes are still in the machine',
      ru: 'В машине всё ещё окровавленная одежда',
    },
  },
  C: {
    name: { uz: 'OSHXONA', en: 'CANTEEN', ru: 'СТОЛОВАЯ' },
    subtitle: {
      uz: 'Ovqat hech qachon tarqatilmagan',
      en: 'The food was never handed out',
      ru: 'Еду так и не раздали',
    },
  },
  D: {
    name: { uz: 'BOLALAR PALATASI', en: "CHILDREN'S WARD", ru: 'ДЕТСКОЕ ОТДЕЛЕНИЕ' },
    subtitle: {
      uz: "O'yinchoqlar devor bo'ylab tizilgan",
      en: 'The toys are lined up along the wall',
      ru: 'Игрушки выстроены вдоль стены',
    },
  },
  E: {
    name: { uz: 'KUZATUV XONASI', en: 'OBSERVATION ROOM', ru: 'СМОТРОВАЯ' },
    subtitle: {
      uz: 'Bir tomonlama oyna — kim kimni kuzatgan?',
      en: 'A one-way mirror — who was watching whom?',
      ru: 'Одностороннее зеркало — кто за кем наблюдал?',
    },
  },
  F: {
    name: { uz: 'IBODATXONA', en: 'CHAPEL', ru: 'ЧАСОВНЯ' },
    subtitle: {
      uz: 'Xoch teskari osilgan',
      en: 'The cross hangs upside down',
      ru: 'Крест висит перевёрнутым',
    },
  },
  G: {
    name: { uz: 'FIZIOTERAPIYA', en: 'PHYSIOTHERAPY', ru: 'ФИЗИОТЕРАПИЯ' },
    subtitle: {
      uz: 'Tayanchlar hali ham shu yerda',
      en: 'The walking frames are still here',
      ru: 'Ходунки всё ещё здесь',
    },
  },
  H: {
    name: { uz: 'STOMATOLOGIYA XONASI', en: 'DENTAL SURGERY', ru: 'СТОМАТОЛОГИЯ' },
    subtitle: { uz: 'Kreslo qonli', en: 'The chair is bloody', ru: 'Кресло в крови' },
  },
  I: {
    name: { uz: "KO'Z KLINIKASI", en: 'EYE CLINIC', ru: 'ГЛАЗНОЙ КАБИНЕТ' },
    subtitle: {
      uz: "Ko'zoynaklar javonda qolgan",
      en: 'Glasses left behind on the shelf',
      ru: 'Очки остались на полке',
    },
  },
  J: {
    name: { uz: 'TERAPIYA XONASI', en: 'THERAPY ROOM', ru: 'КАБИНЕТ ТЕРАПИИ' },
    subtitle: {
      uz: 'Kundalik daftarlar yirtilgan',
      en: 'The casebooks are torn apart',
      ru: 'Журналы наблюдений разорваны',
    },
  },
  K: {
    name: { uz: 'ANESTEZIYA XONASI', en: 'ANAESTHESIA ROOM', ru: 'Наркозная' },
    subtitle: {
      uz: "Gaz ballonlari bo'sh",
      en: 'The gas cylinders are empty',
      ru: 'Газовые баллоны пусты',
    },
  },
  L: {
    name: { uz: 'OMBORXONA 2', en: 'STORE ROOM 2', ru: 'КЛАДОВАЯ 2' },
    subtitle: {
      uz: 'Yopiq qutilar — hech kim ochmagan',
      en: 'Sealed crates — nobody has opened them',
      ru: 'Запечатанные ящики — их никто не открывал',
    },
  },

  /* ---- Deep basement ---- */
  M: {
    name: { uz: 'QOZONXONA', en: 'BOILER ROOM', ru: 'КОТЕЛЬНАЯ' },
    subtitle: { uz: 'Qozonlar hali ham issiq', en: 'The boilers are still warm', ru: 'Котлы всё ещё горячие' },
  },
  N: {
    name: { uz: 'NASOS XONASI', en: 'PUMP ROOM', ru: 'НАСОСНАЯ' },
    subtitle: { uz: 'Quvurlar titraydi', en: 'The pipes are shaking', ru: 'Трубы дрожат' },
  },
  O: {
    name: { uz: 'TUNEL', en: 'TUNNEL', ru: 'ТОННЕЛЬ' },
    subtitle: {
      uz: "Bu yo'l qayerga olib boradi?",
      en: 'Where does this lead?',
      ru: 'Куда ведёт этот путь?',
    },
  },
  P: {
    name: { uz: 'LABORATORIYA 7', en: 'LABORATORY 7', ru: 'ЛАБОРАТОРИЯ 7' },
    subtitle: {
      uz: 'Namunalar hali ham tirik',
      en: 'The samples are still alive',
      ru: 'Образцы всё ещё живы',
    },
  },
  Q: {
    name: { uz: 'INKUBATOR XONASI', en: 'INCUBATOR ROOM', ru: 'ПАЛАТА ИНКУБАТОРОВ' },
    subtitle: {
      uz: "Kichkina qo'llar shisha ortida",
      en: 'Small hands behind the glass',
      ru: 'Маленькие руки за стеклом',
    },
  },
  R: {
    name: { uz: 'MORGNIY 2', en: 'MORGUE 2', ru: 'МОРГ 2' },
    subtitle: {
      uz: "O'ttiz yetti tortma — biri ochiq",
      en: 'Thirty-seven drawers — one is open',
      ru: 'Тридцать семь ящиков — один открыт',
    },
  },

  /* ---- Third floor ---- */
  S: {
    name: { uz: 'IZOLYATOR', en: 'ISOLATION WARD', ru: 'ИЗОЛЯТОР' },
    subtitle: {
      uz: 'Bu xonada hech kim bir kundan ortiq qolmagan',
      en: 'Nobody stayed in this room longer than a day',
      ru: 'Никто не оставался в этой палате дольше суток',
    },
  },
  T: {
    name: { uz: 'ELEKTROTERAPIYA', en: 'ELECTROTHERAPY', ru: 'ЭЛЕКТРОТЕРАПИЯ' },
    subtitle: {
      uz: "Kresloda hali ham qayish bog'langan",
      en: 'A strap is still tied to the chair',
      ru: 'На кресле всё ещё ремень',
    },
  },
  U: {
    name: { uz: 'GIDROTERAPIYA', en: 'HYDROTHERAPY', ru: 'ГИДРОТЕРАПИЯ' },
    subtitle: { uz: 'Hammomdagi suv qizil', en: 'The bath water is red', ru: 'Вода в ванне красная' },
  },
  V: {
    name: { uz: 'XODIMLAR XONASI', en: 'STAFF ROOM', ru: 'КОМНАТА ПЕРСОНАЛА' },
    subtitle: { uz: 'Choy hali ham iliq', en: 'The tea is still warm', ru: 'Чай всё ещё тёплый' },
  },
  W: {
    name: { uz: 'KONSILIUM XONASI', en: 'CONSULTATION ROOM', ru: 'КОНСИЛИУМ' },
    subtitle: {
      uz: "Yig'ilish bayonnomasi oxirigacha yozilgan",
      en: 'The minutes were written to the end',
      ru: 'Протокол совещания дописан до конца',
    },
  },
  X: {
    name: { uz: 'TOMGA CHIQISH', en: 'ROOF ACCESS', ru: 'ВЫХОД НА КРЫШУ' },
    subtitle: {
      uz: "Eshik ochiq — tashqarida faqat yomg'ir",
      en: 'The door is open — only rain outside',
      ru: 'Дверь открыта — снаружи только дождь',
    },
  },
};
