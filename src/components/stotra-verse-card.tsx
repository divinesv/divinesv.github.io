'use client';

import { useMemo, useState } from 'react';

import type { StotraEntry, StotraVerse } from '@/lib/stotras';
import { teluguToDevanagari } from '@/lib/telugu-to-devanagari';

type StotraVerseCardProps = {
  deity: StotraEntry['deity'];
  verse: StotraVerse;
};

export function StotraVerseCard({ deity, verse }: StotraVerseCardProps) {
  const [scriptMode, setScriptMode] = useState<'telugu' | 'sanskrit'>('telugu');

  const displayedLines = useMemo(
    () => (scriptMode === 'sanskrit' ? verse.telugu.map(teluguToDevanagari) : verse.telugu),
    [scriptMode, verse.telugu],
  );

  return (
    <article className="surface-card stotra-verse-card">
      <div className="stotra-verse-header">
        <span className="card-tag">{deity}</span>
        <strong>{verse.label}</strong>
      </div>

      <div className="stotra-language-grid">
        <div className="stotra-language-block">
          <div className="sloka-reading-header">
            <span className="stotra-language-label">{scriptMode === 'telugu' ? 'తెలుగు' : 'संस्कृत'}</span>
            <div className="sloka-script-toggle" role="group" aria-label={`Script toggle for ${verse.label}`}>
              <button
                aria-pressed={scriptMode === 'telugu'}
                className={`sloka-script-button${scriptMode === 'telugu' ? ' active' : ''}`}
                type="button"
                onClick={() => setScriptMode('telugu')}
              >
                తెలుగు
              </button>
              <button
                aria-pressed={scriptMode === 'sanskrit'}
                className={`sloka-script-button${scriptMode === 'sanskrit' ? ' active' : ''}`}
                type="button"
                onClick={() => setScriptMode('sanskrit')}
              >
                संस्कृत
              </button>
            </div>
          </div>
          {displayedLines.map((line) => (
            <p
              key={`${scriptMode}-${line}`}
              className={`stotra-line ${scriptMode === 'telugu' ? 'stotra-line-telugu' : 'stotra-line-devanagari'}`}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="stotra-language-block">
          <span className="stotra-language-label">Transliteration</span>
          {verse.transliteration.map((line) => (
            <p key={line} className="stotra-line">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="stotra-meaning-block">
        <span className="stotra-language-label">Meaning</span>
        <p className="page-copy">{verse.meaning}</p>
      </div>
    </article>
  );
}
