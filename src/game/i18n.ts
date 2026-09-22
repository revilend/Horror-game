/**
 * The game's three languages.
 *
 * Design notes:
 *  - Every user-facing string is either a `Localized` record resolved through
 *    `L()` or a dictionary entry resolved through `t()`. There is no
 *    string-building anywhere else, so switching language can never leave a
 *    half-translated screen behind.
 *  - Static markup carries `data-i18n="key"`, applied by `applyTranslations()`
 *    on boot and again on every language change.
 *  - The choice is stored in localStorage, so a player picks a language once.
 */

export type Lang = 'uz' | 'en' | 'ru';

/** One string in every supported language. */
export interface Localized {
  uz: string;
  en: string;
  ru: string;
}

export const LANGUAGES: Array<{ code: Lang; label: string; short: string }> = [
  { code: 'uz', label: "O'zbekcha", short: 'UZ' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ru', label: 'Русский', short: 'RU' },
];

const STORAGE_KEY = 'dark-asylum.language';

/** `navigator.language` values that should land on each language. */
function detectLanguage(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'uz' || saved === 'en' || saved === 'ru') return saved;
  } catch {
    /* storage unavailable - fall through to detection */
  }
  const nav = (typeof navigator !== 'undefined' && navigator.language) || 'uz';
  const tag = nav.toLowerCase();
  if (tag.startsWith('ru')) return 'ru';
  if (tag.startsWith('en')) return 'en';
  return 'uz';
}

let current: Lang = detectLanguage();
const listeners: Array<(lang: Lang) => void> = [];

export function getLanguage(): Lang {
  return current;
}

/** The language used for the game's own content before the player picks one. */
export function setLanguage(lang: Lang): void {
  if (lang === current) return;
  current = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* storage unavailable - the choice just will not survive a reload */
  }
  applyTranslations();
  document.documentElement.lang = lang;
  for (const listener of listeners) listener(lang);
}

/** Registered once by Game; fires after the language actually changes. */
export function onLanguageChange(listener: (lang: Lang) => void): void {
  listeners.push(listener);
}

/** Resolves a `Localized` record to the current language. */
export function L(value: Localized): string {
  return value[current];
}

/* -------------------------------------------------------------------------
 * UI dictionary
 *
 * Keys are grouped by screen. Anything with a {placeholder} takes a params
 * object from t(); everything else is a plain lookup.
 * ---------------------------------------------------------------------- */

const UI: Record<string, Localized> = {
  /* ---- loading & menu ---- */
  'loading.title': { uz: 'DR. ARIS', en: 'DR. ARIS', ru: 'Д-Р АРИС' },
  'loading.subtitle': { uz: 'AQLSIZ JARROH', en: 'THE MAD SURGEON', ru: 'БЕЗУМНЫЙ ХИРУРГ' },
  'loading.text': { uz: 'Yuklanmoqda...', en: 'Loading...', ru: 'Загрузка...' },
  'loading.1': { uz: 'Kasalxona eshigi ochilmoqda...', en: 'Opening the asylum door...', ru: 'Дверь больницы открывается...' },
  'loading.2': { uz: 'Xonalar qurilmoqda...', en: 'Building the rooms...', ru: 'Строятся палаты...' },
  'loading.3': { uz: 'Ovoz tizimi yuklanmoqda...', en: 'Loading the audio system...', ru: 'Загружается звук...' },
  'loading.4': { uz: 'Effektlar tayyorlanmoqda...', en: 'Preparing the effects...', ru: 'Готовятся эффекты...' },
  'loading.5': { uz: "Biror narsa uyg'onmoqda...", en: 'Something is waking up...', ru: 'Что-то просыпается...' },
  'loading.6': { uz: 'Tayyor!', en: 'Ready!', ru: 'Готово!' },
  'loading.failed': { uz: 'Xatolik yuz berdi! Qayta yuklang.', en: 'Something went wrong. Reload the page.', ru: 'Произошла ошибка. Перезагрузите страницу.' },

  'menu.eyebrow': { uz: "QO'RQINCHLI O'YIN", en: 'HORROR GAME', ru: 'ХОРРОР-ИГРА' },
  'menu.title': { uz: 'DR. ARIS', en: 'DR. ARIS', ru: 'Д-Р АРИС' },

  /* ---- the diegetic chart: PROTOKOL 7, the game's only menu ---- */
  'journal.stamp': {
    uz: 'SENT-JUD RUHIY KASALXONASI · 1987',
    en: 'ST. JUDE MENTAL ASYLUM · 1987',
    ru: 'ПСИХИАТРИЧЕСКАЯ ЛЕЧЕБНИЦА СЕНТ-ДЖУД · 1987',
  },
  'journal.title': {
    uz: 'PROTOKOL 7 — BEMOR KARTASI',
    en: 'PROTOCOL 7 — PATIENT CHART',
    ru: 'ПРОТОКОЛ 7 — КАРТА ПАЦИЕНТА',
  },
  'journal.patient': { uz: 'BEMOR', en: 'PATIENT', ru: 'ПАЦИЕНТ' },
  'journal.patientName': {
    uz: "404-XONA · ISMI O'CHIRILGAN",
    en: 'ROOM 404 · NAME STRUCK OUT',
    ru: 'ПАЛАТА 404 · ИМЯ ЗАЧЁРКНУТО',
  },
  'journal.doctor': { uz: 'SHIFOKOR', en: 'PHYSICIAN', ru: 'ВРАЧ' },
  'journal.doctorName': { uz: 'DR. ARIS', en: 'DR. ARIS', ru: 'Д-Р АРИС' },
  'journal.tabHistory': { uz: '1 · TARIX', en: '1 · HISTORY', ru: '1 · ИСТОРИЯ' },
  'journal.tabQuests': { uz: '2 · VAZIFALAR', en: '2 · OBJECTIVES', ru: '2 · ЗАДАЧИ' },
  'journal.tabSettings': { uz: '3 · SOZLAMALAR', en: '3 · SETTINGS', ru: '3 · НАСТРОЙКИ' },
  'journal.questHead': {
    uz: 'PROTOKOL 7 — VAZIFALAR ZANJIRI',
    en: 'PROTOCOL 7 — OBJECTIVE CHAIN',
    ru: 'ПРОТОКОЛ 7 — ЦЕПОЧКА ЗАДАЧ',
  },
  'journal.questProgress': { uz: '{done}/{total} bajarildi', en: '{done}/{total} done', ru: '{done}/{total} выполнено' },
  'journal.seal': {
    uz: "O'RNINGIZDAN TURISH VA O'YINNI BOSHLASH",
    en: 'RISE FROM THE BED AND BEGIN',
    ru: 'ПОДНЯТЬСЯ И НАЧАТЬ',
  },
  'journal.warn1': {
    uz: 'Dr. Aris tunda ko‘rikdan o‘tadi. Eshikni yopib, chiroqni o‘chiring.',
    en: 'Dr Aris does his rounds after dark. Shut the door and kill the light.',
    ru: 'Доктор Арис обходит палаты ночью. Закройте дверь и погасите свет.',
  },
  'journal.warn2': {
    uz: 'Shkaflar va karavot ostlari yashirinish uchun. U o‘tib ketishini kuting.',
    en: 'Wardrobes and the space under beds hide you. Wait for him to pass.',
    ru: 'Шкафы и место под койками спасают. Дождитесь, пока он пройдёт.',
  },
  'journal.warn3': {
    uz: 'Protokol 7 ni imzolagan odam qochib ketolmagan. Siz ham qochishingiz kerak.',
    en: 'The man who signed Protocol 7 never got out. You still can.',
    ru: 'Тот, кто подписал Протокол 7, не вышел. У вас ещё есть шанс.',
  },
  'menu.mute': { uz: 'Ovozsiz', en: 'Mute', ru: 'Без звука' },
  'menu.story': {
    uz: "Siz Doktor Elias Ren — Protokol 7 ni imzolagan oxirgi jarroh. 1987-yil 4-noyabrda bemorlar bir xonaga yopildi, kasalxona qulflandi va hech kim chiqmadi. Siz ertalab yolg'iz uyg'ondingiz, eshiklar bog'langan, va koridorlardagi tovushlar sizni tanigan ovozda chaqiryapti. U sizni eslaydi. U sizni kutmoqda. Uchta kalitni toping, saqlagichni ulang va darvozadan chiqib ketishdan oldin u sizni topmasin.",
    en: 'You are Dr Elias Ren - the last surgeon to sign Protocol 7. On 4 November 1987 the patients were sealed into one room, the hospital was locked, and nobody came out. You woke alone this morning: the doors are chained and the sounds in the corridors call you in a voice you know. He remembers you. He is waiting for you. Find three keys, restore the breaker, and get through the gate before he finds you first.',
    ru: 'Вы — доктор Элиас Рен, последний хирург, подписавший Протокол 7. 4 ноября 1987 года пациентов заперли в одной палате, больницу закрыли, и никто не вышел. Сегодня утром вы проснулись один: двери в цепях, а голоса в коридорах зовут вас знакомым голосом. Он помнит вас. Он ждёт вас. Найдите три ключа, восстановите питание и уйдите через ворота раньше, чем он найдёт вас.',
  },
  'menu.start': { uz: 'BOSHLASH', en: 'START', ru: 'НАЧАТЬ' },
  'menu.continue': {
    uz: 'DAVOM ETISH — {time}',
    en: 'CONTINUE — {time}',
    ru: 'ПРОДОЛЖИТЬ — {time}',
  },
  'menu.sensitivity': { uz: 'Sezgirlik', en: 'Sensitivity', ru: 'Чувствительность' },
  'menu.graphics': { uz: 'Grafika', en: 'Graphics', ru: 'Графика' },
  'menu.sound': { uz: 'Ovoz', en: 'Sound', ru: 'Звук' },
  'menu.language': { uz: 'Til', en: 'Language', ru: 'Язык' },
  'menu.quality.low': { uz: 'Past', en: 'Low', ru: 'Низкое' },
  'menu.quality.medium': { uz: "O'rta", en: 'Medium', ru: 'Среднее' },
  'menu.quality.high': { uz: 'Yuqori', en: 'High', ru: 'Высокое' },
  'menu.bestTime': { uz: 'Eng yaxshi vaqt', en: 'Best time', ru: 'Лучшее время' },
  'menu.controls': {
    uz: 'WASD — harakat · SHIFT — yugurish · E — olish/ochish/yashirinish · B — shisha otish · C — egilish · F — chiroq · M — xarita',
    en: 'WASD — move · SHIFT — run · E — take, open, hide · B — throw bottle · C — crouch · F — flashlight · M — map',
    ru: 'WASD — движение · SHIFT — бег · E — взять, открыть, спрятаться · B — бросить бутылку · C — присесть · F — фонарь · M — карта',
  },
  'menu.controlsTouch': {
    uz: 'Chap barmoq — yurish · O‘ng barmoq — qarash · Qo‘l tugmasi: olish, eshik, tortma, shkafga yashirinish · Yugurish, chiroq va shisha tugmalari',
    en: 'Left thumb — move · Right thumb — look · Hand button: take, open, hide in a locker · Run, light and bottle buttons',
    ru: 'Левый палец — движение · Правый палец — обзор · Кнопка руки: взять, открыть, спрятаться в шкафу · Кнопки бега, фонаря и бутылки',
  },

  /* ---- rotate to landscape ---- */
  'rotate.title': { uz: 'GORIZONTAL HOLATGA O‘GIRING', en: 'ROTATE TO LANDSCAPE', ru: 'ПОВЕРНИТЕ УСТРОЙСТВО' },
  'rotate.text': {
    uz: 'Telefonni yoniga burang — o‘yin faqat gorizontal holatda ishlaydi.',
    en: 'Turn your phone sideways — the game only runs in landscape.',
    ru: 'Поверните телефон набок — игра работает только горизонтально.',
  },

  /* ---- in-game HUD ---- */
  'hud.notes': { uz: 'Qaydlar', en: 'Notes', ru: 'Записки' },
  'hud.paused': { uz: "TO'XTATILDI", en: 'PAUSED', ru: 'ПАУЗА' },
  'hud.resume': { uz: 'DAVOM ETISH', en: 'RESUME', ru: 'ПРОДОЛЖИТЬ' },
  'hud.restart': { uz: 'QAYTA BOSHLASH', en: 'RESTART', ru: 'НАЧАТЬ ЗАНОВО' },
  'hud.pause': { uz: 'To‘xtatish', en: 'Pause', ru: 'Пауза' },
  'hud.hidden': { uz: 'Yashiringan', en: 'Hidden', ru: 'Вы спрятались' },
  'hud.stamina': { uz: 'Chidamlilik', en: 'Stamina', ru: 'Выносливость' },
  'hud.battery': { uz: 'Fonar quvvati', en: 'Flashlight battery', ru: 'Заряд фонаря' },
  'hud.mapToggle': { uz: 'Xaritani yig‘ishtirish', en: 'Collapse the map', ru: 'Свернуть карту' },
  'hud.throw': { uz: 'Shisha otish', en: 'Throw a bottle', ru: 'Бросить бутылку' },

  /* ---- game over ---- */
  'over.eyebrow': { uz: "O'YIN TUGADI", en: 'GAME OVER', ru: 'ИГРА ОКОНЧЕНА' },
  'over.title': { uz: "QORONG'U", en: 'DARKNESS', ru: 'ТЕМНОТА' },
  'over.retry': { uz: 'QAYTA URINISH', en: 'TRY AGAIN', ru: 'ПОПРОБОВАТЬ СНОВА' },
  'over.power': {
    uz: "Qorong'u sizni yutdi. Saqlagichni o'rnatganingizda yorug'lik sizni qutqarardi. U bir vaqtlar sizning bemoringiz edi — endi u shifokor.",
    en: 'The dark swallowed you. With the breaker restored, the light would have saved you. He was your patient once — now he is the doctor.',
    ru: 'Тьма поглотила вас. Если бы вы вставили предохранитель, свет спас бы вас. Когда-то он был вашим пациентом — теперь врач он.',
  },
  'over.keys': {
    uz: "U sizni tanidi, Ren. U doim sizni tanigan edi. Kasalxona endi ko'rinadi — va u ham sizni ko'rdi.",
    en: 'He recognised you, Ren. He always had. The hospital is awake now — and so is he.',
    ru: 'Он узнал вас, Рен. Он всегда вас узнавал. Больница теперь видит — и он тоже увидел вас.',
  },
  'over.escape': {
    uz: "Kalitlar cho'ntangizda qoldi. U eshikni yopishni biladi — u ko'p yillardan beri shu erda eshiklarni yopadi.",
    en: 'The keys stayed in your pocket. He knows how to close a door — he has been closing them here for years.',
    ru: 'Ключи остались у вас в кармане. Он умеет закрывать двери — он закрывает их здесь много лет.',
  },
  'over.outside': {
    uz: "Siz tashqariga chiqdingiz — lekin darvoza hali ham qulflangan edi. Podstansiyani yondirish kerak edi. U sizni yomg'ir ostida kutdi.",
    en: 'You made it outside — but the gate was still locked. The substation had to be powered first. He waited for you in the rain.',
    ru: 'Вы вышли наружу — но ворота всё ещё были заперты. Сначала нужно было запустить подстанцию. Он ждал вас под дождём.',
  },
  'over.stats': {
    uz: 'Kalitlar: {keys}/{total} · Karta: {card} · Podstansiya: {power} · Qaydlar: {notes}/{notesTotal} · Xonalar: {rooms}/{roomsTotal}',
    en: 'Keys: {keys}/{total} · Card: {card} · Substation: {power} · Notes: {notes}/{notesTotal} · Rooms: {rooms}/{roomsTotal}',
    ru: 'Ключи: {keys}/{total} · Карта: {card} · Подстанция: {power} · Записки: {notes}/{notesTotal} · Комнаты: {rooms}/{roomsTotal}',
  },

  /* ---- victory ---- */
  'win.eyebrow': { uz: 'Qochdingiz', en: 'You escaped', ru: 'Вы сбежали' },
  'win.title': { uz: 'OZODLIK', en: 'FREEDOM', ru: 'СВОБОДА' },
  'win.story': {
    uz: 'Siz kasalxonadan chiqdingiz. Lekin u hali ham turibdi.',
    en: 'You are out of the hospital. But it is still standing.',
    ru: 'Вы вышли из больницы. Но она всё ещё стоит.',
  },
  'win.replay': { uz: "QAYTA O'YNASH", en: 'PLAY AGAIN', ru: 'ИГРАТЬ СНОВА' },
  'win.time': { uz: 'Vaqt: {time}', en: 'Time: {time}', ru: 'Время: {time}' },
  'win.notesAll': {
    uz: "Endi hammasi ma'lum: Protokol 7 ni imzolagan odam o'zi imzo edi. Siz uni yaratdingiz, va u sizni eslab qoldi. Darvoza ochiq, yomg'ir tugadi — lekin u hali ham devorlar ichida turibdi.",
    en: 'Now it all fits: the man who signed Protocol 7 was the signature. You made him, and he remembered you. The gate is open and the rain has stopped — but he is still inside those walls.',
    ru: 'Теперь всё сходится: человек, подписавший Протокол 7, и был подписью. Вы создали его, и он запомнил вас. Ворота открыты, дождь кончился — но он всё ещё внутри этих стен.',
  },
  'win.notesMissed': {
    uz: "Siz {missed} ta qaydni o'qimadingiz. Haqiqat shu devorlarda qoldi.",
    en: 'You never read {missed} of the notes. The truth stayed in those walls.',
    ru: 'Вы не прочитали {missed} записок. Правда осталась в этих стенах.',
  },
  'win.stats': {
    uz: '{ending} · Qaydlar: {notes}/{notesTotal} · Kartalar: {card}/1 · Podstansiya: {power} · Xonalar: {rooms}/{roomsTotal} · Eng yaxshi vaqt: {best}',
    en: '{ending} · Notes: {notes}/{notesTotal} · Cards: {card}/1 · Substation: {power} · Rooms: {rooms}/{roomsTotal} · Best time: {best}',
    ru: '{ending} · Записки: {notes}/{notesTotal} · Карты: {card}/1 · Подстанция: {power} · Комнаты: {rooms}/{roomsTotal} · Лучшее время: {best}',
  },

  /* ---- intro cutscene ---- */
  'intro.skip': { uz: 'INTRODAN O‘TISH ▸▸', en: 'SKIP INTRO ▸▸', ru: 'ПРОПУСТИТЬ ▸▸' },
  'intro.tapeLabel': { uz: 'AUDIO KASETASI #0 — DR. ARIS', en: 'AUDIO TAPE #0 — DR. ARIS', ru: 'АУДИОПЛЁНКА №0 — Д-Р АРИС' },
  'intro.narration': {
    uz: "1987-yil, 4-noyabr. Sent-Jud ruhiy kasalxonasi. Siz oxirgi jarrohsiz. Protokol 7 kuchga kirdi... Eshiklar tashqaridan zanjirlandi. Bemorlar bir xonada. Va koridorda kimdir... sizni eslayotgan ovoz bilan kelmoqda.",
    en: '4 November 1987. St. Jude asylum. You are the last surgeon left. Protocol 7 came into force... The doors were chained from the outside. The patients are in one room. And in the corridor, someone is coming - in a voice that remembers you.',
    ru: '4 ноября 1987 года. Лечебница Сент-Джуд. Вы — последний оставшийся хирург. Протокол 7 вступил в силу... Двери заперты снаружи. Пациенты в одной палате. А в коридоре кто-то идёт — голосом, который помнит вас.',
  },
  'intro.drag': {
    uz: '...yaqinlashayotgan qadamlar, va ho‘l pichoqning yerga sudralishi...',
    en: '...footsteps outside, and a wet blade dragging across the tiles...',
    ru: '...шаги за дверью и скрежет мокрого лезвия по плитке...',
  },
  'intro.wall': {
    uz: 'ESLAMANG. U SHU YERDA.',
    en: 'DO NOT REMEMBER. HE IS HERE.',
    ru: 'НЕ ВСПОМИНАЙ. ОН ЗДЕСЬ.',
  },
  'intro.whisper': {
    uz: "4-noyabr... O'sha ovoz... kim gapirdi? U qaytishidan oldin chiqish yo'lini topishim kerak.",
    en: 'November 4th... That voice... who was speaking? I must find a way out before he returns.',
    ru: '4 ноября... Этот голос... кто говорил? Я должен найти выход, пока он не вернулся.',
  },

  /* ---- objectives ---- */
  'obj.power.withFuse': { uz: 'Shchotga quvvat bering — saqlagich bor', en: 'Power the breaker — you have the fuse', ru: 'Подайте питание на щиток — предохранитель у вас' },
  'obj.power.noFuse': { uz: 'Shchotga quvvat bering — saqlagich omborxonada', en: 'Power the breaker — the fuse is in the store room', ru: 'Подайте питание на щиток — предохранитель в кладовой' },
  'obj.keys': { uz: 'Kalitlar {keys}/{total} — kasalxonani qidiring', en: 'Keys {keys}/{total} — search the hospital', ru: 'Ключи {keys}/{total} — обыщите больницу' },
  'obj.escape': { uz: 'Chiqish eshigi ochilmoqda — qabulxonaga boring', en: 'The exit is unlocking — get to reception', ru: 'Выход открывается — идите в приёмную' },
  'obj.outside': { uz: 'Tashqarida: karta {card} · podstansiya {power}', en: 'Outside: card {card} · substation {power}', ru: 'Снаружи: карта {card} · подстанция {power}' },
  'obj.gate': { uz: 'Asosiy darvoza ochildi — shimolga yuguring!', en: 'The main gate is open — run north!', ru: 'Главные ворота открыты — бегите на север!' },

  /* ---- interaction prompts ---- */
  'act.take': { uz: '{item} olish', en: 'Take the {item}', ru: 'Взять: {item}' },
  'act.readNote': { uz: 'Qaydni oqish', en: 'Read the note', ru: 'Прочитать записку' },
  'act.pry': { uz: 'Lom bilan ochish', en: 'Pry it open with the crowbar', ru: 'Вскрыть ломом' },
  'act.boarded': { uz: 'Eshik mixlangan', en: 'The door is boarded shut', ru: 'Дверь заколочена' },
  'act.installFuse': { uz: "Saqlagichni o'rnatish", en: 'Install the fuse', ru: 'Вставить предохранитель' },
  'act.needFuse': { uz: 'Saqlagich kerak', en: 'A fuse is needed', ru: 'Нужен предохранитель' },

  /* ---- gameplay messages ---- */
  'msg.controlsTouch': { uz: 'Joystick bilan harakatlaning — 3 ta kalitni toping!', en: 'Move with the joystick — find the three keys!', ru: 'Двигайтесь джойстиком — найдите три ключа!' },
  'msg.controlsDesktop': { uz: "Narsalarni qo'l bilan oling (E). Shchotga esa saqlagich kerak.", en: 'Everything is picked up by hand (E). The breaker needs a fuse.', ru: 'Предметы берутся вручную (E). Для щитка нужен предохранитель.' },
  'msg.powerOn': { uz: "Elektr yoqildi. Kasalxona ham uyg'ondi.", en: 'The power is on. So is the hospital.', ru: 'Питание включено. Больница тоже проснулась.' },
  'msg.boarded': { uz: 'Eshik mixlangan. Lom kerak.', en: 'The door is boarded shut. You need a crowbar.', ru: 'Дверь заколочена. Нужен лом.' },
  'msg.noFuse': { uz: "Shchotda saqlagich yo'q. Ombxonadan toping.", en: 'There is no fuse in the breaker. Look in the store room.', ru: 'В щитке нет предохранителя. Ищите в кладовой.' },
  'msg.keyFound': { uz: 'Kalit {keys}/{total} topildi', en: 'Key {keys}/{total} found', ru: 'Найден ключ {keys}/{total}' },
  'msg.cardFound': { uz: 'Darvoza kartasi topildi', en: 'The gate keycard is yours', ru: 'Найдена карта от ворот' },
  'msg.itemTaken': { uz: '{item} olindi — {hint}', en: '{item} taken — {hint}', ru: '{item} получено — {hint}' },
  'msg.resumed': {
    uz: "Yurish davom etmoqda — narsalaringiz va vazifalaringiz joyida",
    en: 'Back on your feet — your kit and your progress are where you left them',
    ru: 'Вы снова на ногах — вещи и прогресс на месте',
  },
  'msg.itemUsed': { uz: '{item}: {hint}', en: '{item}: {hint}', ru: '{item}: {hint}' },
  'msg.pried': { uz: 'Mixlar chiqdi — dush xonasi ochildi', en: 'The boards came away — the shower room is open', ru: 'Доски сняты — душевая открыта' },
  'msg.battery': { uz: 'Batareya almashtirildi', en: 'Battery replaced', ru: 'Батарея заменена' },
  'msg.glass': { uz: 'Shisha sinadi — u ovozga qaradi', en: 'The glass shattered — he looked at the noise', ru: 'Стекло разбилось — он пошёл на звук' },
  'msg.glassVial': { uz: 'Ampula chirsillab sinadi — u o\'sha tomonga burildi', en: 'The ampoule cracks open sharp — he turns towards it', ru: 'Ампула звонко лопнула — он повернулся на звук' },
  'msg.allKeys': { uz: 'Barcha kalitlar topildi — qabulxonaga yuguring!', en: 'All keys found — run for reception!', ru: 'Все ключи найдены — бегите в приёмную!' },
  'msg.exitUnpowered': { uz: 'Eshik elektrsiz ochilmaydi — generatorni toping', en: 'The door has no power — find the generator', ru: 'Дверь без питания — найдите генератор' },
  'msg.exitLocked': { uz: 'Eshik qulflangan — {left} ta kalit kerak', en: 'The door is locked — {left} more keys needed', ru: 'Дверь заперта — нужно ещё {left} ключа' },
  'msg.exitOpen': { uz: 'Eshik ochildi. Hovliga chiqing — asosiy darvoza shimolda.', en: 'The door is open. Head outside — the main gate is north.', ru: 'Дверь открыта. Выходите во двор — главные ворота на севере.' },
  'msg.outdoors': { uz: "Tashqarida. Yomg'ir yog'adi va osmon ochiq.", en: 'Outside. It is raining and the sky is open.', ru: 'Снаружи. Идёт дождь, небо открыто.' },
  'msg.substationOn': { uz: 'Podstansiya ishga tushdi — darvoza motori quvvat oldi.', en: 'The substation is running — the gate motor has power.', ru: 'Подстанция запущена — мотор ворот под питанием.' },
  'msg.gateNeedsCard': { uz: 'Darvoza motori ishlaydi — endi karta kerak.', en: 'The gate motor runs — now it needs the card.', ru: 'Мотор ворот работает — теперь нужна карта.' },
  'msg.gateNoPower': { uz: "Darvoza motori quvvatsiz — podstansiyani yoqing", en: 'The gate motor is dead — start the substation', ru: 'Мотор ворот без питания — запустите подстанцию' },
  'msg.gateLocked': { uz: 'Darvoza qulflangan — qo‘riqxonadan kartani toping', en: 'The gate is locked — find the card in the guard post', ru: 'Ворота заперты — найдите карту в сторожке' },
  'msg.gateOpen': { uz: 'ASOSIY DARVOZA OCHILDI — yuguring!', en: 'THE MAIN GATE IS OPEN — RUN!', ru: 'ГЛАВНЫЕ ВОРОТА ОТКРЫТЫ — БЕГИТЕ!' },
  'msg.hurt': { uz: 'Yaralandingiz — {health}%', en: 'You are hurt — {health}%', ru: 'Вы ранены — {health}%' },
  'msg.batteryDead': { uz: "Batareya tugadi — qorong'uda quvvatlanadi", en: 'The battery is dead — it recharges in the dark', ru: 'Батарея села — она заряжается в темноте' },
  'msg.noBattery': { uz: "Batareya yo'q — biroz kutib turing", en: 'No battery left — wait a moment', ru: 'Батареи нет — подождите немного' },
  'msg.note': { uz: 'Qayd {notes}/{total} — {title}', en: 'Note {notes}/{total} — {title}', ru: 'Записка {notes}/{total} — {title}' },

  /* ---- minimap / floors ---- */
  'floor.outside': { uz: 'HOVLI', en: 'GROUNDS', ru: 'ДВОР' },
  'floor.1': { uz: '1-QAVAT', en: 'FLOOR 1', ru: '1 ЭТАЖ' },
  'floor.2': { uz: '2-QAVAT', en: 'FLOOR 2', ru: '2 ЭТАЖ' },
  'floor.3': { uz: 'CHUQUR PODVAL', en: 'DEEP BASEMENT', ru: 'ГЛУБОКИЙ ПОДВАЛ' },
  'floor.4': { uz: '3-QAVAT', en: 'FLOOR 3', ru: '3 ЭТАЖ' },
  'floor.1.sub': { uz: 'qabulxona', en: 'reception', ru: 'приёмная' },
  'floor.2.sub': { uz: 'bosh shifokor', en: 'chief surgeon', ru: 'главный врач' },
  'floor.3.sub': { uz: 'laboratoriya', en: 'laboratory', ru: 'лаборатория' },
  'floor.4.sub': { uz: 'izolyator', en: 'isolation ward', ru: 'изолятор' },
  'floor.outside.sub': { uz: 'hovli', en: 'the yard', ru: 'двор' },

  /* ---- fixtures: doors, drawers, lockers ---- */
  'act.doorOpen': { uz: 'Eshikni ochish', en: 'Open the door', ru: 'Открыть дверь' },
  'act.doorClose': { uz: 'Eshikni yopish', en: 'Close the door', ru: 'Закрыть дверь' },
  'act.drawer': { uz: 'Tortmani tortish', en: 'Pull the drawer', ru: 'Выдвинуть ящик' },
  'act.drawerKey': { uz: 'Tortmani tortish — kalit bor', en: 'Pull the drawer — a key is in there', ru: 'Выдвинуть ящик — там ключ' },
  'act.drawerShut': { uz: 'Tortmani yopish', en: 'Push the drawer shut', ru: 'Закрыть ящик' },
  'act.takeKey': { uz: 'Kalitni olish', en: 'Take the key', ru: 'Взять ключ' },
  'act.takeLoot': { uz: 'Ichidagini olish', en: 'Take what is inside', ru: 'Забрать содержимое' },
  'act.lockerEnter': { uz: 'Shkafga kirib yashirinish', en: 'Climb into the locker', ru: 'Забраться в шкаф' },
  'act.lockerLeave': { uz: 'Shkafdan chiqish', en: 'Climb back out', ru: 'Выбраться из шкафа' },
  'msg.drawerLoot': {
    uz: 'Tortmada bor edi: {item}',
    en: 'There was something in the drawer: {item}',
    ru: 'В ящике было: {item}',
  },
  'msg.lockerIn': {
    uz: 'Shkafda yashirindingiz — Aris sizni sezmaydi',
    en: 'Hidden in the locker — Aris cannot see you',
    ru: 'Вы спрятались в шкафу — Арис вас не видит',
  },
  'msg.lockerOut': { uz: 'Shkafdan chiqdingiz', en: 'You climbed back out', ru: 'Вы выбрались из шкафа' },

  /* ---- the vintage cage elevator ---- */
  'lift.title': { uz: 'LIFT PANELI', en: 'LIFT PANEL', ru: 'ПАНЕЛЬ ЛИФТА' },
  'lift.location': { uz: 'JOYLASHUV', en: 'LOCATION', ru: 'МЕСТО' },
  'lift.enter': { uz: 'Avval lift ichiga kiring', en: 'Step inside the lift first', ru: 'Сначала войдите в лифт' },
  'lift.alreadyHere': { uz: 'Lift shu qavatda turibdi', en: 'The lift is already on this floor', ru: 'Лифт уже на этом этаже' },
  'lift.arrived': { uz: 'Yetib keldik: {floor}', en: 'Arrived at {floor}', ru: 'Прибытие: {floor}' },
  'lift.ambush': {
    uz: 'Eshik oldida kimdir kutib turibdi...',
    en: 'Something is waiting at the doors...',
    ru: 'Кто-то ждёт у дверей...',
  },
  // Fired when the creature comes up behind the player, since no floor is
  // reachable from another on foot any more.
  'lift.followed': {
    uz: 'U ham siz bilan birga ko\u2018tarildi...',
    en: 'It came up with you...',
    ru: 'Оно поднялось вместе с вами...',
  },

  /* ---- items ---- */
  /* ---- the hotbar: what is in the slot, and what it does ---- */
  'inv.empty': { uz: "Bo'sh slot", en: 'Empty slot', ru: 'Пустой слот' },
  'inv.useHint': {
    uz: 'yana bosib ishlatasiz',
    en: 'press the slot again to use',
    ru: 'нажмите слот ещё раз, чтобы использовать',
  },

  'item.key.name': { uz: 'Kalit', en: 'Key', ru: 'Ключ' },
  'item.key.hint': { uz: 'Qabulxonadagi eshik uchun', en: 'For the reception door', ru: 'Для двери в приёмной' },
  'item.card.name': { uz: 'Darvoza kartasi', en: 'Gate keycard', ru: 'Карта от ворот' },
  'item.card.hint': { uz: 'Asosiy darvoza uchun', en: 'For the main gate', ru: 'Для главных ворот' },
  'item.fuse.name': { uz: 'Saqlagich', en: 'Fuse', ru: 'Предохранитель' },
  'item.fuse.hint': { uz: 'Generator shchoti uchun', en: 'For the generator breaker', ru: 'Для щитка генератора' },
  'item.crowbar.name': { uz: 'Lom', en: 'Crowbar', ru: 'Лом' },
  'item.crowbar.hint': { uz: 'Tiqilib qolgan eshik uchun', en: 'For the door that is nailed shut', ru: 'Для заколоченной двери' },
  'item.battery.name': { uz: 'Batareya', en: 'Battery', ru: 'Батарея' },
  'item.battery.hint': { uz: 'Fonarchani quvvatlaydi', en: 'Recharges the flashlight', ru: 'Питает фонарь' },
  'item.bottle.name': { uz: 'Shisha', en: 'Bottle', ru: 'Бутылка' },
  'item.bottle.hint': { uz: 'Ovoz chiqarish uchun otish mumkin', en: 'Throw it to make a noise', ru: 'Бросьте, чтобы создать шум' },
  'item.vial.name': { uz: 'Ampula', en: 'Vial', ru: 'Ампула' },
  'item.vial.hint': { uz: 'Yengil shisha — uzoqqa uchadi va o\'tkir sinadi', en: 'Thin glass: it flies further and cracks sharper', ru: 'Тонкое стекло: летит дальше и звонче бьётся' },
  'item.acid.name': { uz: 'Kislota', en: 'Acid', ru: 'Кислота' },
  'item.acid.hint': { uz: 'Metallni eritadi', en: 'Dissolves metal', ru: 'Растворяет металл' },
  'item.ignition.name': { uz: 'Kalit (mashina)', en: 'Ignition key', ru: 'Ключ зажигания' },
  'item.ignition.hint': { uz: 'Tez yordam mashinasi uchun', en: 'For the ambulance', ru: 'Для машины скорой помощи' },
  'item.boltcutters.name': { uz: 'Qaychi', en: 'Bolt cutters', ru: 'Кусачки' },
  'item.boltcutters.hint': { uz: 'Zanjirlarni kesish uchun', en: 'Cuts chains', ru: 'Перерезают цепи' },
  'item.uv.name': { uz: 'UV chiroq', en: 'UV lamp', ru: 'УФ-лампа' },
  'item.uv.hint': { uz: 'Yashirin yozuvlarni ochish', en: 'Reveals hidden writing', ru: 'Проявляет скрытые надписи' },

  /* ---- Touchable props: what the action button would do ----------------- */
  'act.lightsOn': { uz: 'Chiroqni yoqish', en: 'Switch the lights on', ru: 'Включить свет' },
  'act.lightsOff': { uz: 'Chiroqni o\'chirish', en: 'Switch the lights off', ru: 'Выключить свет' },
  'act.tapOn': { uz: 'Jo\'mrakni ochish', en: 'Turn the tap on', ru: 'Открыть кран' },
  'act.tapOff': { uz: 'Jo\'mrakni yopish', en: 'Turn the tap off', ru: 'Закрыть кран' },
  'act.radioOn': { uz: 'Radioni yoqish', en: 'Switch the radio on', ru: 'Включить радио' },
  'act.radioOff': { uz: 'Radioni o\'chirish', en: 'Switch the radio off', ru: 'Выключить радио' },
  'act.valveTurn': { uz: 'Klapanni burash', en: 'Turn the valve', ru: 'Повернуть вентиль' },
  'act.valveShut': { uz: 'Klapan yopilgan', en: 'The valve is wound shut', ru: 'Вентиль закручен' },
  'act.lightboxOn': { uz: 'Rentgen shkafini yoqish', en: 'Switch on the lightbox', ru: 'Включить бокс' },
  'act.lightboxOff': { uz: 'Rentgen shkafini o\'chirish', en: 'Switch off the lightbox', ru: 'Выключить бокс' },
  'act.cctvOn': { uz: 'Kameralarni yoqish', en: 'Boot the monitors', ru: 'Включить мониторы' },
  'act.cctvOff': { uz: 'Kameralarni o\'chirish', en: 'Shut the monitors down', ru: 'Выключить мониторы' },
  'act.mirror': { uz: 'Ko\'zguni ko\'zdan kechirish', en: 'Look into the mirror', ru: 'Заглянуть в зеркало' },
  'act.extinguisher': { uz: 'O\'t o\'chirgichni olish', en: 'Take the extinguisher', ru: 'Снять огнетушитель' },
  'act.extinguisherEmpty': { uz: 'Ballon bo\'sh', en: 'The cylinder is spent', ru: 'Баллон пуст' },
  'act.cot': { uz: 'Karavotni qidirish', en: 'Search the cot', ru: 'Обыскать койку' },
  'act.cotSearched': { uz: 'Karavot qidirilgan', en: 'The cot has been searched', ru: 'Койка обыскана' },
  'act.phoneRepair': { uz: 'Uzilgan simni ulash', en: 'Splice the severed wire', ru: 'Соединить оборванный провод' },
  'act.phoneListen': { uz: 'Trubkani ko\'tarib tinglash', en: 'Lift the handset and listen', ru: 'Снять трубку и слушать' },
  'act.phoneDead': { uz: 'Aloqa yo\'q', en: 'The line is dead', ru: 'Линия мертва' },
  'act.vialTake': { uz: 'Ampula olish', en: 'Take a vial', ru: 'Взять ампулу' },
  'act.vialEmpty': { uz: 'Rak bo\'sh', en: 'The rack is empty', ru: 'Штатив пуст' },
  'act.bin': { uz: 'Savatni titish', en: 'Rummage in the bin', ru: 'Покопаться в мусоре' },
  'act.binEmpty': { uz: 'Savatda boshqa narsa yo\'q', en: 'Nothing else in the bin', ru: 'В мусоре больше ничего' },
  'act.cart': { uz: 'Tormozni tushirib aravani mustahkamlash', en: 'Drop the brake and brace the cart', ru: 'Опустить тормоз и заклинить тележку' },
  'act.cartBraced': { uz: 'Tormozni ko\'tarish', en: 'Release the brake', ru: 'Отпустить тормоз' },
  'act.cabinetOpen': { uz: 'Shkafni ochish', en: 'Open the cabinet', ru: 'Открыть шкаф' },
  'act.cabinetShut': { uz: 'Shkafni yopish', en: 'Shut the cabinet', ru: 'Закрыть шкаф' },
  'act.cabinetLocked': { uz: 'Shkaf qulflangan', en: 'The cabinet is locked', ru: 'Шкаф заперт' },
  'act.freezerOpen': { uz: 'Muzlatgichni ochish', en: 'Open the freezer', ru: 'Открыть камеру' },
  'act.freezerLocked': { uz: 'Muzlatgich qulflangan', en: 'The freezer is locked', ru: 'Камера заперта' },
  'act.safeOpen': { uz: 'Rasmni chetga surish', en: 'Swing the painting aside', ru: 'Отодвинуть картину' },
  'act.vanBonnet': { uz: 'Kapotni ochish', en: 'Open the bonnet', ru: 'Открыть капот' },
  'act.vanBattery': { uz: 'Akkumulyatorni o\'rnatish', en: 'Fit the battery', ru: 'Поставить аккумулятор' },
  'act.vanIgnition': { uz: 'O\'t oldirish', en: 'Hotwire the ignition', ru: 'Замкнуть зажигание' },
  'act.meltPadlock': { uz: 'Qulfni kislota bilan eritish', en: 'Melt the padlock with acid', ru: 'Растворить замок кислотой' },
  'act.padlockLocked': { uz: 'Qulf — kislota kerak', en: 'A padlock — it needs acid', ru: 'Замок — нужна кислота' },
  'act.cutChain': { uz: 'Zanjirni qaychi bilan kesish', en: 'Cut the chain', ru: 'Перекусить цепь' },
  'act.chainLocked': { uz: 'Zanjir — qaychi kerak', en: 'A chain — it needs bolt cutters', ru: 'Цепь — нужны кусачки' },

  /* ---- Prop messages ---------------------------------------------------- */
  'msg.lightsOn': { uz: 'Lampa yonib, xona ko\'rindi.', en: 'The tube strikes and the room comes back.', ru: 'Лампа вспыхивает, комната возвращается.' },
  'msg.lightsOff': { uz: 'Xona qorong\'ilikka cho\'mdi.', en: 'The room drops into the dark.', ru: 'Комната уходит в темноту.' },
  'msg.tapOn': { uz: 'Zanglagan suv oqib tushdi.', en: 'Rusty water hammers into the basin.', ru: 'Ржавая вода бьёт в раковину.' },
  'msg.tapOff': { uz: 'Jo\'mrak yopildi. Tomchilash davom etadi.', en: 'The tap shuts. It keeps dripping.', ru: 'Кран закрыт. Капли продолжают падать.' },
  'msg.radioOn': { uz: 'Statika koridorni yorib o\'tdi. Kimdir boshini burdi.', en: 'Static howls down the corridor. Something turns its head.', ru: 'Статика ревёт по коридору. Кто-то поворачивает голову.' },
  'msg.radioOff': { uz: 'Radio o\'chdi.', en: 'The radio dies.', ru: 'Радио глохнет.' },
  'msg.cartBraced': { uz: 'Arava g\'ichillab to\'xtadi. Tormoz tushdi — yo\'l to\'sildi.', en: 'The cart locks with a clank. The doorway is barred.', ru: 'Тележка замирает с лязгом. Проход перекрыт.' },
  'msg.cartReleased': { uz: 'Tormoz ko\'tarildi, arava yana yuradi.', en: 'The brake lifts and the cart rolls free again.', ru: 'Тормоз поднят, тележка снова катится.' },
  'msg.valveSealed': { uz: 'Bug\' to\'xtadi. Yana {left} ta klapan qoldi.', en: 'The steam dies back. {left} valves to go.', ru: 'Пар стихает. Осталось вентилей: {left}.' },
  'msg.valveShut': { uz: 'Bu klapan allaqachon yopilgan.', en: 'This valve is already wound shut.', ru: 'Этот вентиль уже закручен.' },
  'msg.xrayCode': { uz: 'Shkaf yondi: 12-MUZLATGICH / KOD 3-9-1-7.', en: 'The lightbox comes up: FREEZER 12 / CODE 3-9-1-7.', ru: 'Бокс загорается: КАМЕРА 12 / КОД 3-9-1-7.' },
  'msg.cctvOn': { uz: 'Monitorlar yondi. Dorixona shkaflari ochildi.', en: 'The monitors come up. The pharmacy cabinets unlock.', ru: 'Мониторы ожили. Шкафы аптеки открылись.' },
  'msg.mirror': { uz: 'Ko\'zguda chiziqlar teskari o\'yilgan.', en: 'In the mirror the tally marks are carved the wrong way round.', ru: 'В зеркале зарубки вырезаны наоборот.' },
  'msg.mirrorAgain': { uz: 'Shisha sovuq. Faqat siz harakatlanasiz.', en: 'The glass is cold. Nothing moves but you.', ru: 'Стекло холодное. Двигаетесь только вы.' },
  'msg.lockpick': { uz: 'Patnisda egilgan igna bor edi. U 404-xonani ochadi.', en: 'A bent pin in the tray. It will open Room 404.', ru: 'Согнутая отмычка в лотке. Она откроет палату 404.' },
  'msg.cotEmpty': { uz: 'Karavotda faqat quruq qon bor.', en: 'Nothing but dried blood in the mattress.', ru: 'В матрасе только засохшая кровь.' },
  'msg.binFind': { uz: 'Savat ichidan yaxlit shisha chiqdi — otish mumkin.', en: 'A whole bottle in the bin - good for throwing.', ru: 'В мусоре целая бутылка — можно бросить.' },
  'msg.binEmpty': { uz: 'Faqat zanglagan sim. Olib yurishga arzimaydi.', en: 'Slivers of rusted wire. Nothing worth carrying.', ru: 'Кусочки ржавой проволоки. Нести нечего.' },
  'msg.vialTaken': { uz: 'Ampula qo\'lingizda. Yana {left} ta qoldi.', en: 'A vial comes off the rack. {left} left.', ru: 'Ампула у вас. Осталось {left}.' },
  'msg.vialEmpty': { uz: 'Rak bo\'shadi — faqat rezina qopqoqlar.', en: 'The rack is picked clean - nothing but rubber caps.', ru: 'Штатив пуст — только резиновые колпачки.' },
  'msg.phoneRepaired': { uz: 'Sim uchqun bilan tutashdi. Liniyada shovqin bor.', en: 'The wire sparks and bites. There is a line humming on the other end.', ru: 'Провод искрит и схватывается. На том конце слышен гул линии.' },
  'msg.phoneDispatch': { uz: 'Uzoqdagi dispetcher: "...yettinchi blok, javob bering... qochish darvozasi..."', en: 'A dispatcher, far off: "...block seven, do you read... the escape gate is..."', ru: 'Далекий диспетчер: «...седьмой блок, ответьте... ворота для выхода...»' },
  'msg.phoneReplay': { uz: 'Liniya o\'sha yozuvni yana aylantirmoqda.', en: 'The line is playing the same recording back.', ru: 'Линия повторяет ту же запись.' },
  'msg.extinguisher': { uz: 'Ko\'pik yuziga urildi: u orqaga tisarilib, niqobini yulib tashlayapti.', en: 'A face full of foam. He staggers back, clawing at his mask.', ru: 'Пена в лицо. Он отступает, срывая маску.' },
  'msg.extinguisherEmpty': { uz: 'Ballon bo\'sh.', en: 'The cylinder is spent.', ru: 'Баллон пуст.' },
  'msg.cabinetLocked': { uz: 'Qulflangan. Dorixona shkaflari xavfsizlik xonasidan ochiladi.', en: 'Locked. The pharmacy cabinets open from the security room.', ru: 'Заперо. Шкафы аптеки открываются из комнаты охраны.' },
  'msg.freezerLocked': { uz: '12-muzlatgich qulflangan. To\'rt xonali kod kerak.', en: 'Freezer #12 is bolted. It wants a four-digit code.', ru: 'Камера №12 заперта. Нужен четырёхзначный код.' },
  'msg.paintingAside': { uz: 'Rasm chetga surildi — ortida seyf.', en: 'The painting swings aside. A safe behind it.', ru: 'Картина отходит. За ней сейф.' },
  'msg.lootTaken': { uz: '{item} olindi. {hint}', en: 'You take the {item}. {hint}', ru: 'Вы берёте: {item}. {hint}' },
  'msg.chainAcid': { uz: 'Qulf zanglab ketgan. Kislota uni yeydi.', en: 'The padlock is rusted solid. Acid would eat through it.', ru: 'Замок проржавел. Кислота его съест.' },
  'msg.chainCutters': { uz: 'Zanjir barmoq qadar qalin. Qaychi kerak.', en: 'A chain with links as thick as a thumb. You need cutters.', ru: 'Цепь толщиной с палец. Нужны кусачки.' },
  'msg.padlockMelted': { uz: 'Kislota dastani yeb, qulf tushib ketdi. Zanjir bo\'shadi.', en: 'The acid eats the shackle and the padlock drops. The chain falls slack.', ru: 'Кислота съедает дужку, замок падает. Цепь обвисает.' },
  'msg.chainCut': { uz: 'Qaychi zanjirni kesdi. Eshik ochildi.', en: 'The cutters shear the chain. The door gives.', ru: 'Кусачки перерезают цепь. Дверь поддаётся.' },
  'msg.fuseSeated': { uz: 'Saqlagich o\'rnatildi ({done}/{total}). Panelda yana bittasi kerak.', en: 'A fuse seated ({done}/{total}). The panel still wants another.', ru: 'Предохранитель вставлен ({done}/{total}). Нужен ещё один.' },
  'msg.vanNeedsBattery': { uz: 'Akkumulyator uyasi bo\'sh. 12V kerak.', en: 'The battery bay is empty. It wants a twelve-volt cell.', ru: 'Гнездо аккумулятора пусто. Нужен на 12 вольт.' },
  'msg.vanRunning': { uz: 'Generator tutib oldi: hovli chiroqlari yondi, darvoza motori javob berdi.', en: 'The alternator catches. The yard lights come up and the gate motor answers.', ru: 'Генератор схватил. Свет во дворе зажёгся, мотор ворот отозвался.' },
  'msg.stageDone': { uz: 'YANGI VAZIFA: {task}', en: 'NEW OBJECTIVE: {task}', ru: 'НОВОЕ ЗАДАНИЕ: {task}' },
  'obj.quest': { uz: 'VAZIFA [{index}/{total}]: {task}', en: 'OBJECTIVE [{index}/{total}]: {task}', ru: 'ЗАДАНИЕ [{index}/{total}]: {task}' },
  'hud.lore': { uz: 'HUJJATLAR', en: 'LORE DOCUMENTS', ru: 'ДОКУМЕНТЫ' },
};

const missing = new Set<string>();

/** Dictionary lookup with {placeholder} substitution. */
export function t(key: string, params?: Record<string, string | number>): string {
  const entry = UI[key];
  if (!entry) {
    // Reported once per key rather than spamming the console every frame.
    if (!missing.has(key)) {
      missing.add(key);
      console.warn(`[i18n] missing key: ${key}`);
    }
    return key;
  }
  let text = entry[current];
  if (params) {
    for (const name of Object.keys(params)) {
      text = text.split(`{${name}}`).join(String(params[name]));
    }
  }
  return text;
}

/** Shorthand for a one-off inline string that has no dictionary key. */
export function pick(value: Localized): string {
  return value[current];
}

/**
 * Applies every `data-i18n` element in the document. `data-i18n-attr` narrows
 * the target to one attribute (used for placeholders and aria labels).
 */
export function applyTranslations(root: ParentNode = document): void {
  const nodes = root.querySelectorAll<HTMLElement>('[data-i18n]');
  nodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (!key) return;
    const text = t(key);
    const attr = node.dataset.i18nAttr;
    if (attr) node.setAttribute(attr, text);
    else node.textContent = text;
  });

  const titles = root.querySelectorAll<HTMLElement>('[data-i18n-title]');
  titles.forEach((node) => {
    const key = node.dataset.i18nTitle;
    if (key) node.setAttribute('title', t(key));
  });

  const placeholders = root.querySelectorAll<HTMLElement>('[data-i18n-placeholder]');
  placeholders.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (key) node.setAttribute('placeholder', t(key));
  });

  document.documentElement.lang = current;
}
