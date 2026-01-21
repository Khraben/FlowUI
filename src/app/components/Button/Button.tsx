import { forwardRef } from 'react';
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
  BUTTON_DISPLAY_NAME,
  BUTTON_SVG_NAMESPACE,
  BUTTON_SVG_VIEWBOX,
  BUTTON_SPINNER_CIRCLE,
  BUTTON_SPINNER_PATH_D,
  BUTTON_OPACITY_VALUES,
  BUTTON_SVG_FILL,
  BUTTON_EMPTY_VALUE,
  BUTTON_WHITESPACE_REGEX,
  BUTTON_SINGLE_SPACE,
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

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
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
              xmlns={BUTTON_SVG_NAMESPACE}
              fill={BUTTON_SVG_FILL.none}
              viewBox={BUTTON_SVG_VIEWBOX}
            >
              <circle
                className={BUTTON_OPACITY_VALUES.circle}
                cx={BUTTON_SPINNER_CIRCLE.cx}
                cy={BUTTON_SPINNER_CIRCLE.cy}
                r={BUTTON_SPINNER_CIRCLE.r}
                stroke={BUTTON_SVG_FILL.current}
                strokeWidth={BUTTON_SPINNER_CIRCLE.strokeWidth}
              ></circle>
              <path
                className={BUTTON_OPACITY_VALUES.path}
                fill={BUTTON_SVG_FILL.current}
                d={BUTTON_SPINNER_PATH_D}
              ></path>
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
