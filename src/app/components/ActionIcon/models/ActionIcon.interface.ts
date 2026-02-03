import { ComponentType, SVGProps } from 'react';

export interface ActionIconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  color?: string;
  hoverColor?: string;
  hoverBg?: string;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  disabledColor?: string;
}
