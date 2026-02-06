export const PREVIEW_CONFIG = {
  COMPONENTS_PER_PAGE: 9 as number,
  SCROLL_THRESHOLD: 300 as number,
  LOADING_DELAY: 500 as number,
} as const;

export const SHOWCASE_STYLES = {
  CONTAINER:
    'bg-[#3C3F41] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-[#323232]',
  HEADER: {
    CONTAINER: 'bg-[#2B2B2B] px-6 py-4 border-b border-[#323232]',
    TITLE: 'text-[#00D4FF] text-lg font-semibold mb-1',
    DESCRIPTION: 'text-[#A9B7C6] text-sm',
    ID: 'text-[#808080] text-xs mt-1',
    ID_VALUE: 'font-mono text-[#00D4FF]',
  },
  COMPONENT: {
    WRAPPER: 'bg-[#313335] p-8 flex items-center justify-center min-h-[12.5rem]',
  },
  CATEGORY: {
    BADGE: 'inline-block bg-[#1E90FF]/10 text-[#00D4FF] text-xs px-3 py-1 rounded-full mb-2',
  },
  PREVIEW: {
    BASE: 'bg-[#313335] p-6 overflow-hidden flex items-center justify-center min-h-[12.5rem] max-h-[12.5rem]',
    STAGE: 'flex items-center justify-center min-h-[12.5rem] bg-[#313335]',
  },
} as const;
