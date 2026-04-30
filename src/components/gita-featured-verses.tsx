'use client';

import { useEffect, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';

import type { BhagavadGitaVerse } from '@/lib/bhagavad-gita';

type GitaFeaturedVersesProps = {
  verses: BhagavadGitaVerse[];
};

const variants = [
  {
    title: 'Anchor verses to revisit',
    imageOrder: [
      '/images/Vishwaroopam.jpg',
      '/images/Gita-krishna.jpg',
      '/images/Gita-arjuna.jpg',
      '/images/Rama3.jpeg',
      '/images/Venkateswara.jpg',
      '/images/Rama.jpg',
    ],
    verseOrder: [0, 1, 2, 3, 4, 5],
  },
  {
    title: 'Verses that return differently',
    imageOrder: [
      '/images/Krishna8.jpg',
      '/images/Vishwaroopam.jpg',
      '/images/Gita-arjuna.jpg',
      '/images/Nature.jpg',
      '/images/Vishnu.jpg',
      '/images/Gita-krishna.jpg',
    ],
    verseOrder: [2, 0, 4, 1, 5, 3],
  },
  {
    title: 'Slokas to come back to',
    imageOrder: [
      '/images/Rama3.jpeg',
      '/images/Vishwaroopam.jpg',
      '/images/Venkateswara.jpg',
      '/images/Krishna8.jpg',
      '/images/Rama.jpg',
      '/images/Gita-arjuna.jpg',
    ],
    verseOrder: [1, 4, 0, 5, 3, 2],
  },
];

function resolveVariantIndex() {
  const today = new Date();
  const daySeed = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const hash = daySeed.split('').reduce((total, character) => (total * 31 + character.charCodeAt(0)) >>> 0, 11);
  return hash % variants.length;
}

export function GitaFeaturedVerses({ verses }: GitaFeaturedVersesProps) {
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    setVariantIndex(resolveVariantIndex());
  }, []);

  const variant = variants[variantIndex] ?? variants[0];

  const orderedVerses = useMemo(
    () => variant.verseOrder.map((index) => verses[index]).filter(Boolean),
    [variant.verseOrder, verses],
  );

  return (
    <section className="section-spacing">
      <span className="eyebrow">Featured Slokas</span>
      <h2 className="section-title">{variant.title}</h2>
      <div className="gita-feature-grid">
        {orderedVerses.map((verse, index) => (
          <article
            key={verse.id}
            className="gita-feature-verse"
            style={{ '--gita-feature-image': `url(${variant.imageOrder[index % variant.imageOrder.length]})` } as CSSProperties}
          >
            <div className="gita-feature-content">
              <span className="card-tag">{verse.reference}</span>
              <p className="gita-feature-translation">{verse.translation}</p>
              <p className="gita-feature-commentary">{verse.commentary.slice(0, 210)}...</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
