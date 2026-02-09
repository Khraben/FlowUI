import React from 'react';
import { ButtonVariant, ButtonSize } from '../types/Button.types';
import { BUTTON_ICON_POSITIONS, BUTTON_ROUNDED_OPTIONS } from '@/app/constants';
import { BaseColorConfig } from '@/app/types/colors';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: (typeof BUTTON_ICON_POSITIONS)[keyof typeof BUTTON_ICON_POSITIONS];
  isLoading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  rounded?: (typeof BUTTON_ROUNDED_OPTIONS)[keyof typeof BUTTON_ROUNDED_OPTIONS];
  children?: React.ReactNode;
  baseClassName?: string;
  variantClassName?: string;
  sizeClassName?: string;
  disableDefaultStyles?: boolean;

  // New simplified color system
  colors?: BaseColorConfig;

  // Optional overrides for specific use cases
  customBg?: string;
  customTextColor?: string;
  customBorderColor?: string;
}
