'use client';

import { useEffect, useRef, useState, useMemo, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import type { GalleryProps, GalleryImage, GalleryItemProps } from './models/Gallery.interface';
import {
  GALLERY_DISPLAY_NAME,
  GALLERY_DEFAULTS,
  GALLERY_ANIMATION,
} from '@/app/constants/components/gallery/styles.constants';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { adjustOpacity, lightenColor } from '@/app/utils/colorUtils';
import { ImagePlaceholder } from './ImagePlaceholder';

// Calculate aspect ratio padding for placeholder containers
const getAspectRatioPadding = (width?: number, height?: number): string => {
  if (width && height && width > 0) {
    const ratio = (height / width) * 100;
    return `${ratio}%`;
  }
  return '75%'; // Default 4:3 aspect ratio
};

// Helper functions for Gallery styles
const getColumnStyles = (): CSSProperties => ({
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1rem',
  flex: 1,
});

const getContainerStyles = (): CSSProperties => ({
  display: 'flex',
  gap: '1rem',
  width: '100%',
});

const getLoaderStyles = (): CSSProperties => ({
  height: '6rem',
});

const getItemWrapperStyles = (): CSSProperties => ({
  width: '100%',
});

const getItemContainerStyles = (aspectRatioPadding: string): CSSProperties => ({
  position: 'relative' as const,
  overflow: 'hidden',
  borderRadius: '0.75rem',
  border: '1px solid',
  backgroundColor: '#2a2d31',
  cursor: 'pointer',
  width: '100%',
  paddingBottom: aspectRatioPadding,
  height: 0,
});

const getPlaceholderContainerStyles = (): CSSProperties => ({
  position: 'absolute' as const,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const getImageStyles = (loaded: boolean, isHovered: boolean): CSSProperties => ({
  position: 'absolute' as const,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const,
  display: 'block',
  transition: 'all 500ms ease-out',
  opacity: loaded ? 1 : 0,
  transform: isHovered ? 'scale(1.03)' : 'scale(1)',
});

const getOverlayStyles = (isHovered: boolean, overlayColor: string): CSSProperties => ({
  pointerEvents: 'none' as const,
  position: 'absolute' as const,
  inset: 0,
  transition: 'background-color 300ms',
  backgroundColor: isHovered ? overlayColor : 'transparent',
});

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

  const aspectRatioPadding = getAspectRatioPadding(image.width, image.height);

  return (
    <Wrapper {...animationProps} style={getItemWrapperStyles()}>
      <div
        style={{
          ...getItemContainerStyles(aspectRatioPadding),
          borderColor,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!loaded && (
          <div style={getPlaceholderContainerStyles()}>
            <ImagePlaceholder
              width={image.width || 400}
              height={image.height || 300}
              backgroundColor={skeletonBg}
            />
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt ?? ''}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={getImageStyles(loaded, isHovered)}
        />

        <div style={getOverlayStyles(isHovered, overlayColor)} />
      </div>
    </Wrapper>
  );
};

// Distribute images across columns for masonry layout with balanced heights
const distributeImages = (images: GalleryImage[], columnCount: number): GalleryImage[][] => {
  const columns: GalleryImage[][] = Array.from({ length: columnCount }, () => []);
  const columnHeights: number[] = Array.from({ length: columnCount }, () => 0);

  images.forEach((image) => {
    // Find the column with the smallest height
    let minHeightIndex = 0;
    let minHeight = columnHeights[0];

    for (let i = 1; i < columnCount; i++) {
      if (columnHeights[i] < minHeight) {
        minHeight = columnHeights[i];
        minHeightIndex = i;
      }
    }

    // Add image to the shortest column
    columns[minHeightIndex].push(image);

    // Calculate estimated height based on image aspect ratio
    // Assume a standard column width and calculate proportional height
    let estimatedHeight = 400; // Default height

    if (image.width && image.height && image.width > 0) {
      // Calculate height maintaining aspect ratio for a 400px width
      estimatedHeight = (400 / image.width) * image.height;
    }

    // Add some margin to account for gaps
    columnHeights[minHeightIndex] += estimatedHeight + 16; // 16px gap
  });

  return columns;
};

export const Gallery = ({
  images,
  batchSize = GALLERY_DEFAULTS.BATCH_SIZE,
  enableAnimation = GALLERY_DEFAULTS.ENABLE_ANIMATION,
  forceColumnCount,
  colors,
  customBorderColor,
  customSkeletonBg,
  customOverlayColor,
}: GalleryProps) => {
  const [visibleImages, setVisibleImages] = useState<GalleryImage[]>([]);
  const [columnCount, setColumnCount] = useState(forceColumnCount || 3);
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

  // Handle responsive column count
  useEffect(() => {
    // Skip responsive updates if column count is forced
    if (forceColumnCount) return;

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        // Extra small mobile
        setColumnCount(1);
      } else if (width < 768) {
        // Small tablets and large phones
        setColumnCount(2);
      } else if (width < 1024) {
        // Medium tablets
        setColumnCount(3);
      } else if (width < 1440) {
        // Desktop
        setColumnCount(4);
      } else if (width < 1920) {
        // Large desktop
        setColumnCount(5);
      } else {
        // Ultra wide screens
        setColumnCount(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [forceColumnCount]);

  useEffect(() => {
    setVisibleImages(images.slice(0, batchSize));
  }, [images, batchSize]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const currentLoader = loaderRef.current;

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

    observer.observe(currentLoader);

    // Check if loader is already visible on mount (e.g., when component is filtered into view)
    const checkInitialVisibility = () => {
      const rect = currentLoader.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        setVisibleImages((prev) => {
          const next = images.slice(0, prev.length + batchSize);
          return next.length === prev.length ? prev : next;
        });
      }
    };

    // Small delay to ensure DOM is settled
    const timeoutId = setTimeout(checkInitialVisibility, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [images, batchSize]);

  const columns = useMemo(
    () => distributeImages(visibleImages, columnCount),
    [visibleImages, columnCount],
  );

  return (
    <section>
      <div style={getContainerStyles()}>
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} style={getColumnStyles()}>
            {column.map((img) => (
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
        ))}
      </div>

      {visibleImages.length < images.length && <div ref={loaderRef} style={getLoaderStyles()} />}
    </section>
  );
};

Gallery.displayName = GALLERY_DISPLAY_NAME;
