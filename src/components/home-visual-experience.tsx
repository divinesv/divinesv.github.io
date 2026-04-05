'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { DraggableFloatingImage } from '@/components/draggable-floating-image';

const sceneStorageKey = 'divinesv-home-scene';
const loadsPerScene = 2;

type ShowcaseCard = {
  title: string;
  copy: string;
  image: string;
  className?: string;
};

type HomeScene = {
  key: string;
  main: {
    image: string;
    alt: string;
    badge: string;
    copy: string;
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
        title: 'Sri Rama and Mata Janki',
        copy: 'A softer devotional frame for grace, dharma, and sacred companionship.',
        image: '/images/ramjanki.jpg',
      },
      {
        title: 'Krishna Bhava',
        copy: 'A vivid visual note for leela, music, and devotion.',
        image: '/images/Krishna8.jpg',
      },
      {
        title: 'Venkateswara Darshan',
        copy: 'A temple-rich tone for Vaikuntha, surrender, and refuge.',
        image: '/images/venkateswara.jpg',
      },
      {
        title: 'Shiva Stillness',
        copy: 'A balancing Shaiva note for silence, inwardness, and mountain contemplation.',
        image: '/images/shiva.jpg',
      },
      {
        title: 'Rama Patha',
        copy: 'A quieter visual accent for pilgrimage, story, and reverence.',
        image: '/images/Rama3.jpg',
      },
      {
        title: 'Ganesha Mangalam',
        copy: 'A bright auspicious interval for beginnings, wisdom, and welcome.',
        image: '/images/ganesha.jpg',
      },
      {
        title: 'Vishnu Horizon',
        copy: 'A sustaining Vaishnava note for preservation, refuge, and order.',
        image: '/images/Vishnu.JPG',
      },
    ],
  },
  {
    key: 'shiva',
    main: {
      image: '/images/shiva.jpg',
      alt: 'A Shiva-led visual scene for the DivineSV homepage',
      badge: 'Sacred Stillness',
      copy: 'A more contemplative scene built around stillness, mountain silence, and the inward pull of Shiva bhakti.',
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
      },
      {
        title: 'Hanuman Veera Bhakti',
        copy: 'Strength and humility held in one devotional note.',
        image: '/images/hanuman.jpg',
      },
      {
        title: 'Krishna Madhurya',
        copy: 'A lyrical balance to the sharper stillness of the scene.',
        image: '/images/Krishna8.jpg',
      },
      {
        title: 'Rama Seva',
        copy: 'A dharmic companion image for compassion, companionship, and devotion.',
        image: '/images/ramjanki.jpg',
      },
      {
        title: 'Nature and Pilgrimage',
        copy: 'A calmer landscape texture that prevents the page from feeling over-illustrated.',
        image: '/images/nature.jpg',
      },
      {
        title: 'Temple Radiance',
        copy: 'A Vaishnava temple counterpoint to keep the scene devotional rather than severe.',
        image: '/images/venkateswara.jpg',
      },
      {
        title: 'Vishwaroopa Flame',
        copy: 'A final burst of sacred scale so the composition does not become too quiet.',
        image: '/images/vishwaroopam.jpg',
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
    showcaseCopy:
      'This version leans into story, grace, and iconographic contrast so the homepage feels more like a crafted publication than a template.',
    showcaseCards: [
      {
        title: 'Vishnu Darshan',
        copy: 'A stronger Vaishnava note for refuge, preservation, and cosmic order.',
        image: '/images/Vishnu.JPG',
      },
      {
        title: 'Ganesha Auspiciousness',
        copy: 'A bright counterpoint for beginnings, wisdom, and welcoming energy.',
        image: '/images/ganesha.jpg',
      },
      {
        title: 'Vishwaroopa',
        copy: 'A dramatic sacred image to retain scale and wonder.',
        image: '/images/vishwaroopam.jpg',
      },
      {
        title: 'Krishna Lila',
        copy: 'A lyrical Krishna accent for music, tenderness, and bhava.',
        image: '/images/Krishna8.jpg',
      },
      {
        title: 'Rama Patha',
        copy: 'A focused devotional accent for pilgrims, readers, and seekers.',
        image: '/images/Rama3.jpg',
      },
      {
        title: 'Sacred Landscape',
        copy: 'A calmer pause that lets the richer iconography breathe.',
        image: '/images/nature.jpg',
      },
      {
        title: 'Kailash Contrast',
        copy: 'A mountain note that broadens the scene beyond one devotional register.',
        image: '/images/Kailash.jpg',
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

  useEffect(() => {
    setSceneIndex(resolveSceneIndex());
  }, []);

  const scene = useMemo(() => scenes[sceneIndex] ?? scenes[0], [sceneIndex]);

  return (
    <>
      <section className="hero-premium section-spacing">
        <div className="hero-premium-shell">
          <div className="hero-premium-copy devotional-panel">
            <span className="eyebrow">Om Namo Narayanaya | Om Namah Shivaya</span>
            <h1 className="hero-title">A Home for Bhakti and Wisdom</h1>
            <p className="hero-copy">
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

          <aside className="hero-stage" key={scene.key}>
            <div className="hero-stage-orb hero-stage-orb-one" />
            <div className="hero-stage-orb hero-stage-orb-two" />
            <div className="hero-stage-orb hero-stage-orb-three" />

            <div className="hero-stage-main">
              <Image
                className="hero-stage-image"
                src={scene.main.image}
                alt={scene.main.alt}
                width={1400}
                height={1000}
                priority
              />
              <div className="hero-stage-main-overlay">
                <span className="pill">{scene.main.badge}</span>
                <p className="body-copy">{scene.main.copy}</p>
              </div>
            </div>

            <DraggableFloatingImage
              className="hero-stage-float hero-stage-float-top"
              imageClassName="hero-stage-image"
              src={scene.top.image}
              alt={scene.top.alt}
              width={1200}
              height={900}
            />

            <DraggableFloatingImage
              className="hero-stage-float hero-stage-float-bottom"
              imageClassName="hero-stage-image"
              src={scene.bottom.image}
              alt={scene.bottom.alt}
              width={1200}
              height={900}
            />
          </aside>
        </div>
      </section>

      <section className="section-spacing">
        <div className="showcase-header">
          <span className="eyebrow">Sacred Visuals</span>
          <h2 className="section-title">{scene.showcaseTitle}</h2>
          {scene.showcaseCopy ? <p className="page-copy">{scene.showcaseCopy}</p> : null}
        </div>

        <div className="sacred-showcase-grid">
          {scene.showcaseCards.map((card) => (
            <article key={`${scene.key}-${card.title}`} className={`sacred-showcase-card ${card.className ?? ''}`.trim()}>
              <Image className="sacred-showcase-image" src={card.image} alt={card.title} width={1400} height={1000} />
              <div className="sacred-showcase-overlay">
                <h3 className="card-title">{card.title}</h3>
                <p>{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
