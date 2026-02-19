const ROUTES = {
  architecture: {
    title: 'Архитектура и площади',
    duration: '5–6 часов',
    places: 6,
    km: '3.8 км',
    points: [
      { coords: [47.217099, 39.694258], name: 'Железнодорожный вокзал',          time: '09:00–09:40', desc: 'Величественный вокзал — образец советского ампира. Отправная точка маршрута.', tip: 'Сфотографируйте главный фасад — лучшее освещение с утра' },
      { coords: [47.226778, 39.745223], name: 'Театральная площадь',             time: '10:00–10:50', desc: 'Центральная площадь с Театром драмы и памятником основателям города.', tip: 'Обратите внимание на здание театра — образец конструктивизма' },
      { coords: [47.225830, 39.732110], name: 'Покровский собор',                time: '11:00–11:50', desc: 'Один из старейших православных храмов города — памятник архитектуры XVIII века.', tip: 'Посещение бесплатно, вход со стороны улицы Станиславского' },
      { coords: [47.225903, 39.719046], name: 'Улица Пушкинская',               time: '12:00–12:50', desc: 'Главная пешеходная улица Ростова с дореволюционными особняками и бульваром.', tip: 'Прогуляйтесь по бульвару — здесь много кафе для обеда' },
      { coords: [47.219251, 39.702239], name: 'Особняк Маргариты Черновой',     time: '13:00–13:30', desc: 'Роскошный доходный дом начала XX века — визитная карточка ростовского модерна.', tip: 'Загляните во внутренний двор' },
      { coords: [47.217090, 39.726840], name: 'Набережная Дона',                time: '14:00–15:00', desc: 'Живописная набережная с видом на реку и историческими постройками.', tip: 'Здесь отличный вид на закат над Доном' },
    ]
  },
  parks: {
    title: 'По набережной',
    duration: '4–5 часов',
    places: 4,
    km: '3.5–4 км',
    points: [
      { coords: [47.217090, 39.726840], name: 'Набережная Дона', time: '09:00–10:10', desc: 'Главный променад вдоль Дона: причалы, виды на реку и левый берег, зона без ухода вглубь центра.', tip: 'Старт удобнее от центрального спуска к воде; вечером больше людей — утром спокойнее' },
      { coords: [47.22045, 39.7281], name: 'Ворошиловский мост — смотровая', time: '10:30–11:20', desc: 'Пешеходная зона у моста: панорама Дона, суда и линия застройки левого берега.', tip: 'Для кадра с водой встаньте с городской стороны набережной у опор моста' },
      { coords: [47.212652, 39.731034], name: 'Левый берег', time: '11:40–12:50', desc: 'Зона отдыха на противоположном берегу: набережные аллеи, пляжи, вид на центр Ростова.', tip: 'Паром от городской набережной ходит регулярно — уточните актуальное расписание на табло причала' },
      { coords: [47.221248, 39.710246], name: 'Парк имени Горького', time: '13:00–14:00', desc: 'Финиш у парка после движения вдоль реки: зелёная зона, фонтан, спокойное завершение дня у воды и в стороне от делового центра.', tip: 'От набережной к парку логичнее дойти по береговым улицам, без лишних «петель» через центр' },
    ]
  },
  gastronomy: {
    title: 'Гастрономический маршрут',
    duration: '5–7 часов',
    places: 6,
    km: '2.5 км',
    points: [
      { coords: [47.216824, 39.712173], name: 'Центральный рынок',              time: '09:00–10:30', desc: 'Колоритный рынок с донскими деликатесами: раками, рыбой, сырами и овощами.', tip: 'Попробуйте местного судака и донского рака — лучшие в городе' },
      { coords: [47.225903, 39.719046], name: 'Пушкинская улица',               time: '11:00–13:00', desc: 'Ресторанная улица Ростова — здесь сосредоточены лучшие заведения города.', tip: 'На обед зайдите в «Тай Кин» или «Старик Хинкалыч»' },
      { coords: [47.226778, 39.745223], name: 'Ресторанный квартал',            time: '13:30–15:00', desc: 'Кластер авторских ресторанов у Театральной площади с кухней народов юга России.', tip: 'Столик лучше бронировать заранее в выходные' },
      { coords: [47.217090, 39.726842], name: 'Набережная — летние кафе',       time: '15:30–17:30', desc: 'Летние кафе и бары на набережной с видом на Дон и фирменными коктейлями.', tip: 'Попробуйте донское вино местных виноделен' },
      { coords: [47.216824, 39.712173], name: 'Вечерний рынок',                 time: '18:00–19:00', desc: 'Вечерние лавки рынка с готовой едой, донской выпечкой и уличными блюдами.', tip: 'Чебуреки и пирожки с рыбой — местная классика' },
      { coords: [47.212652, 39.731034], name: 'Левый берег — ужин',             time: '19:30–21:00', desc: 'Рестораны левого берега с вечерним видом на ночной Ростов и живой музыкой.', tip: 'Заказывайте шашлык из осетра — фирменное блюдо заведений берега' },
    ]
  },
  history: {
    title: 'Исторический маршрут',
    duration: '6–7 часов',
    places: 5,
    km: '4.5 км',
    points: [
      { coords: [47.217099, 39.694258], name: 'Железнодорожный вокзал',         time: '09:00–09:30', desc: 'Исторический вокзал 1876 года — первая крупная постройка современного Ростова.', tip: 'Обратите внимание на дореволюционный герб на фасаде' },
      { coords: [47.225830, 39.732110], name: 'Покровский собор',               time: '10:00–11:00', desc: 'Старейший православный храм города, основанный в 1786 году.', tip: 'Послушайте службу — хор считается одним из лучших в городе' },
      { coords: [47.226778, 39.745223], name: 'Театральная площадь',            time: '11:30–12:30', desc: 'Исторический центр города — место парадов, ярмарок и собраний XIX века.', tip: 'Найдите табличку с датой основания Ростова на постаменте памятника' },
      { coords: [47.223729, 39.722343], name: 'Краеведческий музей',            time: '13:00–15:00', desc: 'Богатейшая коллекция по истории донского края от скифов до наших дней.', tip: 'Обязательно посетите зал скифского золота — уникальные экспонаты' },
      { coords: [47.216824, 39.712173], name: 'Старый базар',                   time: '17:00–18:00', desc: 'Место торговли на Дону с XVIII века — здесь зарождался торговый Ростов.', tip: 'Сохранились здания складов XIX века по переулку Журавлёва' },
    ]
  },
  entertainment: {
    title: 'Развлекательный маршрут',
    duration: '5–6 часов',
    places: 6,
    km: '3.2 км',
    points: [
      { coords: [47.221248, 39.710246], name: 'Парк Горького — аттракционы',    time: '10:00–12:00', desc: 'Главный парк развлечений Ростова с аттракционами, колесом обозрения и летней сценой.', tip: 'Колесо обозрения работает до 22:00, виды на город отличные' },
      { coords: [47.226778, 39.745223], name: 'Театральная площадь',            time: '12:30–13:30', desc: 'Центр городских событий — здесь проходят концерты, фестивали и городские праздники.', tip: 'Проверьте афишу — возможно, сегодня есть мероприятие' },
      { coords: [47.220590, 39.712832], name: 'Музей современного искусства',   time: '14:00–15:30', desc: 'Современные инсталляции, перформансы и выставки актуального искусства.', tip: 'По четвергам вход бесплатный' },
      { coords: [47.217090, 39.726842], name: 'Набережная — прокат',            time: '16:00–17:30', desc: 'Прокат велосипедов, самокатов и сегвеев вдоль живописной набережной.', tip: 'Велосипед — 200 руб./час, самокат — 150 руб./час' },
      { coords: [47.212652, 39.731034], name: 'Левый берег — пляж',             time: '18:00–20:00', desc: 'Городской пляж с волейбольными площадками, шезлонгами и летними барами.', tip: 'Паром ходит каждые 20 минут, стоимость 50 руб.' },
      { coords: [47.217090, 39.726840], name: 'Ночная набережная',              time: '21:00–22:30', desc: 'Вечерняя прогулка по набережной с видом на подсвеченный мост и отражения огней в реке.', tip: 'Лучшее место для финального фото — у Ворошиловского моста' },
    ]
  },
  art: {
    title: 'Культурный маршрут',
    duration: '5–6 часов',
    places: 6,
    km: '3.0 км',
    points: [
      { coords: [47.225706, 39.715811], name: 'Музей изобразительных искусств', time: '10:00–12:00', desc: 'Богатейшая коллекция живописи и скульптуры от классики до современного искусства.', tip: 'Обязательно посетите зал передвижников' },
      { coords: [47.228394, 39.744792], name: 'Театр драмы им. Горького',       time: '12:30–13:30', desc: 'Один из старейших театров России, основан в 1863 году. Здание — памятник конструктивизма.', tip: 'Уточните расписание спектаклей на вечер' },
      { coords: [47.225903, 39.719046], name: 'Галереи Пушкинской улицы',      time: '14:00–15:30', desc: 'Арт-галереи, мастерские художников и антикварные магазины на главной пешеходной улице.', tip: 'В галерее «Ростов» часто проходят бесплатные вернисажи' },
      { coords: [47.219355, 39.715552], name: 'Стрит-арт квартал',             time: '16:00–17:00', desc: 'Граффити и муралы ростовских и приезжих художников на стенах исторических зданий.', tip: 'Ищите работы художника Кирилла Кто — они самые интересные' },
      { coords: [47.217090, 39.726842], name: 'Набережная — скульптуры',       time: '17:30–18:30', desc: 'Скульптурная галерея под открытым небом вдоль набережной Дона.', tip: 'Найдите скульптуру «Купец» — популярное место для фото' },
      { coords: [47.212652, 39.731034], name: 'Левый берег — арт-пространство', time: '19:00–21:00', desc: 'Летние арт-площадки, open-air концерты и творческие события на левом берегу.', tip: 'По пятницам и субботам здесь обычно живая музыка' },
    ]
  },
  shopping: {
    title: 'Шопинг и прогулка по центру',
    duration: '4–6 часов',
    places: 5,
    km: '2.8 км',
    points: [
      { coords: [47.226778, 39.745223], name: 'Театральная площадь',            time: '10:00–11:00', desc: 'Торговые фасады, ТЦ и кофейни у театра — одежда, аксессуары, зона непринуждённого шопинга.', tip: 'К обеду сместитесь в сторону Пушкинской пешком' },
      { coords: [47.225903, 39.719046], name: 'Улица Пушкинская',               time: '11:30–14:00', desc: 'Главная пешеходная: бутики, витрины, сувениры, галереи в фасадах XIX–XX вв.', tip: 'Сувениры с донской символикой — в лавках ближе к Соборной' },
      { coords: [47.225706, 39.715811], name: 'Музей изобразительных искусств', time: '14:30–16:00', desc: 'Книги и репродукции в музейном магазине, постеры — шопинг «с культурой» не спеша.', tip: 'Календари и плакаты к выставкам — сильные подарки' },
      { coords: [47.216824, 39.712173], name: 'Центральный рынок',              time: '16:30–18:00', desc: 'Продукты, восточные сладости, специи — «живой» рынок и колорит вместо супермаркета.', tip: 'Сыр, сухая рыба — удобно взять с собой' },
      { coords: [47.219355, 39.715552], name: 'Стрит-арт квартал',              time: '18:30–20:00', desc: 'Постеры, вещи молодых дизайнеров и небанальные сувениры на фоне муралов.', tip: 'Спросите у провайдеров местные открытки' },
    ]
  },
  sport: {
    title: 'Активный день',
    duration: '5–7 часов',
    places: 6,
    km: '4.0 км',
    points: [
      { coords: [47.221248, 39.710246], name: 'Парк имени Горького',            time: '09:00–10:30', desc: 'Прогулка, беговые дорожки, теннисные корты в зоне Парка Горького — мягкий старт дня.', tip: 'По выходным бывают групповые тренировки на открытой площадке' },
      { coords: [47.220590, 39.712832], name: 'Парк Горького — аттракционы',   time: '11:00–12:30', desc: 'Активный отдых: аттракционы, карусели — для динамичной части маршрута.', tip: 'Проверьте часы работы зоны аттракционов' },
      { coords: [47.217090, 39.726842], name: 'Набережная — прокат',            time: '13:00–15:00', desc: 'Велосипеды и самокаты вдоль Дона — основная «спортивная» ветка набережной.', tip: 'В будни велопрокат дешевле' },
      { coords: [47.212652, 39.731034], name: 'Левый берег — пляж',             time: '15:30–17:00', desc: 'Пляжный волейбол, прогулки, открытая площадка — активный вечер у воды.', tip: 'Сменная обувь на пляж — не оставляйте вещи без присмотра' },
      { coords: [47.2095, 39.7189], name: 'Ростов Арена',                     time: '17:30–19:00', desc: 'Стадион: экскурсии и события по афише — визуальный акцент спорт-Rostov.', tip: 'Без матча смотрите дневные экскурсии по площадке' },
      { coords: [47.225830, 39.732110], name: 'Покровский собор',               time: '19:00–19:50', desc: 'Неподалёку от зоны набережной — спокойный финал дня, без дублирования соседних точек на карте.', tip: 'Вечерняя подсветка купола — смотрится с набережной' },
    ]
  },
};

const START_POINTS = {
  station: {
    coords: [47.217099, 39.694258],
    name: 'Железнодорожный вокзал',
    time: '09:00–09:30',
    desc: 'Величественный вокзал — образец советского ампира. Отправная точка маршрута.',
    tip: 'Сфотографируйте главный фасад — лучшее освещение с утра',
  },
  center: {
    coords: [47.226778, 39.745223],
    name: 'Театральная площадь',
    time: '09:00–09:30',
    desc: 'Центральная площадь города — удобная отправная точка для любого маршрута.',
    tip: 'Здесь всегда можно поймать такси или сесть на маршрутку в любую сторону',
  },
  embankment: {
    coords: [47.217090, 39.726840],
    name: 'Набережная Дона',
    time: '09:00–09:30',
    desc: 'Главная прогулочная набережная — отличная стартовая точка с видом на реку.',
    tip: 'Утром здесь особенно тихо и свежо — лучшее время для начала прогулки',
  },
  park: {
    coords: [47.221248, 39.710246],
    name: 'Парк Горького',
    time: '09:00–09:30',
    desc: 'Центральный парк города — удобная точка старта в самом сердце Ростова.',
    tip: 'Рядом есть кафе где можно выпить кофе перед маршрутом',
  },
};

const PLACE_VISIT_PRICES = {
  'Железнодорожный вокзал': 0,
  'Театральная площадь': 0,
  'Покровский собор': 0,
  'Улица Пушкинская': 0,
  'Особняк Маргариты Черновой': 0,
  'Набережная Дона': 0,
  'Ворошиловский мост — смотровая': 0,
  'Парк имени Горького': 0,
  'Левый берег': 0,
  'Ботанический сад ЮФУ': 100,
  'Центральный рынок': 0,
  'Пушкинская улица': 0,
  'Ресторанный квартал': 800,
  'Набережная — летние кафе': 500,
  'Вечерний рынок': 0,
  'Левый берег — ужин': 800,
  'Краеведческий музей': 150,
  'Дореволюционная застройка Пушкинской': 0,
  'Старый базар': 0,
  'Набережная им. Ленина': 0,
  'Парк Горького — аттракционы': 300,
  'Музей современного искусства': 150,
  'Набережная — прокат': 200,
  'Левый берег — пляж': 0,
  'Ночная набережная': 0,
  'Музей изобразительных искусств': 200,
  'Театр драмы им. Горького': 0,
  'Галереи Пушкинской улицы': 0,
  'Стрит-арт квартал': 0,
  'Набережная — скульптуры': 0,
  'Левый берег — арт-пространство': 0,
  'Зоопарк Ростова': 300,
  'Ростов Арена': 500,
};

const CATALOG_CATEGORY_TO_INTEREST = {
  museums: 'art',
};

const CATALOG_PLACE_ALIASES = {
  'Левый берег Дона': 'Левый берег',
  'Парк Горького': 'Парк имени Горького',
  'Музей': 'Музей изобразительных искусств',
  'Старый Ростов': 'Улица Пушкинская',
  'Ботанический сад': 'Ботанический сад ЮФУ',
  'Ворошиловский мост': 'Ворошиловский мост — смотровая',
  'Левый берег (закат)': 'Левый берег',
};

const CATALOG_ONLY_POINTS = {
  'Зоопарк Ростова': {
    coords: [47.2582, 39.7446],
    name: 'Зоопарк Ростова',
    time: '10:00–14:00',
    desc: 'Один из крупнейших зоопарков юга России — редкие виды и просторные вольеры.',
    tip: 'Лучше прийти в первой половине дня, когда животные активнее',
  },
  'Ростов Арена': {
    coords: [47.2095, 39.7189],
    name: 'Ростов Арена',
    time: 'по афише',
    desc: 'Современный стадион на берегу Дона — футбол и крупные городские события.',
    tip: 'Проверьте расписание матчей и экскурсий по арене заранее',
  },
  'Ботанический сад ЮФУ': {
    coords: [47.2323, 39.6408],
    name: 'Ботанический сад ЮФУ',
    time: '10:00–12:00',
    desc: 'Большая зелёная территория с коллекциями растений, оранжереями и прогулочными аллеями.',
    tip: 'Лучшее время для прогулки — утро; возьмите воду и удобную обувь',
  },
};

function arrHas(arr, val) {
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true;
  }
  return false;
}

function copyPoint(pt) {
  return {
    coords: pt.coords,
    name: pt.name,
    time: pt.time,
    desc: pt.desc,
    tip: pt.tip,
  };
}

function cloneQuizBase(base) {
  var q = {};
  var k;
  for (k in base) {
    if (Object.prototype.hasOwnProperty.call(base, k)) q[k] = base[k];
  }
  return q;
}

function findPointDataInRoutes(canonicalName) {
  var keys = Object.keys(ROUTES);
  var ki;
  for (ki = 0; ki < keys.length; ki++) {
    var pts = ROUTES[keys[ki]].points;
    var pi;
    for (pi = 0; pi < pts.length; pi++) {
      if (pts[pi].name === canonicalName) return copyPoint(pts[pi]);
    }
  }
  return null;
}

function getPointDataForCatalogSelection(rawName) {
  if (!rawName || !String(rawName).trim()) return null;
  var raw = rawName.trim();
  var alias = CATALOG_PLACE_ALIASES[raw] || raw;

  var hit = findPointDataInRoutes(alias);
  if (hit) return hit;
  if (CATALOG_ONLY_POINTS[alias]) return copyPoint(CATALOG_ONLY_POINTS[alias]);

  if (alias !== raw) {
    hit = findPointDataInRoutes(raw);
    if (hit) return hit;
    if (CATALOG_ONLY_POINTS[raw]) return copyPoint(CATALOG_ONLY_POINTS[raw]);
  }
  return null;
}

function ensureCatalogPlaceInPoints(points, catalogPlace, fromCatalog) {
  if (!fromCatalog || !catalogPlace) return points;
  var data = getPointDataForCatalogSelection(catalogPlace.trim());
  if (!data) return points;
  var names = [];
  var ni;
  for (ni = 0; ni < points.length; ni++) names.push(points[ni].name);
  if (arrHas(names, data.name)) return points;
  var dk = coordDedupeKey(data);
  if (dk) {
    for (ni = 0; ni < points.length; ni++) {
      if (coordDedupeKey(points[ni]) === dk) return points;
    }
  }
  var out = [];
  for (ni = 0; ni < points.length; ni++) out.push(copyPoint(points[ni]));
  var insertAt = out.length === 0 ? 0 : 1;
  out.splice(insertAt, 0, copyPoint(data));
  while (out.length > 7) out.pop();
  return out;
}

function applyCatalogQueryToQuiz() {
  var p = new URLSearchParams(window.location.search);
  if (p.get('from') !== 'catalog') return;
  var q = readQuizFromStorage();
  var cat = p.get('cat') || '';
  var place = p.get('place') || '';
  if (cat) {
    var interest = CATALOG_CATEGORY_TO_INTEREST[cat] || cat;
    q.interests = ROUTES[interest] ? [interest] : ['architecture'];
  }
  q.budget = 0;
  q.source = 'catalog';
  if (place) q.catalogPlace = place;
  localStorage.setItem('quiz', JSON.stringify(q));
  if (history.replaceState) history.replaceState(null, '', 'route.html');
}

applyCatalogQueryToQuiz();

function normalizeInterests(raw) {
  var out = [];
  if (Array.isArray(raw)) {
    var i;
    for (i = 0; i < raw.length; i++) {
      var s = String(raw[i]).trim();
      if (s) out.push(s);
    }
    return out;
  }
  if (raw == null) return [];
  if (typeof raw === 'string' && raw.trim()) return [raw.trim()];
  return [];
}

function coordDedupeKey(pt) {
  var c = pt && pt.coords;
  if (!c || c.length < 2) return pt && pt.name ? 'name:' + pt.name : '';
  var la = Math.round(Number(c[0]) * 1e5) / 1e5;
  var lo = Math.round(Number(c[1]) * 1e5) / 1e5;
  return la + ',' + lo;
}

var TIME_SLOT_RE = /(\d{1,2})\s*:\s*(\d{2})\s*-\s*(\d{1,2})\s*:\s*(\d{2})/;

function normalizeTimeStr(s) {
  return s != null && typeof s === 'string' ? s.trim().replace(/\u2013|\u2014|−/g, '-') : '';
}

var PLACE_MERGE_GROUP = {
  'Парк Горького': 'grp:park_gorky',
  'Парк имени Горького': 'grp:park_gorky',
  'Парк Горького — аттракционы': 'grp:park_gorky',
};

function mergeKeyForPoint(pt) {
  var n = pt && pt.name ? String(pt.name).trim() : '';
  if (n && PLACE_MERGE_GROUP[n]) return PLACE_MERGE_GROUP[n];
  if (n) return 'name:' + n;
  return coordDedupeKey(pt);
}

function dedupePointsByName(points) {
  var seen = [];
  var out = [];
  var i;
  for (i = 0; i < points.length; i++) {
    var p = points[i];
    var k = mergeKeyForPoint(p);
    if (k === '') {
      out.push(p);
      continue;
    }
    if (arrHas(seen, k)) continue;
    seen.push(k);
    out.push(p);
  }
  return out;
}

function selectRoute(interests, opts) {
  var norm = normalizeInterests(interests);
  var seen = [];
  var valid = [];
  var i;
  for (i = 0; i < norm.length; i++) {
    var ik = norm[i];
    if (!ROUTES[ik]) continue;
    if (arrHas(seen, ik)) continue;
    seen.push(ik);
    valid.push(ik);
  }
  if (valid.length === 0) return ROUTES.architecture;
  if (valid.length === 1) return ROUTES[valid[0]];

  var combined = {
    title: '',
    duration: '6–8 часов',
    places: 0,
    km: '4.5+ км',
    points: [],
  };

  var usedMergeKeys = [];
  if (opts && opts.startMergeKey) usedMergeKeys.push(opts.startMergeKey);

  var rk;
  var pj;
  for (rk = 0; rk < valid.length; rk++) {
    var routeKey = valid[rk];
    var pts = ROUTES[routeKey].points || [];
    for (pj = 0; pj < pts.length; pj++) {
      var p = pts[pj];
      if (combined.points.length >= 7) break;
      var mk = mergeKeyForPoint(p);
      if (mk !== '' && arrHas(usedMergeKeys, mk)) continue;
      if (mk !== '') usedMergeKeys.push(mk);
      combined.points.push(copyPoint(p));
    }
    if (combined.points.length >= 7) break;
  }

  var keySetDone = [];
  var ki;
  for (ki = 0; ki < combined.points.length; ki++) {
    keySetDone.push(mergeKeyForPoint(combined.points[ki]));
  }

  var vi;
  for (vi = 0; vi < valid.length; vi++) {
    var srcPts = ROUTES[valid[vi]].points || [];
    var represented = false;
    for (pj = 0; pj < srcPts.length; pj++) {
      if (arrHas(keySetDone, mergeKeyForPoint(srcPts[pj]))) {
        represented = true;
        break;
      }
    }
    if (represented) continue;
    var add = null;
    for (pj = 0; pj < srcPts.length; pj++) {
      var mkAdd = mergeKeyForPoint(srcPts[pj]);
      if (!arrHas(keySetDone, mkAdd)) {
        add = srcPts[pj];
        break;
      }
    }
    if (!add) continue;
    if (combined.points.length >= 7) combined.points.pop();
    combined.points.push(copyPoint(add));
    keySetDone.push(mergeKeyForPoint(add));
  }

  combined.places = combined.points.length;
  combined.title = 'Смешанный маршрут';
  return combined;
}

function parsePointDurationMinutes(timeStr) {
  var s = normalizeTimeStr(timeStr);
  if (!s) return 75;
  if (/по\s*афише|афиш/i.test(s)) return 75;
  var m = s.match(TIME_SLOT_RE);
  if (!m) return 75;
  var t1 = +m[1] * 60 + +m[2];
  var t2 = +m[3] * 60 + +m[4];
  if (t2 <= t1) t2 += 24 * 60;
  return Math.min(Math.max(t2 - t1, 25), 200);
}

function pad2(n) {
  var s = String(n);
  if (s.length < 2) return '0' + s;
  return s;
}

function formatClockFromDayMins(m) {
  var H = Math.floor(m / 60);
  var M = m % 60;
  return pad2(H) + ':' + pad2(M);
}

function parseSlotStartEndMinutes(timeStr) {
  var s = normalizeTimeStr(timeStr);
  if (!s) return null;
  var m = s.match(TIME_SLOT_RE);
  return m ? { start: +m[1] * 60 + +m[2], end: +m[3] * 60 + +m[4] } : null;
}

function formatPlanDayRangeLabel(points) {
  if (!points || points.length === 0) return '';
  var first = parseSlotStartEndMinutes(points[0].time);
  var last = parseSlotStartEndMinutes(points[points.length - 1].time);
  if (!first || !last) return '';
  return formatClockFromDayMins(first.start) + ' — ' + formatClockFromDayMins(last.end);
}

function resequenceVisitTimes(points) {
  var gapMin = 20;
  var dayStart = 9 * 60;
  var cursor = dayStart;
  var out = [];
  var i;
  for (i = 0; i < points.length; i++) {
    var p = points[i];
    var dur = parsePointDurationMinutes(p.time);
    var start = cursor;
    var end = start + dur;
    cursor = end + gapMin;
    var timeStr = formatClockFromDayMins(start) + '–' + formatClockFromDayMins(end);
    out.push({
      coords: p.coords,
      name: p.name,
      time: timeStr,
      desc: p.desc,
      tip: p.tip,
    });
  }
  var dayEnd = cursor - gapMin;
  var spanMin = Math.max(0, dayEnd - dayStart);
  var hLo = Math.floor(spanMin / 60);
  var hHi = Math.ceil(spanMin / 60);
  var timeRange = formatClockFromDayMins(dayStart) + '–' + formatClockFromDayMins(dayEnd);
  var durationLabel =
    hLo === hHi ? '~' + hLo + ' ч (' + timeRange + ')' : '~' + hLo + '–' + hHi + ' ч (' + timeRange + ')';
  return { points: out, durationLabel: durationLabel };
}

function formatPlacesLabel(n) {
  var x = Math.abs(Math.floor(n)) || 0;
  var mod10 = x % 10;
  var mod100 = x % 100;
  var word = 'мест';
  if (mod100 < 11 || mod100 > 14) {
    if (mod10 === 1) word = 'место';
    else if (mod10 >= 2 && mod10 <= 4) word = 'места';
  }
  return x + ' ' + word;
}

function updateRouteMeta(route, placeCount) {
  var title = document.querySelector('.rez_polosZag');
  if (title) title.textContent = route.title;
  var cnt = placeCount != null ? placeCount : route.places;
  var lines = [route.duration, formatPlacesLabel(cnt), '~' + route.km];
  var strips = document.querySelectorAll('.rez_paramSetka > .rez_paramStrok');
  for (var ii = 0; ii < 3; ii++) {
    var row = strips[ii];
    var val = row && row.querySelector('.rez_akc');
    if (val && lines[ii] != null) val.textContent = lines[ii];
  }
}

var TRANSPORT_ESTIMATE_RUB = [0, 200, 1000, 0];

function clampBudgetIndex(budget) {
  var n = Number(budget);
  var safe = Number.isFinite(n) ? n : 0;
  return Math.min(Math.max(safe, 0), COSTS.length - 1);
}

function sumVisitPricesForPoints(points) {
  var s = 0;
  var i;
  for (i = 0; i < points.length; i++) {
    s += PLACE_VISIT_PRICES[points[i].name] || 0;
  }
  return s;
}

function updateCombinedBudgetMeta(budget, points, fromCatalog) {
  var idx = clampBudgetIndex(budget);
  var visit = sumVisitPricesForPoints(points);
  var transportRub = fromCatalog ? 0 : TRANSPORT_ESTIMATE_RUB[idx] || 0;
  var total = visit + transportRub;
  var vRu = visit.toLocaleString('ru-RU');

  var elTotal = document.getElementById('route-meta-total-price');
  if (elTotal) elTotal.textContent = total === 0 ? '0 руб.' : 'от ' + total.toLocaleString('ru-RU') + ' руб.';

  var elHint = document.getElementById('route-meta-budget-hint');
  if (elHint) {
    if (fromCatalog) elHint.textContent = '';
    else if (idx === 3) elHint.textContent = 'точки ' + vRu + ' руб.; транспорт не включен';
    else elHint.textContent = 'точки ' + vRu + ' руб.; проезд ~' + transportRub.toLocaleString('ru-RU') + ' руб.';
  }

  var modeEl = document.getElementById('route-meta-route-mode');
  if (modeEl) modeEl.textContent = !fromCatalog && idx >= 2 ? 'на авто' : 'пешком';
}

function updateTimeline(points) {
  var rangeEl = document.querySelector('.plan_dataTxt');
  if (rangeEl) {
    var label = formatPlanDayRangeLabel(points);
    rangeEl.textContent = label || '—';
  }

  var list = document.querySelector('.plan_spisok');
  if (!list) return;

  list.innerHTML = points
    .map((p, i) => {
      const isLast = i === points.length - 1;

      return `
      <div class="plan_el ${isLast ? 'plan_el_last' : ''}">
        <div class="plan_krugN"><span>${i + 1}</span></div>
        <div class="plan_kart">
          <div class="plan_kart_pic">
            <img src="${getPointImage(p.name)}" alt="${p.name}" loading="lazy"/>
          </div>
          <div class="plan_kart_telo">
            <div class="plan_kart_vrem">
              <img src="svg/time.svg" alt="" width="14" height="14">
              <span>Время</span>
              <span class="plan_kart_vremZn">${p.time}</span>
            </div>
            <h4 class="plan_kart_zag">${p.name}</h4>
            <p class="plan_kart_txt">${p.desc}</p>
            <div class="plan_kart_sovet">
              <img src="svg/tip.svg" alt="Совет" width="14" height="14">
              <span>Совет: ${p.tip}</span>
            </div>
          </div>
        </div>
      </div>`;
    }).join('');
}

var POINT_IMAGES = {
    'Железнодорожный вокзал':           'img/jd.jpg',
  'Театральная площадь':             'img/teatral.jpg',
  'Покровский собор':                'img/pokrov.jpg',
  'Улица Пушкинская':                'img/pyshk.jpg',
  'Особняк Маргариты Черновой':      'img/marii.jpg',
  'Набережная Дона':                 'img/naberezshnaya.jpg',
  'Ворошиловский мост — смотровая':  'img/mostd.jpg',
  'Парк Горького':                   'img/parkgorkogo.jpg',
  'Парк имени Горького':             'img/parkgorkogo.jpg',
  'Парк Горького — аттракционы':     'img/parkgorkogo.jpg',
  'Левый берег':                     'img/levbereg.jpg',
  'Левый берег — пляж':              'img/levbereg.jpg',
  'Левый берег — ужин':              'img/levbereg.jpg',
  'Левый берег — арт-пространство':  'img/levbereg.jpg',
  'Ботанический сад ЮФУ':            'img/ufusad.jpg',
  'Центральный рынок':               'img/cr.jpg',
  'Вечерний рынок':                  'img/cr.jpg',
  'Пушкинская улица':                'img/pyshk.jpg',
  'Дореволюционная застройка Пушкинской': 'img/pyshk.jpg',
  'Ресторанный квартал':             'img/restoran.jpg',
  'Набережная — летние кафе':        'img/naberezshnaya.jpg',
  'Набережная — прокат':             'img/naberezshnaya.jpg',
  'Набережная — скульптуры':         'img/naberezshnaya.jpg',
  'Набережная им. Ленина':           'img/naberezshnaya.jpg',
  'Ночная набережная':               'img/naberezshnaya.jpg',
  'Краеведческий музей':             'img/kraeved.jpg',
  'Музей изобразительных искусств':  'img/izo.jpg',
  'Музей современного искусства':    'img/svr.jpg',
  'Театр драмы им. Горького':        'img/teatr.jpg',
  'Галереи Пушкинской улицы':        'img/gallery.jpg',
  'Стрит-арт квартал':               'img/art.jpg',
  'Зоопарк Ростова':                 'img/zoo.jpg',
  'Ростов Арена':                    'img/teatral.jpg',
  'default':                         'img/ponorama.jpg',
};

function getPointImage(name) {
  return POINT_IMAGES[name] || POINT_IMAGES['default'];
}

function getRoutePageQuiz() {
  var p = new URLSearchParams(window.location.search);
  var demo = p.get('demo');
  var base = readQuizFromStorage();
  if (demo && ROUTES[demo]) {
    var next = cloneQuizBase(base);
    next.interests = [demo];
    if (demo === 'parks') next.start = 'embankment';
    else if (demo === 'architecture') next.start = 'center';
    return next;
  }
  return base;
}

function buildRoutePoints(quiz) {
  var start = START_POINTS[quiz.start || 'station'];
  var routeOpts = start ? { startMergeKey: mergeKeyForPoint(start) } : null;
  var route = selectRoute(normalizeInterests(quiz && quiz.interests), routeOpts);
  var points = route.points.slice();
  var pi;
  if (start) {
    var startKey = mergeKeyForPoint(start);
    var filtered = [];
    for (pi = 0; pi < points.length; pi++) {
      if (mergeKeyForPoint(points[pi]) !== startKey) filtered.push(points[pi]);
    }
    points = filtered;
    points.unshift(copyPoint(start));
    while (points.length > 7) points.pop();
  }

  var fromCatalog = quiz.source === 'catalog';
  points = ensureCatalogPlaceInPoints(points, quiz.catalogPlace, fromCatalog);
  points = dedupePointsByName(points);
  if (points.length) {
    var seq = resequenceVisitTimes(points);
    points = seq.points;
    route = {
      title: route.title,
      duration: seq.durationLabel,
      places: route.places,
      km: route.km,
      points: route.points,
    };
  }

  return { route: route, points: points, fromCatalog: fromCatalog };
}

document.addEventListener('DOMContentLoaded', function () {
  ymaps.ready(function () {
    var quiz = getRoutePageQuiz();
    var built = buildRoutePoints(quiz);
    var route = built.route;
    var points = built.points;
    var fromCatalog = built.fromCatalog;
    var n = Number(quiz.budget);
    var budgetForMap = fromCatalog ? 0 : Number.isFinite(n) ? n : 0;

    updateRouteMeta(route, points.length);
    updateCombinedBudgetMeta(budgetForMap, points, fromCatalog);
    updateTimeline(points);

    var map = new ymaps.Map('yandex-map', {
      center: [47.22, 39.72],
      zoom: 13,
      controls: ['zoomControl', 'fullscreenControl'],
    });

    var pi;
    for (pi = 0; pi < points.length; pi++) {
      var point = points[pi];
      map.geoObjects.add(
        new ymaps.Placemark(
          point.coords,
          {
            balloonContent: '<b>' + point.name + '</b><br/>' + point.time,
            iconContent: String(pi + 1),
          },
          {
            preset: 'islands#circleIcon',
            iconColor: '#1a4f8a',
          },
        ),
      );
    }

    map.setBounds(map.geoObjects.getBounds(), { checkZoomRange: true, zoomMargin: 40 });
  });
});
