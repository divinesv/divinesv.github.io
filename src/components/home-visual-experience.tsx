'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { DraggableFloatingImage } from '@/components/draggable-floating-image';
import { HeroScrollCue } from '@/components/hero-scroll-cue';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';

const sceneStorageKey = 'divinesv-home-scene';
const loadsPerScene = 2;

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

const scenes: HomeScene[] = [
  {
    key: 'vaikuntha',
    main: {
      image: '/images/vishwaroopam.jpg',
      alt: 'A sacred divine image for the DivineSV homepage',
      badge: 'Living Bhakti',
      copy: 'An expansive first impression shaped by darshan, devotion, and sacred visual depth.',
      imagePosition: 'center 42%',
    },
    top: {
      image: '/images/venkateswara.jpg',
      alt: 'Venkateswara visual for the DivineSV homepage',
    },
    bottom: {
      image: '/images/Kailash.jpg',
      alt: 'Kailash visual for the DivineSV homepage',
    },
    showcaseTitle: 'Immersive Devotional Canvas',
    showcaseCopy: '',
    showcaseCards: [
      {
        title: 'Venkateswara Darshan',
        copy: 'A temple-rich tone for Vaikuntha, surrender, and refuge.',
        image: '/images/venkateswara.jpg',
        imagePosition: 'center 54%',
      },
      {
        title: 'Krishna Bhava',
        copy: 'A vivid visual note for leela, music, and devotion.',
        image: '/images/Krishna8.jpg',
        imagePosition: 'center 16%',
      },
      {
        title: 'Sri Rama and Mata Janki',
        copy: 'A softer devotional frame for grace, dharma, and sacred companionship.',
        image: '/images/ramjanki.jpg',
        imagePosition: 'center 18%',
      },
      {
        title: 'Shiva Stillness',
        copy: 'A balancing Shaiva note for silence, inwardness, and mountain contemplation.',
        image: '/images/shiva.jpg',
        imagePosition: 'center 14%',
      },
      {
        title: 'Rama Patha',
        copy: 'A quieter visual accent for pilgrimage, story, and reverence.',
        image: '/images/Rama3.jpg',
        imagePosition: 'center 20%',
      },
      {
        title: 'Ganesha Mangalam',
        copy: 'A bright auspicious interval for beginnings, wisdom, and welcome.',
        image: '/images/ganesha.jpg',
        imagePosition: 'center 22%',
      },
      {
        title: 'Vishnu Horizon',
        copy: 'A sustaining Vaishnava note for preservation, refuge, and order.',
        image: '/images/Vishnu.JPG',
        imagePosition: 'center 22%',
      },
      {
        title: 'Hanuman Grace',
        copy: 'A devoted note of strength, service, and humility.',
        image: '/images/hanuman.jpg',
        imagePosition: 'center 16%',
      },
      {
        title: 'Sacred Landscape',
        copy: 'A quieter natural pause inside the devotional mix.',
        image: '/images/nature.jpg',
        imagePosition: 'center 26%',
      },
      {
        title: 'Devi Maa',
        copy: 'A radiant Shakti note for protection and motherly grace.',
        image: '/images/Devi3.jpg',
        imagePosition: 'center 20%',
      },
      {
        title: 'Narasimha Roopam',
        copy: 'A fierce-yet-graceful image for devotee protection.',
        image: '/images/NarasimhaSwamy.jpg',
        imagePosition: 'center 30%',
      },
      {
        title: 'Jagannatha Darshan',
        copy: 'A welcoming gaze that opens the heart.',
        image: '/images/Jagannatha.jpg',
        imagePosition: 'center 32%',
      },
      {
        title: 'Ayyappa Pilgrimage',
        copy: 'A vrata-led note for discipline and pilgrimage.',
        image: '/images/Ayyappa.jpg',
        imagePosition: 'center 28%',
      },
    ],
  },
  {
    key: 'shiva',
    main: {
      image: '/images/shiva5.jpg',
      alt: 'A Shiva-led visual scene for the DivineSV homepage',
      badge: 'Sacred Stillness',
      copy: 'A more contemplative scene built around stillness, mountain silence, and the inward pull of Shiva bhakti.',
      imagePosition: 'center 48%',
    },
    top: {
      image: '/images/krishna.jpg',
      alt: 'Krishna visual for the DivineSV homepage',
    },
    bottom: {
      image: '/images/hanuman.jpg',
      alt: 'Hanuman visual for the DivineSV homepage',
    },
    showcaseTitle: 'Composed with depth and restraint',
    showcaseCopy: '',
    showcaseCards: [
      {
        title: 'Kailash Presence',
        copy: 'A mountain-led visual anchor for austerity, silence, and cosmic scale.',
        image: '/images/Kailash.jpg',
        imagePosition: 'center 62%',
      },
      {
        title: 'Hanuman Veera Bhakti',
        copy: 'Strength and humility held in one devotional note.',
        image: '/images/hanuman.jpg',
        imagePosition: 'center 16%',
      },
      {
        title: 'Krishna Madhurya',
        copy: 'A lyrical balance to the sharper stillness of the scene.',
        image: '/images/Krishna8.jpg',
        imagePosition: 'center 16%',
      },
      {
        title: 'Rama Seva',
        copy: 'A dharmic companion image for compassion, companionship, and devotion.',
        image: '/images/ramjanki.jpg',
        imagePosition: 'center 18%',
      },
      {
        title: 'Nature and Pilgrimage',
        copy: 'A calmer landscape texture that prevents the page from feeling over-illustrated.',
        image: '/images/nature.jpg',
        imagePosition: 'center 26%',
      },
      {
        title: 'Temple Radiance',
        copy: 'A Vaishnava temple counterpoint to keep the scene devotional rather than severe.',
        image: '/images/venkateswara.jpg',
        imagePosition: 'center 50%',
      },
      {
        title: 'Vishwaroopa Flame',
        copy: 'A final burst of sacred scale so the composition does not become too quiet.',
        image: '/images/vishwaroopam.jpg',
        imagePosition: 'center 28%',
      },
      {
        title: 'Ganesha Mangalam',
        copy: 'A bright auspicious interval for beginnings and welcome.',
        image: '/images/ganesha.jpg',
        imagePosition: 'center 22%',
      },
      {
        title: 'Vishnu Horizon',
        copy: 'A sustaining Vaishnava counterpoint for balance and refuge.',
        image: '/images/Vishnu.JPG',
        imagePosition: 'center 22%',
      },
      {
        title: 'Shiva Nataraja',
        copy: 'The cosmic dancer balancing creation and dissolution.',
        image: '/images/shiva6.jpeg',
        imagePosition: 'center 30%',
      },
      {
        title: 'Devi Sovereignty',
        copy: 'A regal Shakti note for inner strength and refuge.',
        image: '/images/Devi.jpg',
        imagePosition: 'center 24%',
      },
      {
        title: 'Sacred Cow',
        copy: 'A pastoral note of nourishment, gentleness, and abundance.',
        image: '/images/cow.jpg',
        imagePosition: 'center 40%',
      },
      {
        title: 'Temple Lamps',
        copy: 'A quiet shrine glow for stillness and prayer.',
        image: '/images/Temple7.jpg',
        imagePosition: 'center 40%',
      },
    ],
  },
  {
    key: 'rama-vishnu',
    main: {
      image: '/images/ramjanki.jpg',
      alt: 'A Rama and Janki visual scene for the DivineSV homepage',
      badge: 'Dharma and Grace',
      copy: 'A warmer composition centered on Rama bhava, sacred relationship, and devotional storytelling.',
      imagePosition: 'center 45%',
    },
    top: {
      image: '/images/Vishnu.JPG',
      alt: 'Vishnu visual for the DivineSV homepage',
    },
    bottom: {
      image: '/images/ganesha.jpg',
      alt: 'Ganesha visual for the DivineSV homepage',
    },
    showcaseTitle: 'Designed as a devotional editorial',
    showcaseCopy: '',
    showcaseCards: [
      {
        title: 'Kailash Contrast',
        copy: 'A mountain note that broadens the scene beyond one devotional register.',
        image: '/images/Kailash.jpg',
        imagePosition: 'center 62%',
      },
      {
        title: 'Vishnu Darshan',
        copy: 'A stronger Vaishnava note for refuge, preservation, and cosmic order.',
        image: '/images/Vishnu.JPG',
        imagePosition: 'center 22%',
      },
      {
        title: 'Ganesha Auspiciousness',
        copy: 'A bright counterpoint for beginnings, wisdom, and welcoming energy.',
        image: '/images/ganesha.jpg',
        imagePosition: 'center 22%',
      },
      {
        title: 'Krishna Lila',
        copy: 'A lyrical Krishna accent for music, tenderness, and bhava.',
        image: '/images/Krishna8.jpg',
        imagePosition: 'center 15%',
      },
      {
        title: 'Rama Patha',
        copy: 'A focused devotional accent for pilgrims, readers, and seekers.',
        image: '/images/Rama3.jpg',
        imagePosition: 'center 18%',
      },
      {
        title: 'Vishwaroopa',
        copy: 'A dramatic sacred image to retain scale and wonder.',
        image: '/images/vishwaroopam.jpg',
        imagePosition: 'center 28%',
      },
      {
        title: 'Sacred Landscape',
        copy: 'A calmer pause that lets the richer iconography breathe.',
        image: '/images/nature.jpg',
        imagePosition: 'center 26%',
      },
      {
        title: 'Venkateswara Darshan',
        copy: 'A temple-rich Vaishnava image for refuge and surrender.',
        image: '/images/venkateswara.jpg',
        imagePosition: 'center 50%',
      },
      {
        title: 'Hanuman Bhakti',
        copy: 'A devotional companion of loyalty, courage, and service.',
        image: '/images/hanuman.jpg',
        imagePosition: 'center 16%',
      },
      {
        title: 'Devi Maa',
        copy: 'A maternal Shakti accent of compassion and protection.',
        image: '/images/Devi2.jpg',
        imagePosition: 'center 22%',
      },
      {
        title: 'Shiva Stillness',
        copy: 'A meditative counterpoint of inwardness and silence.',
        image: '/images/shiva5.jpg',
        imagePosition: 'center 40%',
      },
      {
        title: 'Sage Wisdom',
        copy: 'Adi Shankaracharya — the wisdom lineage of Sanatana Dharma.',
        image: '/images/AdiShankaracharya.jpg',
        imagePosition: 'center 28%',
      },
      {
        title: 'Temple Architecture',
        copy: 'A rich gopuram note for tradition and devotion.',
        image: '/images/Temples.jpg',
        imagePosition: 'center 38%',
      },
    ],
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
    }, 4500);

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
