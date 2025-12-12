/**
 * Translation Loader
 * Type-safe translation loader with compile-time validation
 * Static import compatible with Next.js static export
 */

import trMessages from './messages/tr.json';
import enMessages from './messages/en.json';
import { MessagesSchema, type Messages } from './schemas/messages.schema';
import { type Locale, defaultLocale } from './config';

// Validate messages at build time
function validateMessages(messages: unknown, locale: string): Messages {
  try {
    return MessagesSchema.parse(messages);
  } catch (error) {
    console.error(`❌ Translation validation failed for locale "${locale}":`, error);
    throw new Error(`Translation file for locale "${locale}" is invalid`);
  }
}

// Pre-validated messages
const messagesMap: Record<Locale, Messages> = {
  tr: validateMessages(trMessages, 'tr'),
  en: validateMessages(enMessages, 'en'),
};

/**
 * Get messages for a specific locale
 * @param locale - The locale to get messages for
 * @returns Messages object
 */
export function getMessages(locale: Locale = defaultLocale): Messages {
  return messagesMap[locale] || messagesMap[defaultLocale];
}

