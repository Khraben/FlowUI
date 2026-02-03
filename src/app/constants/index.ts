import { STRING, REGEX } from './components/common.constants';
import { SIZE } from './components/common.constants';
import { POSITION } from './components/common.constants';
import { SVG } from './components/common.constants';
import { CSS_VAR } from './components/common.constants';

export { STRING, REGEX, SIZE, POSITION, SVG, CSS_VAR };

import { BUTTON_SPINNER } from './components/button/spinner.constants';
export { BUTTON_VARIANT, BUTTON_ROUNDED } from './components/button/variants.constants';
export {
  BUTTON_BASE_STYLES,
  BUTTON_VARIANT_STYLES,
  BUTTON_SIZE_STYLES,
  BUTTON_ROUNDED_MAP,
  BUTTON_ROUNDED_DEFAULTS,
  BUTTON_SPACING_STYLES,
  BUTTON_FULL_WIDTH_STYLES,
  BUTTON_LOADING_SPINNER_STYLES,
  BUTTON_ICON_SPACING,
  BUTTON_LOADING_TEXT_SPACING,
} from './components/button/styles.constants';
export { BUTTON_SPINNER } from './components/button/spinner.constants';

export { BUTTON_VARIANT as BUTTON_VARIANTS } from './components/button/variants.constants';
export { SIZE as BUTTON_SIZES } from './components/common.constants';
export { POSITION as BUTTON_ICON_POSITIONS } from './components/common.constants';
export { BUTTON_ROUNDED as BUTTON_ROUNDED_OPTIONS } from './components/button/variants.constants';

import { INPUT_TIME, INPUT_AUTOCOMPLETE } from './components/input/metadata.constants';
export { INPUT_VARIANT } from './components/input/variants.constants';
export {
  INPUT_BASE_STYLES,
  INPUT_BORDER_STYLES,
  INPUT_SIZE_STYLES,
  INPUT_LABEL_BASE_STYLES,
  INPUT_ICON_BUTTON_BASE,
  INPUT_ICON_BUTTON_POSITIONS,
  INPUT_ICON_SIZES,
  INPUT_SELECT_PADDING,
  INPUT_SEARCH_PADDING,
  INPUT_ICON_STATIC_STYLES,
  INPUT_CLEAR_BUTTON_STYLES,
  INPUT_SELECT_APPEARANCE,
  INPUT_WRAPPER_STYLES,
  INPUT_PASSWORD_BUTTON_SIZES,
} from './components/input/styles.constants';
export {
  INPUT_TIME,
  INPUT_AUTOCOMPLETE,
  INPUT_ICON_SIZES_PX,
} from './components/input/metadata.constants';

export { INPUT_VARIANT as INPUT_VARIANTS } from './components/input/variants.constants';
export { SIZE as INPUT_SIZES } from './components/common.constants';

export {
  DATEPICKER_BASE_STYLES,
  DATEPICKER_BORDER_STYLES,
  DATEPICKER_SIZE_STYLES,
  DATEPICKER_SIZE_STYLES_WITH_CLEAR,
  DATEPICKER_PLACEHOLDER_STYLES,
  DATEPICKER_ICON_BUTTON_BASE,
  DATEPICKER_ICON_POSITIONS,
  DATEPICKER_CLEAR_BUTTON_BASE,
  DATEPICKER_CLEAR_POSITIONS,
  DATEPICKER_ICON_SIZES,
  DATEPICKER_WRAPPER_STYLES,
  DATEPICKER_WIDTH_STYLES,
  DATEPICKER_FULL_WIDTH_CLASS,
  DATEPICKER_EMPTY_VALUE,
  DATEPICKER_DISPLAY_NAME,
} from './components/datepicker/styles.constants';
export {
  DATEPICKER_CALENDAR_SIZES,
  DATEPICKER_CALENDAR_Z_INDEX,
} from './components/datepicker/calendar.constants';

export { SIZE as DATEPICKER_SIZES } from './components/common.constants';

export {
  LOADING_SIZES,
  LOADING_DEFAULT_SPINNER_COLOR,
  LOADING_DEFAULT_SIZE,
  LOADING_DEFAULT_VARIANT,
} from './components/loading/styles.constants';

export {
  ACTION_ICON_SIZES,
  ACTION_ICON_ICON_SIZES,
  ACTION_ICON_DEFAULT_COLOR,
  ACTION_ICON_DEFAULT_HOVER_COLOR,
  ACTION_ICON_DEFAULT_HOVER_BG,
} from './components/actionicon/styles.constants';

export {
  ALL_LANGUAGES,
  DEFAULT_LANGUAGES,
  DEFAULT_AVAILABLE_LANGUAGES,
  DEFAULT_SELECTED_LANGUAGE,
  LANGUAGE_SELECTOR_DISPLAY_NAME,
} from './components/languageselector/languages.constants';
export {
  LANGUAGE_SELECTOR_BUTTON_SIZES,
  LANGUAGE_SELECTOR_FLAG_SIZES,
  LANGUAGE_SELECTOR_BUTTON_BASE,
  LANGUAGE_SELECTOR_BUTTON_BORDER,
  LANGUAGE_SELECTOR_DROPDOWN_BASE,
  LANGUAGE_SELECTOR_DROPDOWN_BG,
  LANGUAGE_SELECTOR_DROPDOWN_BORDER,
  LANGUAGE_SELECTOR_DROPDOWN_SHADOW,
  LANGUAGE_SELECTOR_ITEM_BASE,
  LANGUAGE_SELECTOR_ITEM_HOVER,
  LANGUAGE_SELECTOR_ACTIVE_ITEM,
  LANGUAGE_SELECTOR_FLAG_CONTAINER,
  LANGUAGE_SELECTOR_FLAG_BORDER,
  LANGUAGE_SELECTOR_FLAG_SCALE,
  LANGUAGE_SELECTOR_ITEM_TEXT,
  LANGUAGE_SELECTOR_ACTIVE_TEXT,
  LANGUAGE_SELECTOR_CHECK_ICON,
  LANGUAGE_SELECTOR_DROPDOWN_OFFSET,
} from './components/languageselector/styles.constants';

export { PREVIEW_COLORS } from './preview/colors.constants';
export { PREVIEW_CONFIG, SHOWCASE_STYLES } from './preview/config.constants';

export { COMPONENT_CATEGORIES } from './categories.constants';

export const BUTTON_EMPTY_VALUE = STRING.EMPTY;
export const BUTTON_WHITESPACE_REGEX = REGEX.WHITESPACE;
export const BUTTON_SINGLE_SPACE = STRING.SINGLE_SPACE;
export const BUTTON_SVG_NAMESPACE = SVG.NAMESPACE;
export const BUTTON_SVG_VIEWBOX = SVG.VIEWBOX;
export const BUTTON_SPINNER_CIRCLE = BUTTON_SPINNER.CIRCLE;
export const BUTTON_SPINNER_PATH_D = BUTTON_SPINNER.PATH_D;
export const BUTTON_OPACITY_VALUES = BUTTON_SPINNER.OPACITY;
export const BUTTON_SVG_FILL = SVG.FILL;
export const BUTTON_COLOR_METADATA = CSS_VAR.BUTTON;
export const INPUT_PLACEHOLDER_CHAR = STRING.SPACE;
export const INPUT_EMPTY_VALUE = STRING.EMPTY;
export const INPUT_TIME_PERIODS = INPUT_TIME.PERIODS;
export const INPUT_TIME_DEFAULTS = INPUT_TIME.DEFAULTS;
export const INPUT_TIME_FORMAT = INPUT_TIME.FORMAT;
export const INPUT_AUTOCOMPLETE_VALUES = INPUT_AUTOCOMPLETE;
export const INPUT_DISPLAY_NAME = 'Input';
export const SELECT_INPUT_DISPLAY_NAME = 'SelectInput';
export const TIME_INPUT_DISPLAY_NAME = 'TimeInput';
export const BUTTON_DISPLAY_NAME = 'Button';
export const INPUT_FULL_WIDTH_CLASS = 'w-full';
export const INPUT_NO_PADDING_CLASS = 'p-0';
export const INPUT_CENTER_VERTICAL_CLASSES = 'flex items-center justify-center';
export const INPUT_BUTTON_TYPE = 'button';

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
export { STATIC_COLORS } from '../../constants/staticColors.constants';
