import type { Metadata } from 'next';
import Image from 'next/image';

import { FestivalDayHighlight } from '@/components/festival-day-highlight';
import { PageHero } from '@/components/page-hero';
import { festivalItems } from '@/lib/site-data';

function getIndiaDateISO(now = new Date()) {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const parts = formatter.formatToParts(now);
  const year = parts.find((part) => part.type === 'year')?.value;
  const month = parts.find((part) => part.type === 'month')?.value;
  const day = parts.find((part) => part.type === 'day')?.value;

  return `${year}-${month}-${day}`;
}

export const metadata: Metadata = {
  title: 'Festivals',
  description:
    'A starter page for Hindu festivals on DivineSV, covering vrata, utsava, observance guides, and future calendar-based devotional content.',
};

export default function FestivalsPage() {
  const indiaTodayISO = getIndiaDateISO();

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
        imageSrc="/images/Temple6.jpg"
        imageAlt="Temple festival image for the festivals page"
        accentTopImageSrc="/images/Krishna7.jpg"
        accentTopImageAlt="Krishna accent image for the festivals page"
        accentBottomImageSrc="/images/Devi2.jpg"
        accentBottomImageAlt="Devi accent image for the festivals page"
      />

      <FestivalDayHighlight />

      <section className="section-spacing">
        <span className="eyebrow">2026 Calendar</span>
        <h2 className="section-title">Festival dates at a glance</h2>
        <div className="festival-date-grid">
          {festivalItems.map((festival) => {
            const isToday = festival.dateISO === indiaTodayISO;

            return (
              <article
                key={festival.title}
                className={`surface-card festival-date-card${isToday ? ' festival-date-card-today' : ''}`}
              >
                <div className="festival-date-row">
                  <div className="festival-date-thumb">
                    <Image className="festival-date-thumb-image" src={festival.imageSrc} alt={festival.imageAlt} width={160} height={160} />
                  </div>
                  <h3 className="card-title festival-date-title">{festival.title}</h3>
                  <span className="festival-date-pill">{festival.dateLabel}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
