/**
 * Generates full index-style SEO <head> blocks for every HTML page.
 * Each page gets the SAME tag structure as index.html but with unique
 * title, description, canonical URL, OG/Twitter, and Dublin Core values.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://www.ceylonseasafaritours.com';
const SITE_NAME = 'Sea & Safari Tours';
const DC_DATE = '2026-05-27';
const COPYRIGHT = '© 2026 Sea & Safari Tours';

const WHALE_BLUE_IMG = `${SITE}/assets/images/whale-dolphin/mirissa_whale_watching_tour_blue_whale.png`;
const WHALE_BLUE_IMG_02 = `${SITE}/assets/images/whale-dolphin/mirissa_whale_watching_tour_blue_whale_02.png`;

const PAGES = {
  'index.html': {
    title: 'Sea & Safari Tours | Mirissa Whale Watching & Ocean Adventures Sri Lanka',
    description: 'Join Sea & Safari Tours for unforgettable ocean adventures — whale watching, turtle snorkeling, scuba diving, river kayak, fishing & wildlife tours in Mirissa. Airport shuttle from Colombo (CMB). Expert guides, free hotel pickup, 4.9★ rated.',
    keywords: 'Sea & Safari Tours, Mirissa whale watching, Mirissa snorkeling, whale watching Mirissa, scuba diving Mirissa, turtle snorkeling Mirissa, river kayak Mirissa, crocodile safari Mirissa, deep sea fishing Mirissa, Sri Lanka tours, things to do in Mirissa, Mirissa ocean adventures, cooking class Mirissa, dolphin watching Mirissa, colombo airport to mirissa transfer, airport shuttle mirissa',
    dcSubject: 'Whale Watching, Turtle Snorkeling, Scuba Diving, River Kayak, Crocodile Safari, Deep Sea Fishing, Cooking Class, Ocean Adventures, Mirissa Tours, Airport Shuttle',
    image: WHALE_BLUE_IMG,
    ogDescription: 'Premium whale watching, snorkeling, diving and wildlife tours in Mirissa, Sri Lanka. Expert guides, free hotel pickup. Book via WhatsApp.',
    twitterTitle: 'Sea & Safari Tours | Mirissa Whale Watching',
    path: '/',
    isHome: true
  },
  'tours.html': {
    title: 'All Tours in Mirissa | Whale Watching, Snorkeling & Safari | Sea & Safari Tours',
    description: 'Browse 8 Mirissa ocean and wildlife tours — whale watching from $45, turtle snorkeling, river kayak, scuba diving, cooking class & combo packages.',
    keywords: 'mirissa tours, sri lanka adventure tours, whale watching mirissa, snorkeling mirissa, river kayak sri lanka',
    image: WHALE_BLUE_IMG,
    path: '/tours.html'
  },
  'booking.html': {
    title: 'Book a Tour Online | Sea & Safari Tours Mirissa',
    description: 'Reserve your Mirissa whale watching or snorkeling tour online. Need an airport transfer? We also offer CMB → Mirissa shuttle for international travelers. Instant WhatsApp confirmation & free hotel pickup.',
    keywords: 'book mirissa tour, whale watching booking, mirissa tour reservation, colombo airport shuttle mirissa, cmb to mirissa transfer',
    image: `${SITE}/assets/images/logo.png`,
    path: '/booking.html'
  },
  'payment.html': {
    title: 'Complete Payment | Sea & Safari Tours',
    description: 'Secure your Sea & Safari Tours booking in Mirissa. Complete payment details for your whale watching or ocean adventure tour.',
    keywords: 'mirissa tour payment, sea safari tours booking',
    image: `${SITE}/assets/images/logo.png`,
    path: '/payment.html',
    robots: 'noindex, nofollow'
  },
  'about.html': {
    title: 'About Us | Mirissa Tour Company | Sea & Safari Tours',
    description: "Mirissa's trusted marine adventure company — 5+ years experience, 10,000+ happy travelers, expert local guides & ethical wildlife tours.",
    keywords: 'sea safari tours mirissa, about mirissa tour company, sri lanka tour operator',
    image: WHALE_BLUE_IMG,
    path: '/about.html'
  },
  'contact.html': {
    title: 'Contact Us | Sea & Safari Tours Mirissa Sri Lanka',
    description: 'Contact Sea & Safari Tours via WhatsApp +94 78 709 7430, phone, or email. Based in Mirissa — we reply within 1 hour. Book your tour today.',
    keywords: 'contact sea safari tours, mirissa tour phone, whale watching whatsapp mirissa',
    image: `${SITE}/assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_group-dive.png`,
    path: '/contact.html'
  },
  'faq.html': {
    title: 'FAQ | Mirissa Tours Booking & Whale Watching | Sea & Safari Tours',
    description: 'Frequently asked questions about Mirissa whale watching, booking, airport transfers from Colombo (CMB), safety, payment, cancellation policy, and what to bring on your tour.',
    keywords: 'mirissa whale watching faq, mirissa tour questions, sri lanka tour booking help, colombo airport to mirissa transfer faq, airport shuttle mirissa',
    image: `${SITE}/assets/images/logo.png`,
    path: '/faq.html'
  },
  'gallery.html': {
    title: 'Photo Gallery | Mirissa Whale Watching & Tours | Sea & Safari Tours',
    description: 'Real guest photos from Mirissa whale watching, turtle snorkeling, river kayaking, scuba diving, and Sri Lankan cooking class tours.',
    keywords: 'mirissa tour photos, whale watching pictures, mirissa snorkeling gallery',
    image: WHALE_BLUE_IMG_02,
    path: '/gallery.html'
  },
  'blog.html': {
    title: 'Mirissa Travel Blog | Whale Watching Tips & Sri Lanka Guides | Sea & Safari Tours',
    description: 'Expert guides on Mirissa whale watching seasons, turtle snorkeling, south coast travel, packing tips & ethical ocean tours in Sri Lanka.',
    keywords: 'mirissa blog, whale watching tips mirissa, things to do mirissa, sri lanka travel guide, mirissa travel blog',
    dcSubject: 'Mirissa Travel Blog, Whale Watching Guides, Sri Lanka Tourism',
    image: WHALE_BLUE_IMG,
    path: '/blog.html'
  },
  'combos.html': {
    title: 'Mirissa Combo Packages | Whale Watching & Tour Bundles | Sea & Safari Tours',
    description: 'Save on Mirissa combo packages — whale watching + turtle snorkeling, river kayak + cooking class & more. Bundled tours from $50/person with free hotel pickup.',
    keywords: 'mirissa combo packages, whale watching turtle snorkeling combo, mirissa tour bundles, sri lanka package tours mirissa',
    dcSubject: 'Mirissa Combo Packages, Tour Bundles, Whale Watching Packages',
    image: WHALE_BLUE_IMG,
    path: '/combos.html'
  },
  'airport-shuttle.html': {
    title: 'Airport Shuttle Mirissa | Colombo Airport (CMB) Transfers | Sea & Safari Tours',
    description: 'Private airport shuttle for international travelers — Colombo Bandaranaike Airport (CMB) to Mirissa and return. English-speaking driver, AC vehicle, meet & greet. From $85/vehicle. Book via WhatsApp.',
    keywords: 'colombo airport to mirissa transfer, cmb airport shuttle mirissa, mirissa airport pickup, sri lanka airport transfer foreigners, bandaranaike airport mirissa taxi',
    dcSubject: 'Airport Transfer, Colombo Airport Shuttle, Mirissa Transfer, CMB to Mirissa',
    image: `${SITE}/assets/images/airport-shuttle/aircraft_landing_sky.jpg`,
    path: '/airport-shuttle.html'
  },
  'tour-details.html': {
    title: 'Tour Details | Sea & Safari Tours',
    description: 'Detailed Mirissa tour information, itinerary, pricing, and online booking for Sea & Safari Tours.',
    keywords: 'mirissa tour details, sea safari tours',
    image: `${SITE}/assets/images/logo.png`,
    path: '/tours.html',
    robots: 'noindex, nofollow'
  }
};

const TOURS = [
  { id: 'whale-dolphin', name: 'Whale & Dolphin Watching', price: 45, duration: '3–4 Hours', shortDesc: 'Spot blue whales, sperm whales, turtles and dolphins on a 3–4 hour early-morning cruise from Mirissa Harbor.', keywords: 'mirissa whale watching, blue whale sri lanka, dolphin watching mirissa, whale watching tour mirissa, whale watching price mirissa', heroImage: 'assets/images/whale-dolphin/mirissa_whale_watching_tour_blue_whale.png' },
  { id: 'turtle-snorkeling', name: 'Turtle Snorkeling', price: 25, duration: '1.5 Hours', shortDesc: "Swim alongside sea turtles with a 100% sighting guarantee. 1.5 hours of guided snorkeling in Mirissa's calm reef waters.", keywords: 'turtle snorkeling mirissa, mirissa snorkeling, sea turtle tour sri lanka, snorkeling mirissa beach', heroImage: 'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_group-dive.png' },
  { id: 'crocodile-safari', name: 'Crocodile Watching', price: 30, duration: '2 Hours', shortDesc: 'Cruise the Nilwala River through lush mangroves and spot crocodiles, kingfishers, monkeys, and vibrant wildlife in Matara.', keywords: 'crocodile watching sri lanka, nilwala river safari, matara crocodile tour, mirissa crocodile watching', heroImage: 'assets/images/crocodile-safari/crocodile_watching_close-up.png' },
  { id: 'river-kayak', name: 'River Kayak Tours', price: 25, duration: '1.5 Hours', shortDesc: 'Glide through calm waterways surrounded by lush greenery and spot water monitors, kingfishers, herons, and monkeys.', keywords: 'river kayak mirissa, mangrove kayaking sri lanka, mirissa kayak tour, river safari mirissa', heroImage: 'assets/images/river-kayak/mirissa_kayak_mangrove-roots.png' },
  { id: 'scuba-diving', name: 'Scuba Diving Tours', price: 75, duration: '2 Hours', shortDesc: "Dive into Mirissa's vibrant underwater world with pro instructors, a 1:2 ratio, and options for beginners or certified divers.", keywords: 'scuba diving mirissa, mirissa diving tour, coral reef diving sri lanka, beginner scuba mirissa', heroImage: 'assets/images/scuba-diving/scuba_diving_diver-swimming.png' },
  { id: 'night-snorkeling', name: 'Night Snorkeling', price: 40, duration: '1.5 Hours', shortDesc: 'Guided day or night snorkeling in Mirissa — tropical fish, vibrant reefs, sea turtles, and an underwater flashlight experience.', keywords: 'night snorkeling mirissa, mirissa night dive, snorkeling sri lanka night tour', heroImage: 'assets/images/night-snorkeling/night_snorkeling_nurse-shark.png' },
  { id: 'deep-sea-fishing', name: 'Deep Sea Fishing Tours', price: 100, duration: '3–4 Hours', shortDesc: '3–4 hour private deep sea fishing in Mirissa with certified skipper, fishing guide, and gear — beginner-friendly, max 6 guests.', keywords: 'deep sea fishing mirissa, fishing tour sri lanka, mirissa boat fishing, private fishing mirissa', heroImage: 'assets/images/deep-sea-fishing/mirissa_deep_fishing_two-anglers.png' },
  { id: 'cooking-class', name: 'Authentic Sri Lankan Cooking Class', price: 30, duration: '2.5 Hours', shortDesc: 'Learn authentic Sri Lankan dishes with a local chef — hands-on cooking, traditional spices, and a shared meal in Mirissa.', keywords: 'sri lankan cooking class mirissa, mirissa cooking tour, authentic cooking experience sri lanka', heroImage: 'assets/images/cooking-class/mirissa_cooking_class_outdoor-kitchen.png' }
];

function escAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function tourMeta(tour) {
  const path = `/tours/${tour.id}.html`;
  const url = `${SITE}${path}`;
  const title = `${tour.name} Mirissa | Book Online | Sea & Safari Tours`;
  const description = `${tour.shortDesc} From $${tour.price}/person with free Mirissa hotel pickup. Book via WhatsApp or online — ${tour.duration}.`;
  const image = `${SITE}/${tour.heroImage}`;
  return {
    title,
    description,
    keywords: tour.keywords,
    dcSubject: tour.keywords,
    image,
    ogDescription: `${tour.shortDesc} From $${tour.price}/person with free hotel pickup.`,
    twitterTitle: `${tour.name} Mirissa | Book Online`,
    twitterDescription: `${tour.name} in Mirissa from $${tour.price}. Free hotel pickup included.`,
    path,
    url,
    ogType: 'product',
    isTour: true,
    product: { name: tour.name, shortDesc: tour.shortDesc, price: tour.price, sku: tour.id, image }
  };
}

function localBusinessJsonLd() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    alternateName: 'Sea Safari Tours Mirissa',
    image: `${SITE}/assets/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mirissa, Southern Province',
      addressLocality: 'Mirissa',
      addressRegion: 'Southern Province',
      postalCode: '81740',
      addressCountry: 'Sri Lanka'
    },
    url: `${SITE}/`,
    telephone: '+94787097430',
    email: 'seaandsafaritours@gmail.com'
  }, null, 2);
}

function websiteJsonLd() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: 'Sea Safari Tours Mirissa',
    url: `${SITE}/`,
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: `${SITE}/assets/images/logo.png`
    }
  }, null, 2);
}

function webPageJsonLd(meta, url) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: meta.title,
    url,
    description: meta.description
  }, null, 2);
}

function productJsonLd(product, url) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDesc,
    image: product.image,
    sku: product.sku,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'USD',
      price: String(product.price),
      availability: 'https://schema.org/InStock'
    }
  }, null, 2);
}

function buildHead(meta, assetPrefix) {
  const url = meta.url || `${SITE}${meta.path}`;
  const noindex = meta.robots && meta.robots.includes('noindex');
  const robots = meta.robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  const botTag = noindex ? meta.robots : 'index, follow';
  const ogType = meta.ogType || 'website';
  const ogDesc = meta.ogDescription || meta.description;
  const twitterTitle = meta.twitterTitle || meta.title;
  const twitterDesc = meta.twitterDescription || meta.description;
  const dcSubject = meta.dcSubject || meta.keywords || SITE_NAME;

  const jsonLd = [];
  if (meta.isHome) {
    jsonLd.push(`  <script type="application/ld+json">\n  ${websiteJsonLd()}\n  </script>`);
  }
  jsonLd.push(`  <script type="application/ld+json">\n  ${localBusinessJsonLd()}\n  </script>`);
  jsonLd.push(`  <script type="application/ld+json">\n  ${webPageJsonLd(meta, url)}\n  </script>`);
  if (meta.product) {
    jsonLd.push(`  <script type="application/ld+json">\n  ${productJsonLd(meta.product, url)}\n  </script>`);
  }

  return `<head>
  <!-- Main -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0">

  <!-- Title -->
  <title>${escAttr(meta.title)}</title>

  <!-- Structured Data (JSON-LD) -->
${jsonLd.join('\n')}

  <!-- SEO Meta -->
  <meta name="robots" content="${escAttr(robots)}">
  <meta name="googlebot" content="${escAttr(botTag)}">
  <meta name="bingbot" content="${escAttr(botTag)}">
  <meta name="slurp" content="${escAttr(botTag)}">
  <meta name="referrer" content="no-referrer">
  <meta name="description" content="${escAttr(meta.description)}">
  <meta name="keywords" content="${escAttr(meta.keywords)}">
  <meta name="author" content="Sea & Safari Tours">
  <meta name="copyright" content="${COPYRIGHT}">
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="en" href="${url}">
  <link rel="alternate" hreflang="x-default" href="${url}">
  <link rel="sitemap" type="application/xml" title="Sitemap" href="${SITE}/sitemap.xml">
  <link rel="sitemap" type="application/xml" title="Image Sitemap" href="${SITE}/sitemap-images.xml">

  <!-- Geo -->
  <meta name="geo.region" content="LK-3">
  <meta name="geo.placename" content="Mirissa, Sri Lanka">
  <meta name="geo.position" content="5.9483;80.4719">
  <meta name="ICBM" content="5.9483, 80.4719">

  <!-- Mobile -->
  <meta name="theme-color" content="#0f2832">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Sea & Safari Tours">
  <meta name="application-name" content="Sea & Safari Tours">

  <!-- Dublin Core -->
  <meta name="DC.title" content="${escAttr(meta.title)}">
  <meta name="DC.creator" content="Sea & Safari Tours">
  <meta name="DC.subject" content="${escAttr(dcSubject)}">
  <meta name="DC.description" content="${escAttr(meta.description)}">
  <meta name="DC.publisher" content="Sea & Safari Tours">
  <meta name="DC.contributor" content="Sea & Safari Tours">
  <meta name="DC.date" content="${DC_DATE}">
  <meta name="DC.type" content="Text">
  <meta name="DC.format" content="text/html">
  <meta name="DC.identifier" content="${url}">
  <meta name="DC.language" content="en">
  <meta name="DC.coverage" content="Mirissa, Sri Lanka">
  <meta name="DC.rights" content="${COPYRIGHT}. All rights reserved.">

  <!-- Open Graph -->
  <meta property="og:locale" content="en_US">
  <meta property="og:locale:alternate" content="en_GB">
  <meta property="og:type" content="${ogType}">
  <meta property="og:title" content="${escAttr(meta.title)}">
  <meta property="og:description" content="${escAttr(ogDesc)}">
  <meta property="og:image" content="${meta.image}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${url}">
  <meta property="og:site_name" content="Sea &amp; Safari Tours">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escAttr(twitterTitle)}">
  <meta name="twitter:description" content="${escAttr(twitterDesc)}">
  <meta name="twitter:image" content="${meta.image}">

  <!-- Favicons -->
  <link rel="icon" href="${assetPrefix}assets/images/logo.png">
  <link rel="apple-touch-icon" href="${assetPrefix}assets/images/logo.png">

  <link rel="stylesheet" href="${assetPrefix}assets/css/style.css">
</head>`;
}

function applyHead(filePath, meta, assetPrefix) {
  const html = fs.readFileSync(filePath, 'utf8');
  const newHead = buildHead(meta, assetPrefix);
  const updated = html.replace(/<head>[\s\S]*?<\/head>/, newHead);
  if (updated === html) {
    console.warn('No change:', filePath);
    return;
  }
  fs.writeFileSync(filePath, updated);
  console.log('Updated:', path.relative(ROOT, filePath));
}

for (const [file, meta] of Object.entries(PAGES)) {
  applyHead(path.join(ROOT, file), meta, '');
}

for (const tour of TOURS) {
  const file = path.join(ROOT, 'tours', `${tour.id}.html`);
  if (fs.existsSync(file)) {
    applyHead(file, tourMeta(tour), '../');
  }
}

console.log('Done — all pages now use the full index-style SEO head with unique page content.');
