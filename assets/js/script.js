/* ============================================
   Sea & Safari Tours – Main JavaScript
   ============================================ */

const WHATSAPP_NUMBER = '94787097430';
const COMPANY_EMAIL = 'seaandsafaritours@gmail.com';

const IS_IN_TOURS_DIR = window.location.pathname.includes('/tours/');
const TOURS_PATH = IS_IN_TOURS_DIR ? '' : 'tours/';
const ROOT_PATH = IS_IN_TOURS_DIR ? '../' : '';
const IMG_PATH = IS_IN_TOURS_DIR ? '../' : '';
function resolveImg(src) { return src.startsWith('http') ? src : IMG_PATH + src; }

const TOURS = {
  'whale-dolphin': {
    id: 'whale-dolphin',
    name: 'Whale & Dolphin Watching',
    altPrefix: 'Mirissa Whale watching Tours',
    location: 'Mirissa, Sri Lanka',
    shortDesc: 'Spot blue whales, sperm whales, turtles and dolphins on a 3–4 hour early-morning cruise from Mirissa Harbor.',
    price: 45,
    duration: '3–4 Hours',
    image: 'assets/images/whale-dolphin/mirissa_whale_watching_whale-breach.png',
    heroImage: 'assets/images/whale-dolphin/mirissa_whale_watching_collage.png',
    gallery: [
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
    excluded: ['Personal expenses', 'Tips for crew', 'Underwater camera rental']
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
    excluded: ['Underwater GoPro camera rental (available on request)', 'Personal expenses', 'Tips for guide']
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
    }
  },
  'scuba-diving': {
    id: 'scuba-diving',
    name: 'Scuba Diving Tours',
    altPrefix: 'Mirissa Scuba Diving Tours',
    location: 'Mirissa, Sri Lanka',
    shortDesc: 'Dive into Mirissa’s vibrant underwater world with pro instructors, a 1:2 ratio, and options for beginners or certified divers.',
    price: 75,
    duration: '2 Hours',
    timeSlots: '8:00 AM, 9:00 AM, 10:00 AM, 11:00 AM',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&q=80',
      'https://images.unsplash.com/photo-1568430778127-9d0f010a2a1f?w=600&q=80'
    ],
    highlights: [
      'Dive into the vibrant underwater world of the Indian Ocean in Mirissa',
      'Choose from options for beginners or certified divers to suit your needs',
      'Explore colorful coral reefs and schools of tropical fish in the ocean',
      'Enjoy a personalized experience with a 1:2 instructor-to-guest ratio',
      'Relax with tasty snacks and a cup of authentic Ceylon tea after your dive'
    ],
    fullDesc: 'Embark on a scuba diving adventure in Mirissa, Sri Lanka. Choose from options for beginners or certified divers, and explore the vibrant underwater world of the Indian Ocean.\n\nFor beginners, no prior experience is needed. Receive step-by-step training from professional, certified local instructors, ensuring safety and comfort with a 1:2 instructor-to-guest ratio. Discover colorful coral reefs, tropical fish, and the beauty of the Indian Ocean.\n\nFor certified divers, dive into the underwater paradise of Mirissa on a fun dive. Explore stunning coral reefs, schools of tropical fish, and the vibrant marine life that makes Mirissa one of the best scuba diving spots in Sri Lanka. Dive in small groups with a professional local dive guide (1:2 ratio) for a safe and personalized experience.\n\nAfter your dive, relax with tasty snacks and a cup of authentic Ceylon tea. Enjoy the convenience of free pickup and drop-off within 3 km of Mirissa.',
    packages: [
      {
        number: '01',
        title: 'Discover Scuba Diving',
        subtitle: 'For Beginners',
        price: 75,
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
    }
  },
  'night-snorkeling': {
    id: 'night-snorkeling',
    name: 'Night Snorkeling',
    shortDesc: 'Experience the magical bioluminescent reefs and nocturnal marine life under the stars.',
    price: 75,
    duration: '2.5 Hours',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=600&q=80',
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80'
    ],
    fullDesc: 'When the sun sets, a whole new underwater world awakens. Our guided night snorkeling adventure reveals bioluminescent plankton, sleeping parrotfish, hunting octopus, and glowing coral formations. Includes underwater flashlights and warm post-dive beverages.',
    itinerary: [
      { time: '06:30 PM', title: 'Sunset Briefing', desc: 'Meet at beach, equipment check, safety overview.' },
      { time: '07:00 PM', title: 'Enter the Water', desc: 'Guided night snorkel with underwater lights.' },
      { time: '08:00 PM', title: 'Bioluminescence Zone', desc: 'Swim through glowing plankton fields.' },
      { time: '08:30 PM', title: 'Beach Bonfire', desc: 'Warm drinks and stargazing on the beach.' },
      { time: '09:00 PM', title: 'Tour Ends', desc: 'Return equipment and farewell.' }
    ],
    included: ['Snorkel gear', 'Underwater flashlight', 'Expert night guide', 'Warm beverages', 'Beach setup'],
    excluded: ['Hotel transfer', 'Dinner', 'Wetsuit rental']
  },
  'deep-sea-fishing': {
    id: 'deep-sea-fishing',
    name: 'Deep Sea Fishing',
    shortDesc: 'Charter a premium fishing vessel for an exhilarating deep-sea angling adventure off the Sri Lankan coast.',
    price: 150,
    duration: '6 Hours',
    image: 'https://images.unsplash.com/photo-1544551763-77ef1d934cfc?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544551763-77ef1d934cfc?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-77ef1d934cfc?w=600&q=80',
      'https://images.unsplash.com/photo-1568430778127-9d0f010a2a1f?w=600&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=600&q=80'
    ],
    fullDesc: 'Join our experienced crew aboard a fully equipped sport fishing boat. Target marlin, sailfish, tuna, and mahi-mahi in the rich fishing grounds of the Indian Ocean. All tackle provided with optional catch-and-cook service at a partner restaurant.',
    itinerary: [
      { time: '05:00 AM', title: 'Harbour Departure', desc: 'Board vessel and head to fishing grounds.' },
      { time: '06:00 AM', title: 'Trolling Begins', desc: 'Deploy lines and start trolling for big game.' },
      { time: '09:00 AM', title: 'Mid-Morning Break', desc: 'Light breakfast and refreshments onboard.' },
      { time: '10:30 AM', title: 'Bottom Fishing', desc: 'Switch to reef fishing for variety.' },
      { time: '11:00 AM', title: 'Return to Harbour', desc: 'Dock and optional catch cleaning service.' }
    ],
    included: ['Sport fishing boat', 'All tackle & bait', 'Experienced captain', 'Breakfast & drinks', 'Fish cleaning'],
    excluded: ['Fishing license fee', 'Catch-and-cook restaurant fee', 'Hotel transfer']
  },
  'cooking-class': {
    id: 'cooking-class',
    name: 'Authentic Sri Lankan Cooking Class',
    altPrefix: 'Mirissa Cooking Class',
    location: 'Mirissa, Sri Lanka',
    groupType: 'Private Group',
    shortDesc: 'Learn to cook authentic Sri Lankan dishes with a local chef. Hands-on experience with traditional spices in a small group setting.',
    price: 30,
    duration: '2.5 Hours',
    timeSlots: '9:00 AM, 2:00 PM',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80'
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
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initScrollAnimations();
  initFloatingWhatsApp();
  initHeroCarousel();

  if (document.querySelector('.tours-grid[data-render="all"]')) renderAllTours();
  if (document.querySelector('.tours-grid[data-render="featured"]')) renderFeaturedTours();
  if (document.getElementById('tour-detail-content')) initTourDetails();
  if (document.getElementById('booking-form')) initBookingForm();
  if (document.getElementById('payment-form')) initPaymentPage();
});

function initHeroCarousel() {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.hero-slide');
  const indicators = carousel.querySelectorAll('.hero-indicator');
  const bgLayer = carousel.querySelector('.hero-bg-layer');
  const prevBtn = carousel.querySelector('.hero-prev');
  const nextBtn = carousel.querySelector('.hero-next');
  let current = 0;
  let interval;

  function goTo(index) {
    slides[current].classList.remove('active');
    indicators[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    indicators[current].classList.add('active');
    bgLayer.style.backgroundImage = `url('${slides[current].dataset.bg}')`;
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoPlay() {
    interval = setInterval(next, 5000);
  }

  function resetAutoPlay() {
    clearInterval(interval);
    startAutoPlay();
  }

  bgLayer.style.backgroundImage = `url('${slides[0].dataset.bg}')`;

  nextBtn.addEventListener('click', () => { next(); resetAutoPlay(); });
  prevBtn.addEventListener('click', () => { prev(); resetAutoPlay(); });

  indicators.forEach(btn => {
    btn.addEventListener('click', () => {
      goTo(parseInt(btn.dataset.index, 10));
      resetAutoPlay();
    });
  });

  let touchStartX = 0;
  carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
  carousel.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
      resetAutoPlay();
    }
  });

  startAutoPlay();
}

function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
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

  btn.addEventListener('click', e => {
    e.preventDefault();
    const message = encodeURIComponent('Hello Sea & Safari Tours! I would like to inquire about your tours.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  });
}

function createTourCard(tour, index) {
  return `
    <article class="tour-card fade-in" style="transition-delay: ${index * 0.1}s">
      <div class="tour-card-image">
        <a href="${TOURS_PATH}${tour.id}.html"><img src="${resolveImg(tour.image)}" alt="${tour.imageAlt || tour.altPrefix || tour.name}" loading="lazy"></a>
        <span class="tour-card-badge">${tour.duration}</span>
      </div>
      <div class="tour-card-body">
        <h3 class="tour-card-title">${tour.name}</h3>
        <p class="tour-card-desc">${tour.shortDesc}</p>
        <div class="tour-card-footer">
          <div class="tour-price">$${tour.price} <span>/ person</span></div>
          <a href="${TOURS_PATH}${tour.id}.html" class="btn btn-ocean btn-sm">View Details</a>
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

function initTourDetails() {
  const params = new URLSearchParams(window.location.search);
  const pageAttr = document.getElementById('tour-detail-content')?.dataset.tourId;
  const tourId = pageAttr || params.get('tour') || 'whale-dolphin';
  const tour = TOURS[tourId];

  if (!tour) {
    document.getElementById('tour-detail-content').innerHTML =
      `<div class="container" style="padding:100px 0;text-align:center"><h2>Tour not found</h2><a href="${ROOT_PATH}tours.html" class="btn btn-ocean">View All Tours</a></div>`;
    return;
  }

  document.title = `${tour.name} | Sea & Safari Tours`;

  const hero = document.querySelector('.tour-detail-hero');
  if (hero) hero.style.backgroundImage = `url('${resolveImg(tour.heroImage)}')`;

  document.getElementById('tour-detail-content').innerHTML = `
    <div class="container">
      <div class="tour-detail-grid">
        <div class="tour-detail-main">
          ${tour.location ? `<p class="tour-location"><span>📍</span> ${tour.location}</p>` : ''}
          ${tour.highlights ? `
          <h2>Highlights</h2>
          <ul class="highlights-list">${tour.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
          ` : ''}
          <h2>About This Tour</h2>
          <p>${tour.fullDesc.replace(/\n\n/g, '</p><p>').replace(/\n/g, ' ')}</p>
          ${tour.packages ? `
          <h2>Dive Packages</h2>
          <p class="section-desc" style="margin-bottom:24px">Choose the package that fits your experience level. All dives include a 1:2 instructor-to-guest ratio.</p>
          <div class="tour-packages">
            ${tour.packages.map(pkg => `
              <div class="package-card">
                <div class="package-card-header">
                  <span class="package-number">Package ${pkg.number}</span>
                  <span class="package-price">$${pkg.price}<small>/person</small></span>
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
            `).join('')}
          </div>
          ` : ''}
          <h2>Itinerary</h2>
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
          <h2>What's Included & Excluded</h2>
          <div class="included-grid">
            <div>
              <h4 style="color:var(--ocean-deep);margin-bottom:12px">Included</h4>
              <ul class="included-list">${tour.included.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
            <div>
              <h4 style="color:var(--ocean-deep);margin-bottom:12px">Excluded</h4>
              <ul class="included-list excluded-list">${tour.excluded.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
          </div>
          ${tour.importantInfo ? `
          <h2>Important Information</h2>
          <div class="important-info-grid">
            ${tour.importantInfo.bring ? `<div><h4>What to Bring</h4><ul class="info-list">${tour.importantInfo.bring.map(item => `<li>${item}</li>`).join('')}</ul></div>` : ''}
            ${tour.importantInfo.notSuitable ? `<div><h4>Not Suitable For</h4><ul class="info-list not-suitable">${tour.importantInfo.notSuitable.map(item => `<li>${item}</li>`).join('')}</ul></div>` : ''}
            ${tour.importantInfo.notAllowed ? `<div><h4>Not Allowed</h4><ul class="info-list not-allowed">${tour.importantInfo.notAllowed.map(item => `<li>${item}</li>`).join('')}</ul></div>` : ''}
            ${tour.importantInfo.knowBeforeYouGo ? `<div><h4>Know Before You Go</h4><ul class="info-list">${tour.importantInfo.knowBeforeYouGo.map(item => `<li>${item}</li>`).join('')}</ul></div>` : ''}
          </div>
          ` : ''}
          <h2>Photo Gallery</h2>
          <div class="gallery-slider" data-gallery>
            ${tour.gallery.map((img, i) => `
              <div class="gallery-item" data-index="${i}">
                <img src="${resolveImg(img)}" alt="${(tour.galleryAlt && tour.galleryAlt[i]) || `${tour.altPrefix || tour.name} - photo ${i + 1}`}" loading="lazy">
              </div>
            `).join('')}
          </div>
        </div>
        <aside class="tour-sidebar">
          <div class="booking-sidebar-card">
            <h3>${tour.name}</h3>
            <div class="sidebar-price">$${tour.price} <span>/ person</span></div>
            <ul class="sidebar-features">
              <li>⏱ ${tour.duration}</li>
              <li>📍 ${tour.location || 'Mirissa, Sri Lanka'}</li>
              <li>👥 ${tour.groupType || 'Small group experience'}</li>
              <li>🛡 Fully insured</li>
              <li>⭐ Expert local guides</li>
              ${tour.timeSlots ? `<li>🕐 Slots: ${tour.timeSlots}</li>` : ''}
            </ul>
            <a href="${ROOT_PATH}booking.html?tour=${tour.id}" class="btn btn-primary btn-block" style="margin-top:24px">Book This Tour</a>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello! I'm interested in booking: ${tour.name}`)}" class="btn btn-whatsapp btn-block" style="margin-top:12px" target="_blank" rel="noopener">WhatsApp Inquiry</a>
          </div>
        </aside>
      </div>
      <div class="tour-nav-buttons">
        <a href="${ROOT_PATH}tours.html" class="btn btn-ocean">← All Tours</a>
        ${(() => {
          const ids = Object.keys(TOURS);
          const idx = ids.indexOf(tour.id);
          const nextId = ids[(idx + 1) % ids.length];
          return `<a href="${TOURS_PATH}${nextId}.html" class="btn btn-primary">Next: ${TOURS[nextId].name} →</a>`;
        })()}
      </div>
    </div>
  `;

  const heroTitle = document.getElementById('tour-hero-title');
  const heroMeta = document.getElementById('tour-hero-meta');
  if (heroTitle) heroTitle.textContent = tour.name;
  if (heroMeta) {
    heroMeta.innerHTML = `
      <span>⏱ ${tour.duration}</span>
      <span>💰 From $${tour.price}/person</span>
      <span>📍 ${tour.location || 'Mirissa, Sri Lanka'}</span>
    `;
  }

  initGallery();
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

function initBookingForm() {
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
    const option = document.createElement('option');
    option.value = tour.id;
    option.textContent = `${tour.name} — $${tour.price}/person`;
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
