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

export type StotraSummary = {
  slug: string;
  title: string;
  subtitle: string;
  body: string;
  imageSrc: string;
  href: string;
  deitySlug?: string;
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
    imageSrc: '/images/Shiva.jpeg',
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
  {
    slug: 'lakshmi-narasimha-ashtottara-sata-namavali',
    title: 'Lakshmi Narasimha Ashtottara Sata Namavali',
    shortTitle: 'Lakshmi Narasimha Namavali',
    eyebrow: 'Narasimha | Namavali | లక్ష్మీ నరసింహ',
    deity: 'Narasimha',
    description:
      'A devotional rendering of the Lakshmi Narasimha Ashtottara Sata Namavali with Telugu text, English transliteration, and concise section meanings for steady chanting and study.',
    introduction:
      'This namavali gathers sacred names that praise Lakshmi Narasimha as protector, cosmic presence, blazing refuge, and the compassionate guardian of Prahlada. It is arranged in readable sections for chanting in the DivineSV style.',
    imageSrc: '/images/Narsimha.jpg',
    imageAlt: 'Lakshmi Narasimha devotional image for the namavali',
    asideTitle: '',
    asideItems: [],
    verses: [
      {
        label: 'Section 1',
        telugu: [
          'ఓం నారసింహాయ నమః',
          'ఓం మహాసింహాయ నమః',
          'ఓం దివ్య సింహాయ నమః',
          'ఓం మహాబలాయ నమః',
          'ఓం ఉగ్ర సింహాయ నమః',
          'ఓం మహాదేవాయ నమః',
          'ఓం స్తంభజాయ నమః',
          'ఓం ఉగ్రలోచనాయ నమః',
          'ఓం రౌద్రాయ నమః',
          'ఓం సర్వాద్భుతాయ నమః',
        ],
        transliteration: [
          'Om Narasimhaya namah',
          'Om Mahasimhaya namah',
          'Om Divya Simhaya namah',
          'Om Mahabalaya namah',
          'Om Ugra Simhaya namah',
          'Om Mahadevaya namah',
          'Om Stambhajaya namah',
          'Om Ugralochanaya namah',
          'Om Raudraya namah',
          'Om Sarvadbhutaya namah',
        ],
        meaning:
          'These opening names praise Lakshmi Narasimha as the great and divine lion-form of Vishnu: immensely powerful, fierce, pillar-born, sharp-eyed, and wondrous beyond comparison.',
      },
      {
        label: 'Section 2',
        telugu: [
          'ఓం శ్రీమతే నమః',
          'ఓం యోగానందాయ నమః',
          'ఓం త్రివిక్రమాయ నమః',
          'ఓం హరయే నమః',
          'ఓం కోలాహలాయ నమః',
          'ఓం చక్రిణే నమః',
          'ఓం విజయాయ నమః',
          'ఓం జయవర్ణనాయ నమః',
          'ఓం పంచాననాయ నమః',
          'ఓం పరబ్రహ్మణే నమః',
        ],
        transliteration: [
          'Om Shrimate namah',
          'Om Yoganandaya namah',
          'Om Trivikramaya namah',
          'Om Haraye namah',
          'Om Kolahalaya namah',
          'Om Chakrine namah',
          'Om Vijayaya namah',
          'Om Jayavarnanaya namah',
          'Om Panchananaya namah',
          'Om Parabrahmane namah',
        ],
        meaning:
          'This section salutes him as the beautiful and bliss-giving Lord: Hari, Trivikrama, the discus-bearer, ever-victorious, many-faced, and the Supreme Brahman.',
      },
      {
        label: 'Section 3',
        telugu: [
          'ఓం అఘోరాయ నమః',
          'ఓం ఘోర విక్రమాయ నమః',
          'ఓం జ్వలన్ముఖాయ నమః',
          'ఓం మహా జ్వాలాయ నమః',
          'ఓం జ్వాలామాలినే నమః',
          'ఓం మహా ప్రభవే నమః',
          'ఓం నిటలాక్షాయ నమః',
          'ఓం సహస్రాక్షాయ నమః',
          'ఓం దుర్నిరీక్షాయ నమః',
          'ఓం ప్రతాపనాయ నమః',
        ],
        transliteration: [
          'Om Aghoraya namah',
          'Om Ghora Vikramaya namah',
          'Om Jvalanmukhaya namah',
          'Om Maha Jvalaya namah',
          'Om Jvalamaline namah',
          'Om Maha Prabhave namah',
          'Om Nitalakshaya namah',
          'Om Sahasrakshaya namah',
          'Om Durnirikshaya namah',
          'Om Pratapanaya namah',
        ],
        meaning:
          'Here the namavali remembers his blazing radiance: not fearful to devotees, yet awe-inspiring in power, flame-faced, garlanded with fire, thousand-eyed, and impossible for evil to withstand.',
      },
      {
        label: 'Section 4',
        telugu: [
          'ఓం మహాదంష్ట్రాయుధాయ నమః',
          'ఓం ప్రాజ్ఞాయ నమః',
          'ఓం చండకోపినే నమః',
          'ఓం సదాశివాయ నమః',
          'ఓం హిరణ్యకశిపుధ్వంసినే నమః',
          'ఓం దైత్యదానవభంజనాయ నమః',
          'ఓం గుణభద్రాయ నమః',
          'ఓం మహాభద్రాయ నమః',
          'ఓం బలభద్రకాయ నమః',
          'ఓం సుభద్రకాయ నమః',
        ],
        transliteration: [
          'Om Mahadamshtrayudhaya namah',
          'Om Prajnaya namah',
          'Om Chandakopine namah',
          'Om Sadashivaya namah',
          'Om Hiranyakashipudhvamsine namah',
          'Om Daityadanavabhanjanaya namah',
          'Om Gunabhadraya namah',
          'Om Mahabhadraya namah',
          'Om Balabhadrakaya namah',
          'Om Subhadrakaya namah',
        ],
        meaning:
          'These names turn to his battle aspect: wise, intensely wrathful toward adharma, destroyer of Hiranyakashipu and demonic forces, yet filled with auspicious strength and noble qualities.',
      },
      {
        label: 'Section 5',
        telugu: [
          'ఓం కరాళాయ నమః',
          'ఓం వికరాళాయ నమః',
          'ఓం వికర్త్రే నమః',
          'ఓం సర్వర్త్రకాయ నమః',
          'ఓం శింశుమారాయ నమః',
          'ఓం త్రిలోకాత్మనే నమః',
          'ఓం ఈశాయ నమః',
          'ఓం సర్వేశ్వరాయ నమః',
          'ఓం విభవే నమః',
          'ఓం భైరవాడంబరాయ నమః',
        ],
        transliteration: [
          'Om Karalaya namah',
          'Om Vikaralaya namah',
          'Om Vikartre namah',
          'Om Sarvartrakaya namah',
          'Om Shimshumaraya namah',
          'Om Trilokatmane namah',
          'Om Ishaya namah',
          'Om Sarveshvaraya namah',
          'Om Vibhave namah',
          'Om Bhairavadambaraya namah',
        ],
        meaning:
          'This section praises the fearsome majesty of Narasimha: wide-mouthed, mighty in action, present through all the worlds, lord of every realm, and terrible to behold when he roars in defense of dharma.',
      },
      {
        label: 'Section 6',
        telugu: [
          'ఓం దివ్యాయ నమః',
          'ఓం అచ్యుతాయ నమః',
          'ఓం కవయే నమః',
          'ఓం మాధవాయ నమః',
          'ఓం అధోక్షజాయ నమః',
          'ఓం అక్షరాయ నమః',
          'ఓం శర్వాయ నమః',
          'ఓం వనమాలినే నమః',
          'ఓం వరప్రదాయ నమః',
          'ఓం విశ్వంభరాయ నమః',
        ],
        transliteration: [
          'Om Divyaya namah',
          'Om Achyutaya namah',
          'Om Kavaye namah',
          'Om Madhavaya namah',
          'Om Adhokshajaya namah',
          'Om Aksharaya namah',
          'Om Sharvaya namah',
          'Om Vanamaline namah',
          'Om Varapradaya namah',
          'Om Vishvambaraya namah',
        ],
        meaning:
          'These names reveal the deeper Vishnu tattva within Narasimha: divine, infallible, poetic, Lakshmi’s lord, beyond sense perception, imperishable, garlanded, and generous with grace.',
      },
      {
        label: 'Section 7',
        telugu: [
          'ఓం అధ్భుతాయ నమః',
          'ఓం భవ్యాయ నమః',
          'ఓం శ్రీవిష్ణవే నమః',
          'ఓం పురుషోత్తమాయ నమః',
          'ఓం అనఘాస్త్రాయ నమః',
          'ఓం నఖాస్త్రాయ నమః',
          'ఓం సూర్య జ్యోతిషే నమః',
          'ఓం సురేశ్వరాయ నమః',
          'ఓం సహస్రబాహవే నమః',
          'ఓం సర్వజ్ఞాయ నమః',
        ],
        transliteration: [
          'Om Adbhutaya namah',
          'Om Bhavyaya namah',
          'Om Shrivishnave namah',
          'Om Purushottamaya namah',
          'Om Anaghastraya namah',
          'Om Nakhastraya namah',
          'Om Surya Jyotishe namah',
          'Om Sureshvaraya namah',
          'Om Sahasrabahave namah',
          'Om Sarvajnaya namah',
        ],
        meaning:
          'This movement continues with cosmic and protective names: sustainer of the universe, wondrous, all-pervading Vishnu, supreme person, armed even with his nails, radiant like the sun, and omniscient.',
      },
      {
        label: 'Section 8',
        telugu: [
          'ఓం సర్వసిద్ధ ప్రదాయకాయ నమః',
          'ఓం వజ్రదంష్ట్రాయ నమః',
          'ఓం వజ్రనఖాయ నమః',
          'ఓం మహానందాయ నమః',
          'ఓం పరంతపాయ నమః',
          'ఓం సర్వమంత్రైక రూపాయ నమః',
          'ఓం సర్వతంత్రాత్మకాయ నమః',
          'ఓం అవ్యక్తాయ నమః',
          'ఓం సువ్యక్తాయ నమః',
          'ఓం భక్తవత్సలాయ నమః',
        ],
        transliteration: [
          'Om Sarvasiddha Pradayakaya namah',
          'Om Vajradamstraya namah',
          'Om Vajranakhaya namah',
          'Om Mahanandaya namah',
          'Om Parantapaya namah',
          'Om Sarvamantraika Rupaya namah',
          'Om Sarvatantratmakaya namah',
          'Om Avyaktaya namah',
          'Om Suvyaktaya namah',
          'Om Bhakta Vatsalaya namah',
        ],
        meaning:
          'Here Narasimha is remembered as the giver of accomplishments and fearless refuge: thunder-toothed, thunder-nailed, blissful, scorching to negativity, present in mantra and tantra, hidden yet fully manifest, tender toward devotees.',
      },
      {
        label: 'Section 9',
        telugu: [
          'ఓం వైశాఖ శుక్ల భూతోత్ధాయ నమః',
          'ఓం శరణాగత వత్సలాయ నమః',
          'ఓం ఉదార కీర్తయే నమః',
          'ఓం పుణ్యాత్మనే నమః',
          'ఓం దండ విక్రమాయ నమః',
          'ఓం వేదత్రయ ప్రపూజ్యాయ నమః',
          'ఓం భగవతే నమః',
          'ఓం పరమేశ్వరాయ నమః',
          'ఓం శ్రీ వత్సాంకాయ నమః',
        ],
        transliteration: [
          'Om Vaishakha Shukla Bhutotthaya namah',
          'Om Saranagata Vatsalaya namah',
          'Om Udara Kirtaye namah',
          'Om Punyatmane namah',
          'Om Danda Vikramaya namah',
          'Om Vedatraya Prapujyaya namah',
          'Om Bhagavate namah',
          'Om Parameshvaraya namah',
          'Om Shrivatsankaya namah',
        ],
        meaning:
          'These names connect him to worship and sacred time: manifest on the bright Vaishakha moon, loving toward the surrendered, renowned, holy, valorous, deeply worshipped in the Vedas, and marked with the Shrivatsa.',
      },
      {
        label: 'Section 10',
        telugu: [
          'ఓం శ్రీనివాసాయ నమః',
          'ఓం జగద్వ్యాపినే నమః',
          'ఓం జగన్మయాయ నమః',
          'ఓం జగత్పాలాయ నమః',
          'ఓం జగన్నాధాయ నమః',
          'ఓం మహాకాయాయ నమః',
          'ఓం ద్విరూపభృతే నమః',
          'ఓం పరమాత్మనే నమః',
          'ఓం పరజ్యోతిషే నమః',
          'ఓం నిర్గుణాయ నమః',
        ],
        transliteration: [
          'Om Shrinivasaya namah',
          'Om Jagadvyapine namah',
          'Om Jaganmayaya namah',
          'Om Jagatpalaya namah',
          'Om Jagannadhaya namah',
          'Om Mahakayaya namah',
          'Om Dvirupabhrite namah',
          'Om Paramatmane namah',
          'Om Parajyotishe namah',
          'Om Nirgunaya namah',
        ],
        meaning:
          'This section turns universal: Srinivasa, all-pervading, immanent in the cosmos, guardian of the worlds, great in form, dual as man and lion, the indwelling Self, supreme light, and beyond material qualities.',
      },
      {
        label: 'Section 11',
        telugu: [
          'ఓం నృకేసరిణే నమః',
          'ఓం పరతత్త్వాయ నమః',
          'ఓం పరంధామ్నే నమః',
          'ఓం సచ్చిదానంద విగ్రహాయ నమః',
          'ఓం లక్ష్మీనృసింహాయ నమః',
          'ఓం సర్వాత్మనే నమః',
          'ఓం ధీరాయ నమః',
          'ఓం ప్రహ్లాద పాలకాయ నమః',
          'ఓం శ్రీ లక్ష్మీ నరసింహాయ నమః',
        ],
        transliteration: [
          'Om Nrikesarine namah',
          'Om Paratattvaya namah',
          'Om Parandhamne namah',
          'Om Satchidananda Vigrahaya namah',
          'Om Lakshminrisimhaya namah',
          'Om Sarvatmane namah',
          'Om Dhiraya namah',
          'Om Prahlada Palakaya namah',
          'Om Shri Lakshmi Narasimhaya namah',
        ],
        meaning:
          'The closing section gathers the highest understanding of Lakshmi Narasimha: the man-lion, supreme reality, supreme abode, embodiment of sat-cit-ananda, soul of all, steady protector of Prahlada, and the gracious Lord worshipped in loving surrender.',
      },
    ],
  },
];

export const stotraSummaries: StotraSummary[] = [
  {
    slug: 'shiva-panchakshari',
    title: 'Shiva Panchakshari Stotram',
    subtitle: 'Telugu, transliteration, and meaning',
    body: 'Five verses that unfold the sacred syllables of Namah Shivaya and praise Shiva through purity, fire, and grace.',
    imageSrc: '/images/Shiva.jpeg',
    href: '/stotras/shiva-panchakshari',
    deitySlug: 'shiva',
  },
  {
    slug: 'lingashtakam',
    title: 'Lingashtakam',
    subtitle: 'Telugu, transliteration, and meaning',
    body: 'Eight verses glorifying the Shiva Lingam as the radiant axis of worship, purity, protection, and liberation.',
    imageSrc: '/images/Kailash.jpg',
    href: '/stotras/lingashtakam',
    deitySlug: 'shiva',
  },
  {
    slug: 'lakshmi-narasimha-ashtottara-sata-namavali',
    title: 'Lakshmi Narasimha Ashtottara Sata Namavali',
    subtitle: 'Telugu, transliteration, and meaning',
    body: 'A namavali of 108 sacred names praising Lakshmi Narasimha as blazing refuge, cosmic protector, and Prahlada’s guardian.',
    imageSrc: '/images/Narsimha.jpg',
    href: '/stotras/lakshmi-narasimha-ashtottara-sata-namavali',
    deitySlug: 'narasimha',
  },
  {
    slug: 'vishnu-sahasranamam',
    title: 'Vishnu Sahasranamam',
    subtitle: 'PDF reading resource',
    body: 'The thousand names of Vishnu, revered as a complete nama stotram for remembrance, protection, and devotion.',
    imageSrc: '/images/Vishnu.jpg',
    href: '/library/vishnu-sahashranamas',
    deitySlug: 'vishnu',
  },
  {
    slug: 'lalita-sahasranama',
    title: 'Lalita Sahasranama',
    subtitle: 'PDF reading resource',
    body: 'The thousand names of Lalita Devi, celebrating the Divine Mother through beauty, sovereignty, compassion, and mantra shakti.',
    imageSrc: '/images/Devi2.jpg',
    href: '/library/lalitha-sahasranama-stotram',
    deitySlug: 'devi',
  },
  {
    slug: 'hanuman-chalisa',
    title: 'Hanuman Chalisa',
    subtitle: 'PDF reading resource',
    body: 'The beloved forty-verse hymn to Hanuman, recited for courage, protection, discipline, and unwavering Rama bhakti.',
    imageSrc: '/images/hanuman.jpg',
    href: '/library/srihanumanchalisa',
    deitySlug: 'hanuman',
  },
];

export function getStotraBySlug(slug: string) {
  return stotraEntries.find((entry) => entry.slug === slug) ?? null;
}

export function getStotraSummariesByDeity(deitySlug: string) {
  return stotraSummaries.filter((entry) => entry.deitySlug === deitySlug);
}
