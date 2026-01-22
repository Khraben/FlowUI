import { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { Calendar, X } from 'lucide-react';
import { enUS } from 'date-fns/locale';
import { DatePickerProps } from './models/DatePicker.interface';
import {
  DATEPICKER_BASE_STYLES,
  DATEPICKER_BORDER_STYLES,
  DATEPICKER_SIZE_STYLES,
  DATEPICKER_PLACEHOLDER_STYLES,
  DATEPICKER_ICON_BUTTON_BASE,
  DATEPICKER_ICON_POSITIONS,
  DATEPICKER_CLEAR_BUTTON_BASE,
  DATEPICKER_CLEAR_POSITIONS,
  DATEPICKER_ICON_SIZES,
  DATEPICKER_WRAPPER_STYLES,
  DATEPICKER_FULL_WIDTH_CLASS,
  DATEPICKER_EMPTY_VALUE,
  DATEPICKER_DISPLAY_NAME,
} from '@/constants/components/datepicker/styles.constants';
import {
  DATEPICKER_CALENDAR_COLORS,
  DATEPICKER_CALENDAR_SIZES,
  DATEPICKER_CALENDAR_Z_INDEX,
} from '@/constants/components/datepicker/calendar.constants';
import { SIZE } from '@/constants';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker = forwardRef<ReactDatePicker, DatePickerProps>(
  (
    {
      size = SIZE.MD,
      onClear,
      calendarIcon,
      clearIcon,
      fullWidth = true,
      baseClassName,
      wrapperClassName,
      disableDefaultStyles = false,
      selected,
      onChange,
      locale,
      className = DATEPICKER_EMPTY_VALUE,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      bg,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      textColor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      borderColor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      focusBorderColor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      focusShadow,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      iconColor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      iconHoverColor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      placeholderColor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      calendarBg,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      calendarHeaderBg,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      calendarSelectedBg,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      calendarHoverBg,
      ...props
    },
    ref,
  ) => {
    const baseStyles = disableDefaultStyles
      ? DATEPICKER_EMPTY_VALUE
      : baseClassName ||
        `${DATEPICKER_BASE_STYLES} ${DATEPICKER_BORDER_STYLES} ${DATEPICKER_SIZE_STYLES[size as 'sm' | 'md' | 'lg']} ${DATEPICKER_PLACEHOLDER_STYLES}`;

    const wrapperStyles = wrapperClassName || DATEPICKER_WRAPPER_STYLES;

    const defaultCalendarIcon = <Calendar size={18} />;
    const defaultClearIcon = <X size={16} />;

    const localeToUse = locale || enUS;

    useEffect(() => {
      registerLocale('datepicker-locale', localeToUse);
    }, [localeToUse]);

    return (
      <>
        <style jsx global>{`
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
            border: ${DATEPICKER_CALENDAR_SIZES.BORDER_WIDTH} solid ${DATEPICKER_CALENDAR_COLORS.BORDER} !important;
            border-radius: ${DATEPICKER_CALENDAR_SIZES.BORDER_RADIUS} !important;
            font-family: inherit !important;
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1) !important;
            min-width: ${DATEPICKER_CALENDAR_SIZES.MIN_WIDTH} !important;
          }

          .react-datepicker--show-month-year-picker {
            min-width: ${DATEPICKER_CALENDAR_SIZES.MONTH_PICKER_WIDTH} !important;
            width: ${DATEPICKER_CALENDAR_SIZES.MONTH_PICKER_WIDTH} !important;
          }

          .react-datepicker__header {
            background-color: ${DATEPICKER_CALENDAR_COLORS.HEADER_BG} !important;
            border-bottom: 0.0625rem solid ${DATEPICKER_CALENDAR_COLORS.HEADER_BG} !important;
            border-top-left-radius: 0.5rem !important;
            border-top-right-radius: 0.5rem !important;
            color: ${DATEPICKER_CALENDAR_COLORS.HEADER_TEXT} !important;
            padding-top: ${DATEPICKER_CALENDAR_SIZES.HEADER_PADDING_TOP} !important;
            padding-left: ${DATEPICKER_CALENDAR_SIZES.HEADER_PADDING_SIDE} !important;
            padding-right: ${DATEPICKER_CALENDAR_SIZES.HEADER_PADDING_SIDE} !important;
          }

          .react-datepicker__current-month,
          .react-datepicker-time__header,
          .react-datepicker-year-header {
            color: ${DATEPICKER_CALENDAR_COLORS.HEADER_TEXT} !important;
            font-weight: bold !important;
            font-size: 1rem !important;
            padding-bottom: ${DATEPICKER_CALENDAR_SIZES.HEADER_PADDING_TOP} !important;
          }

          .react-datepicker__day-names {
            background-color: ${DATEPICKER_CALENDAR_COLORS.HEADER_BG} !important;
            padding-bottom: ${DATEPICKER_CALENDAR_SIZES.HEADER_PADDING_TOP} !important;
          }

          .react-datepicker__day-name {
            color: ${DATEPICKER_CALENDAR_COLORS.HEADER_TEXT} !important;
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
            background-color: ${DATEPICKER_CALENDAR_COLORS.MONTH_BG} !important;
          }

          .react-datepicker__week {
            display: flex !important;
            justify-content: space-around !important;
          }

          .react-datepicker__day,
          .react-datepicker__month-text,
          .react-datepicker__quarter-text,
          .react-datepicker__year-text {
            color: ${DATEPICKER_CALENDAR_COLORS.DAY_TEXT} !important;
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
            background-color: ${DATEPICKER_CALENDAR_COLORS.DAY_HOVER_BG} !important;
            border-radius: 0.25rem !important;
          }

          .react-datepicker__day--selected,
          .react-datepicker__day--in-selecting-range,
          .react-datepicker__day--in-range,
          .react-datepicker__month-text--selected,
          .react-datepicker__quarter-text--selected,
          .react-datepicker__year-text--selected {
            background-color: ${DATEPICKER_CALENDAR_COLORS.DAY_SELECTED_BG} !important;
            color: ${DATEPICKER_CALENDAR_COLORS.DAY_SELECTED_TEXT} !important;
            border-radius: 0.25rem !important;
            font-weight: bold !important;
          }

          .react-datepicker__day--keyboard-selected,
          .react-datepicker__month-text--keyboard-selected,
          .react-datepicker__quarter-text--keyboard-selected,
          .react-datepicker__year-text--keyboard-selected {
            background-color: ${DATEPICKER_CALENDAR_COLORS.DAY_KEYBOARD_BG} !important;
            color: ${DATEPICKER_CALENDAR_COLORS.DAY_SELECTED_TEXT} !important;
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
            background-color: ${DATEPICKER_CALENDAR_COLORS.NAVIGATION_HOVER} !important;
          }

          .react-datepicker__navigation-icon::before {
            border-color: ${DATEPICKER_CALENDAR_COLORS.NAVIGATION_ICON} !important;
            border-width: ${DATEPICKER_CALENDAR_SIZES.BORDER_WIDTH} ${DATEPICKER_CALENDAR_SIZES.BORDER_WIDTH} 0 0 !important;
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
            color: ${DATEPICKER_CALENDAR_COLORS.DAY_DISABLED_TEXT} !important;
            cursor: not-allowed !important;
            background-color: ${DATEPICKER_CALENDAR_COLORS.DAY_DISABLED_BG} !important;
          }

          .react-datepicker__day--disabled:hover,
          .react-datepicker__month-text--disabled:hover,
          .react-datepicker__quarter-text--disabled:hover,
          .react-datepicker__year-text--disabled:hover {
            background-color: ${DATEPICKER_CALENDAR_COLORS.DAY_DISABLED_BG} !important;
          }

          .react-datepicker__day--outside-month {
            color: ${DATEPICKER_CALENDAR_COLORS.DAY_OUTSIDE_MONTH} !important;
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

        <div
          className={`${wrapperStyles} ${fullWidth ? DATEPICKER_FULL_WIDTH_CLASS : DATEPICKER_EMPTY_VALUE} ${className}`}
        >
          <ReactDatePicker
            {...(props as any)}
            ref={ref}
            className={baseStyles}
            popperPlacement="bottom-start"
            locale="datepicker-locale"
            selected={selected}
            onChange={onChange}
            popperContainer={({ children }) => {
              if (typeof document !== 'undefined') {
                return createPortal(children, document.body);
              }
              return children;
            }}
          />
          {selected && onClear && (
            <button
              onClick={onClear}
              className={`${DATEPICKER_CLEAR_BUTTON_BASE} ${DATEPICKER_CLEAR_POSITIONS[size as 'sm' | 'md' | 'lg']}`}
              type="button"
            >
              {clearIcon || defaultClearIcon}
            </button>
          )}
          <div className={`${DATEPICKER_ICON_BUTTON_BASE} ${DATEPICKER_ICON_POSITIONS[size as 'sm' | 'md' | 'lg']} ${DATEPICKER_ICON_SIZES[size as 'sm' | 'md' | 'lg']}`}>
            {calendarIcon || defaultCalendarIcon}
          </div>
        </div>
      </>
    );
  },
);

DatePicker.displayName = DATEPICKER_DISPLAY_NAME;
