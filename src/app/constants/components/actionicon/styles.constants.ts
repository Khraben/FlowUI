export const ACTION_ICON_BASE =
  'bg-transparent border-none cursor-pointer transition-all duration-200 rounded-md inline-flex items-center justify-center hover:-translate-y-0.5 active:translate-y-0';

export const ACTION_ICON_SIZES = {
  sm: 'p-1 mx-0.5',
  md: 'p-1.5 mx-0.5',
  lg: 'p-2 mx-1',
} as const;

export const ACTION_ICON_ICON_SIZES = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
} as const;

export const ACTION_ICON_DEFAULT_COLOR = 'text-primary-600';
export const ACTION_ICON_DEFAULT_HOVER_COLOR = 'hover:text-primary-700';
export const ACTION_ICON_DEFAULT_HOVER_BG = 'hover:bg-primary-600/10';
export const ACTION_ICON_DISABLED_COLOR = 'text-gray-400';
export const ACTION_ICON_DISABLED_CURSOR = 'cursor-not-allowed opacity-50';
export const ACTION_ICON_ICON_HOVER_SCALE = 'transition-transform duration-200 hover:scale-110';

export const ACTION_ICON_DISPLAY_NAME = 'ActionIcon';
