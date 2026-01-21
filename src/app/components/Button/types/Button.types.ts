import { BUTTON_VARIANTS, BUTTON_SIZES } from '@/constants';

export type ButtonVariant = typeof BUTTON_VARIANTS[keyof typeof BUTTON_VARIANTS];
export type ButtonSize = typeof BUTTON_SIZES[keyof typeof BUTTON_SIZES];
