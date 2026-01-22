import React from 'react';
import { InputSize, TimeVariant } from '../types/Input.types';

export interface TimeInputProps {
  variant?: TimeVariant;
  size?: InputSize;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  startHour?: number;
  endHour?: number;
  interval?: number;
  selectIcon?: React.ReactNode;
  fullWidth?: boolean;
  baseClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  disableDefaultStyles?: boolean;
  className?: string;
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
