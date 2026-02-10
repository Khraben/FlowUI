import React from 'react';
import { BaseColorConfig } from '@/app/types/colors';

export type DatePickerSize = 'sm' | 'md' | 'lg';

export interface DatePickerProps {
  size?: DatePickerSize;
  onClear?: () => void;
  calendarIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  fullWidth?: boolean;
  baseClassName?: string;
  wrapperClassName?: string;
  disableDefaultStyles?: boolean;
  locale?: unknown;
  selected?: Date | null;
  onChange?:
    | ((date: Date | null, event?: React.SyntheticEvent<unknown> | undefined) => void)
    | ((
        dates: Date[] | null,
        event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> | undefined,
      ) => void);
  placeholderText?: string;
  dateFormat?: string;
  disabled?: boolean;
  readOnly?: boolean;
  minDate?: Date | null;
  maxDate?: Date | null;
  filterDate?: (date: Date) => boolean;
  includeDates?: Date[];
  excludeDates?: Date[];
  highlightDates?: Date[];
  showMonthDropdown?: boolean;
  showYearDropdown?: boolean;
  showMonthYearPicker?: boolean;
  dropdownMode?: 'scroll' | 'select';
  showTimeSelect?: boolean;
  timeFormat?: string;
  timeIntervals?: number;
  timeCaption?: string;
  showTimeSelectOnly?: boolean;
  dateFormatCalendar?: string;
  monthsShown?: number;
  inline?: boolean;
  fixedHeight?: boolean;
  selectsRange?: boolean;
  startDate?: Date | null;
  endDate?: Date | null;
  selectsStart?: boolean;
  selectsEnd?: boolean;
  isClearable?: boolean;
  clearButtonClassName?: string;
  shouldCloseOnSelect?: boolean;
  showPopperArrow?: boolean;
  autoComplete?: string;
  className?: string;
  label?: string;
  labelStyle?: React.CSSProperties;

  // New simplified color system
  colors?: BaseColorConfig;

  // Optional overrides for specific use cases
  customBg?: string;
  customTextColor?: string;
  customBorderColor?: string;
}
