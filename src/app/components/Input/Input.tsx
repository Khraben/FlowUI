import { forwardRef, useState } from 'react';
import { InputProps } from './models/Input.interface';
import { SelectInputProps } from './models/SelectInput.interface';
import { TimeInputProps } from './models/TimeInput.interface';
import {
  INPUT_VARIANTS,
  INPUT_SIZES,
  INPUT_BASE_STYLES,
  INPUT_BORDER_STYLES,
  INPUT_SIZE_STYLES,
  INPUT_LABEL_BASE_STYLES,
  INPUT_ICON_BUTTON_BASE,
  INPUT_ICON_BUTTON_POSITIONS,
  INPUT_ICON_SIZES,
  INPUT_SELECT_PADDING,
  INPUT_SEARCH_PADDING,
  INPUT_ICON_STATIC_STYLES,
  INPUT_CLEAR_BUTTON_STYLES,
  INPUT_SELECT_APPEARANCE,
  INPUT_WRAPPER_STYLES,
  INPUT_PASSWORD_BUTTON_SIZES,
  INPUT_DISPLAY_NAME,
  SELECT_INPUT_DISPLAY_NAME,
  TIME_INPUT_DISPLAY_NAME,
  INPUT_TIME_PERIODS,
  INPUT_TIME_DEFAULTS,
  INPUT_TIME_FORMAT,
  INPUT_PLACEHOLDER_CHAR,
  INPUT_EMPTY_VALUE,
  INPUT_AUTOCOMPLETE_VALUES,
  INPUT_FULL_WIDTH_CLASS,
  INPUT_NO_PADDING_CLASS,
  INPUT_CENTER_VERTICAL_CLASSES,
  INPUT_BUTTON_TYPE,
} from '@/constants';

const generateTimeOptions = (startHour: number, endHour: number, interval: number) => {
  const times = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    for (
      let minute = INPUT_TIME_FORMAT.ZERO_HOUR;
      minute < INPUT_TIME_FORMAT.MINUTES_PER_HOUR;
      minute += interval
    ) {
      const period =
        hour < INPUT_TIME_FORMAT.NOON_HOUR ? INPUT_TIME_PERIODS.AM : INPUT_TIME_PERIODS.PM;
      const displayHour =
        hour % INPUT_TIME_FORMAT.NOON_HOUR === INPUT_TIME_FORMAT.ZERO_HOUR
          ? INPUT_TIME_DEFAULTS.DISPLAY_12H
          : hour % INPUT_TIME_FORMAT.NOON_HOUR;
      const time = `${displayHour}${INPUT_TIME_FORMAT.TIME_SEPARATOR}${minute === INPUT_TIME_FORMAT.ZERO_HOUR ? INPUT_TIME_FORMAT.ZERO_MINUTE_PAD : minute}${period}`;
      times.push(time);
    }
  }
  return times;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = INPUT_VARIANTS.TEXT,
      size = INPUT_SIZES.MD,
      label,
      labelStyle,
      onClear,
      showPasswordToggle = true,
      passwordIcon,
      passwordIconHidden,
      searchIcon,
      clearIcon,
      fullWidth = true,
      className = INPUT_EMPTY_VALUE,
      baseClassName,
      labelClassName,
      wrapperClassName,
      disableDefaultStyles = false,
      value,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const baseStyles = disableDefaultStyles
      ? INPUT_EMPTY_VALUE
      : baseClassName || `${INPUT_BASE_STYLES} ${INPUT_BORDER_STYLES} ${INPUT_SIZE_STYLES[size]}`;

    const wrapperStyles = wrapperClassName || INPUT_WRAPPER_STYLES;

    const labelStyles = labelClassName || INPUT_LABEL_BASE_STYLES;

    const getInputType = () => {
      if (variant === INPUT_VARIANTS.PASSWORD && showPasswordToggle) {
        return showPassword ? INPUT_VARIANTS.TEXT : INPUT_VARIANTS.PASSWORD;
      }
      return variant === INPUT_VARIANTS.SEARCH ? INPUT_VARIANTS.TEXT : variant;
    };

    const getInputStyles = () => {
      if (variant === INPUT_VARIANTS.SEARCH) {
        return `${baseStyles} ${INPUT_SEARCH_PADDING}`;
      }
      return baseStyles;
    };

    const toggleShowPassword = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setShowPassword(!showPassword);
    };

    return (
      <div
        className={`${wrapperStyles} ${fullWidth ? INPUT_FULL_WIDTH_CLASS : INPUT_EMPTY_VALUE} ${className}`}
      >
        <input
          ref={ref}
          type={getInputType()}
          placeholder={INPUT_PLACEHOLDER_CHAR}
          value={value}
          autoComplete={INPUT_AUTOCOMPLETE_VALUES.OFF}
          className={getInputStyles()}
          {...props}
        />
        {label && (
          <label style={labelStyle} className={labelStyles}>
            {label}
          </label>
        )}

        {variant === INPUT_VARIANTS.PASSWORD &&
          showPasswordToggle &&
          passwordIcon &&
          passwordIconHidden && (
            <button
              type={INPUT_BUTTON_TYPE}
              onClick={toggleShowPassword}
              className={`${INPUT_ICON_BUTTON_BASE} ${INPUT_ICON_BUTTON_POSITIONS.RIGHT} ${INPUT_ICON_SIZES[size]} ${INPUT_PASSWORD_BUTTON_SIZES[size]} ${INPUT_NO_PADDING_CLASS}`}
            >
              {showPassword ? passwordIconHidden : passwordIcon}
            </button>
          )}

        {variant === INPUT_VARIANTS.SEARCH && (
          <>
            {value && onClear && clearIcon && (
              <button
                onClick={onClear}
                type={INPUT_BUTTON_TYPE}
                className={`${INPUT_ICON_BUTTON_BASE} ${INPUT_ICON_BUTTON_POSITIONS.CLEAR} ${INPUT_ICON_SIZES[size]} ${INPUT_CLEAR_BUTTON_STYLES}`}
              >
                {clearIcon}
              </button>
            )}
            {searchIcon && (
              <div
                className={`${INPUT_ICON_STATIC_STYLES} ${INPUT_ICON_BUTTON_POSITIONS.RIGHT} ${INPUT_CENTER_VERTICAL_CLASSES}`}
              >
                {searchIcon}
              </div>
            )}
          </>
        )}
      </div>
    );
  },
);

Input.displayName = INPUT_DISPLAY_NAME;

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  (
    {
      size = INPUT_SIZES.MD,
      label,
      labelStyle,
      children,
      selectIcon,
      fullWidth = true,
      className = INPUT_EMPTY_VALUE,
      baseClassName,
      labelClassName,
      wrapperClassName,
      disableDefaultStyles = false,
      value,
      ...props
    },
    ref,
  ) => {
    const baseStyles = disableDefaultStyles
      ? INPUT_EMPTY_VALUE
      : baseClassName ||
        `${INPUT_BASE_STYLES} ${INPUT_BORDER_STYLES} ${INPUT_SIZE_STYLES[size]} ${INPUT_SELECT_PADDING} ${INPUT_SELECT_APPEARANCE}`;

    const wrapperStyles = wrapperClassName || INPUT_WRAPPER_STYLES;

    const labelStyles = labelClassName || INPUT_LABEL_BASE_STYLES;

    return (
      <div
        className={`${wrapperStyles} ${fullWidth ? INPUT_FULL_WIDTH_CLASS : INPUT_EMPTY_VALUE} ${className}`}
      >
        <select ref={ref} value={value} className={baseStyles} {...props}>
          <option value={INPUT_EMPTY_VALUE} disabled hidden></option>
          {children}
        </select>
        {label && (
          <label style={labelStyle} className={labelStyles}>
            {label}
          </label>
        )}
        {selectIcon && (
          <div
            className={`${INPUT_ICON_STATIC_STYLES} ${INPUT_ICON_BUTTON_POSITIONS.RIGHT} ${INPUT_CENTER_VERTICAL_CLASSES}`}
          >
            {selectIcon}
          </div>
        )}
      </div>
    );
  },
);

SelectInput.displayName = SELECT_INPUT_DISPLAY_NAME;

export const TimeInput = forwardRef<HTMLSelectElement, TimeInputProps>(
  (
    {
      size = INPUT_SIZES.MD,
      label,
      value,
      onChange,
      startHour = INPUT_TIME_DEFAULTS.START_HOUR,
      endHour = INPUT_TIME_DEFAULTS.END_HOUR,
      interval = INPUT_TIME_DEFAULTS.INTERVAL,
      fullWidth = true,
      className = INPUT_EMPTY_VALUE,
      baseClassName,
      labelClassName,
      wrapperClassName,
      disableDefaultStyles = false,
    },
    ref,
  ) => {
    const baseStyles = disableDefaultStyles
      ? INPUT_EMPTY_VALUE
      : baseClassName ||
        `${INPUT_BASE_STYLES} ${INPUT_BORDER_STYLES} ${INPUT_SIZE_STYLES[size]} ${INPUT_SELECT_PADDING} ${INPUT_SELECT_APPEARANCE}`;

    const wrapperStyles = wrapperClassName || INPUT_WRAPPER_STYLES;

    const labelStyles = labelClassName || INPUT_LABEL_BASE_STYLES;

    return (
      <div
        className={`${wrapperStyles} ${fullWidth ? INPUT_FULL_WIDTH_CLASS : INPUT_EMPTY_VALUE} ${className}`}
      >
        <select ref={ref} value={value} onChange={onChange} className={baseStyles}>
          <option value={INPUT_EMPTY_VALUE} disabled hidden></option>
          {generateTimeOptions(startHour, endHour, interval).map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        {label && <label className={labelStyles}>{label}</label>}
      </div>
    );
  },
);

TimeInput.displayName = TIME_INPUT_DISPLAY_NAME;

export default Input;
