/**
 * 404 Not Found Page
 * Locale-aware error page
 */

import { Button } from '@/components/ui/Button';
import { type Locale, defaultLocale } from '@/i18n/config';
import Link from 'next/link';

interface NotFoundProps {
  params?: { locale: string };
}

export default function NotFound({ params }: NotFoundProps) {
  const locale = (params?.locale as Locale) || defaultLocale;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-text-primary mb-4">
          {locale === 'tr' ? 'Sayfa Bulunamadı' : 'Page Not Found'}
        </h2>
        <p className="text-text-secondary mb-8">
          {locale === 'tr'
            ? 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.'
            : 'The page you are looking for does not exist or may have been moved.'}
        </p>
        <Link href={`/${locale}`}>
          <Button variant="primary" size="lg">
            {locale === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
          </Button>
        </Link>
      </div>
    </div>
  );
}

