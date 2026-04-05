'use client';

import Image from 'next/image';
import { useRef, useState, type CSSProperties, type PointerEvent } from 'react';

type DraggableFloatingImageProps = {
  className: string;
  imageClassName: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Offset = {
  x: number;
  y: number;
};

export function DraggableFloatingImage({
  className,
  imageClassName,
  src,
  alt,
  width,
  height,
}: DraggableFloatingImageProps) {
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStateRef = useRef<{
    pointerStartX: number;
    pointerStartY: number;
    offsetStartX: number;
    offsetStartY: number;
  } | null>(null);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    event.preventDefault();

    dragStateRef.current = {
      pointerStartX: event.clientX,
      pointerStartY: event.clientY,
      offsetStartX: offset.x,
      offsetStartY: offset.y,
    };

    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const dragState = dragStateRef.current;
    if (!dragState) {
      return;
    }

    setOffset({
      x: dragState.offsetStartX + (event.clientX - dragState.pointerStartX),
      y: dragState.offsetStartY + (event.clientY - dragState.pointerStartY),
    });
  }

  function handlePointerEnd(event: PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    dragStateRef.current = null;
    setIsDragging(false);
  }

  const style = {
    '--drag-x': `${offset.x}px`,
    '--drag-y': `${offset.y}px`,
  } as CSSProperties;

  return (
    <div
      className={`${className} draggable-float${isDragging ? ' draggable-float-dragging' : ''}`}
      style={style}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
    >
      <Image className={imageClassName} src={src} alt={alt} width={width} height={height} draggable={false} />
    </div>
  );
}
