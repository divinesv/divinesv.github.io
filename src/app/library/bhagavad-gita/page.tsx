import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { BhagavadGitaCompanion } from '@/components/bhagavad-gita-companion';
import { GitaFeaturedVerses } from '@/components/gita-featured-verses';
import { PageHero } from '@/components/page-hero';
import { bhagavadGitaFeaturedVerses, bhagavadGitaModes, bhagavadGitaStats } from '@/lib/bhagavad-gita';

export const metadata: Metadata = {
  title: 'Bhagavad Gita Companion',
  description:
    'A visually rich Bhagavad Gita reading experience on DivineSV with sloka guidance, transliteration, translation, and commentary.',
};

export default function BhagavadGitaPage() {
  return (
    <div className="gita-page">
      <PageHero
        eyebrow="Bhagavad Gita"
        title="A living sloka companion"
        description={`${bhagavadGitaStats.chapterCount} chapters represented in the dataset. ${bhagavadGitaStats.verseCount} verses with translation and commentary.`}
        asideTitle=""
        asideItems={[]}
        imageSrc="/images/Vishwaroopam.jpg"
        imageAlt="Bhagavad Gita Vishwaroopam visual"
        accentTopImageSrc="/images/Gita-krishna.jpg"
        accentTopImageAlt="Krishna accent image for the Bhagavad Gita page"
        accentBottomImageSrc="/images/Gita-arjuna.jpg"
        accentBottomImageAlt="Arjuna accent image for the Bhagavad Gita page"
      >
        <div className="link-row">
          <Link className="secondary-link" href="/library">
            Back to Library
          </Link>
        </div>
      </PageHero>

      <section className="section-spacing">
        <div className="gita-scene-grid gita-scene-grid-solo">
          <article className="gita-scene-card gita-scene-card-large gita-scene-card-solo">
            <Image className="gita-scene-image" src="/images/Gita-krishna.jpg" alt="Krishna visual" width={1200} height={1600} />
            <div className="gita-scene-overlay">
              <span className="card-tag">Krishna</span>
              <h2 className="card-title">Guidance with presence</h2>
              <p>Built to feel devotional and alive, with the verse experience carried by image, light, and atmosphere.</p>
            </div>
          </article>
        </div>
      </section>

      <BhagavadGitaCompanion modes={bhagavadGitaModes} />

      <GitaFeaturedVerses verses={bhagavadGitaFeaturedVerses} />
    </div>
  );
}
