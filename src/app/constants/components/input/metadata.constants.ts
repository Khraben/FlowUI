export const INPUT_TIME = {
  PERIODS: {
    AM: 'am',
    PM: 'pm',
  },
  DEFAULTS: {
    START_HOUR: 0,
    END_HOUR: 23,
    INTERVAL: 30,
    DISPLAY_12H: 12,
  },
  FORMAT: {
    MINUTES_PER_HOUR: 60,
    NOON_HOUR: 12,
    ZERO_HOUR: 0,
    ZERO_MINUTE_PAD: '00',
    TIME_SEPARATOR: ':',
  },
} as const;

export const INPUT_AUTOCOMPLETE = {
  OFF: 'off',
  ON: 'on',
} as const;

export const INPUT_ICON_SIZES_PX = {
  SM: 14,
  MD: 16,
  LG: 18,
} as const;
