export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  CLOSE: 'close',
  CLEAR: 'clear',
  ICON: 'icon',
} as const;

export const BUTTON_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export const BUTTON_ICON_POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right',
} as const;

export const BUTTON_ROUNDED_OPTIONS = {
  NONE: 'none',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  FULL: 'full',
} as const;

export const BUTTON_BASE_STYLES = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed';

export const BUTTON_VARIANT_STYLES = {
  [BUTTON_VARIANTS.PRIMARY]: 'bg-[#1E90FF] text-white border-none hover:bg-[#187BCD] disabled:bg-[#5A5A5A] disabled:text-[#808080] focus:ring-[#1E90FF]',
  [BUTTON_VARIANTS.SECONDARY]: 'bg-transparent text-[#00D4FF] border-2 border-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#1A1A1A] disabled:bg-transparent disabled:border-[#5A5A5A] disabled:text-[#5A5A5A] focus:ring-[#00D4FF]',
  [BUTTON_VARIANTS.SUCCESS]: 'bg-[#00E676] text-[#1A1A1A] border-none hover:bg-[#00C965] disabled:bg-[#5A5A5A] disabled:text-[#808080] focus:ring-[#00E676]',
  [BUTTON_VARIANTS.DANGER]: 'bg-[#FF5252] text-white border-none hover:bg-[#E63946] disabled:bg-[#5A5A5A] disabled:text-[#808080] focus:ring-[#FF5252]',
  [BUTTON_VARIANTS.CLOSE]: 'bg-white/20 border-none text-white hover:bg-white/30 hover:rotate-90 rounded-full w-10 h-10 sm:w-9 sm:h-9',
  [BUTTON_VARIANTS.CLEAR]: 'absolute right-[2.8125rem] top-1/2 -translate-y-1/2 bg-transparent border-none text-[#00D4FF] hover:bg-[#00D4FF]/10 hover:text-[#00B8E6] z-10 rounded-full min-w-[1.5rem] min-h-[1.5rem] md:right-10 md:min-w-[1.375rem] md:min-h-[1.375rem] sm:right-[2.1875rem] sm:min-w-[1.25rem] sm:min-h-[1.25rem] max-xs:right-[1.875rem] max-xs:min-w-[1.125rem] max-xs:min-h-[1.125rem]',
  [BUTTON_VARIANTS.ICON]: 'bg-transparent text-[#FF6B35] border-2 border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white disabled:bg-transparent disabled:border-[#5A5A5A] disabled:text-[#5A5A5A] focus:ring-[#FF6B35]',
};

export const BUTTON_SIZE_STYLES = {
  [BUTTON_VARIANTS.ICON]: {
    [BUTTON_SIZES.SM]: 'p-1.5 text-xs md:p-1 md:text-[0.6875rem]',
    [BUTTON_SIZES.MD]: 'p-2 text-sm md:p-1.5 md:text-xs max-xs:p-1 max-xs:text-[0.6875rem]',
    [BUTTON_SIZES.LG]: 'p-3 text-base md:p-2.5 md:text-sm max-xs:p-2 max-xs:text-xs',
  },
  [BUTTON_VARIANTS.CLOSE]: {
    [BUTTON_SIZES.SM]: '',
    [BUTTON_SIZES.MD]: '',
    [BUTTON_SIZES.LG]: '',
  },
  [BUTTON_VARIANTS.CLEAR]: {
    [BUTTON_SIZES.SM]: 'p-1 text-xs md:text-[0.6875rem]',
    [BUTTON_SIZES.MD]: 'p-1 text-base md:text-sm sm:text-sm max-xs:text-xs',
    [BUTTON_SIZES.LG]: 'p-1 text-lg md:text-base sm:text-sm max-xs:text-xs',
  },
  default: {
    [BUTTON_SIZES.SM]: 'px-4 py-2 text-xs md:px-3 md:py-1.5 md:text-[0.6875rem]',
    [BUTTON_SIZES.MD]: 'px-5 py-2.5 text-sm md:px-4 md:py-2 md:text-xs max-xs:px-3 max-xs:py-1.5 max-xs:text-[0.6875rem]',
    [BUTTON_SIZES.LG]: 'px-6 py-3 text-base md:px-5 md:py-2.5 md:text-sm max-xs:px-4 max-xs:py-2 max-xs:text-xs',
  },
};

export const BUTTON_ROUNDED_MAP = {
  [BUTTON_ROUNDED_OPTIONS.NONE]: 'rounded-none',
  [BUTTON_ROUNDED_OPTIONS.SM]: 'rounded-sm',
  [BUTTON_ROUNDED_OPTIONS.MD]: 'rounded-md',
  [BUTTON_ROUNDED_OPTIONS.LG]: 'rounded-lg',
  [BUTTON_ROUNDED_OPTIONS.FULL]: 'rounded-full',
};

export const BUTTON_ROUNDED_DEFAULTS = {
  [BUTTON_VARIANTS.PRIMARY]: 'rounded-[1.5625rem]',
  [BUTTON_VARIANTS.SECONDARY]: 'rounded-md',
  [BUTTON_VARIANTS.SUCCESS]: 'rounded-[1.5625rem]',
  [BUTTON_VARIANTS.DANGER]: 'rounded-[1.5625rem]',
  [BUTTON_VARIANTS.CLOSE]: 'rounded-full',
  [BUTTON_VARIANTS.CLEAR]: 'rounded-full',
  [BUTTON_VARIANTS.ICON]: 'rounded-md',
};

export const BUTTON_SPACING_STYLES = 'mx-1.5 mt-2.5';

export const BUTTON_FULL_WIDTH_STYLES = 'w-full';

export const BUTTON_LOADING_SPINNER_STYLES = 'animate-spin h-5 w-5';

export const BUTTON_ICON_SPACING = {
  [BUTTON_ICON_POSITIONS.LEFT]: 'mr-2',
  [BUTTON_ICON_POSITIONS.RIGHT]: 'ml-2',
};

export const BUTTON_LOADING_TEXT_SPACING = 'ml-2';
