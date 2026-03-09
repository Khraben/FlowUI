import { BaseColorConfig } from '@/app/types/colors';

export interface ThemeSelectorProps {
  theme?: 'light' | 'dark';
  onThemeChange?: (theme: 'light' | 'dark') => void;
  size?: 'sm' | 'md' | 'lg';
  buttonClassName?: string;
  disableDefaultStyles?: boolean;

  colors?: BaseColorConfig;

  customBorderColor?: string;
  customBgColor?: string;
}
