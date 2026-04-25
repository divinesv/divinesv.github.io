import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { DraggableFloatingImage } from '@/components/draggable-floating-image';
import { HomeVisualExperience } from '@/components/home-visual-experience';
import { deityCards } from '@/lib/site-data';
import { getPdfLibrary } from '@/lib/pdf-library';
import { getSiteSettings } from '@/lib/site-settings';

export const metadata: Metadata = {
  title: 'A Home for Bhakti and Wisdom',
  description:
    'A prayerful home for darshan, stotras, sacred stories, and spiritual reflection across the many luminous streams of Sanatana Dharma.',
};

export default async function HomePage() {
  const siteSettings = getSiteSettings();
  const library = await getPdfLibrary();
  const featuredPdf = library.find((item) => item.slug === siteSettings.featuredPdfSlug) ?? library[0] ?? null;

  return (
    <>
      <HomeVisualExperience />

      <section className="section-spacing">
        <span className="eyebrow">Sacred Sections</span>
        <h2 className="section-title">Deity Pathways</h2>

        <div className="content-grid">
          {deityCards.map((deity) => (
            <Link key={deity.href} className="surface-card deity-path-card" href={deity.href}>
              <div className="deity-path-card-visual">
                <Image className="deity-path-card-image" src={deity.imageSrc} alt={deity.imageAlt} width={1200} height={900} />
              </div>
              <h3 className="card-title deity-path-card-title">{deity.title}</h3>
              <p>{deity.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="dual-grid section-spacing floating-section-shell home-library-feature-shell">
        <DraggableFloatingImage
          className="section-float-image-card section-float-image-card-top"
          imageClassName="section-float-image"
          src="/images/venkateswara.jpg"
          alt="Venkateswara devotional accent"
          width={420}
          height={420}
        />
        <DraggableFloatingImage
          className="section-float-image-card section-float-image-card-bottom"
          imageClassName="section-float-image"
          src="/images/hanuman.jpg"
          alt="Hanuman devotional accent"
          width={420}
          height={420}
        />
        <div className="devotional-panel">
          <span className="eyebrow">Library Feature</span>
          <h2 className="section-title">{siteSettings.homeAnnouncementTitle}</h2>
          <p className="page-copy">{siteSettings.homeAnnouncementBody}</p>

          <div className="link-row">
            <Link className="primary-link" href="/library">
              Open Library
            </Link>
            {featuredPdf ? (
              <Link className="secondary-link" href={`/library/${featuredPdf.slug}`}>
                Featured: {featuredPdf.title}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
