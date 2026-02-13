import { BaseColorConfig } from '@/app/types/colors';

export interface LoaderProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse';
  fullScreen?: boolean;
  overlay?: boolean;

  colors?: BaseColorConfig;

  customOverlayColor?: string;
  customSpinnerColor?: string;
}
