import { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { Calendar, X } from 'lucide-react';
import { enUS } from 'date-fns/locale';
import { DatePickerProps } from './models/DatePicker.interface';
import {
  DATEPICKER_BASE_STYLES,
  DATEPICKER_BORDER_STYLES,
  DATEPICKER_SIZE_STYLES_WITH_CLEAR,
  DATEPICKER_PLACEHOLDER_STYLES,
  DATEPICKER_ICON_BUTTON_BASE,
  DATEPICKER_ICON_POSITIONS,
  DATEPICKER_CLEAR_BUTTON_BASE,
  DATEPICKER_CLEAR_POSITIONS,
  DATEPICKER_ICON_SIZES,
  DATEPICKER_WRAPPER_STYLES,
  DATEPICKER_WIDTH_STYLES,
  DATEPICKER_FULL_WIDTH_CLASS,
  DATEPICKER_EMPTY_VALUE,
  DATEPICKER_DISPLAY_NAME,
} from '@/constants/components/datepicker/styles.constants';
import {
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
       
      calendarBorderColor,
       
      calendarHeaderBg,
       
      calendarHeaderText,
       
      calendarDayText,
       
      calendarDayHoverBg,
       
      calendarSelectedBg,
       
      calendarSelectedText,
       
      calendarKeyboardBg,
       
      calendarDisabledText,
       
      calendarDisabledBg,
       
      calendarOutsideMonthText,
       
      calendarNavigationHover,
       
      calendarNavigationIcon,
       
      calendarMonthBg,
      ...props
    },
    ref,
  ) => {
    const baseStyles = disableDefaultStyles
      ? DATEPICKER_EMPTY_VALUE
      : baseClassName ||
        `${DATEPICKER_BASE_STYLES} ${DATEPICKER_BORDER_STYLES} ${DATEPICKER_SIZE_STYLES_WITH_CLEAR[size as 'sm' | 'md' | 'lg']} ${DATEPICKER_PLACEHOLDER_STYLES}`;

    const wrapperStyles = wrapperClassName || DATEPICKER_WRAPPER_STYLES;

    const widthStyles = fullWidth
      ? DATEPICKER_FULL_WIDTH_CLASS
      : DATEPICKER_WIDTH_STYLES[size as 'sm' | 'md' | 'lg'];

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

    const calendarColors = {
      border: calendarBorderColor,
      headerBg: calendarHeaderBg,
      headerText: calendarHeaderText,
      dayText: calendarDayText,
      dayHoverBg: calendarDayHoverBg,
      selectedBg: calendarSelectedBg,
      selectedText: calendarSelectedText,
      keyboardBg: calendarKeyboardBg,
      disabledText: calendarDisabledText,
      disabledBg: calendarDisabledBg,
      outsideMonthText: calendarOutsideMonthText,
      navigationHover: calendarNavigationHover,
      navigationIcon: calendarNavigationIcon,
      monthBg: calendarMonthBg,
    };

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
            border: ${DATEPICKER_CALENDAR_SIZES.BORDER_WIDTH} solid ${calendarColors.border} !important;
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

        <div className={`${wrapperStyles} ${widthStyles} ${className}`}>
          <ReactDatePicker
            ref={ref}
            className={baseStyles}
            wrapperClassName="w-full"
            popperPlacement="bottom-start"
            locale="datepicker-locale"
            selected={selected}
            onChange={handleChange}
            {...(reactDatePickerProps as Record<string, unknown>)}
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
          <div
            className={`${DATEPICKER_ICON_BUTTON_BASE} ${DATEPICKER_ICON_POSITIONS[size as 'sm' | 'md' | 'lg']} ${DATEPICKER_ICON_SIZES[size as 'sm' | 'md' | 'lg']} pointer-events-none`}
          >
            {calendarIcon || defaultCalendarIcon}
          </div>
        </div>
      </>
    );
  },
);

DatePicker.displayName = DATEPICKER_DISPLAY_NAME;
