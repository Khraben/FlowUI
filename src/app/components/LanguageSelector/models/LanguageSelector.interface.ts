import React from 'react';
import { LanguageOption } from '../types/LanguageSelector.types';

export interface LanguageSelectorProps {
  selectedLanguage?: string;
  onLanguageChange?: (languageKey: string) => void;
  availableLanguages?: string[];
  size?: 'sm' | 'md' | 'lg';
  buttonClassName?: string;
  dropdownClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  buttonBorder?: string;
  buttonHoverBorder?: string;
  buttonHoverScale?: string;
  dropdownBg?: string;
  dropdownBorder?: string;
  dropdownShadow?: string;
  itemHoverBg?: string;
  activeItemBg?: string;
  activeItemText?: string;
  itemText?: string;
  checkIconColor?: string;
  flagBorder?: string;
  disableDefaultStyles?: boolean;
}
