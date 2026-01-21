import { INPUT_VARIANTS, INPUT_SIZES } from '@/constants';

export type InputVariant = (typeof INPUT_VARIANTS)[keyof typeof INPUT_VARIANTS];
export type InputSize = (typeof INPUT_SIZES)[keyof typeof INPUT_SIZES];
