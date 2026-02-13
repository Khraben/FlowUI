import type { BaseColorConfig } from '@/app/types/colors';

export interface GalleryImage {
  id?: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface GalleryProps {
  images: GalleryImage[];
  batchSize?: number;
  enableAnimation?: boolean;
  className?: string;
  disableDefaultStyles?: boolean;
  forceColumnCount?: number;
  gap?: string;

  colors?: BaseColorConfig;
  customBorderColor?: string;
  customSkeletonBg?: string;
  customOverlayColor?: string;
}

export interface GalleryItemProps {
  image: GalleryImage;
  enableAnimation: boolean;
  borderColor: string;
  skeletonBg: string;
  overlayColor: string;
}
