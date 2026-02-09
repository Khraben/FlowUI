import { BaseColorConfig } from '@/app/types/colors';

export interface LanguageSelectorProps {
  selectedLanguage?: string;
  onLanguageChange?: (languageKey: string) => void;
  availableLanguages?: string[];
  size?: 'sm' | 'md' | 'lg';
  buttonClassName?: string;
  dropdownClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  disableDefaultStyles?: boolean;

  // New simplified color system
  colors?: BaseColorConfig;

  // Optional overrides for specific customization
  customBorderColor?: string;
  customBgColor?: string;
  customTextColor?: string;
}
