/**
 * Language Switcher Component
 * Dropdown to switch between available locales
 * Updates URL path with selected locale
 */

'use client';

import { locales, localeNames, type Locale } from '@/i18n/config';
import { cn } from '@/lib/cn';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LanguageSwitcher({ currentLocale, className }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: Locale) => {
    // Replace current locale in pathname
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace locale segment
    const newPath = segments.join('/');

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-lg',
          'bg-surface border border-border',
          'hover:border-accent-primary transition-colors duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2'
        )}
        aria-label="Switch language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm font-medium text-text-primary uppercase">{currentLocale}</span>
        <svg
          className={cn(
            'w-4 h-4 text-text-secondary transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown */}
          <div
            className={cn(
              'absolute right-0 mt-2 w-40 z-50',
              'bg-surface border border-border rounded-lg shadow-xl',
              'animate-scale-in'
            )}
            role="menu"
            aria-orientation="vertical"
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLanguage(locale)}
                className={cn(
                  'w-full px-4 py-3 text-left text-sm transition-colors',
                  'hover:bg-accent-primary/10 hover:text-accent-primary',
                  'first:rounded-t-lg last:rounded-b-lg',
                  currentLocale === locale && 'bg-accent-primary/20 text-accent-primary font-medium'
                )}
                role="menuitem"
              >
                <div className="flex items-center justify-between">
                  <span>{localeNames[locale]}</span>
                  {currentLocale === locale && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

