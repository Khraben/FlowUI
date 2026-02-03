'use client';

import React from 'react';
import { ActionIconProps } from './models/ActionIcon.interface';
import { STATIC_COLORS } from '@/app/constants/';
import {
  ACTION_ICON_BASE,
  ACTION_ICON_SIZES,
  ACTION_ICON_ICON_SIZES,
  ACTION_ICON_DISABLED_CURSOR,
  ACTION_ICON_ICON_HOVER_SCALE,
  ACTION_ICON_DISPLAY_NAME,
} from '@/app/constants/components/actionicon/styles.constants';

export const ActionIcon: React.FC<ActionIconProps> = ({
  icon: Icon,
  onClick,
  color,
  hoverColor,
  hoverBg,
  title,
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const disabledColor = STATIC_COLORS.DISABLED_BG;
  const sizeClass = ACTION_ICON_SIZES[size];
  const iconSizeClass = ACTION_ICON_ICON_SIZES[size];

  const buttonClasses =
    `${ACTION_ICON_BASE} ${sizeClass} ${disabled ? ACTION_ICON_DISABLED_CURSOR : ''} ${disabled ? disabledColor : color} ${!disabled ? hoverColor : ''} ${!disabled ? hoverBg : ''} ${className}`.trim();

  const iconClasses = `${iconSizeClass} ${!disabled ? ACTION_ICON_ICON_HOVER_SCALE : ''}`.trim();

  return (
    <button
      onClick={disabled ? undefined : onClick}
      title={title}
      className={buttonClasses}
      disabled={disabled}
      type="button"
    >
      <Icon className={iconClasses} />
    </button>
  );
};

ActionIcon.displayName = ACTION_ICON_DISPLAY_NAME;

export default ActionIcon;
