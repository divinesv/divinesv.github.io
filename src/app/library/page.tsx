import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { DraggableFloatingImage } from '@/components/draggable-floating-image';
import { HeroScrollCue } from '@/components/hero-scroll-cue';
import { MediaHub } from '@/components/media-hub';
import { bhagavadGitaStats } from '@/lib/bhagavad-gita';
import { devotionalImagePools, pickImage } from '@/lib/devotional-images';
import { getMusicTracks, mediaVideos, musicEmbeds } from '@/lib/media';
import { getPdfLibrary } from '@/lib/pdf-library';

export const metadata: Metadata = {
  title: 'Library and Media',
  description:
    'Browse DivineSV documents, devotional music, spiritual videos, and scripture experiences from one shared reading and listening space.',
};

export default async function LibraryPage() {
  const [library, tracks] = await Promise.all([getPdfLibrary(), getMusicTracks()]);
  const overviewImage = pickImage(devotionalImagePools.temples, 1);

  return (
    <>
      <section className="section-spacing">
        <article className="library-feature-card library-overview-card page-hero-shell page-hero-shell-has-image home-hero-card">
          <div className="library-feature-copy page-hero-main home-hero-copy">
            <span className="eyebrow">Library and Media</span>
            <h1 className="page-title">Read, listen, and reflect in one sacred space</h1>
            <p className="page-copy">
              A single destination for slokas, stotras, devotional documents, scripture study, music, and spiritual videos.
            </p>
            <div className="library-feature-pills">
              <span className="footer-blessing">{library.length} PDFs</span>
              <span className="footer-blessing">{tracks.length} audio tracks</span>
              <span className="footer-blessing">{mediaVideos.length} videos</span>
              <span className="footer-blessing">{bhagavadGitaStats.verseCount} Gita verses</span>
            </div>
            <div className="link-row">
              <Link className="primary-link" href="/slokas">
                Open Slokas
              </Link>
              <Link className="secondary-link" href="/stotras">
                Open Stotras
              </Link>
            </div>
          </div>

          <div className="library-feature-media page-hero-aside home-hero-media">
            <div className="library-feature-visual library-feature-visual-large page-hero-image-frame home-hero-visual">
              <Image className="library-feature-image page-hero-image home-hero-image" src={overviewImage.src} alt={overviewImage.alt} width={1100} height={900} />
            </div>
            <DraggableFloatingImage
              className="page-hero-float page-hero-float-top"
              imageClassName="page-hero-float-image"
              src="/images/Temple5.jpg"
              alt="Temple accent for the library page"
              width={420}
              height={520}
            />
            <DraggableFloatingImage
              className="page-hero-float page-hero-float-bottom"
              imageClassName="page-hero-float-image"
              src="/images/gita-krishna.jpg"
              alt="Krishna accent for the library page"
              width={420}
              height={520}
            />
          </div>
        </article>

        <HeroScrollCue />
      </section>

      <MediaHub
        documents={library}
        gitaVerseCount={bhagavadGitaStats.verseCount}
        musicEmbeds={musicEmbeds}
        tracks={tracks}
        videos={mediaVideos}
      />
    </>
  );
}
