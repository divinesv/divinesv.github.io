'use client';

import { useMemo, useState } from 'react';

import type { SlokaEntry } from '@/lib/slokas';
import { devanagariToTelugu } from '@/lib/devanagari-to-telugu';

type SlokaEntryCardProps = {
  item: SlokaEntry;
};

export function SlokaEntryCard({ item }: SlokaEntryCardProps) {
  const [scriptMode, setScriptMode] = useState<'sanskrit' | 'telugu'>('telugu');

  const displayedSloka = useMemo(
    () => (scriptMode === 'telugu' ? item.devanagari.map(devanagariToTelugu) : item.devanagari),
    [item.devanagari, scriptMode],
  );

  return (
    <article className="surface-card sloka-entry-card">
      <span className="eyebrow">{item.source}</span>
      <h3 className="card-title">{item.title}</h3>
      <p>{item.summary}</p>

      <div className="sloka-reading-stack">
        <section className="sloka-reading-section">
          <div className="sloka-reading-header">
            <span className="stotra-language-label">Full Shloka</span>
            <div className="sloka-script-toggle" role="group" aria-label={`Script toggle for ${item.title}`}>
              <button
                aria-pressed={scriptMode === 'sanskrit'}
                className={`sloka-script-button${scriptMode === 'sanskrit' ? ' active' : ''}`}
                type="button"
                onClick={() => setScriptMode('sanskrit')}
              >
                संस्कृत
              </button>
              <button
                aria-pressed={scriptMode === 'telugu'}
                className={`sloka-script-button${scriptMode === 'telugu' ? ' active' : ''}`}
                type="button"
                onClick={() => setScriptMode('telugu')}
              >
                తెలుగు
              </button>
            </div>
          </div>
          <div className="sloka-line-scroll">
            {displayedSloka.map((line) => (
              <p
                key={`${scriptMode}-${line}`}
                className={`sloka-reading-line ${scriptMode === 'telugu' ? 'sloka-reading-line-telugu' : 'sloka-reading-line-devanagari'}`}
              >
                {line}
              </p>
            ))}
          </div>
        </section>

        <section className="sloka-reading-section">
          <span className="stotra-language-label">Transliteration</span>
          <div className="sloka-line-scroll">
            {item.transliteration.map((line) => (
              <p key={line} className="sloka-reading-line sloka-reading-line-roman">
                {line}
              </p>
            ))}
          </div>
        </section>

        <section className="sloka-reading-section">
          <span className="stotra-language-label">Breakdown and Meaning</span>
          <ul className="sloka-meaning-list">
            {item.meaningPoints.map((point) => (
              <li key={point.phrase} className="sloka-meaning-list-item">
                <strong>
                  {point.phrase}
                  {point.sanskrit ? ` (${point.sanskrit})` : ''}
                </strong>
                : {point.meaning}
              </li>
            ))}
          </ul>
        </section>

        <section className="sloka-reading-section">
          <span className="stotra-language-label">Reflection</span>
          <p className="page-copy">{item.reflection}</p>
        </section>
      </div>
    </article>
  );
}
