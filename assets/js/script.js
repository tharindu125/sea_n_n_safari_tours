/* ============================================
   Sea & Safari Tours – Main JavaScript
   ============================================ */

const WHATSAPP_NUMBER = '94787097430';
const COMPANY_EMAIL = 'seaandsafaritours@gmail.com';
const SITE_URL = 'https://www.ceylonseasafaritours.com';
const SITE_NAME = 'Sea & Safari Tours';
const SITE_LOCATION = 'Mirissa, Sri Lanka';
const SITE_LOCATION_SHORT = 'Mirissa';
const SITE_LOCALE = 'en_US';
/** Fill in values from Google Analytics, Search Console, Bing Webmaster Tools & Google Business Profile */
const SEO_CONFIG = {
  ga4Id: 'G-BHSB4E2ZJV',
  googleSiteVerification: '', // meta content from Search Console
  bingSiteVerification: '', // meta content from Bing Webmaster Tools (msvalidate.01)
  googleBusinessProfileUrl: '', // e.g. https://maps.app.goo.gl/... or Google Maps place URL
  googleBusinessReviewUrl: '' // e.g. https://search.google.com/local/writereview?placeid=ChIJ...
};
const GOOGLE_GA_ID = SEO_CONFIG.ga4Id;
const TWITTER_HANDLE = '';
const SITE_COPYRIGHT = `\u00A9 ${new Date().getFullYear()} Sea & Safari Tours`;
const SITE_ALTERNATE_NAME = 'Sea Safari Tours Mirissa';
const GOOGLE_REVIEW_URL = 'https://www.google.com/search?q=Sea+%26+Safari+Tours+Mirissa+reviews';
const TRIPADVISOR_URL = 'https://www.tripadvisor.com/Search?q=Sea+Safari+Tours+Mirissa';
const GETYOURGUIDE_SUPPLIER_URL = 'https://www.getyourguide.com/-s700688';
const GETYOURGUIDE_MIRISSA_URL = 'https://www.getyourguide.com/en-au/mirissa-l97533/';
const GETYOURGUIDE_BADGES = [
  { src: 'https://gyg.me/DFO5LFuz', alt: 'GetYourGuide | Sea & Safari Tours' },
  { src: 'https://gyg.me/kUtga42u', alt: 'GetYourGuide | Sea & Safari Tours' }
];
const GETYOURGUIDE_PRODUCT_BADGE = 'https://gyg.me/pQw3KK9K';
const OFFICE_HOURS = { start: 6, end: 20 };
const WHALE_BLUE_IMG = 'assets/images/whale-dolphin/mirissa_whale_watching_tour_blue_whale.png';
const WHALE_BLUE_IMG_02 = 'assets/images/whale-dolphin/mirissa_whale_watching_tour_blue_whale_02.png';
const AIRPORT_SHUTTLE_IMG = 'assets/images/airport-shuttle/aircraft_landing_sky.jpg';
const AIRPORT_SHUTTLE_IMAGES = [
  'assets/images/airport-shuttle/aircraft_landing_sky.jpg',
  'assets/images/airport-shuttle/private_airport_transfer_vehicle.jpg',
  'assets/images/airport-shuttle/colombo_airport_arrivals.jpg'
];

const WHALE_VIDEOS = [
  {
    src: 'assets/videos/whale-dolphin/mirissa_whale_watching_tour_01.mp4',
    titleKey: 'home.video1Title',
    captionKey: 'home.video1Caption'
  },
  {
    src: 'assets/videos/whale-dolphin/mirissa_whale_watching_tour_02.mp4',
    titleKey: 'home.video2Title',
    captionKey: 'home.video2Caption'
  },
  {
    src: 'assets/videos/whale-dolphin/mirissa_whale_watching_tour_03.mp4',
    titleKey: 'home.video3Title',
    captionKey: 'home.video3Caption'
  }
];

const SEO_DEFAULTS = {
  author: 'Sea & Safari Tours',
  copyright: SITE_COPYRIGHT,
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  googlebot: 'index, follow',
  themeColor: '#0f2832',
  referrer: 'no-referrer',
  geo: {
    region: 'LK-3',
    placename: 'Mirissa, Sri Lanka',
    position: '5.9483;80.4719',
    icbm: '5.9483, 80.4719'
  },
  business: {
    streetAddress: 'Mirissa, Southern Province',
    locality: 'Mirissa',
    region: 'Southern Province',
    postalCode: '81740',
    country: 'Sri Lanka'
  },
  dc: {
    publisher: 'Sea & Safari Tours',
    contributor: 'Sea & Safari Tours',
    type: 'Text',
    format: 'text/html',
    language: 'en',
    coverage: 'Mirissa, Sri Lanka',
    rights: `${SITE_COPYRIGHT}. All rights reserved.`
  }
};

const PAGE_SEO = {
  'index.html': {
    title: 'Sea & Safari Tours | Mirissa Whale Watching & Ocean Adventures Sri Lanka',
    description: 'Join Sea & Safari Tours for unforgettable ocean adventures — whale watching, turtle snorkeling, scuba diving, river kayak, fishing & wildlife tours in Mirissa. Airport shuttle from Colombo (CMB). Expert guides, free hotel pickup, 4.9★ rated.',
    keywords: 'Sea & Safari Tours, Mirissa whale watching, Mirissa snorkeling, whale watching Mirissa, scuba diving Mirissa, turtle snorkeling Mirissa, river kayak Mirissa, crocodile safari Mirissa, deep sea fishing Mirissa, Sri Lanka tours, things to do in Mirissa, Mirissa ocean adventures, cooking class Mirissa, dolphin watching Mirissa, colombo airport to mirissa transfer, airport shuttle mirissa',
    dcSubject: 'Whale Watching, Turtle Snorkeling, Scuba Diving, River Kayak, Crocodile Safari, Deep Sea Fishing, Cooking Class, Ocean Adventures, Mirissa Tours, Airport Shuttle',
    image: `${SITE_URL}/${WHALE_BLUE_IMG}`,
    path: '/'
  },
  'tours.html': {
    title: 'All Tours in Mirissa | Whale Watching, Snorkeling & Safari | Sea & Safari Tours',
    description: 'Browse 8 Mirissa ocean and wildlife tours — whale watching from $45, turtle snorkeling, river kayak, scuba diving, cooking class & combo packages.',
    keywords: 'mirissa tours, sri lanka adventure tours, whale watching mirissa, snorkeling mirissa, river kayak sri lanka',
    image: `${SITE_URL}/${WHALE_BLUE_IMG}`,
    path: '/tours.html'
  },
  'booking.html': {
    title: 'Book a Tour Online | Sea & Safari Tours Mirissa',
    description: 'Reserve your Mirissa whale watching or snorkeling tour online. Need an airport transfer? We also offer CMB → Mirissa shuttle for international travelers. Instant WhatsApp confirmation & free hotel pickup.',
    keywords: 'book mirissa tour, whale watching booking, mirissa tour reservation, colombo airport shuttle mirissa, cmb to mirissa transfer',
    image: `${SITE_URL}/assets/images/logo.png`,
    path: '/booking.html'
  },
  'payment.html': {
    title: 'Complete Payment | Sea & Safari Tours',
    description: 'Secure your Sea & Safari Tours booking in Mirissa. Complete payment details for your whale watching or ocean adventure tour.',
    keywords: 'mirissa tour payment, sea safari tours booking',
    image: `${SITE_URL}/assets/images/logo.png`,
    path: '/payment.html',
    robots: 'noindex, nofollow'
  },
  'about.html': {
    title: 'About Us | Mirissa Tour Company | Sea & Safari Tours',
    description: 'Mirissa\'s trusted marine adventure company — 5+ years experience, 10,000+ happy travelers, expert local guides & ethical wildlife tours.',
    keywords: 'sea safari tours mirissa, about mirissa tour company, sri lanka tour operator',
    image: `${SITE_URL}/${WHALE_BLUE_IMG}`,
    path: '/about.html'
  },
  'contact.html': {
    title: 'Contact Us | Sea & Safari Tours Mirissa Sri Lanka',
    description: 'Contact Sea & Safari Tours via WhatsApp +94 78 709 7430, phone, or email. Based in Mirissa — we reply within 1 hour. Book your tour today.',
    keywords: 'contact sea safari tours, mirissa tour phone, whale watching whatsapp mirissa',
    image: `${SITE_URL}/assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_group-dive.png`,
    path: '/contact.html'
  },
  'faq.html': {
    title: 'FAQ | Mirissa Tours Booking & Whale Watching | Sea & Safari Tours',
    description: 'Frequently asked questions about Mirissa whale watching, booking, airport transfers from Colombo (CMB), safety, payment, cancellation policy, and what to bring on your tour.',
    keywords: 'mirissa whale watching faq, mirissa tour questions, sri lanka tour booking help, colombo airport to mirissa transfer faq, airport shuttle mirissa',
    image: `${SITE_URL}/assets/images/logo.png`,
    path: '/faq.html'
  },
  'gallery.html': {
    title: 'Photo Gallery | Mirissa Whale Watching & Tours | Sea & Safari Tours',
    description: 'Real guest photos from Mirissa whale watching, turtle snorkeling, river kayaking, scuba diving, and Sri Lankan cooking class tours.',
    keywords: 'mirissa tour photos, whale watching pictures, mirissa snorkeling gallery',
    image: `${SITE_URL}/${WHALE_BLUE_IMG_02}`,
    path: '/gallery.html'
  },
  'blog.html': {
    title: 'Mirissa Travel Blog | Whale Watching Tips & Sri Lanka Guides | Sea & Safari Tours',
    description: 'Expert guides on Mirissa whale watching seasons, turtle snorkeling, south coast travel, packing tips & ethical ocean tours in Sri Lanka.',
    keywords: 'mirissa blog, whale watching tips mirissa, things to do mirissa, sri lanka travel guide, mirissa travel blog',
    dcSubject: 'Mirissa Travel Blog, Whale Watching Guides, Sri Lanka Tourism',
    image: `${SITE_URL}/${WHALE_BLUE_IMG}`,
    path: '/blog.html'
  },
  'combos.html': {
    title: 'Mirissa Combo Packages | Whale Watching & Tour Bundles | Sea & Safari Tours',
    description: 'Save on Mirissa combo packages — whale watching + turtle snorkeling, river kayak + cooking class & more. Bundled tours from $50/person with free hotel pickup.',
    keywords: 'mirissa combo packages, whale watching turtle snorkeling combo, mirissa tour bundles, sri lanka package tours mirissa',
    dcSubject: 'Mirissa Combo Packages, Tour Bundles, Whale Watching Packages',
    image: `${SITE_URL}/${WHALE_BLUE_IMG}`,
    path: '/combos.html'
  },
  'tour-details.html': {
    title: 'Tour Details | Sea & Safari Tours',
    description: 'Detailed Mirissa tour information, itinerary, pricing, and online booking for Sea & Safari Tours.',
    keywords: 'mirissa tour details, sea safari tours',
    image: `${SITE_URL}/assets/images/logo.png`,
    path: '/tour-details.html',
    robots: 'noindex, nofollow'
  },
  '404.html': {
    title: 'Page Not Found | Sea & Safari Tours Mirissa',
    description: 'The page you requested could not be found. Browse Mirissa whale watching tours, combo packages, and ocean adventures with Sea & Safari Tours.',
    keywords: 'sea safari tours mirissa, mirissa tours',
    image: `${SITE_URL}/assets/images/logo.png`,
    path: '/404.html',
    robots: 'noindex, follow'
  },
  'airport-shuttle.html': {
    title: 'Airport Shuttle Mirissa | Colombo Airport (CMB) Transfers | Sea & Safari Tours',
    description: 'Private airport shuttle for international travelers — Colombo Bandaranaike Airport (CMB) to Mirissa and return. English-speaking driver, AC vehicle, meet & greet. From $85/vehicle. Book via WhatsApp.',
    keywords: 'colombo airport to mirissa transfer, cmb airport shuttle mirissa, mirissa airport pickup, sri lanka airport transfer foreigners, bandaranaike airport mirissa taxi, airport shuttle sri lanka tourists',
    dcSubject: 'Airport Transfer, Colombo Airport Shuttle, Mirissa Transfer, CMB to Mirissa, International Travelers',
    image: `${SITE_URL}/${AIRPORT_SHUTTLE_IMG}`,
    imageAlt: 'Aircraft and private shuttle — Colombo Airport (CMB) to Mirissa transfer',
    path: '/airport-shuttle.html'
  }
};

const AIRPORT_SHUTTLE = {
  priceFrom: 85,
  maxGuests: 4,
  durationHours: '3.5–4',
  waTextEn: 'Hello Sea & Safari Tours! I need an airport shuttle for international travelers. Route: Colombo Airport (CMB) to Mirissa. Date: [your date]. Passengers: [number]. Flight number: [if available]. Thank you!'
};

const AIRPORT_SHUTTLE_FAQ = [
  { q: 'Do you offer airport shuttle for foreigners arriving in Sri Lanka?', a: 'Yes. We provide private airport transfers between Colombo Bandaranaike International Airport (CMB) and Mirissa — ideal for international travelers. Message us on WhatsApp with your flight details.' },
  { q: 'How long is the drive from Colombo Airport to Mirissa?', a: 'The journey typically takes 3.5 to 4 hours depending on traffic and your exact hotel location. We use the southern expressway when possible for a comfortable ride.' },
  { q: 'Can I book an airport transfer together with my tours?', a: 'Absolutely. Many guests book their CMB → Mirissa arrival transfer, Mirissa tours, and return airport shuttle in one WhatsApp message. We confirm everything for you.' },
  { q: 'Will someone meet me at the airport?', a: 'Yes. Your driver meets you at the arrivals area with a name board, assists with luggage, and drives you directly to your Mirissa hotel in an air-conditioned private vehicle.' }
];

const TOUR_SEO = {
  'whale-dolphin': 'mirissa whale watching, blue whale sri lanka, dolphin watching mirissa, whale watching tour mirissa, whale watching price mirissa',
  'turtle-snorkeling': 'turtle snorkeling mirissa, mirissa snorkeling, sea turtle tour sri lanka, snorkeling mirissa beach',
  'crocodile-safari': 'crocodile watching sri lanka, nilwala river safari, matara crocodile tour, mirissa crocodile watching',
  'river-kayak': 'river kayak mirissa, mangrove kayaking sri lanka, mirissa kayak tour, river safari mirissa',
  'scuba-diving': 'scuba diving mirissa, mirissa diving tour, coral reef diving sri lanka, beginner scuba mirissa',
  'night-snorkeling': 'night snorkeling mirissa, mirissa night dive, snorkeling sri lanka night tour',
  'deep-sea-fishing': 'deep sea fishing mirissa, fishing tour sri lanka, mirissa boat fishing, private fishing mirissa',
  'cooking-class': 'sri lankan cooking class mirissa, mirissa cooking tour, authentic cooking experience sri lanka'
};

const COMBO_SEO = {
  'whale-turtle': 'mirissa whale and turtle combo, whale watching turtle snorkeling package mirissa, mirissa combo tour, blue whale snorkeling bundle sri lanka',
  'kayak-cooking': 'mirissa kayak cooking class combo, river kayak cooking package mirissa, sri lanka culture nature tour',
  'whale-kayak': 'mirissa whale watching kayak combo, blue whale river kayak package, land and sea mirissa tour',
  'whale-crocodile': 'mirissa whale crocodile combo, whale watching crocodile safari package, wildlife combo tour sri lanka',
  'turtle-kayak': 'turtle snorkeling kayak combo mirissa, mirissa turtle and kayak package, ocean and river combo sri lanka',
  'turtle-crocodile': 'turtle snorkeling crocodile combo mirissa, mirissa turtle crocodile package, wildlife snorkeling safari sri lanka'
};

const COMBO_PACKAGES = [
  {
    id: 'whale-turtle',
    tourIds: ['whale-dolphin', 'turtle-snorkeling'],
    name: 'Whale & Dolphin Watching + Turtle Snorkeling',
    badge: 'Most Popular',
    tours: ['Whale & Dolphin Watching', 'Turtle Snorkeling'],
    price: 65,
    originalPrice: 70,
    duration: 'Full Day (~6 hours)',
    location: 'Mirissa, Sri Lanka',
    desc: 'Our best-selling combo — morning whale cruise, then snorkel with turtles. Free hotel pickup included.',
    fullDesc: 'Experience the best of Mirissa\'s ocean in one unforgettable day. Start with an early-morning whale and dolphin watching cruise on the Indian Ocean, then snorkel with sea turtles in calm reef waters. This bundled package saves you money compared to booking separately — with free hotel pickup and one simple WhatsApp booking.',
    highlights: [
      'Two top Mirissa experiences in a single day',
      'Morning blue whale & dolphin cruise from Mirissa Harbor',
      'Afternoon turtle snorkeling with 100% sighting guarantee',
      'Save $5 vs booking tours separately',
      'Free hotel pickup and drop-off in Mirissa'
    ],
    itinerary: [
      { time: '6:30 AM', title: 'Whale & Dolphin Watching', desc: 'Depart Mirissa Harbor for a 3–4 hour ocean cruise. Spot blue whales, sperm whales, dolphins, and sea turtles with expert crew and breakfast on board.' },
      { time: '11:00 AM', title: 'Return & Break', desc: 'Return to harbor, light refreshment break. Transfer to turtle snorkeling departure point.' },
      { time: '1:00 PM', title: 'Turtle Snorkeling', desc: 'Guided 1.5-hour snorkeling session with guaranteed turtle sightings. Equipment, guide, and safety briefing included.' },
      { time: '3:00 PM', title: 'Hotel Drop-off', desc: 'Return to your Mirissa hotel after an action-packed ocean day.' }
    ],
    included: [
      'Whale watching cruise with breakfast & life jackets',
      'Turtle snorkeling with mask, fins & in-water guide',
      'Free Mirissa hotel pickup and drop-off',
      'Bottled water and light snacks',
      'Experienced English-speaking guides'
    ],
    image: WHALE_BLUE_IMG,
    waText: 'Hello! I would like to book the Whale & Dolphin Watching + Turtle Snorkeling combo.',
    getYourGuide: {
      url: 'https://www.getyourguide.com/kamburugamuwa-l257091/mirissa-blue-whale-watching-turtle-snorkeling-combo-tour-t1201886/',
      badge: GETYOURGUIDE_PRODUCT_BADGE,
      title: 'Mirissa: Blue Whale Watching & Turtle Snorkeling Combo Tour'
    }
  },
  {
    id: 'kayak-cooking',
    tourIds: ['river-kayak', 'cooking-class'],
    name: 'River Kayak + Cooking Class',
    badge: 'Culture & Nature',
    tours: ['River Kayak Tours', 'Cooking Class'],
    price: 50,
    originalPrice: 55,
    duration: 'Half Day (~4 hours)',
    location: 'Mirissa, Sri Lanka',
    desc: 'Paddle through mangroves in the morning, then learn authentic Sri Lankan cooking in the afternoon.',
    fullDesc: 'Blend nature and culture in one relaxed Mirissa day. Paddle through calm mangrove waterways spotting kingfishers and water monitors, then join a local chef for a hands-on Sri Lankan cooking class. Perfect for travelers who want variety without rushing — with free pickup and a bundled discount.',
    highlights: [
      'Peaceful river kayak through mangroves & rainforest',
      'Authentic hands-on Sri Lankan cooking class',
      'Save $5 vs booking tours separately',
      'Suitable for beginners — no experience needed',
      'Free hotel pickup in Mirissa'
    ],
    itinerary: [
      { time: '8:00 AM', title: 'River Kayak Tour', desc: '1.5-hour guided kayak through calm waterways. Spot wildlife, learn about local ecosystems, and enjoy serene paddling.' },
      { time: '10:00 AM', title: 'Transfer & Break', desc: 'Short break before heading to the cooking class venue.' },
      { time: '11:00 AM', title: 'Sri Lankan Cooking Class', desc: '2.5-hour hands-on class with a local chef. Prepare traditional dishes using fresh spices, then enjoy your meal together.' },
      { time: '2:00 PM', title: 'Hotel Drop-off', desc: 'Return to your hotel after a delicious cultural experience.' }
    ],
    included: [
      'River kayak with equipment and guide',
      'Cooking class ingredients, recipes & shared meal',
      'Free Mirissa hotel pickup and drop-off',
      'Bottled water during activities',
      'English-speaking local guides'
    ],
    image: 'assets/images/river-kayak/mirissa_kayak_mangrove-roots.png',
    waText: 'Hello! I would like to book the River Kayak + Cooking Class combo.'
  },
  {
    id: 'whale-kayak',
    tourIds: ['whale-dolphin', 'river-kayak'],
    name: 'Whale & Dolphin Watching + River Kayak',
    badge: 'Land & Sea',
    tours: ['Whale & Dolphin Watching', 'River Kayak Tours'],
    price: 65,
    originalPrice: 70,
    duration: 'Full Day (~6 hours)',
    location: 'Mirissa, Sri Lanka',
    desc: 'Combine an early-morning ocean safari with a peaceful river kayak through rainforest and mangroves.',
    fullDesc: 'The ultimate land-and-sea Mirissa adventure. Witness blue whales and dolphins on a sunrise ocean cruise, then explore tranquil inland waterways by kayak. Two completely different ecosystems in one day — ocean giants and mangrove wildlife — at a bundled price with free hotel transfers.',
    highlights: [
      'Ocean whale safari plus inland river kayak',
      'Early-morning departure for best whale sightings',
      'Peaceful mangrove paddling in the afternoon',
      'Save $5 vs booking tours separately',
      'Free hotel pickup and drop-off'
    ],
    itinerary: [
      { time: '6:30 AM', title: 'Whale & Dolphin Watching', desc: '3–4 hour morning cruise from Mirissa Harbor. Search for blue whales, sperm whales, and playful dolphins.' },
      { time: '11:00 AM', title: 'Return & Break', desc: 'Return to harbor and enjoy a short break before the kayak tour.' },
      { time: '1:00 PM', title: 'River Kayak Tour', desc: '1.5-hour guided paddle through calm rivers and mangroves. Spot kingfishers, herons, and water monitors.' },
      { time: '3:00 PM', title: 'Hotel Drop-off', desc: 'Transfer back to your Mirissa accommodation.' }
    ],
    included: [
      'Whale watching cruise with breakfast & safety gear',
      'River kayak with equipment and guide',
      'Free Mirissa hotel pickup and drop-off',
      'Bottled water and light snacks',
      'Experienced local guides'
    ],
    image: 'assets/images/river-kayak/mirissa_kayak_sunset-kayak.png',
    waText: 'Hello! I would like to book the Whale & Dolphin Watching + River Kayak combo.',
    getYourGuide: {
      url: 'https://www.getyourguide.com/kamburugamuwa-l257091/mirissa-blue-whale-watching-river-kayaking-combo-tour-t1233283/',
      badge: GETYOURGUIDE_PRODUCT_BADGE,
      title: 'Mirissa: Blue Whale Watching & River Kayaking Combo Tour'
    }
  },
  {
    id: 'whale-crocodile',
    tourIds: ['whale-dolphin', 'crocodile-safari'],
    name: 'Whale & Dolphin Watching + Crocodile Watching',
    badge: 'Wildlife Combo',
    tours: ['Whale & Dolphin Watching', 'Crocodile Watching'],
    price: 70,
    originalPrice: 75,
    duration: 'Full Day (~7 hours)',
    location: 'Mirissa & Matara, Sri Lanka',
    desc: 'Ocean giants in the morning and crocodile river safari in the afternoon — two unforgettable wildlife experiences.',
    fullDesc: 'A full day of Sri Lankan wildlife at its finest. Begin with a sunrise whale watching cruise off Mirissa, then head to the Nilwala River near Matara for a crocodile and mangrove safari. Spot saltwater crocodiles, kingfishers, monkeys, and more — two iconic wildlife experiences bundled with free transfers.',
    highlights: [
      'Blue whales in the morning, crocodiles in the afternoon',
      'Nilwala River mangrove safari near Matara',
      'Save $5 vs booking tours separately',
      'Expert wildlife guides on both experiences',
      'Free hotel pickup from Mirissa area'
    ],
    itinerary: [
      { time: '6:30 AM', title: 'Whale & Dolphin Watching', desc: 'Early-morning 3–4 hour ocean cruise from Mirissa Harbor. Watch for blue whales, dolphins, and sea turtles.' },
      { time: '11:00 AM', title: 'Return & Transfer', desc: 'Return to harbor, break, then transfer to Nilwala River departure point near Matara.' },
      { time: '1:30 PM', title: 'Crocodile Watching Safari', desc: '2-hour boat safari through mangroves. Spot crocodiles, kingfishers, monkeys, and river wildlife.' },
      { time: '4:00 PM', title: 'Hotel Drop-off', desc: 'Return to your Mirissa hotel after an incredible wildlife day.' }
    ],
    included: [
      'Whale watching cruise with breakfast & life jackets',
      'Crocodile river safari boat with guide',
      'Free Mirissa hotel pickup and drop-off',
      'Transfers between tour locations',
      'Bottled water and experienced guides'
    ],
    image: 'assets/images/crocodile-safari/crocodile_watching_close-up.png',
    waText: 'Hello! I would like to book the Whale & Dolphin Watching + Crocodile Watching combo.',
    getYourGuide: {
      url: 'https://www.getyourguide.com/kamburugamuwa-l257091/mirissa-whale-watching-crocodile-watching-combo-tour-t1328775/',
      badge: GETYOURGUIDE_PRODUCT_BADGE,
      title: 'Mirissa: Blue Whale Watching & Crocodile Watching Combo Tour'
    }
  },
  {
    id: 'turtle-kayak',
    tourIds: ['turtle-snorkeling', 'river-kayak'],
    name: 'Turtle Snorkeling + River Kayak',
    badge: 'Ocean & River',
    tours: ['Turtle Snorkeling', 'River Kayak Tours'],
    price: 45,
    originalPrice: 50,
    duration: 'Half Day (~3.5 hours)',
    location: 'Mirissa, Sri Lanka',
    desc: 'Swim with sea turtles, then paddle through calm mangrove rivers — two gentle adventures in one morning.',
    fullDesc: 'Perfect for travelers who want ocean and inland nature without an early start. Snorkel with sea turtles on Mirissa\'s reef, then glide through peaceful mangrove waterways by kayak. Beginner-friendly, small groups, and a bundled discount with free hotel pickup.',
    highlights: [
      '100% turtle sighting guarantee on snorkeling tour',
      'Peaceful river kayak through mangroves & rainforest',
      'Save $5 vs booking tours separately',
      'No early-morning departure — ideal for relaxed travelers',
      'Free hotel pickup and drop-off in Mirissa'
    ],
    itinerary: [
      { time: '8:00 AM', title: 'Turtle Snorkeling', desc: '1.5-hour guided snorkeling with guaranteed turtle sightings. Equipment, in-water guide, and safety briefing included.' },
      { time: '10:00 AM', title: 'Break & Transfer', desc: 'Short refreshment break before heading to the river kayak departure point.' },
      { time: '11:00 AM', title: 'River Kayak Tour', desc: '1.5-hour guided paddle through calm waterways. Spot kingfishers, herons, water monitors, and monkeys.' },
      { time: '1:00 PM', title: 'Hotel Drop-off', desc: 'Return to your Mirissa hotel after a refreshing half-day adventure.' }
    ],
    included: [
      'Turtle snorkeling with mask, fins & in-water guide',
      'River kayak with equipment and guide',
      'Free Mirissa hotel pickup and drop-off',
      'Bottled water and light snacks',
      'English-speaking local guides'
    ],
    image: 'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_swim-with-turtle.png',
    waText: 'Hello! I would like to book the Turtle Snorkeling + River Kayak combo.'
  },
  {
    id: 'turtle-crocodile',
    tourIds: ['turtle-snorkeling', 'crocodile-safari'],
    name: 'Turtle Snorkeling + Crocodile Watching',
    badge: 'Wildlife Duo',
    tours: ['Turtle Snorkeling', 'Crocodile Watching'],
    price: 50,
    originalPrice: 55,
    duration: 'Half Day (~5 hours)',
    location: 'Mirissa & Matara, Sri Lanka',
    desc: 'Reef turtles in the morning and crocodile river safari in the afternoon — two unique wildlife encounters in one day.',
    fullDesc: 'Discover Sri Lanka\'s diverse wildlife from ocean reef to mangrove river. Swim with sea turtles in Mirissa\'s crystal-clear waters, then cruise the Nilwala River near Matara for crocodiles, kingfishers, and monkeys. Bundled pricing with transfers and free pickup from Mirissa hotels.',
    highlights: [
      'Guaranteed turtle sightings on snorkeling tour',
      'Nilwala River crocodile safari near Matara',
      'Save $5 vs booking tours separately',
      'Two ecosystems — reef and mangrove — in one package',
      'Free hotel pickup from Mirissa area'
    ],
    itinerary: [
      { time: '8:00 AM', title: 'Turtle Snorkeling', desc: '1.5-hour guided snorkeling session with guaranteed turtle sightings. All equipment and in-water guide included.' },
      { time: '10:00 AM', title: 'Break & Transfer', desc: 'Short break, then transfer to Nilwala River departure point near Matara.' },
      { time: '11:30 AM', title: 'Crocodile Watching Safari', desc: '2-hour boat safari through mangroves. Spot saltwater crocodiles, kingfishers, monkeys, and river wildlife.' },
      { time: '2:00 PM', title: 'Hotel Drop-off', desc: 'Return to your Mirissa hotel after an unforgettable wildlife day.' }
    ],
    included: [
      'Turtle snorkeling with mask, fins & in-water guide',
      'Crocodile river safari boat with guide',
      'Free Mirissa hotel pickup and drop-off',
      'Transfers between tour locations',
      'Bottled water and experienced guides'
    ],
    image: 'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_group-dive.png',
    waText: 'Hello! I would like to book the Turtle Snorkeling + Crocodile Watching combo.'
  }
];

const SITE_REVIEWS = [
  { author: 'Sarah Mitchell', country: 'United Kingdom', rating: 5, tourId: 'whale-dolphin', date: '2025-03-12', body: 'An absolutely magical whale watching experience! We saw blue whales and pods of dolphins. The crew was amazing and the breakfast on board was a lovely touch.' },
  { author: 'James Koh', country: 'Singapore', rating: 5, tourId: 'turtle-snorkeling', date: '2025-02-08', body: 'The turtle snorkeling tour was the highlight of our Sri Lanka trip. Our guide stayed with us the whole time and we saw 5 turtles! Totally worth it.' },
  { author: 'Anna Larsson', country: 'Sweden', rating: 5, tourId: 'river-kayak', date: '2025-01-19', body: 'Booked via WhatsApp and everything was arranged perfectly. Free pickup, friendly guide, incredible river kayaking through mangroves. Highly recommend!' }
];

const TOUR_RELATED = {
  'whale-dolphin': ['turtle-snorkeling', 'deep-sea-fishing', 'river-kayak'],
  'turtle-snorkeling': ['whale-dolphin', 'scuba-diving', 'night-snorkeling'],
  'crocodile-safari': ['river-kayak', 'cooking-class', 'turtle-snorkeling'],
  'river-kayak': ['crocodile-safari', 'cooking-class', 'turtle-snorkeling'],
  'scuba-diving': ['turtle-snorkeling', 'night-snorkeling', 'whale-dolphin'],
  'night-snorkeling': ['turtle-snorkeling', 'scuba-diving', 'whale-dolphin'],
  'deep-sea-fishing': ['whale-dolphin', 'river-kayak', 'crocodile-safari'],
  'cooking-class': ['river-kayak', 'crocodile-safari', 'turtle-snorkeling']
};

const TOUR_SEASONS = {
  'whale-dolphin': {
    name: 'Mirissa Whale Watching Season',
    description: 'Peak blue whale and sperm whale sightings from Mirissa Harbor, November through April.',
    monthStart: 11,
    dayStart: 1,
    monthEnd: 4,
    dayEnd: 30,
    locationName: 'Mirissa Harbor'
  }
};

const TOUR_FAQ = {
  'whale-dolphin': [
    { q: 'When is the best time for whale watching in Mirissa?', a: 'Peak season is November to April when blue whales and sperm whales are most frequently spotted. Early-morning departures (around 6:30 AM) offer the calmest seas.' },
    { q: 'What is included in the whale watching tour price?', a: 'Your $45/person fare includes free Mirissa hotel pickup, life jackets, seasick tablets, breakfast, tea, fruits, bottled water, boat insurance, and an experienced skipper with live commentary.' },
    { q: 'What if we don\'t see whales?', a: 'Mirissa has one of the highest sighting rates in the world. While wildlife can never be 100% guaranteed, our crew monitors whale movements to maximize your chances.' },
    { q: 'Is the tour suitable if I get seasick?', a: 'Yes. We provide free seasickness tablets before departure and recommend the early-morning slot for calmer waters. Sitting toward the back of the boat helps too.' }
  ],
  'turtle-snorkeling': [
    { q: 'Is turtle snorkeling suitable for beginners?', a: 'Absolutely. The tour is beginner-friendly with full in-water guidance, mask and fins provided, and calm shallow reef areas ideal for first-time snorkelers.' },
    { q: 'What does the 100% turtle sighting guarantee mean?', a: 'Our guides take you to reef zones where sea turtles are seen daily. If no turtle is spotted — which is extremely rare — contact us and we will arrange a complimentary return visit.' },
    { q: 'What time slots are available?', a: 'Turtle snorkeling runs from 7:00 AM to 1:30 PM with departures every 30 minutes. Morning slots often have the clearest water.' },
    { q: 'What should I bring?', a: 'Swimwear, towel, sunscreen, and a waterproof phone pouch if you want photos. We provide mask, fins, snacks, and bottled water.' }
  ],
  'crocodile-safari': [
    { q: 'Where does the crocodile safari take place?', a: 'The boat safari runs on the Nilwala River near Matara, about 30 minutes from Mirissa. Free pickup is included from Mirissa, Matara, Polhena, and Kamburugamuwa.' },
    { q: 'Are crocodile sightings guaranteed?', a: 'Our local boat operators know the river intimately and sightings are very common. You may also see kingfishers, monkeys, and water monitors along the mangrove banks.' },
    { q: 'Is the tour safe for children?', a: 'Yes. The boat ride is calm, life jackets are available, and the tour is suitable for all ages when accompanied by an adult.' },
    { q: 'How long is the boat experience?', a: 'Total on-boat time is 2 hours including a safety briefing, river cruise, and wildlife spotting with fresh fruit and water provided.' }
  ],
  'river-kayak': [
    { q: 'Do I need kayaking experience?', a: 'No prior experience is required. Your guide provides a safety briefing, life jacket, and paddling tips. The waterways are calm and beginner-friendly.' },
    { q: 'What wildlife might I see while kayaking?', a: 'Common sightings include water monitors, kingfishers, herons, monkeys, and tropical birds among the mangrove roots and riverbanks.' },
    { q: 'Is hotel pickup included?', a: 'Yes — free pickup and drop-off within the Mirissa area is included in the $25/person price.' },
    { q: 'What is the best time of day to kayak?', a: 'Morning and late afternoon slots are coolest and best for wildlife. Sunset paddles are available and popular for photography.' }
  ],
  'scuba-diving': [
    { q: 'Can non-certified divers join?', a: 'Yes. We offer discover scuba experiences for beginners with full instructor supervision. Certified divers can enjoy reef dives at appropriate depths.' },
    { q: 'What equipment is provided?', a: 'All scuba gear — BCD, regulator, wetsuit, mask, fins, and tanks — is included. Just bring swimwear and a towel.' },
    { q: 'How deep will we dive?', a: 'Beginner discover dives stay within 6–12 metres under direct instructor control. Certified divers can explore deeper reef sites based on certification level.' },
    { q: 'Is scuba diving safe in Mirissa?', a: 'All dives are led by PADI-affiliated instructors with safety briefings, equipment checks, and small group sizes for personal attention.' }
  ],
  'night-snorkeling': [
    { q: 'What makes night snorkeling different?', a: 'At night the reef comes alive with bioluminescence, sleeping turtles, octopus, and nocturnal fish. Your guide carries underwater lights for safe exploration.' },
    { q: 'Do I need prior snorkeling experience?', a: 'Basic swimming ability is recommended. If you have done daytime snorkeling before, night snorkeling is a natural next step with full in-water guidance.' },
    { q: 'What time does the night tour start?', a: 'Departures are after sunset, typically around 6:30–7:00 PM depending on season. Exact time is confirmed when you book.' },
    { q: 'What should I bring?', a: 'Swimwear, towel, and warm light layer for after the tour. All snorkeling equipment and underwater lights are provided.' }
  ],
  'deep-sea-fishing': [
    { q: 'What fish can we catch off Mirissa?', a: 'Indian Ocean waters yield sailfish, yellowfin tuna, mahi-mahi, wahoo, and barracuda depending on season. Your crew targets the best spots of the day.' },
    { q: 'Is equipment included?', a: 'Yes — rods, reels, bait, tackle, and life jackets are provided. The boat has shade and refreshments for a comfortable full-day charter.' },
    { q: 'Can we keep or cook our catch?', a: 'Catch-and-release or keep policies depend on species and local regulations. Ask your captain — many guests arrange a beach BBQ with their catch.' },
    { q: 'Is this a private charter?', a: 'The tour operates as a private group charter. Contact us on WhatsApp with your group size for the best rate.' }
  ],
  'cooking-class': [
    { q: 'What dishes will I learn to cook?', a: 'You will prepare authentic Sri Lankan staples such as dhal curry, coconut sambol, rice, and a seasonal vegetable or seafood dish using fresh local ingredients.' },
    { q: 'Is the class suitable for vegetarians?', a: 'Yes. Let us know dietary preferences when booking and we will adapt recipes — many traditional Sri Lankan dishes are naturally vegetarian.' },
    { q: 'How long is the cooking class?', a: 'The experience lasts approximately 3 hours including market visit or ingredient prep, hands-on cooking, and sitting down to enjoy the meal you prepared.' },
    { q: 'Is pickup included?', a: 'Free pickup and drop-off from Mirissa area hotels is included in the tour price.' }
  ]
};

const COMBO_RELATED = {
  'whale-turtle': ['whale-kayak', 'turtle-kayak', 'whale-crocodile'],
  'kayak-cooking': ['turtle-kayak', 'whale-kayak', 'turtle-crocodile'],
  'whale-kayak': ['whale-turtle', 'whale-crocodile', 'kayak-cooking'],
  'whale-crocodile': ['whale-turtle', 'whale-kayak', 'turtle-crocodile'],
  'turtle-kayak': ['whale-turtle', 'kayak-cooking', 'turtle-crocodile'],
  'turtle-crocodile': ['turtle-kayak', 'whale-turtle', 'whale-crocodile']
};

const COMBO_FAQ = {
  'whale-turtle': [
    { q: 'How long is the whale and turtle combo day?', a: 'The full-day package runs approximately 6 hours — morning whale cruise (3–4 hrs) plus afternoon turtle snorkeling (1.5 hrs), with a break in between.' },
    { q: 'Is hotel pickup included for both tours?', a: 'Yes. Free pickup and drop-off in the Mirissa area is included for the entire combo — one booking covers both experiences.' },
    { q: 'Can I book this combo during whale season only?', a: 'Whale watching is best November–April, but turtle snorkeling runs year-round. Contact us on WhatsApp and we can advise the best dates for your visit.' }
  ],
  'kayak-cooking': [
    { q: 'Do I need kayaking experience for this combo?', a: 'No. The river kayak tour is beginner-friendly with a guide and safety briefing. The cooking class is suitable for all skill levels.' },
    { q: 'What is included in the $50 combo price?', a: 'River kayak equipment, guide, cooking class ingredients, shared meal, and free Mirissa hotel pickup — save $5 vs booking separately.' },
    { q: 'How are the two activities scheduled?', a: 'Kayaking is typically in the morning, followed by the cooking class late morning or midday. Exact times are confirmed when you book.' }
  ],
  'whale-kayak': [
    { q: 'Is this combo physically demanding?', a: 'The whale cruise is relaxed onboard viewing. Kayaking is calm and beginner-friendly. A short break is included between the two activities.' },
    { q: 'What should I bring for both tours?', a: 'Sunscreen, hat, camera, and a change of clothes for kayaking. Life jackets are provided for both the boat and kayak portions.' },
    { q: 'How much do I save with this package?', a: 'The bundled price is $65/person — a $5 saving compared to booking whale watching ($45) and river kayak ($25) separately.' }
  ],
  'whale-crocodile': [
    { q: 'How far is the crocodile safari from Mirissa?', a: 'The Nilwala River safari near Matara is about 30 minutes from Mirissa. Transfers between the whale cruise and river safari are arranged for you.' },
    { q: 'Is this combo suitable for families?', a: 'Yes. Both the whale cruise and crocodile boat safari are suitable for all ages with adult supervision. Life jackets are available.' },
    { q: 'What wildlife might we see?', a: 'Morning: blue whales, dolphins, and sea turtles. Afternoon: saltwater crocodiles, kingfishers, monkeys, and river birds on the Nilwala River.' }
  ],
  'turtle-kayak': [
    { q: 'Can beginners do both activities?', a: 'Absolutely. Turtle snorkeling includes in-water guidance and a 100% turtle sighting guarantee. Kayaking uses calm, shallow waterways ideal for first-timers.' },
    { q: 'How long is the total experience?', a: 'About 3.5 hours combined — 1.5 hours turtle snorkeling plus 1.5 hours river kayaking, with transfers between locations.' },
    { q: 'Is equipment provided?', a: 'Yes. Snorkeling mask and fins, kayak, paddle, life jacket, and guides are all included in the combo price.' }
  ],
  'turtle-crocodile': [
    { q: 'What makes this combo unique?', a: 'It pairs ocean turtle snorkeling in Mirissa with a crocodile river safari on the Nilwala — two completely different ecosystems in one half-day package.' },
    { q: 'Is lunch included?', a: 'Light snacks and water are included on each tour. Let us know if you need a lunch stop — we can suggest options between activities.' },
    { q: 'How do I book the combo?', a: 'Message us on WhatsApp with your preferred date and group size, or use our online booking form. We confirm within 1 hour during office hours.' }
  ]
};

const FAQ_ITEMS = [
  {
    category: 'Booking',
    questions: [
      { q: 'How do I book a tour?', a: 'The fastest way is WhatsApp — message us with your preferred tour and date. You can also use our <a href="booking.html">online booking form</a> or call +94 78 709 7430.' },
      { q: 'How quickly will you confirm my booking?', a: 'We usually reply within 1 hour during office hours (6:00 AM – 8:00 PM). For early-morning whale tours, we recommend booking at least one day ahead.' },
      { q: 'Can I book a private tour?', a: 'Yes! Most tours are available as private experiences. Message us on WhatsApp with your group size and preferred date for a custom quote.' },
      { q: 'Do you offer hotel pickup?', a: 'Free pickup and drop-off is included for most tours in the Mirissa area. Let us know your hotel name when booking.' }
    ]
  },
  {
    category: 'Airport Transfers',
    questions: [
      { q: 'Do you offer airport shuttle for foreigners arriving in Sri Lanka?', a: 'Yes. We provide private airport transfers between Colombo Bandaranaike International Airport (CMB) and Mirissa — ideal for international travelers. <a href="airport-shuttle.html">View airport shuttle details</a> or message us on WhatsApp with your flight details.' },
      { q: 'How long is the drive from Colombo Airport to Mirissa?', a: 'The journey typically takes 3.5 to 4 hours depending on traffic and your exact hotel location. We use the southern expressway when possible for a comfortable ride.' },
      { q: 'Can I book an airport transfer together with my tours?', a: 'Absolutely. Many guests book their CMB → Mirissa arrival transfer, Mirissa tours, and return airport shuttle in one message. We will confirm everything via WhatsApp.' },
      { q: 'Will someone meet me at the airport?', a: 'Yes. Your driver meets you at the arrivals area with a name board, assists with luggage, and drives you directly to your Mirissa hotel in an air-conditioned private vehicle.' }
    ]
  },
  {
    category: 'Whale Watching',
    questions: [
      { q: 'When is the best time for whale watching in Mirissa?', a: 'Peak season is November to April when blue whales and sperm whales are most frequently spotted. Tours depart early morning (around 6:30 AM) for the best conditions.' },
      { q: 'What if we don\'t see any whales?', a: 'Mirissa has one of the highest sighting rates in the world. While wildlife can never be 100% guaranteed, our experienced crew maximizes your chances by monitoring whale movements.' },
      { q: 'What should I bring on a whale tour?', a: 'Sunscreen, hat, sunglasses, light jacket, camera, and motion sickness tablets if needed (we also provide free seasick tablets onboard).' }
    ]
  },
  {
    category: 'Safety & Comfort',
    questions: [
      { q: 'Are your boats safe and insured?', a: 'Yes. All boats carry life jackets, first-aid supplies, and insurance. Our skippers have 5+ years of experience in Mirissa waters.' },
      { q: 'I get seasick easily — can I still join?', a: 'We provide free seasickness tablets before departure. Early-morning departures also mean calmer seas. Sit at the back of the boat for the smoothest ride.' },
      { q: 'Is snorkeling suitable for beginners?', a: 'Absolutely. Our turtle snorkeling tour is beginner-friendly with full in-water guidance. We provide all equipment and a 100% turtle sighting guarantee.' }
    ]
  },
  {
    category: 'Payment & Cancellation',
    questions: [
      { q: 'What payment methods do you accept?', a: 'We accept cash (USD/LKR), bank transfer, and online payment. A small deposit may be requested for group bookings.' },
      { q: 'What is your cancellation policy?', a: 'Cancel at least 24 hours before your tour for a full refund. Weather-related cancellations by us are fully refunded or rescheduled at no extra cost.' },
      { q: 'Are there hidden fees?', a: 'No hidden costs. Tour prices include pickup, equipment, guides, and listed inclusions. Personal expenses and tips are extra.' }
    ]
  }
];

const IS_IN_TOURS_DIR = window.location.pathname.includes('/tours/');
const IS_IN_BLOG_DIR = window.location.pathname.includes('/blog/');
const IS_IN_COMBOS_DIR = window.location.pathname.includes('/combos/');
const IS_IN_SUBDIR = IS_IN_TOURS_DIR || IS_IN_BLOG_DIR || IS_IN_COMBOS_DIR;
const ROOT_PATH = IS_IN_SUBDIR ? '../' : '';
const TOURS_PATH = IS_IN_TOURS_DIR ? '' : `${ROOT_PATH}tours/`;
const BLOG_PATH = IS_IN_BLOG_DIR ? '' : `${ROOT_PATH}blog/`;
const COMBOS_PATH = IS_IN_COMBOS_DIR ? '' : `${ROOT_PATH}combos/`;
const IMG_PATH = IS_IN_SUBDIR ? '../' : '';

const BLOG_CATEGORIES = [
  { id: 'all', label: 'All Articles' },
  { id: 'whale-watching', label: 'Whale Watching' },
  { id: 'snorkeling', label: 'Snorkeling' },
  { id: 'travel-tips', label: 'Travel Tips' },
  { id: 'wildlife', label: 'Wildlife' },
  { id: 'culture', label: 'Culture' }
];

const BLOG_POSTS = [
  {
    id: 'best-time-whale-watching-mirissa',
    title: 'Best Time for Whale Watching in Mirissa',
    excerpt: 'When to visit, seasonal sightings, morning departures, and how to maximise your chances of seeing blue whales and dolphins off Mirissa.',
    category: 'whale-watching',
    categoryLabel: 'Whale Watching',
    date: '2026-05-12',
    readTime: '6 min read',
    image: WHALE_BLUE_IMG,
    featured: true,
    tourLink: 'tours/whale-dolphin.html',
    tourLabel: 'Whale Watching Tour'
  },
  {
    id: 'turtle-snorkeling-guide-mirissa',
    title: 'Mirissa Turtle Snorkeling: A Complete Guide',
    excerpt: 'Everything you need to know about swimming with sea turtles — sighting guarantee, beginner tips, and what to bring.',
    category: 'snorkeling',
    categoryLabel: 'Snorkeling',
    date: '2026-05-08',
    readTime: '5 min read',
    image: 'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_swim-with-turtle.png',
    tourLink: 'tours/turtle-snorkeling.html',
    tourLabel: 'Turtle Snorkeling'
  },
  {
    id: 'things-to-do-mirissa-sri-lanka',
    title: '10 Best Things to Do in Mirissa, Sri Lanka',
    excerpt: 'From blue whale cruises to river kayaking and cooking classes — the top Mirissa experiences for every type of traveller.',
    category: 'travel-tips',
    categoryLabel: 'Travel Tips',
    date: '2026-05-05',
    readTime: '8 min read',
    image: 'assets/images/river-kayak/mirissa_kayak_sunset-kayak.png',
    tourLink: 'tours.html',
    tourLabel: 'All Tours'
  },
  {
    id: 'mirissa-south-coast-travel-guide',
    title: 'Mirissa South Coast Travel Guide',
    excerpt: 'How to get to Mirissa, where to stay, local food, and the best season for ocean adventures on Sri Lanka\'s southern coast.',
    category: 'travel-tips',
    categoryLabel: 'Travel Tips',
    date: '2026-04-28',
    readTime: '7 min read',
    image: 'assets/images/whale-dolphin/mirissa_whale_watching_tour-boat.png',
    tourLink: 'about.html',
    tourLabel: 'About Us'
  },
  {
    id: 'what-to-pack-mirissa-ocean-tours',
    title: 'What to Pack for Mirissa Ocean Tours',
    excerpt: 'A practical packing checklist for whale watching, snorkeling, diving, and fishing — so you stay comfortable on the water.',
    category: 'travel-tips',
    categoryLabel: 'Travel Tips',
    date: '2026-04-20',
    readTime: '4 min read',
    image: 'assets/images/whale-dolphin/mirissa_whale_watching_boat-guests-1.png',
    tourLink: 'faq.html',
    tourLabel: 'FAQ'
  },
  {
    id: 'ethical-whale-watching-sri-lanka',
    title: 'Ethical Whale Watching in Sri Lanka',
    excerpt: 'How responsible operators protect marine life, maintain safe distances, and deliver unforgettable encounters without harm.',
    category: 'wildlife',
    categoryLabel: 'Wildlife',
    date: '2026-04-15',
    readTime: '5 min read',
    image: 'assets/images/whale-dolphin/mirissa_whale_watching_dolphins-surface.png',
    tourLink: 'tours/whale-dolphin.html',
    tourLabel: 'Book a Whale Tour'
  }
];
function resolveImg(src) { return src.startsWith('http') ? src : IMG_PATH + src; }

function resolveVideo(src) { return src.startsWith('http') ? src : IMG_PATH + src; }

function getVideoText(video, field) {
  const key = video[`${field}Key`];
  if (key) {
    const text = t(key);
    if (text !== key) return text;
  }
  return video[field] || '';
}

function renderVideoCard(video, index = 0) {
  const title = getVideoText(video, 'title');
  const caption = getVideoText(video, 'caption');
  const posterAttr = video.poster ? ` poster="${resolveImg(video.poster)}"` : '';
  const videoSrc = resolveVideo(video.src);
  return `
    <article class="video-card fade-in" style="transition-delay:${index * 0.08}s" data-video-src="${videoSrc}" data-video-title="${title.replace(/"/g, '&quot;')}">
      <div class="video-player-wrap">
        <video
          class="video-player"
          playsinline
          controls
          preload="metadata"${posterAttr}
          aria-label="${title}"
        >
          <source src="${videoSrc}" type="video/mp4">
        </video>
        <button type="button" class="video-play-btn" aria-label="${t('common.playVideo')}: ${title}">
          <span class="video-play-icon" aria-hidden="true"></span>
        </button>
      </div>
      <div class="video-card-body">
        ${title ? `<h3 class="video-card-title">${title}</h3>` : ''}
        ${caption ? `<p class="video-card-caption">${caption}</p>` : ''}
      </div>
    </article>
  `;
}

function renderVideosShowcase(videos, { label, title, desc, ctaHref, ctaText, compact = false } = {}) {
  if (!videos?.length) return '';
  const cards = videos.map((video, i) => renderVideoCard(video, i)).join('');
  const cta = ctaHref && ctaText
    ? `<p class="video-showcase-cta fade-in"><a href="${ctaHref}" class="btn btn-primary">${ctaText}</a></p>`
    : '';
  return `
    <div class="video-showcase${compact ? ' video-showcase-compact' : ''}">
      ${label || title || desc ? `
      <div class="section-header fade-in">
        ${label ? `<span class="section-label">${label}</span>` : ''}
        ${title ? `<h2 class="section-title">${title}</h2>` : ''}
        ${desc ? `<p class="section-desc">${desc}</p>` : ''}
      </div>` : ''}
      <div class="video-grid">${cards}</div>
      ${cta}
    </div>
  `;
}

function isMobileVideoLayout() {
  return window.matchMedia('(max-width: 768px)').matches;
}

function ensureVideoLightbox() {
  let lightbox = document.querySelector('.video-lightbox');
  if (lightbox) return lightbox;

  lightbox = document.createElement('div');
  lightbox.className = 'video-lightbox';
  lightbox.innerHTML = `
    <button type="button" class="video-lightbox-close" aria-label="Close">&times;</button>
    <div class="video-lightbox-stage">
      <video class="video-lightbox-player" playsinline controls preload="auto"></video>
      <p class="video-lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeVideoLightbox();
  });
  lightbox.querySelector('.video-lightbox-close').addEventListener('click', closeVideoLightbox);

  if (!window.__videoLightboxKeyBound) {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeVideoLightbox();
    });
    window.__videoLightboxKeyBound = true;
  }

  return lightbox;
}

function openVideoLightbox(src, title, caption) {
  const lightbox = ensureVideoLightbox();
  const player = lightbox.querySelector('.video-lightbox-player');
  const captionEl = lightbox.querySelector('.video-lightbox-caption');

  document.querySelectorAll('.video-card video').forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  player.src = src;
  player.load();
  if (captionEl) {
    captionEl.textContent = [title, caption].filter(Boolean).join(' — ');
    captionEl.hidden = !captionEl.textContent;
  }

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  player.play().catch(() => {});
}

function closeVideoLightbox() {
  const lightbox = document.querySelector('.video-lightbox');
  if (!lightbox?.classList.contains('active')) return;

  const player = lightbox.querySelector('.video-lightbox-player');
  player.pause();
  player.removeAttribute('src');
  player.load();
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function openVideoCardLightbox(card) {
  const video = card.querySelector('video');
  const src = card.dataset.videoSrc || video?.querySelector('source')?.src || video?.src;
  if (!src) return;
  const title = card.dataset.videoTitle || video?.getAttribute('aria-label') || '';
  const caption = card.querySelector('.video-card-caption')?.textContent?.trim() || '';
  openVideoLightbox(src, title, caption);
}

function initVideoPlayers(root = document) {
  const mobile = isMobileVideoLayout();

  root.querySelectorAll('.video-card').forEach(card => {
    const video = card.querySelector('video');
    const playBtn = card.querySelector('.video-play-btn');
    if (!video || !playBtn) return;

    if (mobile) {
      video.removeAttribute('controls');
    } else {
      video.setAttribute('controls', '');
    }

    const showPlay = () => {
      playBtn.hidden = false;
      card.classList.remove('is-playing');
    };
    const hidePlay = () => {
      playBtn.hidden = true;
      card.classList.add('is-playing');
    };

    const onPreviewActivate = e => {
      e.preventDefault();
      e.stopPropagation();
      if (mobile) {
        openVideoCardLightbox(card);
        return;
      }
      document.querySelectorAll('.video-card video').forEach(v => {
        if (v !== video && !v.paused) v.pause();
      });
      if (video.readyState < 2) video.load();
      video.play().catch(() => showPlay());
      hidePlay();
    };

    playBtn.replaceWith(playBtn.cloneNode(true));
    const freshPlayBtn = card.querySelector('.video-play-btn');
    freshPlayBtn.addEventListener('click', onPreviewActivate);

    if (mobile) {
      card.querySelector('.video-player-wrap')?.addEventListener('click', onPreviewActivate);
      card.classList.add('video-card-mobile');
      showPlay();
      return;
    }

    video.addEventListener('play', hidePlay);
    video.addEventListener('pause', () => {
      if (video.ended || video.currentTime === 0) showPlay();
    });
    video.addEventListener('ended', showPlay);
  });
}

function initHomeVideos() {
  const el = document.getElementById('home-videos');
  if (!el) return;
  el.innerHTML = renderVideosShowcase(WHALE_VIDEOS, {
    label: t('home.videoLabel'),
    title: t('home.videoTitle'),
    desc: t('home.videoDesc'),
    ctaHref: `${TOURS_PATH}whale-dolphin.html`,
    ctaText: t('home.videoCta')
  });
  initVideoPlayers(el);
  initScrollAnimations();
  injectWhaleVideosSchema(getCanonicalUrl('/'), WHALE_VIDEOS, { name: 'Mirissa Whale Watching', shortDesc: t('home.videoDesc') });
}

function initGalleryVideos() {
  const el = document.getElementById('gallery-videos');
  if (!el) return;
  el.innerHTML = renderVideosShowcase(WHALE_VIDEOS, {
    label: t('gallery.videoLabel'),
    title: t('gallery.videoTitle'),
    desc: t('gallery.videoDesc'),
    ctaHref: `${TOURS_PATH}whale-dolphin.html`,
    ctaText: t('home.videoCta')
  });
  initVideoPlayers(el);
  initScrollAnimations();
  injectWhaleVideosSchema(getCanonicalUrl('/gallery.html'), WHALE_VIDEOS, { name: 'Mirissa Whale Watching Gallery', shortDesc: t('gallery.videoDesc') });
}

function renderTourVideosSection(tour) {
  if (!tour.videos?.length) return '';
  return `
    <section class="tour-videos-section" aria-labelledby="tour-videos-heading">
      <h2 id="tour-videos-heading">${t('tourUi.videoGallery')}</h2>
      <p class="tour-videos-intro">${t('tourUi.videoGalleryIntro')}</p>
      <div class="video-grid video-grid-tour">
        ${tour.videos.map((video, i) => renderVideoCard(video, i)).join('')}
      </div>
    </section>
  `;
}

function injectTourVideoSchema(tour) {
  if (!tour.videos?.length) return;
  const pageUrl = getCanonicalUrl(`/tours/${tour.id}.html`);
  injectWhaleVideosSchema(pageUrl, tour.videos, tour);
}

function injectWhaleVideosSchema(pageUrl, videos = WHALE_VIDEOS, context = {}) {
  if (!videos?.length) return;
  videos.forEach(video => {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: getVideoText(video, 'title') || context.name || 'Mirissa whale watching tour video',
      description: getVideoText(video, 'caption') || context.shortDesc || 'Whale watching cruise footage from Mirissa, Sri Lanka',
      thumbnailUrl: `${SITE_URL}/${(video.poster || context.heroImage || context.image || WHALE_BLUE_IMG).replace(/^\//, '')}`,
      contentUrl: `${SITE_URL}/${video.src.replace(/^\//, '')}`,
      uploadDate: '2026-06-01',
      embedUrl: pageUrl,
      publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/logo.png` } }
    });
  });
}

function buildComboReviewSchemas(combo) {
  const tourIds = combo.tourIds || [];
  return SITE_REVIEWS.filter(r => tourIds.includes(r.tourId)).map(r => ({
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
    author: { '@type': 'Person', name: r.author },
    reviewBody: r.body,
    datePublished: r.date
  }));
}

function renderComboFaqSection(comboId) {
  const items = COMBO_FAQ[comboId];
  if (!items?.length) return '';
  return `
    <section class="tour-faq-section" aria-labelledby="combo-faq-heading">
      <h2 id="combo-faq-heading">${t('comboUi.faqTitle')}</h2>
      <p class="tour-faq-intro">${t('comboUi.faqIntro')}</p>
      <div class="tour-faq-list">
        ${items.map((item, i) => `
          <details class="faq-item tour-faq-item" ${i === 0 ? 'open' : ''}>
            <summary>${item.q}</summary>
            <div class="faq-answer"><p>${item.a}</p></div>
          </details>
        `).join('')}
      </div>
      <p class="tour-faq-more"><a href="${ROOT_PATH}faq.html">${t('tourUi.moreFaq')}</a></p>
    </section>
  `;
}

function createComboCard(combo, index) {
  const localized = getLocalizedCombo(combo.id);
  const savings = combo.originalPrice - combo.price;
  return `
    <article class="combo-card fade-in" style="transition-delay:${index * 0.08}s">
      <div class="combo-card-image">
        <a href="${COMBOS_PATH}${combo.id}.html"><img src="${resolveImg(localized.image)}" alt="${localized.name} package" loading="lazy"></a>
        <span class="combo-badge">${localized.badge}</span>
      </div>
      <div class="combo-card-body">
        <h3><a href="${COMBOS_PATH}${combo.id}.html">${localized.name}</a></h3>
        <p class="combo-desc">${localized.desc}</p>
        <div class="combo-pricing">
          <span class="combo-price">$${localized.price}</span>
          <span class="combo-save">${t('common.save')} $${savings}</span>
        </div>
        <a href="${COMBOS_PATH}${combo.id}.html" class="btn btn-ocean btn-sm">${t('comboUi.viewPackage')}</a>
      </div>
    </article>
  `;
}

function renderRelatedCombosSection(comboId) {
  const relatedIds = COMBO_RELATED[comboId] || COMBO_PACKAGES.map(c => c.id).filter(id => id !== comboId).slice(0, 3);
  const cards = relatedIds
    .map(id => COMBO_PACKAGES.find(c => c.id === id))
    .filter(Boolean)
    .map((combo, i) => createComboCard(combo, i))
    .join('');
  if (!cards) return '';
  return `
    <section class="tour-related-section" aria-labelledby="combo-related-heading">
      <div class="tour-related-header">
        <span class="section-label">${t('comboUi.relatedLabel')}</span>
        <h2 id="combo-related-heading">${t('comboUi.relatedTitle')}</h2>
        <p class="section-desc">${t('comboUi.relatedDesc')}</p>
      </div>
      <div class="combo-grid tour-related-grid">${cards}</div>
    </section>
  `;
}

function renderWhaleVideosSection() {
  if (!WHALE_VIDEOS?.length) return '';
  return `
    <section class="tour-videos-section" aria-labelledby="combo-videos-heading">
      <h2 id="combo-videos-heading">${t('tourUi.videoGallery')}</h2>
      <p class="tour-videos-intro">${t('tourUi.videoGalleryIntro')}</p>
      <div class="video-grid video-grid-tour">
        ${WHALE_VIDEOS.map((video, i) => renderVideoCard(video, i)).join('')}
      </div>
    </section>
  `;
}

function t(key, vars) {
  return window.I18n?.t(key, vars) ?? key;
}

function getLocalizedTour(tourId) {
  const tour = TOURS[tourId];
  if (!tour) return null;
  return window.I18n?.getTour(tourId, tour) ?? tour;
}

function getLocalizedBlogPost(post) {
  if (!post) return post;
  return window.I18n?.getBlogPost(post.id, post) ?? post;
}

function getBlogCategoryLabel(categoryId) {
  const key = `blog.categories.${categoryId}`;
  const label = t(key);
  return label !== key ? label : categoryId;
}

function restoreMobileNavIcons() {
  document.querySelectorAll('.mobile-nav a.nav-link:not(.nav-sub):not(.nav-extra-link)').forEach(link => {
    const icon = link.querySelector('.mobile-nav-icon');
    if (!icon) return;
    const expected = getMobileNavIcon(link);
    if (icon.textContent.trim() !== expected) icon.textContent = expected;
  });
}

function refreshPageContent() {
  restoreMobileNavIcons();
  window.I18n?.applyTranslations();
  if (document.querySelector('.tours-grid[data-render="all"]')) renderAllTours();
  if (document.querySelector('.tours-grid[data-render="featured"]')) renderFeaturedTours();
  if (document.querySelector('[data-render="combos"]')) renderComboPackages();
  upgradeComboDropdownLinks();
  refreshComboDropdownLabels();
  refreshMobileNavToursCombos();
  if (document.getElementById('faq-accordion')) initFAQPage();
  if (document.getElementById('blog-grid')) {
    initBlogPage();
    const blogTitle = t('blog.pageTitle');
    const blogDesc = t('blog.pageDescription');
    if (blogTitle !== 'blog.pageTitle') {
      applyPageMeta({
        ...PAGE_SEO['blog.html'],
        title: blogTitle,
        description: blogDesc
      }, '/blog.html');
    }
  }
  if (document.body.dataset.blogPost) {
    initBlogArticlePage();
    initBlogPostSeo(document.body.dataset.blogPost);
  }
  if (document.getElementById('blog-related')) initBlogPost();
  if (document.getElementById('home-videos')) initHomeVideos();
  if (document.getElementById('gallery-videos')) initGalleryVideos();
  if (document.getElementById('tour-detail-content')) initTourDetails();
  if (document.getElementById('combo-detail-content')) initComboDetails();
  initBusinessReviewLinks();
  if (document.getElementById('booking-form')) refreshBookingFormTours();
  if (document.getElementById('airport-shuttle-faq')) {
    const faqHost = document.getElementById('airport-shuttle-faq');
    faqHost.innerHTML = renderAirportShuttleFaqSection();
  }
  if (document.querySelector('[data-shuttle-wa], [data-shuttle-price], .booking-shuttle-banner')) refreshAirportShuttleUi();
  const carousel = document.querySelector('.hero-carousel');
  if (carousel?._heroRefresh) carousel._heroRefresh();
}

function getTourIdFromHref(href) {
  if (!href) return null;
  const file = href.split('/').pop();
  return file?.replace('.html', '') || null;
}

function getTourLocationShort(tourId) {
  const tour = tourId ? TOURS[tourId] : null;
  if (!tour?.location) return SITE_LOCATION_SHORT;
  if (tour.location.includes('Matara')) return 'Matara';
  return SITE_LOCATION_SHORT;
}

const LOCATION_PIN_ICON = '<svg class="location-pin-icon" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>';

function injectMirissaBranding() {
  document.querySelectorAll('.logo').forEach(logo => {
    if (logo.querySelector('.logo-text-wrap')) return;

    const img = logo.querySelector('.logo-img');
    [...logo.childNodes].forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) node.remove();
    });

    const wrap = document.createElement('span');
    wrap.className = 'logo-text-wrap';
    wrap.innerHTML = `<span class="logo-name">${SITE_NAME}</span><span class="logo-location">${LOCATION_PIN_ICON}${SITE_LOCATION}</span>`;
    logo.appendChild(wrap);

    if (img && img.nextSibling !== wrap) {
      logo.insertBefore(img, wrap);
    }
  });

  document.querySelectorAll('.nav-link-caret').forEach(link => {
    if (link.querySelector('.nav-tours-wrap')) return;

    const existingLoc = link.querySelector('.nav-tours-loc');
    const locationLabel = existingLoc?.textContent.trim() || SITE_LOCATION_SHORT;

    link.setAttribute('title', `Tours in ${SITE_LOCATION}`);
    link.setAttribute('aria-label', `Tours in ${SITE_LOCATION}`);
    link.innerHTML = `
      <span class="nav-tours-wrap">
        <span class="nav-tours-label">Tours</span>
        <span class="nav-tours-loc">${locationLabel}</span>
      </span>
    `;
  });

  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    if (menu.querySelector('.dropdown-location-header')) return;

    const header = document.createElement('div');
    header.className = 'dropdown-location-header';
    header.innerHTML = `${LOCATION_PIN_ICON}<span>All tours in ${SITE_LOCATION}</span>`;
    menu.insertBefore(header, menu.firstChild);

    menu.querySelectorAll('a:not(.dropdown-all):not(.dropdown-combo-link)').forEach(link => {
      if (link.querySelector('.dropdown-tour-loc')) return;
      const tourId = getTourIdFromHref(link.getAttribute('href'));
      if (!tourId) return;
      const tourName = link.textContent.trim();
      const loc = getTourLocationShort(tourId);

      link.textContent = '';
      const nameSpan = document.createElement('span');
      nameSpan.className = 'dropdown-tour-name';
      nameSpan.textContent = tourName;
      const locSpan = document.createElement('span');
      locSpan.className = 'dropdown-tour-loc';
      locSpan.textContent = loc;
      link.append(nameSpan, locSpan);
    });
  });

  enhanceToursDropdown();
  upgradeComboDropdownLinks();

  document.querySelectorAll('.mobile-nav-label').forEach(label => {
    if (label.textContent.trim() === 'Popular Tours') {
      label.textContent = `Popular Tours in ${SITE_LOCATION_SHORT}`;
    }
  });
}

function getComboDropdownLabel(combo) {
  const localized = getLocalizedCombo(combo.id);
  return localized.tours.join(' + ');
}

function enhanceToursDropdown() {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    if (menu.querySelector('.dropdown-mega-grid')) return;

    menu.querySelectorAll('.dropdown-section-label, .dropdown-combo-link, .dropdown-all-combos').forEach(el => el.remove());

    const header = menu.querySelector('.dropdown-location-header');
    const tourLinks = [...menu.querySelectorAll('a[href*="tours/"]')];
    const viewAllTours = menu.querySelector('.dropdown-all:not(.dropdown-all-combos)');
    if (!tourLinks.length) return;

    const grid = document.createElement('div');
    grid.className = 'dropdown-mega-grid';

    const toursCol = document.createElement('div');
    toursCol.className = 'dropdown-mega-col dropdown-mega-col-tours';

    const individualLabel = document.createElement('div');
    individualLabel.className = 'dropdown-section-label';
    individualLabel.setAttribute('data-i18n', 'nav.individualTours');
    individualLabel.textContent = t('nav.individualTours');
    toursCol.append(individualLabel, ...tourLinks);
    if (viewAllTours) toursCol.appendChild(viewAllTours);

    const combosCol = document.createElement('div');
    combosCol.className = 'dropdown-mega-col dropdown-mega-col-combos';

    const comboLabel = document.createElement('div');
    comboLabel.className = 'dropdown-section-label dropdown-section-label-combos';
    comboLabel.setAttribute('data-i18n', 'nav.comboTours');
    comboLabel.textContent = t('nav.comboTours');
    combosCol.appendChild(comboLabel);

    COMBO_PACKAGES.forEach(combo => {
      const localized = getLocalizedCombo(combo.id);
      const savings = combo.originalPrice - combo.price;
      const link = document.createElement('a');
      link.href = `${COMBOS_PATH}${combo.id}.html`;
      link.className = 'dropdown-combo-link';
      link.dataset.comboId = combo.id;
      link.innerHTML = `
        <span class="dropdown-combo-content">
          <span class="dropdown-tour-name">${getComboDropdownLabel(combo)}</span>
          <span class="dropdown-combo-save">${t('common.save')} $${savings}</span>
        </span>
        <span class="dropdown-combo-price">$${localized.price}</span>
      `;
      combosCol.appendChild(link);
    });

    const viewAllCombos = document.createElement('a');
    viewAllCombos.href = `${ROOT_PATH}combos.html`;
    viewAllCombos.className = 'dropdown-all dropdown-all-combos';
    viewAllCombos.setAttribute('data-i18n', 'nav.viewAllCombos');
    viewAllCombos.innerHTML = `${t('nav.viewAllCombos')} <span class="link-arrow" aria-hidden="true">&rarr;</span>`;
    combosCol.appendChild(viewAllCombos);

    grid.append(toursCol, combosCol);

    if (header) header.after(grid);
    else menu.appendChild(grid);

    menu.classList.add('dropdown-menu-mega');
    menu.dataset.comboEnhanced = 'true';
  });
}

function upgradeComboDropdownLinks() {
  document.querySelectorAll('.dropdown-combo-link').forEach(link => {
    if (link.querySelector('.dropdown-combo-save')) return;
    const comboId = link.dataset.comboId || link.getAttribute('href')?.split('/').pop()?.replace('.html', '');
    const combo = COMBO_PACKAGES.find(c => c.id === comboId);
    if (!combo) return;
    const localized = getLocalizedCombo(combo.id);
    const nameEl = link.querySelector('.dropdown-tour-name');
    const name = nameEl?.textContent.trim() || getComboDropdownLabel(combo);
    const savings = combo.originalPrice - combo.price;
    link.innerHTML = `
      <span class="dropdown-combo-content">
        <span class="dropdown-tour-name">${name}</span>
        <span class="dropdown-combo-save">${t('common.save')} $${savings}</span>
      </span>
      <span class="dropdown-combo-price">$${localized.price}</span>
    `;
  });
}

function refreshComboDropdownLabels() {
  document.querySelectorAll('.dropdown-combo-link').forEach(link => {
    const comboId = link.dataset.comboId || link.getAttribute('href')?.split('/').pop()?.replace('.html', '');
    const combo = COMBO_PACKAGES.find(c => c.id === comboId);
    if (!combo) return;
    const localized = getLocalizedCombo(combo.id);
    const nameEl = link.querySelector('.dropdown-tour-name');
    const priceEl = link.querySelector('.dropdown-combo-price');
    if (nameEl) nameEl.textContent = getComboDropdownLabel(combo);
    if (priceEl) priceEl.textContent = `$${localized.price}`;
    const saveEl = link.querySelector('.dropdown-combo-save');
    if (saveEl) saveEl.textContent = `${t('common.save')} $${combo.originalPrice - combo.price}`;
  });

  document.querySelectorAll('.dropdown-section-label[data-i18n]').forEach(label => {
    const key = label.getAttribute('data-i18n');
    const text = t(key);
    if (text !== key) label.textContent = text;
  });

  document.querySelectorAll('.dropdown-all-combos').forEach(link => {
    const arrow = link.querySelector('.link-arrow');
    link.textContent = '';
    link.append(document.createTextNode(`${t('nav.viewAllCombos')} `));
    if (arrow) link.appendChild(arrow);
    else link.insertAdjacentHTML('beforeend', '<span class="link-arrow" aria-hidden="true">&rarr;</span>');
  });

  refreshMobileNavToursCombos();
}

const TOURS = {
  'whale-dolphin': {
    id: 'whale-dolphin',
    name: 'Whale & Dolphin Watching',
    altPrefix: 'Mirissa Whale watching Tours',
    location: 'Mirissa, Sri Lanka',
    shortDesc: 'Spot blue whales, sperm whales, turtles and dolphins on a 3–4 hour early-morning cruise from Mirissa Harbor.',
    price: 45,
    duration: '3–4 Hours',
    image: WHALE_BLUE_IMG,
    heroImage: WHALE_BLUE_IMG,
    gallery: [
      WHALE_BLUE_IMG,
      WHALE_BLUE_IMG_02,
      'assets/images/whale-dolphin/mirissa_whale_watching_whale-breach.png',
      'assets/images/whale-dolphin/mirissa_whale_watching_dolphins-surface.png',
      'assets/images/whale-dolphin/mirissa_whale_watching_dolphins-aerial.png',
      'assets/images/whale-dolphin/mirissa_whale_watching_tour-boat.png',
      'assets/images/whale-dolphin/mirissa_whale_watching_boat-guests-1.png',
      'assets/images/whale-dolphin/mirissa_whale_watching_boat-guests-2.png',
      'assets/images/whale-dolphin/mirissa_whale_watching_seabird.png',
      'assets/images/whale-dolphin/mirissa_whale_watching_turtles.png',
      'assets/images/whale-dolphin/mirissa_whale_watching_collage.png'
    ],
    galleryAlt: [
      'Mirissa whale watching tour — blue whale surfacing near the boat in Sri Lanka',
      'Mirissa whale watching tour — close blue whale encounter on an Indian Ocean cruise',
      'Mirissa whale watching — blue whale breaching in the Indian Ocean',
      'Mirissa whale watching — dolphins swimming alongside the tour boat',
      'Mirissa whale watching — aerial view of dolphins near Mirissa coast',
      'Mirissa whale watching — tour boat departing Mirissa Harbor at sunrise',
      'Mirissa whale watching — guests on deck watching marine life',
      'Mirissa whale watching — travelers enjoying the ocean safari cruise',
      'Mirissa whale watching — seabird flying over the Indian Ocean',
      'Mirissa whale watching — sea turtles spotted during the cruise',
      'Mirissa whale watching — collage of whale and dolphin sightings Mirissa Sri Lanka'
    ],
    highlights: [
      'Enjoy a 3\u20134 hour cruise to spot blue whales, sperm whales, turtles and dolphins',
      'Early-morning departure for calmer seas and better sightings',
      'Sea sickness tablets, life jackets, and boat insurance included for safety',
      'Live commentary and guidance throughout the tour',
      'Relax with hotel pickup in the Mirissa area'
    ],
    fullDesc: 'Set off on an unforgettable early-morning whale-watching adventure from Mirissa Harbor, one of the world\u2019s best locations to see blue whales in the wild. Enjoy a 3\u20134 hour ocean cruise into the deep waters of the Indian Ocean with an experienced and friendly local crew, on a responsible and well-organized sea safari designed for comfort, safety, and high chances of sightings.\n\nMirissa is renowned for frequent encounters with blue whales\u2014the largest animals on Earth\u2014as well as sperm whales, fin whales, playful dolphins, turtles, and other marine life. The early-morning departure offers calmer seas, cooler temperatures, and optimal viewing conditions, giving you the best opportunity to observe whales as they surface naturally around the boat.\n\nYour tour is led by a professional skipper and knowledgeable guide with over 5 years of whale-watching experience. They continuously monitor whale movements and sea conditions while sharing local insights, marine knowledge, and clear guidance throughout the cruise. The tour follows ethical whale-watching practices, maintaining safe distances to protect marine life while still offering excellent viewing and photo opportunities.\n\nTo ensure a comfortable journey, life jackets are provided, along with free seasickness tablets and basic medical supplies onboard. You\u2019ll also enjoy complimentary breakfast, tea, fresh fruits, and bottled water during the cruise. All entry tickets are included, with no hidden costs.\n\nFrom start to finish, you\u2019ll be supported by a friendly, attentive team dedicated to making your experience smooth, safe, and memorable. Whether it\u2019s your first whale-watching trip or a lifelong dream to see a blue whale up close, this Mirissa whale-watching cruise promises a once-in-a-lifetime experience on Sri Lanka\u2019s stunning southern coast.',
    itinerary: [
      { time: '06:00 AM', title: 'Hotel Pickup', desc: 'Free pickup from your hotel in the Mirissa area to the harbor.' },
      { time: '06:30 AM', title: 'Safety Briefing', desc: 'Meet your skipper, receive life jackets, seasick tablets, and safety equipment.' },
      { time: '07:00 AM', title: 'Boat Departure', desc: 'Cruise into the deep Indian Ocean with live marine commentary.' },
      { time: '07:30–10:00 AM', title: 'Whale & Dolphin Watching', desc: 'Spot blue whales, sperm whales, dolphins, turtles and other marine life.' },
      { time: '10:00 AM', title: 'Refreshments', desc: 'Enjoy sandwiches, cake, fresh fruits, tea/coffee and bottled water.' },
      { time: '10:30 AM', title: 'Return to Harbor', desc: 'Cruise back to Mirissa Harbor and transfer to your hotel.' }
    ],
    included: ['Free hotel pickup from Mirissa area', 'Experienced skipper and guide', 'Live guidance and marine commentary', 'Safety briefing before departure', 'Life jackets and safety equipment', 'Bottled water', 'Sandwiches, cake, fresh fruits, tea/coffee', 'Whale & Dolphin Watching Cruise', 'Seasick tablets & medicines', 'Boat insurance'],
    excluded: ['Personal expenses', 'Tips for crew', 'Underwater camera rental'],
    getYourGuide: {
      url: 'https://www.getyourguide.com/mirissa-l97533/mirissa-whale-watching-tours-with-blue-whales-dolphins-t1177026/',
      badge: GETYOURGUIDE_PRODUCT_BADGE,
      title: 'Mirissa: Whale Watching Cruise With Blue Whales & Dolphins'
    },
    videos: WHALE_VIDEOS
  },
  'turtle-snorkeling': {
    id: 'turtle-snorkeling',
    name: 'Turtle Snorkeling',
    altPrefix: 'Mirissa Turtle Snorkeling Tours',
    location: 'Mirissa, Sri Lanka',
    groupType: 'Private Group',
    shortDesc: 'Swim alongside sea turtles with a 100% sighting guarantee. 1.5 hours of guided snorkeling in Mirissa\u2019s calm reef waters.',
    price: 25,
    duration: '1.5 Hours',
    timeSlots: '7:00 AM, 7:30 AM, 8:00 AM, 8:30 AM, 9:00 AM, 9:30 AM, 10:00 AM, 10:30 AM, 11:00 AM, 11:30 AM, 12:00 PM, 12:30 PM, 1:00 PM, 1:30 PM',
    image: 'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_swim-with-turtle.png',
    heroImage: 'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_group-dive.png',
    gallery: [
      'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_swim-with-turtle.png',
      'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_group-dive.png',
      'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_close-encounter.png',
      'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_selfie.png',
      'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_face-to-face.png'
    ],
    galleryAlt: [
      'Mirissa turtle snorkeling — guest swimming alongside a green sea turtle',
      'Mirissa turtle snorkeling — small group guided reef snorkeling tour',
      'Mirissa turtle snorkeling — close encounter with a hawksbill turtle',
      'Mirissa turtle snorkeling — guest selfie with sea turtle in clear water',
      'Mirissa turtle snorkeling — face-to-face with a sea turtle on the reef'
    ],
    highlights: [
      'Swim alongside turtles in their natural habitat with a 100% sighting guarantee',
      'Enjoy a hassle-free experience with free pickup and drop-off in Mirissa area',
      'Beginner-friendly snorkeling with full in-water guidance',
      'Stay refreshed with complimentary snacks and water after your tour',
      'Relax knowing that safety is a priority with experienced guides'
    ],
    fullDesc: 'Begin your experience with a free hotel pickup from Mirissa (within 3 km) and travel comfortably to the snorkeling location along Sri Lanka\u2019s beautiful southern coastline. Upon arrival, meet your professional local snorkeling guide, who will provide a clear safety briefing, explain snorkeling techniques, and assist you in fitting your snorkeling mask and fins before entering the water.\n\nSnorkel in calm, shallow reef areas that are well known for frequent sea turtle encounters. Mirissa is home to green turtles and hawksbill turtles, which are often seen feeding on seagrass and resting near coral reefs. These protected reef zones also host a variety of colorful tropical fish and vibrant coral formations, creating a rich underwater environment that is ideal for both beginners and confident swimmers.\n\nYour guide stays in the water with you at all times, offering hands-on support, pointing out marine life, and ensuring a safe, relaxed, and enjoyable snorkeling experience. Small group sizes allow for personal attention and a comfortable pace, making this tour suitable even for first-time snorkelers.\n\nAll wildlife encounters follow ethical and responsible snorkeling practices. Sea turtles are never chased, touched, or disturbed, allowing them to behave naturally while guests enjoy respectful and memorable close-up observations.\n\nAfter completing the snorkeling session, enjoy light snacks and bottled water to refresh and relax. Then take your free drop-off back to your hotel in Mirissa area. This turtle snorkeling experience offers a smooth, well-organized, and unforgettable ocean adventure on Sri Lanka\u2019s southern coast.',
    itinerary: [
      { time: 'Pickup', title: 'Hotel Pickup', desc: 'Free pickup from your hotel in Mirissa area (within 3 km).' },
      { time: '+10 min', title: 'Safety Briefing', desc: 'Meet your guide, get fitted with snorkeling mask and fins, and learn techniques.' },
      { time: '+5 min', title: 'Enter the Water', desc: 'Begin guided snorkeling in calm, shallow reef areas.' },
      { time: '1.5 hrs', title: 'Turtle Snorkeling', desc: 'Swim alongside green and hawksbill turtles with 100% sighting guarantee.' },
      { time: 'After', title: 'Snacks & Relax', desc: 'Enjoy light snacks and bottled water after your session.' },
      { time: 'End', title: 'Drop-off', desc: 'Free drop-off back to your hotel in Mirissa area.' }
    ],
    included: ['Free pickup and drop-off within Mirissa area', '1.5 hours guaranteed snorkeling time', '100% turtle sighting guarantee', 'Safety briefing before snorkeling', 'Snorkeling mask and fins', 'In-water guide at all times', 'Light snacks and bottled water'],
    excluded: ['Underwater GoPro camera rental (available on request)', 'Personal expenses', 'Tips for guide'],
    getYourGuide: {
      url: 'https://www.getyourguide.com/mirissa-l97533/mirissa-the-best-snorkeling-experience-with-turtles-t1174003/',
      badge: GETYOURGUIDE_PRODUCT_BADGE,
      title: 'Mirissa: Guided Turtle Snorkeling Experience with Coral Reef'
    }
  },
  'crocodile-safari': {
    id: 'crocodile-safari',
    name: 'Crocodile Watching',
    altPrefix: 'Crocodile Watching',
    location: 'Matara, Sri Lanka',
    groupType: 'Private Group',
    shortDesc: 'Cruise the Nilwala River through lush mangroves and spot crocodiles, kingfishers, monkeys, and vibrant wildlife in Matara.',
    price: 30,
    duration: '2 Hours',
    timeSlots: '8:00 AM, 9:00 AM, 10:00 AM, 11:00 AM, 12:00 PM, 1:00 PM, 2:00 PM, 3:00 PM, 4:00 PM',
    image: 'assets/images/crocodile-safari/crocodile_watching_close-up.png',
    imageAlt: 'Crocodile Watching - Close-up of a crocodile emerging from the Nilwala River',
    heroImage: 'assets/images/crocodile-safari/crocodile_watching_close-up.png',
    gallery: [
      'assets/images/crocodile-safari/crocodile_watching_close-up.png',
      'assets/images/crocodile-safari/crocodile_watching_river-bank.png',
      'assets/images/crocodile-safari/crocodile_watching_baby-crocodile.png',
      'assets/images/crocodile-safari/crocodile_watching_kingfisher.png',
      'assets/images/crocodile-safari/crocodile_watching_monkey.png'
    ],
    galleryAlt: [
      'Crocodile Watching - Close-up of a crocodile emerging from the Nilwala River',
      'Crocodile Watching - Crocodile with mouth open on the river bank',
      'Crocodile Watching - Juvenile crocodile during a guided river safari',
      'Crocodile Watching - Kingfisher perched on a branch in the mangroves',
      'Crocodile Watching - Macaque monkey in the mangrove forest'
    ],
    highlights: [
      'Feel the thrill of spotting crocodiles in their natural habitat',
      'Glide through the lush mangroves and calm backwaters of Matara',
      'Learn about the river\'s ecosystem from your local guide',
      'Enjoy a peaceful boat ride through the winding waters of the Nilwala River',
      'See vibrant birdlife and other wildlife as you cruise along the river'
    ],
    fullDesc: 'Witness the silent power and ancient beauty of crocodiles as you cruise through the winding waters of the Nilwala River. This unique journey takes you deep into the lush mangroves and calm backwaters of Matara, where nature thrives untouched.\n\nMajestic reptiles bask on riverbanks, barely disturbed by your passing. Local guides, experienced in the ways of the river, will take you safely along routes where crocodile sightings are guaranteed. These guardians of the water rest among the tangled roots and shallow coves, blending perfectly with their surroundings.\n\nIn the heart of Matara, where the Nilwala flows, legends live just beneath the surface. From silent hunters gliding through the water to the vibrant birdlife overhead, every turn of the river reveals a story.\n\nGlide silently through the mysterious waters of the Nilwala River, where ancient eyes watch from beneath the surface. This is more than a boat ride—it\'s an encounter with the wild soul of Matara.\n\nThick mangroves arch overhead like nature\'s cathedral, and the stillness of the river hides the silent presence of crocodiles—majestic, patient, and powerful. They rest on sun-warmed banks and slip beneath the water like shadows, masters of their domain.\n\nYour local guide, deeply connected to the rhythm of the river, leads you safely through winding paths where these prehistoric giants reign. Every bend reveals a new moment—whether it\'s a crocodile resting among twisted roots or a sudden flurry of wings from a colorful kingfisher overhead.\n\nIn these untouched waters, life unfolds naturally. The jungle breathes, the river speaks, and the wild watches quietly.',
    itinerary: [
      { time: '', title: 'Hotel Pickup', desc: 'Free pickup from Mirissa, Kamburugamuwa, Polhena, and Matara areas. Paid pickup can be arranged from other areas.' },
      { time: '15 min', title: 'Safety Briefing', desc: 'Meet your local boat operator and receive a safety briefing before boarding (0.25 hr of your 2 hr on-boat experience).' },
      { time: '15 min', title: 'Nilwala River Safari', desc: 'Glide through mangroves and calm backwaters on an exclusive boat ride (0.25 hr).' },
      { time: '1.5 hr', title: 'Wildlife Spotting', desc: 'Spot crocodiles, kingfishers, monkeys, land monitor lizards, and other native wildlife. Fresh fruit and bottled water are provided throughout the boat tour.' },
      { time: '2 hr', title: 'Boat time complete', desc: 'Total on-boat duration is 2 hours (briefing + river safari + wildlife). Tour concludes at the river; drop-off can be arranged upon request.' }
    ],
    included: ['Free hotel pickup from Mirissa, Kamburugamuwa, Polhena, Matara areas', 'Paid pickup can be arranged from Weligama, Ahangama, Midigama, Unawatuna, Talpe, Galle, Hiriketiya', 'Guided crocodile watching boat safari', 'Sightings of crocodiles, birdlife, monkeys, land monitor lizards, and native wildlife', 'Experienced local boat operator / guide', 'Safety briefing (~15 min)', 'Nilwala River boat safari (~15 min)', 'Wildlife spotting (~1.5 hr)', 'Exclusive boat ride', 'Fresh fruit and bottled water during the boat tour'],
    excluded: ['Free hotel drop-off (can be arranged upon request)', 'Personal expenses', 'Gratuities (optional)'],
    importantInfo: {
      bring: ['Hat', 'Camera', 'Sunscreen'],
      knowBeforeYouGo: [
        'Wildlife sightings cannot be guaranteed as animals are wild',
        'Tour operates in most weather conditions',
        'Suitable for all ages',
        'Please follow guide instructions for safety',
        'Wear comfortable clothes and sun protection'
      ]
    },
    getYourGuide: {
      url: 'https://www.getyourguide.com/matara-l143169/matara-nilwala-river-crocodile-watching-with-boat-safari-t1173193/',
      badge: GETYOURGUIDE_PRODUCT_BADGE,
      title: 'From Mirissa: Crocodile Watching River Boat Safari'
    }
  },
  'river-kayak': {
    id: 'river-kayak',
    name: 'River Kayak Tours',
    altPrefix: 'Mirissa Kayak Tours',
    location: 'Mirissa, Sri Lanka',
    groupType: 'Private Group',
    shortDesc: 'Glide through calm waterways surrounded by lush greenery and spot water monitors, kingfishers, herons, and monkeys.',
    price: 25,
    duration: '1.5 Hours',
    timeSlots: '7:00 AM, 8:00 AM, 9:00 AM, 10:00 AM, 11:00 AM, 12:00 PM, 1:00 PM, 2:00 PM, 3:00 PM, 4:00 PM',
    image: 'assets/images/river-kayak/mirissa_kayak_group-paddling.png',
    heroImage: 'assets/images/river-kayak/mirissa_kayak_mangrove-roots.png',
    gallery: [
      'assets/images/river-kayak/mirissa_kayak_group-paddling.png',
      'assets/images/river-kayak/mirissa_kayak_kayaks-lake.png',
      'assets/images/river-kayak/mirissa_kayak_kayaks-mangrove.png',
      'assets/images/river-kayak/mirissa_kayak_group-launch.png',
      'assets/images/river-kayak/mirissa_kayak_sunset-kayak.png',
      'assets/images/river-kayak/mirissa_kayak_lake-swimming.png',
      'assets/images/river-kayak/mirissa_kayak_kids-kayak.png',
      'assets/images/river-kayak/mirissa_kayak_couple-mangrove.png',
      'assets/images/river-kayak/mirissa_kayak_sunrise-silhouette.png',
      'assets/images/river-kayak/mirissa_kayak_river-sunset.png',
      'assets/images/river-kayak/mirissa_kayak_mangrove-roots.png'
    ],
    galleryAlt: [
      'Mirissa river kayak — group paddling through calm mangrove waterways',
      'Mirissa river kayak — kayaks on a serene lake near Mirissa',
      'Mirissa river kayak — paddling through mangrove forest channels',
      'Mirissa river kayak — group launching kayaks for a river safari',
      'Mirissa river kayak — sunset kayaking on the river',
      'Mirissa river kayak — swimming in a freshwater lake after kayaking',
      'Mirissa river kayak — family kayaking adventure for kids and adults',
      'Mirissa river kayak — couple kayaking through mangrove roots',
      'Mirissa river kayak — sunrise silhouette on the water',
      'Mirissa river kayak — golden sunset over the river near Mirissa',
      'Mirissa river kayak — close-up of mangrove roots along the kayak route'
    ],
    highlights: [
      'Glide through calm waterways surrounded by lush greenery and wildlife',
      'Spot water monitors, river birds, kingfishers, herons, and monkeys',
      'Enjoy a private kayaking tour with a local guide and safety briefing',
      'Relax with refreshments, including snacks and tea or fruit juice',
      'Benefit from free hotel pickup and drop-off in the Mirissa area'
    ],
    fullDesc: 'Begin with a convenient pickup from your hotel in the Mirissa area. Meet your experienced local guide, who will provide a short introduction and safety briefing before you set off on your private kayaking journey through quiet mangrove channels.\n\nFor your safety and comfort, life jackets and kayaking equipment will be provided before the tour begins. The experience is guided by trained local professionals and takes place in calm, beginner-friendly waters suitable for all experience levels.\n\nGlide across peaceful waterways as you explore one of the most beautiful and untouched ecosystems in southern Sri Lanka. Along the way, spot a variety of wildlife, including water monitors, river birds, kingfishers, herons, monkeys, and other tropical species living in the mangrove environment.\n\nThis is a slow-paced, relaxing experience designed to help you connect with nature in a peaceful and eco-friendly setting. Guests are advised to follow the guide\'s safety instructions throughout the tour to ensure a safe and enjoyable adventure.\n\nAfter the kayaking experience, enjoy refreshments including snacks and tea or fruit juice before returning with free drop-off to your hotel in Mirissa.',
    itinerary: [
      { time: '', title: 'Hotel Pickup', desc: 'Free pickup from your hotel in the Mirissa area.' },
      { time: '+5 min', title: 'Introduction & Safety Briefing', desc: 'Meet your guide and receive safety instructions and equipment.' },
      { time: '+10 min', title: 'Kayaking Begins', desc: 'Set off on your private kayaking journey through calm mangrove channels.' },
      { time: '+40 min', title: 'Wildlife Spotting', desc: 'Explore waterways and spot water monitors, kingfishers, herons, and monkeys.' },
      { time: '+1 hr', title: 'Refreshments', desc: 'Enjoy snacks and tea or fruit juice after the kayaking experience.' },
      { time: '+1.5 hr', title: 'Hotel Drop-off', desc: 'Free drop-off back to your hotel in Mirissa.' }
    ],
    included: ['Kayak and paddle', 'Life jacket and safety equipment', 'Professional local guide', 'Safety briefing before start', 'Refreshments (snacks, tea or fruit juice)', 'Free hotel pickup and drop-off (Mirissa area only)'],
    excluded: ['Personal expenses', 'Gratuities (optional)', 'Camera or waterproof accessories'],
    importantInfo: {
      notAllowed: ['Feeding animals'],
      knowBeforeYouGo: [
        'Wildlife sightings depend on natural conditions',
        'No prior kayaking experience required',
        'Suitable for beginners'
      ]
    },
    getYourGuide: {
      url: 'https://www.getyourguide.com/kamburugamuwa-l257091/mirissa-guided-mangrove-kayaking-adventure-river-safari-t1329414/',
      badge: GETYOURGUIDE_PRODUCT_BADGE,
      title: 'Mirissa: Guided Mangrove Kayaking Adventure & River Safari'
    }
  },
  'scuba-diving': {
    id: 'scuba-diving',
    name: 'Scuba Diving Tours',
    altPrefix: 'Scuba Diving',
    location: 'Mirissa, Sri Lanka',
    shortDesc: 'Dive into Mirissa’s vibrant underwater world with pro instructors, a 1:2 ratio, and options for beginners or certified divers.',
    price: 75,
    duration: '2 Hours',
    timeSlots: '8:00 AM, 9:00 AM, 10:00 AM, 11:00 AM',
    image: 'assets/images/scuba-diving/scuba_diving_two-divers.png',
    imageAlt: 'Scuba Diving - Two divers exploring coral reefs in Mirissa',
    heroImage: 'assets/images/scuba-diving/scuba_diving_diver-swimming.png',
    gallery: [
      'assets/images/scuba-diving/scuba_diving_diver-swimming.png',
      'assets/images/scuba-diving/scuba_diving_two-divers.png',
      'assets/images/scuba-diving/scuba_diving_diver-coral-reef.png',
      'assets/images/scuba-diving/scuba_diving_starfish-reef.png'
    ],
    galleryAlt: [
      'Scuba Diving - Diver swimming over coral reefs in Mirissa',
      'Scuba Diving - Two divers with instructor in clear blue water',
      'Scuba Diving - Diver exploring colorful coral reef marine life',
      'Scuba Diving - Starfish and sea life on the coral reef'
    ],
    highlights: [
      'Dive into the vibrant underwater world of the Indian Ocean in Mirissa',
      'Choose from options for beginners or certified divers to suit your needs',
      'Explore colorful coral reefs and schools of tropical fish in the ocean',
      'Enjoy a personalized experience with a 1:2 instructor-to-guest ratio',
      'Relax with tasty snacks and a cup of authentic Ceylon tea after your dive'
    ],
    fullDesc: 'Embark on a scuba diving adventure in Mirissa, Sri Lanka. Choose from options for beginners or certified divers, and explore the vibrant underwater world of the Indian Ocean.\n\nFor beginners, no prior experience is needed. Receive step-by-step training from professional, certified local instructors, ensuring safety and comfort with a 1:2 instructor-to-guest ratio. Discover colorful coral reefs, tropical fish, and the beauty of the Indian Ocean.\n\nFor certified divers, dive into the underwater paradise of Mirissa on a fun dive. Explore stunning coral reefs, schools of tropical fish, and the vibrant marine life that makes Mirissa one of the best scuba diving spots in Sri Lanka. Dive in small groups with a professional local dive guide (1:2 ratio) for a safe and personalized experience.\n\nAfter your dive, relax with tasty snacks and a cup of authentic Ceylon tea. Enjoy the convenience of free pickup and drop-off within 3 km of Mirissa.',
    packagesTitle: 'Dive Packages',
    packagesDesc: 'Choose the package that fits your experience level. All dives include a 1:2 instructor-to-guest ratio.',
    packages: [
      {
        number: '01',
        title: 'Discover Scuba Diving',
        subtitle: 'For Beginners',
        price: 75,
        image: 'assets/images/scuba-diving/scuba_diving_two-divers.png',
        imageAlt: 'Scuba Diving - Discover scuba diving for beginners with instructor in Mirissa',
        desc: 'Learn the basics with a certified instructor and explore colorful coral reefs and tropical fish. No experience needed.',
        breakdown: [
          { label: 'Safety briefing & preparation', time: '15 min' },
          { label: 'Training & lessons', time: '1 hour' },
          { label: 'Underwater diving', time: '45 min' }
        ]
      },
      {
        number: '02',
        title: 'Fun Scuba Diving (One Tank)',
        subtitle: 'For Experienced Divers',
        price: 75,
        image: 'assets/images/scuba-diving/scuba_diving_diver-swimming.png',
        imageAlt: 'Scuba Diving - Fun dive one tank for experienced divers in Mirissa',
        desc: 'Dive the best local sites filled with colorful coral reefs and marine life.',
        breakdown: [
          { label: 'Safety briefing & preparation', time: '30 min' },
          { label: 'Underwater diving', time: '45 min' }
        ]
      },
      {
        number: '03',
        title: 'Fun Scuba Diving (Two Tank)',
        subtitle: 'For Experienced Divers',
        price: 140,
        image: 'assets/images/scuba-diving/scuba_diving_diver-coral-reef.png',
        imageAlt: 'Scuba Diving - Two tank fun dive exploring coral reefs in Mirissa',
        desc: 'Two oxygen tanks included — more dive time with rest and lesson between tanks.',
        breakdown: [
          { label: 'Underwater diving (tank 1)', time: '45 min' },
          { label: 'Rest time & surface interval', time: 'Included' },
          { label: 'Underwater diving (tank 2)', time: '45 min' },
          { label: 'Lesson / briefing', time: 'Included' }
        ]
      },
      {
        number: '04',
        title: 'Fun Scuba Diving (Three Tank)',
        subtitle: 'For Experienced Divers',
        price: 200,
        image: 'assets/images/scuba-diving/scuba_diving_starfish-reef.png',
        imageAlt: 'Scuba Diving - Three tank fun dive at vibrant reef sites in Mirissa',
        desc: 'Three oxygen tanks included — explore the best local dive sites with colorful coral reefs and marine life.',
        breakdown: [
          { label: 'Underwater diving (tank 1)', time: '45 min' },
          { label: 'Underwater diving (tank 2)', time: '45 min' },
          { label: 'Underwater diving (tank 3)', time: '45 min' },
          { label: 'Rest time & surface interval', time: 'Included' },
          { label: 'Lesson / briefing', time: 'Included' }
        ]
      }
    ],
    itinerary: [
      { time: '15 min', title: 'Safety Briefing & Preparation', desc: 'Meet your instructor, gear up, and receive beginner support and safety guidance.' },
      { time: '1h 15 min', title: 'Training & Lessons', desc: 'Step-by-step training and diving lessons with certified local instructors (beginners).' },
      { time: '45 min', title: 'Underwater Dive (One Tank)', desc: 'Explore Mirissa’s coral reefs and tropical fish with a 1:2 instructor-to-guest ratio.' },
      { time: 'After', title: 'Snacks & Ceylon Tea', desc: 'Relax after your dive with tasty snacks and authentic Ceylon tea (optional).' }
    ],
    included: [
      '1 h 15 min of diving training and lessons',
      '45 min underwater diving experience (one tank)',
      'Good scuba diving gear and equipment',
      'Free pickup and drop-off within 3 km of Mirissa',
      'Safety briefing & beginner support',
      'Snacks and authentic Ceylon tea after the tour (optional)'
    ],
    excluded: [
      'Underwater photography/video service (GoPro camera rental available)',
      'Pickup & drop-off outside Mirissa area (available with additional fees)',
      'Personal expenses',
      'Gratuities (optional)'
    ],
    importantInfo: {
      bring: ['Change of clothes', 'Beachwear'],
      notSuitable: ['Pregnant women', 'Visually impaired people', 'People prone to seasickness'],
      knowBeforeYouGo: [
        'Pickup & drop-off (out of Mirissa area) can be arranged with additional fees',
        'Please come at least 5 minutes before the location time',
        'If you can share a reachable WhatsApp number, it will be easier for us to stay in touch'
      ]
    },
    getYourGuide: {
      url: 'https://www.getyourguide.com/mirissa-l97533/mirissa-unforgettable-scuba-diving-experience-with-coral-t1175987/',
      badge: GETYOURGUIDE_PRODUCT_BADGE,
      title: 'Mirissa: Guided Scuba Diving Experience with Coral'
    }
  },
  'night-snorkeling': {
    id: 'night-snorkeling',
    name: 'Night Snorkeling',
    altPrefix: 'Night Snorkeling',
    location: 'Mirissa, Sri Lanka',
    groupType: 'Private Group',
    shortDesc: 'Guided day or night snorkeling in Mirissa — tropical fish, vibrant reefs, sea turtles, and an underwater flashlight experience.',
    price: 40,
    duration: '1.5 Hours',
    image: 'assets/images/night-snorkeling/night_snorkeling_blue-spotted-rays.png',
    imageAlt: 'Night Snorkeling - Blue-spotted rays on the reef in Mirissa',
    heroImage: 'assets/images/night-snorkeling/night_snorkeling_nurse-shark.png',
    gallery: [
      'assets/images/night-snorkeling/night_snorkeling_nurse-shark.png',
      'assets/images/night-snorkeling/night_snorkeling_blue-spotted-rays.png',
      'assets/images/night-snorkeling/night_snorkeling_octopus.png',
      'assets/images/night-snorkeling/night_snorkeling_sea-turtle.png',
      'assets/images/night-snorkeling/night_snorkeling_clownfish.png',
      'assets/images/night-snorkeling/night_snorkeling_reef-fish-school.png',
      'assets/images/night-snorkeling/night_snorkeling_tropical-fish.png'
    ],
    galleryAlt: [
      'Night Snorkeling - Nurse shark illuminated on the seabed at night',
      'Night Snorkeling - Blue-spotted stingrays on sandy reef in Mirissa',
      'Night Snorkeling - Octopus on the rocky seabed',
      'Night Snorkeling - Sea turtle swimming in Mirissa waters',
      'Night Snorkeling - Clownfish among coral reef anemones',
      'Night Snorkeling - School of tropical fish over coral reef',
      'Night Snorkeling - Colorful tropical fish near the surface'
    ],
    highlights: [
      'Guided day or night snorkeling experience in Mirissa',
      'Swim with colorful tropical fish and vibrant coral reef formations',
      'High chance of spotting sea turtles, especially during daytime snorkeling',
      'Free hotel pickup and drop-off in Mirissa (within 5 km)',
      'Get all the necessary snorkeling gear and an underwater flashlight'
    ],
    fullDesc: 'Begin your experience with a free hotel pickup from Mirissa and travel comfortably to the snorkeling location. Meet your professional local guide and receive a clear safety briefing, followed by assistance in putting on high-quality snorkeling equipment.\n\nEnter the warm waters of the Indian Ocean and explore Mirissa’s vibrant coral reefs, home to colorful tropical fish such as parrotfish, angelfish, butterflyfish, and other reef species.\n\nExperience the magic of snorkeling after dark as marine life becomes more active. Using an underwater flashlight, illuminate coral formations and observe nocturnal sea creatures in their natural environment. There is an estimated 70% chance of spotting sea turtles, most commonly green turtles or hawksbill turtles, during night snorkeling sessions, depending on sea conditions.\n\nAll wildlife encounters are ethical and respectful. Sea turtles and marine life are never chased or disturbed, allowing natural behavior and better viewing opportunities while protecting the ecosystem.\n\nAfter the snorkeling session, enjoy optional Ceylon tea and light snacks to relax and warm up. A free drop-off back to your hotel in Mirissa (within 5 km) is included for a smooth and stress-free return.\n\nGoPro cameras are not included, but rental can be arranged upon request if you’d like to capture your underwater adventure.',
    itinerary: [
      { time: '', title: 'Hotel Pickup', desc: 'Free pickup from your hotel in Mirissa (within 5 km).' },
      { time: '+10 min', title: 'Safety Briefing & Gear', desc: 'Meet your guide, receive a safety briefing, and get mask, snorkel, fins, and underwater flashlight.' },
      { time: '+15 min', title: 'Snorkeling Session', desc: 'Explore coral reefs, tropical fish, and nocturnal marine life with your guide (day or night).' },
      { time: '+1.5 hr', title: 'Refreshments', desc: 'Enjoy bottled water, tea, and snacks after the activity.' },
      { time: 'End', title: 'Hotel Drop-off', desc: 'Free drop-off back to your hotel in Mirissa (within 5 km).' }
    ],
    included: [
      'Complimentary pickup and drop-off within the Mirissa area (5 km)',
      'All necessary snorkeling gear (mask, snorkel, fins)',
      'Professional guide with safety briefing',
      'Underwater flashlight',
      'Refreshments after the activity (bottled water, tea, and snacks)'
    ],
    excluded: [
      'GoPro or underwater camera (available for rent upon request)',
      'Pickup outside Mirissa area (Ahangama, Weligama, Thalpe, Unawatuna, Galle, Habaraduwa, Matara, Hiriketiya — available on request for additional charge)',
      'Personal expenses',
      'Gratuities (optional)'
    ],
    importantInfo: {
      bring: ['Swimwear', 'Towel', 'Waterproof camera'],
      notAllowed: ['Touching marine life'],
      notSuitable: ['Pregnant women', 'People with respiratory issues'],
      knowBeforeYouGo: [
        'Please come at least 5 minutes before the location time',
        'If you can share a reachable WhatsApp number, it will be easier for us to stay in touch'
      ]
    },
    getYourGuide: {
      url: 'https://www.getyourguide.com/mirissa-l97533/mirissa-night-snorkeling-experience-with-pickup-gear-t1173966/',
      badge: GETYOURGUIDE_PRODUCT_BADGE,
      title: 'Mirissa: Night Snorkeling with Sea Turtles & Coral Reefs'
    }
  },
  'deep-sea-fishing': {
    id: 'deep-sea-fishing',
    name: 'Deep Sea Fishing Tours',
    altPrefix: 'Deep Sea Fishing',
    location: 'Mirissa, Sri Lanka',
    groupType: 'Private Group (max 6 guests)',
    shortDesc: '3–4 hour private deep sea fishing in Mirissa with certified skipper, fishing guide, and gear — beginner-friendly, max 6 guests.',
    price: 100,
    priceNote: 'From $100/person (2+ guests) · $150 solo',
    duration: '3–4 Hours',
    timeSlots: '6:00 AM, 2:00 PM',
    maxGuests: 6,
    image: 'assets/images/deep-sea-fishing/mirissa_deep_fishing_group-catch.png',
    imageAlt: 'Deep Sea Fishing - Group with tuna and mahi-mahi catch in Mirissa',
    heroImage: 'assets/images/deep-sea-fishing/mirissa_deep_fishing_two-anglers.png',
    gallery: [
      'assets/images/deep-sea-fishing/mirissa_deep_fishing_two-anglers.png',
      'assets/images/deep-sea-fishing/mirissa_deep_fishing_woman-catch.png',
      'assets/images/deep-sea-fishing/mirissa_deep_fishing_group-catch.png',
      'assets/images/deep-sea-fishing/mirissa_deep_fishing_couple-catch.png',
      'assets/images/deep-sea-fishing/mirissa_deep_fishing_collage.png'
    ],
    galleryAlt: [
      'Deep Sea Fishing - Two anglers with catch on private boat in Mirissa',
      'Deep Sea Fishing - Guest displaying fresh catch on the Indian Ocean',
      'Deep Sea Fishing - Group celebrating tuna and mahi-mahi catch',
      'Deep Sea Fishing - Couple with multiple fish on board',
      'Deep Sea Fishing - Successful fishing moments in Mirissa'
    ],
    highlights: [
      'Fishing gear & hands-on instruction (max 6 guests per group)',
      'Enjoy a scenic fishing tour through Mirissa with a certified skipper',
      'Learn fishing techniques from your guide and try your hand at fishing',
      'Flexible fishing style suitable for basic or deeper offshore fishing',
      'Beginner-friendly fishing with guidance throughout the tour'
    ],
    fullDesc: 'Begin your adventure with a concise safety briefing from the crew, followed by changing into flotation suits and preparation for your private boat tour (maximum 6 guests per group). Enjoy a comfortable and exclusive experience designed for both fishing and ocean exploration.\n\nSet sail with a two-person professional crew: a certified skipper responsible for safe navigation and boat handling, and a dedicated fishing guide focused on hands-on coaching, guest service, and hospitality. This setup is especially valuable in rougher conditions—while the skipper remains at the helm, your guide continues assisting guests, adjusting fishing gear, offering clear guidance, and serving hot drinks to ensure a relaxed and well-cared-for experience.\n\nHead further offshore for a 3–4 hour deep sea fishing experience in the Indian Ocean. Multiple fishing rods are used with guest rotation so everyone gets a fair chance to participate. A fish finder helps locate productive fishing areas, resulting in a very high chance of catching fish under normal sea conditions.\n\nThis tour also offers an estimated 50% chance of spotting dolphins and around a 30% chance of seeing sea turtles, depending on sea and weather conditions. Fishing techniques range from basic offshore methods for beginners to more extended deep-sea fishing, depending on sea conditions. While fishing success is very high, this remains a recreational fishing experience, and conditions may vary naturally.\n\nFree hotel pickup and drop-off is available within the Mirissa area (up to 5 km). For locations outside Mirissa, please contact the tour operator in advance to arrange pickup.\n\nThe operator works weather-smart. Rather than canceling unnecessarily, routes, fishing locations, or departure times may be adjusted to maximize comfort and safety. Wildlife is always observed responsibly and respectfully. Dolphins, turtles, and other marine life are never chased or disturbed.',
    packagesTitle: 'Pricing Options',
    packagesDesc: 'Private boat for up to 6 guests. Solo booking or group rates available.',
    packages: [
      {
        number: '01',
        title: 'Solo Fishing (1 Guest)',
        subtitle: 'Private boat · max 6 capacity',
        price: 150,
        image: 'assets/images/deep-sea-fishing/mirissa_deep_fishing_woman-catch.png',
        imageAlt: 'Deep Sea Fishing - Solo angler private fishing tour in Mirissa',
        desc: 'Private boat for one guest with certified skipper and dedicated fishing guide.',
        breakdown: [
          { label: 'Duration', time: '3–4 hours' },
          { label: 'Deep sea offshore fishing', time: 'Included' },
          { label: 'Certified skipper & fishing guide', time: 'Included' },
          { label: 'All fishing gear & safety equipment', time: 'Included' }
        ]
      },
      {
        number: '02',
        title: 'Group Fishing (2–6 Guests)',
        subtitle: 'Per person · private group',
        price: 100,
        image: 'assets/images/deep-sea-fishing/mirissa_deep_fishing_group-catch.png',
        imageAlt: 'Deep Sea Fishing - Group deep sea fishing tour Mirissa',
        desc: 'Share a private boat with your group — everyone gets hands-on fishing time with rod rotation.',
        breakdown: [
          { label: 'Duration', time: '3–4 hours' },
          { label: 'Price', time: '$100 per person' },
          { label: 'Max group size', time: '6 guests' },
          { label: 'Dolphin spotting chance', time: '~50–70%' }
        ]
      }
    ],
    itinerary: [
      { time: '', title: 'Hotel Pickup', desc: 'Free pickup from your hotel in Mirissa (up to 5 km).' },
      { time: '+15 min', title: 'Safety Briefing', desc: 'Safety briefing, flotation suits, and fishing gear preparation.' },
      { time: '+30 min', title: 'Depart & Offshore Fishing', desc: 'Head offshore with certified skipper and fishing guide; multiple rods with guest rotation.' },
      { time: '3–4 hr', title: 'Deep Sea Fishing', desc: 'Fish finder-assisted fishing with high success rate; chance to spot dolphins and turtles.' },
      { time: 'During', title: 'Refreshments', desc: 'Water, snacks, and fruits served on board; seasick medicine available.' },
      { time: 'End', title: 'Return & Drop-off', desc: 'Return to harbour and free drop-off in Mirissa area.' }
    ],
    included: [
      'Free hotel pickup & drop-off in Mirissa area (up to 5 km)',
      'Free water, snacks, and fruits during the activity',
      'Seasick medicine provided',
      'Chance to spot dolphins (~50–70%) during the tour',
      'Private boat (max 6 guests per group)',
      'Private boat safari and sea fishing tour',
      'Certified skipper and dedicated fishing guide',
      'Safety briefing before departure',
      'Flotation suits and safety equipment',
      'Fishing rods and basic fishing gear',
      'Guidance and assistance throughout the tour'
    ],
    excluded: [
      'Personal expenses',
      'Pickup outside Mirissa area (available on request at extra cost)',
      'Gratuities (optional)'
    ],
    importantInfo: {
      bring: ['Comfortable shoes', 'Sunglasses', 'Sun hat', 'Camera', 'Sunscreen', 'Comfortable clothes'],
      notAllowed: ['Touching marine life'],
      notSuitable: ['People prone to seasickness'],
      knowBeforeYouGo: [
        'Suitable for beginners and first-time anglers; full guidance is provided throughout the tour',
        'Sea conditions can vary, and routes or departure times may be adjusted for comfort and safety',
        'Early departure times are recommended for calmer seas (6:00 AM slot)',
        'Not recommended for travelers with severe seasickness or serious medical conditions',
        'Please inform the operator in advance of any special requirements or concerns',
        'Wildlife is observed ethically and respectfully; animals are never chased or disturbed',
        'Please come at least 5 minutes before the scheduled time'
      ]
    },
    getYourGuide: {
      url: 'https://www.getyourguide.com/mirissa-l97533/mirissa-unforgettable-boat-safari-and-sea-fishing-tour-t1174794/',
      badge: GETYOURGUIDE_PRODUCT_BADGE,
      title: 'Mirissa: Private Deep Sea Fishing Boat Tour with Local Guide'
    }
  },
  'cooking-class': {
    id: 'cooking-class',
    name: 'Authentic Sri Lankan Cooking Class',
    altPrefix: 'Cooking Class',
    location: 'Mirissa, Sri Lanka',
    groupType: 'Private Group',
    shortDesc: 'Learn authentic Sri Lankan dishes with a local chef — hands-on cooking, traditional spices, and a shared meal in Mirissa.',
    price: 30,
    duration: '2.5 Hours',
    timeSlots: '9:00 AM, 2:00 PM',
    image: 'assets/images/cooking-class/mirissa_cooking_class_spice-tray.png',
    imageAlt: 'Cooking Class - Traditional Sri Lankan spices for cooking class in Mirissa',
    heroImage: 'assets/images/cooking-class/mirissa_cooking_class_outdoor-kitchen.png',
    gallery: [
      'assets/images/cooking-class/mirissa_cooking_class_outdoor-kitchen.png',
      'assets/images/cooking-class/mirissa_cooking_class_cooking-session.png',
      'assets/images/cooking-class/mirissa_cooking_class_guests.png',
      'assets/images/cooking-class/mirissa_cooking_class_spice-tray.png',
      'assets/images/cooking-class/mirissa_cooking_class_spice-table.png',
      'assets/images/cooking-class/mirissa_cooking_class_ingredients.png',
      'assets/images/cooking-class/mirissa_cooking_class_kitchen-prep.png',
      'assets/images/cooking-class/mirissa_cooking_class_spice-heart-tray.png',
      'assets/images/cooking-class/mirissa_cooking_class_dining-area.png',
      'assets/images/cooking-class/mirissa_cooking_class_rustic-kitchen.png'
    ],
    galleryAlt: [
      'Cooking Class - Outdoor traditional kitchen in Mirissa',
      'Cooking Class - Hands-on cooking session with local chef',
      'Cooking Class - Guests enjoying Sri Lankan cooking class',
      'Cooking Class - Colorful spice tray with traditional ingredients',
      'Cooking Class - Fresh ingredients and spices on the table',
      'Cooking Class - Fresh vegetables, rice, and coconut for cooking',
      'Cooking Class - Kitchen preparation with local ingredients',
      'Cooking Class - Heart-shaped spice tray with Sri Lankan spices',
      'Cooking Class - Rustic dining area for cooking class',
      'Cooking Class - Traditional rustic kitchen setting'
    ],
    highlights: [
      'Learn to cook authentic Sri Lankan dishes with a local chef',
      'Use traditional spices and cooking methods to create delicious meals',
      'Enjoy a meal with your group after the cooking session',
      'Get hands-on experience with local ingredients in a small group',
      'Benefit from hotel pickup and drop-off in the Mirissa area'
    ],
    fullDesc: 'Discover the flavors of Sri Lanka with a hands-on cookery class in Mirissa. Guided by a professional local chef, learn to prepare traditional Sri Lankan dishes using fresh ingredients and authentic techniques. This small-group experience is perfect for food lovers who want a deeper cultural connection through cooking.\n\nDuring the class, you\u2019ll be introduced to the essential spices, herbs, and ingredients that define Sri Lankan cuisine. Your chef will explain the role of each ingredient and demonstrate traditional cooking methods, before guiding you step by step as you prepare several classic dishes. You\u2019ll actively participate in the cooking process, gaining practical skills and cultural insight along the way.\n\nWith a maximum of just 6 participants, enjoy personal guidance, a relaxed atmosphere, and plenty of time to ask questions. The intimate group size allows the chef to tailor the experience to your pace and interests, whether you are a beginner or an experienced home cook looking to explore new flavors.\n\nAfter the cooking session, sit down and enjoy the delicious meal you\u2019ve prepared together. Share stories, exchange travel experiences, and savor the authentic Sri Lankan dishes you created in a friendly and welcoming setting. This cookery class is not just about food\u2014it\u2019s an immersive cultural experience that connects you with local traditions and the heart of Sri Lankan hospitality.',
    itinerary: [
      { time: 'Pickup', title: 'Hotel Pickup', desc: 'Free pickup from your hotel in Mirissa area.' },
      { time: '+10 min', title: 'Welcome & Introduction', desc: 'Meet your chef, tour the traditional kitchen, and learn about Sri Lankan spices.' },
      { time: '+20 min', title: 'Cooking Session Begins', desc: 'Hands-on preparation of authentic Sri Lankan dishes with step-by-step guidance.' },
      { time: '~2 hrs', title: 'Enjoy Your Meal', desc: 'Sit down and enjoy the delicious meal you\u2019ve prepared together.' },
      { time: 'End', title: 'Drop-off', desc: 'Free drop-off back to your hotel in Mirissa area.' }
    ],
    included: ['Professional chef guidance', 'Sri Lankan traditional kitchen', 'Hands-on cooking experience', 'All cooking ingredients and equipment', '1 bottle of water or fresh fruit juice per person', 'Meal after the cooking session', 'Hotel pickup and drop-off (Mirissa area)'],
    excluded: ['Alcohol and drugs', 'Personal expenses'],
    importantInfo: {
      bring: ['Comfortable clothes', 'Clothes that can get dirty'],
      notAllowed: ['Alcohol and drugs'],
      knowBeforeYouGo: ['Wear comfortable clothing suitable for cooking', 'No prior cooking experience is required', 'All skill levels are welcome', 'Please inform us in advance of any food allergies or dietary restrictions']
    },
    getYourGuide: {
      url: 'https://www.getyourguide.com/mirissa-l97533/mirissa-authentic-sri-lankan-cooking-class-experience-t1175959/',
      badge: GETYOURGUIDE_PRODUCT_BADGE,
      title: 'Mirissa: Authentic Sri Lankan Cooking Class Experience'
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.I18n) {
    window.I18n.onLanguageChange(() => refreshPageContent());
  }

  initAnalytics();
  initSeo();
  injectMirissaBranding();
  injectNavExtras();
  injectGetYourGuideBadges();
  initMobileNav();
  initHeader();
  initScrollAnimations();
  initFloatingWhatsApp();
  initScrollToTop();
  initHeroCarousel();

  if (document.querySelector('.tours-grid[data-render="all"]')) renderAllTours();
  if (document.querySelector('.tours-grid[data-render="featured"]')) renderFeaturedTours();
  if (document.querySelector('[data-render="combos"]')) renderComboPackages();
  if (document.getElementById('faq-accordion')) initFAQPage();
  if (document.getElementById('site-gallery')) initSiteGallery();
  if (document.getElementById('home-videos')) initHomeVideos();
  if (document.getElementById('gallery-videos')) initGalleryVideos();
  if (document.getElementById('tour-detail-content')) initTourDetails();
  if (document.getElementById('combo-detail-content')) initComboDetails();
  if (document.getElementById('booking-form')) initBookingForm();
  if (document.body.dataset.page === 'airport-shuttle') initAirportShuttlePage();
  if (document.querySelector('[data-shuttle-wa], [data-shuttle-price]')) refreshAirportShuttleUi();
  if (document.getElementById('payment-form')) initPaymentPage();
  if (document.getElementById('contact-form')) initContactForm();
  if (document.getElementById('blog-grid')) {
    initBlogPage();
    const blogTitle = t('blog.pageTitle');
    const blogDesc = t('blog.pageDescription');
    if (blogTitle !== 'blog.pageTitle') {
      applyPageMeta({
        ...PAGE_SEO['blog.html'],
        title: blogTitle,
        description: blogDesc
      }, '/blog.html');
    }
  }
  if (document.body.dataset.blogPost) {
    initBlogArticlePage();
    initBlogPostSeo(document.body.dataset.blogPost);
  }
  if (document.getElementById('blog-related')) initBlogPost();

  injectFooterBlogLink();
  injectFooterReviewLinks();
  initBusinessReviewLinks();

  if (window.I18n) {
    window.I18n.init();
    restoreMobileNavIcons();
    window.I18n.applyTranslations();
  }

  if (document.body.dataset.blogPost) initBlogArticlePage();

  initHeaderLayout();
});

const HERO_SLIDE_DURATION = 6500;

function getHeroTabLocation(slide, index) {
  if (index === 0) return SITE_LOCATION_SHORT;
  const tourId = getTourIdFromHref(slide.dataset.link || '');
  return getTourLocationShort(tourId);
}

function initHeroCarousel() {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll('.hero-slide')];
  const bgLayer = carousel.querySelector('.hero-bg-layer');
  const prevBtn = carousel.querySelector('.hero-prev');
  const nextBtn = carousel.querySelector('.hero-next');
  const indicatorsContainer = carousel.querySelector('.hero-indicators');
  const tabsContainer = carousel.querySelector('.hero-tour-tabs');
  const progressFill = carousel.querySelector('.hero-progress-fill');
  const counterCurrent = carousel.querySelector('.hero-counter-current');
  const counterTotal = carousel.querySelector('.hero-counter-total');
  const ctaPrimary = carousel.querySelector('.hero-slide-cta-primary');
  const autoplayToggle = carousel.querySelector('.hero-autoplay-toggle');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let current = 0;
  let interval = null;
  let isPlaying = !prefersReducedMotion;

  if (counterTotal) {
    counterTotal.textContent = String(slides.length).padStart(2, '0');
  }

  slides.forEach((slide, index) => {
    const label = slide.dataset.tab || `Slide ${index + 1}`;

    if (indicatorsContainer) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `hero-indicator${index === 0 ? ' active' : ''}`;
      dot.dataset.index = String(index);
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', label);
      dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      indicatorsContainer.appendChild(dot);
    }

    if (tabsContainer) {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = `hero-tour-tab${index === 0 ? ' active' : ''}`;
      tab.dataset.index = String(index);
      tab.innerHTML = `
        <span class="hero-tour-tab-num">${String(index + 1).padStart(2, '0')}</span>
        <span class="hero-tour-tab-text">
          <span class="hero-tour-tab-label">${label}</span>
          <span class="hero-tour-tab-loc">${getHeroTabLocation(slide, index)}</span>
        </span>
      `;
      tabsContainer.appendChild(tab);
    }
  });

  const indicators = [...carousel.querySelectorAll('.hero-indicator')];
  const tabs = [...carousel.querySelectorAll('.hero-tour-tab')];

  function padSlideNum(n) {
    return String(n + 1).padStart(2, '0');
  }

  function triggerKenBurns() {
    if (!bgLayer || prefersReducedMotion) return;
    bgLayer.classList.remove('is-kenburns');
    void bgLayer.offsetWidth;
    bgLayer.classList.add('is-kenburns');
  }

  function resetProgress() {
    if (!progressFill) return;
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
  }

  function startProgress() {
    if (!progressFill || !isPlaying) return;
    resetProgress();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progressFill.style.transition = `width ${HERO_SLIDE_DURATION}ms linear`;
        progressFill.style.width = '100%';
      });
    });
  }

  function updateSlideCta(slide) {
    if (!ctaPrimary || !slide) return;
    const link = slide.dataset.link || 'tours.html';
    const label = slide.dataset.cta || 'Explore Tours';
    ctaPrimary.href = link;
    ctaPrimary.textContent = label;
  }

  function scrollActiveTabIntoView(activeTab) {
    if (!tabsContainer || !activeTab) return;
    if (tabsContainer.scrollWidth <= tabsContainer.clientWidth) return;

    const tabLeft = activeTab.offsetLeft;
    const tabWidth = activeTab.offsetWidth;
    const targetLeft = tabLeft - (tabsContainer.clientWidth / 2) + (tabWidth / 2);
    tabsContainer.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: 'smooth'
    });
  }

  function syncUi(index) {
    if (counterCurrent) counterCurrent.textContent = padSlideNum(index);

    indicators.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
      btn.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });

    tabs.forEach((btn, i) => {
      const isActive = i === index;
      btn.classList.toggle('active', isActive);
      if (isActive) scrollActiveTabIntoView(btn);
    });

    updateSlideCta(slides[index]);
  }

  function goTo(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');

    if (bgLayer) {
      bgLayer.style.backgroundImage = `url('${slides[current].dataset.bg}')`;
      triggerKenBurns();
    }

    syncUi(current);
    startProgress();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function stopAutoPlay() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    resetProgress();
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (!isPlaying) return;
    startProgress();
    interval = setInterval(next, HERO_SLIDE_DURATION);
  }

  function resetAutoPlay() {
    startAutoPlay();
  }

  function setAutoplayState(playing) {
    isPlaying = playing;
    if (autoplayToggle) {
      autoplayToggle.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow');
      autoplayToggle.setAttribute('aria-pressed', playing ? 'false' : 'true');
      const icon = autoplayToggle.querySelector('.hero-autoplay-icon');
      if (icon) {
        icon.className = `hero-autoplay-icon ${playing ? 'hero-autoplay-pause' : 'hero-autoplay-play'}`;
      }
    }
    if (playing) startAutoPlay();
    else stopAutoPlay();
  }

  if (bgLayer && slides[0]) {
    bgLayer.style.backgroundImage = `url('${slides[0].dataset.bg}')`;
    triggerKenBurns();
  }

  syncUi(0);
  if (isPlaying) startAutoPlay();

  prevBtn?.addEventListener('click', () => { prev(); resetAutoPlay(); });
  nextBtn?.addEventListener('click', () => { next(); resetAutoPlay(); });

  indicators.forEach(btn => {
    btn.addEventListener('click', () => {
      goTo(parseInt(btn.dataset.index, 10));
      resetAutoPlay();
    });
  });

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      goTo(parseInt(btn.dataset.index, 10));
      resetAutoPlay();
    });
  });

  autoplayToggle?.addEventListener('click', () => {
    setAutoplayState(!isPlaying);
  });

  carousel.addEventListener('mouseenter', () => {
    if (!isPlaying) return;
    stopAutoPlay();
  });

  carousel.addEventListener('mouseleave', () => {
    if (isPlaying) startAutoPlay();
  });

  let touchStartX = 0;
  carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
      resetAutoPlay();
    }
  });

  document.addEventListener('keydown', e => {
    if (!carousel.matches(':hover') && document.activeElement?.closest('.hero-carousel') == null) return;
    if (e.key === 'ArrowLeft') { prev(); resetAutoPlay(); }
    if (e.key === 'ArrowRight') { next(); resetAutoPlay(); }
  });

  carousel._heroRefresh = () => {
    slides.forEach((slide, index) => {
      const label = slide.dataset.tab || `Slide ${index + 1}`;
      if (indicators[index]) indicators[index].setAttribute('aria-label', label);
      if (tabs[index]) {
        const num = tabs[index].querySelector('.hero-tour-tab-num');
        const labelEl = tabs[index].querySelector('.hero-tour-tab-label');
        const locEl = tabs[index].querySelector('.hero-tour-tab-loc');
        if (labelEl) labelEl.textContent = label;
        if (locEl) locEl.textContent = getHeroTabLocation(slides[index], index);
        if (num) num.textContent = String(index + 1).padStart(2, '0');
      }
    });
    updateSlideCta(slides[current]);
    const ctaBook = carousel.querySelector('.hero-slide-cta-book');
    if (ctaBook) ctaBook.textContent = t('hero.bookTour');
  };
}

function initHeaderLayout() {
  document.querySelectorAll('.header-inner').forEach(headerInner => {
    if (headerInner.dataset.layoutReady === 'true') return;

    let actions = headerInner.querySelector('.header-actions');
    if (!actions) {
      actions = document.createElement('div');
      actions.className = 'header-actions';
      headerInner.appendChild(actions);
    }

    const navExtra = headerInner.querySelector('.nav-extra');
    const navCta = headerInner.querySelector('.nav-cta');
    const hamburger = headerInner.querySelector('.hamburger');

    if (navExtra && navExtra.parentElement !== actions) actions.appendChild(navExtra);
    if (navCta && navCta.parentElement !== actions) actions.appendChild(navCta);

    const langSwitcher = headerInner.querySelector('.lang-switcher');
    if (langSwitcher && langSwitcher.parentElement !== actions) actions.appendChild(langSwitcher);

    if (hamburger && hamburger.parentElement !== actions) actions.appendChild(hamburger);

    headerInner.dataset.layoutReady = 'true';
  });
}

function initHeader() {
  initHeaderLayout();

  const header = document.querySelector('.header');
  if (!header) return;

  const hasHero = document.querySelector('.hero-carousel, .page-hero, .tour-detail-hero');
  if (!hasHero) header.classList.add('nav-solid');

  function updateHeaderScroll() {
    if (header.classList.contains('nav-solid')) {
      header.classList.add('scrolled');
      return;
    }
    header.classList.toggle('scrolled', window.scrollY > 50);
  }

  updateHeaderScroll();
  window.addEventListener('scroll', updateHeaderScroll);

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkPath = href.split('/').pop().split('#')[0] || '';
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.nav-pill').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkPath = href.split('/').pop().split('#')[0] || '';
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
}

function setMobileMenuOpen(isOpen) {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.classList.toggle('active', isOpen);
  mobileNav.classList.toggle('open', isOpen);
  document.body.classList.toggle('mobile-menu-open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

const MOBILE_NAV_ICONS = {
  home: '🏠',
  tours: '🧭',
  book: '📅',
  about: 'ℹ️',
  contact: '✉️'
};

function getMobileNavIcon(link) {
  const href = (link.getAttribute('href') || '').toLowerCase();
  const text = link.textContent.trim().toLowerCase();
  if (href.includes('index') && !href.includes('#')) return MOBILE_NAV_ICONS.home;
  if (href.includes('tours.html') || text === 'all tours') return MOBILE_NAV_ICONS.tours;
  if (href.includes('booking')) return MOBILE_NAV_ICONS.book;
  if (href.includes('about.html') || text === 'about') return MOBILE_NAV_ICONS.about;
  if (href.includes('contact.html') || text === 'contact') return MOBILE_NAV_ICONS.contact;
  if (href.includes('faq.html') || text === 'faq') return '?';
  if (href.includes('gallery.html') || text === 'gallery') return '+';
  return '•';
}

const NAV_ICON_FAQ = '<svg class="nav-pill-svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 0 1 4.5 1.2c0 1.8-2.5 1.8-2.5 3.3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1" fill="currentColor"/></svg>';
const NAV_ICON_GALLERY = '<svg class="nav-pill-svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="8.5" cy="8.5" r="1.75" fill="currentColor"/><path d="M21 15l-5-5L5 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

const NAV_ICON_BLOG = '<svg class="nav-pill-svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" d="M6 4h12v16H6z"/><path fill="none" stroke="currentColor" stroke-width="2" d="M9 8h6M9 12h6M9 16h4"/></svg>';
const NAV_ICON_SHUTTLE = '<svg class="nav-pill-svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>';

function getAirportShuttleWaUrl() {
  const msg = t('shuttle.waDefault');
  const text = msg !== 'shuttle.waDefault' ? msg : AIRPORT_SHUTTLE.waTextEn;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function refreshAirportShuttleUi() {
  document.querySelectorAll('[data-shuttle-wa]').forEach(el => {
    el.href = getAirportShuttleWaUrl();
  });
  document.querySelectorAll('[data-shuttle-price]').forEach(el => {
    const label = t('shuttle.priceFrom', { price: AIRPORT_SHUTTLE.priceFrom });
    if (label !== 'shuttle.priceFrom') el.textContent = label;
  });
  document.querySelectorAll('[data-shuttle-duration]').forEach(el => {
    const label = t('shuttle.routeDuration', { hours: AIRPORT_SHUTTLE.durationHours });
    if (label !== 'shuttle.routeDuration') el.textContent = label;
  });
}

function injectBookingShuttleBanner() {
  const container = document.querySelector('.booking-layout')?.parentElement;
  if (!container || container.querySelector('.booking-shuttle-banner')) return;
  const banner = document.createElement('aside');
  banner.className = 'booking-shuttle-banner fade-in';
  banner.innerHTML = `
    <div class="booking-shuttle-banner-icon" aria-hidden="true">✈</div>
    <div class="booking-shuttle-banner-text">
      <strong data-i18n="shuttle.bookingBanner">${t('shuttle.bookingBanner')}</strong>
      <p data-i18n="shuttle.bookingBannerDesc">${t('shuttle.bookingBannerDesc')}</p>
    </div>
    <a href="${ROOT_PATH}airport-shuttle.html" class="btn btn-ocean btn-sm" data-i18n="shuttle.bookingBannerCta">${t('shuttle.bookingBannerCta')}</a>
  `;
  container.insertBefore(banner, container.firstElementChild);
}

function initAirportShuttlePage() {
  injectAirportShuttleMeta();
  refreshAirportShuttleUi();
  const faqHost = document.getElementById('airport-shuttle-faq');
  if (faqHost) {
    faqHost.innerHTML = renderAirportShuttleFaqSection();
  }
  initScrollAnimations();
}

function renderAirportShuttleFaqSection() {
  return `
    <section class="tour-faq-section" aria-labelledby="shuttle-faq-heading">
      <h2 id="shuttle-faq-heading">${t('shuttle.faqTitle')}</h2>
      <p class="tour-faq-intro">${t('shuttle.faqIntro')}</p>
      <div class="tour-faq-list">
        ${AIRPORT_SHUTTLE_FAQ.map((item, i) => `
          <details class="faq-item tour-faq-item" ${i === 0 ? 'open' : ''}>
            <summary>${item.q}</summary>
            <div class="faq-answer"><p>${item.a}</p></div>
          </details>
        `).join('')}
      </div>
      <p class="tour-faq-more"><a href="${ROOT_PATH}faq.html">${t('tourUi.moreFaq')}</a></p>
    </section>
  `;
}

function injectAirportShuttleMeta() {
  const pageMeta = PAGE_SEO['airport-shuttle.html'];
  if (!pageMeta) return;

  const canonicalPath = '/airport-shuttle.html';
  const pageUrl = getCanonicalUrl(canonicalPath);
  const images = AIRPORT_SHUTTLE_IMAGES.map(src => `${SITE_URL}/${src.replace(/^\//, '')}`);
  const primaryImage = images[0];
  const staticTypes = getStaticJsonLdTypes();

  injectBusinessSchemas(staticTypes);

  applyPageMeta({
    ...pageMeta,
    image: primaryImage,
    imageAlt: pageMeta.imageAlt || 'Airport shuttle from Colombo (CMB) to Mirissa',
    type: 'website'
  }, canonicalPath);

  if (!staticTypes.has('WebPage')) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageMeta.title,
      description: pageMeta.description,
      url: pageUrl,
      inLanguage: 'en',
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL }
    });
  }

  if (!staticTypes.has('BreadcrumbList')) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Airport Shuttle', item: pageUrl }
      ]
    });
  }

  if (!staticTypes.has('Service')) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Airport Shuttle — Colombo (CMB) to Mirissa',
      description: pageMeta.description,
      url: pageUrl,
      image: images,
      serviceType: 'Airport Transfer',
      audience: {
        '@type': 'Audience',
        audienceType: 'International travelers',
        geographicArea: { '@type': 'Country', name: 'Sri Lanka' }
      },
      provider: {
        '@type': 'TravelAgency',
        name: SITE_NAME,
        url: SITE_URL,
        telephone: '+94787097430',
        email: COMPANY_EMAIL
      },
      areaServed: [
        { '@type': 'Airport', name: 'Bandaranaike International Airport', iataCode: 'CMB' },
        { '@type': 'City', name: 'Mirissa' }
      ],
      offers: {
        '@type': 'Offer',
        url: pageUrl,
        priceCurrency: 'USD',
        price: String(AIRPORT_SHUTTLE.priceFrom),
        priceValidUntil: getOfferPriceValidUntil(),
        availability: 'https://schema.org/InStock',
        description: `Private AC vehicle — up to ${AIRPORT_SHUTTLE.maxGuests} guests`,
        seller: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5'
      }
    });
  }

  if (!staticTypes.has('FAQPage')) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: AIRPORT_SHUTTLE_FAQ.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    });
  }
}

function injectNavExtras() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const faqHref = `${ROOT_PATH}faq.html`;
  const galleryHref = `${ROOT_PATH}gallery.html`;
  const blogHref = `${ROOT_PATH}blog.html`;
  const shuttleHref = `${ROOT_PATH}airport-shuttle.html`;

  document.querySelectorAll('header .nav').forEach(nav => {
    if (nav.querySelector('.nav-extra')) return;

    const extra = document.createElement('div');
    extra.className = 'nav-extra';
    extra.innerHTML = `
      <a href="${shuttleHref}" class="nav-pill nav-pill-shuttle${currentPath === 'airport-shuttle.html' ? ' active' : ''}">
        ${NAV_ICON_SHUTTLE}
        <span data-i18n="nav.airportShuttle">Airport Shuttle</span>
      </a>
      <a href="${blogHref}" class="nav-pill nav-pill-blog${currentPath === 'blog.html' ? ' active' : ''}">
        ${NAV_ICON_BLOG}
        <span data-i18n="nav.blog">Blog</span>
      </a>
      <a href="${faqHref}" class="nav-pill nav-pill-faq${currentPath === 'faq.html' ? ' active' : ''}">
        ${NAV_ICON_FAQ}
        <span data-i18n="nav.faq">FAQ</span>
      </a>
      <a href="${galleryHref}" class="nav-pill nav-pill-gallery${currentPath === 'gallery.html' ? ' active' : ''}">
        ${NAV_ICON_GALLERY}
        <span data-i18n="nav.gallery">Gallery</span>
      </a>
    `;
    nav.appendChild(extra);
  });

  const mobileNav = document.querySelector('.mobile-nav');
  if (mobileNav) {
    const ctaBtn = mobileNav.querySelector('.btn.btn-primary');

    if (!mobileNav.querySelector('.nav-extra-link-shuttle')) {
      const shuttleLink = document.createElement('a');
      shuttleLink.href = shuttleHref;
      shuttleLink.className = 'nav-link nav-extra-link nav-extra-link-shuttle';
      shuttleLink.innerHTML = `${NAV_ICON_SHUTTLE}<span data-i18n="nav.airportShuttle">Airport Shuttle</span>`;
      if (currentPath === 'airport-shuttle.html') shuttleLink.classList.add('active');
      mobileNav.insertBefore(shuttleLink, ctaBtn);
    }

    if (!mobileNav.querySelector('.nav-extra-link-blog')) {
      const blogLink = document.createElement('a');
      blogLink.href = blogHref;
      blogLink.className = 'nav-link nav-extra-link nav-extra-link-blog';
      blogLink.innerHTML = `${NAV_ICON_BLOG}<span data-i18n="nav.blog">Blog</span>`;
      if (currentPath === 'blog.html') blogLink.classList.add('active');
      mobileNav.insertBefore(blogLink, ctaBtn);
    }

    if (!mobileNav.querySelector('.nav-extra-link-gallery')) {
      const galleryLink = document.createElement('a');
      galleryLink.href = galleryHref;
      galleryLink.className = 'nav-link nav-extra-link nav-extra-link-gallery';
      galleryLink.innerHTML = `${NAV_ICON_GALLERY}<span data-i18n="nav.gallery">Gallery</span>`;
      if (currentPath === 'gallery.html') galleryLink.classList.add('active');
      mobileNav.insertBefore(galleryLink, ctaBtn);
    }

    if (!mobileNav.querySelector('.nav-extra-link-faq')) {
      const faqLink = document.createElement('a');
      faqLink.href = faqHref;
      faqLink.className = 'nav-link nav-extra-link nav-extra-link-faq';
      faqLink.innerHTML = `${NAV_ICON_FAQ}<span data-i18n="nav.faq">FAQ</span>`;
      if (currentPath === 'faq.html') faqLink.classList.add('active');
      mobileNav.insertBefore(faqLink, ctaBtn);
    }
  }
}

function buildGetYourGuideBadgesHtml(compact) {
  const badges = GETYOURGUIDE_BADGES.map(badge => `
    <a href="${GETYOURGUIDE_SUPPLIER_URL}" class="gyg-badge-link" target="_blank" rel="noopener noreferrer" title="Book Sea &amp; Safari Tours on GetYourGuide">
      <img src="${badge.src}" class="gyg-badge-img" width="160" height="auto" alt="${badge.alt}" loading="lazy">
    </a>
  `).join('');

  if (compact) {
    return `<div class="gyg-badges gyg-badges-compact">${badges}</div>`;
  }

  return `
    <div class="gyg-badges">
      <p class="gyg-badges-label">Official partner on <a href="${GETYOURGUIDE_MIRISSA_URL}" target="_blank" rel="noopener noreferrer">GetYourGuide</a></p>
      <div class="gyg-badges-row">${badges}</div>
    </div>
  `;
}

function injectGetYourGuideBadges() {
  document.querySelectorAll('.footer-brand').forEach(brand => {
    if (brand.querySelector('.gyg-badges')) return;
    brand.insertAdjacentHTML('beforeend', buildGetYourGuideBadgesHtml(false));
  });

  const trustBar = document.querySelector('.reviews-trust-bar');
  if (trustBar && !trustBar.querySelector('.gyg-badges-compact')) {
    trustBar.insertAdjacentHTML('beforeend', buildGetYourGuideBadgesHtml(true));
  }

  const bookingSidebar = document.querySelector('.summary-card');
  if (bookingSidebar && !bookingSidebar.querySelector('.gyg-badges-compact')) {
    bookingSidebar.insertAdjacentHTML('beforeend', `
      <div class="gyg-booking-badges">
        <p class="gyg-booking-label">Also book on GetYourGuide</p>
        ${buildGetYourGuideBadgesHtml(true)}
      </div>
    `);
  }
}

function enhanceMobileNavLink(link, isTour) {
  if (link.querySelector('.mobile-nav-text')) return;

  if (!isTour) {
    const icon = document.createElement('span');
    icon.className = 'mobile-nav-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = getMobileNavIcon(link);

    const text = document.createElement('span');
    text.className = 'mobile-nav-text';
    text.textContent = link.textContent.trim();

    link.textContent = '';
    link.append(icon, text);
  }
}

function buildMobileTourNavLink(tourId) {
  const tour = getLocalizedTour(tourId);
  if (!tour) return null;
  const link = document.createElement('a');
  link.href = `${TOURS_PATH}${tourId}.html`;
  link.className = 'nav-link nav-sub mobile-nav-tour-link';
  link.dataset.tourId = tourId;
  link.innerHTML = `
    <span class="mobile-nav-tour-name">${tour.name}</span>
    <span class="mobile-nav-tour-price">$${tour.price}</span>
  `;
  return link;
}

function buildMobileComboNavLink(combo) {
  const localized = getLocalizedCombo(combo.id);
  const savings = combo.originalPrice - combo.price;
  const link = document.createElement('a');
  link.href = `${COMBOS_PATH}${combo.id}.html`;
  link.className = 'nav-link nav-sub mobile-nav-combo-link';
  link.dataset.comboId = combo.id;
  link.innerHTML = `
    <span class="mobile-nav-combo-name">${getComboDropdownLabel(combo)}</span>
    <span class="mobile-nav-combo-meta">
      <span class="mobile-nav-combo-save">${t('common.save')} $${savings}</span>
      <span class="mobile-nav-combo-price">$${localized.price}</span>
    </span>
  `;
  return link;
}

function buildMobileNavStructure() {
  const mobileNav = document.querySelector('.mobile-nav');
  if (!mobileNav || mobileNav.dataset.navBuilt === '2') return;

  const links = [...mobileNav.querySelectorAll(':scope > .nav-link, :scope > .btn.btn-primary')];
  if (!links.length) return;

  mobileNav.querySelectorAll(':scope > .nav-sub').forEach(link => link.remove());

  const mainLinks = links.filter(l => {
    if (l.classList.contains('nav-sub') || l.classList.contains('btn') || l.classList.contains('nav-extra-link')) return false;
    const href = l.getAttribute('href') || '';
    return !href.includes('tours.html');
  });
  const extraLinks = links.filter(l => l.classList.contains('nav-extra-link'));
  const ctaBtn = links.find(l => l.classList.contains('btn'));

  const panel = document.createElement('div');
  panel.className = 'mobile-nav-panel';

  const navHeader = document.createElement('div');
  navHeader.className = 'mobile-nav-header';

  const headerLogo = document.querySelector('.header .logo');
  if (headerLogo) {
    const brand = headerLogo.cloneNode(true);
    brand.classList.add('mobile-nav-brand');
    brand.addEventListener('click', () => setMobileMenuOpen(false));
    navHeader.appendChild(brand);
  }

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'mobile-nav-close';
  closeBtn.setAttribute('aria-label', 'Close menu');
  navHeader.appendChild(closeBtn);

  const scroll = document.createElement('div');
  scroll.className = 'mobile-nav-scroll';

  const menuSection = document.createElement('div');
  menuSection.className = 'mobile-nav-section';
  menuSection.innerHTML = `<p class="mobile-nav-label" data-i18n="nav.menu">Menu</p>`;
  const mainList = document.createElement('div');
  mainList.className = 'mobile-nav-list';
  mainLinks.forEach(link => {
    enhanceMobileNavLink(link, false);
    mainList.appendChild(link);
  });
  menuSection.appendChild(mainList);
  scroll.appendChild(menuSection);

  const toursSection = document.createElement('div');
  toursSection.className = 'mobile-nav-section mobile-nav-tours-section';
  toursSection.innerHTML = `<p class="mobile-nav-label mobile-nav-label-primary" data-i18n="nav.individualTours">Individual Tours</p>`;
  const toursList = document.createElement('div');
  toursList.className = 'mobile-nav-tours mobile-nav-tours-grid';
  Object.keys(TOURS).forEach(tourId => {
    const link = buildMobileTourNavLink(tourId);
    if (link) toursList.appendChild(link);
  });

  const viewAllTours = document.createElement('a');
  viewAllTours.href = `${ROOT_PATH}tours.html`;
  viewAllTours.className = 'mobile-nav-view-all mobile-nav-view-all-tours';
  viewAllTours.innerHTML = `<span data-i18n="nav.viewAllTours">View All Tours</span> <span class="link-arrow" aria-hidden="true">&rarr;</span>`;
  toursSection.append(toursList, viewAllTours);
  scroll.appendChild(toursSection);

  const combosSection = document.createElement('div');
  combosSection.className = 'mobile-nav-section mobile-nav-combos';
  combosSection.innerHTML = `<p class="mobile-nav-label" data-i18n="nav.comboTours">Combo Packages</p>`;
  const combosList = document.createElement('div');
  combosList.className = 'mobile-nav-tours';
  COMBO_PACKAGES.forEach(combo => {
    combosList.appendChild(buildMobileComboNavLink(combo));
  });
  const viewAllCombos = document.createElement('a');
  viewAllCombos.href = `${ROOT_PATH}combos.html`;
  viewAllCombos.className = 'mobile-nav-view-all mobile-nav-view-all-combos';
  viewAllCombos.innerHTML = `<span data-i18n="nav.viewAllCombos">View All Combos</span> <span class="link-arrow" aria-hidden="true">&rarr;</span>`;
  combosSection.append(combosList, viewAllCombos);
  scroll.appendChild(combosSection);

  if (extraLinks.length) {
    const discoverSection = document.createElement('div');
    discoverSection.className = 'mobile-nav-section mobile-nav-discover';
    discoverSection.innerHTML = '<p class="mobile-nav-label" data-i18n="nav.discover">Discover</p>';
    const discoverGrid = document.createElement('div');
    discoverGrid.className = 'mobile-nav-discover-grid';
    extraLinks.forEach(link => {
      link.classList.add('nav-pill-mobile');
      discoverGrid.appendChild(link);
    });
    discoverSection.appendChild(discoverGrid);
    scroll.appendChild(discoverSection);
  }

  panel.append(navHeader, scroll);

  const footer = document.createElement('div');
  footer.className = 'mobile-nav-footer';
  if (ctaBtn) footer.appendChild(ctaBtn);

  const waLink = document.createElement('a');
  waLink.href = `https://wa.me/${WHATSAPP_NUMBER}`;
  waLink.className = 'mobile-nav-wa';
  waLink.target = '_blank';
  waLink.rel = 'noopener noreferrer';
  waLink.innerHTML = '<span class="mobile-nav-wa-icon" aria-hidden="true"></span> <span data-i18n="common.chatWhatsApp">Chat on WhatsApp</span>';
  footer.appendChild(waLink);

  panel.appendChild(footer);
  mobileNav.appendChild(panel);
  mobileNav.dataset.navBuilt = '2';
}

function refreshMobileNavToursCombos() {
  document.querySelectorAll('.mobile-nav-tour-link').forEach(link => {
    const tour = getLocalizedTour(link.dataset.tourId);
    if (!tour) return;
    const nameEl = link.querySelector('.mobile-nav-tour-name');
    const priceEl = link.querySelector('.mobile-nav-tour-price');
    if (nameEl) nameEl.textContent = tour.name;
    if (priceEl) priceEl.textContent = `$${tour.price}`;
  });

  document.querySelectorAll('.mobile-nav-combo-link').forEach(link => {
    const combo = COMBO_PACKAGES.find(c => c.id === link.dataset.comboId);
    if (!combo) return;
    const localized = getLocalizedCombo(combo.id);
    const nameEl = link.querySelector('.mobile-nav-combo-name');
    const saveEl = link.querySelector('.mobile-nav-combo-save');
    const priceEl = link.querySelector('.mobile-nav-combo-price');
    if (nameEl) nameEl.textContent = getComboDropdownLabel(combo);
    if (saveEl) saveEl.textContent = `${t('common.save')} $${combo.originalPrice - combo.price}`;
    if (priceEl) priceEl.textContent = `$${localized.price}`;
  });

  const toursLabel = document.querySelector('.mobile-nav-tours-section .mobile-nav-label');
  if (toursLabel) toursLabel.textContent = t('nav.individualTours');

  const comboLabel = document.querySelector('.mobile-nav-combos > .mobile-nav-label');
  if (comboLabel) comboLabel.textContent = t('nav.comboTours');
}

function initMobileNav() {
  buildMobileNavStructure();

  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    setMobileMenuOpen(!mobileNav.classList.contains('open'));
  });

  mobileNav.querySelector('.mobile-nav-close')?.addEventListener('click', () => {
    setMobileMenuOpen(false);
  });

  mobileNav.addEventListener('click', e => {
    if (e.target === mobileNav) setMobileMenuOpen(false);
  });

  mobileNav.querySelectorAll('.nav-link, .btn, .mobile-nav-view-all, .mobile-nav-wa').forEach(link => {
    link.addEventListener('click', () => setMobileMenuOpen(false));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      setMobileMenuOpen(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
      setMobileMenuOpen(false);
    }
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.fade-in, .tour-card').forEach(el => observer.observe(el));
}

function initFloatingWhatsApp() {
  const btn = document.querySelector('.floating-whatsapp');
  if (!btn) return;

  if (!btn.closest('.floating-wa-wrap')) {
    const wrap = document.createElement('div');
    wrap.className = 'floating-wa-wrap';
    btn.parentNode.insertBefore(wrap, btn);
    wrap.appendChild(btn);

    const badge = document.createElement('span');
    badge.className = 'wa-online-badge';
    badge.setAttribute('aria-hidden', 'true');
    wrap.insertBefore(badge, btn);
    updateOnlineBadge(badge);
    setInterval(() => updateOnlineBadge(badge), 60000);
  }

  btn.addEventListener('click', e => {
    e.preventDefault();
    const message = encodeURIComponent('Hello Sea & Safari Tours! I would like to inquire about your tours.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  });
}

function initScrollToTop() {
  if (document.querySelector('.scroll-to-top')) return;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'scroll-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<svg class="scroll-to-top-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 4l-7 7h4v9h6v-9h4z"/></svg>';
  document.body.appendChild(btn);

  const toggle = () => {
    btn.classList.toggle('is-visible', window.scrollY > 400);
  };

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}

function isWithinOfficeHours() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const slTime = new Date(utc + 5.5 * 3600000);
  const hour = slTime.getHours();
  return hour >= OFFICE_HOURS.start && hour < OFFICE_HOURS.end;
}

function updateOnlineBadge(badge) {
  if (!badge) return;
  if (isWithinOfficeHours()) {
    badge.textContent = 'Online now';
    badge.classList.add('is-online');
    badge.classList.remove('is-offline');
  } else {
    badge.textContent = 'We reply fast';
    badge.classList.add('is-offline');
    badge.classList.remove('is-online');
  }
}

function getGoogleBusinessProfileUrl() {
  return SEO_CONFIG.googleBusinessProfileUrl
    || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE_NAME} ${SITE_LOCATION}`)}`;
}

function getGoogleReviewWriteUrl() {
  return SEO_CONFIG.googleBusinessReviewUrl || GOOGLE_REVIEW_URL;
}

function getGoogleReviewsBrowseUrl() {
  return SEO_CONFIG.googleBusinessProfileUrl || GOOGLE_REVIEW_URL;
}

function getOfferPriceValidUntil() {
  return `${new Date().getFullYear()}-12-31`;
}

function getSeasonDateWindow(season) {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  const inSeason = m >= (season.monthStart - 1) || m <= (season.monthEnd - 1);
  const startY = inSeason && m <= (season.monthEnd - 1) ? y - 1 : y;
  const pad = n => String(n).padStart(2, '0');
  return {
    startDate: `${startY}-${pad(season.monthStart)}-${pad(season.dayStart)}`,
    endDate: `${startY + 1}-${pad(season.monthEnd)}-${pad(season.dayEnd)}`
  };
}

function buildTourOfferSchema(tour, pageUrl) {
  return {
    '@type': 'Offer',
    url: pageUrl,
    priceCurrency: 'USD',
    price: String(tour.price),
    priceValidUntil: getOfferPriceValidUntil(),
    availability: 'https://schema.org/InStock',
    validFrom: new Date().toISOString().split('T')[0],
    seller: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    eligibleRegion: { '@type': 'Country', name: 'Sri Lanka' },
    ...(tour.priceNote ? { description: tour.priceNote } : {})
  };
}

function buildProductReviewSchemas(tourId) {
  const reviews = SITE_REVIEWS.filter(r => r.tourId === tourId);
  return reviews.map(r => ({
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
    author: { '@type': 'Person', name: r.author },
    reviewBody: r.body,
    datePublished: r.date
  }));
}

function buildSeasonalEventSchema(tour) {
  const season = TOUR_SEASONS[tour.id];
  if (!season) return null;
  const { startDate, endDate } = getSeasonDateWindow(season);
  const pageUrl = getCanonicalUrl(`/tours/${tour.id}.html`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: season.name,
    description: season.description,
    startDate,
    endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: season.locationName || tour.location || SITE_LOCATION,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SEO_DEFAULTS.business.locality,
        addressRegion: SEO_DEFAULTS.business.region,
        addressCountry: 'LK'
      }
    },
    image: `${SITE_URL}/${tour.heroImage || tour.image}`,
    offers: buildTourOfferSchema(tour, pageUrl),
    organizer: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }
  };
}

function injectSiteVerification() {
  if (SEO_CONFIG.googleSiteVerification) {
    setMetaTag('name', 'google-site-verification', SEO_CONFIG.googleSiteVerification);
  }
  if (SEO_CONFIG.bingSiteVerification) {
    setMetaTag('name', 'msvalidate.01', SEO_CONFIG.bingSiteVerification);
  }
}

function initBusinessReviewLinks() {
  document.querySelectorAll('[data-review-link="google"]').forEach(el => {
    el.href = getGoogleReviewsBrowseUrl();
  });
  document.querySelectorAll('[data-review-link="write"]').forEach(el => {
    el.href = getGoogleReviewWriteUrl();
  });
  document.querySelectorAll('[data-gbp-link]').forEach(el => {
    el.href = getGoogleBusinessProfileUrl();
  });
}

function renderTourFaqSection(tourId) {
  const items = TOUR_FAQ[tourId];
  if (!items?.length) return '';
  return `
    <section class="tour-faq-section" aria-labelledby="tour-faq-heading">
      <h2 id="tour-faq-heading">${t('tourUi.faqTitle')}</h2>
      <p class="tour-faq-intro">${t('tourUi.faqIntro')}</p>
      <div class="tour-faq-list">
        ${items.map((item, i) => `
          <details class="faq-item tour-faq-item" ${i === 0 ? 'open' : ''}>
            <summary>${item.q}</summary>
            <div class="faq-answer"><p>${item.a}</p></div>
          </details>
        `).join('')}
      </div>
      <p class="tour-faq-more"><a href="${ROOT_PATH}faq.html">${t('tourUi.moreFaq')}</a></p>
    </section>
  `;
}

function renderRelatedToursSection(tourId) {
  const relatedIds = TOUR_RELATED[tourId] || Object.keys(TOURS).filter(id => id !== tourId).slice(0, 3);
  const cards = relatedIds
    .filter(id => TOURS[id])
    .map((id, i) => createTourCard(TOURS[id], i))
    .join('');
  if (!cards) return '';
  return `
    <section class="tour-related-section" aria-labelledby="tour-related-heading">
      <div class="tour-related-header">
        <span class="section-label">${t('tourUi.relatedLabel')}</span>
        <h2 id="tour-related-heading">${t('tourUi.relatedTitle')}</h2>
        <p class="section-desc">${t('tourUi.relatedDesc')}</p>
      </div>
      <div class="tours-grid tour-related-grid">${cards}</div>
    </section>
  `;
}

function renderSidebarReviewCta() {
  return `
    <div class="sidebar-review-cta">
      <a href="${getGoogleReviewWriteUrl()}" class="btn btn-outline btn-block btn-sm" data-review-link="write" target="_blank" rel="noopener">${t('common.leaveReview')}</a>
      <a href="${getGoogleBusinessProfileUrl()}" class="btn btn-outline btn-block btn-sm" data-gbp-link target="_blank" rel="noopener">${t('common.googleBusiness')}</a>
    </div>
  `;
}

function initAnalytics() {
  if (!GOOGLE_GA_ID) return;
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GOOGLE_GA_ID}"]`)) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_GA_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GOOGLE_GA_ID);
}

function setMetaTag(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel, href, extra = {}) {
  if (!href) return;
  let el;
  if (extra.hreflang) {
    el = document.querySelector(`link[rel="${rel}"][hreflang="${extra.hreflang}"]`);
  } else {
    el = document.querySelector(`link[rel="${rel}"]:not([hreflang])`);
  }
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    if (extra.hreflang) el.hreflang = extra.hreflang;
    document.head.appendChild(el);
  }
  el.href = href;
}

function getCurrentPageFile() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

function getCanonicalUrl(customPath) {
  if (customPath) return `${SITE_URL}${customPath.startsWith('/') ? customPath : `/${customPath}`}`;
  const parts = window.location.pathname.split('/').filter(Boolean);
  const file = parts.pop() || 'index.html';
  if (file === 'index.html' && parts.length === 0) return `${SITE_URL}/`;
  if (parts[parts.length - 1] === 'tours') return `${SITE_URL}/tours/${file}`;
  if (parts[parts.length - 1] === 'blog') return `${SITE_URL}/blog/${file}`;
  if (parts[parts.length - 1] === 'combos') return `${SITE_URL}/combos/${file}`;
  return `${SITE_URL}/${file}`;
}

function injectJsonLd(data) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function applyPageMeta(meta, canonicalPath) {
  if (!meta) return;

  const url = getCanonicalUrl(canonicalPath || meta.path);
  const image = meta.image || `${SITE_URL}/assets/images/logo.png`;
  const robots = meta.robots || SEO_DEFAULTS.robots;
  const isNoIndex = robots.includes('noindex');
  const googlebot = meta.googlebot || (isNoIndex ? robots : SEO_DEFAULTS.googlebot);
  const otherBots = isNoIndex ? robots : SEO_DEFAULTS.googlebot;
  const pageName = meta.dcTitle || meta.title;

  document.title = meta.title;
  setMetaTag('name', 'description', meta.description);
  if (meta.keywords) setMetaTag('name', 'keywords', meta.keywords);
  setMetaTag('name', 'author', SEO_DEFAULTS.author);
  setMetaTag('name', 'copyright', SEO_DEFAULTS.copyright);
  setMetaTag('name', 'robots', robots);
  setMetaTag('name', 'googlebot', googlebot);
  setMetaTag('name', 'bingbot', otherBots);
  setMetaTag('name', 'slurp', otherBots);
  setMetaTag('name', 'referrer', SEO_DEFAULTS.referrer);
  setMetaTag('name', 'geo.region', SEO_DEFAULTS.geo.region);
  setMetaTag('name', 'geo.placename', SEO_DEFAULTS.geo.placename);
  setMetaTag('name', 'geo.position', SEO_DEFAULTS.geo.position);
  setMetaTag('name', 'ICBM', SEO_DEFAULTS.geo.icbm);
  setMetaTag('name', 'theme-color', SEO_DEFAULTS.themeColor);
  setMetaTag('name', 'apple-mobile-web-app-capable', 'yes');
  setMetaTag('name', 'mobile-web-app-capable', 'yes');
  setMetaTag('name', 'apple-mobile-web-app-status-bar-style', 'black-translucent');
  setMetaTag('name', 'apple-mobile-web-app-title', SITE_NAME);
  setMetaTag('name', 'application-name', SITE_NAME);

  setMetaTag('name', 'DC.title', pageName);
  setMetaTag('name', 'DC.creator', SEO_DEFAULTS.author);
  setMetaTag('name', 'DC.subject', meta.dcSubject || meta.keywords || SITE_NAME);
  setMetaTag('name', 'DC.description', meta.description);
  setMetaTag('name', 'DC.publisher', SEO_DEFAULTS.dc.publisher);
  setMetaTag('name', 'DC.contributor', SEO_DEFAULTS.dc.contributor);
  setMetaTag('name', 'DC.date', new Date().toISOString().split('T')[0]);
  setMetaTag('name', 'DC.type', SEO_DEFAULTS.dc.type);
  setMetaTag('name', 'DC.format', SEO_DEFAULTS.dc.format);
  setMetaTag('name', 'DC.identifier', url);
  setMetaTag('name', 'DC.language', SEO_DEFAULTS.dc.language);
  setMetaTag('name', 'DC.coverage', SEO_DEFAULTS.dc.coverage);
  setMetaTag('name', 'DC.rights', SEO_DEFAULTS.dc.rights);

  setLinkTag('canonical', url);
  setLinkTag('alternate', url, { hreflang: 'en' });
  setLinkTag('alternate', url, { hreflang: 'de' });
  setLinkTag('alternate', url, { hreflang: 'fr' });
  setLinkTag('alternate', url, { hreflang: 'x-default' });
  setLinkTag('icon', `${SITE_URL}/assets/images/logo.png`);
  setLinkTag('apple-touch-icon', `${SITE_URL}/assets/images/logo.png`);

  let sitemap = document.querySelector('link[rel="sitemap"]');
  if (!sitemap) {
    sitemap = document.createElement('link');
    sitemap.rel = 'sitemap';
    document.head.appendChild(sitemap);
  }
  sitemap.type = 'application/xml';
  sitemap.title = 'Sitemap';
  sitemap.href = `${SITE_URL}/sitemap.xml`;

  let imageSitemap = document.querySelector('link[rel="sitemap"][title="Image Sitemap"]');
  if (!imageSitemap) {
    imageSitemap = document.createElement('link');
    imageSitemap.rel = 'sitemap';
    imageSitemap.title = 'Image Sitemap';
    document.head.appendChild(imageSitemap);
  }
  imageSitemap.type = 'application/xml';
  imageSitemap.href = `${SITE_URL}/sitemap-images.xml`;

  setMetaTag('property', 'og:type', meta.type || 'website');
  setMetaTag('property', 'og:site_name', SITE_NAME);
  setMetaTag('property', 'og:locale', SITE_LOCALE);
  setMetaTag('property', 'og:locale:alternate', 'en_GB');
  setMetaTag('property', 'og:title', meta.title);
  setMetaTag('property', 'og:description', meta.description);
  setMetaTag('property', 'og:image', image);
  setMetaTag('property', 'og:image:alt', meta.imageAlt || meta.title);
  setMetaTag('property', 'og:image:width', '1200');
  setMetaTag('property', 'og:image:height', '630');
  setMetaTag('property', 'og:url', url);

  if (meta.type === 'article' && meta.publishedTime) {
    setMetaTag('property', 'article:published_time', meta.publishedTime);
    setMetaTag('property', 'article:modified_time', meta.modifiedTime || meta.publishedTime);
    setMetaTag('property', 'article:author', SEO_DEFAULTS.author);
    setMetaTag('property', 'article:section', meta.section || 'Travel');
  }

  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', meta.title);
  setMetaTag('name', 'twitter:description', meta.description);
  setMetaTag('name', 'twitter:image', image);
  setMetaTag('name', 'twitter:image:alt', meta.imageAlt || meta.title);
  if (TWITTER_HANDLE) {
    setMetaTag('name', 'twitter:site', TWITTER_HANDLE);
    setMetaTag('name', 'twitter:creator', TWITTER_HANDLE);
  }

  injectSiteVerification();
}

function initBlogPostSeo(postId) {
  const base = BLOG_POSTS.find(p => p.id === postId);
  if (!base) return;

  const post = getLocalizedBlogPost(base);
  const path = `/blog/${post.id}.html`;
  const image = `${SITE_URL}/${base.image.replace(/^\//, '')}`;
  const title = `${post.title} | Sea & Safari Tours Mirissa Blog`;

  applyPageMeta({
    title,
    description: post.description || post.excerpt,
    keywords: `${post.categoryLabel}, mirissa travel guide, sri lanka tours, ${post.title.toLowerCase()}`,
    image,
    imageAlt: post.title,
    path,
    type: 'article',
    publishedTime: `${base.date}T08:00:00+05:30`,
    modifiedTime: `${base.date}T08:00:00+05:30`,
    section: post.categoryLabel
  }, path);

  const staticTypes = getStaticJsonLdTypes();
  const url = getCanonicalUrl(path);

  if (!staticTypes.has('BreadcrumbList')) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog.html` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url }
      ]
    });
  }

  if (!staticTypes.has('WebPage')) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url,
      inLanguage: 'en',
      isPartOf: { '@type': 'Blog', name: 'Sea & Safari Tours Mirissa Travel Blog', url: `${SITE_URL}/blog.html` }
    });
  }
}

function initSeo() {
  const page = getCurrentPageFile();
  const inToursDir = window.location.pathname.includes('/tours/');
  const inCombosDir = window.location.pathname.includes('/combos/');
  const tourId = document.getElementById('tour-detail-content')?.dataset.tourId;
  const comboId = document.getElementById('combo-detail-content')?.dataset.comboId;
  const blogPostId = document.body.dataset.blogPost;

  if (inToursDir && tourId) {
    return;
  }

  if (inCombosDir && comboId) {
    return;
  }

  if (blogPostId) {
    initBlogPostSeo(blogPostId);
    return;
  }

  if (page === 'airport-shuttle.html') {
    return;
  }

  applyPageMeta(PAGE_SEO[page], PAGE_SEO[page]?.path);
  initGlobalStructuredData(page);
}

function getStaticJsonLdTypes() {
  const types = new Set();
  document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
    try {
      const data = JSON.parse(script.textContent);
      if (data['@type']) types.add(data['@type']);
    } catch (_) { /* ignore invalid JSON-LD blocks */ }
  });
  return types;
}

function injectBusinessSchemas(skipTypes = new Set()) {
  if (!skipTypes.has('TravelAgency')) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: SITE_NAME,
      alternateName: SITE_ALTERNATE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/images/logo.png`,
      image: `${SITE_URL}/${WHALE_BLUE_IMG}`,
      telephone: '+94787097430',
      email: COMPANY_EMAIL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SEO_DEFAULTS.business.streetAddress,
        addressLocality: SEO_DEFAULTS.business.locality,
        addressRegion: SEO_DEFAULTS.business.region,
        postalCode: SEO_DEFAULTS.business.postalCode,
        addressCountry: SEO_DEFAULTS.business.country
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 5.9483,
        longitude: 80.4719
      },
      areaServed: {
        '@type': 'City',
        name: 'Mirissa'
      },
      sameAs: [
        GETYOURGUIDE_MIRISSA_URL,
        GETYOURGUIDE_SUPPLIER_URL,
        getGoogleBusinessProfileUrl(),
        getGoogleReviewsBrowseUrl()
      ].filter(Boolean),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5'
      },
      priceRange: '$$'
    });
  }

  if (!skipTypes.has('LocalBusiness')) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      alternateName: SITE_ALTERNATE_NAME,
      image: `${SITE_URL}/assets/images/logo.png`,
      url: SITE_URL,
      telephone: '+94787097430',
      email: COMPANY_EMAIL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SEO_DEFAULTS.business.streetAddress,
        addressLocality: SEO_DEFAULTS.business.locality,
        addressRegion: SEO_DEFAULTS.business.region,
        postalCode: SEO_DEFAULTS.business.postalCode,
        addressCountry: SEO_DEFAULTS.business.country
      }
    });
  }
}

function initGlobalStructuredData(page) {
  const staticTypes = getStaticJsonLdTypes();
  const pageMeta = PAGE_SEO[page];
  const pageUrl = pageMeta ? getCanonicalUrl(pageMeta.path) : getCanonicalUrl();

  injectBusinessSchemas(staticTypes);

  if (pageMeta && !staticTypes.has('WebPage')) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageMeta.title,
      description: pageMeta.description,
      url: pageUrl,
      inLanguage: 'en',
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL
      }
    });
  }

  if (page === 'index.html' && !staticTypes.has('WebSite')) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      alternateName: SITE_ALTERNATE_NAME,
      url: SITE_URL,
      inLanguage: 'en',
      publisher: { '@type': 'Organization', name: SITE_NAME, logo: `${SITE_URL}/assets/images/logo.png` },
      potentialAction: {
        '@type': 'ReserveAction',
        target: `${SITE_URL}/booking.html`,
        name: 'Book a Mirissa Tour'
      }
    });
  }

  if (page === 'index.html') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Featured Mirissa Tours',
      itemListElement: Object.values(TOURS).slice(0, 4).map((tour, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: tour.name,
        url: `${SITE_URL}/tours/${tour.id}.html`
      }))
    });
  }

  if (page === 'tours.html') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mirissa Tours by Sea & Safari Tours',
      itemListElement: Object.values(TOURS).map((tour, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: tour.name,
        url: `${SITE_URL}/tours/${tour.id}.html`
      }))
    });
  }

  if (page === 'combos.html') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mirissa Combo Tour Packages',
      itemListElement: COMBO_PACKAGES.map((combo, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: combo.name,
        url: `${SITE_URL}/combos/${combo.id}.html`
      }))
    });
  }

  if (page === 'blog.html') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mirissa Travel Blog',
      itemListElement: BLOG_POSTS.map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: post.title,
        url: `${SITE_URL}/blog/${post.id}.html`
      }))
    });
  }

  if (page === 'booking.html') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageMeta?.title || 'Book a Tour Online',
      url: pageUrl,
      description: pageMeta?.description,
      potentialAction: {
        '@type': 'ReserveAction',
        target: `${SITE_URL}/booking.html`,
        name: 'Book a Mirissa Tour Online'
      }
    });
  }

  if (page === 'faq.html') {
    const faqEntities = FAQ_ITEMS.flatMap(section =>
      section.questions.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a.replace(/<[^>]+>/g, '')
        }
      }))
    );
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqEntities
    });
  }

  if (page === 'contact.html') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: pageMeta?.title || 'Contact Sea & Safari Tours',
      url: pageUrl,
      description: pageMeta?.description,
      mainEntity: {
        '@type': 'TravelAgency',
        name: SITE_NAME,
        telephone: '+94787097430',
        email: COMPANY_EMAIL,
        url: SITE_URL
      }
    });
  }

  if (page === 'about.html') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: pageMeta?.title || `About ${SITE_NAME}`,
      url: pageUrl,
      description: pageMeta?.description,
      mainEntity: {
        '@type': 'TravelAgency',
        name: SITE_NAME,
        url: SITE_URL
      }
    });
  }

  if (page === 'gallery.html') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: pageMeta?.title || 'Photo Gallery',
      url: pageUrl,
      description: pageMeta?.description,
      about: {
        '@type': 'TravelAgency',
        name: SITE_NAME
      }
    });
  }
}

function initPageMeta() {
  applyPageMeta(PAGE_SEO[getCurrentPageFile()]);
}

function getLocalizedCombo(comboId) {
  const base = COMBO_PACKAGES.find(c => c.id === comboId);
  if (!base) return null;
  return window.I18n?.getCombo(comboId, base) ?? base;
}

function renderComboPackages() {
  const grid = document.querySelector('[data-render="combos"]');
  if (!grid) return;

  grid.innerHTML = COMBO_PACKAGES.map((pkg, i) => {
    const localized = getLocalizedCombo(pkg.id);
    const comboUrl = `${COMBOS_PATH}${pkg.id}.html`;
    return `
    <article class="combo-card fade-in" style="transition-delay:${i * 0.1}s">
      <div class="combo-card-image">
        <a href="${comboUrl}"><img src="${resolveImg(localized.image)}" alt="${localized.name} package" loading="lazy"></a>
        <span class="combo-badge">${localized.badge}</span>
      </div>
      <div class="combo-card-body">
        <h3><a href="${comboUrl}">${localized.name}</a></h3>
        <ul class="combo-tours">${localized.tours.map(tourName => `<li>${tourName}</li>`).join('')}</ul>
        <p class="combo-desc">${localized.desc}</p>
        <div class="combo-pricing">
          <span class="combo-price">$${localized.price}</span>
          <span class="combo-original">$${localized.originalPrice}</span>
          <span class="combo-save">${t('common.save')} $${localized.originalPrice - localized.price}</span>
        </div>
        <div class="combo-actions">
          <a href="${comboUrl}" class="btn btn-ocean btn-sm">${t('comboUi.viewPackage')}</a>
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(localized.waText)}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener">${t('common.bookViaWhatsApp')}</a>
        </div>
        ${renderGygBlock(localized.getYourGuide, 'combo-gyg-block')}
      </div>
    </article>
  `;
  }).join('');
  initScrollAnimations();
}

function initFAQPage() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  const faqItems = window.I18n?.getFaqItems(FAQ_ITEMS) ?? FAQ_ITEMS;
  container.innerHTML = faqItems.map(section => `
    <div class="faq-category fade-in">
      <h3 class="faq-category-title">${section.category}</h3>
      <div class="faq-list">
        ${section.questions.map((item, i) => `
          <details class="faq-item" ${section.category === 'Booking' && i === 0 ? 'open' : ''}>
            <summary>${item.q}</summary>
            <div class="faq-answer"><p>${item.a}</p></div>
          </details>
        `).join('')}
      </div>
    </div>
  `).join('');

  const rootPath = window.location.pathname.includes('/tours/') ? '../' : '';
  container.querySelectorAll('a[href="booking.html"]').forEach(link => {
    link.setAttribute('href', `${rootPath}booking.html`);
  });
  initScrollAnimations();
}

const GALLERY_CHIP_LABELS = {
  'whale-dolphin': 'Whale Watching',
  'turtle-snorkeling': 'Turtle Snorkel',
  'crocodile-safari': 'Crocodile Safari',
  'river-kayak': 'River Kayak',
  'scuba-diving': 'Scuba Diving',
  'night-snorkeling': 'Night Snorkel',
  'deep-sea-fishing': 'Deep Sea Fishing',
  'cooking-class': 'Cooking Class'
};

function getGalleryChipLabel(tourId) {
  const translated = t(`tours.${tourId}.name`);
  if (translated !== `tours.${tourId}.name`) return translated;
  return GALLERY_CHIP_LABELS[tourId] || TOURS[tourId]?.name || tourId;
}

function buildGalleryPhotoButton(tour, img, photoIndex, globalIndex) {
  const alt = (tour.galleryAlt && tour.galleryAlt[photoIndex])
    || `${tour.altPrefix || tour.name} - photo ${photoIndex + 1}`;
  return `
    <button type="button" class="site-gallery-item fade-in" data-index="${globalIndex}" data-tour-id="${tour.id}" aria-label="View ${tour.name} photo ${photoIndex + 1}">
      <img src="${resolveImg(img)}" alt="${alt}" loading="lazy">
      <span class="site-gallery-item-overlay" aria-hidden="true">
        <span class="site-gallery-zoom-icon"></span>
      </span>
    </button>
  `;
}

function initSiteGallery() {
  const container = document.getElementById('site-gallery');
  if (!container) return;

  const toursWithGallery = Object.values(TOURS).filter(tour => (tour.gallery || []).length);
  const allImages = [];
  let globalIndex = 0;

  const sectionsHtml = toursWithGallery.map(tour => {
    const photosHtml = (tour.gallery || []).map((img, i) => {
      const item = {
        src: resolveImg(img),
        alt: (tour.galleryAlt && tour.galleryAlt[i]) || `${tour.altPrefix || tour.name} - photo ${i + 1}`,
        tour: tour.name,
        tourId: tour.id
      };
      const html = buildGalleryPhotoButton(tour, img, i, globalIndex);
      allImages.push(item);
      globalIndex += 1;
      return html;
    }).join('');

    const photoCount = tour.gallery.length;
    const location = tour.location || SITE_LOCATION;
    const heroImg = resolveImg(tour.heroImage || tour.image);

    return `
      <section class="gallery-tour-block fade-in" id="gallery-${tour.id}" data-tour-id="${tour.id}" aria-labelledby="gallery-title-${tour.id}">
        <div class="gallery-tour-header">
          <a href="${TOURS_PATH}${tour.id}.html" class="gallery-tour-thumb" tabindex="-1" aria-hidden="true">
            <img src="${heroImg}" alt="" loading="lazy">
          </a>
          <div class="gallery-tour-header-body">
            <div class="gallery-tour-header-top">
              <span class="gallery-tour-location">${LOCATION_PIN_ICON}<span>${location}</span></span>
              <span class="gallery-tour-count">${photoCount} photo${photoCount === 1 ? '' : 's'}</span>
            </div>
            <h3 class="gallery-tour-title" id="gallery-title-${tour.id}">${tour.name}</h3>
            <p class="gallery-tour-meta">
              <span>${tour.duration}</span>
              <span class="gallery-tour-meta-dot" aria-hidden="true"></span>
              <span>From $${tour.price}/person</span>
            </p>
            <div class="gallery-tour-actions">
              <a href="${TOURS_PATH}${tour.id}.html" class="btn btn-ocean btn-sm">View Tour</a>
              <a href="${ROOT_PATH}booking.html?tour=${tour.id}" class="btn btn-primary btn-sm">Book Now</a>
            </div>
          </div>
        </div>
        <div class="gallery-tour-grid">${photosHtml}</div>
      </section>
    `;
  }).join('');

  const filtersHtml = toursWithGallery.map(tour => `
    <button type="button" class="gallery-filter" data-filter="${tour.id}" role="tab" aria-selected="false" aria-controls="gallery-${tour.id}">
      ${getGalleryChipLabel(tour.id)}
    </button>
  `).join('');

  container.innerHTML = `
    <div class="gallery-toolbar fade-in">
      <div class="gallery-toolbar-row">
        <p class="gallery-toolbar-label">Filter by tour</p>
        <span class="gallery-toolbar-count">${allImages.length} photos</span>
      </div>
      <div class="gallery-filters-wrap">
        <button type="button" class="gallery-filters-nav gallery-filters-prev" aria-label="Scroll tour filters left" disabled>
          <span aria-hidden="true">&lsaquo;</span>
        </button>
        <div class="gallery-filters" role="tablist" aria-label="Filter gallery by tour">
          <button type="button" class="gallery-filter active" data-filter="all" role="tab" aria-selected="true">All Tours</button>
          ${filtersHtml}
        </div>
        <button type="button" class="gallery-filters-nav gallery-filters-next" aria-label="Scroll tour filters right">
          <span aria-hidden="true">&rsaquo;</span>
        </button>
      </div>
    </div>
    <div class="gallery-tour-sections">${sectionsHtml}</div>
  `;

  const sectionEl = container.closest('.gallery-page-section');
  let activeFilter = 'all';
  let currentIndex = 0;

  function getVisibleImages() {
    if (activeFilter === 'all') return allImages;
    return allImages.filter(item => item.tourId === activeFilter);
  }

  function setActiveFilter(filter, scrollToSection) {
    activeFilter = filter;
    container.dataset.activeFilter = filter;

    container.querySelectorAll('.gallery-filter').forEach(btn => {
      const isActive = btn.dataset.filter === filter;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    container.querySelectorAll('.gallery-tour-block').forEach(block => {
      const show = filter === 'all' || block.dataset.tourId === filter;
      block.classList.toggle('is-hidden', !show);
      block.setAttribute('aria-hidden', show ? 'false' : 'true');
    });

    if (sectionEl) {
      sectionEl.classList.toggle('is-filtered', filter !== 'all');
    }

    const hash = filter === 'all' ? '' : `#gallery-${filter}`;
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}${hash}`);

    if (scrollToSection && filter !== 'all') {
      document.getElementById(`gallery-${filter}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  container.querySelectorAll('.gallery-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      setActiveFilter(filter, filter !== 'all');
    });
  });

  const filtersScroll = container.querySelector('.gallery-filters');
  const filtersPrev = container.querySelector('.gallery-filters-prev');
  const filtersNext = container.querySelector('.gallery-filters-next');

  function updateFiltersScrollState() {
    if (!filtersScroll || !filtersPrev || !filtersNext) return;
    const maxScroll = filtersScroll.scrollWidth - filtersScroll.clientWidth;
    const atStart = filtersScroll.scrollLeft <= 4;
    const atEnd = filtersScroll.scrollLeft >= maxScroll - 4;
    filtersPrev.disabled = atStart;
    filtersNext.disabled = atEnd || maxScroll <= 0;
    container.querySelector('.gallery-filters-wrap')?.classList.toggle('can-scroll-left', !atStart);
    container.querySelector('.gallery-filters-wrap')?.classList.toggle('can-scroll-right', !atEnd && maxScroll > 0);
  }

  function scrollFilters(direction) {
    if (!filtersScroll) return;
    filtersScroll.scrollBy({ left: direction * 220, behavior: 'smooth' });
  }

  filtersPrev?.addEventListener('click', () => scrollFilters(-1));
  filtersNext?.addEventListener('click', () => scrollFilters(1));
  filtersScroll?.addEventListener('scroll', updateFiltersScrollState, { passive: true });
  window.addEventListener('resize', updateFiltersScrollState);
  updateFiltersScrollState();

  const initialHash = window.location.hash.replace('#', '');
  if (initialHash.startsWith('gallery-')) {
    const tourId = initialHash.replace('gallery-', '');
    if (TOURS[tourId]?.gallery?.length) {
      setActiveFilter(tourId, false);
    }
  }

  let lightbox = document.querySelector('.lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous">&lsaquo;</button>
      <div class="lightbox-stage">
        <img src="" alt="">
        <div class="lightbox-caption">
          <span class="lightbox-tour-name"></span>
          <span class="lightbox-counter"></span>
        </div>
      </div>
      <button class="lightbox-nav lightbox-next" aria-label="Next">&rsaquo;</button>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = lightbox.querySelector('.lightbox-stage img');
  const lightboxTourName = lightbox.querySelector('.lightbox-tour-name');
  const lightboxCounter = lightbox.querySelector('.lightbox-counter');

  function updateLightboxView(items, index) {
    const item = items[index];
    if (!item) return;
    currentIndex = index;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    if (lightboxTourName) lightboxTourName.textContent = item.tour;
    if (lightboxCounter) lightboxCounter.textContent = `${index + 1} / ${items.length}`;
  }

  function openLightbox(globalIdx) {
    const items = getVisibleImages();
    const clicked = allImages[globalIdx];
    if (!clicked) return;
    const localIndex = items.findIndex(item => item.src === clicked.src && item.tourId === clicked.tourId);
    updateLightboxView(items, localIndex >= 0 ? localIndex : 0);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function stepLightbox(delta) {
    const items = getVisibleImages();
    if (!items.length) return;
    const next = (currentIndex + delta + items.length) % items.length;
    updateLightboxView(items, next);
  }

  container.querySelectorAll('.site-gallery-item').forEach(btn => {
    btn.addEventListener('click', () => openLightbox(Number(btn.dataset.index)));
  });

  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', () => stepLightbox(-1));
  lightbox.querySelector('.lightbox-next').addEventListener('click', () => stepLightbox(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });

  initScrollAnimations();
}

function injectTourMeta(tour) {
  const title = `${tour.name} Mirissa | Book Online | Sea & Safari Tours`;
  const description = `${tour.shortDesc} From $${tour.price}/person with free Mirissa hotel pickup. Book via WhatsApp or online — ${tour.duration}.`;
  const image = `${SITE_URL}/${tour.heroImage || tour.image}`;
  const canonicalPath = `/tours/${tour.id}.html`;
  const keywords = TOUR_SEO[tour.id] || `${tour.name.toLowerCase()} mirissa, sri lanka tours, sea safari tours`;

  injectBusinessSchemas(getStaticJsonLdTypes());

  applyPageMeta({
    title,
    description,
    keywords,
    dcSubject: keywords,
    image,
    imageAlt: tour.imageAlt || `${tour.altPrefix || tour.name} - Mirissa Sri Lanka`,
    type: 'product',
    path: canonicalPath
  }, canonicalPath);

  injectJsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: getCanonicalUrl(canonicalPath),
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL
    }
  });

  const pageUrl = getCanonicalUrl(canonicalPath);
  const productReviews = buildProductReviewSchemas(tour.id);
  const galleryImages = (tour.gallery || []).map(img => `${SITE_URL}/${img.replace(/^\//, '')}`);

  injectJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tour.name,
    description: tour.shortDesc,
    image: galleryImages.length ? galleryImages : [image],
    sku: tour.id,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: buildTourOfferSchema(tour, pageUrl),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5'
    },
    ...(productReviews.length ? { review: productReviews } : {})
  });

  const tourFaq = TOUR_FAQ[tour.id];
  if (tourFaq?.length) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: tourFaq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    });
  }

  const eventSchema = buildSeasonalEventSchema(tour);
  if (eventSchema) injectJsonLd(eventSchema);

  injectJsonLd({
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.name,
    description: tour.shortDesc,
    touristType: 'Leisure travelers',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: (tour.itinerary || []).map((step, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: step.title,
        description: step.desc
      }))
    },
    provider: {
      '@type': 'TravelAgency',
      name: SITE_NAME,
      url: SITE_URL
    }
  });

  injectJsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Tours', item: `${SITE_URL}/tours.html` },
      { '@type': 'ListItem', position: 3, name: tour.name, item: getCanonicalUrl(canonicalPath) }
    ]
  });

  injectTourVideoSchema(tour);
}

function initStickyTourBar(tour) {
  if (document.querySelector('.mobile-book-bar')) return;

  const bar = document.createElement('div');
  bar.className = 'mobile-book-bar';
  bar.innerHTML = `
    <div class="mobile-book-info">
      <span class="mobile-book-label">From</span>
      <span class="mobile-book-price">$${tour.price}</span>
    </div>
    <a href="${ROOT_PATH}booking.html?tour=${tour.id}" class="btn btn-primary btn-sm">Book Now</a>
    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello! I'm interested in booking: ${tour.name}`)}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener">WhatsApp</a>
  `;
  document.body.appendChild(bar);
}

function createTourCard(tour, index) {
  const localized = window.I18n?.getTour(tour.id, tour) ?? tour;
  return `
    <article class="tour-card fade-in" style="transition-delay: ${index * 0.1}s">
      <div class="tour-card-image">
        <a href="${TOURS_PATH}${localized.id}.html"><img src="${resolveImg(localized.image)}" alt="${localized.imageAlt || localized.altPrefix || localized.name}" loading="lazy"></a>
        <span class="tour-card-badge">${localized.duration}</span>
      </div>
      <div class="tour-card-body">
        <h3 class="tour-card-title">${localized.name}</h3>
        <p class="tour-card-location">${LOCATION_PIN_ICON}<span>${localized.location || SITE_LOCATION}</span></p>
        <p class="tour-card-desc">${localized.shortDesc}</p>
        <div class="tour-card-footer">
          <div class="tour-price">$${localized.price} <span>${t('common.perPerson')}</span></div>
          <a href="${TOURS_PATH}${localized.id}.html" class="btn btn-ocean btn-sm">${t('common.viewDetails')}</a>
        </div>
      </div>
    </article>
  `;
}

function renderAllTours() {
  const grid = document.querySelector('.tours-grid[data-render="all"]');
  grid.innerHTML = Object.values(TOURS).map((tour, i) => createTourCard(tour, i)).join('');
  initScrollAnimations();
}

function renderFeaturedTours() {
  const featured = ['whale-dolphin', 'turtle-snorkeling', 'river-kayak', 'cooking-class'];
  const grid = document.querySelector('.tours-grid[data-render="featured"]');
  grid.innerHTML = featured.map((id, i) => createTourCard(TOURS[id], i)).join('');
  initScrollAnimations();
}

function renderGygBlock(gyg, blockClass = 'tour-gyg-block') {
  if (!gyg) return '';
  const badge = gyg.badge || GETYOURGUIDE_PRODUCT_BADGE;
  return `
    <div class="${blockClass}">
      <p class="tour-gyg-label">${t('common.alsoOnGyg')}</p>
      <a href="${gyg.url}" class="tour-gyg-badge-link" target="_blank" rel="noopener noreferrer" title="${gyg.title}">
        <img src="${badge}" class="gyg-badge-img tour-gyg-badge" width="160" height="auto" alt="GetYourGuide | ${gyg.title}" loading="lazy">
      </a>
      <p class="tour-gyg-title">${gyg.title}</p>
    </div>
  `;
}

function renderTourGetYourGuideBlock(tour) {
  return renderGygBlock(tour.getYourGuide);
}

function initTourDetails() {
  const params = new URLSearchParams(window.location.search);
  const pageAttr = document.getElementById('tour-detail-content')?.dataset.tourId;
  const tourId = pageAttr || params.get('tour') || 'whale-dolphin';
  const tour = getLocalizedTour(tourId);

  if (!tour) {
    document.getElementById('tour-detail-content').innerHTML =
      `<div class="container" style="padding:100px 0;text-align:center"><h2>${t('common.tourNotFound')}</h2><a href="${ROOT_PATH}tours.html" class="btn btn-ocean">${t('nav.viewAllTours')}</a></div>`;
    return;
  }

  injectTourMeta(tour);
  initStickyTourBar(tour);

  const hero = document.querySelector('.tour-detail-hero');
  if (hero) hero.style.backgroundImage = `url('${resolveImg(tour.heroImage)}')`;

  document.getElementById('tour-detail-content').innerHTML = `
    <div class="container">
      <div class="tour-detail-grid">
        <div class="tour-detail-main">
          ${tour.location ? `<p class="tour-location"><span class="tour-meta-icon tour-meta-icon-pin" aria-hidden="true"></span> ${tour.location}</p>` : ''}
          ${tour.highlights ? `
          <h2>${t('tourUi.highlights')}</h2>
          <ul class="highlights-list">${tour.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
          ` : ''}
          <h2>${t('tourUi.aboutTour')}</h2>
          <p>${tour.fullDesc.replace(/\n\n/g, '</p><p>').replace(/\n/g, ' ')}</p>
          ${tour.packages ? `
          <h2>${tour.packagesTitle || t('tourUi.packages')}</h2>
          <p class="section-desc" style="margin-bottom:24px">${tour.packagesDesc || ''}</p>
          <div class="tour-packages">
            ${tour.packages.map(pkg => `
              <div class="package-card">
                ${pkg.image ? `
                <div class="package-card-image">
                  <img src="${resolveImg(pkg.image)}" alt="${pkg.imageAlt || `${tour.altPrefix || tour.name} - ${pkg.title}`}" loading="lazy">
                </div>
                ` : ''}
                <div class="package-card-body">
                  <div class="package-card-header">
                    <span class="package-number">${t('tourUi.package')} ${pkg.number}</span>
                    <span class="package-price">$${pkg.price}<small>${t('common.perPerson')}</small></span>
                  </div>
                  <h3 class="package-title">${pkg.title}</h3>
                  <p class="package-subtitle">${pkg.subtitle}</p>
                  <p class="package-desc">${pkg.desc}</p>
                  <ul class="package-breakdown">
                    ${pkg.breakdown.map(row => `
                      <li><span class="package-breakdown-label">${row.label}</span><span class="package-breakdown-time">${row.time}</span></li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>
          ` : ''}
          <h2>${t('tourUi.itinerary')}</h2>
          <div class="itinerary-list">
            ${tour.itinerary.map(item => `
              <div class="itinerary-item">
                <div class="itinerary-time">${item.time}</div>
                <div class="itinerary-content">
                  <h4>${item.title}</h4>
                  <p>${item.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <h2>${t('tourUi.includedExcluded')}</h2>
          <div class="included-grid">
            <div>
              <h4 style="color:var(--ocean-deep);margin-bottom:12px">${t('tourUi.included')}</h4>
              <ul class="included-list">${tour.included.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
            <div>
              <h4 style="color:var(--ocean-deep);margin-bottom:12px">${t('tourUi.excluded')}</h4>
              <ul class="included-list excluded-list">${tour.excluded.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
          </div>
          ${tour.importantInfo ? `
          <h2>${t('tourUi.importantInfo')}</h2>
          <div class="important-info-grid">
            ${tour.importantInfo.bring ? `<div class="important-info-col"><h4>${t('tourUi.whatToBring')}</h4><ul class="info-list">${tour.importantInfo.bring.map(item => `<li>${item}</li>`).join('')}</ul></div>` : ''}
            ${tour.importantInfo.notSuitable ? `<div class="important-info-col"><h4>${t('tourUi.notSuitable')}</h4><ul class="info-list not-suitable">${tour.importantInfo.notSuitable.map(item => `<li>${item}</li>`).join('')}</ul></div>` : ''}
            ${tour.importantInfo.notAllowed ? `<div class="important-info-col"><h4>${t('tourUi.notAllowed')}</h4><ul class="info-list not-allowed">${tour.importantInfo.notAllowed.map(item => `<li>${item}</li>`).join('')}</ul></div>` : ''}
          </div>
          ${tour.importantInfo.knowBeforeYouGo ? `
          <div class="important-info-know">
            <h4>${t('tourUi.knowBefore')}</h4>
            <ul class="info-list info-list-know">${tour.importantInfo.knowBeforeYouGo.map(item => `<li>${item}</li>`).join('')}</ul>
          </div>
          ` : ''}
          ` : ''}
          <h2>${t('tourUi.photoGallery')}</h2>
          <div class="gallery-slider" data-gallery>
            ${tour.gallery.map((img, i) => `
              <div class="gallery-item" data-index="${i}">
                <img src="${resolveImg(img)}" alt="${(tour.galleryAlt && tour.galleryAlt[i]) || `${tour.altPrefix || tour.name} - photo ${i + 1}`}" loading="lazy">
              </div>
            `).join('')}
          </div>
          ${renderTourVideosSection(tour)}
        </div>
        <aside class="tour-sidebar">
          <div class="booking-sidebar-card">
            <h3>${tour.name}</h3>
            <div class="sidebar-price">$${tour.price} <span>${t('common.perPerson')}</span></div>
            ${tour.priceNote ? `<p class="sidebar-price-note">${tour.priceNote}</p>` : ''}
            <ul class="sidebar-features">
              <li><span class="sidebar-icon sidebar-icon-time" aria-hidden="true"></span><span>${tour.duration}</span></li>
              <li><span class="sidebar-icon sidebar-icon-pin" aria-hidden="true"></span><span>${tour.location || 'Mirissa, Sri Lanka'}</span></li>
              <li><span class="sidebar-icon sidebar-icon-group" aria-hidden="true"></span><span>${tour.groupType || t('common.smallGroup')}</span></li>
              <li><span class="sidebar-icon sidebar-icon-shield" aria-hidden="true"></span><span>${t('common.fullyInsured')}</span></li>
              <li><span class="sidebar-icon sidebar-icon-star" aria-hidden="true"></span><span>${t('common.expertGuides')}</span></li>
              ${tour.timeSlots ? `<li><span class="sidebar-icon sidebar-icon-clock" aria-hidden="true"></span><span>${t('tourUi.slots')}: ${tour.timeSlots}</span></li>` : ''}
            </ul>
            <a href="${ROOT_PATH}booking.html?tour=${tour.id}" class="btn btn-primary btn-block" style="margin-top:24px">${t('common.bookThisTour')}</a>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello! I'm interested in booking: ${tour.name}`)}" class="btn btn-whatsapp btn-block" style="margin-top:12px" target="_blank" rel="noopener">${t('common.whatsappInquiry')}</a>
            ${renderSidebarReviewCta()}
            ${renderTourGetYourGuideBlock(tour)}
          </div>
        </aside>
      </div>
      ${renderTourFaqSection(tour.id)}
      ${renderRelatedToursSection(tour.id)}
      <div class="tour-nav-buttons">
        <a href="${ROOT_PATH}tours.html" class="btn btn-ocean tour-nav-prev">&larr; ${t('common.allToursNav')}</a>
        ${(() => {
          const ids = Object.keys(TOURS);
          const idx = ids.indexOf(tour.id);
          const nextId = ids[(idx + 1) % ids.length];
          const nextTour = getLocalizedTour(nextId);
          return `<a href="${TOURS_PATH}${nextId}.html" class="btn btn-primary tour-nav-next" aria-label="${t('common.nextTour')}: ${nextTour.name}">
            <span class="tour-nav-next-short">${t('common.nextTour')} &rarr;</span>
            <span class="tour-nav-next-full">${t('common.nextTour')}: ${nextTour.name} &rarr;</span>
          </a>`;
        })()}
      </div>
    </div>
  `;

  const heroTitle = document.getElementById('tour-hero-title');
  const heroMeta = document.getElementById('tour-hero-meta');
  const breadcrumbCurrent = document.querySelector('.breadcrumb span:last-child');
  if (heroTitle) heroTitle.textContent = tour.name;
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = tour.name;
  if (heroMeta) {
    heroMeta.innerHTML = `
      <span><span class="tour-meta-icon tour-meta-icon-time" aria-hidden="true"></span> ${tour.duration}</span>
      <span><span class="tour-meta-icon sidebar-icon-price" aria-hidden="true"></span> ${t('common.from')} $${tour.price}${t('common.perPerson')}</span>
      <span><span class="tour-meta-icon tour-meta-icon-pin" aria-hidden="true"></span> ${tour.location || 'Mirissa, Sri Lanka'}</span>
    `;
  }

  initGallery();
  const tourContent = document.getElementById('tour-detail-content');
  if (tourContent) initVideoPlayers(tourContent);
  initBusinessReviewLinks();
  initScrollAnimations();
}

function injectComboMeta(combo) {
  const savings = combo.originalPrice - combo.price;
  const title = `${combo.name} Mirissa | Combo Package | Sea & Safari Tours`;
  const description = `${combo.desc} Bundle price $${combo.price}/person (save $${savings}). Free Mirissa hotel pickup — ${combo.duration}.`;
  const image = `${SITE_URL}/${combo.image}`;
  const canonicalPath = `/combos/${combo.id}.html`;
  const keywords = COMBO_SEO[combo.id] || `${combo.name.toLowerCase()} mirissa combo, mirissa package tours`;

  injectBusinessSchemas(getStaticJsonLdTypes());

  applyPageMeta({
    title,
    description,
    keywords,
    dcSubject: keywords,
    image,
    imageAlt: `${combo.name} - Mirissa combo package`,
    type: 'product',
    path: canonicalPath
  }, canonicalPath);

  injectJsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: getCanonicalUrl(canonicalPath),
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL
    }
  });

  const pageUrl = getCanonicalUrl(canonicalPath);
  const comboReviews = buildComboReviewSchemas(combo);

  injectJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: combo.name,
    description: combo.desc,
    image,
    sku: combo.id,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      ...buildTourOfferSchema({ id: combo.id, price: combo.price }, pageUrl),
      description: `Bundle price — save $${combo.originalPrice - combo.price} vs booking separately`
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5'
    },
    ...(comboReviews.length ? { review: comboReviews } : {})
  });

  const comboFaq = COMBO_FAQ[combo.id];
  if (comboFaq?.length) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: comboFaq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    });
  }

  if (combo.tourIds?.includes('whale-dolphin')) {
    injectWhaleVideosSchema(pageUrl, WHALE_VIDEOS, { name: combo.name, shortDesc: combo.desc, image: combo.image });
  }

  if (combo.itinerary?.length) {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: combo.name,
      description: combo.desc,
      touristType: 'Leisure travelers',
      itinerary: {
        '@type': 'ItemList',
        itemListElement: combo.itinerary.map((step, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: step.title,
          description: step.desc
        }))
      },
      provider: {
        '@type': 'TravelAgency',
        name: SITE_NAME,
        url: SITE_URL
      }
    });
  }

  injectJsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Combo Packages', item: `${SITE_URL}/combos.html` },
      { '@type': 'ListItem', position: 3, name: combo.name, item: getCanonicalUrl(canonicalPath) }
    ]
  });
}

function initStickyComboBar(combo) {
  if (document.querySelector('.mobile-book-bar')) return;

  const bar = document.createElement('div');
  bar.className = 'mobile-book-bar';
  bar.innerHTML = `
    <div class="mobile-book-info">
      <span class="mobile-book-label">${t('common.from')}</span>
      <span class="mobile-book-price">$${combo.price}</span>
    </div>
    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(combo.waText)}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener">WhatsApp</a>
    <a href="${ROOT_PATH}booking.html" class="btn btn-primary btn-sm">${t('common.bookTour')}</a>
  `;
  document.body.appendChild(bar);
}

function initComboDetails() {
  const pageAttr = document.getElementById('combo-detail-content')?.dataset.comboId;
  const comboId = pageAttr || 'whale-turtle';
  const combo = getLocalizedCombo(comboId);

  if (!combo) {
    document.getElementById('combo-detail-content').innerHTML =
      `<div class="container" style="padding:100px 0;text-align:center"><h2>${t('comboUi.notFound')}</h2><a href="${ROOT_PATH}combos.html" class="btn btn-ocean">${t('comboUi.allCombos')}</a></div>`;
    return;
  }

  injectComboMeta(combo);
  initStickyComboBar(combo);

  const hero = document.querySelector('.tour-detail-hero');
  if (hero) hero.style.backgroundImage = `url('${resolveImg(combo.image)}')`;

  const savings = combo.originalPrice - combo.price;
  const tourCards = (combo.tourIds || []).map(tourId => {
    const tour = getLocalizedTour(tourId);
    if (!tour) return '';
    return `
      <a href="${TOURS_PATH}${tourId}.html" class="combo-tour-link-card">
        <img src="${resolveImg(tour.image || tour.heroImage)}" alt="${tour.name}" loading="lazy">
        <div>
          <h4>${tour.name}</h4>
          <p>${tour.shortDesc}</p>
          <span class="combo-tour-link-label">${t('common.viewDetails')} &rarr;</span>
        </div>
      </a>
    `;
  }).join('');

  document.getElementById('combo-detail-content').innerHTML = `
    <div class="container">
      <div class="tour-detail-grid">
        <div class="tour-detail-main">
          ${combo.location ? `<p class="tour-location"><span class="tour-meta-icon tour-meta-icon-pin" aria-hidden="true"></span> ${combo.location}</p>` : ''}
          ${combo.highlights ? `
          <h2>${t('tourUi.highlights')}</h2>
          <ul class="highlights-list">${combo.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
          ` : ''}
          <h2>${t('comboUi.aboutPackage')}</h2>
          <p>${combo.fullDesc || combo.desc}</p>
          ${tourCards ? `
          <h2>${t('comboUi.includedTours')}</h2>
          <div class="combo-tour-links">${tourCards}</div>
          ` : ''}
          ${combo.itinerary ? `
          <h2>${t('tourUi.itinerary')}</h2>
          <div class="itinerary-list">
            ${combo.itinerary.map(item => `
              <div class="itinerary-item">
                <div class="itinerary-time">${item.time}</div>
                <div class="itinerary-content">
                  <h4>${item.title}</h4>
                  <p>${item.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
          ` : ''}
          ${combo.included ? `
          <h2>${t('tourUi.included')}</h2>
          <ul class="included-list">${combo.included.map(item => `<li>${item}</li>`).join('')}</ul>
          ` : ''}
          ${(combo.tourIds || []).includes('whale-dolphin') ? renderWhaleVideosSection() : ''}
        </div>
        <aside class="tour-sidebar">
          <div class="booking-sidebar-card">
            <span class="combo-sidebar-badge">${combo.badge}</span>
            <h3>${combo.name}</h3>
            <div class="sidebar-price">$${combo.price} <span>${t('common.perPerson')}</span></div>
            <p class="combo-sidebar-savings">${t('common.save')} $${savings} &middot; <s>$${combo.originalPrice}</s></p>
            <ul class="sidebar-features">
              <li><span class="sidebar-icon sidebar-icon-time" aria-hidden="true"></span><span>${combo.duration}</span></li>
              <li><span class="sidebar-icon sidebar-icon-pin" aria-hidden="true"></span><span>${combo.location || SITE_LOCATION}</span></li>
              <li><span class="sidebar-icon sidebar-icon-group" aria-hidden="true"></span><span>${t('common.smallGroup')}</span></li>
              <li><span class="sidebar-icon sidebar-icon-shield" aria-hidden="true"></span><span>${t('common.fullyInsured')}</span></li>
              <li><span class="sidebar-icon sidebar-icon-star" aria-hidden="true"></span><span>${t('common.expertGuides')}</span></li>
            </ul>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(combo.waText)}" class="btn btn-whatsapp btn-block" style="margin-top:24px" target="_blank" rel="noopener">${t('common.bookViaWhatsApp')}</a>
            <a href="${ROOT_PATH}booking.html" class="btn btn-primary btn-block" style="margin-top:12px">${t('common.onlineBooking')}</a>
            ${renderSidebarReviewCta()}
            ${renderGygBlock(combo.getYourGuide)}
          </div>
        </aside>
      </div>
      ${renderComboFaqSection(combo.id)}
      ${renderRelatedCombosSection(combo.id)}
      <div class="tour-nav-buttons">
        <a href="${ROOT_PATH}combos.html" class="btn btn-ocean tour-nav-prev">&larr; ${t('comboUi.allCombos')}</a>
        ${(() => {
          const ids = COMBO_PACKAGES.map(c => c.id);
          const idx = ids.indexOf(combo.id);
          const nextId = ids[(idx + 1) % ids.length];
          const nextCombo = getLocalizedCombo(nextId);
          return `<a href="${COMBOS_PATH}${nextId}.html" class="btn btn-primary tour-nav-next" aria-label="${t('comboUi.nextCombo')}: ${nextCombo.name}">
            <span class="tour-nav-next-short">${t('comboUi.nextCombo')} &rarr;</span>
            <span class="tour-nav-next-full">${t('comboUi.nextCombo')}: ${nextCombo.name} &rarr;</span>
          </a>`;
        })()}
      </div>
    </div>
  `;

  const heroTitle = document.getElementById('combo-hero-title');
  const heroMeta = document.getElementById('combo-hero-meta');
  const breadcrumbCurrent = document.querySelector('.breadcrumb span:last-child');
  if (heroTitle) heroTitle.textContent = combo.name;
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = combo.name;
  if (heroMeta) {
    heroMeta.innerHTML = `
      <span><span class="tour-meta-icon tour-meta-icon-time" aria-hidden="true"></span> ${combo.duration}</span>
      <span><span class="tour-meta-icon sidebar-icon-price" aria-hidden="true"></span> $${combo.price}${t('common.perPerson')} <small>(${t('common.save')} $${savings})</small></span>
      <span><span class="tour-meta-icon tour-meta-icon-pin" aria-hidden="true"></span> ${combo.location || SITE_LOCATION}</span>
    `;
  }

  const comboContent = document.getElementById('combo-detail-content');
  if (comboContent) initVideoPlayers(comboContent);
  initBusinessReviewLinks();
  initScrollAnimations();
}

function initGallery() {
  const gallery = document.querySelector('[data-gallery]');
  if (!gallery) return;

  const galleryImages = [...gallery.querySelectorAll('img')];
  const images = galleryImages.map(img => img.src);
  const alts = galleryImages.map(img => img.alt);
  let currentIndex = 0;

  let lightbox = document.querySelector('.lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous">‹</button>
      <img src="" alt="Tour gallery image">
      <button class="lightbox-nav lightbox-next" aria-label="Next">›</button>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = lightbox.querySelector('img');

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightboxImg.alt = alts[currentIndex] || 'Tour gallery image';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + images.length) % images.length;
    lightboxImg.src = images[currentIndex];
    lightboxImg.alt = alts[currentIndex] || 'Tour gallery image';
  }

  gallery.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index, 10)));
  });

  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', () => navigate(-1));
  lightbox.querySelector('.lightbox-next').addEventListener('click', () => navigate(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

function refreshBookingFormTours() {
  const tourSelect = document.getElementById('tour-select');
  if (!tourSelect || tourSelect.options.length <= 1) return;
  const selected = tourSelect.value;
  [...tourSelect.options].forEach((option, i) => {
    if (i === 0 || !option.value) return;
    const tour = getLocalizedTour(option.value);
    if (tour) option.textContent = `${tour.name} — $${tour.price}${t('common.perPerson')}`;
  });
  if (selected) tourSelect.value = selected;
}

function initBookingForm() {
  injectBookingShuttleBanner();
  const form = document.getElementById('booking-form');
  const tourSelect = document.getElementById('tour-select');
  const guestsInput = document.getElementById('guests');
  const pickupRadios = document.querySelectorAll('input[name="pickup"]');
  const summaryEl = document.getElementById('booking-summary');
  const totalEl = document.getElementById('summary-total');
  const whatsappPreview = document.getElementById('whatsapp-preview');
  const whatsappBtn = document.getElementById('whatsapp-send');
  const emailBtn = document.getElementById('email-send');
  const proceedBtn = document.getElementById('proceed-payment');

  Object.values(TOURS).forEach(tour => {
    const localized = getLocalizedTour(tour.id);
    const option = document.createElement('option');
    option.value = tour.id;
    option.textContent = `${localized.name} — $${localized.price}${t('common.perPerson')}`;
    tourSelect.appendChild(option);
  });

  const timeSlotSelect = document.getElementById('time-slot');
  const timeSlotGroup = document.getElementById('timeslot-group');

  function updateTimeSlots() {
    const tour = TOURS[tourSelect.value];
    if (tour && tour.timeSlots) {
      const slots = tour.timeSlots.split(',').map(s => s.trim());
      timeSlotSelect.innerHTML = '<option value="">Select a time...</option>' +
        slots.map(s => `<option value="${s}">${s}</option>`).join('');
      timeSlotGroup.style.display = '';
    } else {
      timeSlotGroup.style.display = 'none';
      timeSlotSelect.innerHTML = '<option value="">Select a time...</option>';
    }
  }

  tourSelect.addEventListener('change', updateTimeSlots);

  const params = new URLSearchParams(window.location.search);
  const preselected = params.get('tour');
  if (preselected && TOURS[preselected]) {
    tourSelect.value = preselected;
    updateTimeSlots();
  }

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  document.getElementById('tour-date').min = minDate.toISOString().split('T')[0];

  function getFormData() {
    const pickup = document.querySelector('input[name="pickup"]:checked');
    return {
      name: document.getElementById('full-name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('whatsapp').value.trim(),
      tour: tourSelect.value,
      date: document.getElementById('tour-date').value,
      timeSlot: timeSlotSelect.value,
      guests: parseInt(guestsInput.value, 10) || 1,
      pickup: pickup ? pickup.value : 'no',
      requests: document.getElementById('special-requests').value.trim()
    };
  }

  function buildWhatsAppMessage(data, tour, total) {
    return `Hello Sea & Safari Tours,

I would like to book:

Tour: ${tour.name}
Date: ${data.date || 'TBD'}${data.timeSlot ? `\nTime Slot: ${data.timeSlot}` : ''}
Guests: ${data.guests}
Name: ${data.name || '—'}
Email: ${data.email || '—'}
Phone: ${data.phone || '—'}
Hotel Pickup: ${data.pickup === 'yes' ? 'Yes' : 'No'}
${data.requests ? `Special Requests: ${data.requests}` : ''}

Estimated Total: $${total}

Thank you!`;
  }

  function updateSummary() {
    const data = getFormData();
    const tour = TOURS[data.tour];
    if (!tour) {
      summaryEl.innerHTML = '<p style="opacity:0.7">Select a tour to see summary</p>';
      totalEl.textContent = '$0';
      return;
    }

    const pickupFee = data.pickup === 'yes' ? 15 : 0;
    const subtotal = tour.price * data.guests;
    const total = subtotal + pickupFee;

    summaryEl.innerHTML = `
      <div class="summary-item"><span>Tour</span><span>${tour.name}</span></div>
      <div class="summary-item"><span>Date</span><span>${data.date || '—'}</span></div>
      ${data.timeSlot ? `<div class="summary-item"><span>Time Slot</span><span>${data.timeSlot}</span></div>` : ''}
      <div class="summary-item"><span>Guests</span><span>${data.guests}</span></div>
      <div class="summary-item"><span>Price/person</span><span>$${tour.price}</span></div>
      <div class="summary-item"><span>Subtotal</span><span>$${subtotal}</span></div>
      ${pickupFee ? `<div class="summary-item"><span>Hotel Pickup</span><span>$${pickupFee}</span></div>` : ''}
    `;
    totalEl.textContent = `$${total}`;
    whatsappPreview.textContent = buildWhatsAppMessage(data, tour, total);
    sessionStorage.setItem('bookingData', JSON.stringify({
      ...data, tourName: tour.name, total, subtotal, pickupFee, pricePerPerson: tour.price
    }));
  }

  [tourSelect, guestsInput, document.getElementById('tour-date'), timeSlotSelect, ...pickupRadios].forEach(el => {
    el.addEventListener('change', updateSummary);
    el.addEventListener('input', updateSummary);
  });

  ['full-name', 'email', 'whatsapp', 'special-requests'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateSummary);
  });

  updateSummary();

  function validateForm() {
    let valid = true;
    const fields = [
      { id: 'full-name', validate: v => v.length >= 2, message: 'Please enter your full name' },
      { id: 'email', validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), message: 'Please enter a valid email' },
      { id: 'whatsapp', validate: v => /^\+?[\d\s-]{8,}$/.test(v), message: 'Please enter a valid phone number' },
      { id: 'tour-select', validate: v => v !== '', message: 'Please select a tour' },
      { id: 'tour-date', validate: v => v !== '', message: 'Please select a date' },
      { id: 'guests', validate: v => parseInt(v, 10) >= 1 && parseInt(v, 10) <= 20, message: 'Guests must be between 1 and 20' }
    ];

    fields.forEach(({ id, validate, message }) => {
      const input = document.getElementById(id);
      const error = input.closest('.form-group').querySelector('.form-error');
      if (!validate(input.value.trim())) {
        input.classList.add('error');
        error.textContent = message;
        error.classList.add('show');
        valid = false;
      } else {
        input.classList.remove('error');
        error.classList.remove('show');
      }
    });

    return valid;
  }

  whatsappBtn.addEventListener('click', () => {
    if (!validateForm()) return;
    const data = getFormData();
    const tour = TOURS[data.tour];
    const total = tour.price * data.guests + (data.pickup === 'yes' ? 15 : 0);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(data, tour, total))}`, '_blank');
  });

  emailBtn.addEventListener('click', () => {
    if (!validateForm()) return;
    const data = getFormData();
    const tour = TOURS[data.tour];
    const total = tour.price * data.guests + (data.pickup === 'yes' ? 15 : 0);
    const subject = encodeURIComponent(`Booking Request: ${tour.name}`);
    const body = encodeURIComponent(buildWhatsAppMessage(data, tour, total));
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  });

  proceedBtn.addEventListener('click', e => {
    e.preventDefault();
    if (!validateForm()) return;
    updateSummary();
    window.location.href = 'payment.html';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateForm()) proceedBtn.click();
  });
}

function initPaymentPage() {
  const bookingData = JSON.parse(sessionStorage.getItem('bookingData') || 'null');
  const summaryContainer = document.getElementById('payment-summary');
  const totalDisplay = document.getElementById('payment-total');
  const payBtn = document.getElementById('pay-now');
  const modal = document.getElementById('success-modal');
  const receiptId = document.getElementById('receipt-id');

  if (!bookingData) {
    summaryContainer.innerHTML = `<p>No booking data found. Please complete the <a href="${ROOT_PATH}booking.html">booking form</a> first.</p>`;
    payBtn.disabled = true;
    return;
  }

  summaryContainer.innerHTML = `
    <div class="summary-item" style="border-color:rgba(10,61,98,0.1);color:var(--text)">
      <span style="color:var(--text-muted)">Tour</span><span>${bookingData.tourName}</span>
    </div>
    <div class="summary-item" style="border-color:rgba(10,61,98,0.1);color:var(--text)">
      <span style="color:var(--text-muted)">Date</span><span>${bookingData.date}</span>
    </div>
    <div class="summary-item" style="border-color:rgba(10,61,98,0.1);color:var(--text)">
      <span style="color:var(--text-muted)">Guests</span><span>${bookingData.guests}</span>
    </div>
    <div class="summary-item" style="border-color:rgba(10,61,98,0.1);color:var(--text)">
      <span style="color:var(--text-muted)">Name</span><span>${bookingData.name}</span>
    </div>
    ${bookingData.pickupFee ? `<div class="summary-item" style="border-color:rgba(10,61,98,0.1);color:var(--text)"><span style="color:var(--text-muted)">Pickup</span><span>$${bookingData.pickupFee}</span></div>` : ''}
  `;
  totalDisplay.textContent = `$${bookingData.total}`;

  document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
      method.classList.add('active');
      method.querySelector('input').checked = true;
      document.querySelectorAll('.payment-form-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById(method.dataset.panel);
      if (panel) panel.classList.add('active');
    });
  });

  document.getElementById('card-number')?.addEventListener('input', e => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 16);
    e.target.value = val.replace(/(.{4})/g, '$1 ').trim();
  });

  document.getElementById('card-expiry')?.addEventListener('input', e => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2);
    e.target.value = val;
  });

  document.getElementById('card-cvc')?.addEventListener('input', e => {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
  });

  payBtn.addEventListener('click', () => {
    const activeMethod = document.querySelector('.payment-method.active input').value;

    if (activeMethod === 'card') {
      const cardNum = document.getElementById('card-number').value.replace(/\s/g, '');
      const expiry = document.getElementById('card-expiry').value;
      const cvc = document.getElementById('card-cvc').value;
      const name = document.getElementById('card-name').value.trim();
      if (cardNum.length < 16 || expiry.length < 5 || cvc.length < 3 || !name) {
        alert('Please fill in all card details correctly.');
        return;
      }
    }

    payBtn.disabled = true;
    payBtn.textContent = 'Processing...';

    setTimeout(() => {
      receiptId.textContent = 'SST-' + Date.now().toString(36).toUpperCase();
      modal.classList.add('active');
      payBtn.disabled = false;
      payBtn.textContent = 'Pay Now';
    }, 2000);
  });

  document.getElementById('modal-close')?.addEventListener('click', () => {
    modal.classList.remove('active');
    window.location.href = 'index.html';
  });
}

function formatBlogDate(dateStr) {
  const lang = window.I18n?.getLang() || 'en';
  const locale = lang === 'de' ? 'de-DE' : lang === 'fr' ? 'fr-FR' : 'en-GB';
  return new Date(dateStr).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
}

function buildBlogArticleNav() {
  return `
      <nav class="blog-article-nav">
        <a href="${ROOT_PATH}blog.html" class="btn btn-ocean btn-sm">${t('blog.allArticles')}</a>
        <a href="${ROOT_PATH}booking.html" class="btn btn-primary btn-sm">${t('common.bookTour')}</a>
      </nav>
  `;
}

function buildBlogCard(post, options = {}) {
  const { featured = false, delay = 0 } = options;
  const localized = getLocalizedBlogPost(post);
  const href = `${BLOG_PATH}${post.id}.html`;
  return `
    <article class="blog-card${featured ? ' blog-card-featured' : ''} fade-in" data-category="${post.category}" data-title="${localized.title.toLowerCase()}" data-excerpt="${localized.excerpt.toLowerCase()}" style="transition-delay:${delay}s">
      <a href="${href}" class="blog-card-image" tabindex="-1" aria-hidden="true">
        <img src="${resolveImg(post.image)}" alt="${localized.title}" loading="lazy">
        <span class="blog-card-category">${localized.categoryLabel}</span>
      </a>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <time datetime="${post.date}">${formatBlogDate(post.date)}</time>
          <span class="blog-card-dot" aria-hidden="true"></span>
          <span>${localized.readTime}</span>
        </div>
        <h3 class="blog-card-title"><a href="${href}">${localized.title}</a></h3>
        <p class="blog-card-excerpt">${localized.excerpt}</p>
        <div class="blog-card-footer">
          <a href="${href}" class="blog-read-link">${t('blog.readArticle')} <span class="link-arrow" aria-hidden="true">&rarr;</span></a>
          ${post.tourLink ? `<a href="${ROOT_PATH}${post.tourLink}" class="blog-tour-link">${localized.tourLabel}</a>` : ''}
        </div>
      </div>
    </article>
  `;
}

function initBlogArticlePage() {
  const postId = document.body.dataset.blogPost;
  if (!postId) return;

  const base = BLOG_POSTS.find(p => p.id === postId);
  if (!base) return;

  const post = getLocalizedBlogPost(base);
  const heroTitle = document.querySelector('.blog-article-hero h1');
  const heroLead = document.querySelector('.blog-article-lead');
  const heroCategory = document.querySelector('.blog-article-category');
  const breadcrumbSpan = document.querySelector('.blog-article-hero .breadcrumb > span:last-child');
  const body = document.querySelector('.blog-article-body');

  if (heroTitle) heroTitle.textContent = post.title;
  if (heroLead) heroLead.textContent = post.lead || post.excerpt;
  if (heroCategory) heroCategory.textContent = post.categoryLabel;
  if (breadcrumbSpan) breadcrumbSpan.textContent = post.title;

  const metaTime = document.querySelector('.blog-article-meta time');
  if (metaTime) metaTime.textContent = formatBlogDate(base.date);

  const readTimeSpan = document.querySelector('.blog-article-meta time')?.nextElementSibling;
  if (readTimeSpan) readTimeSpan.textContent = post.readTime;

  if (body && post.content) {
    body.innerHTML = `${post.content.trim()}${buildBlogArticleNav()}`;
  }

  window.I18n?.applyTranslations();

  const suffix = window.I18n?.getLang() === 'de'
    ? ' | Sea & Safari Tours Mirissa Blog'
    : window.I18n?.getLang() === 'fr'
      ? ' | Blog Sea & Safari Tours Mirissa'
      : ' | Sea & Safari Tours Mirissa Blog';
  document.title = `${post.title}${suffix}`;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && post.description) metaDesc.setAttribute('content', post.description);
}

function initBlogPage() {
  const grid = document.getElementById('blog-grid');
  const featuredEl = document.getElementById('blog-featured');
  const filtersEl = document.getElementById('blog-filters');
  const searchInput = document.getElementById('blog-search');
  if (!grid) return;

  const featured = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const rest = BLOG_POSTS.filter(p => p.id !== featured.id);

  if (featuredEl && featured) {
    featuredEl.innerHTML = buildBlogCard(featured, { featured: true });
  }

  function renderGrid(posts) {
    grid.innerHTML = posts.map((post, i) => buildBlogCard(post, { delay: i * 0.06 })).join('');
    initScrollAnimations();
  }

  renderGrid(rest);

  if (filtersEl && !filtersEl.dataset.bound) {
    filtersEl.dataset.bound = '1';
    filtersEl.addEventListener('click', e => {
      const btn = e.target.closest('.blog-filter');
      if (!btn) return;
      filtersEl.querySelectorAll('.blog-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    });
  }

  if (filtersEl) {
    filtersEl.innerHTML = BLOG_CATEGORIES.map((cat, i) => `
      <button type="button" class="blog-filter${i === 0 ? ' active' : ''}" data-filter="${cat.id}">${getBlogCategoryLabel(cat.id)}</button>
    `).join('');
  }

  function applyFilters() {
    const active = filtersEl?.querySelector('.blog-filter.active')?.dataset.filter || 'all';
    const query = (searchInput?.value || '').trim().toLowerCase();
    const filtered = BLOG_POSTS.filter(post => {
      if (post.featured && featured) return false;
      if (active !== 'all' && post.category !== active) return false;
      const localized = getLocalizedBlogPost(post);
      if (query && !localized.title.toLowerCase().includes(query) && !localized.excerpt.toLowerCase().includes(query)) return false;
      return true;
    });
    renderGrid(filtered);
    const empty = document.getElementById('blog-empty');
    if (empty) empty.hidden = filtered.length > 0;
  }

  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = '1';
    searchInput.addEventListener('input', applyFilters);
  }

  applyFilters();

  if (!grid.dataset.schemaInjected) {
    grid.dataset.schemaInjected = '1';
    injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Sea & Safari Tours Mirissa Travel Blog',
      description: 'Travel guides, whale watching tips, and Mirissa adventure articles from Sea & Safari Tours.',
      url: `${SITE_URL}/blog.html`,
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/logo.png` }
      },
      blogPost: BLOG_POSTS.map(post => {
        const localized = getLocalizedBlogPost(post);
        return {
          '@type': 'BlogPosting',
          headline: localized.title,
          description: localized.excerpt,
          datePublished: post.date,
          url: `${SITE_URL}/blog/${post.id}.html`,
          image: `${SITE_URL}/${post.image.replace(/^\//, '')}`
        };
      })
    });
  }
}

function initBlogPost() {
  const container = document.getElementById('blog-related');
  const postId = document.body.dataset.blogPost;
  if (!container || !postId) return;

  const related = BLOG_POSTS.filter(p => p.id !== postId).slice(0, 3);
  container.innerHTML = `
    <div class="blog-sidebar-card">
      <h3>${t('blog.relatedArticles')}</h3>
      <ul class="blog-related-list">
        ${related.map(post => {
          const localized = getLocalizedBlogPost(post);
          return `
          <li>
            <a href="${BLOG_PATH}${post.id}.html">
              <span class="blog-related-title">${localized.title}</span>
              <span class="blog-related-meta">${formatBlogDate(post.date)}</span>
            </a>
          </li>
        `;
        }).join('')}
      </ul>
    </div>
    <div class="blog-sidebar-card blog-sidebar-cta">
      <h3>${t('blog.readyExplore')}</h3>
      <p>${t('blog.readyExploreDesc')}</p>
      <a href="${ROOT_PATH}booking.html" class="btn btn-primary btn-block btn-sm">${t('common.bookTour')}</a>
      <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Hello!%20I%20read%20your%20blog%20and%20would%20like%20to%20book%20a%20tour." class="btn btn-whatsapp btn-block btn-sm" target="_blank" rel="noopener">${t('common.chatWhatsApp')}</a>
    </div>
  `;
}

function injectFooterReviewLinks() {
  document.querySelectorAll('.footer-actions').forEach(actions => {
    if (actions.querySelector('[data-review-link="write"]')) return;
    actions.insertAdjacentHTML('beforeend', `
      <a href="${getGoogleReviewWriteUrl()}" class="btn btn-outline btn-sm" data-review-link="write" target="_blank" rel="noopener">${t('common.leaveReview')}</a>
      <a href="${getGoogleBusinessProfileUrl()}" class="btn btn-outline btn-sm" data-gbp-link target="_blank" rel="noopener">${t('common.googleBusiness')}</a>
    `);
  });
}

function injectFooterBlogLink() {
  document.querySelectorAll('.footer-col').forEach(col => {
    const heading = col.querySelector('h4');
    if (!heading || heading.textContent.trim().toLowerCase() !== 'explore') return;
    const ul = col.querySelector('ul');
    if (!ul) return;

    if (!ul.querySelector('a[href*="airport-shuttle.html"]')) {
      const shuttleLi = document.createElement('li');
      const shuttleA = document.createElement('a');
      shuttleA.href = `${ROOT_PATH}airport-shuttle.html`;
      shuttleA.setAttribute('data-i18n', 'nav.airportShuttle');
      shuttleA.textContent = 'Airport Shuttle';
      shuttleLi.appendChild(shuttleA);
      const comboLink = ul.querySelector('a[href*="combos.html"]');
      if (comboLink?.parentElement) comboLink.parentElement.after(shuttleLi);
      else ul.appendChild(shuttleLi);
    }

    if (!ul.querySelector('a[href*="combos.html"]')) {
      const comboLi = document.createElement('li');
      const comboA = document.createElement('a');
      comboA.href = `${ROOT_PATH}combos.html`;
      comboA.setAttribute('data-i18n', 'comboUi.breadcrumb');
      comboA.textContent = 'Combo Packages';
      comboLi.appendChild(comboA);
      const toursLink = ul.querySelector('a[href*="tours.html"]');
      if (toursLink?.parentElement) toursLink.parentElement.after(comboLi);
      else ul.appendChild(comboLi);
    }

    if (!ul.querySelector('a[href*="blog.html"]')) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `${ROOT_PATH}blog.html`;
      a.textContent = 'Blog';
      li.appendChild(a);
      ul.appendChild(li);
    }
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const emailBtn = document.getElementById('contact-email-btn');
  if (!form) return;

  function getContactData() {
    return {
      name: document.getElementById('contact-name').value.trim(),
      email: document.getElementById('contact-email').value.trim(),
      phone: document.getElementById('contact-phone').value.trim(),
      subject: document.getElementById('contact-subject').value,
      message: document.getElementById('contact-message').value.trim()
    };
  }

  function validateContactForm() {
    let valid = true;
    const fields = [
      { id: 'contact-name', validate: v => v.length >= 2, message: 'Please enter your name' },
      { id: 'contact-email', validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), message: 'Please enter a valid email' },
      { id: 'contact-message', validate: v => v.length >= 10, message: 'Please enter a message (at least 10 characters)' }
    ];

    fields.forEach(({ id, validate, message }) => {
      const input = document.getElementById(id);
      const error = input.closest('.form-group')?.querySelector('.form-error');
      if (!validate(input.value.trim())) {
        if (error) error.textContent = message;
        input.classList.add('error');
        valid = false;
      } else {
        if (error) error.textContent = '';
        input.classList.remove('error');
      }
    });
    return valid;
  }

  function buildContactMessage(data) {
    return `Hello Sea & Safari Tours,

Subject: ${data.subject}
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${data.message}`;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateContactForm()) return;
    const data = getContactData();
    const text = encodeURIComponent(buildContactMessage(data));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  });

  emailBtn?.addEventListener('click', () => {
    if (!validateContactForm()) return;
    const data = getContactData();
    const subject = encodeURIComponent(`Sea & Safari Tours - ${data.subject}`);
    const body = encodeURIComponent(buildContactMessage(data));
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  });
}
