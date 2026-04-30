import type { ReactNode } from 'react';

import { DraggableFloatingImage } from '@/components/draggable-floating-image';
import { HeroScrollCue } from '@/components/hero-scroll-cue';
import { RotatingFloatingImage } from '@/components/rotating-floating-image';
import Image from 'next/image';

export type PageHeroAsideItem = {
  label: string;
  href?: string;
};

export type PageHeroFloatingImage = {
  src: string;
  alt: string;
};

type PageHeroProps = {
  pageKey?: string;
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
  accentTopImageOptions?: readonly PageHeroFloatingImage[];
  accentBottomImageSrc?: string;
  accentBottomImageAlt?: string;
  accentBottomImageOptions?: readonly PageHeroFloatingImage[];
};

export function PageHero({
  pageKey,
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
  accentTopImageOptions,
  accentBottomImageSrc,
  accentBottomImageAlt,
  accentBottomImageOptions,
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
            pageKey && accentTopImageOptions?.length ? (
              <RotatingFloatingImage
                className="page-hero-float page-hero-float-top"
                imageClassName="page-hero-float-image"
                fallback={{ src: topFloatSrc, alt: topFloatAlt }}
                options={accentTopImageOptions}
                pageKey={pageKey}
                slotKey="top"
                width={420}
                height={520}
              />
            ) : (
              <DraggableFloatingImage
                className="page-hero-float page-hero-float-top"
                imageClassName="page-hero-float-image"
                src={topFloatSrc}
                alt={topFloatAlt}
                width={420}
                height={520}
              />
            )
          ) : null}
          {bottomFloatSrc ? (
            pageKey && accentBottomImageOptions?.length ? (
              <RotatingFloatingImage
                className="page-hero-float page-hero-float-bottom"
                imageClassName="page-hero-float-image"
                fallback={{ src: bottomFloatSrc, alt: bottomFloatAlt }}
                options={accentBottomImageOptions}
                pageKey={pageKey}
                slotKey="bottom"
                width={420}
                height={520}
              />
            ) : (
              <DraggableFloatingImage
                className="page-hero-float page-hero-float-bottom"
                imageClassName="page-hero-float-image"
                src={bottomFloatSrc}
                alt={bottomFloatAlt}
                width={420}
                height={520}
              />
            )
          ) : null}
        </div>
      </article>

      <HeroScrollCue />
    </section>
  );
}
