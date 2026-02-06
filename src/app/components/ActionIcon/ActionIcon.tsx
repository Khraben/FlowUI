'use client';

import React, { useMemo } from 'react';
import { ActionIconProps } from './models/ActionIcon.interface';
import {
  ACTION_ICON_BASE,
  ACTION_ICON_SIZES,
  ACTION_ICON_ICON_SIZES,
  ACTION_ICON_DISABLED_CURSOR,
  ACTION_ICON_ICON_HOVER_SCALE,
  ACTION_ICON_DISPLAY_NAME,
} from '@/app/constants/components/actionicon/styles.constants';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { getHoverColor, adjustOpacity } from '@/app/utils/colorUtils';

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
  // Use default colors if not provided
  const colorConfig = colors || DEFAULT_COLOR_CONFIG;

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

  const sizeClass = ACTION_ICON_SIZES[size];
  const iconSizeClass = ACTION_ICON_ICON_SIZES[size];

  const inlineStyles = useMemo(() => {
    if (!colors && !customColor && !customBg) return undefined;

    return {
      '--icon-color': iconColors.color,
      '--icon-hover-color': iconColors.hoverColor,
      '--icon-hover-bg': iconColors.hoverBg,
      '--icon-disabled-color': iconColors.disabledColor,
      color: disabled ? iconColors.disabledColor : iconColors.color,
    } as React.CSSProperties;
  }, [iconColors, disabled, colors, customColor, customBg]);

  const buttonClasses =
    `${ACTION_ICON_BASE} ${sizeClass} ${disabled ? ACTION_ICON_DISABLED_CURSOR : ''} ${className}`.trim();

  const iconClasses = `${iconSizeClass} ${!disabled ? ACTION_ICON_ICON_HOVER_SCALE : ''}`.trim();

  return (
    <button
      onClick={disabled ? undefined : onClick}
      title={title}
      className={buttonClasses}
      disabled={disabled}
      type="button"
      style={inlineStyles}
    >
      <Icon className={iconClasses} />
    </button>
  );
};

ActionIcon.displayName = ACTION_ICON_DISPLAY_NAME;

export default ActionIcon;
