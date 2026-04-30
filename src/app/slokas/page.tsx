import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/page-hero';
import { SlokaEntryCard } from '@/components/sloka-entry-card';
import { slokaCategories } from '@/lib/slokas';

export const metadata: Metadata = {
  title: 'Slokas',
  description:
    'Explore Sanskrit slokas on DivineSV with transliteration, English meanings, and short reflections for daily study.',
};

export default function SlokasPage() {
  const totalSlokas = slokaCategories.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Sloka | Subhashita | Sanskrit Wisdom"
        title="Sanskrit slokas with English meaning"
        description="A simple reading space for short Sanskrit slokas with transliteration, phrase-by-phrase meaning, and reflection."
        asideTitle="Currently Available"
        asideItems={[
          `${totalSlokas} slokas currently published`,
          ...slokaCategories.map((category) => category.title),
        ]}
        imageSrc="/images/Ashtavakra.jpg"
        imageAlt="Ashtavakra image for the slokas page"
        accentTopImageSrc="/images/Gita-krishna.jpg"
        accentTopImageAlt="Krishna accent image for the slokas page"
        accentBottomImageSrc="/images/Temple5.jpg"
        accentBottomImageAlt="Temple accent image for the slokas page"
      >
        <div className="link-row">
          <Link className="primary-link" href="/stotras">
            Open Stotras
          </Link>
          <Link className="secondary-link" href="/library">
            Open Library
          </Link>
        </div>
      </PageHero>

      <section className="section-spacing">
        <div className="section-heading">
          <span className="eyebrow">Published Slokas</span>
          <h2 className="section-title">Read with clarity and calm</h2>
        </div>

        <div className="content-grid sloka-card-grid">
          {slokaCategories.flatMap((category) =>
            category.items.map((item) => <SlokaEntryCard key={item.slug} item={item} />),
          )}
        </div>
      </section>
    </>
  );
}
