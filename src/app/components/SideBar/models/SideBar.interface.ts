import React from 'react';
import { BaseColorConfig } from '@/app/types/colors';

export interface SideBarMenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
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

  languageSelector?: {
    selectedLanguage?: string;
    onLanguageChange?: (languageKey: string) => void;
    availableLanguages?: string[];
  };

  colors?: BaseColorConfig;

  customBg?: string;
  customTextColor?: string;
  customHoverBg?: string;
  customToggleBtnBg?: string;
  customToggleBtnHoverBg?: string;
  customLogoutTextColor?: string;
  customLogoutHoverBg?: string;
  customLogoutHoverTextColor?: string;
}
