export type StotraVerse = {
  label: string;
  telugu: string[];
  transliteration: string[];
  meaning: string;
};

export type StotraEntry = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  deity: string;
  description: string;
  introduction: string;
  imageSrc: string;
  imageAlt: string;
  asideTitle: string;
  asideItems: string[];
  verses: StotraVerse[];
  phalaShruti?: StotraVerse;
};

export const stotraEntries: StotraEntry[] = [
  {
    slug: 'shiva-panchakshari',
    title: 'Shiva Panchakshari Stotram',
    shortTitle: 'Shiva Panchakshari',
    eyebrow: 'Shiva | Panchakshari | శివ పంచాక్షరి',
    deity: 'Shiva',
    description:
      'A bilingual rendering of the Shiva Panchakshari Stotram with Telugu verses, English transliteration, and concise verse meanings for devotional reading.',
    introduction:
      'This stotram unfolds the five sacred syllables of the Panchakshari mantra, each verse bowing to a different aspect of Shiva through symbol, form, and inner purity.',
    imageSrc: '/images/shiva.jpg',
    imageAlt: 'Shiva devotional image for Shiva Panchakshari Stotram',
    asideTitle: '',
    asideItems: [],
    verses: [
      {
        label: 'Verse 1',
        telugu: [
          'నాగేంద్రహారాయ త్రిలోచనాయ',
          'భస్మాంగరాగాయ మహేశ్వరాయ ।',
          'నిత్యాయ శుద్ధాయ దిగంబరాయ',
          'తస్మై "న" కారాయ నమః శివాయ ॥ 1 ॥',
        ],
        transliteration: [
          'Nagendraharaya trilocanaya',
          'Bhasmanga-ragaya Maheshvaraya',
          'Nityaya shuddhaya digambaraya',
          'Tasmai "na" karaya namah Shivaya',
        ],
        meaning:
          'Salutations to Shiva, who wears the king of serpents as a garland, whose three eyes see beyond time, whose form is sanctified with sacred ash, who is eternally pure and clothed in the sky itself.',
      },
      {
        label: 'Verse 2',
        telugu: [
          'మందాకినీ సలిల చందన చర్చితాయ',
          'నందీశ్వర ప్రమథనాథ మహేశ్వరాయ ।',
          'మందార ముఖ్య బహుపుష్ప సుపూజితాయ',
          'తస్మై "మ" కారాయ నమః శివాయ ॥ 2 ॥',
        ],
        transliteration: [
          'Mandakini-salila-candana-carcitaya',
          'Nandishvara-pramathanatha-Maheshvaraya',
          'Mandara-mukhya-bahu-pushpa-supujitaya',
          'Tasmai "ma" karaya namah Shivaya',
        ],
        meaning:
          'Salutations to Shiva, anointed with Ganga water and sandal paste, Lord of Nandi and the divine hosts, and worshipped with heavenly flowers by devoted beings.',
      },
      {
        label: 'Verse 3',
        telugu: [
          'శివాయ గౌరీ వదనాబ్జ బృంద',
          'సూర్యాయ దక్షాధ్వర నాశకాయ ।',
          'శ్రీ నీలకంఠాయ వృషభధ్వజాయ',
          'తస్మై "శి" కారాయ నమః శివాయ ॥ 3 ॥',
        ],
        transliteration: [
          'Shivaya Gauri-vadanabja-vrnda-suryaya',
          'Dakshadhvara-nashakaya',
          'Shri Nilakanthaya vrishabhadhvajaya',
          'Tasmai "shi" karaya namah Shivaya',
        ],
        meaning:
          'Salutations to Shiva, who shines like the sun to the lotus-face of Gauri, who destroyed the arrogance of Daksha’s sacrifice, who bears the blue throat of compassion, and whose banner is the sacred bull.',
      },
      {
        label: 'Verse 4',
        telugu: [
          'వశిష్ఠ కుంభోద్భవ గౌతమార్య',
          'మునీంద్ర దేవార్చిత శేఖరాయ ।',
          'చంద్రార్క వైశ్వానర లోచనాయ',
          'తస్మై "వ" కారాయ నమః శివాయ ॥ 4 ॥',
        ],
        transliteration: [
          'Vasishtha-kumbhodbhava-Gautamarya',
          'Munindra-devarchita-shekharaya',
          'Chandrarka-vaishvanara-lochanaya',
          'Tasmai "va" karaya namah Shivaya',
        ],
        meaning:
          'Salutations to Shiva, adorned and worshipped by sages such as Vasishtha, Agastya, and Gautama, whose eyes are the moon, the sun, and the cosmic fire.',
      },
      {
        label: 'Verse 5',
        telugu: [
          'యజ్ఞ-స్వరూపాయ జటాధరాయ',
          'పినాక హస్తాయ సనాతనాయ ।',
          'దివ్యాయ దేవాయ దిగంబరాయ',
          'తస్మై "య" కారాయ నమః శివాయ ॥ 5 ॥',
        ],
        transliteration: [
          'Yajna-svarupaya jatadharaya',
          'Pinaka-hastaya sanatanaya',
          'Divyaya devaya digambaraya',
          'Tasmai "ya" karaya namah Shivaya',
        ],
        meaning:
          'Salutations to Shiva, embodiment of sacrifice, bearer of matted locks, holder of the Pinaka bow, eternal, divine, and limitless beyond worldly covering.',
      },
    ],
    phalaShruti: {
      label: 'Phala Shruti',
      telugu: [
        'పంచాక్షరమిదం పుణ్యం యః పఠేచ్ఛివ సన్నిధౌ ।',
        'శివలోకమవాప్నోతి శివేన సహ మోదతే ॥',
      ],
      transliteration: [
        'Panchaksharam idam punyam yah pathecchiva sannidhau',
        'Shivalokam avapnoti shivena saha modate',
      ],
      meaning:
        'Whoever recites this sacred five-syllabled hymn in the presence of Shiva attains the realm of Shiva and rejoices there in his grace.',
    },
  },
  {
    slug: 'lingashtakam',
    title: 'Lingashtakam',
    shortTitle: 'Lingashtakam',
    eyebrow: 'Lingashtakam | లింగాష్టకం',
    deity: 'Shiva',
    description:
      'A devotional rendering of Lingashtakam with Telugu text, English transliteration, and adapted meanings for each verse.',
    introduction:
      'Lingashtakam praises the Shiva Lingam as the radiant axis of creation, worship, dissolution of sorrow, and the grace that leads the devotee inward.',
    imageSrc: '/images/Kailash.jpg',
    imageAlt: 'Kailash image for Lingashtakam',
    asideTitle: '',
    asideItems: [],
    verses: [
      {
        label: 'Verse 1',
        telugu: [
          'బ్రహ్మమురారి సురార్చిత లింగం',
          'నిర్మలభాసిత శోభిత లింగం ।',
          'జన్మజ దుఃఖ వినాశక లింగం',
          'తత్ ప్రణమామి సదాశివ లింగం ॥ 1 ॥',
        ],
        transliteration: [
          'Brahma-murari-surarchita lingam',
          'Nirmala-bhasita-shobhita lingam',
          'Janmaja-duhkha-vinashaka lingam',
          'Tat pranamami Sadashiva lingam',
        ],
        meaning:
          'I bow to the Sadashiva Lingam, worshipped by Brahma, Vishnu, and the devas, radiant in purity, and capable of destroying the sorrows born of worldly existence.',
      },
      {
        label: 'Verse 2',
        telugu: [
          'దేవముని ప్రవరార్చిత లింగం',
          'కామదహన కరుణాకర లింగం ।',
          'రావణ దర్ప వినాశక లింగం',
          'తత్ ప్రణమామి సదాశివ లింగం ॥ 2 ॥',
        ],
        transliteration: [
          'Deva-muni-pravararchita lingam',
          'Kama-dahana-karunakara lingam',
          'Ravana-darpa-vinashaka lingam',
          'Tat pranamami Sadashiva lingam',
        ],
        meaning:
          'I bow to the Sadashiva Lingam, adored by sages and devas, compassionate yet fierce enough to burn desire and shatter arrogance.',
      },
      {
        label: 'Verse 3',
        telugu: [
          'సర్వసుగంధ సులేపిత లింగం',
          'బుద్ధి వివర్ధన కారణ లింగం ।',
          'సిద్ధ సురాసుర వందిత లింగం',
          'తత్ ప్రణమామి సదాశివ లింగం ॥ 3 ॥',
        ],
        transliteration: [
          'Sarva-sugandha-sulepita lingam',
          'Buddhi-vivardhana-karana lingam',
          'Siddha-surasura-vandita lingam',
          'Tat pranamami Sadashiva lingam',
        ],
        meaning:
          'I bow to the Sadashiva Lingam, anointed with fragrant offerings, source of awakened understanding, and revered by siddhas, devas, and even asuras.',
      },
      {
        label: 'Verse 4',
        telugu: [
          'కనకమహామణి భూషిత లింగం',
          'ఫణిపతి వేష్టిత శోభిత లింగం ।',
          'దక్షసుయజ్ఞ వినాశక లింగం',
          'తత్ ప్రణమామి సదాశివ లింగం ॥ 4 ॥',
        ],
        transliteration: [
          'Kanaka-mahamani-bhushita lingam',
          'Phanipati-veshtita-shobhita lingam',
          'Daksha-suyajna-vinashaka lingam',
          'Tat pranamami Sadashiva lingam',
        ],
        meaning:
          'I bow to the Sadashiva Lingam, adorned with gold and gems, encircled by the king of serpents, and remembered as the force that dissolved Daksha’s prideful sacrifice.',
      },
      {
        label: 'Verse 5',
        telugu: [
          'కుంకుమచందన లేపిత లింగం',
          'పంకజహార సుశోభిత లింగం ।',
          'సంచితపాప వినాశక లింగం',
          'తత్ ప్రణమామి సదాశివ లింగం ॥ 5 ॥',
        ],
        transliteration: [
          'Kumkuma-candana-lepita lingam',
          'Pankaja-hara-sushobhita lingam',
          'Sanchita-papa-vinashaka lingam',
          'Tat pranamami Sadashiva lingam',
        ],
        meaning:
          'I bow to the Sadashiva Lingam, sanctified with kumkum and sandal, beautified with lotus garlands, and capable of dissolving accumulated karmic impurity.',
      },
      {
        label: 'Verse 6',
        telugu: [
          'దేవగణార్చిత సేవిత లింగం',
          'భావైర్భక్తిభిరేవ చ లింగం ।',
          'దినకరకోటి ప్రభాకర లింగం',
          'తత్ ప్రణమామి సదాశివ లింగం ॥ 6 ॥',
        ],
        transliteration: [
          'Deva-ganarchita-sevita lingam',
          'Bhavair-bhaktibhir-eva cha lingam',
          'Dinakara-koti-prabhakara lingam',
          'Tat pranamami Sadashiva lingam',
        ],
        meaning:
          'I bow to the Sadashiva Lingam, served by hosts of divine beings, truly reached through devotion, and shining with the brilliance of countless suns.',
      },
      {
        label: 'Verse 7',
        telugu: [
          'అష్టదలోపరి వేష్టిత లింగం',
          'సర్వసముద్భవ కారణ లింగం ।',
          'అష్టదరిద్ర వినాశక లింగం',
          'తత్ ప్రణమామి సదాశివ లింగం ॥ 7 ॥',
        ],
        transliteration: [
          'Ashta-dalopari-veshtita lingam',
          'Sarva-samudbhava-karana lingam',
          'Ashta-daridra-vinashaka lingam',
          'Tat pranamami Sadashiva lingam',
        ],
        meaning:
          'I bow to the Sadashiva Lingam, enthroned upon the lotus of eight petals, cause of all manifestation, and destroyer of every form of inner and outer poverty.',
      },
      {
        label: 'Verse 8',
        telugu: [
          'సురగురు సురవర పూజిత లింగం',
          'సురవన పుష్ప సదార్చిత లింగం ।',
          'పరమపదం పరమాత్మక లింగం',
          'తత్ ప్రణమామి సదాశివ లింగం ॥ 8 ॥',
        ],
        transliteration: [
          'Sura-guru-suravara-pujita lingam',
          'Suravana-pushpa-sadarchita lingam',
          'Paramapadam paramatmaka lingam',
          'Tat pranamami Sadashiva lingam',
        ],
        meaning:
          'I bow to the Sadashiva Lingam, worshipped by Brihaspati and the श्रेष्ठ devas, ever adorned with celestial flowers, and revealed as the supreme state and the supreme Self.',
      },
    ],
    phalaShruti: {
      label: 'Phala Shruti',
      telugu: [
        'లింగాష్టకమిదం పుణ్యం యః పఠేచ్ఛివ సన్నిధౌ ।',
        'శివలోకమవాప్నోతి శివేన సహ మోదతే ॥',
      ],
      transliteration: [
        'Lingashtakam idam punyam yah pathecchiva sannidhau',
        'Shivalokam avapnoti shivena saha modate',
      ],
      meaning:
        'Whoever recites this sacred Lingashtakam in the presence of Shiva attains the realm of Shiva and rejoices there in his company.',
    },
  },
];

export const stotraSummaries = [
  {
    slug: 'shiva-panchakshari',
    title: 'Shiva Panchakshari Stotram',
    subtitle: 'Telugu, transliteration, and meaning',
    body: 'Five verses around the Panchakshari mantra, each linked with one sacred syllable of Namah Shivaya.',
    imageSrc: '/images/shiva.jpg',
  },
  {
    slug: 'lingashtakam',
    title: 'Lingashtakam',
    subtitle: 'Telugu, transliteration, and meaning',
    body: 'Eight verses glorifying the Shiva Lingam as purity, radiance, grace, and the destroyer of sorrow.',
    imageSrc: '/images/Kailash.jpg',
  },
  {
    slug: 'vishnu-sahasranamam',
    title: 'Vishnu Sahasranamam',
    subtitle: 'PDF reading resource',
    body: 'A direct path into the library resource for the thousand names of Vishnu.',
    imageSrc: '/images/Vishnu.JPG',
  },
  {
    slug: 'lalita-sahasranama',
    title: 'Lalita Sahasranama',
    subtitle: 'PDF reading resource',
    body: 'A direct path into the library resource for the thousand names of Lalita Devi.',
    imageSrc: '/images/Devi2.jpg',
  },
  {
    slug: 'hanuman-chalisa',
    title: 'Hanuman Chalisa',
    subtitle: 'PDF reading resource',
    body: 'A direct path into the library resource for the beloved Hanuman Chalisa.',
    imageSrc: '/images/hanuman.jpg',
  },
];

export function getStotraBySlug(slug: string) {
  return stotraEntries.find((entry) => entry.slug === slug) ?? null;
}
