'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { DraggableFloatingImage } from '@/components/draggable-floating-image';
import { HeroScrollCue } from '@/components/hero-scroll-cue';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';

const sceneStorageKey = 'divinesv-home-scene';
const loadsPerScene = 2;
const AUTOPLAY_INTERVAL_MS = 6800;

type ShowcaseCard = {
  title: string;
  copy: string;
  image: string;
  className?: string;
  imagePosition?: string;
};

type HomeScene = {
  key: string;
  main: {
    image: string;
    alt: string;
    badge: string;
    copy: string;
    imagePosition?: string;
  };
  top: {
    image: string;
    alt: string;
  };
  bottom: {
    image: string;
    alt: string;
  };
  showcaseTitle: string;
  showcaseCopy: string;
  showcaseCards: ShowcaseCard[];
};

const homeImageSet = [
  {
    title: 'Kailash Presence',
    copy: 'A mountain-led devotional note for stillness, ascent, and sacred silence.',
    image: '/images/Kailash.jpg',
    alt: 'Kailash image for the DivineSV homepage',
    imagePosition: 'center 58%',
  },
  {
    title: 'Krishna Bhava',
    copy: 'A luminous Krishna image for sweetness, music, and intimate devotion.',
    image: '/images/Krishna2.jpg',
    alt: 'Krishna image for the DivineSV homepage',
    imagePosition: 'center 22%',
  },
  {
    title: 'Hanuman Veera Bhakti',
    copy: 'A strong Hanuman note for courage, seva, and disciplined remembrance.',
    image: '/images/Hanuma5.jpg',
    alt: 'Hanuman image for the DivineSV homepage',
    imagePosition: 'center 24%',
  },
  {
    title: 'Devi Maa',
    copy: 'A radiant motherly presence for grace, protection, and inner strength.',
    image: '/images/Maa Durga.jpg',
    alt: 'Maa Durga image for the DivineSV homepage',
    imagePosition: 'center 24%',
  },
  {
    title: 'Shiva Stillness',
    copy: 'A Shiva-led visual anchor for inwardness, quiet force, and sacred fire.',
    image: '/images/Shiva.JPG',
    alt: 'Shiva image for the DivineSV homepage',
    imagePosition: 'center 20%',
  },
  {
    title: 'Gita Radiance',
    copy: 'A Bhagavad Gita note for sacred study, reflection, and divine guidance.',
    image: '/images/Bhagavadgita3.jpg',
    alt: 'Bhagavad Gita image for the DivineSV homepage',
    imagePosition: 'center 34%',
  },
  {
    title: 'Devi Grace',
    copy: 'A second Devi presence that keeps the home page rooted in Shakti bhava.',
    image: '/images/Devi.jpg',
    alt: 'Devi image for the DivineSV homepage',
    imagePosition: 'center 20%',
  },
] as const;

function rotateShowcaseCards(offset = 0): ShowcaseCard[] {
  return homeImageSet.map((item, index) => {
    const rotated = homeImageSet[(index + offset) % homeImageSet.length];

    return {
      title: rotated.title,
      copy: rotated.copy,
      image: rotated.image,
      imagePosition: rotated.imagePosition,
    };
  });
}

const scenes: HomeScene[] = [
  {
    key: 'vaikuntha',
    main: {
      image: '/images/Kailash.jpg',
      alt: 'A sacred Kailash image for the DivineSV homepage',
      badge: 'Living Bhakti',
      copy: 'An expansive first impression shaped by darshan, devotion, and sacred visual depth.',
      imagePosition: 'center 58%',
    },
    top: {
      image: '/images/Krishna2.jpg',
      alt: 'Krishna visual for the DivineSV homepage',
    },
    bottom: {
      image: '/images/Hanuma5.jpg',
      alt: 'Hanuman visual for the DivineSV homepage',
    },
    showcaseTitle: 'Immersive Devotional Canvas',
    showcaseCopy: '',
    showcaseCards: rotateShowcaseCards(0),
  },
  {
    key: 'shiva',
    main: {
      image: '/images/Shiva.JPG',
      alt: 'A Shiva-led visual scene for the DivineSV homepage',
      badge: 'Sacred Stillness',
      copy: 'A more contemplative scene built around stillness, mountain silence, and the inward pull of Shiva bhakti.',
      imagePosition: 'center 20%',
    },
    top: {
      image: '/images/Devi.jpg',
      alt: 'Devi visual for the DivineSV homepage',
    },
    bottom: {
      image: '/images/Bhagavadgita3.jpg',
      alt: 'Bhagavad Gita visual for the DivineSV homepage',
    },
    showcaseTitle: 'Composed with depth and restraint',
    showcaseCopy: '',
    showcaseCards: rotateShowcaseCards(2),
  },
  {
    key: 'devi',
    main: {
      image: '/images/Maa Durga.jpg',
      alt: 'A Devi-led visual scene for the DivineSV homepage',
      badge: 'Shakti and Grace',
      copy: 'A warmer composition centered on Devi bhava, protection, tenderness, and luminous sacred presence.',
      imagePosition: 'center 24%',
    },
    top: {
      image: '/images/Kailash.jpg',
      alt: 'Kailash visual for the DivineSV homepage',
    },
    bottom: {
      image: '/images/Krishna2.jpg',
      alt: 'Krishna visual for the DivineSV homepage',
    },
    showcaseTitle: 'Designed as a devotional editorial',
    showcaseCopy: '',
    showcaseCards: rotateShowcaseCards(4),
  },
];

function resolveSceneIndex() {
  const raw = window.sessionStorage.getItem(sceneStorageKey);
  const state = raw ? JSON.parse(raw) as { sceneIndex: number; loadsOnScene: number } : { sceneIndex: 0, loadsOnScene: 0 };

  const nextLoads = state.loadsOnScene + 1;
  const shouldAdvance = nextLoads > loadsPerScene;
  const nextState = shouldAdvance
    ? {
        sceneIndex: (state.sceneIndex + 1) % scenes.length,
        loadsOnScene: 1,
      }
    : {
        sceneIndex: state.sceneIndex % scenes.length,
        loadsOnScene: nextLoads,
      };

  window.sessionStorage.setItem(sceneStorageKey, JSON.stringify(nextState));
  return nextState.sceneIndex;
}

export function HomeVisualExperience() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [position, setPosition] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  useEffect(() => {
    setSceneIndex(resolveSceneIndex());
  }, []);

  const scene = useMemo(() => scenes[sceneIndex] ?? scenes[0], [sceneIndex]);
  const realCount = scene.showcaseCards.length;

  const realIndex =
    position === 0
      ? realCount - 1
      : position === realCount + 1
        ? 0
        : position - 1;

  useEffect(() => {
    setEnableTransition(false);
    setPosition(1);
  }, [scene.key]);

  useEffect(() => {
    if (enableTransition) return;
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setEnableTransition(true));
    });
    return () => window.cancelAnimationFrame(id);
  }, [enableTransition]);

  useEffect(() => {
    if (isCarouselHovered) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || realCount < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setEnableTransition(true);
      setPosition((current) => current + 1);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [scene.key, realCount, isCarouselHovered]);

  const goToShowcaseSlide = (index: number) => {
    setEnableTransition(true);
    setPosition(index + 1);
  };

  const goToPreviousShowcaseSlide = () => {
    setEnableTransition(true);
    setPosition((current) => current - 1);
  };

  const goToNextShowcaseSlide = () => {
    setEnableTransition(true);
    setPosition((current) => current + 1);
  };

  const handleTrackTransitionEnd = () => {
    if (position === realCount + 1) {
      setEnableTransition(false);
      setPosition(1);
    } else if (position === 0) {
      setEnableTransition(false);
      setPosition(realCount);
    }
  };

  return (
    <>
      <section className="section-spacing">
        <article
          className="library-feature-card library-feature-card-mobile-overlay library-overview-card page-hero-shell page-hero-shell-has-image home-hero-card"
          key={scene.key}
        >
          <div className="library-feature-copy page-hero-main home-hero-copy">
            <h1 className="page-title">A Home for Bhakti and Wisdom</h1>
            <p className="page-copy">
              A prayerful space for darshan, stotras, sacred stories, and quiet reflection. DivineSV gathers
              the grace of Shiva, Vishnu, Devi, Ganesha, Hanuman, and the wider stream of Sanatana Dharma
              in a spirit of reverence, devotion, and inner stillness.
            </p>

            <div className="link-row">
              <Link className="primary-link" href="/about">
                Enter the Mandir
              </Link>
              <Link className="secondary-link" href="/stotras">
                View Stotras
              </Link>
            </div>
          </div>

          <div className="library-feature-media page-hero-aside home-hero-media">
            <div className="library-feature-visual library-feature-visual-large page-hero-image-frame home-hero-visual">
              <Image
                className="library-feature-image page-hero-image home-hero-image"
                src={scene.main.image}
                alt={scene.main.alt}
                width={1400}
                height={1000}
                priority
                style={{ objectPosition: scene.main.imagePosition ?? 'center' }}
              />
            </div>

            <DraggableFloatingImage
              className="page-hero-float page-hero-float-top"
              imageClassName="page-hero-float-image"
              src={scene.top.image}
              alt={scene.top.alt}
              width={1200}
              height={900}
            />

            <DraggableFloatingImage
              className="page-hero-float page-hero-float-bottom"
              imageClassName="page-hero-float-image"
              src={scene.bottom.image}
              alt={scene.bottom.alt}
              width={1200}
              height={900}
            />

            <p className="home-hero-mantra-caption">Om Namo Narayanaya · Om Namah Shivaya</p>
          </div>
        </article>

        <HeroScrollCue />
      </section>

      <section id="sacred-showcase" className="section-spacing sacred-showcase-shell">
        <div className="showcase-header">
          <h2 className="section-title">{scene.showcaseTitle}</h2>
        </div>

        <div
          className="sacred-showcase-carousel"
          aria-roledescription="carousel"
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
          onFocus={() => setIsCarouselHovered(true)}
          onBlur={() => setIsCarouselHovered(false)}
        >
          <div className="sacred-showcase-indicators" aria-label="Carousel slide indicators">
            {scene.showcaseCards.map((card, index) => (
              <button
                key={`${scene.key}-indicator-${card.title}`}
                type="button"
                className={`sacred-showcase-indicator${index === realIndex ? ' is-active' : ''}`}
                onClick={() => goToShowcaseSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === realIndex}
              />
            ))}
          </div>

          <div className="sacred-showcase-viewport">
            <div
              className="sacred-showcase-track"
              style={{
                transform: `translateX(-${position * 100}%)`,
                transition: enableTransition ? undefined : 'none',
              }}
              onTransitionEnd={handleTrackTransitionEnd}
            >
              {(() => {
                const ghostPrev = scene.showcaseCards[realCount - 1];
                const ghostNext = scene.showcaseCards[0];
                const renderCard = (card: ShowcaseCard, key: string, isActive: boolean, ariaHidden = false) => (
                  <article
                    key={key}
                    className={`sacred-showcase-card${isActive ? ' is-active' : ''} ${card.className ?? ''}`.trim()}
                    aria-hidden={ariaHidden || undefined}
                  >
                    <div className="sacred-showcase-media">
                      <div className="sacred-showcase-image-shell">
                        <Image
                          className="sacred-showcase-image"
                          src={card.image}
                          alt={card.title}
                          width={1400}
                          height={1000}
                          style={{ objectPosition: card.imagePosition ?? 'center' }}
                        />
                      </div>
                    </div>
                  </article>
                );

                return (
                  <>
                    {renderCard(ghostPrev, `${scene.key}-ghost-prev`, position === 0, true)}
                    {scene.showcaseCards.map((card, index) =>
                      renderCard(card, `${scene.key}-${card.title}`, index === realIndex && position !== 0 && position !== realCount + 1)
                    )}
                    {renderCard(ghostNext, `${scene.key}-ghost-next`, position === realCount + 1, true)}
                  </>
                );
              })()}
            </div>
          </div>

          <button
            type="button"
            className="sacred-showcase-control sacred-showcase-control-prev"
            onClick={goToPreviousShowcaseSlide}
            aria-label="Previous slide"
          >
            <ChevronLeftIcon />
          </button>

          <button
            type="button"
            className="sacred-showcase-control sacred-showcase-control-next"
            onClick={goToNextShowcaseSlide}
            aria-label="Next slide"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </section>
    </>
  );
}
