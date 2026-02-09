export const SIDEBAR_DISPLAY_NAME = 'SideBar';

export const SIDEBAR_WIDTHS = {
  OPEN: '17.5rem',
  CLOSED: '4.375rem',
  OPEN_TABLET: '20rem',
  CLOSED_TABLET: '3.75rem',
  OPEN_MOBILE: '100vw',
  CLOSED_MOBILE: '3.125rem',
} as const;

export const SIDEBAR_COLORS = {
  BACKGROUND: 'var(--color-primary)',
  TEXT: 'var(--color-text-light)',
  HOVER_BACKGROUND: 'var(--color-hover-surface)',
  TOGGLE_BUTTON_BG: 'var(--color-transparent-white-2)',
  TOGGLE_BUTTON_HOVER_BG: 'var(--color-transparent-white-3)',
  LOGOUT_TEXT: 'var(--color-error-light)',
  LOGOUT_HOVER_BG: 'var(--color-hover-error)',
  LOGOUT_HOVER_TEXT: 'var(--color-error)',
  TRANSPARENT: 'transparent',
} as const;

export const SIDEBAR_SECTIONS = {
  TOP: 'top',
  BOTTOM: 'bottom',
} as const;

export const SIDEBAR_BASE_STYLES = {
  CONTAINER:
    'fixed top-0 left-0 h-screen flex flex-col shadow-[0.125rem_0_0.3125rem_var(--color-shadow)] transition-[width] duration-300 ease-in-out z-[100] overflow-y-auto overflow-x-visible pt-[3.75rem] pb-5 px-0',
  LIST: 'list-none w-full p-0 m-0 flex flex-col flex-1',
  LIST_ITEM: 'w-full relative',
} as const;

export const SIDEBAR_TOGGLE_BUTTON_STYLES = {
  BASE: 'absolute top-3 border-none p-2 cursor-pointer rounded-lg flex items-center justify-center z-[100] w-10 h-10 transition-all duration-300',
  OPEN: 'left-3',
  CLOSED: 'left-1/2 -translate-x-1/2',
  TABLET: 'max-[48rem]:top-2.5 max-[48rem]:w-9 max-[48rem]:h-9',
  MOBILE: 'max-[30rem]:top-2 max-[30rem]:w-8 max-[30rem]:h-8',
} as const;

export const SIDEBAR_MENU_ITEM_STYLES = {
  BASE: 'bg-transparent border-none no-underline font-bold flex items-center w-full rounded-none transition-all duration-300 cursor-pointer text-base min-h-12 relative',
  OPEN: 'px-5 py-3 justify-start',
  CLOSED: 'p-3 justify-center',
  TABLET_BASE: 'max-[48rem]:text-[0.9375rem] max-[48rem]:min-h-[3.125rem]',
  TABLET_OPEN: 'max-[48rem]:px-[1.5625rem] max-[48rem]:py-[0.9375rem]',
  TABLET_CLOSED: 'max-[48rem]:p-[0.9375rem]',
  MOBILE_BASE: 'max-[30rem]:text-sm max-[30rem]:min-h-[3.25rem]',
  MOBILE_OPEN: 'max-[30rem]:px-5 max-[30rem]:py-[1.125rem]',
  MOBILE_CLOSED: 'max-[30rem]:p-[1.125rem]',
} as const;

export const SIDEBAR_ICON_STYLES = {
  BASE: 'text-xl shrink-0',
  OPEN: 'mr-3',
  CLOSED: 'mr-0',
  TABLET: 'max-[48rem]:text-lg',
  MOBILE: 'max-[30rem]:text-base',
} as const;

export const SIDEBAR_TEXT_STYLES = {
  BASE: 'whitespace-nowrap overflow-hidden transition-opacity duration-300',
} as const;

export const SIDEBAR_BOTTOM_SECTION_STYLES = {
  BASE: 'mt-auto',
} as const;

export const SIDEBAR_RESPONSIVE_WIDTH_STYLES = {
  TABLET_OPEN: 'max-[48rem]:w-80',
  TABLET_CLOSED: 'max-[48rem]:w-[3.75rem]',
  MOBILE_OPEN: 'max-[30rem]:w-screen',
  MOBILE_CLOSED: 'max-[30rem]:w-[3.125rem]',
} as const;

export const SIDEBAR_RESPONSIVE_PADDING_STYLES = {
  TABLET: 'max-[48rem]:pt-[3.4375rem]',
  MOBILE: 'max-[30rem]:pt-[3.125rem] max-[30rem]:pb-[0.9375rem]',
} as const;
