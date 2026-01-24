import { LanguageSelectorSize } from '@/app/components/LanguageSelector/types/LanguageSelector.types';

export const LANGUAGE_SELECTOR_BUTTON_SIZES: Record<LanguageSelectorSize, string> = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

export const LANGUAGE_SELECTOR_FLAG_SIZES: Record<LanguageSelectorSize, string> = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
};

export const LANGUAGE_SELECTOR_BUTTON_BASE =
  'rounded-full overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

export const LANGUAGE_SELECTOR_BUTTON_BORDER = 'border-2 border-primary-600';

export const LANGUAGE_SELECTOR_BUTTON_HOVER = 'hover:border-primary-700 hover:scale-110';

export const LANGUAGE_SELECTOR_DROPDOWN_BASE =
  'fixed w-48 rounded-lg overflow-hidden z-[150] animate-fadeIn';

export const LANGUAGE_SELECTOR_DROPDOWN_BG = 'bg-white';

export const LANGUAGE_SELECTOR_DROPDOWN_BORDER = 'border border-gray-200';

export const LANGUAGE_SELECTOR_DROPDOWN_SHADOW = 'shadow-lg';

export const LANGUAGE_SELECTOR_ITEM_BASE =
  'w-full flex items-center gap-3 px-4 py-3 transition-colors duration-150';

export const LANGUAGE_SELECTOR_ITEM_HOVER = 'hover:bg-gray-100';

export const LANGUAGE_SELECTOR_ACTIVE_ITEM = 'bg-primary-50';

export const LANGUAGE_SELECTOR_FLAG_CONTAINER =
  'rounded-full overflow-hidden flex-shrink-0 bg-white';

export const LANGUAGE_SELECTOR_FLAG_BORDER = 'border border-gray-300';

export const LANGUAGE_SELECTOR_FLAG_SCALE = 'scale-[1.45]';

export const LANGUAGE_SELECTOR_ITEM_TEXT = 'text-sm font-medium text-gray-700';

export const LANGUAGE_SELECTOR_ACTIVE_TEXT = 'text-primary-600';

export const LANGUAGE_SELECTOR_CHECK_ICON = 'w-5 h-5 text-primary-600 ml-auto';

export const LANGUAGE_SELECTOR_DROPDOWN_OFFSET = 8;
