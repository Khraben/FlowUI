import React from 'react';
import { ButtonVariant, ButtonSize } from '../types/Button.types';
import { BaseColorConfig } from '@/app/types/colors';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  children?: React.ReactNode;
  baseClassName?: string;
  variantClassName?: string;
  sizeClassName?: string;
  disableDefaultStyles?: boolean;

  colors?: BaseColorConfig;

  customBg?: string;
  customTextColor?: string;
  customBorderColor?: string;
}
