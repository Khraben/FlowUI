import { forwardRef, useEffect, useMemo, CSSProperties, useState } from 'react';
import { createPortal } from 'react-dom';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { Calendar, X } from 'lucide-react';
import { enUS } from 'date-fns/locale';
import { DatePickerProps } from './models/DatePicker.interface';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { adjustOpacity, getContrastColor, lightenColor } from '@/app/utils/colorUtils';
import 'react-datepicker/dist/react-datepicker.css';

const DATEPICKER_DISPLAY_NAME = 'DatePicker';
const DATEPICKER_EMPTY_VALUE = '';

const DATEPICKER_CALENDAR_SIZES = {
  MIN_WIDTH: '10.5rem',
  MONTH_PICKER_WIDTH: '10rem',
  BORDER_RADIUS: '0.625rem',
  BORDER_WIDTH: '0.125rem',
  DAY_SIZE: '2rem',
  DAY_MARGIN: '0.166rem',
  MONTH_MARGIN: '0.4rem',
  HEADER_PADDING_TOP: '0.5rem',
  HEADER_PADDING_SIDE: '0.25rem',
  NAVIGATION_SIZE: '2rem',
  NAVIGATION_TOP: '0.625rem',
  NAVIGATION_SIDE: '0.25rem',
  ICON_SIZE: '0.5rem',
  ICON_TOP: '0.375rem',
  MONTH_TEXT_WIDTH: '2.75rem',
  MONTH_TEXT_HEIGHT: '1.75rem',
  MONTH_GAP: '0.25rem',
  MONTH_PADDING: '0.5rem',
} as const;

const DATEPICKER_CALENDAR_Z_INDEX = '1000';

const getDatePickerSizeStyles = (size: string, showClearButton: boolean): CSSProperties => {
  const basePadding = {
    sm: {
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: '0.625rem',
      fontSize: '0.75rem',
    },
    md: {
      paddingTop: '0.625rem',
      paddingBottom: '0.625rem',
      paddingLeft: '0.75rem',
      fontSize: '0.875rem',
    },
    lg: {
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      paddingLeft: '0.9375rem',
      fontSize: '0.875rem',
    },
  };

  const paddingRight = showClearButton
    ? { sm: '3.5rem', md: '4rem', lg: '4.5rem' }
    : { sm: '2rem', md: '2.5rem', lg: '2.8125rem' };

  const sizeStyle = basePadding[size as keyof typeof basePadding] || basePadding.md;
  const pr = paddingRight[size as keyof typeof paddingRight] || paddingRight.md;

  return {
    ...sizeStyle,
    paddingRight: pr,
  };
};

const getLabelStyles = (
  hasValue: boolean,
  isFocused: boolean,
  customStyle?: CSSProperties,
): CSSProperties => {
  const baseStyles: CSSProperties = {
    position: 'absolute',
    left: '1rem',
    top: '0.75rem',
    fontSize: hasValue || isFocused ? '0.75rem' : '1rem',
    color: hasValue || isFocused ? 'var(--input-accent, #00D4FF)' : 'var(--input-label, #808080)',
    transition: 'all 300ms ease-in-out',
    pointerEvents: 'none',
    transform: hasValue || isFocused ? 'translateY(-1.75rem)' : 'translateY(0)',
  };

  return { ...baseStyles, ...customStyle };
};

const getIconPositionStyles = (size: string): CSSProperties => {
  const positions = {
    sm: { right: '0.375rem' },
    md: { right: '0.5rem' },
    lg: { right: '0.75rem' },
  };
  return positions[size as keyof typeof positions] || positions.md;
};

const getClearButtonPositionStyles = (size: string): CSSProperties => {
  const positions = {
    sm: { right: '1.5rem', minWidth: '1.0625rem', minHeight: '1.0625rem' },
    md: { right: '2rem', minWidth: '1.375rem', minHeight: '1.375rem' },
    lg: { right: '2.75rem', minWidth: '1.5rem', minHeight: '1.5rem' },
  };
  return positions[size as keyof typeof positions] || positions.md;
};

const getIconSizeStyles = (size: string): CSSProperties => {
  const sizes = {
    sm: { minWidth: '0.875rem', minHeight: '0.875rem' },
    md: { minWidth: '1rem', minHeight: '1rem' },
    lg: { minWidth: '1.25rem', minHeight: '1.25rem' },
  };
  return sizes[size as keyof typeof sizes] || sizes.md;
};

const getWidthStyles = (size: string, fullWidth: boolean): CSSProperties => {
  if (fullWidth) return { width: '100%' };

  const widths = {
    sm: { maxWidth: '12rem' },
    md: { maxWidth: '14rem' },
    lg: { maxWidth: '16rem' },
  };
  return widths[size as keyof typeof widths] || widths.md;
};

export const DatePicker = forwardRef<ReactDatePicker, DatePickerProps>(
  (
    {
      size = 'md',
      onClear,
      calendarIcon,
      clearIcon,
      fullWidth = false,
      baseClassName,
      wrapperClassName,
      disableDefaultStyles = false,
      selected,
      onChange,
      locale,
      className = DATEPICKER_EMPTY_VALUE,
      minDate,
      maxDate,
      startDate,
      endDate,
      colors,
      customBg,
      customTextColor,
      customBorderColor,
      label,
      labelStyle,
      placeholderText = ' ',
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const [inputClassName] = useState(
      () => `datepicker-input-${Math.random().toString(36).substr(2, 9)}`,
    );

    const colorConfig = colors || DEFAULT_COLOR_CONFIG;

    const calendarColors = useMemo(() => {
      const primaryColor = colorConfig.primary;
      const defaultBg = lightenColor(colorConfig.secondary, 70);
      const bgColor = customBg || defaultBg;
      const defaultTextColor = getContrastColor(bgColor);
      const textColor = customTextColor || defaultTextColor;
      const borderColor = customBorderColor || adjustOpacity(textColor, 0.2);

      return {
        inputBg: bgColor,
        inputText: textColor,
        inputBorder: borderColor,
        inputFocusBorder: primaryColor,
        border: borderColor,
        headerBg: primaryColor,
        headerText: getContrastColor(primaryColor),
        dayText: textColor,
        dayHoverBg: adjustOpacity(primaryColor, 0.1),
        selectedBg: primaryColor,
        selectedText: getContrastColor(primaryColor),
        keyboardBg: adjustOpacity(primaryColor, 0.15),
        disabledText: adjustOpacity(textColor, 0.4),
        disabledBg: 'transparent',
        outsideMonthText: adjustOpacity(textColor, 0.5),
        navigationHover: adjustOpacity(getContrastColor(primaryColor), 0.1),
        navigationIcon: getContrastColor(primaryColor),
        monthBg: bgColor,
        todayBorder: colorConfig.secondary,
      };
    }, [colorConfig, customBg, customTextColor, customBorderColor]);

    const showClearButton = Boolean(onClear);

    const cssVariables = useMemo(() => {
      if (!colors && !customBg && !customTextColor && !customBorderColor) return {};

      const accentColor = colorConfig.accent || colorConfig.primary;
      const defaultBg = lightenColor(colorConfig.secondary, 70);
      const defaultTextColor = getContrastColor(customBg || defaultBg);
      const textColor = customTextColor || defaultTextColor;
      const borderColor = customBorderColor || adjustOpacity(textColor, 0.2);

      return {
        '--input-bg': customBg || defaultBg,
        '--input-text': textColor,
        '--input-border': borderColor,
        '--input-label': adjustOpacity(textColor, 0.7),
        '--input-accent': accentColor,
      } as React.CSSProperties;
    }, [colorConfig, customBg, customTextColor, customBorderColor, colors]);

    const wrapperStyle: CSSProperties = disableDefaultStyles
      ? {}
      : {
          position: 'relative',
          marginBottom: '0.625rem',
          width: '100%',
          ...getWidthStyles(size, fullWidth),
          ...cssVariables,
        };

    const iconButtonStyle: CSSProperties = {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: colorConfig.accent || colorConfig.primary,
      transition: 'color 300ms',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      zIndex: 1,
      ...getIconPositionStyles(size),
      ...getIconSizeStyles(size),
    };

    const clearButtonStyle: CSSProperties = {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent',
      border: 'none',
      color: colorConfig.accent || colorConfig.primary,
      cursor: 'pointer',
      zIndex: 2,
      padding: '0.25rem',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'color 300ms',
      ...getClearButtonPositionStyles(size),
    };

    const defaultCalendarIcon = <Calendar size={18} />;
    const defaultClearIcon = <X size={16} />;

    const localeToUse = (locale || enUS) as unknown;

    useEffect(() => {
      registerLocale('datepicker-locale', localeToUse as never);
    }, [localeToUse]);

    const handleChange = (
      date: Date | Date[] | null,
      event?:
        | React.SyntheticEvent<unknown>
        | React.MouseEvent<HTMLElement>
        | React.KeyboardEvent<HTMLElement>,
    ) => {
      if (!onChange) return;

      if (Array.isArray(date)) {
        (
          onChange as (
            dates: Date[] | null,
            event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
          ) => void
        )(date, event as React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>);
      } else {
        (onChange as (date: Date | null, event?: React.SyntheticEvent<unknown>) => void)(
          date,
          event as React.SyntheticEvent<unknown>,
        );
      }
    };

    const reactDatePickerProps = {
      ...props,
      ...(minDate !== null && minDate !== undefined && { minDate }),
      ...(maxDate !== null && maxDate !== undefined && { maxDate }),
      ...(startDate !== null && startDate !== undefined && { startDate }),
      ...(endDate !== null && endDate !== undefined && { endDate }),
    };

    const sizeStyles = getDatePickerSizeStyles(size, showClearButton);

    return (
      <>
        <style>{`
          .${inputClassName} {
            width: 100%;
            border: 2px solid ${isFocused ? calendarColors.inputFocusBorder : calendarColors.inputBorder};
            border-radius: 1.5625rem !important;
            outline: none;
            transition: all 300ms;
            background-color: ${calendarColors.inputBg};
            color: ${calendarColors.inputText};
            cursor: pointer;
            box-sizing: border-box;
            padding-top: ${sizeStyles.paddingTop};
            padding-bottom: ${sizeStyles.paddingBottom};
            padding-left: ${sizeStyles.paddingLeft};
            padding-right: ${sizeStyles.paddingRight};
            font-size: ${sizeStyles.fontSize};
            ${isFocused ? `box-shadow: 0 0 0 0.1875rem ${adjustOpacity(calendarColors.inputFocusBorder, 0.1)};` : ''}
          }

          .react-datepicker-popper[data-placement^='bottom'] {
            padding-top: 8px !important;
          }

          .react-datepicker-popper[data-placement^='top'] {
            padding-top: 0 !important;
            padding-bottom: 8px !important;
          }

          .react-datepicker-popper {
            z-index: 9999 !important;
          }

          .react-datepicker {
            border: ${DATEPICKER_CALENDAR_SIZES.BORDER_WIDTH} solid ${calendarColors.border} !important;
            border-radius: ${DATEPICKER_CALENDAR_SIZES.BORDER_RADIUS} !important;
            font-family: inherit !important;
            box-shadow: 0 0.25rem 0.5rem ${adjustOpacity(calendarColors.border, 0.3)} !important;
            min-width: ${DATEPICKER_CALENDAR_SIZES.MIN_WIDTH} !important;
          }

          .react-datepicker--show-month-year-picker {
            min-width: ${DATEPICKER_CALENDAR_SIZES.MONTH_PICKER_WIDTH} !important;
            width: ${DATEPICKER_CALENDAR_SIZES.MONTH_PICKER_WIDTH} !important;
          }

          .react-datepicker__header {
            background-color: ${calendarColors.headerBg} !important;
            border-bottom: 0.0625rem solid ${calendarColors.headerBg} !important;
            border-top-left-radius: 0.5rem !important;
            border-top-right-radius: 0.5rem !important;
            color: ${calendarColors.headerText} !important;
            padding-top: ${DATEPICKER_CALENDAR_SIZES.HEADER_PADDING_TOP} !important;
            padding-left: ${DATEPICKER_CALENDAR_SIZES.HEADER_PADDING_SIDE} !important;
            padding-right: ${DATEPICKER_CALENDAR_SIZES.HEADER_PADDING_SIDE} !important;
          }

          .react-datepicker__current-month,
          .react-datepicker-time__header,
          .react-datepicker-year-header {
            color: ${calendarColors.headerText} !important;
            font-weight: bold !important;
            font-size: 1rem !important;
            padding-bottom: ${DATEPICKER_CALENDAR_SIZES.HEADER_PADDING_TOP} !important;
          }

          .react-datepicker__day-names {
            background-color: ${calendarColors.headerBg} !important;
            padding-bottom: ${DATEPICKER_CALENDAR_SIZES.HEADER_PADDING_TOP} !important;
          }

          .react-datepicker__day-name {
            color: ${calendarColors.headerText} !important;
            display: inline-block !important;
            width: ${DATEPICKER_CALENDAR_SIZES.DAY_SIZE} !important;
            line-height: ${DATEPICKER_CALENDAR_SIZES.DAY_SIZE} !important;
            text-align: center !important;
            margin: ${DATEPICKER_CALENDAR_SIZES.DAY_MARGIN} !important;
            border-radius: 0.25rem !important;
            font-weight: bold !important;
            font-size: 0.75rem !important;
          }

          .react-datepicker__month {
            margin: ${DATEPICKER_CALENDAR_SIZES.MONTH_MARGIN} !important;
            background-color: ${calendarColors.monthBg} !important;
          }

          .react-datepicker__week {
            display: flex !important;
            justify-content: space-around !important;
          }

          .react-datepicker__day,
          .react-datepicker__month-text,
          .react-datepicker__quarter-text,
          .react-datepicker__year-text {
            color: ${calendarColors.dayText} !important;
            display: inline-block !important;
            width: ${DATEPICKER_CALENDAR_SIZES.DAY_SIZE} !important;
            line-height: ${DATEPICKER_CALENDAR_SIZES.DAY_SIZE} !important;
            text-align: center !important;
            margin: ${DATEPICKER_CALENDAR_SIZES.DAY_MARGIN} !important;
            border-radius: 0.25rem !important;
            font-size: 0.875rem !important;
          }

          .react-datepicker__day:hover,
          .react-datepicker__month-text:hover,
          .react-datepicker__quarter-text:hover,
          .react-datepicker__year-text:hover {
            background-color: ${calendarColors.dayHoverBg} !important;
            border-radius: 0.25rem !important;
          }

          .react-datepicker__day--selected,
          .react-datepicker__day--in-selecting-range,
          .react-datepicker__day--in-range,
          .react-datepicker__month-text--selected,
          .react-datepicker__quarter-text--selected,
          .react-datepicker__year-text--selected {
            background-color: ${calendarColors.selectedBg} !important;
            color: ${calendarColors.selectedText} !important;
            border-radius: 0.25rem !important;
            font-weight: bold !important;
          }

          .react-datepicker__day--keyboard-selected,
          .react-datepicker__month-text--keyboard-selected,
          .react-datepicker__quarter-text--keyboard-selected,
          .react-datepicker__year-text--keyboard-selected {
            background-color: ${calendarColors.keyboardBg} !important;
            color: ${calendarColors.selectedText} !important;
            border-radius: 0.25rem !important;
          }

          .react-datepicker__day--today,
          .react-datepicker__month-text--today,
          .react-datepicker__quarter-text--today,
          .react-datepicker__year-text--today {
            font-weight: normal !important;
            color: inherit !important;
            background-color: transparent !important;
          }

          .react-datepicker__navigation {
            top: ${DATEPICKER_CALENDAR_SIZES.NAVIGATION_TOP} !important;
            width: ${DATEPICKER_CALENDAR_SIZES.NAVIGATION_SIZE} !important;
            height: ${DATEPICKER_CALENDAR_SIZES.NAVIGATION_SIZE} !important;
            border-radius: 0.25rem !important;
          }

          .react-datepicker__navigation:hover {
            background-color: ${calendarColors.navigationHover} !important;
          }

          .react-datepicker__navigation-icon::before {
            border-color: ${calendarColors.navigationIcon} !important;
            border-width: ${DATEPICKER_CALENDAR_SIZES.BORDER_WIDTH}
              ${DATEPICKER_CALENDAR_SIZES.BORDER_WIDTH} 0 0 !important;
            height: ${DATEPICKER_CALENDAR_SIZES.ICON_SIZE} !important;
            width: ${DATEPICKER_CALENDAR_SIZES.ICON_SIZE} !important;
            top: ${DATEPICKER_CALENDAR_SIZES.ICON_TOP} !important;
          }

          .react-datepicker__navigation--previous {
            left: ${DATEPICKER_CALENDAR_SIZES.NAVIGATION_SIDE} !important;
          }

          .react-datepicker__navigation--next {
            right: ${DATEPICKER_CALENDAR_SIZES.NAVIGATION_SIDE} !important;
          }

          .react-datepicker__day--disabled,
          .react-datepicker__month-text--disabled,
          .react-datepicker__quarter-text--disabled,
          .react-datepicker__year-text--disabled {
            color: ${calendarColors.disabledText} !important;
            cursor: not-allowed !important;
            background-color: ${calendarColors.disabledBg} !important;
          }

          .react-datepicker__day--disabled:hover,
          .react-datepicker__month-text--disabled:hover,
          .react-datepicker__quarter-text--disabled:hover,
          .react-datepicker__year-text--disabled:hover {
            background-color: ${calendarColors.disabledBg} !important;
          }

          .react-datepicker__day--outside-month {
            color: ${calendarColors.outsideMonthText} !important;
          }

          .react-datepicker-popper {
            z-index: ${DATEPICKER_CALENDAR_Z_INDEX} !important;
          }

          .react-datepicker__month-container {
            float: left !important;
            width: 100% !important;
          }

          .react-datepicker__month-wrapper {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: ${DATEPICKER_CALENDAR_SIZES.MONTH_GAP} !important;
            padding: ${DATEPICKER_CALENDAR_SIZES.MONTH_PADDING} 0 !important;
          }

          .react-datepicker__month-text,
          .react-datepicker__quarter-text,
          .react-datepicker__year-text {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: ${DATEPICKER_CALENDAR_SIZES.MONTH_TEXT_WIDTH} !important;
            height: ${DATEPICKER_CALENDAR_SIZES.MONTH_TEXT_HEIGHT} !important;
            margin: 0 !important;
            padding: 0.25rem 0.125rem !important;
            border-radius: 0.25rem !important;
            cursor: pointer !important;
            text-align: center !important;
            font-size: 0.75rem !important;
            font-weight: 500 !important;
          }
        `}</style>

        <div style={wrapperStyle} className={wrapperClassName || className}>
          <ReactDatePicker
            ref={ref}
            className={`${baseClassName || ''} ${inputClassName}`.trim()}
            wrapperClassName={DATEPICKER_EMPTY_VALUE}
            popperPlacement="bottom-start"
            locale="datepicker-locale"
            selected={selected}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholderText={placeholderText}
            {...(reactDatePickerProps as Record<string, unknown>)}
            popperContainer={({ children }) => {
              if (typeof document !== 'undefined') {
                return createPortal(children, document.body);
              }
              return children;
            }}
          />
          {label && (
            <label style={getLabelStyles(Boolean(selected), isFocused, labelStyle)}>{label}</label>
          )}
          {selected && onClear && (
            <button
              onClick={onClear}
              style={clearButtonStyle}
              type="button"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = adjustOpacity(
                  colorConfig.accent || colorConfig.primary,
                  0.1,
                );
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {clearIcon || defaultClearIcon}
            </button>
          )}
          <div style={iconButtonStyle}>{calendarIcon || defaultCalendarIcon}</div>
        </div>
      </>
    );
  },
);

DatePicker.displayName = DATEPICKER_DISPLAY_NAME;
