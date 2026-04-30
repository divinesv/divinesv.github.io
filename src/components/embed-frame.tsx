'use client';

import { useState } from 'react';

type EmbedFrameProps = {
  src: string;
  title: string;
  className?: string;
};

export function EmbedFrame({ src, title, className }: EmbedFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`embed-frame-shell${className ? ` ${className}` : ''}`}>
      {!isLoaded ? <div className="skeleton media-frame-skeleton" aria-hidden="true" /> : null}
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 320ms ease' }}
      />
    </div>
  );
}
