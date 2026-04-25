import Link from 'next/link';

import { DevotionalGallery } from '@/components/devotional-gallery';
import { ArrowRightIcon } from '@/components/icons';
import { PageHero } from '@/components/page-hero';
import type { DevotionalImage } from '@/lib/devotional-images';
import { getNextDeityLink, type DeitySlug } from '@/lib/deity-profiles';

export type DeityProfile = {
  eyebrow: string;
  title: string;
  description: string;
  asideTitle: string;
  asideItems: string[];
  image: DevotionalImage;
  accentTopImage?: DevotionalImage;
  accentBottomImage?: DevotionalImage;
  sectionEyebrow: string;
  sectionTitle: string;
  paragraphs: string[];
  practiceTitle: string;
  practiceItems: string[];
  galleryEyebrow: string;
  galleryTitle: string;
  galleryImages: DevotionalImage[];
};

type DeityProfilePageProps = {
  profile: DeityProfile;
  slug: DeitySlug;
};

export function DeityProfilePage({ profile, slug }: DeityProfilePageProps) {
  const nextDeity = getNextDeityLink(slug);

  return (
    <>
      <PageHero
        eyebrow={profile.eyebrow}
        title={profile.title}
        description={profile.description}
        asideTitle={profile.asideTitle}
        asideItems={profile.asideItems}
        imageSrc={profile.image.src}
        imageAlt={profile.image.alt}
        accentTopImageSrc={profile.accentTopImage?.src}
        accentTopImageAlt={profile.accentTopImage?.alt}
        accentBottomImageSrc={profile.accentBottomImage?.src}
        accentBottomImageAlt={profile.accentBottomImage?.alt}
      />

      <section className="section-spacing">
        <article className="devotional-panel devotional-panel-solo">
          <span className="eyebrow">{profile.sectionEyebrow}</span>
          <h2 className="section-title">{profile.sectionTitle}</h2>
          {profile.paragraphs.map((paragraph) => (
            <p key={paragraph} className="page-copy">
              {paragraph}
            </p>
          ))}
        </article>
      </section>

      <section className="section-spacing devotional-pullquote-section">
        <figure className="devotional-pullquote">
          <span className="eyebrow devotional-pullquote-eyebrow">{profile.practiceTitle}</span>
          <blockquote className="devotional-pullquote-body">
            {profile.practiceItems.map((item, index) => (
              <span key={item} className="devotional-pullquote-line">
                {item}
                {index < profile.practiceItems.length - 1 ? (
                  <span className="devotional-pullquote-divider" aria-hidden="true">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </blockquote>
        </figure>
      </section>

      <DevotionalGallery eyebrow={profile.galleryEyebrow} title={profile.galleryTitle} images={profile.galleryImages} />

      <section className="section-spacing deity-next-section">
        <Link className="deity-next-link" href={nextDeity.href}>
          <span className="deity-next-eyebrow">Continue the pantheon</span>
          <span className="deity-next-title">{nextDeity.eyebrow}</span>
          <ArrowRightIcon className="deity-next-arrow" />
        </Link>
      </section>
    </>
  );
}
