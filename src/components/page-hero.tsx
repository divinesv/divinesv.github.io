import type { ReactNode } from 'react';

import { DraggableFloatingImage } from '@/components/draggable-floating-image';
import { HeroScrollCue } from '@/components/hero-scroll-cue';
import Image from 'next/image';

export type PageHeroAsideItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  className?: string;
  eyebrow: string;
  title: string;
  description: string;
  asideTitle: string;
  asideItems: Array<string | PageHeroAsideItem>;
  asideClassName?: string;
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  accentTopImageSrc?: string;
  accentTopImageAlt?: string;
  accentBottomImageSrc?: string;
  accentBottomImageAlt?: string;
};

export function PageHero({
  className,
  eyebrow,
  title,
  description,
  asideTitle,
  asideItems,
  asideClassName,
  children,
  imageSrc,
  imageAlt,
  accentTopImageSrc,
  accentTopImageAlt,
  accentBottomImageSrc,
  accentBottomImageAlt,
}: PageHeroProps) {
  const hasImage = Boolean(imageSrc);
  void asideTitle;
  void asideItems;
  const topFloatSrc = accentTopImageSrc ?? imageSrc;
  const topFloatAlt = accentTopImageAlt ?? imageAlt ?? title;
  const bottomFloatSrc = accentBottomImageSrc ?? imageSrc;
  const bottomFloatAlt = accentBottomImageAlt ?? imageAlt ?? title;
  const primaryEyebrow = eyebrow.split('|')[0]?.trim() ?? eyebrow;

  return (
    <section className="section-spacing">
      <article
        className={`library-feature-card library-overview-card page-hero-shell home-hero-card${hasImage ? ' page-hero-shell-has-image' : ''}${className ? ` ${className}` : ''}`}
      >
        <div className="library-feature-copy page-hero-main home-hero-copy">
          <span className="eyebrow">{primaryEyebrow}</span>
          <h1 className="page-title">{title}</h1>
          <p className="page-copy">{description}</p>
          {children}
        </div>

        <div className={`library-feature-media page-hero-aside home-hero-media${asideClassName ? ` ${asideClassName}` : ''}`}>
          {imageSrc ? (
            <div className="library-feature-visual library-feature-visual-large page-hero-image-frame home-hero-visual">
              <Image className="library-feature-image page-hero-image home-hero-image" src={imageSrc} alt={imageAlt ?? title} width={1200} height={800} />
            </div>
          ) : null}
          {topFloatSrc ? (
            <DraggableFloatingImage
              className="page-hero-float page-hero-float-top"
              imageClassName="page-hero-float-image"
              src={topFloatSrc}
              alt={topFloatAlt}
              width={420}
              height={520}
            />
          ) : null}
          {bottomFloatSrc ? (
            <DraggableFloatingImage
              className="page-hero-float page-hero-float-bottom"
              imageClassName="page-hero-float-image"
              src={bottomFloatSrc}
              alt={bottomFloatAlt}
              width={420}
              height={520}
            />
          ) : null}
        </div>
      </article>

      <HeroScrollCue />
    </section>
  );
}
