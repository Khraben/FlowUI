import React from 'react';
import { InputVariant, InputSize } from '../types/Input.types';
import { BaseColorConfig } from '@/app/types/colors';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  label?: string;
  labelStyle?: React.CSSProperties;
  onClear?: () => void;
  showPasswordToggle?: boolean;
  passwordIcon?: React.ReactNode;
  passwordIconHidden?: React.ReactNode;
  searchIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  fullWidth?: boolean;
  baseClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  disableDefaultStyles?: boolean;

  colors?: BaseColorConfig;

  customBg?: string;
  customTextColor?: string;
  customBorderColor?: string;
}
