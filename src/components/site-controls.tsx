'use client';

import { useEffect, useRef, useState } from 'react';

const storageKey = 'divinesv-theme';
const chantStorageKey = 'divinesv-om-chant-enabled';
const omChantVideoId = 'SBiwLibZqfw';

type ThemeMode = 'light' | 'dark';

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
}

export function SiteControls() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [chantEnabled, setChantEnabled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollAnimationRef = useRef<number | null>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const storedChantEnabled = window.localStorage.getItem(chantStorageKey) === 'true';
    const resolvedTheme =
      storedTheme === 'light' || storedTheme === 'dark'
        ? storedTheme
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';

    setTheme(resolvedTheme);
    setChantEnabled(storedChantEnabled);
    applyTheme(resolvedTheme);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (scrollAnimationRef.current) {
        window.cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, []);

  function toggleTheme() {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  }

  function toggleChant() {
    const nextEnabled = !chantEnabled;
    setChantEnabled(nextEnabled);
    window.localStorage.setItem(chantStorageKey, String(nextEnabled));
  }

  function scrollToTopSlowly() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo({ top: 0 });
      return;
    }

    if (scrollAnimationRef.current) {
      window.cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }

    const startY = window.scrollY;
    if (startY <= 0) {
      return;
    }

    const duration = Math.min(1800, Math.max(1000, startY * 0.6));
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      window.scrollTo({ top: Math.round(startY * (1 - eased)) });

      if (progress < 1) {
        scrollAnimationRef.current = window.requestAnimationFrame(step);
        return;
      }

      scrollAnimationRef.current = null;
    };

    scrollAnimationRef.current = window.requestAnimationFrame(step);
  }

  return (
    <div className="site-controls" aria-label="Site controls">
      {chantEnabled ? (
        <div className="ambient-chant-frame" aria-hidden="true">
          <iframe
            src={`https://www.youtube.com/embed/${omChantVideoId}?autoplay=1&loop=1&playlist=${omChantVideoId}`}
            title="Om chanting audio"
            allow="autoplay; encrypted-media"
          />
        </div>
      ) : null}

      <button
        aria-label={chantEnabled ? 'Mute Om chanting' : 'Play Om chanting'}
        title={chantEnabled ? 'Mute Om chanting' : 'Play Om chanting'}
        className="floating-control floating-control-left floating-control-left-secondary"
        type="button"
        onClick={toggleChant}
      >
        <i className={`fa-solid ${chantEnabled ? 'fa-volume-high' : 'fa-volume-xmark'} control-icon`} aria-hidden="true" />
        <span className="sr-only">{chantEnabled ? 'Mute Om chanting' : 'Play Om chanting'}</span>
      </button>

      <button
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        className="floating-control floating-control-left"
        type="button"
        onClick={toggleTheme}
      >
        <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} control-icon`} aria-hidden="true" />
        <span className="sr-only">{theme === 'dark' ? 'Light theme' : 'Dark theme'}</span>
      </button>

      <button
        aria-label="Scroll to top"
        title="Scroll to top"
        className={`floating-control floating-control-right${showScrollTop ? ' visible' : ''}`}
        type="button"
        onClick={scrollToTopSlowly}
      >
        <i className="fa-solid fa-arrow-up control-icon" aria-hidden="true" />
        <span className="sr-only">Top</span>
      </button>
    </div>
  );
}
