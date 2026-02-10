import React from 'react';
import { BaseColorConfig } from '@/app/types/colors';

export interface NavBarLogo {
  src?: string;
  alt?: string;
  text?: string;
  href?: string;
  onClick?: () => void;
}

export interface NavBarMenuItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export interface NavBarAction {
  id: string;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
}

export interface NavBarProps {
  logo?: NavBarLogo;
  menuItems?: NavBarMenuItem[];
  actions?: NavBarAction[];
  colors?: BaseColorConfig;
  customBgColor?: string;
  customTextColor?: string;
  customActiveColor?: string;
  customHoverColor?: string;
  height?: string;
  showMobileMenu?: boolean;
  onMobileMenuToggle?: (isOpen: boolean) => void;
}
