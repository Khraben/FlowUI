import { ComponentType, SVGProps } from 'react';
import { BaseColorConfig } from '@/app/types/colors';

export interface ActionIconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;

  // New simplified color system
  colors?: BaseColorConfig;

  // Optional overrides
  customColor?: string;
  customBg?: string;
}
