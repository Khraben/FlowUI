export const COMPONENT_CATEGORIES = {
  BUTTONS: 'Buttons',
  INPUTS: 'Inputs',
  CARDS: 'Cards',
  NAVIGATION: 'Navigation',
  FORMS: 'Forms',
  MODALS: 'Modals',
  LAYOUTS: 'Layouts',
  TYPOGRAPHY: 'Typography',
  LOADERS: 'Loaders',
  OTHER: 'Other',
} as const;

export type ComponentCategory = (typeof COMPONENT_CATEGORIES)[keyof typeof COMPONENT_CATEGORIES];
