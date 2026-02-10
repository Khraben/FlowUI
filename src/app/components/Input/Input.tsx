import { forwardRef, useState, useMemo, CSSProperties } from 'react';
import { InputProps } from './models/Input.interface';
import { SelectInputProps } from './models/SelectInput.interface';
import { TimeInputProps } from './models/TimeInput.interface';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import {
  getHoverColor,
  adjustOpacity,
  getContrastColor,
  lightenColor,
} from '@/app/utils/colorUtils';

// Constants
const INPUT_DISPLAY_NAME = 'Input';
const SELECT_INPUT_DISPLAY_NAME = 'SelectInput';
const TIME_INPUT_DISPLAY_NAME = 'TimeInput';
const INPUT_PLACEHOLDER_CHAR = ' ';
const INPUT_EMPTY_VALUE = '';
const INPUT_BUTTON_TYPE = 'button';

const INPUT_VARIANTS = {
  TEXT: 'text',
  NUMBER: 'number',
  SEARCH: 'search',
  SELECT: 'select',
  PASSWORD: 'password',
  TIME: 'time',
  DATE: 'date',
} as const;

const INPUT_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

const INPUT_TIME_PERIODS = {
  AM: 'am',
  PM: 'pm',
} as const;

const INPUT_TIME_DEFAULTS = {
  START_HOUR: 0,
  END_HOUR: 23,
  INTERVAL: 30,
  DISPLAY_12H: 12,
} as const;

const INPUT_TIME_FORMAT = {
  MINUTES_PER_HOUR: 60,
  NOON_HOUR: 12,
  ZERO_HOUR: 0,
  ZERO_MINUTE_PAD: '00',
  TIME_SEPARATOR: ':',
} as const;

const INPUT_AUTOCOMPLETE_VALUES = {
  OFF: 'off',
  ON: 'on',
} as const;

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

// Helper functions to get size-specific styles
const getInputSizeStyles = (size: string): CSSProperties => {
  const baseStyles: CSSProperties = {
    width: '100%',
    border: '2px solid',
    borderRadius: '1.5625rem',
    outline: 'none',
    transition: 'all 300ms',
    backgroundColor: 'var(--input-bg, #313335)',
    color: 'var(--input-text, #A9B7C6)',
  };

  const sizeMap: Record<string, CSSProperties> = {
    sm: {
      padding: '0.5rem 0.625rem',
      fontSize: '0.75rem',
    },
    md: {
      padding: '0.625rem 0.75rem',
      fontSize: '0.875rem',
    },
    lg: {
      padding: '0.75rem 0.9375rem',
      fontSize: '0.875rem',
    },
  };

  return { ...baseStyles, ...(sizeMap[size] || sizeMap.md) };
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

const getIconButtonStyles = (size: string): CSSProperties => {
  const sizeMap: Record<string, CSSProperties> = {
    sm: {
      minWidth: '1.0625rem',
      minHeight: '1.0625rem',
    },
    md: {
      minWidth: '1.125rem',
      minHeight: '1.125rem',
    },
    lg: {
      minWidth: '1.25rem',
      minHeight: '1.25rem',
    },
  };

  return {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--input-accent, #00D4FF)',
    transition: 'color 300ms',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...(sizeMap[size] || sizeMap.md),
  };
};

const getPasswordButtonFontSize = (size: string): string => {
  const sizeMap: Record<string, string> = {
    sm: '0.6875rem',
    md: '0.75rem',
    lg: '0.875rem',
  };
  return sizeMap[size] || sizeMap.md;
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
      onFocus,
      onBlur,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState('');

    // Use default colors if not provided
    const colorConfig = colors || DEFAULT_COLOR_CONFIG;

    // Calculate dynamic colors for input
    const inputColors = useMemo(() => {
      const accentColor = colorConfig.accent || colorConfig.primary;
      const defaultBg = lightenColor(colorConfig.secondary, 70);
      const defaultTextColor = getContrastColor(defaultBg);
      const textColor = customTextColor || defaultTextColor;
      const borderColor = customBorderColor || adjustOpacity(textColor, 0.2);
      const focusBorderColor = accentColor;
      const focusShadow = adjustOpacity(accentColor, 0.1);

      return {
        bg: customBg || defaultBg,
        textColor: textColor,
        borderColor,
        focusBorderColor,
        focusShadow,
        accentColor,
        labelColor: adjustOpacity(textColor, 0.7),
        placeholderColor: adjustOpacity(textColor, 0.4),
      };
    }, [colorConfig, customBg, customTextColor, customBorderColor]);

    const cssVariables = useMemo(() => {
      if (!colors && !customBg && !customTextColor && !customBorderColor) return {};

      return {
        '--input-bg': inputColors.bg,
        '--input-text': inputColors.textColor,
        '--input-border': inputColors.borderColor,
        '--input-focus-border': inputColors.focusBorderColor,
        '--input-focus-shadow': inputColors.focusShadow,
        '--input-label': inputColors.labelColor,
        '--input-accent': inputColors.accentColor,
        '--input-placeholder': inputColors.placeholderColor,
      } as React.CSSProperties;
    }, [inputColors, colors, customBg, customTextColor, customBorderColor]);

    const getInputType = () => {
      if (variant === INPUT_VARIANTS.PASSWORD && showPasswordToggle) {
        return showPassword ? INPUT_VARIANTS.TEXT : INPUT_VARIANTS.PASSWORD;
      }
      return variant === INPUT_VARIANTS.SEARCH ? INPUT_VARIANTS.TEXT : variant;
    };

    const toggleShowPassword = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setShowPassword(!showPassword);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Update internal value for uncontrolled inputs
      setInternalValue(e.target.value);
      // Call parent onChange if provided
      onChange?.(e);
    };

    const wrapperStyle: CSSProperties = disableDefaultStyles
      ? {}
      : {
          position: 'relative',
          marginBottom: '0.625rem',
          width: fullWidth ? '100%' : 'auto',
          ...cssVariables,
        };

    const inputStyle: CSSProperties = disableDefaultStyles
      ? {}
      : {
          ...getInputSizeStyles(size),
          borderColor: isFocused
            ? 'var(--input-focus-border, #00D4FF)'
            : 'var(--input-border, #4A5A6A)',
          boxShadow: isFocused
            ? '0 0 0 0.1875rem var(--input-focus-shadow, rgba(0,212,255,0.1))'
            : 'none',
          paddingRight:
            variant === INPUT_VARIANTS.SEARCH
              ? '2.5rem'
              : variant === INPUT_VARIANTS.PASSWORD && showPasswordToggle
                ? '2rem'
                : undefined,
        };

    const passwordButtonStyle: CSSProperties = {
      ...getIconButtonStyles(size),
      right: '0.5rem',
      padding: 0,
      fontSize: getPasswordButtonFontSize(size),
    };

    const searchIconStyle: CSSProperties = {
      ...getIconButtonStyles(size),
      right: '0.5rem',
      padding: 0,
      pointerEvents: 'none',
    };

    const clearButtonStyle: CSSProperties = {
      ...getIconButtonStyles(size),
      right: '2rem',
      padding: '0.25rem',
      borderRadius: '9999px',
      zIndex: 2,
    };

    // Check if input has value - handle both controlled and uncontrolled inputs
    const currentValue = value !== undefined ? value : internalValue;
    const hasValue = Boolean(currentValue && String(currentValue).trim().length > 0);

    return (
      <div className={wrapperClassName} style={{ ...wrapperStyle, ...style }}>
        <input
          ref={ref}
          type={getInputType()}
          placeholder={INPUT_PLACEHOLDER_CHAR}
          value={value}
          autoComplete={INPUT_AUTOCOMPLETE_VALUES.OFF}
          className={disableDefaultStyles ? baseClassName : className}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        {label && (
          <label className={labelClassName} style={getLabelStyles(hasValue, isFocused, labelStyle)}>
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
              style={passwordButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = getHoverColor(inputColors.accentColor);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--input-accent, #00D4FF)';
              }}
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
                style={clearButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = adjustOpacity(
                    inputColors.accentColor,
                    0.1,
                  );
                  e.currentTarget.style.color = getHoverColor(inputColors.accentColor);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--input-accent, #00D4FF)';
                }}
              >
                {clearIcon}
              </button>
            )}
            {searchIcon && <div style={searchIconStyle}>{searchIcon}</div>}
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
      colors,
      customBg,
      customTextColor,
      customBorderColor,
      style,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    // Use default colors if not provided
    const colorConfig = colors || DEFAULT_COLOR_CONFIG;

    // Calculate dynamic colors for select
    const selectColors = useMemo(() => {
      const accentColor = colorConfig.accent || colorConfig.primary;
      const defaultBg = lightenColor(colorConfig.secondary, 70);
      const defaultTextColor = getContrastColor(defaultBg);
      const textColor = customTextColor || defaultTextColor;
      const borderColor = customBorderColor || adjustOpacity(textColor, 0.2);
      const focusBorderColor = accentColor;
      const focusShadow = adjustOpacity(accentColor, 0.1);

      return {
        bg: customBg || defaultBg,
        textColor: textColor,
        borderColor,
        focusBorderColor,
        focusShadow,
        accentColor,
        labelColor: adjustOpacity(textColor, 0.7),
      };
    }, [colorConfig, customBg, customTextColor, customBorderColor]);

    const cssVariables = useMemo(() => {
      if (!colors && !customBg && !customTextColor && !customBorderColor) return {};

      return {
        '--input-bg': selectColors.bg,
        '--input-text': selectColors.textColor,
        '--input-border': selectColors.borderColor,
        '--input-focus-border': selectColors.focusBorderColor,
        '--input-focus-shadow': selectColors.focusShadow,
        '--input-label': selectColors.labelColor,
        '--input-accent': selectColors.accentColor,
      } as React.CSSProperties;
    }, [selectColors, colors, customBg, customTextColor, customBorderColor]);

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const wrapperStyle: CSSProperties = disableDefaultStyles
      ? {}
      : {
          position: 'relative',
          marginBottom: '0.625rem',
          width: fullWidth ? '100%' : 'auto',
          ...cssVariables,
        };

    const selectStyle: CSSProperties = disableDefaultStyles
      ? {}
      : {
          ...getInputSizeStyles(size),
          paddingRight: '2rem',
          appearance: 'none',
          cursor: 'pointer',
          borderColor: isFocused
            ? 'var(--input-focus-border, #00D4FF)'
            : 'var(--input-border, #4A5A6A)',
          boxShadow: isFocused
            ? '0 0 0 0.1875rem var(--input-focus-shadow, rgba(0,212,255,0.1))'
            : 'none',
        };

    const iconStyle: CSSProperties = {
      ...getIconButtonStyles(size),
      right: '0.5rem',
      padding: 0,
      pointerEvents: 'none',
    };

    // SelectInput always has value because it has default option + children
    const hasValue = true;

    return (
      <div className={wrapperClassName} style={{ ...wrapperStyle, ...style }}>
        <select
          ref={ref}
          value={value}
          className={disableDefaultStyles ? baseClassName : className}
          style={selectStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        >
          <option value={INPUT_EMPTY_VALUE} disabled hidden></option>
          {children}
        </select>
        {label && (
          <label className={labelClassName} style={getLabelStyles(hasValue, isFocused, labelStyle)}>
            {label}
          </label>
        )}
        {selectIcon && <div style={iconStyle}>{selectIcon}</div>}
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
