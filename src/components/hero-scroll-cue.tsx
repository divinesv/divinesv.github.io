'use client';

import type { MouseEvent } from 'react';

import { ChevronDownIcon } from '@/components/icons';

export function HeroScrollCue() {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const heroSection = event.currentTarget.closest('section');
    const target = heroSection?.nextElementSibling as HTMLElement | null;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <a className="hero-scroll-cue" href="#" onClick={handleClick} aria-label="Scroll to explore">
      <span className="hero-scroll-cue-line" aria-hidden="true" />
      <ChevronDownIcon className="hero-scroll-cue-chevron" />
    </a>
  );
}
