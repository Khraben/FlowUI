// Components
export { default as Button } from '@/app/components/Button/Button';
export { default as Input, SelectInput, TimeInput } from '@/app/components/Input/Input';
export { DatePicker } from '@/app/components/DatePicker/DatePicker';
export { LanguageSelector } from '@/app/components/LanguageSelector/LanguageSelector';
export { ActionIcon } from '@/app/components/ActionIcon/ActionIcon';
export { Loading } from '@/app/components/Loading/Loading';
export { Table } from '@/app/components/Table/Table';
export { BaseModal } from '@/app/components/BaseModal/BaseModal';
export { default as ConfirmationModal } from '@/app/components/ConfirmationModal/ConfirmationModal';

// Flag components
export * from '@/flags';

// Types
export type { ButtonProps } from '@/app/components/Button/models/Button.interface';
export type { InputProps } from '@/app/components/Input/models/Input.interface';
export type { DatePickerProps } from '@/app/components/DatePicker/models/DatePicker.interface';
export type { LanguageSelectorProps } from '@/app/components/LanguageSelector/models/LanguageSelector.interface';
export type { ActionIconProps } from '@/app/components/ActionIcon/models/ActionIcon.interface';
export type { LoadingProps } from '@/app/components/Loading/models/Loading.interface';
export type { TableProps, TableColumn } from '@/app/components/Table/models/Table.interface';
export type {
  BaseModalProps,
  BaseModalStat,
  BaseModalTexts,
} from '@/app/components/BaseModal/models/BaseModal.interface';
export type { ConfirmationModalProps } from '@/app/components/ConfirmationModal/ConfirmationModal';

// Re-export component enums and types from constants
export { BUTTON_VARIANT, BUTTON_ROUNDED, SIZE, POSITION } from '@/app/constants';

export { INPUT_VARIANT } from '@/app/constants';

export {
  ALL_LANGUAGES,
  DEFAULT_LANGUAGES,
  DEFAULT_AVAILABLE_LANGUAGES,
  DEFAULT_SELECTED_LANGUAGE,
  LANGUAGE_SELECTOR_BUTTON_SIZES,
  LANGUAGE_SELECTOR_FLAG_SIZES,
} from '@/app/constants';

// Color system - New simplified color configuration
export type { BaseColorConfig, ExtendedColorConfig } from '@/app/types/colors';
export { hasExtendedColors, DEFAULT_COLOR_CONFIG } from '@/app/types/colors';

// Color utilities for dynamic color manipulation
export {
  isDarkColor,
  darkenColor,
  lightenColor,
  getHoverColor,
  getContrastColor,
  adjustOpacity,
} from '@/app/utils/colorUtils';
