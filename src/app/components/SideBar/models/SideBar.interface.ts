import React from 'react';

export interface SideBarMenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  section?: 'top' | 'bottom';
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
  backgroundColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  toggleButtonBackgroundColor?: string;
  toggleButtonHoverBackgroundColor?: string;
  logoutTextColor?: string;
  logoutHoverBackgroundColor?: string;
  logoutHoverTextColor?: string;
  className?: string;
  disableDefaultStyles?: boolean;
}
