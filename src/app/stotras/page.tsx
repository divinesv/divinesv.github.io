import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PageHero } from '@/components/page-hero';
import { stotraItems } from '@/lib/site-data';
import { stotraSummaries } from '@/lib/stotras';

export const metadata: Metadata = {
  title: 'Stotras',
  description:
    'A starter page for stotras and mantras on DivineSV, ready for transliteration, meaning, Telugu support, and devotional study.',
};

export default function StotrasPage() {
  return (
    <>
      <PageHero
        className="page-hero-shell-stotras"
        eyebrow="Stotra | Sloka | ప్రార్థన"
        title="A home for sacred recitation"
        description="A devotional reading space for stotras, slokas, and mantra texts with Telugu support, transliteration, and meaning."
        asideTitle="Starter Library"
        asideItems={stotraItems}
        asideClassName="page-hero-aside-stotras"
        accentTopImageSrc="/images/krishna.jpg"
        accentTopImageAlt="Krishna accent for the stotras page"
        accentBottomImageSrc="/images/hanuman.jpg"
        accentBottomImageAlt="Hanuman accent for the stotras page"
      />

      <section className="section-spacing">
        <div className="content-grid">
          {stotraSummaries.map((item) => {
            const href =
              item.slug === 'vishnu-sahasranamam'
                ? '/library/vishnu-sahashranamas'
                : item.slug === 'lalita-sahasranama'
                  ? '/library/lalitha-sahasranama-stotram'
                  : item.slug === 'hanuman-chalisa'
                    ? '/library/srihanumanchalisa'
                    : `/stotras/${item.slug}`;

            return (
              <Link key={item.slug} className="surface-card" href={href}>
                <div className="stotra-card-visual">
                  <Image className="stotra-card-image" src={item.imageSrc} alt={item.title} width={1200} height={900} />
                </div>
                <h2 className="card-title">{item.title}</h2>
                <p>{item.body}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
