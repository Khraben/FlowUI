import React from 'react';
import { BaseColorConfig } from '@/app/types/colors';

export interface SideBarMenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  section?: 'top' | 'bottom';
  isActive?: boolean;
}

export interface SideBarLogoutButton {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export interface SideBarProps {
  menuItems: SideBarMenuItem[];
  logoutButton?: SideBarLogoutButton;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  openWidth?: string;
  closedWidth?: string;

  // Language selector
  languageSelector?: {
    selectedLanguage?: string;
    onLanguageChange?: (languageKey: string) => void;
    availableLanguages?: string[];
  };

  // New simplified color system
  colors?: BaseColorConfig;

  // Optional overrides for specific customization
  customBg?: string;
  customTextColor?: string;
  customHoverBg?: string;
  customToggleBtnBg?: string;
  customToggleBtnHoverBg?: string;
  customLogoutTextColor?: string;
  customLogoutHoverBg?: string;
  customLogoutHoverTextColor?: string;
}
