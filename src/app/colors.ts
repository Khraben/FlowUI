/**
 * Color utilities and types index
 * Export all color-related utilities and types for easy importing
 */

// Color types
export type { BaseColorConfig, ExtendedColorConfig } from './types/colors';

export { hasExtendedColors, DEFAULT_COLOR_CONFIG } from './types/colors';

// Color utilities
export {
  isDarkColor,
  darkenColor,
  lightenColor,
  getHoverColor,
  getContrastColor,
  adjustOpacity,
} from './utils/colorUtils';
