import { DevotionalGallery } from '@/components/devotional-gallery';
import { PageHero } from '@/components/page-hero';
import type { DevotionalImage } from '@/lib/devotional-images';

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
};

export function DeityProfilePage({ profile }: DeityProfilePageProps) {
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

      <section className="dual-grid section-spacing">
        <article className="devotional-panel">
          <span className="eyebrow">{profile.sectionEyebrow}</span>
          <h2 className="section-title">{profile.sectionTitle}</h2>
          {profile.paragraphs.map((paragraph) => (
            <p key={paragraph} className="page-copy">
              {paragraph}
            </p>
          ))}
        </article>

        <aside className="quote-strip">
          <span className="pill">{profile.practiceTitle}</span>
          <ul className="list-clean">
            {profile.practiceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <DevotionalGallery eyebrow={profile.galleryEyebrow} title={profile.galleryTitle} images={profile.galleryImages} />
    </>
  );
}
