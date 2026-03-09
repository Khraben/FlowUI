'use client';

import React, { useMemo, CSSProperties } from 'react';
import { ThemeSelectorProps } from './models/ThemeSelector.interface';
import { ThemeIcon } from './icons/ThemeIcon';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { adjustOpacity, getContrastColor } from '@/app/utils/colorUtils';

const getButtonSizeStyles = (size: string): CSSProperties => {
  const sizeMap: Record<string, CSSProperties> = {
    sm: { width: '2rem', height: '2rem' },
    md: { width: '2.5rem', height: '2.5rem' },
    lg: { width: '3rem', height: '3rem' },
  };
  return sizeMap[size] || sizeMap.md;
};

const getIconSizeStyles = (size: string): number => {
  const sizeMap: Record<string, number> = {
    sm: 32,
    md: 42,
    lg: 54,
  };
  return sizeMap[size] || sizeMap.md;
};

const getButtonBaseStyles = (): CSSProperties => ({
  borderRadius: '9999px',
  overflow: 'hidden',
  transition: 'all 300ms',
  outline: 'none',
  border: '2px solid',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

export const ThemeSelector = React.forwardRef<HTMLButtonElement, ThemeSelectorProps>(
  (
    {
      theme = 'light',
      onThemeChange,
      size = 'md',
      buttonClassName,
      disableDefaultStyles = false,
      colors,
      customBorderColor,
      customBgColor,
    },
    ref,
  ) => {
    const colorConfig = colors || DEFAULT_COLOR_CONFIG;

    const selectorColors = useMemo(() => {
      const buttonBg = customBgColor || '#000000';
      const textColor = getContrastColor(buttonBg);
      const buttonBorder = customBorderColor || adjustOpacity(textColor, 0.2);
      const buttonBorderHover = colorConfig.accent || colorConfig.primary;

      return {
        buttonBg,
        buttonBorder,
        buttonBorderHover,
      };
    }, [colorConfig, customBorderColor, customBgColor]);

    const handleThemeToggle = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      onThemeChange?.(newTheme);
    };

    const buttonStyle: CSSProperties = disableDefaultStyles
      ? {}
      : {
          ...getButtonBaseStyles(),
          ...getButtonSizeStyles(size),
          backgroundColor: selectorColors.buttonBg,
          borderColor: selectorColors.buttonBorder,
        };

    const iconSize = getIconSizeStyles(size);

    return (
      <button
        ref={ref}
        onClick={handleThemeToggle}
        className={buttonClassName}
        style={
          disableDefaultStyles
            ? {}
            : {
                ...buttonStyle,
                ...(buttonClassName
                  ? {}
                  : { '&:hover': { borderColor: selectorColors.buttonBorderHover } }),
              }
        }
        onMouseEnter={(e) => {
          if (!disableDefaultStyles) {
            e.currentTarget.style.borderColor = selectorColors.buttonBorderHover;
          }
        }}
        onMouseLeave={(e) => {
          if (!disableDefaultStyles) {
            e.currentTarget.style.borderColor = selectorColors.buttonBorder;
          }
        }}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        <ThemeIcon mode={theme} size={iconSize} />
      </button>
    );
  },
);

ThemeSelector.displayName = 'ThemeSelector';
