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

function buildHead({
  title,
  description,
  keywords,
  url,
  dcSubject,
  image,
  ogType = 'website',
  articleMeta = '',
  jsonLdBlocks = [],
  assetPrefix = '../'
}) {
  const jsonLdScripts = [
    LOCAL_BUSINESS_JSON,
    ...jsonLdBlocks
  ].map(data => `  <script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`).join('\n');

  return `  <!-- Main -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0">

  <!-- Title -->
  <title>${title}</title>

  <!-- Structured Data (JSON-LD) -->
${jsonLdScripts}

  <!-- SEO Meta -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow">
  <meta name="bingbot" content="index, follow">
  <meta name="slurp" content="index, follow">
  <meta name="referrer" content="no-referrer">
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
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
  <meta name="DC.title" content="${title}">
  <meta name="DC.creator" content="Sea & Safari Tours">
  <meta name="DC.subject" content="${dcSubject}">
  <meta name="DC.description" content="${description}">
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
  <meta property="og:title" content="${title.replace(' | Sea &amp; Safari Tours Mirissa Blog', '')}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${image}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${url}">
  <meta property="og:site_name" content="Sea &amp; Safari Tours">
${articleMeta}
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title.replace(' | Sea &amp; Safari Tours Mirissa Blog', '')}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">

  <!-- Favicons -->
  <link rel="icon" href="${assetPrefix}assets/images/logo.png">
  <link rel="apple-touch-icon" href="${assetPrefix}assets/images/logo.png">

  <link rel="stylesheet" href="${assetPrefix}assets/css/style.css">`;
}

const posts = [
  {
    id: 'best-time-whale-watching-mirissa',
    title: 'Best Time for Whale Watching in Mirissa',
    description: 'When to visit Mirissa for blue whale and dolphin sightings — peak season, daily departures, weather tips, and how to book your tour.',
    category: 'Whale Watching',
    date: '2026-05-12',
    readTime: '6 min read',
    image: '../assets/images/whale-dolphin/mirissa_whale_watching_tour_blue_whale.png',
    lead: 'Mirissa is one of the world\'s best places to see blue whales in the wild. Here\'s exactly when to visit, what to expect, and how to maximise your chances of an unforgettable ocean encounter.',
    content: `
      <p>Mirissa sits on Sri Lanka's southern coast, where the continental shelf drops sharply into the deep Indian Ocean — creating ideal habitat for blue whales, sperm whales, dolphins, and sea turtles. Understanding the seasons and daily conditions helps you plan the perfect whale watching trip.</p>

      <h2>Peak Season: November to April</h2>
      <p>The best time for whale watching in Mirissa is during the <strong>northeast monsoon season</strong>, from roughly <strong>November through April</strong>. During these months, seas are calmer, visibility improves, and blue whales feed closer to shore.</p>
      <ul>
        <li><strong>December–March</strong> — Highest sighting rates; ideal for first-time visitors</li>
        <li><strong>November &amp; April</strong> — Shoulder season with fewer boats and good value</li>
        <li><strong>May–October</strong> — Southwest monsoon; tours may be limited due to rougher seas</li>
      </ul>

      <h2>Why Early-Morning Departures Matter</h2>
      <p>Our whale watching cruises depart around <strong>6:30–7:00 AM</strong> from Mirissa Harbor. Early mornings offer calmer water, cooler temperatures, and the best chance of spotting whales before wind picks up. You'll also enjoy a peaceful sunrise cruise — one of the highlights guests remember most.</p>

      <div class="blog-tip-box"><strong>Local Tip</strong><p>Book at least one day ahead during peak season (December–February). Morning slots fill quickly, especially around Christmas and New Year.</p></div>

      <h2>What You Can See</h2>
      <p>On a typical 3–4 hour Mirissa whale watching tour, guests often encounter:</p>
      <ul>
        <li>Blue whales — the largest animals on Earth</li>
        <li>Sperm whales and occasional fin whales</li>
        <li>Spinner dolphins and bottlenose dolphins</li>
        <li>Sea turtles and seabirds</li>
      </ul>
      <p>Mirissa has one of the highest whale sighting rates in the world, though wildlife can never be guaranteed 100%. Our experienced crew monitors whale movements and follows ethical viewing guidelines throughout the cruise.</p>

      <h2>Book Your Mirissa Whale Tour</h2>
      <p>Ready to see blue whales for yourself? Our <a href="../tours/whale-dolphin.html">Whale &amp; Dolphin Watching tour</a> includes free hotel pickup, breakfast on board, life jackets, and an expert local crew. <a href="../booking.html">Book online</a> or message us on WhatsApp for instant confirmation.</p>
    `
  },
  {
    id: 'turtle-snorkeling-guide-mirissa',
    title: 'Mirissa Turtle Snorkeling: A Complete Guide',
    description: 'Swim with sea turtles in Mirissa — beginner tips, 100% sighting guarantee, best times, and what to bring on your snorkeling adventure.',
    category: 'Snorkeling',
    date: '2026-05-08',
    readTime: '5 min read',
    image: '../assets/images/turtle-snorkeling/mirissa_turtle_snorkeling_swim-with-turtle.png',
    lead: 'Mirissa\'s calm reef waters are home to green and hawksbill turtles year-round. This guide covers everything you need for a safe, memorable turtle snorkeling experience.',
    content: `
      <p>Snorkeling with sea turtles is one of the most popular things to do in Mirissa — and for good reason. Shallow reef areas just off the coast offer crystal-clear water, colourful fish, and frequent turtle encounters suitable even for complete beginners.</p>

      <h2>Our 100% Turtle Sighting Guarantee</h2>
      <p>We guarantee turtle sightings on every snorkeling tour. If you don't see a turtle, you can come back for free. Our guides know the best reef zones and stay in the water with you throughout the session.</p>

      <h2>Who Can Join?</h2>
      <ul>
        <li>Complete beginners welcome — no experience needed</li>
        <li>Children accompanied by adults (life jackets provided)</li>
        <li>Confident swimmers and first-time snorkelers alike</li>
        <li>Small groups for personal attention</li>
      </ul>

      <h2>What\'s Included</h2>
      <p>Every turtle snorkeling tour includes mask and fins, in-water guide, safety briefing, light snacks, bottled water, and free pickup within the Mirissa area. Sessions run approximately 1.5 hours with flexible morning and afternoon time slots.</p>

      <div class="blog-tip-box"><strong>Responsible Snorkeling</strong><p>We never chase or touch turtles. Our guides follow ethical practices so turtles behave naturally — giving you respectful, close-up encounters.</p></div>

      <h2>Book Turtle Snorkeling in Mirissa</h2>
      <p>From just $25 per person, our <a href="../tours/turtle-snorkeling.html">Turtle Snorkeling tour</a> is the perfect half-day ocean adventure. <a href="../booking.html">Reserve your spot</a> or contact us via WhatsApp.</p>
    `
  },
  {
    id: 'things-to-do-mirissa-sri-lanka',
    title: '10 Best Things to Do in Mirissa, Sri Lanka',
    description: 'The top Mirissa experiences — whale watching, turtle snorkeling, river kayaking, cooking classes, fishing, and more on Sri Lanka\'s south coast.',
    category: 'Travel Tips',
    date: '2026-05-05',
    readTime: '8 min read',
    image: '../assets/images/river-kayak/mirissa_kayak_sunset-kayak.png',
    lead: 'Mirissa is far more than a beach town. From ocean giants to mangrove rivers and authentic cooking — here are the best experiences for every traveller.',
    content: `
      <p>Mirissa has evolved from a quiet fishing village into one of Sri Lanka's top adventure destinations. Whether you love wildlife, culture, or simply relaxing by the ocean, there\'s something here for everyone.</p>

      <h2>Top Mirissa Experiences</h2>
      <ol>
        <li><strong><a href="../tours/whale-dolphin.html">Whale &amp; Dolphin Watching</a></strong> — See blue whales on an early-morning cruise</li>
        <li><strong><a href="../tours/turtle-snorkeling.html">Turtle Snorkeling</a></strong> — Swim with sea turtles in calm reef waters</li>
        <li><strong><a href="../tours/river-kayak.html">River Kayak Tours</a></strong> — Paddle through mangroves and rainforest</li>
        <li><strong><a href="../tours/cooking-class.html">Cooking Class</a></strong> — Learn authentic Sri Lankan recipes</li>
        <li><strong><a href="../tours/scuba-diving.html">Scuba Diving</a></strong> — Explore coral reefs with certified guides</li>
        <li><strong><a href="../tours/crocodile-safari.html">Crocodile Safari</a></strong> — River wildlife near Matara</li>
        <li><strong><a href="../tours/deep-sea-fishing.html">Deep Sea Fishing</a></strong> — Big-game angling in the Indian Ocean</li>
        <li><strong><a href="../tours/night-snorkeling.html">Night Snorkeling</a></strong> — Discover the reef after dark</li>
        <li><strong>Mirissa Beach</strong> — Sunset views and relaxed beach cafés</li>
        <li><strong>Combo Packages</strong> — Save when you book two tours together on our <a href="../tours.html">tours page</a></li>
      </ol>

      <h2>How Many Days Do You Need?</h2>
      <p>We recommend at least <strong>2–3 days</strong> in Mirissa to enjoy whale watching, snorkeling, and one land or cultural activity. Many guests extend their stay after falling in love with the coast.</p>

      <blockquote>Most travellers tell us whale watching was the highlight of their entire Sri Lanka trip — plan it for your first full morning in Mirissa.</blockquote>

      <h2>Start Planning</h2>
      <p>Browse all <a href="../tours.html">8 Mirissa tours</a> or <a href="../booking.html">book online</a> with free hotel pickup included on most experiences.</p>
    `
  },
  {
    id: 'mirissa-south-coast-travel-guide',
    title: 'Mirissa South Coast Travel Guide',
    description: 'How to get to Mirissa, where to stay, best time to visit, local food, and tips for exploring Sri Lanka\'s southern coast.',
    category: 'Travel Tips',
    date: '2026-04-28',
    readTime: '7 min read',
    image: '../assets/images/whale-dolphin/mirissa_whale_watching_tour-boat.png',
    lead: 'Everything you need to plan a smooth, memorable trip to Mirissa — transport, accommodation, seasons, and local insider advice.',
    content: `
      <p>Mirissa is a small coastal town in Sri Lanka's Southern Province, roughly 150 km south of Colombo. It's the perfect base for ocean adventures, beach relaxation, and exploring the wider south coast.</p>

      <h2>Getting to Mirissa</h2>
      <ul>
        <li><strong>From Colombo Airport (CMB)</strong> — 3–4 hours by private car or taxi. <a href="../airport-shuttle.html">Book our airport shuttle</a> for international travelers.</li>
        <li><strong>By train</strong> — Take the coastal line to Weligama, then a 15-minute tuk-tuk to Mirissa</li>
        <li><strong>From Galle</strong> — 45 minutes south by car or bus</li>
        <li><strong>From Ella</strong> — 4–5 hours through scenic hill country (popular route)</li>
      </ul>

      <h2>Where to Stay</h2>
      <p>Mirissa offers everything from budget guesthouses to boutique beach hotels. Most accommodation is within walking distance of the harbor — ideal for early-morning whale tours. We provide <strong>free pickup</strong> from hotels in the Mirissa area on all our tours.</p>

      <h2>Best Time to Visit</h2>
      <p>The dry season (November–April) is best for whale watching and calm seas. The southwest monsoon (May–October) brings more rain but fewer crowds and lush green landscapes.</p>

      <div class="blog-tip-box"><strong>Food Tip</strong><p>Try fresh seafood at Mirissa beach restaurants — grilled fish, prawn curry, and king coconut are local favourites.</p></div>

      <h2>About Sea &amp; Safari Tours</h2>
      <p>We're Mirissa locals with 5+ years of experience running ocean and wildlife tours. <a href="../about.html">Learn more about us</a> or <a href="../contact.html">get in touch</a> for personalised trip advice.</p>
    `
  },
  {
    id: 'what-to-pack-mirissa-ocean-tours',
    title: 'What to Pack for Mirissa Ocean Tours',
    description: 'Essential packing list for Mirissa whale watching, snorkeling, diving, and fishing — stay comfortable and prepared on the water.',
    category: 'Travel Tips',
    date: '2026-04-20',
    readTime: '4 min read',
    image: '../assets/images/whale-dolphin/mirissa_whale_watching_boat-guests-1.png',
    lead: 'A practical checklist so you\'re comfortable, sun-safe, and ready for every Mirissa ocean adventure.',
    content: `
      <p>Packing smart makes a big difference on ocean tours. Mirissa's tropical climate is warm year-round, but mornings on the water can feel cooler — especially during whale watching departures before sunrise.</p>

      <h2>Essential Items</h2>
      <ul>
        <li><strong>Sunscreen</strong> — Reef-safe if snorkeling</li>
        <li><strong>Hat and sunglasses</strong> — Essential on open boats</li>
        <li><strong>Light jacket or wrap</strong> — Mornings can be breezy</li>
        <li><strong>Motion sickness tablets</strong> — We provide free tablets, but bring your own if preferred</li>
        <li><strong>Camera or phone</strong> — Waterproof case recommended for snorkeling</li>
        <li><strong>Reusable water bottle</strong> — We provide water on tours</li>
        <li><strong>Swimwear</strong> — Under clothes for snorkeling and diving tours</li>
        <li><strong>Towel</strong> — For after snorkeling sessions</li>
      </ul>

      <h2>What We Provide</h2>
      <p>Life jackets, snorkeling equipment, seasick tablets, breakfast (whale tours), and safety gear are all included. You don't need to bring heavy equipment — just come prepared for sun and sea.</p>

      <h2>What to Leave at the Hotel</h2>
      <p>Leave valuables and large bags at your hotel when possible. Wear comfortable, non-slip shoes for boarding boats.</p>

      <p>Questions about what to bring? Check our <a href="../faq.html">FAQ page</a> or message us on WhatsApp before your tour.</p>
    `
  },
  {
    id: 'ethical-whale-watching-sri-lanka',
    title: 'Ethical Whale Watching in Sri Lanka',
    description: 'How responsible whale watching protects marine life in Mirissa — safe distances, expert crews, and sustainable ocean tourism practices.',
    category: 'Wildlife',
    date: '2026-04-15',
    readTime: '5 min read',
    image: '../assets/images/whale-dolphin/mirissa_whale_watching_dolphins-surface.png',
    lead: 'Whale watching should be awe-inspiring for guests and safe for whales. Here\'s how ethical operators in Mirissa protect marine life while delivering world-class encounters.',
    content: `
      <p>Sri Lanka's whale watching industry has grown rapidly over the past decade. With that growth comes responsibility — choosing an operator that follows ethical practices ensures whales are not harassed and future generations can enjoy the same experiences.</p>

      <h2>What Ethical Whale Watching Looks Like</h2>
      <ul>
        <li>Maintaining safe distances from whales and dolphins</li>
        <li>Never chasing or circling animals aggressively</li>
        <li>Limiting time near individual whales</li>
        <li>Using experienced crews who read whale behaviour</li>
        <li>Proper waste management on boats</li>
        <li>Life jackets and insurance on every vessel</li>
      </ul>

      <h2>Our Commitment at Sea &amp; Safari Tours</h2>
      <p>Our skippers have 5+ years of experience in Mirissa waters. We follow responsible viewing practices on every cruise, prioritising animal welfare alongside guest safety and comfort. Boats carry life jackets, first-aid supplies, and full insurance.</p>

      <blockquote>Seeing a blue whale surface naturally in the wild is one of life's great moments — it should never come at the expense of the animal's wellbeing.</blockquote>

      <h2>Choose Responsible Tourism</h2>
      <p>When booking whale watching in Mirissa, ask about crew experience, boat safety, and viewing guidelines. Our <a href="../tours/whale-dolphin.html">Whale &amp; Dolphin Watching tour</a> combines ethical practices with excellent sighting rates. <a href="../booking.html">Book with confidence</a> — we're local experts who care about our ocean.</p>
    `
  }
];

function shell(post) {
  const url = `${SITE_URL}/blog/${post.id}.html`;
  const imgUrl = post.image.replace('../', `${SITE_URL}/`);
  const pageTitle = `${post.title} | Sea &amp; Safari Tours Mirissa Blog`;
  const keywords = `${post.category}, mirissa travel, sri lanka tours, ${post.title.toLowerCase()}`;
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': url,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'en',
    author: { '@type': 'Organization', name: 'Sea & Safari Tours', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Sea & Safari Tours',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/logo.png` }
    },
    image: { '@type': 'ImageObject', url: imgUrl, width: 1200, height: 630 },
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle.replace(/&amp;/g, '&'),
    url,
    description: post.description
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog.html` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url }
    ]
  };
  const articleMeta = `  <meta property="article:published_time" content="${post.date}T08:00:00+05:30">
  <meta property="article:section" content="${post.category}">
`;
  const head = buildHead({
    title: pageTitle,
    description: post.description,
    keywords,
    url,
    dcSubject: `${post.category}, Mirissa Travel Blog, Sri Lanka Tourism`,
    image: imgUrl,
    ogType: 'article',
    articleMeta,
    jsonLdBlocks: [webPageSchema, blogPostingSchema, breadcrumbSchema]
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body data-blog-post="${post.id}">

  <header class="header scrolled">
    <div class="container header-inner">
      <a href="../index.html" class="logo"><img src="../assets/images/logo.png" alt="Sea & Safari Tours" class="logo-img"> Sea & Safari Tours</a>
      <nav class="nav">
        <a href="../index.html" class="nav-link">Home</a>
        <div class="nav-dropdown">
          <a href="../tours.html" class="nav-link nav-link-caret">Tours</a>
          <div class="dropdown-menu">
            <a href="../tours/whale-dolphin.html">Whale &amp; Dolphin Watching</a>
            <a href="../tours/turtle-snorkeling.html">Turtle Snorkeling</a>
            <a href="../tours/crocodile-safari.html">Crocodile Safari</a>
            <a href="../tours/river-kayak.html">River Kayak Tours</a>
            <a href="../tours/scuba-diving.html">Scuba Diving</a>
            <a href="../tours/night-snorkeling.html">Night Snorkeling</a>
            <a href="../tours/deep-sea-fishing.html">Deep Sea Fishing</a>
            <a href="../tours/cooking-class.html">Cooking Class</a>
            <a href="../tours.html" class="dropdown-all">View All Tours <span class="link-arrow" aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <a href="../booking.html" class="nav-link">Book Now</a>
        <a href="../about.html" class="nav-link">About</a>
        <a href="../contact.html" class="nav-link">Contact</a>
      </nav>
      <a href="../booking.html" class="btn btn-primary btn-sm nav-cta">Reserve Tour</a>
      <button class="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    </div>
  </header>
  <nav class="mobile-nav">
    <a href="../index.html" class="nav-link">Home</a>
    <a href="../tours.html" class="nav-link">All Tours</a>
    <a href="../booking.html" class="nav-link">Book Now</a>
    <a href="../about.html" class="nav-link">About</a>
    <a href="../contact.html" class="nav-link">Contact</a>
    <a href="../booking.html" class="btn btn-primary">Reserve Tour</a>
  </nav>

  <header class="blog-article-hero">
    <div class="container">
      <nav class="breadcrumb"><a href="../index.html" data-i18n="nav.home">Home</a> / <a href="../blog.html" data-i18n="nav.blog">Blog</a> / <span>${post.title}</span></nav>
      <div class="blog-article-meta">
        <span class="blog-article-category">${post.category}</span>
        <time datetime="${post.date}">${new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
        <span>${post.readTime}</span>
      </div>
      <h1>${post.title}</h1>
      <p class="blog-article-lead">${post.lead}</p>
    </div>
    <div class="container blog-article-cover">
      <img src="${post.image}" alt="${post.title}" width="1200" height="630" loading="eager">
    </div>
  </header>

  <div class="container blog-article-layout">
    <article class="blog-article-body">
      ${post.content.trim()}
      <nav class="blog-article-nav">
        <a href="../blog.html" class="btn btn-ocean btn-sm">&larr; All Articles</a>
        <a href="../booking.html" class="btn btn-primary btn-sm">Book a Tour</a>
      </nav>
    </article>
    <aside class="blog-article-sidebar" id="blog-related"></aside>
  </div>

  <footer class="footer">
    <div class="footer-wave" aria-hidden="true"><svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,40 C320,8 640,56 960,32 C1200,14 1320,20 1440,36 L1440,56 L0,56 Z"/></svg></div>
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="../index.html" class="footer-logo"><img src="../assets/images/logo.png" alt="Sea & Safari Tours" class="logo-img" width="48" height="48"><span>Sea & Safari Tours</span></a>
          <p class="footer-tagline">Premium whale watching, snorkeling, diving &amp; wildlife adventures in Mirissa.</p>
        </div>
        <div class="footer-nav">
          <div class="footer-col"><h4>Explore</h4><ul><li><a href="../index.html">Home</a></li><li><a href="../tours.html">All Tours</a></li><li><a href="../blog.html">Blog</a></li><li><a href="../booking.html">Book Now</a></li></ul></div>
          <div class="footer-col footer-col-contact"><h4>Get in Touch</h4><ul class="footer-contact-list"><li><a href="tel:+94787097430">+94 78 709 7430</a></li></ul></div>
        </div>
      </div>
      <div class="footer-bottom"><p>&copy; 2026 Sea &amp; Safari Tours. All rights reserved.</p></div>
    </div>
  </footer>
  <a href="https://wa.me/94787097430" class="floating-whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><svg class="floating-whatsapp-icon" viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
  <script src="../assets/js/blog-translations.js"></script>
  <script src="../assets/js/translations.js"></script>
  <script src="../assets/js/i18n.js"></script>
  <script src="../assets/js/script.js"></script>
</body>
</html>`;
}

const outDir = path.join(__dirname, '..', 'blog');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

posts.forEach(post => {
  fs.writeFileSync(path.join(outDir, `${post.id}.html`), shell(post), 'utf8');
  console.log('Created', post.id + '.html');
});
