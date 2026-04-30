import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/page-hero';
import { devotionalImagePools, getImageBySrc, rotateImages } from '@/lib/devotional-images';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About DivineSV, a devotional website dedicated to Hindu gods, Sanatana Dharma, and sacred learning in English with Sanskrit and Telugu terms.',
};

export default function AboutPage() {
  const aboutTopImage = getImageBySrc(devotionalImagePools.sages, '/images/AdiShankaracharya.jpg');
  const aboutBottomImage = getImageBySrc(devotionalImagePools.temples, '/images/Temple6.jpg');

  return (
    <>
      <PageHero
        pageKey="about"
        eyebrow="About the Project"
        title="Why DivineSV exists"
        description="DivineSV is designed as a reverent and structured online space for Hindu devotional knowledge. The goal is not only to present information, but to create an atmosphere of bhakti, clarity, and sacred continuity across Shiva, Vishnu, Devi, and other beloved devatas."
        asideTitle="Tone of the Site"
        asideItems={[
          'Sanskrit terms retained where they carry devotional meaning',
          'Telugu terms included for familiarity and regional connection',
          'A respectful style suited for spiritual reading and cultural learning',
        ]}
        imageSrc="/images/God.jpg"
        imageAlt="Devotional image for the DivineSV about page"
        accentTopImageSrc={aboutTopImage.src}
        accentTopImageAlt={aboutTopImage.alt}
        accentTopImageOptions={rotateImages(devotionalImagePools.sages, 0)}
        accentBottomImageSrc={aboutBottomImage.src}
        accentBottomImageAlt={aboutBottomImage.alt}
        accentBottomImageOptions={[...rotateImages(devotionalImagePools.temples, 2), ...rotateImages(devotionalImagePools.nature, 0)]}
      >
        <div className="link-row">
          <Link className="primary-link" href="/shiva">
            Explore Shiva
          </Link>
          <Link className="secondary-link" href="/vishnu">
            Explore Vishnu
          </Link>
        </div>
      </PageHero>

      <section className="section-spacing">
        <div className="section-heading">
          <span className="eyebrow">Future Content</span>
        </div>
        <div className="triple-grid">
          <article className="surface-card">
            <h3 className="card-title">Stories</h3>
            <p>Purana summaries, Ramayana and Mahabharata references, and deity-centered narrative pages.</p>
          </article>
          <article className="surface-card">
            <h3 className="card-title">Sacred Places</h3>
            <p>Temple spotlights, kshetras, jyotirlingas, divya desams, shakti peethas, and pilgrimage notes.</p>
          </article>
        </div>
      </section>
    </>
  );
}
