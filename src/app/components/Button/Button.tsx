import { forwardRef, useMemo, CSSProperties } from 'react';
import { ButtonProps } from './models/Button.interface';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { getHoverColor, adjustOpacity, getContrastColor } from '@/app/utils/colorUtils';

const BUTTON_DISPLAY_NAME = 'Button';
const BUTTON_EMPTY_VALUE = '';

const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  CLOSE: 'close',
  CLEAR: 'clear',
  ICON: 'icon',
} as const;

const BUTTON_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

const BUTTON_ICON_POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right',
} as const;

const getButtonBaseStyles = (): CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 500,
  transition: 'all 300ms',
  outline: 'none',
  border: '2px solid',
  cursor: 'pointer',
});

const getButtonSizeStyles = (size: string, variant: string): CSSProperties => {
  if (variant === BUTTON_VARIANTS.ICON) {
    const iconSizes: Record<string, CSSProperties> = {
      sm: { padding: '0.375rem', fontSize: '0.75rem' },
      md: { padding: '0.5rem', fontSize: '0.875rem' },
      lg: { padding: '0.75rem', fontSize: '1rem' },
    };
    return iconSizes[size] || iconSizes.md;
  }

  if (variant === BUTTON_VARIANTS.CLOSE) {
    return {
      width: '2.5rem',
      height: '2.5rem',
    };
  }

  if (variant === BUTTON_VARIANTS.CLEAR) {
    const clearSizes: Record<string, CSSProperties> = {
      sm: { padding: '0.25rem', fontSize: '0.75rem' },
      md: { padding: '0.25rem', fontSize: '1rem' },
      lg: { padding: '0.25rem', fontSize: '1.125rem' },
    };
    return clearSizes[size] || clearSizes.md;
  }

  const defaultSizes: Record<string, CSSProperties> = {
    sm: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      fontSize: '0.75rem',
    },
    md: {
      paddingLeft: '1.25rem',
      paddingRight: '1.25rem',
      paddingTop: '0.625rem',
      paddingBottom: '0.625rem',
      fontSize: '0.875rem',
    },
    lg: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      fontSize: '1rem',
    },
  };
  return defaultSizes[size] || defaultSizes.md;
};

const getButtonRoundedStyles = (rounded?: string, variant?: string): CSSProperties => {
  if (rounded) {
    const roundedMap: Record<string, string> = {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
    };
    return { borderRadius: roundedMap[rounded] || '0.5rem' };
  }

  if (variant === BUTTON_VARIANTS.CLOSE || variant === BUTTON_VARIANTS.CLEAR) {
    return { borderRadius: '9999px' };
  }

  return { borderRadius: '0.5rem' };
};

const getButtonVariantStyles = (variant: string): CSSProperties => {
  if (variant === BUTTON_VARIANTS.CLOSE) {
    return {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '9999px',
    };
  }

  if (variant === BUTTON_VARIANTS.CLEAR) {
    return {
      position: 'absolute',
      right: '2.8125rem',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      borderRadius: '9999px',
      minWidth: '1.5rem',
      minHeight: '1.5rem',
    };
  }

  return {};
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = BUTTON_VARIANTS.PRIMARY,
      size = BUTTON_SIZES.MD,
      icon,
      iconPosition = BUTTON_ICON_POSITIONS.LEFT,
      isLoading = false,
      loadingText,
      fullWidth = false,
      rounded,
      className = BUTTON_EMPTY_VALUE,
      disableDefaultStyles = false,
      children,
      disabled,
      colors,
      customBg,
      customTextColor,
      customBorderColor,
      style,
      ...props
    },
    ref,
  ) => {
    const colorConfig = colors || DEFAULT_COLOR_CONFIG;

    const variantColors = useMemo(() => {
      let baseColor: string;
      let textColor: string;
      let borderColor: string;

      switch (variant) {
        case BUTTON_VARIANTS.PRIMARY:
          baseColor = customBg || colorConfig.primary;
          textColor = customTextColor || getContrastColor(baseColor);
          borderColor = customBorderColor || 'transparent';
          break;
        case BUTTON_VARIANTS.SECONDARY:
          baseColor = customBg || colorConfig.secondary;
          textColor = customTextColor || colorConfig.primary;
          borderColor = customBorderColor || colorConfig.primary;
          break;
        default:
          baseColor = customBg || colorConfig.accent;
          textColor = customTextColor || getContrastColor(baseColor);
          borderColor = customBorderColor || 'transparent';
          break;
      }

      const hoverBg = getHoverColor(baseColor);
      const hoverTextColor =
        variant === BUTTON_VARIANTS.SECONDARY
          ? getHoverColor(textColor)
          : getContrastColor(hoverBg);
      const disabledBg = adjustOpacity(baseColor, 0.5);
      const disabledTextColor = adjustOpacity(textColor, 0.6);
      const focusRing = adjustOpacity(
        variant === BUTTON_VARIANTS.SECONDARY ? colorConfig.primary : baseColor,
        0.5,
      );

      return {
        bg: baseColor,
        textColor,
        borderColor,
        hoverBg,
        hoverTextColor,
        disabledBg,
        disabledTextColor,
        disabledBorderColor: customBorderColor
          ? adjustOpacity(customBorderColor, 0.5)
          : adjustOpacity(borderColor, 0.5),
        focusRing,
      };
    }, [variant, customBg, customTextColor, customBorderColor, colorConfig]);

    const buttonStyle: CSSProperties = useMemo(() => {
      if (disableDefaultStyles) return style || {};

      const baseStyles = getButtonBaseStyles();
      const sizeStyles = getButtonSizeStyles(size, variant);
      const roundedStyles = getButtonRoundedStyles(rounded, variant);
      const variantSpecificStyles = getButtonVariantStyles(variant);

      const spacingStyles: CSSProperties =
        variant !== BUTTON_VARIANTS.CLOSE &&
        variant !== BUTTON_VARIANTS.CLEAR &&
        variant !== BUTTON_VARIANTS.ICON
          ? { marginLeft: '0.375rem', marginRight: '0.375rem', marginTop: '0.625rem' }
          : {};

      const widthStyles: CSSProperties = fullWidth ? { width: '100%' } : {};

      return {
        ...baseStyles,
        ...sizeStyles,
        ...roundedStyles,
        ...variantSpecificStyles,
        ...spacingStyles,
        ...widthStyles,
        backgroundColor: disabled ? variantColors.disabledBg : variantColors.bg,
        color: disabled ? variantColors.disabledTextColor : variantColors.textColor,
        borderColor: disabled ? variantColors.disabledBorderColor : variantColors.borderColor,
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        ...style,
      };
    }, [
      disableDefaultStyles,
      size,
      variant,
      rounded,
      fullWidth,
      disabled,
      isLoading,
      variantColors,
      style,
    ]);

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !isLoading) {
        e.currentTarget.style.backgroundColor = variantColors.hoverBg;
        e.currentTarget.style.color = variantColors.hoverTextColor;
        if (variant === BUTTON_VARIANTS.CLOSE) {
          e.currentTarget.style.transform = 'rotate(90deg)';
        }
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !isLoading) {
        e.currentTarget.style.backgroundColor = variantColors.bg;
        e.currentTarget.style.color = variantColors.textColor;
        if (variant === BUTTON_VARIANTS.CLOSE) {
          e.currentTarget.style.transform = 'rotate(0deg)';
        }
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
      e.currentTarget.style.boxShadow = `0 0 0 2px ${variantColors.focusRing}`;
    };

    const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
      e.currentTarget.style.boxShadow = 'none';
    };

    const spinnerStyle: CSSProperties = {
      animation: 'spin 1s linear infinite',
      height: '1.25rem',
      width: '1.25rem',
    };

    const iconSpacingStyle: CSSProperties =
      iconPosition === BUTTON_ICON_POSITIONS.LEFT
        ? { marginRight: '0.5rem' }
        : { marginLeft: '0.5rem' };

    const loadingTextStyle: CSSProperties = { marginLeft: '0.5rem' };

    return (
      <>
        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
        <button
          ref={ref}
          disabled={disabled || isLoading}
          style={buttonStyle}
          className={className}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        >
          {isLoading ? (
            <>
              <svg
                style={spinnerStyle}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  style={{ opacity: 0.25 }}
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  style={{ opacity: 0.75 }}
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {loadingText && <span style={loadingTextStyle}>{loadingText}</span>}
            </>
          ) : (
            <>
              {icon && iconPosition === BUTTON_ICON_POSITIONS.LEFT && (
                <span style={iconSpacingStyle}>{icon}</span>
              )}
              {children}
              {icon && iconPosition === BUTTON_ICON_POSITIONS.RIGHT && (
                <span style={iconSpacingStyle}>{icon}</span>
              )}
            </>
          )}
        </button>
      </>
    );
  },
);

Button.displayName = BUTTON_DISPLAY_NAME;

export default Button;
