const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const SITE = 'https://www.ceylonseasafaritours.com';
const PRICE_VALID_UNTIL = '2026-12-31';

const tourTitles = {
  'whale-dolphin.html': 'Whale & Dolphin Watching',
  'turtle-snorkeling.html': 'Turtle Snorkeling',
  'crocodile-safari.html': 'Crocodile Watching',
  'river-kayak.html': 'River Kayak Tours',
  'scuba-diving.html': 'Scuba Diving Tours',
  'night-snorkeling.html': 'Night Snorkeling',
  'deep-sea-fishing.html': 'Deep Sea Fishing Tours',
  'cooking-class.html': 'Authentic Sri Lankan Cooking Class'
};

const tourProducts = {
  'whale-dolphin.html': {
    name: 'Whale & Dolphin Watching',
    price: 45,
    desc: 'Spot blue whales, sperm whales, turtles and dolphins on a 3–4 hour early-morning cruise from Mirissa Harbor.',
    image: '/assets/images/whale-dolphin/mirissa_whale_watching_tour_blue_whale.png'
  },
  'turtle-snorkeling.html': {
    name: 'Turtle Snorkeling',
    price: 25,
    desc: 'Swim alongside sea turtles with a 100% sighting guarantee. 1.5 hours of guided snorkeling in Mirissa\'s calm reef waters.',
    image: '/assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_group-dive.png'
  },
  'crocodile-safari.html': {
    name: 'Crocodile Watching',
    price: 30,
    desc: 'Cruise the Nilwala River through lush mangroves and spot crocodiles, kingfishers, monkeys, and vibrant wildlife in Matara.',
    image: '/assets/images/crocodile-safari/crocodile_watching_close-up.png'
  },
  'river-kayak.html': {
    name: 'River Kayak Tours',
    price: 25,
    desc: 'Glide through calm waterways surrounded by lush greenery and spot water monitors, kingfishers, herons, and monkeys.',
    image: '/assets/images/river-kayak/mirissa_kayak_mangrove-roots.png'
  },
  'scuba-diving.html': {
    name: 'Scuba Diving Tours',
    price: 75,
    desc: 'Dive into Mirissa\'s vibrant underwater world with pro instructors, a 1:2 ratio, and options for beginners or certified divers.',
    image: '/assets/images/scuba-diving/scuba_diving_diver-swimming.png'
  },
  'night-snorkeling.html': {
    name: 'Night Snorkeling',
    price: 40,
    desc: 'Guided day or night snorkeling in Mirissa — tropical fish, vibrant reefs, sea turtles, and an underwater flashlight experience.',
    image: '/assets/images/night-snorkeling/night_snorkeling_nurse-shark.png'
  },
  'deep-sea-fishing.html': {
    name: 'Deep Sea Fishing Tours',
    price: 100,
    desc: '3–4 hour private deep sea fishing in Mirissa with certified skipper, fishing guide, and gear — beginner-friendly, max 6 guests.',
    image: '/assets/images/deep-sea-fishing/mirissa_deep_fishing_two-anglers.png'
  },
  'cooking-class.html': {
    name: 'Authentic Sri Lankan Cooking Class',
    price: 30,
    desc: 'Learn authentic Sri Lankan dishes with a local chef — hands-on cooking, traditional spices, and a shared meal in Mirissa.',
    image: '/assets/images/cooking-class/mirissa_cooking_class_outdoor-kitchen.png'
  }
};

function productJsonLd(fileName) {
  const tour = tourProducts[fileName];
  if (!tour) return '';
  const slug = fileName.replace('.html', '');
  return `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": ${JSON.stringify(tour.name)},
    "description": ${JSON.stringify(tour.desc)},
    "image": "${SITE}${tour.image}",
    "sku": "${slug}",
    "brand": { "@type": "Brand", "name": "Sea & Safari Tours" },
    "offers": {
      "@type": "Offer",
      "url": "${SITE}/tours/${fileName}",
      "priceCurrency": "USD",
      "price": "${tour.price}",
      "priceValidUntil": "${PRICE_VALID_UNTIL}",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Sea & Safari Tours", "url": "${SITE}/" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    }
  }
  </script>`;
}

function patchHtml(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  const fileName = path.basename(filePath);
  const isTour = filePath.includes(`${path.sep}tours${path.sep}`);

  if (html.includes('alt="" class="logo-img"')) {
    html = html.replace(/alt="" class="logo-img"/g, 'alt="Sea & Safari Tours" class="logo-img"');
    changed = true;
  }

  if (html.includes('© 2025 Sea & Safari Tours')) {
    html = html.replace(/© 2025 Sea & Safari Tours/g, '© 2026 Sea & Safari Tours');
    changed = true;
  }

  if (isTour && tourTitles[fileName]) {
    const title = tourTitles[fileName];
    const loadingH1 = '<h1 id="tour-hero-title">Loading...</h1>';
    const properH1 = `<h1 id="tour-hero-title">${title}</h1>`;
    if (html.includes(loadingH1)) {
      html = html.replace(loadingH1, properH1);
      changed = true;
    }

    if (!html.includes('"@type": "Product"') && tourProducts[fileName]) {
      html = html.replace(
        '<link rel="stylesheet" href="../assets/css/style.css">',
        `${productJsonLd(fileName)}\n  <link rel="stylesheet" href="../assets/css/style.css">`
      );
      changed = true;
    }
  }

  if (fileName === 'tour-details.html') {
    if (!html.includes('name="robots" content="noindex')) {
      html = html.replace(
        '<meta name="description" content="Detailed tour information, itinerary, and booking.">',
        `<meta name="description" content="Detailed tour information, itinerary, and booking.">
  <meta name="robots" content="noindex, nofollow">
  <meta name="googlebot" content="noindex, nofollow">
  <meta name="bingbot" content="noindex, nofollow">
  <meta name="slurp" content="noindex, nofollow">
  <link rel="canonical" href="${SITE}/tours.html">`
      );
      changed = true;
    }
  }

  if (!html.includes('name="mobile-web-app-capable"') && fileName !== 'index.html') {
    html = html.replace(
      '<meta name="apple-mobile-web-app-capable" content="yes">',
      '<meta name="mobile-web-app-capable" content="yes">\n  <meta name="apple-mobile-web-app-capable" content="yes">'
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, html);
    console.log('Updated', filePath);
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) patchHtml(full);
  }
}

walk(root);
