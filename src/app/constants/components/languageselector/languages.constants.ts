import { FlagEN, FlagES, FlagPT, FlagFR, FlagIT, FlagRU, FlagJA, FlagDE, FlagZH } from '@/flags';

export const ALL_LANGUAGES = {
  en: {
    name: {
      en: 'English',
      es: 'Inglés',
      pt: 'Inglês',
      fr: 'Anglais',
      it: 'Inglese',
      ru: 'Английский',
      ja: '英語',
      de: 'Englisch',
      zh: '英语',
    },
    flag: FlagEN,
    code: 'en',
  },
  es: {
    name: {
      en: 'Spanish',
      es: 'Español',
      pt: 'Espanhol',
      fr: 'Espagnol',
      it: 'Spagnolo',
      ru: 'Испанский',
      ja: 'スペイン語',
      de: 'Spanisch',
      zh: '西班牙语',
    },
    flag: FlagES,
    code: 'es',
  },
  pt: {
    name: {
      en: 'Portuguese',
      es: 'Portugués',
      pt: 'Português',
      fr: 'Portugais',
      it: 'Portoghese',
      ru: 'Португальский',
      ja: 'ポルトガル語',
      de: 'Portugiesisch',
      zh: '葡萄牙语',
    },
    flag: FlagPT,
    code: 'pt',
  },
  fr: {
    name: {
      en: 'French',
      es: 'Francés',
      pt: 'Francês',
      fr: 'Français',
      it: 'Francese',
      ru: 'Французский',
      ja: 'フランス語',
      de: 'Französisch',
      zh: '法语',
    },
    flag: FlagFR,
    code: 'fr',
  },
  it: {
    name: {
      en: 'Italian',
      es: 'Italiano',
      pt: 'Italiano',
      fr: 'Italien',
      it: 'Italiano',
      ru: 'Итальянский',
      ja: 'イタリア語',
      de: 'Italienisch',
      zh: '意大利语',
    },
    flag: FlagIT,
    code: 'it',
  },
  ru: {
    name: {
      en: 'Russian',
      es: 'Ruso',
      pt: 'Russo',
      fr: 'Russe',
      it: 'Russo',
      ru: 'Русский',
      ja: 'ロシア語',
      de: 'Russisch',
      zh: '俄语',
    },
    flag: FlagRU,
    code: 'ru',
  },
  ja: {
    name: {
      en: 'Japanese',
      es: 'Japonés',
      pt: 'Japonês',
      fr: 'Japonais',
      it: 'Giapponese',
      ru: 'Японский',
      ja: '日本語',
      de: 'Japanisch',
      zh: '日语',
    },
    flag: FlagJA,
    code: 'ja',
  },
  de: {
    name: {
      en: 'German',
      es: 'Alemán',
      pt: 'Alemão',
      fr: 'Allemand',
      it: 'Tedesco',
      ru: 'Немецкий',
      ja: 'ドイツ語',
      de: 'Deutsch',
      zh: '德语',
    },
    flag: FlagDE,
    code: 'de',
  },
  zh: {
    name: {
      en: 'Chinese (Simplified)',
      es: 'Chino (Simplificado)',
      pt: 'Chinês (Simplificado)',
      fr: 'Chinois (Simplifié)',
      it: 'Cinese (Semplificato)',
      ru: 'Китайский (Упрощенный)',
      ja: '中国語（簡体字）',
      de: 'Chinesisch (Vereinfacht)',
      zh: '简体中文',
    },
    flag: FlagZH,
    code: 'zh',
  },
} as const;

export const DEFAULT_LANGUAGES = {
  en: ALL_LANGUAGES.en,
  es: ALL_LANGUAGES.es,
} as const;

export const DEFAULT_AVAILABLE_LANGUAGES = ['en', 'es'] as const;

export const DEFAULT_SELECTED_LANGUAGE = 'en';

export const LANGUAGE_SELECTOR_DISPLAY_NAME = 'LanguageSelector';

export const LANGUAGE_SELECTOR_DROPDOWN_OFFSET = 8;
