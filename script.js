/* ============================================================
   Skyward Review — script.js
   Slideshow, deck fan, scroll reveal, hash articles, 9 cars
   ============================================================ */

const CARS = [
  {
    id: 'alef-model-a',
    name: 'Alef Model A',
    type: 'VTOL electric roadable',
    price: '~$300,000',
    range: 'Drive ~200–220 mi · Fly ~110 mi',
    speed: 'Air ~110 mph · Road limited',
    seats: '2',
    summary: 'Two-seat electric vehicle that transitions to vertical flight. Special airworthiness for testing; early hand-built units targeted for controlled use.',
    image: 'alef-model-a.jpg',
    featured: true,
    status: 'Pre-production testing'
  },
  {
    id: 'klein-aircar',
    name: 'Klein Vision AirCar',
    type: 'Folding-wing airplane',
    price: '~$800k–$1.2M',
    range: 'Drive ~500 mi · Fly ~620 mi',
    speed: 'Air ~155 mph · Road ~124 mph',
    seats: '2',
    summary: 'Wings and tail deploy in under two minutes. Prototype airworthiness history; production version aimed at 2026.',
    image: 'klein-aircar.jpg',
    featured: true,
    status: 'Production prototype'
  },
  {
    id: 'terrafugia-transition',
    name: 'Terrafugia Transition',
    type: 'Roadable fixed-wing',
    price: '~$400,000 (hist.)',
    range: '~400+ mi flight',
    speed: 'Air ~100+ mph',
    seats: '2',
    summary: 'One of the earliest modern roadable aircraft programmes. Folding wings, street-legal ambitions, long development history.',
    image: 'terrafugia-transition.jpg',
    featured: false,
    status: 'Historic / limited programme'
  },
  {
    id: 'pal-v-liberty',
    name: 'PAL-V Liberty',
    type: 'Roadable gyroplane',
    price: '~$330k–$550k',
    range: 'Drive ~800 mi · Fly ~250–310 mi',
    speed: 'Air ~112 mph · Road ~100 mph',
    seats: '2',
    summary: 'Three-wheeled road vehicle that converts into a gyroplane. Road certification progress in Europe; aviation type certification continuing.',
    image: 'pal-v-liberty.jpg',
    featured: true,
    status: 'Certification in progress'
  },
  {
    id: 'xpeng-aeroht',
    name: 'XPeng AeroHT Land Aircraft Carrier',
    type: 'Modular ground + eVTOL',
    price: '~$280,000',
    range: 'Ground >600 mi · Air module short',
    speed: 'Not fully published',
    seats: '2 (air)',
    summary: 'Six-wheel ground vehicle that carries, launches and recharges a detachable two-seat electric VTOL. Deliveries targeted from 2026 in China.',
    image: 'xpeng-aeroht.jpg',
    featured: false,
    status: 'Production ramp'
  },
  {
    id: 'tesla-roadster',
    name: 'Tesla Roadster (SpaceX package)',
    type: 'Concept · thruster stunt',
    price: 'Not disclosed',
    range: 'Brief hops only',
    speed: 'Road claimed >230 mph',
    seats: '2',
    summary: 'Cold-gas thrusters developed with SpaceX enable short hops and rolls. Demonstrated uncrewed; not a certified flying car for travel.',
    image: 'tesla-roadster.jpg',
    featured: false,
    status: 'Concept / demonstration'
  },
  {
    id: 'samson-switchblade',
    name: 'Samson Switchblade',
    type: 'Roadable airplane kit',
    price: '~$170k–$200k+',
    range: 'Drive ~450 mi · Fly ~450 mi',
    speed: 'Air ~160–200 mph · Road ~100–125 mph',
    seats: '2',
    summary: 'Three-wheeled street-legal vehicle that deploys wings and tail for runway flight. Sold primarily as an experimental amateur-built kit.',
    image: 'samson-switchblade.jpg',
    featured: false,
    status: 'Kit / pre-production'
  },
  {
    id: 'aeromobil-4',
    name: 'AeroMobil 4.0',
    type: 'Roadable fixed-wing',
    price: '~$1.2M–$1.6M (est.)',
    range: '~400+ mi flight',
    speed: '~160 mph class',
    seats: '2',
    summary: 'Slovak roadable aircraft with folding wings and a strong design identity. Premium positioning and long development cycle.',
    image: 'aeromobil-4.jpg',
    featured: false,
    status: 'Development / limited series'
  },
  {
    id: 'aska-a5',
    name: 'ASKA A5',
    type: 'Hybrid VTOL roadable',
    price: '~$789,000',
    range: 'Fly ~250 mi',
    speed: 'Air ~150 mph',
    seats: '4',
    summary: 'Four-seat hybrid-electric vehicle with vertical and short-field capability. FAA special airworthiness for testing; commercial target later in the decade.',
    image: 'aska-a5.jpg',
    featured: false,
    status: 'Flight & road testing'
  }
];

/* Article stubs — full long-form later on request */
const ARTICLES = {
  'alef-model-a': {
    kicker: 'VTOL roadable',
    meta: 'Alef Aeronautics · Target price ~$300,000',
    facts: [['Price', '~$300,000'], ['Fly range', '~110 mi'], ['Drive range', '~200–220 mi'], ['Status', 'Pre-production']],
    body: `<div class="stub-note">Full long-form article (overview, design, price, performance, status, pros & cons, verdict) will be written on request.</div>
      <h2>Overview</h2><p>Electric two-seater designed to drive on roads and transition to vertical flight via distributed electric propulsion.</p>
      <h2>Design</h2><p>Carbon structure, multiple rotors, body geometry intended to support both modes. Road use often limited by low-speed vehicle rules.</p>
      <h2>Price</h2><p>Public target around $299,999–$300,000 with modest reservation deposits reported.</p>
      <h2>Performance</h2><p>Manufacturer figures: roughly 110 miles flight, 200-plus miles road, aerial top speed near 110 mph.</p>
      <h2>Current status</h2><p>Special airworthiness certificate for testing. Hand-built early units and controlled customer testing discussed for 2026–2027.</p>
      <h2>Pros and cons</h2><ul><li>True VTOL ambition</li><li>Road use currently very limited</li><li>Certification path still long</li></ul>
      <h2>Verdict</h2><p>One of the more watched pure VTOL roadables; delivery and usable road legality remain open questions.</p>`
  },
  'klein-aircar': {
    kicker: 'Folding wing',
    meta: 'Klein Vision · Production target 2026',
    facts: [['Price', '~$800k–$1.2M'], ['Fly range', '~620 mi'], ['Air speed', '~155 mph'], ['Status', 'Production proto']],
    body: `<div class="stub-note">Full long-form article will be written on request.</div>
      <h2>Overview</h2><p>Roadable airplane whose wings and empennage deploy automatically. Long flight range relative to pure multicopters.</p>
      <h2>Design</h2><p>Monocoque, multiple power options, transition measured in roughly 80–120 seconds.</p>
      <h2>Price</h2><p>Reported band approximately $800,000 to $1.2 million depending on engine and specification.</p>
      <h2>Performance</h2><p>Manufacturer claims near 620 miles airborne and 155 mph cruise class; road top speed around 124 mph.</p>
      <h2>Current status</h2><p>Prototype airworthiness history; production version unveiled with 2026 delivery ambitions.</p>
      <h2>Pros and cons</h2><ul><li>Serious cruise range</li><li>Requires runway</li><li>Premium pricing</li></ul>
      <h2>Verdict</h2><p>Closest in spirit to a classical personal airplane that also drives.</p>`
  },
  'terrafugia-transition': {
    kicker: 'Roadable fixed-wing',
    meta: 'Terrafugia · Historic programme',
    facts: [['Price', '~$400,000 hist.'], ['Flight', '~400+ mi'], ['Seats', '2'], ['Status', 'Limited']],
    body: `<div class="stub-note">Full long-form article will be written on request.</div>
      <h2>Overview</h2><p>One of the best-known early modern flying-car efforts. Folding wings and a focus on dual-mode certification.</p>
      <h2>Design</h2><p>Fixed-wing aircraft that folds for road use. Conventional take-off and landing.</p>
      <h2>Price</h2><p>Historical figures often cited near $400,000; programme status has varied over time.</p>
      <h2>Performance</h2><p>Flight range commonly discussed in the 400-mile class; road and air speeds modest by sports-car standards.</p>
      <h2>Current status</h2><p>Long development history with ownership and priority shifts. Treat as a reference programme rather than a current high-volume product.</p>
      <h2>Pros and cons</h2><ul><li>Early proof of concept</li><li>Complex certification path</li><li>Availability limited</li></ul>
      <h2>Verdict</h2><p>Important historical marker in the modern flying-car story.</p>`
  },
  'pal-v-liberty': {
    kicker: 'Gyroplane',
    meta: 'PAL-V · Europe pricing from ~€299,000',
    facts: [['Price', '~$330k–$550k'], ['Fly range', '~250–310 mi'], ['Road speed', '~100 mph'], ['Status', 'Certifying']],
    body: `<div class="stub-note">Full long-form article will be written on request.</div>
      <h2>Overview</h2><p>Three-wheeled road vehicle that converts into a gyroplane. Emphasis on existing infrastructure and relatively conventional flight physics.</p>
      <h2>Design</h2><p>Folding rotor and propeller for road mode. Short take-off, autorotation landing characteristics.</p>
      <h2>Price</h2><p>Sport and Pioneer editions in Europe roughly €299,000–€499,000 excluding taxes.</p>
      <h2>Performance</h2><p>Drive range measured in hundreds of miles; flight range commonly cited 250–310 miles; airspeed around 110 mph class.</p>
      <h2>Current status</h2><p>Road certification progress in Europe; aviation type certification continuing with delivery targets in the late 2020s.</p>
      <h2>Pros and cons</h2><ul><li>Mature architecture</li><li>Needs a strip, not a driveway</li><li>Strong reservation interest reported</li></ul>
      <h2>Verdict</h2><p>Among the more realistic near-term dual-mode aircraft if certification closes.</p>`
  },
  'xpeng-aeroht': {
    kicker: 'Modular system',
    meta: 'XPeng / Aridge · Package ~$280,000',
    facts: [['Price', '~$280,000'], ['Ground range', '>600 mi'], ['Air module', 'Short endurance'], ['Status', 'Production']],
    body: `<div class="stub-note">Full long-form article will be written on request.</div>
      <h2>Overview</h2><p>A six-wheel ground vehicle carries, launches and recharges a separate two-seat electric VTOL.</p>
      <h2>Design</h2><p>Ground module with range extender; foldable multicopter air module stored in the rear.</p>
      <h2>Price</h2><p>Combined package reported at or below roughly $280,000 in China.</p>
      <h2>Performance</h2><p>Long ground range; air module endurance measured in tens of minutes and short distances in public commentary.</p>
      <h2>Current status</h2><p>Factory activity and pre-orders reported; deliveries targeted from 2026 in the home market.</p>
      <h2>Pros and cons</h2><ul><li>Solves charging and transport of the aircraft</li><li>Two vehicles to maintain</li><li>Air range still limited</li></ul>
      <h2>Verdict</h2><p>Pragmatic modular approach rather than a single shape-shifting car.</p>`
  },
  'tesla-roadster': {
    kicker: 'Concept',
    meta: 'SpaceX package · Demonstrated October 2026',
    facts: [['Price', 'Not disclosed'], ['Flight', 'Brief hops'], ['Propulsion', 'Cold-gas thrusters'], ['Status', 'Concept']],
    body: `<div class="stub-note">Full long-form article will be written on request.</div>
      <h2>Overview</h2><p>The second-generation Tesla Roadster was shown with a SpaceX-developed cold-gas thruster package capable of short hops and mid-air rolls. Demonstration was uncrewed.</p>
      <h2>Design</h2><p>High-pressure composite tanks feed an array of thrusters. Underbody suction aids extreme manoeuvres. Sustained flight range is not claimed.</p>
      <h2>Price</h2><p>No public list price for the thruster package has been announced.</p>
      <h2>Performance</h2><p>Manufacturer claims include sub-one-second 0–60 mph figures with thrusters. Sustained airborne cruise is outside the demonstrated envelope.</p>
      <h2>Current status</h2><p>Demonstration hardware. Production of the Roadster is targeted later in the decade.</p>
      <h2>Pros and cons</h2><ul><li>Spectacular demonstration</li><li>Not a practical flying car</li><li>Uncrewed demo only so far</li></ul>
      <h2>Verdict</h2><p>A dramatic concept that expands the definition of a sports car more than it delivers everyday personal air mobility.</p>`
  },
  'samson-switchblade': {
    kicker: 'Roadable kit aircraft',
    meta: 'Samson Sky · Kit from ~$170,000',
    facts: [['Price', '~$170k–$200k+'], ['Fly range', '~450 mi'], ['Air speed', '~160–200 mph'], ['Status', 'Pre-production']],
    body: `<div class="stub-note">Full long-form article will be written on request.</div>
      <h2>Overview</h2><p>Three-wheeled street-legal vehicle that deploys wings and tail for conventional runway flight. Offered primarily as an experimental amateur-built kit.</p>
      <h2>Design</h2><p>Hybrid-electric drive, rapid transition, side-by-side seating, garage-compatible folded dimensions.</p>
      <h2>Price</h2><p>Estimated kit pricing commonly cited from the high $100,000s into the low $200,000s.</p>
      <h2>Performance</h2><p>Manufacturer targets include roughly 450-mile ranges in both modes and airspeeds in the 160–200 mph band.</p>
      <h2>Current status</h2><p>Prototypes flown; production funding and facility plans announced.</p>
      <h2>Pros and cons</h2><ul><li>Strong cruise numbers on paper</li><li>Kit / experimental path</li><li>Needs airport infrastructure</li></ul>
      <h2>Verdict</h2><p>A classic roadable-aircraft idea with modern hybrid power and serious performance claims.</p>`
  },
  'aeromobil-4': {
    kicker: 'Roadable fixed-wing',
    meta: 'AeroMobil · Premium positioning',
    facts: [['Price', '~$1.2M–$1.6M est.'], ['Flight', '~400+ mi'], ['Seats', '2'], ['Status', 'Limited series']],
    body: `<div class="stub-note">Full long-form article will be written on request.</div>
      <h2>Overview</h2><p>Slovak roadable aircraft with a distinctive design language and folding wings. Aimed at a high-end buyer.</p>
      <h2>Design</h2><p>Fixed-wing configuration that converts for road use. Emphasis on aesthetics as well as dual-mode function.</p>
      <h2>Price</h2><p>Public estimates often place the vehicle in the low-to-mid seven-figure range depending on specification and market.</p>
      <h2>Performance</h2><p>Flight range discussed in the 400-mile class; airspeed in the 160 mph band in company materials.</p>
      <h2>Current status</h2><p>Long development cycle with limited-series ambitions. Availability remains constrained.</p>
      <h2>Pros and cons</h2><ul><li>Strong visual identity</li><li>Premium price</li><li>Runway required</li></ul>
      <h2>Verdict</h2><p>Design-led entry in the roadable-aircraft category rather than a mass-market proposition.</p>`
  },
  'aska-a5': {
    kicker: 'Hybrid VTOL',
    meta: 'ASKA · Target ~$789,000',
    facts: [['Price', '~$789,000'], ['Fly range', '~250 mi'], ['Seats', '4'], ['Status', 'Testing']],
    body: `<div class="stub-note">Full long-form article will be written on request.</div>
      <h2>Overview</h2><p>Four-seat hybrid-electric roadable aircraft with vertical and short-field capability.</p>
      <h2>Design</h2><p>Multiple propulsors, range-extending engine, roadable configuration sized like a large SUV when wings are managed.</p>
      <h2>Price</h2><p>Public figure near $789,000 with reservation deposits reported.</p>
      <h2>Performance</h2><p>Flight range around 250 miles and 150 mph class airspeed in company materials.</p>
      <h2>Current status</h2><p>Special airworthiness and road testing activity; commercialisation discussed for later in the decade.</p>
      <h2>Pros and cons</h2><ul><li>Four seats</li><li>Hybrid energy system</li><li>Certification and road rules still evolving</li></ul>
      <h2>Verdict</h2><p>Ambitious capacity and hybrid range; timeline remains the key variable.</p>`
  }
};

/* ---------- Helpers ---------- */
function shortName(name) {
  return name.split(' ')[0];
}

/* Image block: photo fills the frame; name shows only if the photo fails */
function imgBlock(c) {
  return `<div class="card-img">
        <div class="placeholder">${shortName(c.name)}</div>
        <img src="${c.image}" alt="${c.name}" loading="lazy" onerror="this.style.display='none'">
      </div>`;
}

/* ---------- Featured deck ---------- */
function renderFeatured() {
  const deck = document.getElementById('featuredDeck');
  if (!deck) return;
  const featured = CARS.filter(c => c.featured);
  deck.innerHTML = featured.map((c, i) => `
    <article class="deck-card" data-id="${c.id}" style="z-index:${featured.length - i}">
      ${imgBlock(c)}
      <div class="card-body">
        <p class="card-type">${c.type}</p>
        <h3>${c.name}</h3>
        <div class="card-meta">
          <span>${c.price}</span>
          <span>${c.speed.split('·')[0].trim()}</span>
        </div>
      </div>
      <div class="card-hover">${c.summary.slice(0, 110)}…</div>
    </article>
  `).join('');
  deck.querySelectorAll('.deck-card').forEach(el => {
    el.addEventListener('click', () => openArticle(el.dataset.id));
  });
  updateDeckFan();
}

/* ---------- Review grid ---------- */
function renderGrid() {
  const grid = document.getElementById('reviewGrid');
  if (!grid) return;
  grid.innerHTML = CARS.map(c => `
    <article class="review-card reveal" data-id="${c.id}">
      ${imgBlock(c)}
      <div class="card-body">
        <p class="card-type">${c.type}</p>
        <h3>${c.name}</h3>
        <p class="summary">${c.summary}</p>
        <dl class="specs">
          <div><dt>Price</dt><dd>${c.price}</dd></div>
          <div><dt>Range</dt><dd>${c.range}</dd></div>
          <div><dt>Top speed</dt><dd>${c.speed}</dd></div>
          <div><dt>Seats</dt><dd>${c.seats}</dd></div>
        </dl>
        <div class="extra"><strong>Status:</strong> ${c.status}</div>
      </div>
    </article>
  `).join('');
  grid.querySelectorAll('.review-card').forEach(el => {
    el.addEventListener('click', () => openArticle(el.dataset.id));
  });
}

/* ---------- Comparison list (no table) ---------- */
function renderCompare() {
  const list = document.getElementById('compareList');
  if (!list) return;
  list.innerHTML = CARS.map(c => `
    <div class="compare-row reveal">
      <div class="name">${c.name}</div>
      <div class="meta"><span>Price</span>${c.price}</div>
      <div class="meta"><span>Flight range</span>${c.range.includes('Fly') ? c.range.split('·').pop().trim() : c.range}</div>
      <div class="meta"><span>Air speed</span>${c.speed.split('·')[0].trim()}</div>
    </div>
  `).join('');
}

/* ---------- Deck fan on scroll ---------- */
function updateDeckFan() {
  const wrap = document.querySelector('.deck-wrap');
  if (!wrap) return;
  const rect = wrap.getBoundingClientRect();
  const mid = window.innerHeight * 0.45;
  const progress = Math.max(0, Math.min(1, 1 - Math.abs(rect.top + rect.height / 2 - mid) / (window.innerHeight * 0.55)));
  const cards = document.querySelectorAll('.deck-card');
  const n = cards.length;
  cards.forEach((card, i) => {
    const offset = (i - (n - 1) / 2);
    const angle = offset * 9 * progress;
    const x = offset * 70 * progress;
    const y = Math.abs(offset) * 8 * progress;
    card.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
  });
}

/* ---------- Hero slideshow ---------- */
let heroIndex = 0;
function initHero() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  slides.forEach(s => {
    const bg = s.getAttribute('data-bg');
    if (bg) s.style.backgroundImage = `url('${bg}')`;
  });
  const dots = document.getElementById('heroDots');
  if (dots) {
    dots.innerHTML = Array.from(slides).map((_, i) =>
      `<button class="hero-dot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="Slide ${i + 1}"></button>`
    ).join('');
    dots.querySelectorAll('.hero-dot').forEach(d => {
      d.addEventListener('click', () => {
        heroIndex = +d.dataset.i;
        showHero(heroIndex);
      });
    });
  }
  setInterval(() => {
    heroIndex = (heroIndex + 1) % slides.length;
    showHero(heroIndex);
  }, 6500);
}
function showHero(i) {
  document.querySelectorAll('.hero-slide').forEach((s, idx) => s.classList.toggle('active', idx === i));
  document.querySelectorAll('.hero-dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
}

/* ---------- Scroll progress + reveal ---------- */
function onScroll() {
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
  const bar = document.getElementById('progress');
  if (bar) bar.style.width = (scrolled * 100) + '%';
  updateDeckFan();
  document.querySelectorAll('.reveal').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.88) el.classList.add('visible');
  });
}

/* ---------- Routing ---------- */
const SECTION_IDS = ['featured', 'reviews', 'how', 'compare', 'contact'];

function openArticle(id) {
  location.hash = '#/' + id;
}

function showHome(keepScroll) {
  const home = document.getElementById('home-view');
  const art = document.getElementById('article-view');
  if (home) home.style.display = 'block';
  if (art) { art.hidden = true; art.style.display = 'none'; }
  if (!keepScroll) window.scrollTo(0, 0);
}

function showArticle(id) {
  const car = CARS.find(c => c.id === id);
  const artData = ARTICLES[id];
  if (!car || !artData) { showHome(); return; }
  document.getElementById('home-view').style.display = 'none';
  const view = document.getElementById('article-view');
  view.hidden = false;
  view.style.display = 'block';
  document.getElementById('artKicker').textContent = artData.kicker;
  document.getElementById('artTitle').textContent = car.name;
  document.getElementById('artMeta').textContent = artData.meta;
  const img = document.getElementById('artImg');
  img.style.display = 'block';
  img.onerror = () => { img.style.display = 'none'; };
  img.src = car.image;
  img.alt = car.name;
  document.getElementById('artPlaceholder').textContent = car.name;
  document.getElementById('artFacts').innerHTML = artData.facts.map(([k, v]) =>
    `<div><dt>${k}</dt><dd>${v}</dd></div>`
  ).join('');
  document.getElementById('artBody').innerHTML = artData.body;
  window.scrollTo(0, 0);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector('.site-header');
  const offset = header ? header.offsetHeight : 0;
  const top = el.getBoundingClientRect().top + window.scrollY - offset + 1;
  window.scrollTo({ top, behavior: 'smooth' });
}

function route() {
  const hash = (location.hash || '').replace(/^#\/?/, '');

  if (!hash || hash === 'home') { showHome(); return; }

  if (CARS.some(c => c.id === hash)) { showArticle(hash); return; }

  if (SECTION_IDS.includes(hash)) {
    showHome(true);
    setTimeout(() => scrollToSection(hash), 60);
    return;
  }

  showHome();
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const back = document.getElementById('backBtn');
  if (back) back.addEventListener('click', () => { location.hash = '#reviews'; });

  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const links = nav ? nav.querySelectorAll('a') : [];

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuBtn.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Close mobile menu after clicking a link
  links.forEach(a => a.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
    if (menuBtn) menuBtn.textContent = '☰';
  }));

  // Home / logo links (header + footer)
  document.querySelectorAll('[data-nav="home"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      if (location.hash === '#/' || !location.hash) { showHome(); }
      else { location.hash = '#/'; }
    });
  });

  // Highlight the menu link of the section currently on screen
  function setActive() {
    const home = document.getElementById('home-view');
    if (!home || home.style.display === 'none') {
      links.forEach(a => a.classList.remove('active'));
      return;
    }
    let current = 'home';
    const y = window.scrollY + 140;
    ['reviews', 'how', 'compare'].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= y) current = id;
    });
    const contact = document.getElementById('contact');
    if (contact && contact.offsetTop - window.innerHeight * 0.5 <= window.scrollY) current = 'contact';
    links.forEach(a => {
      const isHome = a.dataset.nav === 'home';
      a.classList.toggle('active', isHome ? current === 'home' : a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('hashchange', () => { route(); setTimeout(setActive, 150); });
  window.addEventListener('scroll', () => { onScroll(); setActive(); }, { passive: true });
  window.addEventListener('resize', updateDeckFan);

  renderFeatured();
  renderGrid();
  renderCompare();
  initHero();
  route();
  onScroll();
  setActive();
});
