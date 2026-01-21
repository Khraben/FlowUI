export const PREVIEW_CONFIG = {
  COMPONENTS_PER_PAGE: 6 as number,
  SCROLL_THRESHOLD: 300 as number,
  LOADING_DELAY: 500 as number,
} as const;

export const PREVIEW_TEXT = {
  TITLE: 'FlowUI Component Library',
  SUBTITLE: 'Professional Tailwind & Next.js components',
  TOTAL_LABEL: 'Total:',
  COMPONENTS_LABEL: 'components',
  LOADING_MESSAGE: 'Loading more components...',
  ALL_LOADED_TITLE: "You've seen them all! 🎉",
  ALL_LOADED_MESSAGE: (count: number, category: string) =>
    `${count} component${count !== 1 ? 's' : ''} in ${category}`,
  NO_COMPONENTS_TITLE: 'No components found',
  NO_COMPONENTS_MESSAGE: 'Try selecting a different category',
  FOOTER_TEXT: 'FlowUI Component Library - Built with Next.js, TypeScript & Tailwind CSS',
  VIEW_CODE_BUTTON: 'View Code →',
  COMPONENT_ID_LABEL: 'Component ID:',
} as const;

export const FILTER_CATEGORY = {
  ALL: 'All',
} as const;

export const SHOWCASE_STYLES = {
  CONTAINER:
    'bg-[#3C3F41] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-[#323232]',
  HEADER: {
    BASE: 'bg-gradient-to-r from-[#287BDE] to-[#6897BB] p-6 text-[#A9B7C6]',
    WRAPPER: 'flex items-center justify-between',
    TITLE: 'text-2xl font-bold mb-1 text-white',
    DESCRIPTION: 'text-[#A9B7C6] text-sm',
    CATEGORY:
      'bg-[#2B2B2B] border border-[#323232] px-3 py-1 rounded-full text-sm font-medium text-[#FFC66D]',
  },
  PREVIEW: {
    BASE: 'p-8 bg-[#2B2B2B]',
    STAGE:
      'flex items-center justify-center min-h-[200px] bg-[#313335] rounded-lg border-2 border-dashed border-[#323232] p-6',
  },
  FOOTER: {
    BASE: 'px-6 py-4 bg-[#2B2B2B] border-t border-[#323232]',
    WRAPPER: 'flex items-center justify-between text-sm text-[#808080]',
    BUTTON: 'text-[#6897BB] hover:text-[#287BDE] font-medium transition-colors',
  },
} as const;
