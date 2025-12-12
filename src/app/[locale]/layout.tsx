/**
 * Locale Layout
 * Locale-specific layout with validation and metadata
 * Wraps content in ThemeProvider for dark/light mode support
 */

import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { locales, type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/loader';
import { portfolioData } from '@/data/portfolio';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { type ReactNode } from 'react';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

// Generate static params for all locales (for static export)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata for SEO
export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const messages = getMessages(locale);

  return {
    title: `${portfolioData.personal.name} - ${messages.hero.title}`,
    description: messages.about.description,
    keywords: [
      'fullstack developer',
      'senior developer',
      'next.js',
      'typescript',
      'react',
      'node.js',
      portfolioData.personal.name,
    ],
    authors: [{ name: portfolioData.personal.name, url: 'https://mertis.dev' }],
    creator: portfolioData.personal.name,
    metadataBase: new URL('https://mertis.dev'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        tr: '/tr',
        en: '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      url: `https://mertis.dev/${locale}`,
      title: `${portfolioData.personal.name} - ${messages.hero.title}`,
      description: messages.about.description,
      siteName: portfolioData.personal.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${portfolioData.personal.name} - ${messages.hero.title}`,
      description: messages.about.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Color scheme meta tag */}
        <meta name="color-scheme" content="dark light" />
        {/* FOUC prevention - inline blocking script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'system';var r=t==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t;document.documentElement.classList.add(r);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased bg-background text-text-primary">
        <ThemeProvider defaultTheme="system">
          {/* Animated gradient background */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Noise texture overlay */}
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%">
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
          </div>

          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-primary focus:text-white focus:rounded-lg shadow-lg"
          >
            Skip to main content
          </a>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

