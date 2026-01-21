export const INPUT_VARIANTS = {
  TEXT: 'text',
  NUMBER: 'number',
  SEARCH: 'search',
  SELECT: 'select',
  PASSWORD: 'password',
  TIME: 'time',
  DATE: 'date',
} as const;

export const INPUT_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export const INPUT_BASE_STYLES =
  'peer w-full border-2 rounded-[1.5625rem] outline-none transition-all duration-300 bg-[#313335] text-[#A9B7C6] placeholder:text-transparent';

export const INPUT_BORDER_STYLES =
  'border-[#4A5A6A] focus:border-[#00D4FF] focus:shadow-[0_0_0_0.1875rem_rgba(0,212,255,0.1)]';

export const INPUT_SIZE_STYLES = {
  [INPUT_SIZES.SM]:
    'py-2 px-2.5 text-xs max-2xs:py-[0.5625rem] max-2xs:px-2 max-2xs:text-[0.6875rem]',
  [INPUT_SIZES.MD]:
    'py-2.5 px-3 text-sm md:text-[0.8125rem] max-xs:py-[0.5625rem] max-xs:px-2.5 max-xs:text-xs',
  [INPUT_SIZES.LG]: 'py-3 px-[0.9375rem] text-sm',
};

export const INPUT_LABEL_BASE_STYLES =
  'absolute left-4 top-3 text-base text-[#808080] transition-all duration-300 ease-in-out pointer-events-none peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-[#00D4FF] peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#00D4FF]';

export const INPUT_ICON_BUTTON_BASE =
  'absolute top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[#00D4FF] transition-colors duration-300 hover:text-[#00B8E6] flex items-center justify-center';

export const INPUT_ICON_BUTTON_POSITIONS = {
  RIGHT: 'right-[0.9375rem] md:right-3 max-xs:right-2.5 max-2xs:right-[0.5625rem]',
  CLEAR: 'right-[2.8125rem] md:right-10 max-xs:right-[2.1875rem] max-2xs:right-[1.875rem]',
};

export const INPUT_ICON_SIZES = {
  [INPUT_SIZES.SM]: 'min-w-[1.0625rem] min-h-[1.0625rem]',
  [INPUT_SIZES.MD]: 'min-w-[1.125rem] min-h-[1.125rem] md:min-w-[1.1875rem] md:min-h-[1.1875rem]',
  [INPUT_SIZES.LG]: 'min-w-5 min-h-5 md:min-w-6 md:min-h-6',
};

export const INPUT_SELECT_PADDING = 'pr-10 md:pr-[2.1875rem] max-xs:pr-8 max-2xs:pr-[1.875rem]';

export const INPUT_SEARCH_PADDING = 'pr-[2.8125rem] md:pr-10 max-xs:pr-[2.1875rem] max-2xs:pr-8';

export const INPUT_ICON_STATIC_STYLES = 'absolute pointer-events-none z-[1]';

export const INPUT_CLEAR_BUTTON_STYLES = 'z-[2] p-1 rounded-full hover:bg-[#00D4FF]/10';

export const INPUT_SELECT_APPEARANCE = 'appearance-none cursor-pointer';

export const INPUT_WRAPPER_STYLES = 'relative mb-2.5 w-full';

export const INPUT_PASSWORD_BUTTON_SIZES = {
  [INPUT_SIZES.SM]: 'text-[0.6875rem] max-2xs:text-[0.6875rem]',
  [INPUT_SIZES.MD]: 'text-xs md:text-[0.8125rem] max-xs:text-xs',
  [INPUT_SIZES.LG]: 'text-sm',
};
