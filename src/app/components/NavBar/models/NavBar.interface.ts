import React from 'react';

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
  backgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  hoverTextColor?: string;
  height?: string;
  mobileBreakpoint?: string;
  className?: string;
  disableDefaultStyles?: boolean;
  showMobileMenu?: boolean;
  onMobileMenuToggle?: (isOpen: boolean) => void;
}
