import { forwardRef, useState, useMemo } from 'react';
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
  INPUT_BUTTON_TYPE,
} from '@/app/constants';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import {
  getHoverColor,
  adjustOpacity,
  getContrastColor,
  lightenColor,
} from '@/app/utils/colorUtils';

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
      colors,
      customBg,
      customTextColor,
      customBorderColor,
      style,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    // Use default colors if not provided
    const colorConfig = colors || DEFAULT_COLOR_CONFIG;

    // Calculate dynamic colors for input
    const inputColors = useMemo(() => {
      const borderColor = customBorderColor || colorConfig.primary;
      const focusBorderColor = getHoverColor(borderColor, 15);
      const focusShadow = adjustOpacity(borderColor, 0.25);
      const iconColor = colorConfig.secondary;
      const iconHoverColor = getHoverColor(iconColor);
      const defaultBg = lightenColor(colorConfig.secondary, 70);
      const defaultTextColor = getContrastColor(defaultBg);
      const labelColor = adjustOpacity(customTextColor || defaultTextColor, 0.7);
      const labelActiveColor = colorConfig.primary;

      return {
        bg: customBg || defaultBg,
        textColor: customTextColor || defaultTextColor,
        borderColor,
        focusBorderColor,
        focusShadow,
        iconColor,
        iconHoverColor,
        labelColor,
        labelActiveColor,
        placeholderColor: adjustOpacity(customTextColor || defaultTextColor, 0.4),
      };
    }, [colorConfig, customBg, customTextColor, customBorderColor]);

    const inlineStyles = useMemo(() => {
      if (!colors && !customBg && !customTextColor && !customBorderColor) return style;

      return {
        ...style,
        '--input-bg': inputColors.bg,
        '--input-text': inputColors.textColor,
        '--input-border': inputColors.borderColor,
        '--input-focus-border': inputColors.focusBorderColor,
        '--input-focus-shadow': inputColors.focusShadow,
        '--input-label': inputColors.labelColor,
        '--input-label-active': inputColors.labelActiveColor,
        '--input-icon': inputColors.iconColor,
        '--input-icon-hover': inputColors.iconHoverColor,
        '--input-placeholder': inputColors.placeholderColor,
      } as React.CSSProperties;
    }, [inputColors, style, colors, customBg, customTextColor, customBorderColor]);

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
        style={inlineStyles}
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
                className={`${INPUT_ICON_BUTTON_BASE} ${INPUT_ICON_BUTTON_POSITIONS.RIGHT} ${INPUT_ICON_SIZES[size]} ${INPUT_NO_PADDING_CLASS} pointer-events-none`}
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      colors,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      customBg,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      customTextColor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      customBorderColor,
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
            className={`${INPUT_ICON_BUTTON_BASE} ${INPUT_ICON_BUTTON_POSITIONS.RIGHT} ${INPUT_ICON_SIZES[size]} ${INPUT_NO_PADDING_CLASS} pointer-events-none`}
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
      selectIcon,
      fullWidth = true,
      className = INPUT_EMPTY_VALUE,
      baseClassName,
      labelClassName,
      wrapperClassName,
      disableDefaultStyles = false,
      colors,
      customBg,
      customTextColor,
      customBorderColor,
    },
    ref,
  ) => {
    return (
      <SelectInput
        ref={ref}
        size={size}
        label={label}
        value={value}
        onChange={onChange}
        selectIcon={selectIcon}
        fullWidth={fullWidth}
        className={className}
        baseClassName={baseClassName}
        labelClassName={labelClassName}
        wrapperClassName={wrapperClassName}
        disableDefaultStyles={disableDefaultStyles}
        colors={colors}
        customBg={customBg}
        customTextColor={customTextColor}
        customBorderColor={customBorderColor}
      >
        {generateTimeOptions(startHour, endHour, interval).map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </SelectInput>
    );
  },
);

TimeInput.displayName = TIME_INPUT_DISPLAY_NAME;

export default Input;
