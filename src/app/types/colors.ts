/**
 * Base color configuration required for all components
 */
export interface BaseColorConfig {
  primary: string;
  secondary: string;
  accent: string;
}

/**
 * Extended color configuration with status colors
 * Use this for components that need warning, success, or danger states
 */
export interface ExtendedColorConfig extends BaseColorConfig {
  warning: string;
  success: string;
  danger: string;
}

/**
 * Type guard to check if color config has extended colors
 */
export function hasExtendedColors(
  config: BaseColorConfig | ExtendedColorConfig,
): config is ExtendedColorConfig {
  return 'warning' in config && 'success' in config && 'danger' in config;
}

/**
 * Default color configuration
 */
export const DEFAULT_COLOR_CONFIG: ExtendedColorConfig = {
  primary: '#3B82F6', // Blue-500
  secondary: '#8B5CF6', // Violet-500
  accent: '#EC4899', // Pink-500
  warning: '#F59E0B', // Amber-500
  success: '#10B981', // Emerald-500
  danger: '#EF4444', // Red-500
};
