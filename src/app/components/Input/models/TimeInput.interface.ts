import React from 'react';
import { InputSize } from '../types/Input.types';

export interface TimeInputProps {
  variant?: 'time';
  size?: InputSize;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  startHour?: number;
  endHour?: number;
  interval?: number;
  fullWidth?: boolean;
  baseClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  disableDefaultStyles?: boolean;
  className?: string;
}
