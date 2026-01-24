export const LOADING_OVERLAY_BASE = 'fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[1005] backdrop-blur-sm';
export const LOADING_OVERLAY_DEFAULT_BG = 'bg-black/30';

export const LOADING_SIZES = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
} as const;

export const LOADING_TEXT_SIZES = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
} as const;

export const LOADING_DOT_SIZES = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
} as const;

export const LOADING_DEFAULT_SPINNER_COLOR = '#3B82F6'; // blue-500
export const LOADING_DEFAULT_TEXT_COLOR = 'text-white';
export const LOADING_DEFAULT_SIZE = 'md';
export const LOADING_DEFAULT_VARIANT = 'spinner';

export const LOADING_DISPLAY_NAME = 'Loading';
