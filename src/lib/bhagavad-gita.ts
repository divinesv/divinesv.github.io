import canonicalVerseRows from '@/data/bhagavad-gita/verses.json';
import sentimentVerseRows from '@/data/bhagavad-gita/sentiments.json';

type RawCanonicalVerse = {
  chapter: number;
  verse: number;
  original_verse: string;
  transliteration: string;
  translation: string;
  commentary: string;
};

type RawSentimentVerse = RawCanonicalVerse & {
  sentiment: 'positive' | 'negative' | 'neutral';
  emotions: string[];
};

export type BhagavadGitaVerse = {
  id: string;
  chapter: number;
  verse: number;
  reference: string;
  originalVerse: string;
  transliteration: string;
  translation: string;
  commentary: string;
  sentiment: RawSentimentVerse['sentiment'];
  emotions: string[];
};

export type BhagavadGitaMode = {
  slug: 'clarity' | 'courage' | 'devotion';
  label: string;
  summary: string;
  image: string;
  verses: BhagavadGitaVerse[];
};

export type BhagavadGitaChapter = {
  chapter: number;
  verseCount: number;
  verses: BhagavadGitaVerse[];
};

function normalizeText(text: string) {
  return text
    .replace(/\r/g, '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+\n/g, '\n')
    .replace(/\n\s+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

function normalizeTranslation(text: string) {
  return normalizeText(text).replace(/^BG\s+\d+(?:\.\d+)?(?:-\d+)?:\s*/i, '');
}

function formatOriginalVerse(text: string) {
  return normalizeText(text)
    .replace(/\|\|/g, ' ||\n')
    .replace(/\|/g, ' |\n')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

const sentimentMetaMap = new Map(
  (sentimentVerseRows as RawSentimentVerse[]).map((row) => [
    `${row.chapter}-${row.verse}`,
    {
      sentiment: row.sentiment,
      emotions: row.emotions,
    },
  ]),
);

const verses = (canonicalVerseRows as RawCanonicalVerse[]).map((row) => {
  const sentimentMeta = sentimentMetaMap.get(`${row.chapter}-${row.verse}`);

  return {
    id: `${row.chapter}-${row.verse}`,
    chapter: row.chapter,
    verse: row.verse,
    reference: `Bhagavad Gita ${row.chapter}.${row.verse}`,
    originalVerse: formatOriginalVerse(row.original_verse),
    transliteration: normalizeText(row.transliteration),
    translation: normalizeTranslation(row.translation),
    commentary: normalizeText(row.commentary),
    sentiment: sentimentMeta?.sentiment ?? 'neutral',
    emotions: sentimentMeta?.emotions ?? [],
  };
});

export const bhagavadGitaChapters: BhagavadGitaChapter[] = Array.from({ length: 18 }, (_, index) => {
  const chapter = index + 1;
  const chapterVerses = verses.filter((verse) => verse.chapter === chapter);

  return {
    chapter,
    verseCount: chapterVerses.length,
    verses: chapterVerses,
  };
});

const verseMap = new Map(verses.map((verse) => [`${verse.chapter}-${verse.verse}`, verse]));

function getVerse(chapter: number, verse: number) {
  const match = verseMap.get(`${chapter}-${verse}`);
  if (!match) {
    throw new Error(`Bhagavad Gita verse ${chapter}.${verse} not found`);
  }

  return match;
}

export const bhagavadGitaStats = {
  chapterCount: 18,
  verseCount: verses.length,
  sentimentBreakdown: {
    positive: verses.filter((verse) => verse.sentiment === 'positive').length,
    negative: verses.filter((verse) => verse.sentiment === 'negative').length,
    neutral: verses.filter((verse) => verse.sentiment === 'neutral').length,
  },
};

export const bhagavadGitaFeaturedVerses: BhagavadGitaVerse[] = [
  getVerse(2, 47),
  getVerse(4, 8),
  getVerse(6, 5),
  getVerse(9, 22),
  getVerse(12, 15),
  getVerse(18, 66),
];

export const bhagavadGitaModes: BhagavadGitaMode[] = [
  {
    slug: 'clarity',
    label: 'Clarity and steadiness',
    summary: 'For doubt, overthinking, restlessness, and the need to return to inner balance.',
    image: '/images/Gita-arjuna.jpg',
    verses: [getVerse(2, 14), getVerse(2, 47), getVerse(2, 50), getVerse(6, 5), getVerse(12, 15)],
  },
  {
    slug: 'courage',
    label: 'Courage and dharma',
    summary: 'For pressure, fear, responsibility, and moments that require firmness without losing humility.',
    image: '/images/Vishwaroopam.jpg',
    verses: [getVerse(3, 30), getVerse(4, 7), getVerse(4, 8), getVerse(6, 5), getVerse(18, 66)],
  },
];
