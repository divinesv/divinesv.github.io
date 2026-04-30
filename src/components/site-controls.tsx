'use client';

import { useEffect, useRef, useState } from 'react';

const storageKey = 'divinesv-theme';
const chantStorageKey = 'divinesv-om-chant-enabled';
const chantVolumeStorageKey = 'divinesv-om-chant-volume';
const languageStorageKey = 'divinesv-language';
const omChantVideoId = 'SBiwLibZqfw';
const defaultChantVolume = 25;
const minChantVolume = 0;
const maxChantVolume = 100;

type ThemeMode = 'light' | 'dark';
type SiteLanguage = 'en' | 'hi' | 'te';

type YouTubePlayer = {
  destroy: () => void;
  pauseVideo: () => void;
  playVideo: () => void;
  setVolume: (volume: number) => void;
};

type YouTubePlayerEvent = {
  target: YouTubePlayer;
};

type YouTubeNamespace = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string;
      playerVars?: Record<string, number | string>;
      events?: {
        onReady?: (event: YouTubePlayerEvent) => void;
      };
    },
  ) => YouTubePlayer;
};

let youtubeApiPromise: Promise<YouTubeNamespace> | null = null;

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            autoDisplay?: boolean;
          },
          elementId: string,
        ) => unknown;
      };
    };
    divinesvTranslateInit?: () => void;
    onYouTubeIframeAPIReady?: () => void;
    YT?: YouTubeNamespace;
  }
}

function clampChantVolume(value: number) {
  return Math.min(maxChantVolume, Math.max(minChantVolume, Math.round(value)));
}

function loadYouTubeApi() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('YouTube API can only load in the browser.'));
  }

  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  if (youtubeApiPromise) {
    return youtubeApiPromise;
  }

  youtubeApiPromise = new Promise<YouTubeNamespace>((resolve, reject) => {
    const existingReadyHandler = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      existingReadyHandler?.();

      if (window.YT?.Player) {
        resolve(window.YT);
      }
    };

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-divinesv-youtube="true"]');
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    script.dataset.divinesvYoutube = 'true';
    script.addEventListener('error', () => reject(new Error('Failed to load the YouTube iframe API.')));
    document.head.appendChild(script);
  });

  return youtubeApiPromise;
}

function setGoogleTranslateCookie(language: SiteLanguage) {
  const cookieValue = `/en/${language}`;
  document.cookie = `googtrans=${cookieValue}; path=/`;
  document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
}

function applyPageLanguage(language: SiteLanguage) {
  setGoogleTranslateCookie(language);

  const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
  if (!combo) {
    window.location.reload();
    return;
  }

  combo.value = language;
  combo.dispatchEvent(new Event('change'));
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
}

function suppressTranslateBanner() {
  document.body.style.top = '0px';

  const translateFrames = document.querySelectorAll<HTMLElement>(
    'iframe.goog-te-banner-frame, iframe.skiptranslate, .goog-te-banner-frame.skiptranslate, body > .skiptranslate',
  );

  translateFrames.forEach((element) => {
    element.style.setProperty('display', 'none', 'important');
    element.style.setProperty('visibility', 'hidden', 'important');
  });
}

export function SiteControls() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [chantEnabled, setChantEnabled] = useState(false);
  const [chantVolume, setChantVolume] = useState(defaultChantVolume);
  const [language, setLanguage] = useState<SiteLanguage>('en');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [chantPlayerReady, setChantPlayerReady] = useState(false);
  const [translateReady, setTranslateReady] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const chantPlayerRef = useRef<YouTubePlayer | null>(null);
  const chantPlayerHostRef = useRef<HTMLDivElement | null>(null);
  const scrollAnimationRef = useRef<number | null>(null);
  const languageMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const storedChantEnabled = window.localStorage.getItem(chantStorageKey) === 'true';
    const storedChantVolume = Number.parseInt(window.localStorage.getItem(chantVolumeStorageKey) ?? '', 10);
    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    const resolvedTheme =
      storedTheme === 'light' || storedTheme === 'dark'
        ? storedTheme
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
    const resolvedChantVolume = Number.isFinite(storedChantVolume) ? clampChantVolume(storedChantVolume) : defaultChantVolume;
    const resolvedLanguage: SiteLanguage =
      storedLanguage === 'hi' || storedLanguage === 'te' || storedLanguage === 'en' ? storedLanguage : 'en';

    setTheme(resolvedTheme);
    setChantEnabled(storedChantEnabled);
    setChantVolume(resolvedChantVolume);
    setLanguage(resolvedLanguage);
    applyTheme(resolvedTheme);
    setGoogleTranslateCookie(resolvedLanguage);
    suppressTranslateBanner();
    window.localStorage.setItem(chantVolumeStorageKey, String(resolvedChantVolume));

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

  useEffect(() => {
    let cancelled = false;

    const initializeChantPlayer = async () => {
      try {
        const YT = await loadYouTubeApi();

        if (cancelled || !chantPlayerHostRef.current || chantPlayerRef.current) {
          return;
        }

        chantPlayerRef.current = new YT.Player(chantPlayerHostRef.current, {
          videoId: omChantVideoId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            modestbranding: 1,
            playlist: omChantVideoId,
            playsinline: 1,
            rel: 0,
          },
          events: {
            onReady: (event) => {
              event.target.setVolume(chantVolume);
              setChantPlayerReady(true);
            },
          },
        });
      } catch {
        setChantPlayerReady(false);
      }
    };

    initializeChantPlayer();

    return () => {
      cancelled = true;

      if (chantPlayerRef.current) {
        chantPlayerRef.current.destroy();
        chantPlayerRef.current = null;
      }

      setChantPlayerReady(false);
    };
  }, []);

  useEffect(() => {
    if (!chantPlayerReady || !chantPlayerRef.current) {
      return;
    }

    chantPlayerRef.current.setVolume(chantVolume);

    if (chantEnabled) {
      chantPlayerRef.current.playVideo();
      return;
    }

    chantPlayerRef.current.pauseVideo();
  }, [chantEnabled, chantPlayerReady, chantVolume]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      suppressTranslateBanner();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class', 'style'],
    });

    suppressTranslateBanner();

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const initializeTranslate = () => {
      if (!window.google?.translate?.TranslateElement) {
        return;
      }

      const container = document.getElementById('google_translate_element');
      if (!container || container.childElementCount > 0) {
        setTranslateReady(true);
        return;
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,te',
          autoDisplay: false,
        },
        'google_translate_element',
      );

      setTranslateReady(true);
      suppressTranslateBanner();
    };

    if (window.google?.translate?.TranslateElement) {
      initializeTranslate();
      return;
    }

    window.divinesvTranslateInit = initializeTranslate;

    if (!document.querySelector('script[data-divinesv-translate="true"]')) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=divinesvTranslateInit';
      script.async = true;
      script.dataset.divinesvTranslate = 'true';
      document.head.appendChild(script);
    }

    return () => {
      window.divinesvTranslateInit = undefined;
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
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

  function changeLanguage(nextLanguage: SiteLanguage) {
    setLanguage(nextLanguage);
    window.localStorage.setItem(languageStorageKey, nextLanguage);
    setLanguageMenuOpen(false);
    applyPageLanguage(nextLanguage);
    window.setTimeout(suppressTranslateBanner, 0);
    window.setTimeout(suppressTranslateBanner, 250);
    window.setTimeout(suppressTranslateBanner, 1000);
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

  const chantIcon =
    !chantEnabled || chantVolume === 0 ? 'fa-volume-xmark' : chantVolume < 50 ? 'fa-volume-low' : 'fa-volume-high';

  return (
    <div className="site-controls" aria-label="Site controls">
      <div id="google_translate_element" className="site-translate-anchor" aria-hidden="true" />

      <div className="ambient-chant-frame" aria-hidden="true">
        <div ref={chantPlayerHostRef} className="ambient-chant-player" />
      </div>

      <div className="language-control-shell" ref={languageMenuRef}>
        <button
          aria-label="Choose page language"
          aria-expanded={languageMenuOpen}
          title="Choose page language"
          className="floating-control floating-control-left floating-control-left-tertiary"
          type="button"
          onClick={() => setLanguageMenuOpen((open) => !open)}
        >
          <i className="fa-solid fa-language control-icon" aria-hidden="true" />
          <span className="sr-only">Choose page language</span>
        </button>

        <div className={`language-control-panel${languageMenuOpen ? ' open' : ''}`} aria-label="Language options">
          <button
            className={`language-control-option${language === 'en' ? ' active' : ''}`}
            type="button"
            onClick={() => changeLanguage('en')}
          >
            English
          </button>
          <button
            className={`language-control-option${language === 'hi' ? ' active' : ''}`}
            type="button"
            onClick={() => changeLanguage('hi')}
            disabled={!translateReady}
          >
            Hindi
          </button>
          <button
            className={`language-control-option${language === 'te' ? ' active' : ''}`}
            type="button"
            onClick={() => changeLanguage('te')}
            disabled={!translateReady}
          >
            Telugu
          </button>
        </div>
      </div>

      <div className="chant-control-shell">
        <button
          aria-label={chantEnabled ? 'Mute Om chanting' : 'Play Om chanting'}
          title={chantEnabled ? `Mute Om chanting (${chantVolume}% volume)` : 'Play Om chanting'}
          className="floating-control floating-control-left floating-control-left-secondary"
          type="button"
          onClick={toggleChant}
        >
          <i className={`fa-solid ${chantIcon} control-icon`} aria-hidden="true" />
          <span className="sr-only">{chantEnabled ? 'Mute Om chanting' : 'Play Om chanting'}</span>
        </button>
      </div>

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
