import type { ReactNode } from 'react';
import Link from 'next/link';

import { DraggableFloatingImage } from '@/components/draggable-floating-image';
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
  return (
    <section className={`dual-grid section-spacing page-hero-shell${className ? ` ${className}` : ''}`}>
      <div className="devotional-panel">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-title">{title}</h1>
        <p className="page-copy">{description}</p>
        {children}
      </div>

      <aside className={`quote-strip page-hero-aside${asideClassName ? ` ${asideClassName}` : ''}`}>
        {accentTopImageSrc ? (
          <DraggableFloatingImage
            className="page-hero-float page-hero-float-top"
            imageClassName="page-hero-float-image"
            src={accentTopImageSrc}
            alt={accentTopImageAlt ?? title}
            width={420}
            height={520}
          />
        ) : null}
        {accentBottomImageSrc ? (
          <DraggableFloatingImage
            className="page-hero-float page-hero-float-bottom"
            imageClassName="page-hero-float-image"
            src={accentBottomImageSrc}
            alt={accentBottomImageAlt ?? title}
            width={420}
            height={520}
          />
        ) : null}
        {imageSrc ? (
          <div className="page-hero-image-frame">
            <Image className="page-hero-image" src={imageSrc} alt={imageAlt ?? title} width={1200} height={800} />
          </div>
        ) : null}
        {asideTitle ? <span className="pill">{asideTitle}</span> : null}
        {asideItems.length ? (
          <ul className="list-clean">
            {asideItems.map((item) => (
              typeof item === 'string' ? (
                <li key={item}>{item}</li>
              ) : (
                <li key={item.label}>
                  {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
                </li>
              )
            ))}
          </ul>
        ) : null}
      </aside>
    </section>
  );
}
