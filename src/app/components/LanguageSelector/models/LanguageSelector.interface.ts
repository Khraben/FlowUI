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

  colors?: BaseColorConfig;

  customBorderColor?: string;
  customBgColor?: string;
  customTextColor?: string;
}
