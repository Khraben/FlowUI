export const NAVBAR_DISPLAY_NAME = 'NavBar';

export const NAVBAR_HEIGHTS = {
  DEFAULT: '4rem',
  TABLET: '3.5rem',
  MOBILE: '3rem',
};

export const NAVBAR_COLORS = {
  BACKGROUND: '#FFFFFF',
  TEXT: '#374151',
  ACTIVE_TEXT: '#1E90FF',
  HOVER_TEXT: '#1E90FF',
  BORDER: 'rgba(0, 0, 0, 0.1)',
  MOBILE_MENU_BG: '#FFFFFF',
  MOBILE_OVERLAY: 'rgba(0, 0, 0, 0.5)',
};

export const NAVBAR_BASE_STYLES = {
  CONTAINER: 'fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300',
  CONTENT: 'mx-auto px-6 md:px-4 sm:px-3 flex items-center justify-between h-full',
  LOGO_CONTAINER: 'flex items-center gap-3 shrink-0',
  LOGO_IMAGE: 'h-8 w-auto md:h-7 sm:h-6',
  LOGO_TEXT: 'text-xl font-bold md:text-lg sm:text-base',
  LOGO_LINK:
    'flex items-center gap-3 no-underline cursor-pointer transition-opacity duration-300 hover:opacity-80',
  MENU_CONTAINER: 'hidden lg:flex items-center gap-8 md:gap-6',
  MENU_ITEM:
    'font-medium transition-all duration-300 no-underline cursor-pointer text-sm md:text-xs',
  ACTIONS_CONTAINER: 'hidden lg:flex items-center gap-3 md:gap-2',
  MOBILE_TOGGLE: 'lg:hidden p-2 cursor-pointer transition-all duration-300 rounded-lg',
  MOBILE_MENU: 'fixed inset-0 z-50 lg:hidden transition-all duration-300',
  MOBILE_OVERLAY: 'absolute inset-0',
  MOBILE_PANEL:
    'absolute top-0 right-0 h-full w-80 sm:w-72 shadow-2xl transition-transform duration-300',
  MOBILE_HEADER: 'flex items-center justify-between p-4 border-b',
  MOBILE_CLOSE: 'p-2 cursor-pointer transition-all duration-300 rounded-lg',
  MOBILE_NAV: 'flex flex-col p-4 gap-2',
  MOBILE_MENU_ITEM: 'font-medium transition-all duration-300 px-4 py-3 rounded-lg text-sm',
  MOBILE_ACTIONS: 'flex flex-col gap-2 p-4 border-t mt-auto',
};

export const NAVBAR_ACTION_STYLES = {
  BASE: 'px-4 py-2 md:px-3 md:py-1.5 sm:px-2.5 sm:py-1.5 text-sm md:text-xs font-medium rounded-lg transition-all duration-300 cursor-pointer border-2',
  PRIMARY: 'text-white border-transparent',
  SECONDARY: 'border-transparent',
  OUTLINE: '',
};

export const NAVBAR_RESPONSIVE = {
  BREAKPOINT: '1024px',
  TABLET_MAX: '768px',
  MOBILE_MAX: '640px',
};
