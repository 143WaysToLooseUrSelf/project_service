const app = { filt: 'all', q: '', srt: 'name' };

const COSTS = [
  { amount: 'Бесплатно', label: 'Пешком' },
  { amount: '100–300₽', label: 'Трамвай / Автобус' },
  { amount: '500–1500₽', label: 'Такси' },
  { amount: 'По расходам', label: 'Машина' },
];

function toggleNav() {
  document.getElementById('nav').classList.toggle('Open');
  document.getElementById('hamburger').classList.toggle('Open');
}

window.addEventListener('scroll', function () {
  var h = document.getElementById('header');
  if (h) h.classList.toggle('Scrolled', window.scrollY > 30);
});

window.addEventListener('resize', function () {
  if (window.innerWidth <= 768) return;
  var nav = document.getElementById('nav');
  var burger = document.getElementById('hamburger');
  if (nav) nav.classList.remove('Open');
  if (burger) burger.classList.remove('Open');
});

function readQuizFromStorage() {
  try {
    var raw = localStorage.getItem('quiz');
    if (!raw) return {};
    var obj = JSON.parse(raw);
    if (obj && typeof obj === 'object') return obj;
    return {};
  } catch {
    return {};
  }
}

function writeQuizPatch(patch) {
  var q = readQuizFromStorage();
  var k;
  for (k in patch) {
    if (Object.prototype.hasOwnProperty.call(patch, k)) q[k] = patch[k];
  }
  localStorage.setItem('quiz', JSON.stringify(q));
}

function getQuizInterestsFromDom() {
  var root = document.getElementById('step-3') || document;
  var nodes = root.querySelectorAll('input[name="interests"]:checked');
  var list = [];
  var i;
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].value) list.push(nodes[i].value);
  }
  return list;
}

function persistQuizInterests() {
  var interests = getQuizInterestsFromDom();
  if (interests.length) writeQuizPatch({ interests: interests });
}

function hydrateQuizStep(step) {
  var q = readQuizFromStorage();
  if (step === 1 && q.start) {
    var inp = document.querySelector('input[name="start"][value="' + q.start + '"]');
    if (inp) inp.checked = true;
  }
  if (step === 2) {
    var slider = document.getElementById('budget-slider');
    if (slider && q.budget != null) {
      slider.value = String(q.budget);
      updateCost(String(q.budget));
    }
  }
  if (step === 3 && q.interests && q.interests.length) {
    var boxes = document.querySelectorAll('input[name="interests"]');
    var j;
    for (j = 0; j < boxes.length; j++) {
      boxes[j].checked = q.interests.indexOf(boxes[j].value) !== -1;
    }
  }
}

function parseQuizHash() {
  var h = location.hash;
  return h === '#step-2' ? 2 : h === '#step-3' ? 3 : 1;
}

function showStep(n) {
  if (n < 1 || n > 3) n = 1;
  var i;
  for (i = 1; i <= 3; i++) {
    var el = document.getElementById('step-' + i);
    if (el) el.hidden = i !== n;
  }
  var label = document.getElementById('quiz-step-label');
  if (label) label.textContent = 'Шаг ' + n + ' из 3';
  var back = document.getElementById('quiz-back-link');
  if (back) {
    if (n === 1) {
      back.href = 'index.html';
      back.onclick = null;
    } else {
      back.href = '#';
      back.onclick = function (e) {
        e.preventDefault();
        showStep(n - 1);
      };
    }
  }
  if (document.getElementById('step-1') && location.hash !== '#step-' + n) {
    history.replaceState(null, '', '#step-' + n);
  }
  window.scrollTo(0, 0);
  if (n === 2) {
    var slider = document.getElementById('budget-slider');
    if (slider) updateCost(slider.value);
  }
}

function quizGoBudget() {
  var el = document.querySelector('input[name="start"]:checked');
  writeQuizPatch({ start: el ? el.value : 'center', source: 'quiz' });
  showStep(2);
}

function quizGoInterests() {
  var slider = document.getElementById('budget-slider');
  var budget = slider ? parseInt(slider.value, 10) || 0 : 0;
  writeQuizPatch({ budget: budget, source: 'quiz' });
  showStep(3);
}

function saveAnswers() {
  persistQuizInterests();
  var stored = readQuizFromStorage();
  var startEl = document.querySelector('input[name="start"]:checked');
  var start = startEl ? startEl.value : stored.start;
  if (!start) start = 'center';
  var slider = document.getElementById('budget-slider');
  var budget = slider ? parseInt(slider.value, 10) || 0 : stored.budget != null ? stored.budget : 0;
  var interests = getQuizInterestsFromDom();
  var storedList = stored.interests;
  if (
    interests.length === 0 &&
    storedList &&
    storedList.length &&
    Object.prototype.toString.call(storedList) === '[object Array]'
  ) {
    interests = [];
    var j;
    for (j = 0; j < storedList.length; j++) {
      if (storedList[j]) interests.push(String(storedList[j]));
    }
  }
  if (interests.length === 0) interests = ['architecture'];
  localStorage.setItem(
    'quiz',
    JSON.stringify({ start: start, budget: budget, interests: interests, source: 'quiz' }),
  );
}

function finishQuiz() {
  saveAnswers();
  location.href = 'route.html';
}

function updateCost(value) {
  var idx = parseInt(value, 10);
  var cfg = COSTS[idx];
  if (!cfg) return;
  var amt = document.getElementById('budget-amount');
  var lbl = document.getElementById('budget-label');
  if (amt) amt.textContent = cfg.amount;
  if (lbl) lbl.textContent = cfg.label;
  var c;
  for (c = 0; c < COSTS.length; c++) {
    var card = document.getElementById('tc-' + c);
    if (card) card.classList.toggle('vybrano', c === idx);
  }
}

function setFilter(el) {
  var next = el && el.dataset ? el.dataset.filter : '';
  if (!next || app.filt === next) return;
  var scope = document.getElementById('filter-tabs') || document;
  var tabs = scope.querySelectorAll('.filtr_odnaKnop');
  var t;
  for (t = 0; t < tabs.length; t++) {
    tabs[t].classList.remove('vybrano');
    tabs[t].setAttribute('aria-pressed', 'false');
  }
  el.classList.add('vybrano');
  el.setAttribute('aria-pressed', 'true');
  app.filt = next;
  renderCatalog();
}

function searchCatalog() {
  var input = document.getElementById('search-input');
  var clearBtn = document.getElementById('search-clear');
  app.q = input ? input.value.toLowerCase().trim() : '';
  if (clearBtn) clearBtn.style.display = app.q ? 'block' : 'none';
  renderCatalog();
}

function clearSearch() {
  var input = document.getElementById('search-input');
  var clearBtn = document.getElementById('search-clear');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  app.q = '';
  renderCatalog();
}

function sortCatalog(value) {
  app.srt = value === 'price' ? 'price' : 'name';
  renderCatalog();
}

function compareCatalogCards(a, b) {
  var oa = parseInt(a.dataset.order, 10);
  var ob = parseInt(b.dataset.order, 10);
  var orderA = isFinite(oa) ? oa : 0;
  var orderB = isFinite(ob) ? ob : 0;

  if (app.srt === 'price') {
    var pa = parseInt(a.dataset.price, 10);
    var pb = parseInt(b.dataset.price, 10);
    var priceA = isFinite(pa) ? pa : 0;
    var priceB = isFinite(pb) ? pb : 0;
    if (priceA !== priceB) return priceB - priceA;
    return orderA - orderB;
  }
  return orderA - orderB;
}

function renderCatalog() {
  var grid = document.getElementById('catalog-grid');
  if (!grid) return;

  var nodes = grid.querySelectorAll('.kat_plit');
  var cards = [];
  var i;
  for (i = 0; i < nodes.length; i++) cards.push(nodes[i]);

  var loadMoreBtn = document.getElementById('load-more-btn');
  var expanded = loadMoreBtn && loadMoreBtn.disabled;

  cards.sort(compareCatalogCards);
  for (i = 0; i < cards.length; i++) grid.appendChild(cards[i]);

  var visible = 0;
  var initialLimit = 12;
  for (i = 0; i < cards.length; i++) {
    var card = cards[i];
    var nameLower = (card.dataset.name || '').toLowerCase();
    var okCat = app.filt === 'all' || card.dataset.category === app.filt;
    var okSearch = !app.q || nameLower.indexOf(app.q) !== -1;
    var show = okCat && okSearch;

    if (card.classList.contains('skryt_plit_dop') && !expanded) {
      if (app.filt === 'all') {
        if (show && visible < initialLimit) {
          card.style.display = '';
          show = true;
        } else {
          card.style.display = 'none';
          show = false;
        }
      } else if (okCat && okSearch) {
        card.style.display = '';
        show = true;
      } else {
        card.style.display = 'none';
        show = false;
      }
    }

    card.classList.toggle('ne_pokazyv', !show);
    if (show) visible++;
  }

  var countEl = document.getElementById('catalog-count');
  if (countEl) countEl.textContent = 'Найдено: ' + visible + ' ' + pluralPlace(visible);

  var emptyMsg = grid.querySelector('.net_takih');
  if (emptyMsg) emptyMsg.remove();

  if (visible === 0) {
    var nr = document.createElement('div');
    nr.className = 'net_takih';
    nr.innerHTML = '<h3>Ничего не найдено</h3><p>Попробуйте другой поиск</p>';
    grid.appendChild(nr);
  }
}

function pluralPlace(n) {
  var m10 = n % 10;
  var m100 = n % 100;
  if (m100 >= 11 && m100 <= 14) return 'мест';
  if (m10 === 1) return 'место';
  if (m10 >= 2 && m10 <= 4) return 'места';
  return 'мест';
}

function loadMore() {
  var btn = document.getElementById('load-more-btn');
  if (!btn || btn.disabled) return;
  btn.disabled = true;
  btn.innerHTML = 'Всё загружено';
  btn.style.opacity = '0.5';
  var hidden = document.querySelectorAll('.skryt_plit_dop');
  var i;
  for (i = 0; i < hidden.length; i++) hidden[i].style.display = '';
  renderCatalog();
}

function domReady(run) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
}

function initInterestTiles() {
  var tiles = document.querySelectorAll('.inter_plit');
  var i;
  for (i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('change', function () {
      if (!document.querySelectorAll('.inter_plit input:checked').length) {
        var inp = this.querySelector('input');
        if (inp) inp.checked = true;
      }
      persistQuizInterests();
    });
  }
}

function initBudgetTransportCards() {
  var cards = document.querySelectorAll('.trans_kart');
  var i;
  for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
      if (this.id.indexOf('tc-') !== 0) return;
      var slider = document.getElementById('budget-slider');
      if (!slider) return;
      var val = this.id.slice(3);
      slider.value = val;
      updateCost(val);
    });
  }
}

function initQuizPage() {
  domReady(function () {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    var s;
    for (s = 1; s <= 3; s++) hydrateQuizStep(s);
    initBudgetTransportCards();
    var slider = document.getElementById('budget-slider');
    if (slider) updateCost(slider.value);
    initInterestTiles();
    if (!location.hash || location.hash === '#') history.replaceState(null, '', '#step-1');
    showStep(parseQuizHash());
    setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
}, 10);
    window.addEventListener('hashchange', function () {
      if (document.getElementById('step-1')) showStep(parseQuizHash());
    });
  });
}

function initCatalogPage() {
  domReady(function () {
    var sortSel = document.getElementById('catalog-sort');
    if (sortSel && sortSel.value) app.srt = sortSel.value === 'price' ? 'price' : 'name';
    var grid = document.getElementById('catalog-grid');
    var filterTabs = document.getElementById('filter-tabs');
    if (filterTabs) {
      filterTabs.addEventListener('click', function (e) {
        var el = e.target.nodeType === 1 ? e.target : e.target.parentElement;
        var btn = el.closest ? el.closest('.filtr_odnaKnop') : null;
        if (!btn || !filterTabs.contains(btn)) return;
        setFilter(btn);
      });
    }
    if (grid) {
      var kat = grid.querySelectorAll('.kat_plit');
      var j;
      for (j = 0; j < kat.length; j++) {
        var card = kat[j];
        if (!card.dataset.order) card.dataset.order = String(j);
        var link = card.querySelector('.kat_plit_niz a[href="route.html"]');
        if (!link) continue;
        link.textContent = 'Маршрут';
        var qs = new URLSearchParams();
        qs.set('from', 'catalog');
        qs.set('cat', card.getAttribute('data-category') || '');
        qs.set('price', card.getAttribute('data-price') || '0');
        qs.set('place', card.getAttribute('data-name') || '');
        link.href = 'route.html?' + qs.toString();
      }
    }
    renderCatalog();
});
}