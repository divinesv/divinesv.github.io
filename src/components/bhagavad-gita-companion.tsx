'use client';

import { startTransition, useState } from 'react';
import Image from 'next/image';

import { devotionalImagePools, pickImage } from '@/lib/devotional-images';
import { bhagavadGitaChapters, type BhagavadGitaMode, type BhagavadGitaVerse } from '@/lib/bhagavad-gita';

type BhagavadGitaCompanionProps = {
  modes: BhagavadGitaMode[];
};

const keywordMap: Record<BhagavadGitaMode['slug'], string[]> = {
  clarity: ['clarity', 'confused', 'confusion', 'calm', 'peace', 'steady', 'focus', 'restless', 'mind', 'anxious'],
  courage: ['fear', 'afraid', 'courage', 'duty', 'fight', 'pressure', 'strong', 'responsibility', 'dharma', 'brave'],
  devotion: ['krishna', 'bhakti', 'devotion', 'surrender', 'prayer', 'faith', 'grace', 'love', 'god', 'trust'],
};

function hashText(value: string) {
  return value.split('').reduce((total, character) => (total * 31 + character.charCodeAt(0)) >>> 0, 7);
}

function chooseMode(modes: BhagavadGitaMode[], value: string, fallbackSlug: BhagavadGitaMode['slug']) {
  const normalized = value.toLowerCase();
  const scores = modes.map((mode) => ({
    slug: mode.slug,
    score: keywordMap[mode.slug].reduce((total, keyword) => total + (normalized.includes(keyword) ? 1 : 0), 0),
  }));
  const best = scores.sort((left, right) => right.score - left.score)[0];
  return modes.find((mode) => mode.slug === (best?.score ? best.slug : fallbackSlug)) ?? modes[0];
}

function chooseVerse(mode: BhagavadGitaMode, value: string) {
  const seed = hashText(`${mode.slug}:${value.trim().toLowerCase() || mode.label}`);
  return mode.verses[seed % mode.verses.length];
}

const guidedVerseImages = [...devotionalImagePools.gita, ...devotionalImagePools.krishna];

export function BhagavadGitaCompanion({ modes }: BhagavadGitaCompanionProps) {
  const initialVerse = modes[0]?.verses[0] ?? null;
  const [modeSlug, setModeSlug] = useState<BhagavadGitaMode['slug']>(modes[0]?.slug ?? 'clarity');
  const [message, setMessage] = useState('');
  const [selectedVerse, setSelectedVerse] = useState<BhagavadGitaVerse | null>(initialVerse);
  const [selectedChapter, setSelectedChapter] = useState<number>(initialVerse?.chapter ?? 1);
  const [selectedVerseNumber, setSelectedVerseNumber] = useState<number>(initialVerse?.verse ?? 1);

  const activeMode = modes.find((mode) => mode.slug === modeSlug) ?? modes[0];
  const activeChapter = bhagavadGitaChapters.find((chapter) => chapter.chapter === selectedChapter) ?? bhagavadGitaChapters[0];
  const guidedVisual = selectedVerse
    ? pickImage(guidedVerseImages, hashText(`${selectedVerse.id}:${modeSlug}`))
    : { src: activeMode.image, alt: activeMode.label };

  function chooseModeForVerse(verse: BhagavadGitaVerse, fallbackSlug = modeSlug) {
    const matchingMode = modes.find((mode) => mode.verses.some((candidate) => candidate.id === verse.id));
    if (matchingMode) {
      return matchingMode;
    }

    const sentimentFallback =
      verse.sentiment === 'positive' ? 'devotion' : verse.sentiment === 'negative' ? 'courage' : 'clarity';

    return modes.find((mode) => mode.slug === sentimentFallback) ?? modes.find((mode) => mode.slug === fallbackSlug) ?? modes[0];
  }

  function syncSelectedVerse(verse: BhagavadGitaVerse, nextModeSlug?: BhagavadGitaMode['slug']) {
    startTransition(() => {
      setModeSlug(nextModeSlug ?? chooseModeForVerse(verse).slug);
      setSelectedVerse(verse);
      setSelectedChapter(verse.chapter);
      setSelectedVerseNumber(verse.verse);
    });
  }

  function updateReflection(input: string, fallbackSlug = modeSlug) {
    const nextMode = chooseMode(modes, input, fallbackSlug);
    const nextVerse = chooseVerse(nextMode, input);

    syncSelectedVerse(nextVerse, nextMode.slug);
  }

  return (
    <section className="section-spacing">
      <div className="gita-companion-shell">
        <div className="gita-companion-form devotional-panel">
          <span className="eyebrow">Bhagavad Gita Companion</span>
          <h2 className="section-title">Receive a live sloka reflection</h2>

          <div className="gita-mode-row" role="tablist" aria-label="Bhagavad Gita reflection paths">
            {modes.map((mode) => (
              <button
                key={mode.slug}
                className={`gita-mode-chip${mode.slug === modeSlug ? ' active' : ''}`}
                type="button"
                onClick={() => updateReflection(message, mode.slug)}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <form
            className="gita-reflection-form"
            onSubmit={(event) => {
              event.preventDefault();
              updateReflection(message);
            }}
          >
            <label className="sr-only" htmlFor="gita-reflection-input">
              Describe what you are feeling
            </label>
            <textarea
              id="gita-reflection-input"
              className="gita-textarea"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Example: I feel overwhelmed and I need steadiness in my mind."
              rows={4}
            />
            <div className="link-row">
              <button className="primary-link" type="submit">
                Reveal a Sloka
              </button>
            </div>
          </form>

          <div className="gita-direct-nav">
            <div className="gita-direct-nav-header">
              <span className="card-tag">Direct Reading</span>
              <p>Open any chapter and jump straight to a specific sloka.</p>
            </div>

            <div className="gita-select-grid">
              <label className="gita-select-field" htmlFor="gita-chapter-select">
                <span>Chapter</span>
                <select
                  id="gita-chapter-select"
                  className="gita-select"
                  value={selectedChapter}
                  onChange={(event) => {
                    const nextChapter = Number(event.target.value);
                    const nextChapterData =
                      bhagavadGitaChapters.find((chapter) => chapter.chapter === nextChapter) ?? bhagavadGitaChapters[0];
                    const nextVerse = nextChapterData.verses[0];

                    if (nextVerse) {
                      syncSelectedVerse(nextVerse);
                    }
                  }}
                >
                  {bhagavadGitaChapters.map((chapter) => (
                    <option key={chapter.chapter} value={chapter.chapter}>
                      {`Chapter ${chapter.chapter} (${chapter.verseCount} verses)`}
                    </option>
                  ))}
                </select>
              </label>

              <label className="gita-select-field" htmlFor="gita-verse-select">
                <span>Sloka</span>
                <select
                  id="gita-verse-select"
                  className="gita-select"
                  value={selectedVerseNumber}
                  onChange={(event) => {
                    const nextVerseNumber = Number(event.target.value);
                    const nextVerse = activeChapter.verses.find((verse) => verse.verse === nextVerseNumber);

                    if (nextVerse) {
                      syncSelectedVerse(nextVerse);
                    }
                  }}
                >
                  {activeChapter.verses.map((verse) => (
                    <option key={verse.id} value={verse.verse}>
                      {`Sloka ${verse.verse}`}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

        </div>

        <aside className="gita-result-panel quote-strip">
          <div className="gita-live-frame">
            <Image
              className="gita-result-image"
              src={guidedVisual.src}
              alt={guidedVisual.alt}
              width={1200}
              height={1400}
            />
            <div className="gita-live-overlay">
              <div className="gita-result-badge">
                <span className="pill">{activeMode.label}</span>
                <p>{activeMode.summary}</p>
              </div>

              {selectedVerse ? (
                <div className="gita-verse-card">
                  <div className="gita-verse-meta">
                    <span className="card-tag">Guided Verse</span>
                    <strong>{selectedVerse.reference}</strong>
                  </div>
                  <p className="gita-verse-original">{selectedVerse.originalVerse}</p>
                  <p className="gita-verse-transliteration">{selectedVerse.transliteration}</p>
                  <p className="gita-verse-translation">{selectedVerse.translation}</p>
                  <p className="gita-verse-commentary">{selectedVerse.commentary}</p>
                </div>
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
