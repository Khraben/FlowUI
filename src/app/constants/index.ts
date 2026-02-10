export {
  ALL_LANGUAGES,
  DEFAULT_LANGUAGES,
  DEFAULT_AVAILABLE_LANGUAGES,
  DEFAULT_SELECTED_LANGUAGE,
  LANGUAGE_SELECTOR_DISPLAY_NAME,
  LANGUAGE_SELECTOR_DROPDOWN_OFFSET,
} from './components/languageselector/languages.constants';

export { PREVIEW_CONFIG, SHOWCASE_STYLES } from './preview/config.constants';

export { COMPONENT_CATEGORIES } from './categories.constants';

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

export * from './categories.constants';
export * from './components/table/styles.constants';
export * from './components/modal/styles.constants';
export * from './components/gallery/styles.constants';
