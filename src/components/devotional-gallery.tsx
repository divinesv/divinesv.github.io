import Image from 'next/image';

import type { DevotionalImage } from '@/lib/devotional-images';

type DevotionalGalleryProps = {
  eyebrow: string;
  title: string;
  images: DevotionalImage[];
};

export function DevotionalGallery({ eyebrow, title, images }: DevotionalGalleryProps) {
  const galleryImages = images;

  if (!galleryImages.length) {
    return null;
  }

  return (
    <section className="section-spacing">
      <div className="showcase-header">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="sacred-showcase-grid devotional-gallery-grid">
        {galleryImages.map((image) => (
          <article key={image.src} className="sacred-showcase-card devotional-gallery-card">
            <Image className="sacred-showcase-image" src={image.src} alt={image.alt} width={1400} height={1000} />
          </article>
        ))}
      </div>
    </section>
  );
}
