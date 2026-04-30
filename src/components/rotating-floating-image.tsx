'use client';

import { useEffect, useState } from 'react';

import { DraggableFloatingImage } from '@/components/draggable-floating-image';

type FloatingImageOption = {
  src: string;
  alt: string;
};

type RotatingFloatingImageProps = {
  className: string;
  imageClassName: string;
  fallback: FloatingImageOption;
  options: readonly FloatingImageOption[];
  pageKey: string;
  slotKey: string;
  width: number;
  height: number;
  cadenceDays?: number;
};

function hashString(value: string) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
}

function getRotationBucket(cadenceDays: number) {
  return Math.floor(Date.now() / (cadenceDays * 24 * 60 * 60 * 1000));
}

export function RotatingFloatingImage({
  className,
  imageClassName,
  fallback,
  options,
  pageKey,
  slotKey,
  width,
  height,
  cadenceDays = 3,
}: RotatingFloatingImageProps) {
  const [selectedImage, setSelectedImage] = useState<FloatingImageOption>(fallback);

  useEffect(() => {
    if (!options.length) {
      setSelectedImage(fallback);
      return;
    }

    const seed = hashString(`${pageKey}:${slotKey}`);
    const bucket = getRotationBucket(cadenceDays);
    const index = (seed + bucket) % options.length;

    setSelectedImage(options[index] ?? fallback);
  }, [cadenceDays, fallback, options, pageKey, slotKey]);

  return (
    <DraggableFloatingImage
      className={className}
      imageClassName={imageClassName}
      src={selectedImage.src}
      alt={selectedImage.alt}
      width={width}
      height={height}
    />
  );
}
