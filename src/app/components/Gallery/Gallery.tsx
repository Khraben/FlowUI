'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { GalleryProps, GalleryImage, GalleryItemProps } from './models/Gallery.interface';
import {
  GALLERY_DISPLAY_NAME,
  GALLERY_DEFAULTS,
  GALLERY_ANIMATION,
  GALLERY_LAYOUT,
  GALLERY_ITEM,
} from '@/app/constants/components/gallery/styles.constants';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { adjustOpacity, lightenColor } from '@/app/utils/colorUtils';

// Internal GalleryItem component
const GalleryItem = ({
  image,
  enableAnimation,
  borderColor,
  skeletonBg,
  overlayColor,
}: GalleryItemProps) => {
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const Wrapper = enableAnimation ? motion.div : 'div';

  const animationProps = enableAnimation
    ? {
        initial: GALLERY_ANIMATION.INITIAL,
        whileInView: GALLERY_ANIMATION.ANIMATE,
        viewport: { once: true, margin: GALLERY_DEFAULTS.ANIMATION_VIEWPORT_MARGIN },
        transition: { duration: GALLERY_ANIMATION.DURATION, ease: GALLERY_ANIMATION.EASE },
      }
    : {};

  return (
    <Wrapper {...animationProps} className={GALLERY_ITEM.WRAPPER}>
      <div
        className={GALLERY_ITEM.CONTAINER}
        style={{ borderColor }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!loaded && (
          <div className={GALLERY_ITEM.SKELETON} style={{ backgroundColor: skeletonBg }} />
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt ?? ''}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={GALLERY_ITEM.IMAGE}
          style={{
            opacity: loaded ? 1 : 0,
            transform: isHovered ? 'scale(1.03)' : 'scale(1)',
          }}
        />

        <div
          className={GALLERY_ITEM.OVERLAY}
          style={{
            backgroundColor: isHovered ? overlayColor : 'transparent',
          }}
        />
      </div>
    </Wrapper>
  );
};

export const Gallery = ({
  images,
  batchSize = GALLERY_DEFAULTS.BATCH_SIZE,
  enableAnimation = GALLERY_DEFAULTS.ENABLE_ANIMATION,
  className = '',
  disableDefaultStyles = false,
  colors,
  customBorderColor,
  customSkeletonBg,
  customOverlayColor,
}: GalleryProps) => {
  const [visibleImages, setVisibleImages] = useState<GalleryImage[]>([]);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Use default colors if not provided
  const colorConfig = colors || DEFAULT_COLOR_CONFIG;

  // Calculate dynamic colors
  const galleryColors = useMemo(() => {
    const borderColor = customBorderColor || adjustOpacity(colorConfig.primary, 0.1);
    const skeletonBg = customSkeletonBg || lightenColor(colorConfig.secondary, 50);
    const overlayColor = customOverlayColor || adjustOpacity(colorConfig.secondary, 0);

    return {
      border: borderColor,
      skeleton: skeletonBg,
      overlay: overlayColor,
      overlayHover: adjustOpacity(colorConfig.secondary, 0.2),
    };
  }, [colorConfig, customBorderColor, customSkeletonBg, customOverlayColor]);

  useEffect(() => {
    setVisibleImages(images.slice(0, batchSize));
  }, [images, batchSize]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleImages((prev) => {
            const next = images.slice(0, prev.length + batchSize);
            return next.length === prev.length ? prev : next;
          });
        }
      },
      { rootMargin: GALLERY_DEFAULTS.OBSERVER_ROOT_MARGIN },
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [images, batchSize]);

  const containerClasses = disableDefaultStyles
    ? className
    : `${GALLERY_LAYOUT.CONTAINER} ${className}`.trim();

  return (
    <section>
      <div className={containerClasses}>
        {visibleImages.map((img) => (
          <GalleryItem
            key={img.id}
            image={img}
            enableAnimation={enableAnimation}
            borderColor={galleryColors.border}
            skeletonBg={galleryColors.skeleton}
            overlayColor={galleryColors.overlayHover}
          />
        ))}
      </div>

      {visibleImages.length < images.length && (
        <div ref={loaderRef} className={GALLERY_LAYOUT.LOADER_HEIGHT} />
      )}
    </section>
  );
};

Gallery.displayName = GALLERY_DISPLAY_NAME;
