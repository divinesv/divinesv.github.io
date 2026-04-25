export type NavItem = {
  label: string;
  href?: string;
  children?: Array<{
    href: string;
    label: string;
  }>;
};

export type FeatureCard = {
  title: string;
  subtitle: string;
  body: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export type FestivalItem = {
  title: string;
  dateLabel: string;
  imageSrc: string;
  imageAlt: string;
};

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    label: 'Gods',
    children: [
      { href: '/shiva', label: 'Shiva' },
      { href: '/vishnu', label: 'Vishnu' },
      { href: '/krishna', label: 'Krishna' },
      { href: '/rama', label: 'Rama' },
      { href: '/narasimha', label: 'Narasimha' },
      { href: '/ayyappa', label: 'Ayyappa' },
      { href: '/devi', label: 'Devi' },
      { href: '/ganesha', label: 'Ganesha' },
      { href: '/hanuman', label: 'Hanuman' },
    ],
  },
  { href: '/festivals', label: 'Festivals' },
  { href: '/stotras', label: 'Stotras' },
  { href: '/slokas', label: 'Slokas' },
  { href: '/library', label: 'Library' },
  { href: '/contact', label: 'Contact' },
];

export const deityCards: FeatureCard[] = [
  {
    title: 'Shiva',
    subtitle: 'Mahadeva',
    body: 'A meditative entry point for Rudra, Kailasa, Nataraja, jyotirlingas, mantras, and sacred symbolism.',
    href: '/shiva',
    imageSrc: '/images/shiva5.jpg',
    imageAlt: 'Shiva devotional image for the Shiva pathway',
  },
  {
    title: 'Vishnu',
    subtitle: 'Narayana',
    body: 'A foundation for Vishnu, avatars, Vaikuntha, protection, dharma, and stories from the epics and Puranas.',
    href: '/vishnu',
    imageSrc: '/images/Vishnu2.jpg',
    imageAlt: 'Vishnu devotional image for the Vishnu pathway',
  },
  {
    title: 'Devi',
    subtitle: 'Adi Parashakti',
    body: 'A living space for Lakshmi, Saraswati, Durga, Lalita, and the many radiant forms of the Divine Mother.',
    href: '/devi',
    imageSrc: '/images/Devi4.jpg',
    imageAlt: 'Divine Mother inspired devotional image for the Devi pathway',
  },
  {
    title: 'Ganesha',
    subtitle: 'Ganapati',
    body: 'A welcoming section for beginnings, wisdom, auspicious rituals, and family devotion.',
    href: '/ganesha',
    imageSrc: '/images/Ganesha4.jpg',
    imageAlt: 'Ganesha devotional image for the Ganesha pathway',
  },
  {
    title: 'Hanuman',
    subtitle: 'Anjaneya',
    body: 'A devotional path for courage, seva, Ramayana study, and daily prayer disciplines.',
    href: '/hanuman',
    imageSrc: '/images/hanuma.jpg',
    imageAlt: 'Hanuman devotional image for the Hanuman pathway',
  },
  {
    title: 'Krishna',
    subtitle: 'Govinda',
    body: 'A luminous path for leela, Bhagavad Gita wisdom, bhajans, compassion, and intimate devotion.',
    href: '/krishna',
    imageSrc: '/images/Krishna6.jpg',
    imageAlt: 'Krishna devotional image for the Krishna pathway',
  },
  {
    title: 'Rama',
    subtitle: 'Sri Ramachandra',
    body: 'A devotional home for dharma, Ramayana reflection, Sita-Rama bhakti, and calm inner strength.',
    href: '/rama',
    imageSrc: '/images/Rama4.jpg',
    imageAlt: 'Rama devotional image for the Rama pathway',
  },
  {
    title: 'Narasimha',
    subtitle: 'Lakshmi Narasimha',
    body: 'A fierce and compassionate refuge focused on Prahlada bhakti, protection, and fearless surrender.',
    href: '/narasimha',
    imageSrc: '/images/Narasimha3.jpg',
    imageAlt: 'Narasimha devotional image for the Narasimha pathway',
  },
  {
    title: 'Ayyappa',
    subtitle: 'Hariharaputra',
    body: 'A dedicated space for vrata, pilgrimage, bhajans, sacred discipline, and the centered grace of Ayyappa.',
    href: '/ayyappa',
    imageSrc: '/images/Ayyappa.jpg',
    imageAlt: 'Ayyappa devotional image for the Ayyappa pathway',
  },
  {
    title: 'Festivals',
    subtitle: 'Utsava',
    body: 'A calendar-ready area for Maha Shivaratri, Vaikuntha Ekadashi, Navaratri, Vinayaka Chavithi, and more.',
    href: '/festivals',
    imageSrc: '/images/nature.jpg',
    imageAlt: 'Sacred festive landscape image for the festivals pathway',
  },
];

export const homepageHighlights = [
  'A structure ready for deity pages, festival guides, and stotra collections',
];

export const festivalItems: FestivalItem[] = [
  {
    title: 'Maha Shivaratri',
    dateLabel: 'February 15, 2026',
    imageSrc: '/images/shiva.jpg',
    imageAlt: 'Shiva image for Maha Shivaratri',
  },
  {
    title: 'Sri Rama Navami',
    dateLabel: 'March 26, 2026',
    imageSrc: '/images/Rama3.jpg',
    imageAlt: 'Rama image for Sri Rama Navami',
  },
  {
    title: 'Hanuman Jayanti',
    dateLabel: 'April 2, 2026',
    imageSrc: '/images/hanuman.jpg',
    imageAlt: 'Hanuman image for Hanuman Jayanti',
  },
  {
    title: 'Varalakshmi Vratham',
    dateLabel: 'August 21, 2026',
    imageSrc: '/images/Devi2.jpg',
    imageAlt: 'Lakshmi-inspired Devi image for Varalakshmi Vratham',
  },
  {
    title: 'Krishna Janmashtami',
    dateLabel: 'September 4, 2026',
    imageSrc: '/images/Krishna8.jpg',
    imageAlt: 'Krishna image for Janmashtami',
  },
  {
    title: 'Vinayaka Chavithi',
    dateLabel: 'September 14, 2026',
    imageSrc: '/images/ganesha.jpg',
    imageAlt: 'Ganesha image for Vinayaka Chavithi',
  },
  {
    title: 'Sharannavaratri',
    dateLabel: 'October 11, 2026',
    imageSrc: '/images/Maa Durga.jpg',
    imageAlt: 'Durga image for Sharannavaratri',
  },
  {
    title: 'Deepavali',
    dateLabel: 'November 8, 2026',
    imageSrc: '/images/Temple7.jpg',
    imageAlt: 'Lamp-lit shrine image for Deepavali',
  },
  {
    title: 'Vaikuntha Ekadashi',
    dateLabel: 'December 20, 2026',
    imageSrc: '/images/venkateswara.jpg',
    imageAlt: 'Venkateswara image for Vaikuntha Ekadashi',
  },
];

export const stotraItems = [
  { label: 'Shiva Panchakshari Stotram', href: '/stotras/shiva-panchakshari' },
  { label: 'Lingashtakam', href: '/stotras/lingashtakam' },
  { label: 'Vishnu Sahasranama', href: '/library/vishnu-sahashranamas' },
  { label: 'Lalita Sahasranama', href: '/library/lalitha-sahasranama-stotram' },
  { label: 'Hanuman Chalisa', href: '/library/srihanumanchalisa' },
];
