import type { DeityProfile } from '@/components/deity-profile-page';
import { devotionalImagePools, pickImage, rotateImages, type DevotionalImage } from '@/lib/devotional-images';

function collectGalleryImages(...imageGroups: ReadonlyArray<readonly DevotionalImage[]>): DevotionalImage[] {
  const seen = new Set<string>();
  const images = imageGroups.flat().filter((image) => {
    if (seen.has(image.src)) {
      return false;
    }

    seen.add(image.src);
    return true;
  });

  return images;
}

export const deityProfiles = {
  shiva: {
    eyebrow: 'Shiva | Mahadeva | శివుడు',
    title: 'The stillness, grace, and fire of Mahadeva',
    description:
      'Shiva is revered as the silent summit of consciousness: lord of Kailasa, bearer of Ganga, dancer of cosmic dissolution, and the compassionate one who burns ignorance so the heart may awaken.',
    asideTitle: 'Shiva Bhava',
    asideItems: [
      'Auspicious stillness held together with fierce transformative power',
      'The lord of mantra, tapas, renunciation, and inner freedom',
      'Beloved as Shiva, Shambho, Mahadeva, Rudra, and Nataraja',
    ],
    image: pickImage(devotionalImagePools.shiva, 2),
    accentTopImage: pickImage(devotionalImagePools.shiva, 0),
    accentBottomImage: pickImage(devotionalImagePools.shiva, 1),
    sectionEyebrow: 'Why Shiva Draws the Heart',
    sectionTitle: 'Where silence becomes strength',
    paragraphs: [
      'In Shiva, devotees encounter paradox held in perfect peace. He is the ash-smeared ascetic and the loving householder, the terrifying Rudra and the gentle Shankara, the still yogi in samadhi and the lord whose damaru sets creation into motion.',
      'To turn toward Shiva is to turn toward inner vastness. His presence teaches detachment without dryness, strength without aggression, and surrender without fear. The Panchakshari, the jyotirlingas, the crescent moon, the sacred ash, and the river Ganga all point toward the same truth: what is offered into Shiva is purified and returned as grace.',
    ],
    practiceTitle: 'Devotional Pathways',
    practiceItems: [
      'Panchakshari japa, Rudram recitation, and Monday worship',
      'Meditation on Kailasa, jyotirlingas, and the Shiva Lingam',
      'Contemplation of Nataraja, Ardhanarishvara, and the blue-throated Nilakantha',
    ],
    galleryEyebrow: 'Shiva Darshan',
    galleryTitle: 'Images of mountain stillness and sacred fire',
    galleryImages: collectGalleryImages(rotateImages(devotionalImagePools.shiva, 0)),
  },
  vishnu: {
    eyebrow: 'Vishnu | Narayana | మహావిష్ణువు',
    title: 'Protector, preserver, and refuge of the worlds',
    description:
      'Vishnu stands as the sustaining presence of dharma: the compassionate preserver who descends as avatar whenever balance is threatened and who offers refuge to the devotee through grace, order, and remembrance.',
    asideTitle: 'Vishnu Bhava',
    asideItems: [
      'The sustaining current of cosmic order, compassion, and protection',
      'The source of avatars such as Rama, Krishna, Narasimha, and Vamana',
      'Beloved as Narayana, Srimannarayana, Venkateswara, Jagannatha, and Hari',
    ],
    image: pickImage(devotionalImagePools.vishnu, 6),
    accentTopImage: pickImage(devotionalImagePools.vishnu, 12),
    accentBottomImage: pickImage(devotionalImagePools.vishnu, 9),
    sectionEyebrow: 'The Shelter of Narayana',
    sectionTitle: 'The presence that preserves and uplifts',
    paragraphs: [
      'Vishnu is adored as the one who protects the worlds without anxiety and restores harmony without losing compassion. In him, divine sovereignty is not distant; it becomes shelter, steadiness, and the assurance that dharma is never abandoned.',
      'His forms gather many moods of devotion. Venkateswara is the lord of refuge on the hill, Krishna the intimate guide of the heart, Rama the embodiment of righteous kingship, Narasimha the fierce defender of the devoted, and Jagannatha the lord whose glance welcomes all. To remember Vishnu is to rest the mind in preservation, order, and trust.',
    ],
    practiceTitle: 'Devotional Pathways',
    practiceItems: [
      'Vishnu Sahasranama, nama smarana, and temple-centered bhakti',
      'Meditation on Dashavatara and the divine protection of dharma',
      'Pilgrimage into Vaikuntha themes, Venkateswara bhava, and Jagannatha darshan',
    ],
    galleryEyebrow: 'Vishnu Darshan',
    galleryTitle: 'From Venkateswara hills to Jagannatha and Narasimha',
    galleryImages: collectGalleryImages(rotateImages(devotionalImagePools.vishnu, 1)),
  },
  devi: {
    eyebrow: 'Devi | Adi Parashakti | అమ్మవారు',
    title: 'The radiance, protection, and motherhood of Shakti',
    description:
      'Devi is the living fullness of divine power: mother, queen, protectress, wisdom, abundance, beauty, and fierce compassion. In every form of the Goddess, the universe is held, nourished, and transformed.',
    asideTitle: 'Devi Bhava',
    asideItems: [
      'The one Shakti who shines as Lakshmi, Saraswati, Durga, Lalita, and countless Ammavaru forms',
      'The mother whose tenderness nourishes and whose fierceness protects',
      'The heart of mantra, Sri Vidya, Navaratri, and goddess-centered devotion',
    ],
    image: pickImage(devotionalImagePools.devi, 3),
    accentTopImage: pickImage(devotionalImagePools.devi, 1),
    accentBottomImage: pickImage(devotionalImagePools.devi, 5),
    sectionEyebrow: 'The Many Forms of the Mother',
    sectionTitle: 'Tender grace and unconquerable power',
    paragraphs: [
      'To approach Devi is to approach the divine as living presence rather than abstraction. She is Lakshmi who blesses and sustains, Saraswati who illumines the mind, Durga who destroys fear, and Lalita who reveals beauty, sovereignty, and inner refinement. Each form is distinct, yet all arise from the same boundless Shakti.',
      'For devotees, Devi is not only worshipped; she is felt as shelter. She receives the helpless, restores courage, ripens devotion, and stands guard over the inner life. Her temples, names, and festivals carry both intimacy and majesty, reminding the heart that compassion and power can dwell in one radiant form.',
    ],
    practiceTitle: 'Devotional Pathways',
    practiceItems: [
      'Navaratri worship, Devi Mahatmyam reflection, and Lalita-centered devotion',
      'Meditation on Sri Chakra, Shakti tattva, and the many names of Ammavaru',
      'Temple traditions of Durga, Rajarajeshwari, Lakshmi, and Saraswati across regions',
    ],
    galleryEyebrow: 'Devi Darshan',
    galleryTitle: 'Sacred forms of the Divine Mother',
    galleryImages: collectGalleryImages(rotateImages(devotionalImagePools.devi, 0)),
  },
  ganesha: {
    eyebrow: 'Ganesha | Ganapati | వినాయకుడు',
    title: 'Auspicious beginnings and clear, benevolent wisdom',
    description:
      'Ganesha is invoked at the threshold of all worthy beginnings. He clears obstacles, steadies intention, protects the path of learning, and blesses the devotee with discrimination, joy, and auspicious momentum.',
    asideTitle: 'Ganapati Bhava',
    asideItems: [
      'The lord of beginnings, sacred thresholds, memory, and intelligence',
      'The remover of obstacles and guardian of sincere effort',
      'Beloved in homes, temples, festivals, study, and daily prayer',
    ],
    image: pickImage(devotionalImagePools.ganesha, 2),
    accentTopImage: pickImage(devotionalImagePools.ganesha, 0),
    accentBottomImage: pickImage(devotionalImagePools.ganesha, 1),
    sectionEyebrow: 'Why Ganapati Is Invoked First',
    sectionTitle: 'The grace that clears the path ahead',
    paragraphs: [
      'Ganesha brings a rare devotional sweetness: nearness without distance, wisdom without severity, and protection without fear. His large ears listen, his broken tusk teaches sacrifice, and his playful form reminds the devotee that divine intelligence is not dry but compassionate and intimate.',
      'To remember Ganapati is to invite clarity before action. Whether at the beginning of study, travel, worship, work, or family ritual, his name is taken so the mind becomes steady, the heart becomes less burdened, and the path ahead becomes blessed rather than blocked.',
    ],
    practiceTitle: 'Devotional Pathways',
    practiceItems: [
      'Ganapati Atharvashirsha, nama japa, and daily morning invocation',
      'Vinayaka Chavithi celebration, home puja, and family-centered worship',
      'Contemplation of the modaka, mouse, trunk, and the symbolism of wise beginnings',
    ],
    galleryEyebrow: 'Ganapati Darshan',
    galleryTitle: 'Sacred forms of wisdom and auspicious welcome',
    galleryImages: collectGalleryImages(devotionalImagePools.ganesha),
  },
  hanuman: {
    eyebrow: 'Hanuman | Anjaneya | ఆంజనేయుడు',
    title: 'Strength, humility, and unwavering seva',
    description:
      'Hanuman is the radiant union of strength and surrender. He is the fearless servant of Rama, the protector of devotees, the embodiment of disciplined bhakti, and the reminder that true power flowers only when offered in service.',
    asideTitle: 'Hanuman Bhava',
    asideItems: [
      'Strength guided by humility, loyalty, and complete surrender to Rama',
      'The living symbol of courage, discipline, mantra, and tireless seva',
      'Beloved through Hanuman Chalisa, Sundara Kanda, and Ramabhakti traditions',
    ],
    image: pickImage(devotionalImagePools.hanuman, 1),
    accentTopImage: pickImage(devotionalImagePools.hanuman, 2),
    accentBottomImage: pickImage(devotionalImagePools.rama, 2),
    sectionEyebrow: 'The Heart of Seva',
    sectionTitle: 'Devotion made fearless and active',
    paragraphs: [
      'Hanuman does not represent strength for display; he represents strength that bows. In him, immense power and complete humility stand together without contradiction. His courage is born from remembrance of Rama, his purity from selfless service, and his greatness from the refusal to place himself at the center.',
      'For many devotees, Hanuman is the quickest source of inner steadiness in times of pressure, fear, or confusion. His worship inspires disciplined prayer, faithful effort, and a courageous heart that keeps moving forward while remaining anchored in devotion.',
    ],
    practiceTitle: 'Devotional Pathways',
    practiceItems: [
      'Hanuman Chalisa, Sundara Kanda, and nama japa rooted in Rama bhakti',
      'Tuesday and Saturday vrata observances for strength, protection, and focus',
      'Meditation on seva, loyalty, fearlessness, and the breath-like presence of Hanuman',
    ],
    galleryEyebrow: 'Hanuman Darshan',
    galleryTitle: 'Images of devotion, courage, and service',
    galleryImages: collectGalleryImages(devotionalImagePools.hanuman, devotionalImagePools.rama),
  },
  krishna: {
    eyebrow: 'Krishna | Govinda | శ్రీకృష్ణుడు',
    title: 'The sweetness, wisdom, and divine play of Krishna',
    description:
      'Krishna draws the heart through beauty, intimacy, and revelation. He is the flute-bearing beloved of Vrindavan, the guide of Arjuna in the Gita, and the lord whose leela turns devotion into joy-filled remembrance.',
    asideTitle: 'Krishna Bhava',
    asideItems: [
      'The union of delight, compassion, and supreme spiritual wisdom',
      'Beloved as Govinda, Gopala, Madhava, Keshava, and Parthasarathi',
      'The intimate lord of bhakti and the revealer of the Bhagavad Gita',
    ],
    image: pickImage(devotionalImagePools.krishna, 6),
    accentTopImage: pickImage(devotionalImagePools.krishna, 9),
    accentBottomImage: pickImage(devotionalImagePools.gita, 4),
    sectionEyebrow: 'Why Krishna Captivates the Heart',
    sectionTitle: 'Where play, tenderness, and truth meet',
    paragraphs: [
      'Krishna is loved because he is impossible to reduce to one mood. He is childlike and sovereign, playful and profound, the charming cowherd of Vrindavan and the charioteer who reveals timeless wisdom on the battlefield. In every form, he invites the devotee into closeness rather than distance.',
      'His presence teaches that spiritual life is not only discipline, but relationship. Through nama smarana, Gita study, kirtan, and darshan, Krishna devotion ripens into trust, sweetness, and the understanding that the Divine does not stand far away from human longing.',
    ],
    practiceTitle: 'Devotional Pathways',
    practiceItems: [
      'Bhagavad Gita contemplation, Govinda nama smarana, and Krishna bhajans',
      'Janmashtami celebration, temple darshan, and daily remembrance of leela',
      'Meditation on Vrindavan, flute, compassion, and the charioteer-guidance of Parthasarathi',
    ],
    galleryEyebrow: 'Krishna Darshan',
    galleryTitle: 'Images of sweetness, wisdom, and luminous grace',
    galleryImages: collectGalleryImages(devotionalImagePools.krishna, devotionalImagePools.gita),
  },
  rama: {
    eyebrow: 'Rama | Sri Ramachandra | శ్రీరాముడు',
    title: 'Dharma, compassion, and the serene strength of Rama',
    description:
      'Rama is revered as Maryada Purushottama, the ideal sovereign whose life reveals discipline, tenderness, truthfulness, and unwavering commitment to dharma. In his name, devotion becomes steadier, clearer, and nobler.',
    asideTitle: 'Rama Bhava',
    asideItems: [
      'The form of dharma expressed through compassion, steadiness, and noble conduct',
      'Beloved through the Ramayana, Sri Rama Navami, and daily nama japa',
      'The lord whose presence gathers Sita, Lakshmana, Hanuman, and the path of faithful devotion',
    ],
    image: pickImage(devotionalImagePools.rama, 3),
    accentTopImage: pickImage(devotionalImagePools.rama, 6),
    accentBottomImage: pickImage(devotionalImagePools.hanuman, 1),
    sectionEyebrow: 'The Path of Rama',
    sectionTitle: 'A kingship of inner order and compassion',
    paragraphs: [
      'Rama inspires because righteousness in him is never cold. His adherence to dharma is joined with tenderness toward devotees, honor toward relationships, and strength that does not become arrogance. He shows how spiritual dignity can be lived in family, society, and hardship alike.',
      'To turn toward Rama is to seek alignment. His name steadies the heart, his story trains moral vision, and his companionship with Sita and Hanuman reminds the devotee that love, fidelity, service, and truth are not separate virtues but one sacred way of life.',
    ],
    practiceTitle: 'Devotional Pathways',
    practiceItems: [
      'Rama nama japa, Ramayana parayana, and Sri Rama Navami worship',
      'Meditation on Sita-Rama, the bow of dharma, and the calm majesty of righteous action',
      'Hanuman-centered Rama bhakti through seva, prayer, and faithful remembrance',
    ],
    galleryEyebrow: 'Rama Darshan',
    galleryTitle: 'Images of dharma, devotion, and divine kingship',
    galleryImages: collectGalleryImages(devotionalImagePools.rama, devotionalImagePools.hanuman),
  },
  narasimha: {
    eyebrow: 'Narasimha | Lakshmi Narasimha | నరసింహుడు',
    title: 'Fierce protection and immediate refuge for the devoted',
    description:
      'Narasimha manifests as the blazing assurance that devotion will not be abandoned. In him, ferocity is not cruelty but protection, and divine power rises instantly when innocence, faith, and surrender call out for refuge.',
    asideTitle: 'Narasimha Bhava',
    asideItems: [
      'The fierce and compassionate protector of Prahlada and all sincere devotees',
      'A form of Vishnu who destroys fear while preserving tenderness toward the faithful',
      'Beloved in Lakshmi Narasimha worship, kavachas, and temple-centered refuge traditions',
    ],
    image: pickImage(devotionalImagePools.narasimha, 2),
    accentTopImage: pickImage(devotionalImagePools.narasimha, 0),
    accentBottomImage: pickImage(devotionalImagePools.vishnu, 8),
    sectionEyebrow: 'The Refuge of Narasimha',
    sectionTitle: 'Power that rises in defense of devotion',
    paragraphs: [
      'Narasimha is adored as the moment divine grace breaks through every delay. His appearance in the story of Prahlada shows that no worldly force can stand against a heart rooted in unwavering remembrance. What appears terrifying to arrogance becomes consolation to surrender.',
      'For devotees, Narasimha worship often becomes a source of courage in periods of pressure, vulnerability, or spiritual struggle. His form teaches that protection is not abstract. It is alive, personal, and ready to stand between the devotee and fear.',
    ],
    practiceTitle: 'Devotional Pathways',
    practiceItems: [
      'Lakshmi Narasimha stotras, kavacha recitation, and temple darshan for protection',
      'Meditation on Prahlada bhakti, fearlessness, and refuge in the name of Narasimha',
      'Contemplation of fierce grace as a shield for sincerity, innocence, and surrender',
    ],
    galleryEyebrow: 'Narasimha Darshan',
    galleryTitle: 'Images of blazing protection and compassionate strength',
    galleryImages: collectGalleryImages(devotionalImagePools.narasimha, devotionalImagePools.vishnu),
  },
  ayyappa: {
    eyebrow: 'Ayyappa | Hariharaputra | అయ్యప్ప',
    title: 'Discipline, pilgrimage, and the centered grace of Ayyappa',
    description:
      'Ayyappa is revered as Hariharaputra, the radiant lord of discipline, inward strength, and pilgrimage. His worship gathers vrata, humility, fraternity, and the ascent of devotion through sacred effort.',
    asideTitle: 'Ayyappa Bhava',
    asideItems: [
      'The lord of vrata, pilgrimage, simplicity, and disciplined inner focus',
      'Beloved through Sabarimala traditions, bhajans, and observances of restraint and devotion',
      'A presence that shapes devotion through effort, equality, and sacred resolve',
    ],
    image: pickImage(devotionalImagePools.ayyappa, 0),
    accentTopImage: pickImage(devotionalImagePools.ayyappa, 1),
    accentBottomImage: pickImage(devotionalImagePools.temples, 6),
    sectionEyebrow: 'The Way of Ayyappa',
    sectionTitle: 'Devotion strengthened through vow and pilgrimage',
    paragraphs: [
      'Ayyappa worship is marked by discipline that purifies rather than hardens. The vrata, the mala, the pilgrimage spirit, and the repeated remembrance of Swamiye Saranam Ayyappa train the devotee toward restraint, humility, and sustained focus.',
      'What makes Ayyappa devotion distinctive is its insistence that sacred effort changes the inner life. The path is not only about reaching a shrine, but about becoming more inwardly ordered, less reactive, and more capable of shared spiritual brotherhood and surrender.',
    ],
    practiceTitle: 'Devotional Pathways',
    practiceItems: [
      'Vrata discipline, bhajans, and remembrance centered on Swamiye Saranam Ayyappa',
      'Meditation on pilgrimage, simplicity, restraint, and inward purification',
      'Reflection on Sabarimala traditions, sacred resolve, and community-centered devotion',
    ],
    galleryEyebrow: 'Ayyappa Darshan',
    galleryTitle: 'Images of sacred discipline and pilgrimage bhava',
    galleryImages: collectGalleryImages(devotionalImagePools.ayyappa, devotionalImagePools.temples),
  },
} as const satisfies Record<string, DeityProfile>;
