/**
 * i18n Configuration
 * Internationalization settings for the application
 * Zero hardcoded - all locales defined here
 */

export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

export const localeNames: Record<Locale, string> = {
  tr: 'Türkçe',
  en: 'English',
} as const;

export const i18nConfig = {
  locales,
  defaultLocale,
  localeNames,
} as const;

