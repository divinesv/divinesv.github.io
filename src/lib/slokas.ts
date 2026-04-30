export type SlokaMeaningPoint = {
  phrase: string;
  sanskrit?: string;
  meaning: string;
};

export type SlokaEntry = {
  slug: string;
  title: string;
  source: string;
  summary: string;
  devanagari: string[];
  transliteration: string[];
  meaningPoints: SlokaMeaningPoint[];
  reflection: string;
  tags: string[];
};

export type SlokaCategory = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  items: SlokaEntry[];
};

export const slokaCategories: SlokaCategory[] = [
  {
    id: 'speech-and-dharma',
    title: 'Speech and Dharma',
    subtitle: 'Truth spoken with grace',
    description: 'A classical verse on truthful, kind, and disciplined speech.',
    imageSrc: '/images/Temple2.jpg',
    imageAlt: 'Temple corridor for speech and dharma category',
    items: [
      {
        slug: 'satyam-bruyat',
        title: 'Truth with kindness',
        source: 'Traditional dharma maxim',
        summary: 'Speak what is true, but never use truth as a weapon.',
        devanagari: ['सत्यं ब्रूयात् प्रियं ब्रूयान्न ब्रूयात् सत्यमप्रियम् ।', 'प्रियं च नानृतं ब्रूयादेष धर्मः सनातनः ॥'],
        transliteration: [
          'Satyaṃ brūyāt priyaṃ brūyānna brūyāt satyamapriyam |',
          'Priyaṃ ca nānṛtaṃ brūyādeṣa dharmaḥ sanātanaḥ ||',
        ],
        meaningPoints: [
          { phrase: 'Satyam Bruyat', sanskrit: 'सत्यं ब्रूयात्', meaning: 'Speak the truth.' },
          { phrase: 'Priyam Bruyat', sanskrit: 'प्रियं ब्रूयात्', meaning: 'Speak in a pleasant and considerate manner.' },
          { phrase: 'Na Bruyat Satyam Apriyam', sanskrit: 'न ब्रूयात् सत्यमप्रियम्', meaning: 'Do not express truth in a harsh or hurtful way.' },
          { phrase: 'Priyam Cha Nanrutam Bruyat', sanskrit: 'प्रियं च नानृतं ब्रूयात्', meaning: 'Do not tell pleasing lies.' },
          { phrase: 'Esha Dharmah Sanatanah', sanskrit: 'एष धर्मः सनातनः', meaning: 'This is timeless dharma.' },
        ],
        reflection: 'The verse asks for both honesty and tenderness. Right speech is measured by truth, tone, and intention together.',
        tags: ['Dharma', 'Speech', 'Character'],
      },
    ],
  },
  {
    id: 'guru-and-reverence',
    title: 'Guru and Reverence',
    subtitle: 'The teacher as sacred guide',
    description: 'A revered verse honoring the Guru as the visible source of divine knowledge.',
    imageSrc: '/images/AdiShankaracharya.jpg',
    imageAlt: 'Adi Shankaracharya image for guru and reverence category',
    items: [
      {
        slug: 'guru-brahma',
        title: 'Salutations to the Guru',
        source: 'Guru Stotram',
        summary: 'A famous sloka that honors the Guru as the guide through creation, preservation, transformation, and ultimate truth.',
        devanagari: ['गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।', 'गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः ॥'],
        transliteration: [
          'Gurur Brahma Gurur Vishnuh Gurur Devo Maheshvarah |',
          'Guruh Sakshat Param Brahma Tasmai Shri Gurave Namah ||',
        ],
        meaningPoints: [
          { phrase: 'Gurur Brahma', sanskrit: 'गुरुर्ब्रह्मा', meaning: 'The Guru is Brahma, the creator.' },
          { phrase: 'Gurur Vishnuh', sanskrit: 'गुरुर्विष्णुः', meaning: 'The Guru is Vishnu, the sustainer.' },
          { phrase: 'Gurur Devo Maheshvarah', sanskrit: 'गुरुर्देवो महेश्वरः', meaning: 'The Guru is Maheshvara, Shiva, the transformer.' },
          { phrase: 'Guruh Sakshat Param Brahma', sanskrit: 'गुरुः साक्षात् परं ब्रह्म', meaning: 'The Guru is truly the Supreme Brahman.' },
          { phrase: 'Tasmai Shri Gurave Namah', sanskrit: 'तस्मै श्रीगुरवे नमः', meaning: 'Salutations to that revered Guru.' },
        ],
        reflection: 'This sloka expresses gratitude to the Guru as the one who removes ignorance and reveals the highest truth.',
        tags: ['Guru', 'Reverence', 'Wisdom'],
      },
    ],
  },
  {
    id: 'learning-and-humility',
    title: 'Learning and Humility',
    subtitle: 'Knowledge ripens into character',
    description: 'A widely loved subhashita on how learning matures into humility, worthiness, dharma, and happiness.',
    imageSrc: '/images/AdiShankaracharya.jpg',
    imageAlt: 'Adi Shankaracharya image for learning and humility category',
    items: [
      {
        slug: 'vidya-dadati-vinayam',
        title: 'Knowledge gives humility',
        source: 'Subhashita',
        summary: 'A concise sloka showing the inner chain from knowledge to humility, worthiness, dharma, and happiness.',
        devanagari: [
          'विद्या ददाति विनयं,',
          'विनयाद् याति पात्रताम् ।',
          'पात्रत्वात् धनमाप्नोति,',
          'धनात् धर्मं ततः सुखम् ॥',
        ],
        transliteration: [
          'Vidya Dadati Vinayam,',
          'Vinayaad Yaati Paatrataam |',
          'Paatratvaat Dhanamaapnoti,',
          'Dhanaat Dharmam Tatah Sukham ||',
        ],
        meaningPoints: [
          { phrase: 'Vidya Dadati Vinayam', sanskrit: 'विद्या ददाति विनयं', meaning: 'Knowledge gives humility.' },
          { phrase: 'Vinayaad Yaati Paatrataam', sanskrit: 'विनयाद् याति पात्रताम्', meaning: 'From humility, one becomes worthy.' },
          { phrase: 'Paatratvaat Dhanamaapnoti', sanskrit: 'पात्रत्वात् धनमाप्नोति', meaning: 'From worthiness, one gains wealth or support.' },
          { phrase: 'Dhanaat Dharmam Tatah Sukham', sanskrit: 'धनात् धर्मं ततः सुखम्', meaning: 'From wealth comes dharma, and from dharma comes happiness.' },
        ],
        reflection: 'The sloka teaches that true education is not display. It refines the person inwardly and then supports a righteous life.',
        tags: ['Learning', 'Humility', 'Wisdom'],
      },
      {
        slug: 'ya-devi-sarvabhuteshu-vidya',
        title: 'Salutations to the Goddess of Knowledge',
        source: 'Saraswati Vandana',
        summary: 'A devotional salutation to the Goddess who abides in all beings as knowledge.',
        devanagari: [
          'या देवी सर्वभूतेषु विद्यारूपेण संस्थिता ।',
          'नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ॥',
        ],
        transliteration: [
          'Ya Devi Sarvabhuteshu Vidya Rupena Samsthita |',
          'Namastasyai Namastasyai Namastasyai Namo Namah ||',
        ],
        meaningPoints: [
          { phrase: 'Ya Devi Sarvabhuteshu', sanskrit: 'या देवी सर्वभूतेषु', meaning: 'The Goddess who is present in all beings.' },
          { phrase: 'Vidya Rupena Samsthita', sanskrit: 'विद्यारूपेण संस्थिता', meaning: 'Who abides in the form of knowledge.' },
          { phrase: 'Namastasyai Namastasyai Namastasyai', sanskrit: 'नमस्तस्यै नमस्तस्यै नमस्तस्यै', meaning: 'Repeated salutations to Her.' },
          { phrase: 'Namo Namah', sanskrit: 'नमो नमः', meaning: 'Again and again, I bow in reverence.' },
        ],
        reflection: 'This vandana honors knowledge not as mere information, but as divine presence shining through all beings.',
        tags: ['Saraswati', 'Knowledge', 'Devotion'],
      },
    ],
  },
  {
    id: 'karma-and-duty',
    title: 'Karma and Duty',
    subtitle: 'Do the work without clinging',
    description: 'A foundational Gita verse on action, responsibility, and freedom from attachment to results.',
    imageSrc: '/images/Gita-arjuna.jpg',
    imageAlt: 'Bhagavad Gita image for karma and duty category',
    items: [
      {
        slug: 'karmanyevadhikaraste',
        title: 'Your right is to action',
        source: 'Bhagavad Gita 2.47',
        summary: 'One of the most quoted Gita slokas, reminding the seeker to act sincerely without becoming bound by results.',
        devanagari: [
          'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।',
          'मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
        ],
        transliteration: [
          'Karmanyevadhikaraste Ma Phaleshu Kadachana |',
          'Ma Karma Phala Hetur Bhur Ma Te Sango Stvakarmani ||',
        ],
        meaningPoints: [
          { phrase: 'Karmany Eva Adhikaras Te', sanskrit: 'कर्मण्येवाधिकारस्ते', meaning: 'Your right is only to action.' },
          { phrase: 'Ma Phaleshu Kadachana', sanskrit: 'मा फलेषु कदाचन', meaning: 'Never to the fruits of action alone.' },
          { phrase: 'Ma Karma Phala Hetur Bhuh', sanskrit: 'मा कर्मफलहेतुर्भूः', meaning: 'Do not act merely for the sake of results.' },
          { phrase: 'Ma Te Sango Stvakarmani', sanskrit: 'मा ते सङ्गोऽस्त्वकर्मणि', meaning: 'Do not become attached to inaction either.' },
        ],
        reflection: 'This sloka balances effort and detachment. It does not reject results, but asks the seeker not to become inwardly trapped by them.',
        tags: ['Gita', 'Karma', 'Duty'],
      },
      {
        slug: 'yada-yada-hi-dharmasya',
        title: 'When dharma declines',
        source: 'Bhagavad Gita 4.7',
        summary: 'A well-known Gita declaration that the Divine manifests whenever righteousness declines and disorder rises.',
        devanagari: [
          'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।',
          'अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥',
        ],
        transliteration: [
          'Yada Yada Hi Dharmasya Glanir Bhavati Bharata |',
          'Abhyutthanam Adharmasya Tadatmanam Srijamyaham ||',
        ],
        meaningPoints: [
          { phrase: 'Yada Yada Hi Dharmasya', sanskrit: 'यदा यदा हि धर्मस्य', meaning: 'Whenever there is decline of dharma.' },
          { phrase: 'Glanir Bhavati Bharata', sanskrit: 'ग्लानिर्भवति भारत', meaning: 'O Bharata, when that decline arises.' },
          { phrase: 'Abhyutthanam Adharmasya', sanskrit: 'अभ्युत्थानमधर्मस्य', meaning: 'And unrighteousness rises strongly.' },
          { phrase: 'Tadatmanam Srijamyaham', sanskrit: 'तदात्मानं सृजाम्यहम्', meaning: 'At that time, I manifest Myself.' },
        ],
        reflection: 'The verse reassures the seeker that the Divine is not absent from history. When balance is lost, grace moves to restore it.',
        tags: ['Gita', 'Dharma', 'Divine'],
      },
    ],
  },
  {
    id: 'peace-and-invocation',
    title: 'Peace and Invocation',
    subtitle: 'May learning be shared in peace',
    description: 'A sacred invocation chanted before study, prayer, and teaching for harmony between teacher and student.',
    imageSrc: '/images/Nature.jpg',
    imageAlt: 'Peaceful nature image for peace and invocation category',
    items: [
      {
        slug: 'saha-navavatu',
        title: 'A prayer before study',
        source: 'Shanti Mantra',
        summary: 'A timeless prayer for shared protection, nourishment, strength, radiant study, and mutual goodwill.',
        devanagari: [
          'ॐ सह नाववतु ।',
          'सह नौ भुनक्तु ।',
          'सह वीर्यं करवावहै ।',
          'तेजस्वि नावधीतमस्तु मा विद्विषावहै ।',
          'ॐ शान्तिः शान्तिः शान्तिः ॥',
        ],
        transliteration: [
          'Om Saha Nau Avatu |',
          'Saha Nau Bhunaktu |',
          'Saha Viryam Karavavahai |',
          'Tejasvi Nau Adhitam Astu Ma Vidvishavahai |',
          'Om Shantih Shantih Shantih ||',
        ],
        meaningPoints: [
          { phrase: 'Om Saha Nau Avatu', sanskrit: 'ॐ सह नाववतु', meaning: 'May He protect us both.' },
          { phrase: 'Saha Nau Bhunaktu', sanskrit: 'सह नौ भुनक्तु', meaning: 'May He nourish us both.' },
          { phrase: 'Saha Viryam Karavavahai', sanskrit: 'सह वीर्यं करवावहै', meaning: 'May we work together with great energy.' },
          { phrase: 'Tejasvi Nau Adhitam Astu', sanskrit: 'तेजस्वि नावधीतमस्तु', meaning: 'May our study be bright and illuminating.' },
          { phrase: 'Ma Vidvishavahai', sanskrit: 'मा विद्विषावहै', meaning: 'May we never hate or oppose one another.' },
          { phrase: 'Om Shantih Shantih Shantih', sanskrit: 'ॐ शान्तिः शान्तिः शान्तिः', meaning: 'Om, peace, peace, peace.' },
        ],
        reflection: 'This mantra makes study sacred. It asks that learning happen in protection, harmony, strength, and peace.',
        tags: ['Prayer', 'Peace', 'Study'],
      },
      {
        slug: 'gayatri-mantra',
        title: 'Meditation on the divine light',
        source: 'Gayatri Mantra | Rig Veda',
        summary: 'One of the most revered Vedic mantras, invoking the divine light to illumine the intellect.',
        devanagari: [
          'ॐ भूर्भुवः स्वः ।',
          'तत्सवितुर्वरेण्यं ।',
          'भर्गो देवस्य धीमहि ।',
          'धियो यो नः प्रचोदयात् ॥',
        ],
        transliteration: [
          'Om Bhur Bhuvah Svah |',
          'Tat Savitur Varenyam |',
          'Bhargo Devasya Dhimahi |',
          'Dhiyo Yo Nah Prachodayat ||',
        ],
        meaningPoints: [
          { phrase: 'Om Bhur Bhuvah Svah', sanskrit: 'ॐ भूर्भुवः स्वः', meaning: 'We invoke the Divine through the earthly, subtle, and heavenly realms.' },
          { phrase: 'Tat Savitur Varenyam', sanskrit: 'तत्सवितुर्वरेण्यं', meaning: 'That adorable radiance of Savitur, the divine source.' },
          { phrase: 'Bhargo Devasya Dhimahi', sanskrit: 'भर्गो देवस्य धीमहि', meaning: 'We meditate upon that divine effulgence.' },
          { phrase: 'Dhiyo Yo Nah Prachodayat', sanskrit: 'धियो यो नः प्रचोदयात्', meaning: 'May it inspire and guide our intellects.' },
        ],
        reflection: 'The Gayatri Mantra turns prayer into illumination. It asks not merely for blessing, but for awakened intelligence.',
        tags: ['Veda', 'Light', 'Meditation'],
      },
      {
        slug: 'asato-ma-sadgamaya',
        title: 'Lead me to the real',
        source: 'Shanti Mantra | Brihadaranyaka Upanishad',
        summary: 'A deeply inward prayer asking to be led from illusion to truth, darkness to light, and mortality to immortality.',
        devanagari: [
          'असतो मा सद्गमय ।',
          'तमसो मा ज्योतिर्गमय ।',
          'मृत्योर्मामृतं गमय ॥',
        ],
        transliteration: [
          'Asato Ma Sadgamaya |',
          'Tamaso Ma Jyotirgamaya |',
          'Mrityor Ma Amritam Gamaya ||',
        ],
        meaningPoints: [
          { phrase: 'Asato Ma Sadgamaya', sanskrit: 'असतो मा सद्गमय', meaning: 'Lead me from the unreal to the real.' },
          { phrase: 'Tamaso Ma Jyotirgamaya', sanskrit: 'तमसो मा ज्योतिर्गमय', meaning: 'Lead me from darkness to light.' },
          { phrase: 'Mrityor Ma Amritam Gamaya', sanskrit: 'मृत्योर्मामृतं गमय', meaning: 'Lead me from death to immortality.' },
        ],
        reflection: 'This mantra is a direct spiritual cry. It asks for inner passage from confusion and limitation into truth and freedom.',
        tags: ['Upanishad', 'Prayer', 'Light'],
      },
      {
        slug: 'mahamrityunjaya-mantra',
        title: 'Prayer for healing and liberation',
        source: 'Mahamrityunjaya Mantra',
        summary: 'A sacred mantra to the three-eyed Lord, prayed for strength, healing, freedom from fear, and liberation.',
        devanagari: [
          'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।',
          'उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥',
        ],
        transliteration: [
          'Om Tryambakam Yajamahe Sugandhim Pushtivardhanam |',
          'Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat ||',
        ],
        meaningPoints: [
          { phrase: 'Om Tryambakam Yajamahe', sanskrit: 'ॐ त्र्यम्बकं यजामहे', meaning: 'We worship the three-eyed Lord.' },
          { phrase: 'Sugandhim Pushtivardhanam', sanskrit: 'सुगन्धिं पुष्टिवर्धनम्', meaning: 'Who is fragrant and who nourishes and strengthens all life.' },
          { phrase: 'Urvarukamiva Bandhanan', sanskrit: 'उर्वारुकमिव बन्धनान्', meaning: 'Like a ripe fruit released from its bondage to the stem.' },
          { phrase: 'Mrityor Mukshiya Maamritat', sanskrit: 'मृत्योर्मुक्षीय मामृतात्', meaning: 'May I be freed from death, not separated from immortality.' },
        ],
        reflection: 'This mantra is recited for courage, healing, and spiritual release. It asks not merely for survival, but for freedom from fear and bondage.',
        tags: ['Healing', 'Shiva', 'Prayer'],
      },
      {
        slug: 'kayena-vacha-manasendriyairva',
        title: 'I offer all actions to the Divine',
        source: 'Atri Mantra | Prayer of Surrender',
        summary: 'A prayer of surrender offering every action of body, speech, mind, and nature to the Divine.',
        devanagari: [
          'कायेन वाचा मनसेंद्रियैर्वा बुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।',
          'करोमि यद्यत् सकलं परस्मै नारायणायेति समर्पयामि ॥',
        ],
        transliteration: [
          'Kayena Vacha Manasendriyairva Buddhyatmana Va Prakriteh Svabhavat |',
          'Karomi Yadyat Sakalam Parasmai Narayanayeti Samarpayami ||',
        ],
        meaningPoints: [
          { phrase: 'Kayena Vacha Manasendriyairva', sanskrit: 'कायेन वाचा मनसेंद्रियैर्वा', meaning: 'By body, speech, mind, or the senses.' },
          { phrase: 'Buddhyatmana Va Prakriteh Svabhavat', sanskrit: 'बुद्ध्यात्मना वा प्रकृतेः स्वभावात्', meaning: 'By intellect, by the self, or by the natural tendencies born of nature.' },
          { phrase: 'Karomi Yadyat Sakalam', sanskrit: 'करोमि यद्यत् सकलं', meaning: 'Whatever actions I perform in full.' },
          { phrase: 'Parasmai Narayanayeti Samarpayami', sanskrit: 'परस्मै नारायणायेति समर्पयामि', meaning: 'I offer all of them to the Supreme Lord Narayana.' },
        ],
        reflection: 'This prayer turns action into offering. It teaches surrender not as passivity, but as dedicating all actions to the Divine.',
        tags: ['Surrender', 'Prayer', 'Devotion'],
      },
      {
        slug: 'sarvesham-svastir-bhavatu',
        title: 'May there be well-being for all',
        source: 'Universal Peace Mantra',
        summary: 'A prayer for the welfare, peace, fullness, and auspiciousness of all beings.',
        devanagari: [
          'सर्वेषां स्वस्तिर्भवतु ।',
          'सर्वेषां शान्तिर्भवतु ।',
          'सर्वेषां पूर्णं भवतु ।',
          'सर्वेषां मङ्गलं भवतु ॥',
        ],
        transliteration: [
          'Sarvesham Svastir Bhavatu |',
          'Sarvesham Shantir Bhavatu |',
          'Sarvesham Purnam Bhavatu |',
          'Sarvesham Mangalam Bhavatu ||',
        ],
        meaningPoints: [
          { phrase: 'Sarvesham Svastir Bhavatu', sanskrit: 'सर्वेषां स्वस्तिर्भवतु', meaning: 'May there be well-being for all.' },
          { phrase: 'Sarvesham Shantir Bhavatu', sanskrit: 'सर्वेषां शान्तिर्भवतु', meaning: 'May there be peace for all.' },
          { phrase: 'Sarvesham Purnam Bhavatu', sanskrit: 'सर्वेषां पूर्णं भवतु', meaning: 'May there be fullness and completeness for all.' },
          { phrase: 'Sarvesham Mangalam Bhavatu', sanskrit: 'सर्वेषां मङ्गलं भवतु', meaning: 'May there be auspiciousness for all.' },
        ],
        reflection: 'This mantra expands personal prayer into universal goodwill. It is simple, generous, and deeply inclusive.',
        tags: ['Peace', 'Welfare', 'Prayer'],
      },
    ],
  },
  {
    id: 'beginnings-and-blessings',
    title: 'Beginnings and Blessings',
    subtitle: 'Prayer before action',
    description: 'Short invocations traditionally used to begin work, study, and sacred effort with clarity and protection.',
    imageSrc: '/images/Ganesha.jpg',
    imageAlt: 'Ganesha image for beginnings and blessings category',
    items: [
      {
        slug: 'vakratunda-mahakaya',
        title: 'Ganesha, remover of obstacles',
        source: 'Ganesha Shloka',
        summary: 'A beloved invocation to Ganesha asking that obstacles be removed from all endeavors.',
        devanagari: [
          'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।',
          'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
        ],
        transliteration: [
          'Vakratunda Mahakaya Suryakoti Samaprabha |',
          'Nirvighnam Kuru Me Deva Sarvakaryeshu Sarvada ||',
        ],
        meaningPoints: [
          { phrase: 'Vakratunda Mahakaya', sanskrit: 'वक्रतुण्ड महाकाय', meaning: 'O curved-trunked, mighty-bodied One.' },
          { phrase: 'Suryakoti Samaprabha', sanskrit: 'सूर्यकोटि समप्रभ', meaning: 'Whose brilliance equals millions of suns.' },
          { phrase: 'Nirvighnam Kuru Me Deva', sanskrit: 'निर्विघ्नं कुरु मे देव', meaning: 'O Lord, make my path free of obstacles.' },
          { phrase: 'Sarvakaryeshu Sarvada', sanskrit: 'सर्वकार्येषु सर्वदा', meaning: 'In all my undertakings, always.' },
        ],
        reflection: 'This prayer is often recited before beginning something important. It asks for clarity, protection, and unobstructed movement.',
        tags: ['Ganesha', 'Beginnings', 'Blessings'],
      },
    ],
  },
];
