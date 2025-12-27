import { ja } from './translations/ja';
import { en } from './translations/en';
import { jaVariantB } from './translations/ja-variant-b';

export const languages = {
  ja: '日本語',
  en: 'English',
  'ja-variant-b': '日本語 (Variant B)',
} as const;

export const defaultLang = 'ja' as const;

export type Lang = keyof typeof languages;

const ui = { ja, en, 'ja-variant-b': jaVariantB } as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}
