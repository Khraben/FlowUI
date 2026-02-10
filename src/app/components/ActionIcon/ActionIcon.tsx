'use client';

import React, { useState, useMemo, CSSProperties } from 'react';
import { ActionIconProps } from './models/ActionIcon.interface';
import { ACTION_ICON_DISPLAY_NAME } from '@/app/constants/components/actionicon/styles.constants';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { getHoverColor, adjustOpacity } from '@/app/utils/colorUtils';

// Size configurations
const SIZE_CONFIG = {
  sm: {
    padding: '0.25rem', // p-1
    margin: '0.125rem', // mx-0.5
    iconSize: '0.875rem', // w-3.5 h-3.5 (14px)
  },
  md: {
    padding: '0.375rem', // p-1.5
    margin: '0.125rem', // mx-0.5
    iconSize: '1rem', // w-4 h-4 (16px)
  },
  lg: {
    padding: '0.5rem', // p-2
    margin: '0.25rem', // mx-1
    iconSize: '1.25rem', // w-5 h-5 (20px)
  },
} as const;

export const ActionIcon: React.FC<ActionIconProps> = ({
  icon: Icon,
  onClick,
  title,
  size = 'md',
  className = '',
  disabled = false,
  colors,
  customColor,
  customBg,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Use default colors if not provided
  const colorConfig = colors || DEFAULT_COLOR_CONFIG;
  const sizeConfig = SIZE_CONFIG[size];

  // Calculate dynamic colors
  const iconColors = useMemo(() => {
    const baseColor = customColor || colorConfig.primary;
    const hoverColor = getHoverColor(baseColor);
    const hoverBg = customBg ? getHoverColor(customBg, 5) : adjustOpacity(baseColor, 0.1);
    const disabledColor = adjustOpacity(baseColor, 0.4);

    return {
      color: baseColor,
      hoverColor,
      hoverBg,
      disabledColor,
    };
  }, [colorConfig, customColor, customBg]);

  // Button styles
  const getButtonStyles = (): CSSProperties => {
    const baseStyles: CSSProperties = {
      background: 'transparent',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 200ms ease-in-out',
      borderRadius: '0.375rem', // rounded-md
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: sizeConfig.padding,
      marginLeft: sizeConfig.margin,
      marginRight: sizeConfig.margin,
      opacity: disabled ? 0.5 : 1,
      color: disabled ? iconColors.disabledColor : iconColors.color,
      backgroundColor: isHovered && !disabled ? iconColors.hoverBg : 'transparent',
      transform:
        isHovered && !disabled
          ? 'translateY(-0.125rem)' // hover:-translate-y-0.5
          : isActive && !disabled
            ? 'translateY(0)' // active:translate-y-0
            : 'none',
    };

    return baseStyles;
  };

  // Icon styles
  const getIconStyles = (): CSSProperties => ({
    width: sizeConfig.iconSize,
    height: sizeConfig.iconSize,
    transition: 'transform 200ms ease-in-out',
    transform: isHovered && !disabled ? 'scale(1.1)' : 'scale(1)', // hover:scale-110
  });

  return (
    <button
      onClick={disabled ? undefined : onClick}
      title={title}
      className={className}
      disabled={disabled}
      type="button"
      style={getButtonStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <Icon style={getIconStyles()} />
    </button>
  );
};

ActionIcon.displayName = ACTION_ICON_DISPLAY_NAME;

export default ActionIcon;
