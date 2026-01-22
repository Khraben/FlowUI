import React from 'react';
import { InputVariant, InputSize } from '../types/Input.types';

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
  bg?: string;
  textColor?: string;
  borderColor?: string;
  focusBorderColor?: string;
  focusShadow?: string;
  labelColor?: string;
  labelActiveColor?: string;
  iconColor?: string;
  iconHoverColor?: string;
  placeholderColor?: string;
}
