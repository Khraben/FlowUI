export const SIZE = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export const POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
} as const;

export const STRING = {
  EMPTY: '',
  SPACE: ' ',
  SINGLE_SPACE: ' ',
  TRANSPARENT: 'transparent',
} as const;

export const REGEX = {
  WHITESPACE: /\s+/g,
} as const;

export const SVG = {
  NAMESPACE: 'http://www.w3.org/2000/svg',
  VIEWBOX: '0 0 24 24',
  FILL: {
    NONE: 'none',
    CURRENT: 'currentColor',
  },
} as const;

export const CSS_VAR = {
  BUTTON: {
    BG: '--btn-bg',
    TEXT: '--btn-text',
    BORDER: '--btn-border',
    HOVER_BG: '--btn-hover-bg',
    HOVER_TEXT: '--btn-hover-text',
    DISABLED_BG: '--btn-disabled-bg',
    DISABLED_TEXT: '--btn-disabled-text',
    DISABLED_BORDER: '--btn-disabled-border',
    FOCUS_RING: '--btn-focus-ring',
  },
} as const;
