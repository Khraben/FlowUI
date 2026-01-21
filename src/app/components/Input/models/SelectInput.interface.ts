import React from 'react';
import { InputSize } from '../types/Input.types';

export interface SelectInputProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'size'
> {
  variant?: 'select';
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
}
