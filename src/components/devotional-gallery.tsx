'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import type { DevotionalImage } from '@/lib/devotional-images';

type DevotionalGalleryProps = {
  eyebrow: string;
  title: string;
  images: DevotionalImage[];
};

export function DevotionalGallery({ eyebrow, title, images }: DevotionalGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length < 2 || isHovered) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const slideCount = images.length;
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, 4500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [images.length, isHovered]);

  if (!images.length) {
    return null;
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPreviousSlide = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <section className="section-spacing sacred-showcase-shell">
      <div className="showcase-header">
        <h2 className="section-title">{title}</h2>
      </div>

      <div
        className="sacred-showcase-carousel"
        aria-roledescription="carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <div className="sacred-showcase-indicators" aria-label="Carousel slide indicators">
          {images.map((image, index) => (
            <button
              key={`indicator-${image.src}`}
              type="button"
              className={`sacred-showcase-indicator${index === activeIndex ? ' is-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>

        <div className="sacred-showcase-viewport">
          <div
            className="sacred-showcase-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <article
                key={image.src}
                className={`sacred-showcase-card${index === activeIndex ? ' is-active' : ''}`}
              >
                <div className="sacred-showcase-media">
                  <div className="sacred-showcase-image-shell">
                    <Image
                      className="sacred-showcase-image"
                      src={image.src}
                      alt={image.alt}
                      width={1400}
                      height={1000}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              className="sacred-showcase-control sacred-showcase-control-prev"
              onClick={goToPreviousSlide}
              aria-label="Previous slide"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <button
              type="button"
              className="sacred-showcase-control sacred-showcase-control-next"
              onClick={goToNextSlide}
              aria-label="Next slide"
            >
              <span aria-hidden="true">›</span>
            </button>
          </>
        ) : null}
      </div>
    </section>
  );
}
