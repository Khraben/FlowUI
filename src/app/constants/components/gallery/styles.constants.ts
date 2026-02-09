// Gallery Display Name
export const GALLERY_DISPLAY_NAME = 'Gallery';

// Gallery Defaults
export const GALLERY_DEFAULTS = {
  BATCH_SIZE: 12,
  ENABLE_ANIMATION: true,
  OBSERVER_ROOT_MARGIN: '200px',
  ANIMATION_VIEWPORT_MARGIN: '-50px',
} as const;

// Gallery Animation
export const GALLERY_ANIMATION = {
  INITIAL: { opacity: 0, y: 20 },
  ANIMATE: { opacity: 1, y: 0 },
  DURATION: 0.4,
  EASE: 'easeOut',
} as const;

// Gallery Layout
export const GALLERY_LAYOUT = {
  CONTAINER: 'columns-1 sm:columns-2 lg:columns-3 gap-4',
  LOADER_HEIGHT: 'h-24',
} as const;

// Gallery Item Styles
export const GALLERY_ITEM = {
  WRAPPER: 'mb-4 break-inside-avoid',
  CONTAINER: 'relative overflow-hidden rounded-xl border bg-gray-100 cursor-pointer',
  SKELETON: 'absolute inset-0 animate-pulse',
  IMAGE: 'w-full h-auto transition-all duration-500 ease-out',
  OVERLAY: 'pointer-events-none absolute inset-0 transition-colors duration-300',
} as const;

// Gallery Border
export const GALLERY_BORDER = {
  RADIUS: 'rounded-xl',
  WIDTH: 'border',
} as const;

// Gallery Hover
export const GALLERY_HOVER = {
  SCALE: 'group-hover:scale-[1.03]',
  TRANSITION: 'transition-all duration-500 ease-out',
} as const;
