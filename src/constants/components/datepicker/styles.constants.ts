import { SIZE } from '../common.constants';

export const DATEPICKER_BASE_STYLES =
  'w-full border-2 rounded-[1.5625rem] outline-none transition-all duration-300 bg-[#313335] text-[#A9B7C6] cursor-pointer box-border';

export const DATEPICKER_BORDER_STYLES =
  'border-[#4A5A6A] focus:border-[#00D4FF] focus:shadow-[0_0_0_0.1875rem_rgba(0,212,255,0.1)]';

export const DATEPICKER_SIZE_STYLES = {
  [SIZE.SM]:
    'py-2 px-2.5 pr-8 text-xs max-2xs:py-[0.5625rem] max-2xs:px-2 max-2xs:pr-7 max-2xs:text-[0.6875rem]',
  [SIZE.MD]:
    'py-2.5 px-3 pr-10 text-sm md:text-[0.8125rem] max-xs:py-[0.5625rem] max-xs:px-2.5 max-xs:pr-9 max-xs:text-xs',
  [SIZE.LG]: 'py-3 px-[0.9375rem] pr-[2.8125rem] text-sm',
};

export const DATEPICKER_SIZE_STYLES_WITH_CLEAR = {
  [SIZE.SM]:
    'py-2 px-2.5 pr-[3.5rem] text-xs max-2xs:py-[0.5625rem] max-2xs:px-2 max-2xs:pr-[3rem] max-2xs:text-[0.6875rem]',
  [SIZE.MD]:
    'py-2.5 px-3 pr-[4rem] text-sm md:text-[0.8125rem] max-xs:py-[0.5625rem] max-xs:px-2.5 max-xs:pr-[3.5rem] max-xs:text-xs',
  [SIZE.LG]: 'py-3 px-[0.9375rem] pr-[4.5rem] text-sm',
};

export const DATEPICKER_PLACEHOLDER_STYLES = 'placeholder:text-[#808080]';

export const DATEPICKER_ICON_BUTTON_BASE =
  'absolute top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[#00D4FF] transition-colors duration-300 hover:text-[#00B8E6] flex items-center justify-center pointer-events-none z-[1]';

export const DATEPICKER_ICON_POSITIONS = {
  [SIZE.SM]: 'right-1.5 max-2xs:right-1',
  [SIZE.MD]: 'right-2 md:right-2 max-xs:right-1.5',
  [SIZE.LG]: 'right-3',
};

export const DATEPICKER_CLEAR_BUTTON_BASE =
  'absolute top-1/2 -translate-y-1/2 bg-transparent border-none text-[#00D4FF] cursor-pointer z-[2] p-1 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#00D4FF]/10 hover:text-[#00B8E6]';

export const DATEPICKER_CLEAR_POSITIONS = {
  [SIZE.SM]: 'right-6 min-w-[1.0625rem] min-h-[1.0625rem] max-2xs:right-5',
  [SIZE.MD]: 'right-8 min-w-[1.375rem] min-h-[1.375rem] md:right-7 max-xs:right-6',
  [SIZE.LG]: 'right-[2.75rem] min-w-6 min-h-6',
};

export const DATEPICKER_ICON_SIZES = {
  [SIZE.SM]: 'min-w-[0.875rem] min-h-[0.875rem] max-2xs:min-w-[0.75rem] max-2xs:min-h-[0.75rem]',
  [SIZE.MD]:
    'min-w-4 min-h-4 md:min-w-[1.125rem] md:min-h-[1.125rem] max-xs:min-w-[0.875rem] max-xs:min-h-[0.875rem]',
  [SIZE.LG]: 'min-w-5 min-h-5',
};

export const DATEPICKER_WRAPPER_STYLES = 'relative mb-2.5 w-full';

export const DATEPICKER_WIDTH_STYLES = {
  [SIZE.SM]: 'max-w-[12rem] md:max-w-[14rem]',
  [SIZE.MD]: 'max-w-[14rem] md:max-w-[16rem]',
  [SIZE.LG]: 'max-w-[16rem] md:max-w-[20rem]',
};

export const DATEPICKER_FULL_WIDTH_CLASS = 'w-full';

export const DATEPICKER_EMPTY_VALUE = '';

export const DATEPICKER_DISPLAY_NAME = 'DatePicker';
