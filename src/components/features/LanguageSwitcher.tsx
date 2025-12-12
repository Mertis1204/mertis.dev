/**
 * Language Switcher Component
 * Dropdown to switch between available locales
 * Updates URL path with selected locale
 */

'use client';

import { locales, type Locale } from '@/i18n/config';
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
          'flex items-center gap-2 px-3 py-1.5 rounded-md',
          'bg-transparent hover:bg-surface-hover',
          'text-text-secondary hover:text-text-primary',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 focus-visible:ring-offset-2',
          isOpen && 'bg-surface-hover text-text-primary'
        )}
        aria-label="Switch language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm font-semibold text-text-primary uppercase tracking-wide">{currentLocale}</span>
        <svg
          className={cn(
            'w-3.5 h-3.5 text-text-tertiary transition-transform duration-200',
            isOpen && 'rotate-180 text-text-primary'
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
              'absolute right-0 mt-2 w-36 z-50',
              'bg-surface border border-border rounded-xl shadow-2xl',
              'backdrop-blur-xl',
              'animate-scale-in overflow-hidden'
            )}
            role="menu"
            aria-orientation="vertical"
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLanguage(locale)}
                className={cn(
                  'w-full px-4 py-2.5 text-left text-sm transition-all',
                  'hover:bg-surface-hover',
                  'first:rounded-t-xl last:rounded-b-xl',
                  currentLocale === locale 
                    ? 'bg-surface-hover text-text-primary font-semibold' 
                    : 'text-text-secondary hover:text-text-primary'
                )}
                role="menuitem"
              >
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wide">{locale}</span>
                  {currentLocale === locale && (
                    <svg
                      className="w-4 h-4 text-accent-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
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

