import type { Metadata } from 'next';
import Image from 'next/image';

import { PageHero } from '@/components/page-hero';
import { festivalItems } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Festivals',
  description:
    'A starter page for Hindu festivals on DivineSV, covering vrata, utsava, observance guides, and future calendar-based devotional content.',
};

export default function FestivalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Utsava | Vrata | పండుగలు"
        title="Sacred time through festival and observance"
        description="A growing festival space for vrata, utsava, puja preparation, and devotional observance across the sacred rhythm of the year."
        asideTitle="2026 Festival Flow"
        asideItems={[
          `${festivalItems.length} festival highlights currently listed`,
          'Dates aligned to 2026 India observance timing',
          'Compact cards now include a visual cue for each celebration',
        ]}
      />

      <section className="section-spacing">
        <span className="eyebrow">2026 Calendar</span>
        <h2 className="section-title">Festival dates at a glance</h2>
        <div className="festival-date-grid">
          {festivalItems.map((festival) => (
            <article key={festival.title} className="surface-card festival-date-card">
              <div className="festival-date-row">
                <div className="festival-date-thumb">
                  <Image className="festival-date-thumb-image" src={festival.imageSrc} alt={festival.imageAlt} width={160} height={160} />
                </div>
                <h3 className="card-title festival-date-title">{festival.title}</h3>
                <span className="festival-date-pill">{festival.dateLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
