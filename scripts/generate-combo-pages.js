const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.ceylonseasafaritours.com';
const DC_DATE = '2026-06-07';

const LOCAL_BUSINESS_JSON = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sea & Safari Tours',
  alternateName: 'Sea Safari Tours Mirissa',
  image: `${SITE_URL}/assets/images/logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mirissa, Southern Province',
    addressLocality: 'Mirissa',
    addressRegion: 'Southern Province',
    postalCode: '81740',
    addressCountry: 'Sri Lanka'
  },
  url: `${SITE_URL}/`,
  telephone: '+94787097430',
  email: 'seaandsafaritours@gmail.com'
};

const combos = [
  {
    id: 'whale-turtle',
    name: 'Whale & Dolphin Watching + Turtle Snorkeling',
    desc: 'Our best-selling combo — morning whale cruise, then snorkel with turtles. Free hotel pickup included.',
    price: 65,
    originalPrice: 70,
    duration: 'Full Day (~6 hours)',
    image: 'assets/images/whale-dolphin/mirissa_whale_watching_whale-breach.png',
    keywords: 'mirissa whale and turtle combo, whale watching turtle snorkeling package mirissa, mirissa combo tour, blue whale snorkeling bundle sri lanka'
  },
  {
    id: 'kayak-cooking',
    name: 'River Kayak + Cooking Class',
    desc: 'Paddle through mangroves in the morning, then learn authentic Sri Lankan cooking in the afternoon.',
    price: 50,
    originalPrice: 55,
    duration: 'Half Day (~4 hours)',
    image: 'assets/images/river-kayak/mirissa_kayak_mangrove-roots.png',
    keywords: 'mirissa kayak cooking class combo, river kayak cooking package mirissa, sri lanka culture nature tour'
  },
  {
    id: 'whale-kayak',
    name: 'Whale & Dolphin Watching + River Kayak',
    desc: 'Combine an early-morning ocean safari with a peaceful river kayak through rainforest and mangroves.',
    price: 65,
    originalPrice: 70,
    duration: 'Full Day (~6 hours)',
    image: 'assets/images/river-kayak/mirissa_kayak_sunset-kayak.png',
    keywords: 'mirissa whale watching kayak combo, blue whale river kayak package, land and sea mirissa tour'
  },
  {
    id: 'whale-crocodile',
    name: 'Whale & Dolphin Watching + Crocodile Watching',
    desc: 'Ocean giants in the morning and crocodile river safari in the afternoon — two unforgettable wildlife experiences.',
    price: 70,
    originalPrice: 75,
    duration: 'Full Day (~7 hours)',
    image: 'assets/images/crocodile-safari/crocodile_watching_close-up.png',
    keywords: 'mirissa whale crocodile combo, whale watching crocodile safari package, wildlife combo tour sri lanka'
  },
  {
    id: 'turtle-kayak',
    name: 'Turtle Snorkeling + River Kayak',
    desc: 'Swim with sea turtles, then paddle through calm mangrove rivers — two gentle adventures in one morning.',
    price: 45,
    originalPrice: 50,
    duration: 'Half Day (~3.5 hours)',
    image: 'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_swim-with-turtle.png',
    keywords: 'turtle snorkeling kayak combo mirissa, mirissa turtle and kayak package, ocean and river combo sri lanka'
  },
  {
    id: 'turtle-crocodile',
    name: 'Turtle Snorkeling + Crocodile Watching',
    desc: 'Reef turtles in the morning and crocodile river safari in the afternoon — two unique wildlife encounters in one day.',
    price: 50,
    originalPrice: 55,
    duration: 'Half Day (~5 hours)',
    image: 'assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_group-dive.png',
    keywords: 'turtle snorkeling crocodile combo mirissa, mirissa turtle crocodile package, wildlife snorkeling safari sri lanka'
  }
];

const combosListing = {
  title: 'Mirissa Combo Packages | Whale Watching & Tour Bundles | Sea & Safari Tours',
  description: 'Save on Mirissa combo packages — whale watching + turtle snorkeling, river kayak + cooking class & more. Bundled tours from $50/person with free hotel pickup.',
  keywords: 'mirissa combo packages, whale watching turtle snorkeling combo, mirissa tour bundles, sri lanka package tours mirissa',
  image: `${SITE_URL}/assets/images/whale-dolphin/mirissa_whale_watching_whale-breach.png`,
  path: '/combos.html'
};

function escAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function comboMeta(combo) {
  const savings = combo.originalPrice - combo.price;
  const urlPath = `/combos/${combo.id}.html`;
  const url = `${SITE_URL}${urlPath}`;
  const title = `${combo.name} Mirissa | Combo Package | Sea & Safari Tours`;
  const description = `${combo.desc} Bundle price $${combo.price}/person (save $${savings}). Free Mirissa hotel pickup — ${combo.duration}.`;
  const image = `${SITE_URL}/${combo.image}`;
  return { title, description, keywords: combo.keywords, url, urlPath, image, combo, savings };
}

function buildHead({ title, description, keywords, url, image, ogType = 'website', jsonLdBlocks = [], assetPrefix = '../' }) {
  const jsonLdScripts = [LOCAL_BUSINESS_JSON, ...jsonLdBlocks]
    .map(data => `  <script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`)
    .join('\n');

  return `  <!-- Main -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0">

  <!-- Title -->
  <title>${escAttr(title)}</title>

  <!-- Structured Data (JSON-LD) -->
${jsonLdScripts}

  <!-- SEO Meta -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow">
  <meta name="bingbot" content="index, follow">
  <meta name="slurp" content="index, follow">
  <meta name="referrer" content="no-referrer">
  <meta name="description" content="${escAttr(description)}">
  <meta name="keywords" content="${escAttr(keywords)}">
  <meta name="author" content="Sea & Safari Tours">
  <meta name="copyright" content="© 2026 Sea & Safari Tours">
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="en" href="${url}">
  <link rel="alternate" hreflang="de" href="${url}">
  <link rel="alternate" hreflang="fr" href="${url}">
  <link rel="alternate" hreflang="x-default" href="${url}">
  <link rel="sitemap" type="application/xml" title="Sitemap" href="${SITE_URL}/sitemap.xml">

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
  <meta name="DC.title" content="${escAttr(title)}">
  <meta name="DC.creator" content="Sea & Safari Tours">
  <meta name="DC.subject" content="${escAttr(keywords)}">
  <meta name="DC.description" content="${escAttr(description)}">
  <meta name="DC.publisher" content="Sea & Safari Tours">
  <meta name="DC.contributor" content="Sea & Safari Tours">
  <meta name="DC.date" content="${DC_DATE}">
  <meta name="DC.type" content="Text">
  <meta name="DC.format" content="text/html">
  <meta name="DC.identifier" content="${url}">
  <meta name="DC.language" content="en">
  <meta name="DC.coverage" content="Mirissa, Sri Lanka">
  <meta name="DC.rights" content="© 2026 Sea & Safari Tours. All rights reserved.">

  <!-- Open Graph -->
  <meta property="og:locale" content="en_US">
  <meta property="og:locale:alternate" content="en_GB">
  <meta property="og:type" content="${ogType}">
  <meta property="og:title" content="${escAttr(title)}">
  <meta property="og:description" content="${escAttr(description)}">
  <meta property="og:image" content="${image}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${url}">
  <meta property="og:site_name" content="Sea &amp; Safari Tours">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escAttr(title)}">
  <meta name="twitter:description" content="${escAttr(description)}">
  <meta name="twitter:image" content="${image}">

  <!-- Favicons -->
  <link rel="icon" href="${assetPrefix}assets/images/logo.png">
  <link rel="apple-touch-icon" href="${assetPrefix}assets/images/logo.png">

  <link rel="stylesheet" href="${assetPrefix}assets/css/style.css">`;
}

function headerBlock(assetPrefix) {
  return `  <header class="header">
    <div class="container header-inner">
      <a href="${assetPrefix}index.html" class="logo"><img src="${assetPrefix}assets/images/logo.png" alt="Sea & Safari Tours" class="logo-img"> Sea & Safari Tours</a>
      <nav class="nav">
        <a href="${assetPrefix}index.html" class="nav-link">Home</a>
        <div class="nav-dropdown">
          <a href="${assetPrefix}tours.html" class="nav-link nav-link-caret">Tours</a>
          <div class="dropdown-menu">
            <a href="${assetPrefix}tours/whale-dolphin.html">Whale &amp; Dolphin Watching</a>
            <a href="${assetPrefix}tours/turtle-snorkeling.html">Turtle Snorkeling</a>
            <a href="${assetPrefix}tours/crocodile-safari.html">Crocodile Safari</a>
            <a href="${assetPrefix}tours/river-kayak.html">River Kayak Tours</a>
            <a href="${assetPrefix}tours/scuba-diving.html">Scuba Diving</a>
            <a href="${assetPrefix}tours/night-snorkeling.html">Night Snorkeling</a>
            <a href="${assetPrefix}tours/deep-sea-fishing.html">Deep Sea Fishing</a>
            <a href="${assetPrefix}tours/cooking-class.html">Cooking Class</a>
            <a href="${assetPrefix}tours.html" class="dropdown-all">View All Tours <span class="link-arrow" aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <a href="${assetPrefix}booking.html" class="nav-link">Book Now</a>
        <a href="${assetPrefix}about.html" class="nav-link">About</a>
        <a href="${assetPrefix}contact.html" class="nav-link">Contact</a>
      </nav>
      <a href="${assetPrefix}booking.html" class="btn btn-primary btn-sm nav-cta">Reserve Tour</a>
      <button class="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    </div>
  </header>
  <nav class="mobile-nav">
    <a href="${assetPrefix}index.html" class="nav-link">Home</a>
    <a href="${assetPrefix}tours.html" class="nav-link">All Tours</a>
    <a href="${assetPrefix}booking.html" class="nav-link">Book Now</a>
    <a href="${assetPrefix}about.html" class="nav-link">About</a>
    <a href="${assetPrefix}contact.html" class="nav-link">Contact</a>
    <a href="${assetPrefix}booking.html" class="btn btn-primary">Reserve Tour</a>
  </nav>`;
}

function footerBlock(assetPrefix) {
  return `  <footer class="footer" id="contact">
    <div class="footer-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,40 C320,8 640,56 960,32 C1200,14 1320,20 1440,36 L1440,56 L0,56 Z"/></svg>
    </div>
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="${assetPrefix}index.html" class="footer-logo">
            <img src="${assetPrefix}assets/images/logo.png" alt="Sea & Safari Tours" class="logo-img" width="48" height="48">
            <span>Sea & Safari Tours</span>
          </a>
          <p class="footer-tagline">Premium whale watching, snorkeling, diving &amp; wildlife adventures in Mirissa — trusted local guides and easy booking.</p>
          <div class="footer-actions">
            <a href="${assetPrefix}booking.html" class="btn btn-primary btn-sm">Book a Tour</a>
            <a href="https://wa.me/94787097430?text=Hello!%20I'd%20like%20to%20inquire%20about%20a%20tour." class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
        <div class="footer-nav">
          <div class="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="${assetPrefix}index.html">Home</a></li>
              <li><a href="${assetPrefix}tours.html">All Tours</a></li>
              <li><a href="${assetPrefix}combos.html">Combo Packages</a></li>
              <li><a href="${assetPrefix}booking.html">Book Now</a></li>
              <li><a href="${assetPrefix}about.html">About Us</a></li>
              <li><a href="${assetPrefix}contact.html">Contact</a></li>
              <li><a href="${assetPrefix}faq.html">FAQ</a></li>
              <li><a href="${assetPrefix}gallery.html">Gallery</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Popular Combos</h4>
            <ul>
              <li><a href="${assetPrefix}combos/whale-turtle.html">Whale + Turtle</a></li>
              <li><a href="${assetPrefix}combos/whale-kayak.html">Whale + Kayak</a></li>
              <li><a href="${assetPrefix}combos/whale-crocodile.html">Whale + Crocodile</a></li>
              <li><a href="${assetPrefix}combos/kayak-cooking.html">Kayak + Cooking</a></li>
              <li><a href="${assetPrefix}combos/turtle-kayak.html">Turtle + Kayak</a></li>
              <li><a href="${assetPrefix}combos/turtle-crocodile.html">Turtle + Crocodile</a></li>
            </ul>
          </div>
          <div class="footer-col footer-col-contact">
            <h4>Get in Touch</h4>
            <ul class="footer-contact-list">
              <li><a href="tel:+94787097430">+94 78 709 7430</a></li>
              <li><a href="mailto:seaandsafaritours@gmail.com">seaandsafaritours@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Sea &amp; Safari Tours. All rights reserved.</p>
        <p class="footer-made">Mirissa, Sri Lanka</p>
      </div>
    </div>
  </footer>
  <a href="https://wa.me/94787097430" class="floating-whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><svg class="floating-whatsapp-icon" viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" focusable="false"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>`;
}

function comboDetailPage(combo) {
  const meta = comboMeta(combo);
  const jsonLdBlocks = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: meta.title,
      url: meta.url,
      description: meta.description
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: combo.name,
      description: combo.desc,
      image: meta.image,
      sku: combo.id,
      brand: { '@type': 'Brand', name: 'Sea & Safari Tours' },
      offers: {
        '@type': 'Offer',
        url: meta.url,
        priceCurrency: 'USD',
        price: String(combo.price),
        availability: 'https://schema.org/InStock'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Combo Packages', item: `${SITE_URL}/combos.html` },
        { '@type': 'ListItem', position: 3, name: combo.name, item: meta.url }
      ]
    }
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
${buildHead({
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  url: meta.url,
  image: meta.image,
  ogType: 'product',
  jsonLdBlocks,
  assetPrefix: '../'
})}
</head>
<body>
${headerBlock('../')}

  <section class="tour-detail-hero">
    <div class="tour-detail-hero-overlay">
      <div class="tour-detail-hero-content">
        <nav class="breadcrumb"><a href="../index.html" data-i18n="nav.home">Home</a> / <a href="../combos.html" data-i18n="comboUi.breadcrumb">Combo Packages</a> / <span>${combo.name}</span></nav>
        <h1 id="combo-hero-title">${combo.name}</h1>
        <div class="tour-detail-meta" id="combo-hero-meta"></div>
      </div>
    </div>
  </section>
  <div id="combo-detail-content" data-combo-id="${combo.id}"></div>

${footerBlock('../')}
<script src="../assets/js/translations.js"></script>
<script src="../assets/js/i18n.js"></script>
<script src="../assets/js/script.js"></script>
</body>
</html>`;
}

function combosListingPage() {
  const url = `${SITE_URL}${combosListing.path}`;
  const jsonLdBlocks = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: combosListing.title,
      url,
      description: combosListing.description
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Combo Packages', item: url }
      ]
    }
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
${buildHead({
  title: combosListing.title,
  description: combosListing.description,
  keywords: combosListing.keywords,
  url,
  image: combosListing.image,
  jsonLdBlocks,
  assetPrefix: ''
})}
</head>
<body>
${headerBlock('')}

  <section class="page-hero" style="background-image:url('assets/images/whale-dolphin/mirissa_whale_watching_whale-breach.png')">
    <div class="page-hero-overlay"></div>
    <div class="container page-hero-content">
      <nav class="breadcrumb"><a href="index.html" data-i18n="nav.home">Home</a> / <span data-i18n="comboUi.breadcrumb">Combo Packages</span></nav>
      <h1 data-i18n="comboUi.pageTitle">Mirissa Combo Packages</h1>
      <p data-i18n="comboUi.pageSubtitle">Bundle two tours and save — free hotel pickup on every combo package.</p>
    </div>
  </section>
  <section class="section combo-section">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label" data-i18n="home.saveMore">Save More</span>
        <h2 class="section-title" data-i18n="home.comboPackages">Combo Packages</h2>
        <p class="section-desc" data-i18n="home.comboDesc">Six bundled Mirissa experiences — save when you book two tours together. Free hotel pickup on all combos.</p>
      </div>
      <div class="combo-grid" data-render="combos"></div>
    </div>
  </section>
  <section class="cta-section" style="background-image:url('assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_group-dive.png')">
    <div class="cta-overlay"></div>
    <div class="container cta-content">
      <h2 data-i18n="home.readyToBook">Ready to Book?</h2>
      <p data-i18n="home.readyDesc">Message us on WhatsApp with your preferred combo and date — we confirm within an hour.</p>
      <div class="cta-buttons">
        <a href="booking.html" class="btn btn-primary" data-i18n="nav.bookNow">Book Now</a>
        <a href="https://wa.me/94787097430" class="btn btn-whatsapp" target="_blank" rel="noopener" data-i18n="common.whatsapp">WhatsApp</a>
      </div>
    </div>
  </section>

${footerBlock('')}
<script src="assets/js/translations.js"></script>
<script src="assets/js/i18n.js"></script>
<script src="assets/js/script.js"></script>
</body>
</html>`;
}

const outDir = path.join(__dirname, '..', 'combos');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

combos.forEach(combo => {
  fs.writeFileSync(path.join(outDir, `${combo.id}.html`), comboDetailPage(combo), 'utf8');
  console.log('Created combos/' + combo.id + '.html');
});

fs.writeFileSync(path.join(__dirname, '..', 'combos.html'), combosListingPage(), 'utf8');
console.log('Created combos.html');
