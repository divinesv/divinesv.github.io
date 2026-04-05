'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { devotionalImagePools, pickImage } from '@/lib/devotional-images';
import type { PdfDocument } from '@/lib/site-types';
import type { MediaTrack, MediaVideo, MusicEmbed } from '@/lib/media';

type MediaHubProps = {
  documents: PdfDocument[];
  gitaVerseCount: number;
  musicEmbeds: MusicEmbed[];
  tracks: MediaTrack[];
  videos: MediaVideo[];
};

type MediaTab = 'documents' | 'music' | 'videos';
const gitaFeatureImageStorageKey = 'divinesv-library-gita-feature-image';

export function MediaHub({ documents, gitaVerseCount, musicEmbeds, tracks, videos }: MediaHubProps) {
  const [tab, setTab] = useState<MediaTab>('documents');
  const [gitaFeatureImageIndex, setGitaFeatureImageIndex] = useState(0);
  const gitaFeatureImage = pickImage(devotionalImagePools.gita, gitaFeatureImageIndex);

  useEffect(() => {
    const raw = window.sessionStorage.getItem(gitaFeatureImageStorageKey);
    const lastIndex = raw ? Number.parseInt(raw, 10) : -1;
    const nextIndex = Number.isFinite(lastIndex) ? lastIndex + 1 : 0;
    const normalizedIndex = nextIndex % devotionalImagePools.gita.length;

    window.sessionStorage.setItem(gitaFeatureImageStorageKey, String(normalizedIndex));
    setGitaFeatureImageIndex(normalizedIndex);
  }, []);

  return (
    <section className="section-spacing">
      <div className="admin-tabs media-tabs" role="tablist" aria-label="Library and media categories">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'documents'}
          className={`admin-tab${tab === 'documents' ? ' active' : ''}`}
          onClick={() => setTab('documents')}
        >
          Documents
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'music'}
          className={`admin-tab${tab === 'music' ? ' active' : ''}`}
          onClick={() => setTab('music')}
        >
          Music
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'videos'}
          className={`admin-tab${tab === 'videos' ? ' active' : ''}`}
          onClick={() => setTab('videos')}
        >
          Videos
        </button>
      </div>

      {tab === 'documents' ? (
        <div className="admin-tab-panel media-panel">
          <article className="library-feature-card">
            <div className="library-feature-copy">
              <span className="card-tag">Bhagavad Gita</span>
              <h2 className="card-title">A living sloka companion built from your earlier project</h2>
              <p className="page-copy">
                Explore a visually richer Bhagavad Gita experience with Krishna, Arjuna, and Vishwaroopam imagery, mood-led
                verse guidance, transliteration, translation, and commentary.
              </p>
              <div className="library-feature-pills">
                <span className="footer-blessing">18 chapters</span>
                <span className="footer-blessing">{gitaVerseCount} verse entries</span>
                <span className="footer-blessing">Live reflection experience</span>
              </div>
              <div className="link-row">
                <Link className="primary-link" href="/library/bhagavad-gita">
                  Open Bhagavad Gita
                </Link>
              </div>
            </div>

            <div className="library-feature-media">
              <div className="library-feature-visual library-feature-visual-large">
                <Image
                  className="library-feature-image"
                  src={gitaFeatureImage.src}
                  alt={gitaFeatureImage.alt}
                  width={1100}
                  height={900}
                />
              </div>
            </div>
          </article>

          <div className="content-grid card-grid-relaxed">
            {documents.map((pdf) => (
              <article key={pdf.slug} className="surface-card library-document-card">
                <div className="library-document-intro">
                  <div className="library-document-thumb">
                    {pdf.coverImage ? (
                      <Image className="library-document-thumb-image" src={pdf.coverImage} alt={pdf.title} width={240} height={240} />
                    ) : null}
                  </div>
                  <div className="library-document-copy">
                    <h3 className="card-title library-document-title">{pdf.title}</h3>
                    {pdf.subtitle ? <p className="card-subtitle library-document-subtitle">{pdf.subtitle}</p> : null}
                  </div>
                </div>
                <div className="link-row">
                  <Link className="primary-link" href={`/library/${pdf.slug}`}>
                    Read Now
                  </Link>
                  <a className="secondary-link" href={pdf.url} target="_blank" rel="noreferrer">
                    Download
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : tab === 'music' ? (
        <div className="admin-tab-panel media-panel">
          <div className="content-grid">
            {tracks.map((track) => (
              <article key={track.fileName} className="surface-card media-card media-track-card">
                <div className="media-card-visual">
                  <Image className="media-card-image" src={track.image.src} alt={track.image.alt} width={1200} height={900} />
                  <div className="media-card-visual-title">
                    <h2 className="card-title media-card-title">{track.title}</h2>
                  </div>
                </div>
                <audio className="media-audio-player" controls preload="none" src={track.url}>
                  Your browser does not support the audio element.
                </audio>
              </article>
            ))}

            {musicEmbeds.map((embed) => (
              <article key={embed.id} className="surface-card media-card media-embed-card">
                <h2 className="card-title media-card-title">{embed.title}</h2>
                <div className="media-video-frame-shell">
                  <div className="media-video-frame">
                    <iframe
                      src={embed.embedUrl}
                      title={embed.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="admin-tab-panel media-panel">
          {videos.map((video) => (
            <article key={video.id} className="library-feature-card media-video-card">
              <div className="library-feature-copy">
                <h2 className="card-title">{video.title}</h2>
              </div>

              <div className="media-video-frame-shell">
                <div className="media-video-frame">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
