'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

const narasimhaJayantiDateISO = '2026-04-30';

export function FestivalDayHighlight() {
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    setIsToday(getIndiaDateISO() === narasimhaJayantiDateISO);
  }, []);

  if (!isToday) {
    return null;
  }

  return (
    <section className="section-spacing">
      <div className="festival-day-highlight-header">
        <span className="eyebrow">Today</span>
      </div>
      <article className="surface-card festival-day-highlight">
        <div className="festival-day-highlight-layout">
          <div className="festival-date-thumb festival-day-highlight-thumb">
            <Image className="festival-date-thumb-image" src="/images/Narsimha.jpg" alt="Lakshmi Narasimha Jayanti" width={160} height={160} />
          </div>
          <div className="festival-day-highlight-copy">
            <div className="festival-day-highlight-meta">
              <h2 className="card-title festival-date-title">Lakshmi Narasimha Jayanti</h2>
              <span className="festival-date-pill">April 30, 2026</span>
            </div>
            <div className="link-row">
              <Link className="primary-link" href="/narasimha">
                Narasimha
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
