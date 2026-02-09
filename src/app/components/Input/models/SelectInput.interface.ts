import React from 'react';
import { InputSize, SelectVariant } from '../types/Input.types';
import { BaseColorConfig } from '@/app/types/colors';

export interface SelectInputProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'size'
> {
  variant?: SelectVariant;
  size?: InputSize;
  label?: string;
  labelStyle?: React.CSSProperties;
  children?: React.ReactNode;
  selectIcon?: React.ReactNode;
  fullWidth?: boolean;
  baseClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  disableDefaultStyles?: boolean;

  // New simplified color system
  colors?: BaseColorConfig;

  // Optional overrides for specific use cases
  customBg?: string;
  customTextColor?: string;
  customBorderColor?: string;
}
