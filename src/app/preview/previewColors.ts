/**
 * Preview color configuration for component showcase
 * Uses the new simplified color system
 */
import { ExtendedColorConfig } from '@/app/types/colors';

/**
 * Default color palette for preview components
 */
export const PREVIEW_COLOR_CONFIG: ExtendedColorConfig = {
  primary: '#1E90FF', // Dodger Blue
  secondary: '#2C3135', // Dark Gray
  accent: '#00D4FF', // Cyan
  warning: '#FFA500', // Orange
  success: '#32CD32', // Lime Green
  danger: '#FF4444', // Red
};

/**
 * Alternative dark theme for preview
 */
export const PREVIEW_DARK_THEME: ExtendedColorConfig = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#EC4899',
  warning: '#F59E0B',
  success: '#10B981',
  danger: '#EF4444',
};

/**
 * Light theme alternative
 */
export const PREVIEW_LIGHT_THEME: ExtendedColorConfig = {
  primary: '#2563EB',
  secondary: '#7C3AED',
  accent: '#DB2777',
  warning: '#D97706',
  success: '#059669',
  danger: '#DC2626',
};
