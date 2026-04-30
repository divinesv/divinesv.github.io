'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';
import type { DevotionalImage } from '@/lib/devotional-images';

type DevotionalGalleryProps = {
  eyebrow: string;
  title: string;
  images: DevotionalImage[];
};

const AUTOPLAY_INTERVAL_MS = 6800;

export function DevotionalGallery({ eyebrow, title, images }: DevotionalGalleryProps) {
  const realCount = images.length;
  const [position, setPosition] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const realIndex =
    realCount === 0
      ? 0
      : position === 0
        ? realCount - 1
        : position === realCount + 1
          ? 0
          : position - 1;

  useEffect(() => {
    setEnableTransition(false);
    setPosition(1);
  }, [images]);

  useEffect(() => {
    if (enableTransition) return;
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setEnableTransition(true));
    });
    return () => window.cancelAnimationFrame(id);
  }, [enableTransition]);

  useEffect(() => {
    if (realCount < 2 || isHovered) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const intervalId = window.setInterval(() => {
      setEnableTransition(true);
      setPosition((current) => current + 1);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [realCount, isHovered]);

  if (!images.length) {
    return null;
  }

  const goToSlide = (index: number) => {
    setEnableTransition(true);
    setPosition(index + 1);
  };

  const goToPreviousSlide = () => {
    setEnableTransition(true);
    setPosition((current) => current - 1);
  };

  const goToNextSlide = () => {
    setEnableTransition(true);
    setPosition((current) => current + 1);
  };

  const handleTrackTransitionEnd = () => {
    if (position === realCount + 1) {
      setEnableTransition(false);
      setPosition(1);
    } else if (position === 0) {
      setEnableTransition(false);
      setPosition(realCount);
    }
  };

  const renderCard = (image: DevotionalImage, key: string, isActive: boolean, ariaHidden = false) => (
    <article
      key={key}
      className={`sacred-showcase-card${isActive ? ' is-active' : ''}`}
      aria-hidden={ariaHidden || undefined}
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
  );

  const ghostPrev = images[realCount - 1];
  const ghostNext = images[0];

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
              className={`sacred-showcase-indicator${index === realIndex ? ' is-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === realIndex}
            />
          ))}
        </div>

        <div className="sacred-showcase-viewport">
          <div
            className="sacred-showcase-track"
            style={{
              transform: `translateX(-${position * 100}%)`,
              transition: enableTransition ? undefined : 'none',
            }}
            onTransitionEnd={handleTrackTransitionEnd}
          >
            {renderCard(ghostPrev, 'ghost-prev', position === 0, true)}
            {images.map((image, index) =>
              renderCard(
                image,
                image.src,
                index === realIndex && position !== 0 && position !== realCount + 1,
              ),
            )}
            {renderCard(ghostNext, 'ghost-next', position === realCount + 1, true)}
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
              <ChevronLeftIcon />
            </button>

            <button
              type="button"
              className="sacred-showcase-control sacred-showcase-control-next"
              onClick={goToNextSlide}
              aria-label="Next slide"
            >
              <ChevronRightIcon />
            </button>
          </>
        ) : null}
      </div>
    </section>
  );
}
