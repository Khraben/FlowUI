import React from 'react';
import { InputSize, TimeVariant } from '../types/Input.types';
import { BaseColorConfig } from '@/app/types/colors';

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

  // New simplified color system
  colors?: BaseColorConfig;

  // Optional overrides for specific use cases
  customBg?: string;
  customTextColor?: string;
  customBorderColor?: string;
}
