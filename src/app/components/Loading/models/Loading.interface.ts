import { BaseColorConfig } from '@/app/types/colors';

export interface LoadingProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse';
  showOverlay?: boolean;

  colors?: BaseColorConfig;

  customOverlayColor?: string;
  customSpinnerColor?: string;
}
