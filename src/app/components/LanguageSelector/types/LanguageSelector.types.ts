export interface LanguageOption {
  name: string | Record<string, string>;
  flag: string;
  code: string;
}

export type LanguageSelectorSize = 'sm' | 'md' | 'lg';
