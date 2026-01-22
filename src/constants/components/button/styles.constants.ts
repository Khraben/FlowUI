import { BUTTON_VARIANT, BUTTON_ROUNDED } from './variants.constants';
import { SIZE } from '../common.constants';
import { POSITION } from '../common.constants';

export const BUTTON_BASE_STYLES =
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed border-2';

export const BUTTON_VARIANT_STYLES = {
  [BUTTON_VARIANT.PRIMARY]: '',
  [BUTTON_VARIANT.SECONDARY]: '',
  [BUTTON_VARIANT.SUCCESS]: '',
  [BUTTON_VARIANT.DANGER]: '',
  [BUTTON_VARIANT.CLOSE]: 'hover:rotate-90 rounded-full w-10 h-10 sm:w-9 sm:h-9',
  [BUTTON_VARIANT.CLEAR]:
    'absolute right-[2.8125rem] top-1/2 -translate-y-1/2 z-10 rounded-full min-w-[1.5rem] min-h-[1.5rem] md:right-10 md:min-w-[1.375rem] md:min-h-[1.375rem] sm:right-[2.1875rem] sm:min-w-[1.25rem] sm:min-h-[1.25rem] max-xs:right-[1.875rem] max-xs:min-w-[1.125rem] max-xs:min-h-[1.125rem]',
  [BUTTON_VARIANT.ICON]: '',
};

export const BUTTON_SIZE_STYLES = {
  [BUTTON_VARIANT.ICON]: {
    [SIZE.SM]: 'p-1.5 text-xs md:p-1 md:text-[0.6875rem]',
    [SIZE.MD]: 'p-2 text-sm md:p-1.5 md:text-xs max-xs:p-1 max-xs:text-[0.6875rem]',
    [SIZE.LG]: 'p-3 text-base md:p-2.5 md:text-sm max-xs:p-2 max-xs:text-xs',
  },
  [BUTTON_VARIANT.CLOSE]: {
    [SIZE.SM]: '',
    [SIZE.MD]: '',
    [SIZE.LG]: '',
  },
  [BUTTON_VARIANT.CLEAR]: {
    [SIZE.SM]: 'p-1 text-xs md:text-[0.6875rem]',
    [SIZE.MD]: 'p-1 text-base md:text-sm sm:text-sm max-xs:text-xs',
    [SIZE.LG]: 'p-1 text-lg md:text-base sm:text-sm max-xs:text-xs',
  },
  default: {
    [SIZE.SM]: 'px-4 py-2 text-xs md:px-3 md:py-1.5 md:text-[0.6875rem]',
    [SIZE.MD]:
      'px-5 py-2.5 text-sm md:px-4 md:py-2 md:text-xs max-xs:px-3 max-xs:py-1.5 max-xs:text-[0.6875rem]',
    [SIZE.LG]:
      'px-6 py-3 text-base md:px-5 md:py-2.5 md:text-sm max-xs:px-4 max-xs:py-2 max-xs:text-xs',
  },
};

export const BUTTON_ROUNDED_MAP = {
  [BUTTON_ROUNDED.NONE]: 'rounded-none',
  [BUTTON_ROUNDED.SM]: 'rounded-sm',
  [BUTTON_ROUNDED.MD]: 'rounded-md',
  [BUTTON_ROUNDED.LG]: 'rounded-lg',
  [BUTTON_ROUNDED.FULL]: 'rounded-full',
};

export const BUTTON_ROUNDED_DEFAULTS = {
  [BUTTON_VARIANT.PRIMARY]: 'rounded-[1.5625rem]',
  [BUTTON_VARIANT.SECONDARY]: 'rounded-[1.5625rem]',
  [BUTTON_VARIANT.SUCCESS]: 'rounded-[1.5625rem]',
  [BUTTON_VARIANT.DANGER]: 'rounded-[1.5625rem]',
  [BUTTON_VARIANT.CLOSE]: 'rounded-full',
  [BUTTON_VARIANT.CLEAR]: 'rounded-full',
  [BUTTON_VARIANT.ICON]: 'rounded-[1.5625rem]',
};

export const BUTTON_SPACING_STYLES = 'mx-1.5 mt-2.5';

export const BUTTON_FULL_WIDTH_STYLES = 'w-full';

export const BUTTON_LOADING_SPINNER_STYLES = 'animate-spin h-5 w-5';

export const BUTTON_ICON_SPACING = {
  [POSITION.LEFT]: 'mr-2',
  [POSITION.RIGHT]: 'ml-2',
};

export const BUTTON_LOADING_TEXT_SPACING = 'ml-2';
