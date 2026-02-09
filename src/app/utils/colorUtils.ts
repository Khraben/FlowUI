/**
 * Color utility functions for dynamic color manipulation
 */

/**
 * Converts hex color to RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Converts RGB values to hex color
 */
function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = Math.round(Math.max(0, Math.min(255, x))).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}

/**
 * Calculates relative luminance of a color
 * Used to determine if a color is light or dark
 */
function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;

  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
    const channel = val / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Determines if a color is dark based on its luminance
 */
export function isDarkColor(hex: string): boolean {
  return getLuminance(hex) < 0.5;
}

/**
 * Darkens a color by a given percentage
 * @param hex - Hex color string (e.g., '#FF5733')
 * @param percent - Percentage to darken (0-100)
 */
export function darkenColor(hex: string, percent: number = 10): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const factor = 1 - percent / 100;
  return rgbToHex(rgb.r * factor, rgb.g * factor, rgb.b * factor);
}

/**
 * Lightens a color by a given percentage
 * @param hex - Hex color string (e.g., '#FF5733')
 * @param percent - Percentage to lighten (0-100)
 */
export function lightenColor(hex: string, percent: number = 10): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const factor = percent / 100;
  return rgbToHex(
    rgb.r + (255 - rgb.r) * factor,
    rgb.g + (255 - rgb.g) * factor,
    rgb.b + (255 - rgb.b) * factor,
  );
}

/**
 * Automatically calculates the hover color for a given base color
 * Darkens light colors and lightens dark colors
 * @param hex - Hex color string
 * @param intensity - Intensity of the effect (default: 10)
 */
export function getHoverColor(hex: string, intensity: number = 10): string {
  return isDarkColor(hex) ? lightenColor(hex, intensity) : darkenColor(hex, intensity);
}

/**
 * Gets a contrast color (black or white) for text based on background color
 */
export function getContrastColor(hex: string): string {
  return isDarkColor(hex) ? '#FFFFFF' : '#000000';
}

/**
 * Adjusts color opacity
 * @param hex - Hex color string
 * @param opacity - Opacity value (0-1)
 */
export function adjustOpacity(hex: string, opacity: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.max(0, Math.min(1, opacity))})`;
}
