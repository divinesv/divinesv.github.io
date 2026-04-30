import Image from 'next/image';
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
  accentTopImageOptions?: readonly DevotionalImage[];
  accentBottomImageOptions?: readonly DevotionalImage[];
  sectionEyebrow: string;
  sectionTitle: string;
  paragraphs: string[];
  practiceTitle: string;
  practiceItems: string[];
  relatedResources?: Array<{
    title: string;
    body: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
  }>;
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
        className="page-hero-shell-deity"
        pageKey={slug}
        eyebrow={profile.eyebrow}
        title={profile.title}
        description={profile.description}
        asideTitle={profile.asideTitle}
        asideItems={profile.asideItems}
        imageSrc={profile.image.src}
        imageAlt={profile.image.alt}
        accentTopImageSrc={profile.accentTopImage?.src}
        accentTopImageAlt={profile.accentTopImage?.alt}
        accentTopImageOptions={profile.accentTopImageOptions}
        accentBottomImageSrc={profile.accentBottomImage?.src}
        accentBottomImageAlt={profile.accentBottomImage?.alt}
        accentBottomImageOptions={profile.accentBottomImageOptions}
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

      {profile.relatedResources?.length ? (
        <section className="section-spacing">
          <span className="eyebrow">Sacred Reading</span>
          <h2 className="section-title">Stotras and texts for this form</h2>
          <div className="content-grid">
            {profile.relatedResources.map((resource) => (
              <Link key={resource.href} className="surface-card deity-path-card" href={resource.href}>
                <div className="deity-path-card-visual">
                  <Image className="deity-path-card-image" src={resource.imageSrc} alt={resource.imageAlt} width={1200} height={900} />
                </div>
                <h3 className="card-title deity-path-card-title">{resource.title}</h3>
                <p>{resource.body}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

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
