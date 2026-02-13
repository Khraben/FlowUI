import { ComponentType, SVGProps } from 'react';
import { BaseColorConfig } from '@/app/types/colors';

export interface ActionIconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;

  colors?: BaseColorConfig;

  customColor?: string;
  customBg?: string;
}
