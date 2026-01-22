import { forwardRef, useMemo } from 'react';
import { ButtonProps } from './models/Button.interface';
import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_ICON_POSITIONS,
  BUTTON_BASE_STYLES,
  BUTTON_VARIANT_STYLES,
  BUTTON_SIZE_STYLES,
  BUTTON_ROUNDED_MAP,
  BUTTON_ROUNDED_DEFAULTS,
  BUTTON_SPACING_STYLES,
  BUTTON_FULL_WIDTH_STYLES,
  BUTTON_LOADING_SPINNER_STYLES,
  BUTTON_ICON_SPACING,
  BUTTON_LOADING_TEXT_SPACING,
  BUTTON_SPINNER,
  BUTTON_EMPTY_VALUE,
  BUTTON_WHITESPACE_REGEX,
  BUTTON_SINGLE_SPACE,
  BUTTON_COLOR_METADATA,
  BUTTON_DISPLAY_NAME,
  STRING,
  SVG,
} from '@/constants';

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
      baseClassName,
      variantClassName,
      sizeClassName,
      disableDefaultStyles = false,
      children,
      disabled,
      bg,
      textColor,
      borderColor,
      hoverBg,
      hoverTextColor,
      disabledBg,
      disabledTextColor,
      disabledBorderColor,
      focusRing,
      style,
      ...props
    },
    ref,
  ) => {
    const baseStyles = disableDefaultStyles
      ? BUTTON_EMPTY_VALUE
      : baseClassName || BUTTON_BASE_STYLES;

    const variantStyles = disableDefaultStyles
      ? BUTTON_EMPTY_VALUE
      : variantClassName || BUTTON_VARIANT_STYLES[variant];

    const getSizeStyles = () => {
      if (variant === BUTTON_VARIANTS.ICON) return BUTTON_SIZE_STYLES.icon[size];
      if (variant === BUTTON_VARIANTS.CLOSE) return BUTTON_SIZE_STYLES.close[size];
      if (variant === BUTTON_VARIANTS.CLEAR) return BUTTON_SIZE_STYLES.clear[size];
      return BUTTON_SIZE_STYLES.default[size];
    };

    const sizeStyles = disableDefaultStyles ? BUTTON_EMPTY_VALUE : sizeClassName || getSizeStyles();

    const roundedStyles = disableDefaultStyles
      ? BUTTON_EMPTY_VALUE
      : rounded
        ? BUTTON_ROUNDED_MAP[rounded]
        : BUTTON_ROUNDED_DEFAULTS[variant];

    const spacingStyles =
      variant !== BUTTON_VARIANTS.CLOSE &&
      variant !== BUTTON_VARIANTS.CLEAR &&
      variant !== BUTTON_VARIANTS.ICON
        ? BUTTON_SPACING_STYLES
        : BUTTON_EMPTY_VALUE;

    const widthStyles = fullWidth ? BUTTON_FULL_WIDTH_STYLES : BUTTON_EMPTY_VALUE;

    const inlineStyles = useMemo(() => {
      if (!bg && !textColor) return style;

      return {
        ...style,
        [BUTTON_COLOR_METADATA.BG]: bg,
        [BUTTON_COLOR_METADATA.TEXT]: textColor,
        [BUTTON_COLOR_METADATA.BORDER]: borderColor || STRING.TRANSPARENT,
        [BUTTON_COLOR_METADATA.HOVER_BG]: hoverBg,
        [BUTTON_COLOR_METADATA.HOVER_TEXT]: hoverTextColor || textColor,
        [BUTTON_COLOR_METADATA.DISABLED_BG]: disabledBg,
        [BUTTON_COLOR_METADATA.DISABLED_TEXT]: disabledTextColor,
        [BUTTON_COLOR_METADATA.DISABLED_BORDER]: disabledBorderColor || STRING.TRANSPARENT,
        [BUTTON_COLOR_METADATA.FOCUS_RING]: focusRing,
        backgroundColor: disabled ? disabledBg : bg,
        color: disabled ? disabledTextColor : textColor,
        borderColor: disabled
          ? disabledBorderColor || STRING.TRANSPARENT
          : borderColor || STRING.TRANSPARENT,
      } as React.CSSProperties;
    }, [
      bg,
      textColor,
      borderColor,
      hoverBg,
      hoverTextColor,
      disabledBg,
      disabledTextColor,
      disabledBorderColor,
      focusRing,
      disabled,
      style,
    ]);

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        style={inlineStyles}
        className={`
          ${baseStyles}
          ${variantStyles}
          ${sizeStyles}
          ${roundedStyles}
          ${spacingStyles}
          ${widthStyles}
          ${className}
        `
          .trim()
          .replace(BUTTON_WHITESPACE_REGEX, BUTTON_SINGLE_SPACE)}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className={BUTTON_LOADING_SPINNER_STYLES}
              xmlns={SVG.NAMESPACE}
              fill={SVG.FILL.NONE}
              viewBox={SVG.VIEWBOX}
            >
              <circle
                className={BUTTON_SPINNER.OPACITY.CIRCLE}
                cx={BUTTON_SPINNER.CIRCLE.CX}
                cy={BUTTON_SPINNER.CIRCLE.CY}
                r={BUTTON_SPINNER.CIRCLE.R}
                stroke={SVG.FILL.CURRENT}
                strokeWidth={BUTTON_SPINNER.CIRCLE.STROKE_WIDTH}
              />
              <path
                className={BUTTON_SPINNER.OPACITY.PATH}
                fill={SVG.FILL.CURRENT}
                d={BUTTON_SPINNER.PATH_D}
              />
            </svg>
            {loadingText && <span className={BUTTON_LOADING_TEXT_SPACING}>{loadingText}</span>}
          </>
        ) : (
          <>
            {icon && iconPosition === BUTTON_ICON_POSITIONS.LEFT && (
              <span className={BUTTON_ICON_SPACING.left}>{icon}</span>
            )}
            {children}
            {icon && iconPosition === BUTTON_ICON_POSITIONS.RIGHT && (
              <span className={BUTTON_ICON_SPACING.right}>{icon}</span>
            )}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = BUTTON_DISPLAY_NAME;

export default Button;
