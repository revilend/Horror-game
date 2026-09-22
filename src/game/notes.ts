import type { Localized } from './i18n';

/**
 * The story, told through twenty notes scattered across St Jude.
 *
 * Kept apart from Game.ts because each note exists three times over, and the
 * notes are the one place where the translation has to read as prose rather
 * than as a label.
 */
export interface NoteDef {
  title: Localized;
  text: Localized;
}

export const NOTES: NoteDef[] = [
  {
    title: { uz: 'Kirish jurnali — Ren', en: "Admission log — Ren", ru: 'Журнал приёма — Рен' },
    text: {
      uz: "Mening ismim Doktor Elias Ren. Yigirma yil shu devorlar ichida jarrohlik qildim. Ular menga aytishdi: bu bemorlar boshqacha. Men ishonmadim. 1987-yil 4-noyabrda men Protokol 7 ni imzoladim va o'sha imzo hali ham qonayapti.",
      en: 'My name is Dr Elias Ren. I cut into people inside these walls for twenty years. They told me these patients were different. I did not believe them. On 4 November 1987 I signed Protocol 7, and that signature is still bleeding.',
      ru: 'Меня зовут доктор Элиас Рен. Двадцать лет я оперировал людей в этих стенах. Мне говорили, что эти пациенты другие. Я не поверил. 4 ноября 1987 года я подписал Протокол 7, и эта подпись до сих пор кровоточит.',
    },
  },
  {
    title: { uz: "Ro'yxat", en: 'The register', ru: 'Реестр' },
    text: {
      uz: "Biz ularning ismlarini yozmadik. Faqat raqamlar: №29, №31, №37. Eng oxirgisi eng kattasi edi. Va eng jim. U meni tanigan birinchi kishi edi — va oxirgisi bo'lib qoldi.",
      en: 'We never wrote down their names. Only numbers: No.29, No.31, No.37. The last one was the biggest. And the quietest. He was the first person to recognise me — and the last.',
      ru: 'Мы не записывали их имена. Только номера: №29, №31, №37. Последний был самым крупным. И самым тихим. Он первым меня узнал — и последним.',
    },
  },
  {
    title: { uz: "Qorong'ulik", en: 'Darkness', ru: 'Темнота' },
    text: {
      uz: "№31 bir kechada sochlari oqarib ketdi. U qichqirmadi. Faqat \"u eshikdan chiqadi\" deb takrorladi. Biz uni zanjirlab qo'ydik. Men zanjirni men tanladim — bu men tanlagan oxirgi narsa edi.",
      en: 'No.31 went white-haired in a single night. He did not scream. He only repeated, "he comes out of the door". We chained him. I chose the chain — it was the last thing I ever chose.',
      ru: '№31 поседел за одну ночь. Он не кричал. Он только повторял: «он выходит из двери». Мы заковали его. Цепь выбирал я — это было последнее, что я выбрал.',
    },
  },
  {
    title: { uz: 'Kuzatuv', en: 'Observation', ru: 'Наблюдение' },
    text: {
      uz: "№37 ni ushlab turish uchun to'rt kishi kerak bo'ldi. U bizga qaramadi. U doim devorga qaradi — go'yo u orqasidan kelayotgan narsani ko'rgan edi. Bitta kechqurun u menga qaradi va \"Ren, sen ham birimiz\" dedi.",
      en: 'It took four of us to hold No.37 down. He never looked at us. He always looked at the wall — as if he could see what was coming up behind him. One evening he looked at me and said, "Ren, you are one of us too."',
      ru: 'Чтобы удержать №37, понадобились четверо. Он не смотрел на нас. Он всегда смотрел в стену — будто видел то, что поднимается у него за спиной. Однажды вечером он посмотрел на меня и сказал: «Рен, ты тоже один из нас».',
    },
  },
  {
    title: { uz: 'Rentgen', en: 'X-ray', ru: 'Рентген' },
    text: {
      uz: "Suratda uning suyaklari boshqacha edi. Men o'sha plyonkani ko'rganimdan keyin ikki kun uxlamadim. Uch kundan keyin kasalxonani yopishdi. Lekin yopish hech narsani tashqarida qoldirmadi.",
      en: 'In the film his bones were wrong. I did not sleep for two days after I looked at it. Three days later they closed the hospital. But closing it did not leave anything outside.',
      ru: 'На снимке его кости были неправильными. После этого снимка я не спал два дня. Через три дня больницу закрыли. Но закрытие ничего не оставило снаружи.',
    },
  },
  {
    title: { uz: 'Yoqish', en: 'The burning', ru: 'Сожжение' },
    text: {
      uz: "Bosh shifokor hujjatlarni yoqib yubordi. Men ham imzo chekdim. Hammasiga men imzo chekdim. Eshiklarni men qulfladim. Va kalitni o'zim cho'ntamga qo'ydim — go'yo bu xavfsizlik edi.",
      en: 'The chief surgeon burned the records. I signed for that too. I signed for all of it. I locked the doors. And I put the key in my own pocket — as if that were safety.',
      ru: 'Главный врач сжёг документы. Я подписал и это. Я подписал всё. Я запер двери. И положил ключ в свой карман — будто это была безопасность.',
    },
  },
  {
    title: { uz: '4-noyabr, soat 23:47', en: '4 November, 23:47', ru: '4 ноября, 23:47' },
    text: {
      uz: "O'sha kecha hech kim chiqmadi. Faqat u chiqdi. Va u chiqqanida kasalxona jim bo'lib qoldi. Men eshitdim — koridorda yurgan ovoz meni tanigan ovoz edi. U mening ismimni bilardi.",
      en: 'Nobody came out that night. Only he did. And when he came out the hospital went quiet. I heard it — the footsteps in the corridor were footsteps that knew me. He knew my name.',
      ru: 'В ту ночь никто не вышел. Вышел только он. И когда он вышел, больница затихла. Я услышал — шаги в коридоре знали меня. Он знал моё имя.',
    },
  },
  {
    title: { uz: "Uyg'onish", en: 'Waking', ru: 'Пробуждение' },
    text: {
      uz: "Ertalab men o'z xonamda uyg'ondim. Deraza mixlangan. Telefon o'lik. Ko'zguda o'zimni ko'rdim — va bir soniya ko'zguda meni ko'rgan narsa men emas edim. Shu kundan boshlab bu yerdaman.",
      en: 'In the morning I woke in my own room. The window was boarded. The telephone was dead. I looked at myself in the mirror — and for one second the thing looking back was not me. I have been here since that day.',
      ru: 'Утром я проснулся в своей комнате. Окно заколочено. Телефон мёртв. Я взглянул на себя в зеркало — и на одну секунду то, что смотрело на меня, было не мной. С того дня я здесь.',
    },
  },
  {
    title: { uz: 'Qabriston', en: 'The graveyard', ru: 'Кладбище' },
    text: {
      uz: "Kasalxona o'liklarini shu yerga ko'mishardi. Toshda ism yo'q — faqat raqam. Eng katta qabrda raqam ham yo'q, chunki u hech qachon ko'milgan emas. Uning qabri bo'sh. U hali yuryapti.",
      en: 'The hospital buried its dead here. There is no name on the stones — only a number. The biggest grave has no number at all, because he was never buried. His grave is empty. He is still walking.',
      ru: 'Здесь больница хоронила своих мёртвых. На камнях нет имён — только номера. На самой большой могиле нет и номера, потому что его никогда не хоронили. Его могила пуста. Он всё ещё ходит.',
    },
  },
  {
    title: { uz: 'Krematoriy hisoboti', en: 'Crematorium report', ru: 'Отчёт крематория' },
    text: {
      uz: "Kul orasida suyak qolmaydi. Faqat tishlar qoladi. Va ularning hammasi — bir xil o'lchamda. Hammasi bir odamniki. Men o'sha tishlarni sanadim. Yetmish ikkita. Bitta ko'p.",
      en: 'Bone does not survive the ash. Only teeth do. And every one of them is the same size. All of them belong to one person. I counted those teeth. Seventy-two. One too many.',
      ru: 'Кости не переживают пепел. Остаются только зубы. И все они одного размера. Все принадлежат одному человеку. Я пересчитал эти зубы. Семьдесят два. На один слишком много.',
    },
  },
  {
    title: { uz: 'Tez yordam daftari', en: 'Ambulance logbook', ru: 'Журнал скорой' },
    text: {
      uz: "Men kasalxonaga qaytib kelmadim. Lekin mashina o'zi qaytdi. Eshiklari ochiq, ichida hech kim yo'q. Va u yomg'ir ichida qaytdi. Haydovchi o'rindig'ida iliq edi.",
      en: 'I never came back to the hospital. But the ambulance did, on its own. Doors open, nobody inside. And it came back through the rain. The driver\u2019s seat was still warm.',
      ru: 'Я не возвращался в больницу. Но машина вернулась сама. Двери открыты, внутри никого. И она вернулась под дождём. Водительское сиденье было тёплым.',
    },
  },
  {
    title: { uz: 'Bosh shifokor xonasi', en: "Chief surgeon's office", ru: 'Кабинет главврача' },
    text: {
      uz: "Men Protokol 7 ni imzoladim. Eshikni qulfladim. Lekin men qulflagan eshik emas — men o'zim qulflangan edim. Kalit hali ham cho'ntamda. Uni olib tashlashga kuchim yetmadi.",
      en: 'I signed Protocol 7. I locked the door. But it was not the door I locked — it was myself. The key is still in my pocket. I have never had the strength to take it out.',
      ru: 'Я подписал Протокол 7. Я запер дверь. Но запер я не дверь — я запер себя. Ключ всё ещё в кармане. У меня так и не хватило сил его вынуть.',
    },
  },
  {
    title: { uz: 'Kir yuvish xonasi', en: 'The laundry', ru: 'Прачечная' },
    text: {
      uz: "Kiyimlar hali ham qurimagan. Ular bugun yuvilgan. Men kasalxonada yolg'iz emasman — kimdir bu yerda hali ham ishlaydi. Va u mening xalatimni kiygan.",
      en: 'The clothes are still damp. They were washed today. I am not alone in this hospital — someone still works here. And he is wearing my coat.',
      ru: 'Одежда ещё влажная. Её стирали сегодня. Я не один в этой больнице — кто-то здесь всё ещё работает. И он носит мой халат.',
    },
  },
  {
    title: { uz: 'Bolalar palatasi', en: "Children's ward", ru: 'Детское отделение' },
    text: {
      uz: "Yigirma to'qqiz, o'ttiz bir, o'ttiz yetti. Ular raqam emas edi. Ular mening xatolarim edi, va ularning hammasi bir xil ovozda chaqirardi. Ovoz menga qaragan edi — va ismimni aytdi.",
      en: 'Twenty-nine, thirty-one, thirty-seven. They were not numbers. They were my mistakes, and all of them called out in the same voice. The voice turned towards me — and said my name.',
      ru: 'Двадцать девять, тридцать один, тридцать семь. Это были не номера. Это были мои ошибки, и все они звали одним голосом. Голос повернулся ко мне — и назвал моё имя.',
    },
  },
  {
    title: { uz: 'Laboratoriya 7', en: 'Laboratory 7', ru: 'Лаборатория 7' },
    text: {
      uz: "Namunalar shisha ichida qimirlaydi. Ular hali ham tirik. Ular meni taniydi — va ular meni kutishadi. Men o'sha shishalarni o'zim to'ldirgandim. Men o'sha ignalarni o'zim kiritgandim.",
      en: 'The samples move inside the glass. They are still alive. They know me — and they are waiting for me. I filled those vials myself. I pushed those needles in myself.',
      ru: 'Образцы шевелятся в стекле. Они всё ещё живы. Они меня знают — и они меня ждут. Я сам наполнил эти пробирки. Я сам вводил эти иглы.',
    },
  },
  {
    title: { uz: 'Qozonxona', en: 'Boiler room', ru: 'Котельная' },
    text: {
      uz: "Qozonlar hali ham issiq. Kimdir o't yoqib turadi. Pastdan ovoz keladi — go'yo kimdir zinapoyani ko'tarib kelayotgandek. Va u qadam ovozi mening qadamlarim bilan bir xil.",
      en: 'The boilers are still hot. Someone keeps the fire going. There is a sound from below — like someone carrying a staircase. And those footsteps sound exactly like mine.',
      ru: 'Котлы всё ещё горячие. Кто-то поддерживает огонь. Снизу слышен звук — будто кто-то несёт лестницу. И эти шаги звучат точно как мои.',
    },
  },
  {
    title: { uz: "O'ttiz yettinchi tortma", en: 'The thirty-seventh drawer', ru: 'Тридцать седьмой ящик' },
    text: {
      uz: "Morgniyning pastki qavatida o'ttiz yetti tortma bor. O'ttiz oltitasi band. Oxirgisi ochiq — va u mening o'lchamimda. Men hech qachon bu yerdan chiqmaganman. Men u yerdan hech qachon chiqmaganman.",
      en: 'There are thirty-seven drawers in the basement morgue. Thirty-six are occupied. The last one is open — and it is my size. I have never left this place. I have never left that drawer.',
      ru: 'В подвальном морге тридцать семь ящиков. Тридцать шесть заняты. Последний открыт — и он моего размера. Я никогда не покидал это место. Я никогда не покидал тот ящик.',
    },
  },
  {
    title: { uz: 'Izolyator', en: 'Isolation ward', ru: 'Изолятор' },
    text: {
      uz: "Uchinchi qavatdagi izolyatorda faqat bitta karavot bor va u devorga mahkamlangan. Ichkaridan tirnalgan izlar eshikning yarim bo'yidan baland emas. Demak u bola edi. Yoki u emaklagan. Yoki ikkalasi ham.",
      en: 'The isolation ward on the third floor has a single bed, bolted to the wall. The scratches on the inside do not reach above halfway up the door. So he was a child. Or he was crawling. Or both.',
      ru: 'В изоляторе на третьем этаже одна кровать, привинченная к стене. Царапины изнутри не поднимаются выше середины двери. Значит, он был ребёнком. Или он полз. Или и то и другое.',
    },
  },
  {
    title: { uz: 'Elektroterapiya jurnali', en: 'Electrotherapy journal', ru: 'Журнал электротерапии' },
    text: {
      uz: "№37 ga kuniga uch marta muolaja berildi. Muolaja ishlamadi — u faqat kuchaydi. Oxirgi sessiyada u kresloni uzib tashladi va qayishni o'zi bilan olib ketdi. Muolajani men bergandim. Men o'z qo'lim bilan.",
      en: 'No.37 was treated three times a day. The treatment never worked — it only made him stronger. In the last session he tore the chair off the floor and took the strap with him. I gave those treatments. With my own hands.',
      ru: '№37 лечили трижды в день. Лечение не работало — он становился только сильнее. На последнем сеансе он вырвал кресло из пола и унёс ремень с собой. Эти процедуры проводил я. Своими руками.',
    },
  },
  {
    title: { uz: 'Tomdagi yozuv', en: 'Writing on the roof', ru: 'Надпись на крыше' },
    text: {
      uz: "Tomga chiqish eshigi hech qachon qulflanmagan — bu yerdan chiqish mumkin edi. Faqat men qulfni ichkaridan sindirdim, chunki u tomdan ham pastga tushardi. Endi u men bilan birga shu binoda. Va u chiqishni yopishni biladi.",
      en: 'The roof door was never locked — you could have walked out this way. But I broke the lock from the inside, because he came down off the roof too. Now he is in this building with me. And he knows how to close an exit.',
      ru: 'Дверь на крышу никогда не запиралась — отсюда можно было выйти. Но я сломал замок изнутри, потому что он спускался и с крыши. Теперь он в этом здании вместе со мной. И он умеет закрывать выход.',
    },
  },
];

/* -------------------------------------------------------------------------
 * THE FIVE LETTERS
 *
 * Where the twenty notes above are Dr Elias Ren's account of the outbreak,
 * the five letters are the last things written by the people who were still
 * alive on the wards when Protocol 7 came into force: a patient in the bed
 * next door, the nurse on nights, Aris himself, the hospital's mechanic and
 * the man on the gate.
 *
 * Unlike the notes they are not scattered at random. Each one has a home - the
 * ward the player wakes in, the nurses' station, the operating table, the
 * generator room wall and the roof-access door upstairs - so the story walks
 * in the same order the hospital was laid out. The cells are fixed in
 * World.ts (LETTER_CELLS), and this array is in that same order.
 * ---------------------------------------------------------------------- */
export interface LetterDef {
  /** Stable id, used by the save file and by the reader's heading. */
  id: string;
  title: Localized;
  /** The date written across the top of the sheet. */
  date: Localized;
  text: Localized;
}

export const LETTERS: LetterDef[] = [
  {
    id: 'ward-403',
    title: {
      uz: "Bemor 403 ning so'nggi so'zlari",
      en: "Patient 403's last words",
      ru: 'Последние слова пациента 403',
    },
    date: { uz: '1987-yil, 4-noyabr', en: '4 November 1987', ru: '4 ноября 1987 года' },
    text: {
      uz: "Agar buni o'qiyotgan bo'lsang, demak sen hali tiriksan. Doktor har kecha bittadan bemorni o'z laboratoriyasiga olib ketmoqda. Kecha 402-xonadagi qiz qichqirdi... keyin hammasi jim bo'lib qoldi. U arra bilan yuradi. Qorong'ida uning ko'zlariga qarama — ular qizil yonadi! U kelganda qochib ulgurmaysan, darhol shkafga bekin va nafasingni yut...",
      en: "If you are reading this, you are still alive. The doctor takes one patient down to his laboratory every night. Last night the girl in 402 screamed... and then everything went quiet. He walks with a saw. Do not look into his eyes in the dark - they burn red! You will not have time to run when he comes; get into a wardrobe at once and swallow your breathing...",
      ru: 'Если ты это читаешь — ты ещё жив. Доктор каждую ночь уводит одного пациента в свою лабораторию. Вчера кричала девочка из 402-й... а потом всё стихло. Он ходит с пилой. Не смотри ему в глаза в темноте — они горят красным! Убежать ты не успеешь, сразу прячься в шкаф и задержи дыхание...',
    },
  },
  {
    id: 'nurse-diary',
    title: {
      uz: 'Hamshiraning kundaligi',
      en: "The nurse's diary",
      ru: 'Дневник медсестры',
    },
    date: { uz: '1987-yil, 2-noyabr', en: '2 November 1987', ru: '2 ноября 1987 года' },
    text: {
      uz: "Doktor Aris butunlay aqldan ozdi. U 'Protokol 7' zardobini o'z tomiriga kiritdi. U endi inson emas, og'riqni sezmaydigan yirtqich. Kecha bosh shifokor politsiya chaqirmoqchi bo'lgandi, Aris uni o'z kabinetida suyak arrasi bilan... Men qochishim kerak! Asosiy hovli darvozasining elektr toki o'chirilgan, saqlagich (fuse) elektr xonasida. Tomning kalitini esa Aris o'z seyfiga yashirdi...",
      en: "Dr Aris has gone completely mad. He injected the 'Protocol 7' serum into his own vein. He is not a man any more, he is a predator that cannot feel pain. Last night the chief surgeon was going to call the police, and Aris took a bone saw to him in his own office... I have to get out! The courtyard gate has no power; the fuse is in the electrical room. And the roof key - Aris hid it in his safe...",
      ru: 'Доктор Арис окончательно сошёл с ума. Он ввёл себе сыворотку «Протокол 7». Он больше не человек, а хищник, который не чувствует боли. Вчера главный врач хотел вызвать полицию, и Арис сделал с ним... в его же кабинете, костной пилой. Мне нужно бежать! Питание на воротах двора отключено, предохранитель (fuse) в электрощитовой. А ключ от крыши Арис спрятал в своём сейфе...',
    },
  },
  {
    id: 'aris-journal',
    title: {
      uz: "Dr. Arisning shaxsiy jurnali — 'Protokol 7'",
      en: "Dr Aris's private journal — 'Protocol 7'",
      ru: 'Личный журнал доктора Ариса — «Протокол 7»',
    },
    date: { uz: '1987-yil, 1-noyabr', en: '1 November 1987', ru: '1 ноября 1987 года' },
    text: {
      uz: "Insoniyat qo'rquv va og'riqning qulidir. Men bu ojizlikni yo'qotaman. 401 dan 403 gacha bo'lgan barcha subyektlar operatsiya stolida jon berdi. Faqat 404-bemor tirik qoldi — uning miyasi zardobga qarshilik ko'rsatmoqda. Bu mo'jiza! Men uning bosh suyagini o'z qo'llarim bilan ochib ko'rishim shart. U qochib qutulolmaydi, bu kasalxona — uning qabri.",
      en: 'Mankind is a slave to fear and to pain. I will remove that weakness. Every subject from 401 to 403 died on the operating table. Only patient 404 is still alive - his brain is resisting the serum. A miracle! I must open his skull with my own hands and see it. He cannot escape: this hospital is his grave.',
      ru: 'Человечество — раб страха и боли. Я уничтожу эту слабость. Все субъекты с 401 по 403 умерли на операционном столе. Жив остался только пациент 404 — его мозг сопротивляется сыворотке. Это чудо! Я обязан своими руками вскрыть его череп и увидеть это. Он не сбежит: эта больница — его могила.',
    },
  },
  {
    id: 'mechanic-note',
    title: {
      uz: 'Bosh mexanik eslatmasi',
      en: "The head mechanic's note",
      ru: 'Записка главного механика',
    },
    date: { uz: '1987-yil, 28-oktabr', en: '28 October 1987', ru: '28 октября 1987 года' },
    text: {
      uz: "Janubiy hovli darvozasi avtomatik qulfga ega. Uni ochish uchun 3 ta qavatdagi 3 ta temir kalitni topib, so'ng mana shu yerdagi elektr saqlagichini ulash kerak. Tok ulanganda darvoza ochiladi. Lekin ehtiyot bo'ling: generator ishga tushganda juda qattiq gursillaydi — Doktor Aris bu tovushni eshitib shu yoqqa yugurib keladi!",
      en: 'The south courtyard gate runs on an automatic lock. To open it you need the three iron keys from the three floors, and then the fuse seated here, in this panel. Power it and the gate opens. But be careful: when the generator catches it roars loud enough to wake the dead - Dr Aris hears that noise and comes running straight here!',
      ru: 'Южные ворота двора на автоматическом замке. Чтобы открыть их, нужно найти три железных ключа на трёх этажах и вставить предохранитель вот здесь, в этот щиток. Дадите питание — ворота откроются. Но осторожно: когда генератор схватит, он ревёт так, что слышно на всё здание — доктор Арис услышит этот шум и прибежит прямо сюда!',
    },
  },
  {
    id: 'guard-letter',
    title: {
      uz: "Qorovulning so'nggi xati",
      en: "The guard's last letter",
      ru: 'Последнее письмо сторожа',
    },
    date: { uz: '1987-yil, 5-noyabr', en: '5 November 1987', ru: '5 ноября 1987 года' },
    text: {
      uz: "Pastki hovli — bu qopqon! Aris hovli yo'lagini poylab yuribdi. Yagona najot — tom! Tomdagi zanglagan yong'in zinapoyasini pastga tushirish kerak. Kalitni Arisning laboratoriya stolidan olgandim... Lekin u yetib keldi... Qonim to'xtamayapti... Zinapoyaga yugur...",
      en: 'The lower yard is a trap! Aris watches the courtyard path. The only way out is the roof! You have to drop the rusted fire escape on the roof terrace. I took the key off the table in Aris\u2019s laboratory... but he got here first... My blood will not stop... Run for the stairs...',
      ru: 'Нижний двор — это ловушка! Арис сторожит дорожку во дворе. Единственное спасение — крыша! Нужно сбросить вниз ржавую пожарную лестницу на террасе. Ключ я взял со стола в лаборатории Ариса... но он успел раньше... Кровь не останавливается... Беги к лестнице...',
    },
  },
];

/**
 * Everything in the game that can be read, in one table.
 *
 * The reader is indexed by a single number - the index a pickup carries - so
 * the twenty scattered notes come first (0..19), exactly as the level's scatter
 * deals them, and the five archive letters follow (20..24). The game imports
 * this table under the name it used to give NOTES, which is what lets a letter
 * be handed over by the same pickup path as a page of Ren's journal without the
 * reader having to know which is which.
 */
export const READABLES: NoteDef[] = [...NOTES, ...LETTERS];

/** First index in READABLES that is an archive letter, rather than a note. */
export const LETTER_INDEX_OFFSET = NOTES.length;

/** Blood scrawls painted on the walls, in all three languages. */
export const WALL_TEXTS: Array<{
  row: number;
  col: number;
  face: 'north' | 'south' | 'east' | 'west';
  text: Localized;
}> = [
  { row: 22, col: 8, face: 'north', text: { uz: 'SIZ QILDINGIZ', en: 'YOU DID THIS', ru: 'ЭТО СДЕЛАЛИ ВЫ' } },
  { row: 22, col: 25, face: 'north', text: { uz: "OZOD BO'LMADIM", en: 'I WAS NEVER FREE', ru: 'Я НЕ СТАЛ СВОБОДНЫМ' } },
  { row: 30, col: 8, face: 'north', text: { uz: '№37', en: 'No.37', ru: '№37' } },
  { row: 30, col: 16, face: 'north', text: { uz: 'YANA QAYTDINGMI', en: 'YOU CAME BACK AGAIN', ru: 'ТЫ СНОВА ВЕРНУЛСЯ' } },
  { row: 14, col: 6, face: 'south', text: { uz: "CHIQISH YO'Q", en: 'NO WAY OUT', ru: 'ВЫХОДА НЕТ' } },
  { row: 14, col: 20, face: 'south', text: { uz: 'U TASHQARIDA HAM BOR', en: 'HE IS OUTSIDE TOO', ru: 'ОН ЕСТЬ И СНАРУЖИ' } },
  { row: 10, col: 20, face: 'west', text: { uz: 'KUYDI', en: 'IT BURNED', ru: 'СГОРЕЛО' } },
  { row: 4, col: 24, face: 'east', text: { uz: 'DARVOZA SIZNI KUTADI', en: 'THE GATE WAITS FOR YOU', ru: 'ВОРОТА ЖДУТ ВАС' } },
  { row: 36, col: 1, face: 'north', text: { uz: 'PROTOKOL 7', en: 'PROTOCOL 7', ru: 'ПРОТОКОЛ 7' } },
  { row: 46, col: 3, face: 'east', text: { uz: 'YIGIRMA YETTINCHI', en: 'THE TWENTY-SEVENTH', ru: 'ДВАДЦАТЬ СЕДЬМОЙ' } },
  { row: 47, col: 23, face: 'west', text: { uz: 'MENI QIDIRMANG', en: 'DO NOT LOOK FOR ME', ru: 'НЕ ИЩИТЕ МЕНЯ' } },
  { row: 52, col: 1, face: 'north', text: { uz: 'UCHINCHI QAVAT', en: 'THIRD FLOOR', ru: 'ТРЕТИЙ ЭТАЖ' } },
  { row: 56, col: 21, face: 'south', text: { uz: 'TOM YOPILGAN', en: 'THE ROOF IS SHUT', ru: 'КРЫША ЗАКРЫТА' } },
];
