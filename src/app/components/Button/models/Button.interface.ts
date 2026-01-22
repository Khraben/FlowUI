import React from 'react';
import { ButtonVariant, ButtonSize } from '../types/Button.types';
import { BUTTON_ICON_POSITIONS, BUTTON_ROUNDED_OPTIONS } from '@/constants';

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
  bg?: string;
  textColor?: string;
  borderColor?: string;
  hoverBg?: string;
  hoverTextColor?: string;
  disabledBg?: string;
  disabledTextColor?: string;
  disabledBorderColor?: string;
  focusRing?: string;
}
