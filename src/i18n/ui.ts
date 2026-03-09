import en from '../data/locales/en.json';
import es from '../data/locales/es.json';

export const languages = { en: 'English', es: 'Español' };
export const defaultLang = 'en' as const;

export const ui = { en, es } as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof typeof en;
