import { SIZE } from '../../common/sizes.constants';

export const DATEPICKER_BASE_STYLES =
  'w-full border-2 rounded-[1.5625rem] outline-none transition-all duration-300 bg-[#313335] text-[#A9B7C6] cursor-pointer box-border';

export const DATEPICKER_BORDER_STYLES =
  'border-[#4A5A6A] focus:border-[#00D4FF] focus:shadow-[0_0_0_0.1875rem_rgba(0,212,255,0.1)]';

export const DATEPICKER_SIZE_STYLES = {
  [SIZE.SM]: 'py-2 px-2.5 pr-8 text-xs max-2xs:py-[0.5625rem] max-2xs:px-2 max-2xs:pr-7 max-2xs:text-[0.6875rem]',
  [SIZE.MD]:
    'py-2.5 px-3 pr-10 text-sm md:text-[0.8125rem] max-xs:py-[0.5625rem] max-xs:px-2.5 max-xs:pr-[2.1875rem] max-xs:text-xs',
  [SIZE.LG]: 'py-3 px-[0.9375rem] pr-[2.8125rem] text-sm',
};

export const DATEPICKER_PLACEHOLDER_STYLES = 'placeholder:text-[#808080]';

export const DATEPICKER_ICON_BUTTON_BASE =
  'absolute top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[#00D4FF] transition-colors duration-300 hover:text-[#00B8E6] flex items-center justify-center z-[1] pointer-events-none';

export const DATEPICKER_ICON_POSITIONS = {
  [SIZE.SM]: 'right-2.5 max-2xs:right-[0.5625rem]',
  [SIZE.MD]: 'right-3 md:right-3 max-xs:right-2.5',
  [SIZE.LG]: 'right-[0.9375rem]',
};

export const DATEPICKER_CLEAR_BUTTON_BASE =
  'absolute top-1/2 -translate-y-1/2 bg-transparent border-none text-[#00D4FF] cursor-pointer z-[2] p-1 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#00D4FF]/10 hover:text-[#00B8E6]';

export const DATEPICKER_CLEAR_POSITIONS = {
  [SIZE.SM]: 'right-7 min-w-[1.0625rem] min-h-[1.0625rem] max-2xs:right-6 max-2xs:min-w-4 max-2xs:min-h-4',
  [SIZE.MD]: 'right-10 min-w-[1.375rem] min-h-[1.375rem] md:right-10 max-xs:right-[2.1875rem] max-xs:min-w-5 max-xs:min-h-5',
  [SIZE.LG]: 'right-[2.8125rem] min-w-6 min-h-6',
};

export const DATEPICKER_ICON_SIZES = {
  [SIZE.SM]: 'text-xs max-2xs:text-[0.6875rem]',
  [SIZE.MD]: 'text-sm md:text-[0.8125rem] max-xs:text-xs',
  [SIZE.LG]: 'text-sm',
};

export const DATEPICKER_WRAPPER_STYLES = 'relative mb-2.5 w-full';

export const DATEPICKER_FULL_WIDTH_CLASS = 'w-full';

export const DATEPICKER_EMPTY_VALUE = '';

export const DATEPICKER_DISPLAY_NAME = 'DatePicker';
