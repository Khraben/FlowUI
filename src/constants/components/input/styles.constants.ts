import { SIZE } from '../../common/sizes.constants';

export const INPUT_BASE_STYLES =
  'peer w-full border-2 rounded-[1.5625rem] outline-none transition-all duration-300 bg-[#313335] text-[#A9B7C6] placeholder:text-transparent';

export const INPUT_BORDER_STYLES =
  'border-[#4A5A6A] focus:border-[#00D4FF] focus:shadow-[0_0_0_0.1875rem_rgba(0,212,255,0.1)]';

export const INPUT_SIZE_STYLES = {
  [SIZE.SM]: 'py-2 px-2.5 text-xs max-2xs:py-[0.5625rem] max-2xs:px-2 max-2xs:text-[0.6875rem]',
  [SIZE.MD]:
    'py-2.5 px-3 text-sm md:text-[0.8125rem] max-xs:py-[0.5625rem] max-xs:px-2.5 max-xs:text-xs',
  [SIZE.LG]: 'py-3 px-[0.9375rem] text-sm',
};

export const INPUT_LABEL_BASE_STYLES =
  'absolute left-4 top-3 text-base text-[#808080] transition-all duration-300 ease-in-out pointer-events-none peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-[#00D4FF] peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#00D4FF]';

export const INPUT_ICON_BUTTON_BASE =
  'absolute top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[#00D4FF] transition-colors duration-300 hover:text-[#00B8E6] flex items-center justify-center';

export const INPUT_ICON_BUTTON_POSITIONS = {
  RIGHT: 'right-2 md:right-2 max-xs:right-1.5',
  CLEAR: 'right-8 md:right-7 max-xs:right-6',
};

export const INPUT_ICON_SIZES = {
  [SIZE.SM]: 'min-w-[1.0625rem] min-h-[1.0625rem]',
  [SIZE.MD]: 'min-w-[1.125rem] min-h-[1.125rem] md:min-w-[1.1875rem] md:min-h-[1.1875rem]',
  [SIZE.LG]: 'min-w-5 min-h-5 md:min-w-6 md:min-h-6',
};

export const INPUT_SELECT_PADDING = 'pr-8 md:pr-7 max-xs:pr-6';

export const INPUT_SEARCH_PADDING = 'pr-10 md:pr-9 max-xs:pr-8';

export const INPUT_ICON_STATIC_STYLES = 'absolute pointer-events-none z-[1]';

export const INPUT_CLEAR_BUTTON_STYLES = 'z-[2] p-1 rounded-full hover:bg-[#00D4FF]/10';

export const INPUT_SELECT_APPEARANCE = 'appearance-none cursor-pointer';

export const INPUT_WRAPPER_STYLES = 'relative mb-2.5 w-full';

export const INPUT_PASSWORD_BUTTON_SIZES = {
  [SIZE.SM]: 'text-[0.6875rem] max-2xs:text-[0.6875rem]',
  [SIZE.MD]: 'text-xs md:text-[0.8125rem] max-xs:text-xs',
  [SIZE.LG]: 'text-sm',
};
