// Amrit Zayka Restaurant Menu Data
// Faithfully transcribed from the authentic updated 4-page in-restaurant menu card

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Dishes', label: 'Sab Kuch' },
  { id: 'beverages', name: 'Hot & Cold Beverages', label: 'Chai, Coffee & Thandak' },
  { id: 'parantha', name: 'Parantha', label: 'Tawa & Tandoor' },
  { id: 'soups', name: 'Soups', label: 'Garma-Garam Soup' },
  { id: 'chinese', name: 'Chinese & Snacks', label: 'Desi Chinese & Snacks' },
  { id: 'momos', name: 'Momos', label: 'Steamed & Fried Momos' },
  { id: 'combos', name: 'Combos', label: 'Special Desi Combos' },
  { id: 'main-course', name: 'Main Course', label: 'Half & Full Gravies' },
  { id: 'rice', name: 'Basmati Rice', label: 'Basmati Ki Shaan' },
  { id: 'breads', name: 'Indian Breads', label: 'Tawa Roti' },
  { id: 'extras', name: 'Extras', label: 'Side Extras' },
  { id: 'thaali', name: 'Thaali Combos', label: 'Special Thaali' },
  { id: 'dessert', name: 'Dessert', label: 'Kuch Meetha' },
];

export const MENU_ITEMS = [
  // ==========================================
  // PAGE 1: Hot & Cold Beverages
  // ==========================================
  {
    id: 'bev-1',
    name: 'Amrit ki Chai',
    category: 'beverages',
    price: 25,
    priceDisplay: '₹25',
    description: 'Kadak authentic Punjabi tea brewed fresh with aromatic ginger and cardamom.',
    isPopular: true,
    tag: 'Desi Kadak',
  },
  {
    id: 'bev-2',
    name: 'Hot Coffee',
    category: 'beverages',
    price: 50,
    priceDisplay: '₹50',
    description: 'Rich frothy handmade hot coffee to kickstart your day.',
  },
  {
    id: 'bev-3',
    name: 'Cold Coffee',
    category: 'beverages',
    price: 100,
    priceDisplay: '₹100',
    description: 'Chilled, thick and creamy coffee blended with chocolate drizzle.',
    isPopular: true,
  },
  {
    id: 'bev-4',
    name: 'Goli Soda',
    category: 'beverages',
    price: 30,
    priceDisplay: '₹30',
    description: 'Nostalgic fizzy desi marble soda to quench your thirst.',
  },
  {
    id: 'bev-5',
    name: 'Matha - Spiced Buttermilk',
    category: 'beverages',
    price: 50,
    priceDisplay: '₹50',
    description: 'Traditional Punjabi spiced buttermilk with roasted jeera & fresh mint.',
    isSignature: true,
    tag: 'Signature Drink',
  },
  {
    id: 'bev-6',
    name: 'Lassi - Sweet',
    category: 'beverages',
    price: 70,
    priceDisplay: '₹70',
    description: 'Thick creamy Punjabi sweet lassi served chilled with malai touch.',
    isPopular: true,
  },
  {
    id: 'bev-7',
    name: 'Mineral Water Bottle',
    category: 'beverages',
    price: null,
    priceDisplay: 'MRP',
    description: 'Packaged drinking water bottle served chilled.',
  },

  // ==========================================
  // PAGE 1: Parantha
  // ==========================================
  {
    id: 'prn-1',
    name: 'Plain Parantha',
    category: 'parantha',
    price: 50,
    priceDisplay: '₹50',
    description: 'Golden tawa roasted layered parantha.',
  },
  {
    id: 'prn-2',
    name: 'Lachha Parantha',
    category: 'parantha',
    price: 60,
    priceDisplay: '₹60',
    description: 'Multi-layered crispy flaky parantha roasted golden on tawa.',
  },
  {
    id: 'prn-3',
    name: 'Aloo Pyaaz Parantha',
    category: 'parantha',
    price: 90,
    priceDisplay: '₹90',
    description: 'Generously stuffed with spiced mashed potatoes, chopped onions & green chillies.',
    isPopular: true,
  },
  {
    id: 'prn-4',
    name: 'Gobhi Parantha',
    category: 'parantha',
    price: 90,
    priceDisplay: '₹90',
    description: 'Fresh grated cauliflower seasoned with aromatic herbs and pan-toasted.',
  },
  {
    id: 'prn-5',
    name: 'Chinese Parantha',
    category: 'parantha',
    price: 100,
    priceDisplay: '₹100',
    description: 'Crispy fusion parantha stuffed with spicy wok-tossed desi Chinese filling.',
    tag: 'Fusion Special',
  },
  {
    id: 'prn-6',
    name: 'Paneer Pyaaz Parantha',
    category: 'parantha',
    price: 120,
    priceDisplay: '₹120',
    description: 'Hearty mix of fresh malai paneer and crisp onions roasted golden brown.',
    isPopular: true,
  },
  {
    id: 'prn-7',
    name: 'All Mix Parantha',
    category: 'parantha',
    price: 120,
    priceDisplay: '₹120',
    description: 'Chef special grand stuffing of aloo, gobhi, pyaaz, and fresh paneer.',
    isSignature: true,
    tag: 'Chef Special',
  },

  // ==========================================
  // PAGE 1: Soups
  // ==========================================
  {
    id: 'soup-1',
    name: 'Hot & Sour Soup',
    category: 'soups',
    price: 70,
    priceDisplay: '₹70',
    description: 'Spicy, tangy vegetable broth simmered with chopped garden vegetables.',
  },
  {
    id: 'soup-2',
    name: 'Manchow Soup',
    category: 'soups',
    price: 70,
    priceDisplay: '₹70',
    description: 'Hot and spicy dark vegetable soup crowned with crispy fried noodles.',
    isPopular: true,
  },

  // ==========================================
  // PAGE 2: Chinese & Snacks
  // ==========================================
  {
    id: 'chn-1',
    name: 'Spring Roll',
    category: 'chinese',
    price: 100,
    priceDisplay: '₹100',
    description: 'Crispy golden rolls filled with savoury shredded vegetables and dipping sauce.',
    isPopular: true,
  },
  {
    id: 'chn-2',
    name: 'Masala Maggie',
    category: 'chinese',
    price: 100,
    priceDisplay: '₹100',
    description: 'Desi-style comfort Maggi noodles prepared with vegetables and extra Punjabi spices.',
  },
  {
    id: 'chn-3',
    name: 'Chana Roast',
    category: 'chinese',
    price: 100,
    priceDisplay: '₹100',
    description: 'Crunchy roasted kabuli chana seasoned with zesty chatpata masala.',
  },
  {
    id: 'chn-4',
    name: 'Noodles',
    category: 'chinese',
    price: 120,
    priceDisplay: '₹120',
    description: 'Wok tossed noodles with shredded cabbage, carrots, capsicum and soya sauce.',
    isPopular: true,
  },
  {
    id: 'chn-5',
    name: 'Fried Rice',
    category: 'chinese',
    price: 120,
    priceDisplay: '₹120',
    description: 'Aromatic basmati grains stir fried on high flame with diced veggies and light seasoning.',
  },
  {
    id: 'chn-6',
    name: 'Kothe',
    category: 'chinese',
    price: 120,
    priceDisplay: '₹120',
    description: 'Crispy pan-fried vegetable pockets tossed in sweet-chilli glaze and sesame seeds.',
    isSignature: true,
    tag: 'Chef Special',
  },
  {
    id: 'chn-7',
    name: 'Manchurian - Dry/Gravy',
    category: 'chinese',
    price: 120,
    priceDisplay: '₹120',
    description: 'Crispy vegetable dumplings available in wok-tossed dry style or savoury rich gravy.',
  },
  {
    id: 'chn-8',
    name: 'Chinese Combi',
    category: 'chinese',
    price: 120,
    priceDisplay: '₹120',
    description: 'Delicious combo of wok-tossed noodles and veg fried rice paired with manchurian.',
  },
  {
    id: 'chn-9',
    name: 'Honey Chilli Potato',
    category: 'chinese',
    price: 140,
    priceDisplay: '₹140',
    description: 'Crisp fried potato fingers tossed in sweet honey, chilli sauce and roasted sesame.',
    isPopular: true,
  },
  {
    id: 'chn-10',
    name: 'Chilli Paneer - Dry/Gravy',
    category: 'chinese',
    price: 160,
    priceDisplay: '₹160',
    description: 'Fresh paneer cubes wok tossed with capsicum, onion cubes and green chillies in dry or gravy style.',
    isPopular: true,
  },

  // ==========================================
  // PAGE 2: Momos
  // ==========================================
  {
    id: 'mmo-1',
    name: 'Veg Steam Momos',
    category: 'momos',
    price: 70,
    priceDisplay: '₹70',
    description: 'Tender steamed dumplings stuffed with minced vegetables, served with spicy garlic dip.',
  },
  {
    id: 'mmo-2',
    name: 'Veg Fry Momos',
    category: 'momos',
    price: 90,
    priceDisplay: '₹90',
    description: 'Crisp fried dumplings with seasoned vegetable stuffing and tangy red chutney.',
    isPopular: true,
  },
  {
    id: 'mmo-3',
    name: 'Veg Tandoori Momos',
    category: 'momos',
    price: 110,
    priceDisplay: '₹110',
    description: 'Char-grilled momos marinated in spicy tandoori masala and garnished with chaat masala.',
    isSignature: true,
    tag: 'Tandoori Special',
  },

  // ==========================================
  // PAGE 2: Combos
  // ==========================================
  {
    id: 'cmb-1',
    name: 'Chole Bhature',
    category: 'combos',
    price: 130,
    priceDisplay: '₹130',
    description: 'Two gigantic fluffy bhature served with slow-cooked authentic Punjabi pindi chole, pickle & sirka pyaaz.',
    isSignature: true,
    tag: 'House Bestseller',
  },
  {
    id: 'cmb-2',
    name: 'Chole Chawal',
    category: 'combos',
    price: 130,
    priceDisplay: '₹130',
    description: 'The ultimate comforting Punjabi combo: aromatic basmati rice served with robust spiced chole.',
    isPopular: true,
  },
  {
    id: 'cmb-3',
    name: 'Daal Khichdi',
    category: 'combos',
    price: 130,
    priceDisplay: '₹130',
    description: 'Wholesome comforting rice and yellow lentil khichdi tempered with desi ghee and cumin.',
  },

  // ==========================================
  // PAGE 3: Main Course (Half / Full Pricing)
  // ==========================================
  {
    id: 'mc-1',
    name: 'Chole',
    category: 'main-course',
    portions: [
      { name: 'Half', price: 100, priceDisplay: '₹100' },
      { name: 'Full', price: 150, priceDisplay: '₹150' },
    ],
    description: 'Slow-cooked authentic Punjabi pindi chole infused with dark roasted spices and herbs.',
  },
  {
    id: 'mc-2',
    name: 'Daal Tadka',
    category: 'main-course',
    portions: [
      { name: 'Half', price: 100, priceDisplay: '₹100' },
      { name: 'Full', price: 150, priceDisplay: '₹150' },
    ],
    description: 'Yellow lentils tempered with desi ghee, dry red chillies, garlic and hing.',
  },
  {
    id: 'mc-3',
    name: 'Mix Veg',
    category: 'main-course',
    portions: [
      { name: 'Half', price: 100, priceDisplay: '₹100' },
      { name: 'Full', price: 150, priceDisplay: '₹150' },
    ],
    description: 'Medley of fresh seasonal vegetables tossed in semi-dry aromatic Punjabi masala.',
  },
  {
    id: 'mc-4',
    name: 'Punjabi Sev Tamatar',
    category: 'main-course',
    portions: [
      { name: 'Half', price: 100, priceDisplay: '₹100' },
      { name: 'Full', price: 150, priceDisplay: '₹150' },
    ],
    description: 'Tangy and spicy tomato gravy topped with crisp ratlami sev, a local Malwa-Punjabi favorite.',
    isPopular: true,
  },
  {
    id: 'mc-5',
    name: 'Sev Doodh Bhaaji',
    category: 'main-course',
    portions: [
      { name: 'Half', price: 120, priceDisplay: '₹120' },
      { name: 'Full', price: 180, priceDisplay: '₹180' },
    ],
    description: 'Rich and creamy milk-based gravy cooked with crunchy sev and subtle aromatic spices.',
    tag: 'Specialty Curry',
  },
  {
    id: 'mc-6',
    name: 'Paneer Butter Masala',
    category: 'main-course',
    portions: [
      { name: 'Half', price: 200, priceDisplay: '₹200' },
      { name: 'Full', price: 280, priceDisplay: '₹280' },
    ],
    description: 'Soft cottage cheese simmered in smooth, sweet-tangy makhani tomato butter gravy.',
    isSignature: true,
    tag: 'All-Time Favorite',
  },
  {
    id: 'mc-7',
    name: 'Kadhai Paneer',
    category: 'main-course',
    portions: [
      { name: 'Half', price: 210, priceDisplay: '₹210' },
      { name: 'Full', price: 320, priceDisplay: '₹320' },
    ],
    description: 'Fresh paneer tossed with crunchy capsicum, onions, and freshly ground roasted kadhai masala.',
    isPopular: true,
  },

  // ==========================================
  // PAGE 3: Basmati Rice (Half / Full Pricing)
  // ==========================================
  {
    id: 'rc-1',
    name: 'Plain Rice',
    category: 'rice',
    portions: [
      { name: 'Half', price: 60, priceDisplay: '₹60' },
      { name: 'Full', price: 80, priceDisplay: '₹80' },
    ],
    description: 'Long-grain aromatic steamed basmati rice.',
  },
  {
    id: 'rc-2',
    name: 'Jeera Rice',
    category: 'rice',
    portions: [
      { name: 'Half', price: 70, priceDisplay: '₹70' },
      { name: 'Full', price: 100, priceDisplay: '₹100' },
    ],
    description: 'Fragrant basmati rice tossed with roasted cumin seeds and fresh coriander.',
  },
  {
    id: 'rc-3',
    name: 'Veg Biryani',
    category: 'rice',
    portions: [
      { name: 'Half', price: 100, priceDisplay: '₹100' },
      { name: 'Full', price: 150, priceDisplay: '₹150' },
    ],
    description: 'Slow-cooked spiced dum rice loaded with garden vegetables, paneer & fried onions.',
    isPopular: true,
  },

  // ==========================================
  // PAGE 3: Indian Breads
  // ==========================================
  {
    id: 'brd-1',
    name: 'Tawa Roti - Plain',
    category: 'breads',
    price: 10,
    priceDisplay: '₹10',
    description: 'Freshly baked whole-wheat flatbread cooked hot on traditional tawa.',
  },
  {
    id: 'brd-2',
    name: 'Tawa Roti - Butter',
    category: 'breads',
    price: 12,
    priceDisplay: '₹12',
    description: 'Piping hot tawa roti brushed with fresh dairy butter.',
  },

  // ==========================================
  // PAGE 3: Extras
  // ==========================================
  {
    id: 'ext-1',
    name: 'Extra Bhatura',
    category: 'extras',
    price: 30,
    priceDisplay: '₹30',
    description: 'Single piece of fresh fried puffy bhatura.',
  },
  {
    id: 'ext-2',
    name: 'Extra Daal',
    category: 'extras',
    price: 40,
    priceDisplay: '₹40',
    description: 'Extra bowl of tempered Punjabi yellow daal.',
  },
  {
    id: 'ext-3',
    name: 'Extra Chole/Sabzi',
    category: 'extras',
    price: 50,
    priceDisplay: '₹50',
    description: 'Extra portion of authentic Punjabi chole or seasonal sabzi.',
  },

  // ==========================================
  // PAGE 4: Thaali Combos
  // ==========================================
  {
    id: 'thl-1',
    name: 'Veg Thaali',
    category: 'thaali',
    price: 120,
    priceDisplay: '₹120',
    description: 'Includes Daal Tadka, Rice, Mix Veg, 4 Tawa roti with salad.',
    isPopular: true,
    tag: 'Daily Favourite',
  },
  {
    id: 'thl-2',
    name: 'Daal Baati Thaali',
    category: 'thaali',
    price: 150,
    priceDisplay: '₹150',
    description: 'Includes Daal Tadka, Bharta, 3 Baati, 1 Choorma laddoo.',
    isSignature: true,
    tag: 'Traditional Special',
  },
  {
    id: 'thl-3',
    name: 'Amrit ki Special Thaali',
    category: 'thaali',
    price: 180,
    priceDisplay: '₹180',
    description: 'Includes Daal Tadka, Jeera Rice, Butter Paneer Masala, 4 Tawa Roti, Salad and Kheer.',
    isSignature: true,
    tag: 'Royal Feast',
  },

  // ==========================================
  // PAGE 4: Dessert
  // ==========================================
  {
    id: 'dst-1',
    name: 'Amrit ki Kheer',
    category: 'dessert',
    price: 70,
    priceDisplay: '₹70',
    description: 'Slow-simmered rich rice kheer loaded with cardamom, nuts, and saffron aroma.',
    isSignature: true,
    tag: 'Sweet Special',
  },
  {
    id: 'dst-2',
    name: 'Choorma Laddoo - 2 pc',
    category: 'dessert',
    price: 40,
    priceDisplay: '₹40',
    description: 'Two pieces of rich desi ghee choorma laddoo infused with jaggery and roasted wheat.',
  },
];

export const SIGNATURE_DISHES = [
  {
    id: 'sig-chole-bhature',
    title: 'Chole Bhature',
    tagline: 'Diet kal se. Aaj chole bhature.',
    description: 'Two giant golden bhature served with slow-cooked pindi chole, sirka pyaaz, and fresh green chilli.',
    price: '₹130',
    image: '/images/chole-bhature-signature.jpg',
    badge: 'House Bestseller',
  },
  {
    id: 'sig-pav-bhaji',
    title: 'Pav Bhaji',
    tagline: 'Butter thoda extra, khushi double.',
    description: 'Rich, spiced mashed vegetable bhaji with extra butter dollop, served with piping hot toasted pav.',
    price: '₹80',
    image: '/images/pav-bhaji-signature.jpg',
    badge: 'All-Day Favorite',
  },
  {
    id: 'sig-noodles',
    title: 'Noodles',
    tagline: 'Desi cravings mein thoda Indo-Chinese twist.',
    description: 'Street-style smoky wok-tossed noodles with shredded cabbage, crunchy capsicum & spring onions.',
    price: '₹120',
    image: '/images/chowmein-signature.jpg',
    badge: 'Desi Chinese',
  },
  {
    id: 'sig-veg-kothe',
    title: 'Veg Kothe',
    tagline: 'Crunch aisa jo dil jeet le.',
    description: 'Crispy fried veggie delights tossed in tangy sweet-chilli sauce, garnished with toasted sesame.',
    price: '₹120',
    image: '/images/veg-kothe.jpg',
    badge: 'Chef Special',
  },
  {
    id: 'sig-matha',
    title: 'Matha - Spiced Buttermilk',
    tagline: 'Spice level high? Thandak bhi ready.',
    description: 'Refreshing Punjabi spiced buttermilk with roasted bhuna jeera, black salt, and fresh fragrant mint.',
    price: '₹50',
    image: '/images/amrit-chhachh.jpg',
    badge: 'Desi Thandak',
  },
  {
    id: 'sig-kheer',
    title: 'Amrit Ki Kheer',
    tagline: 'End mein kuch meetha toh banta hai.',
    description: 'Slow-cooked rich rice pudding loaded with cardamom, saffron strands, slivered almonds & pistachios.',
    price: '₹70',
    image: '/images/amrit-kheer.jpg',
    badge: 'Meetha Special',
  },
];

export const BRAND_MEMES = [
  {
    quote: 'He left you on seen, we left you satisfied.',
    subtext: 'Fluffy Bhature and piping hot Chole that never let you down.',
    image: '/images/chole-bhature-creative.webp',
  },
  {
    quote: "He was toxic, Our Ingredients aren't.",
    subtext: '100% Pure vegetarian, fresh vegetables, real butter, zero compromises.',
    image: '/images/pav-bhaji-creative.webp',
  },
  {
    quote: "Don't Settle for Dry Taste, Taste the Real Zayka.",
    subtext: 'Crispy tandoori layered paranthas served with chilled mint chutney & laccha pyaaz.',
    image: '/images/tandoori-parantha.webp',
  },
  {
    quote: 'He didn’t treat you well, our chef did.',
    subtext: 'Steaming rich Veg Biryani prepared with genuine Punjabi love and royal spices.',
    image: '/images/veg-biryani.webp',
  },
];
