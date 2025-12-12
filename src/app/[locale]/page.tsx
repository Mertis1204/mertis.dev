/**
 * Home Page
 * Main landing page with all sections
 * SINGLE COMPONENT ARCHITECTURE - Works for all locales
 */

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import { type Locale } from '@/i18n/config';

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params }: HomePageProps) {
  const locale = params.locale as Locale;

  return (
    <>
      <Header locale={locale} />

      <main id="main-content">
        <Hero locale={locale} />
        <About locale={locale} />
        <Experience locale={locale} />
        <Projects locale={locale} />
        <Skills locale={locale} />
        <Contact locale={locale} />
      </main>

      <Footer locale={locale} />
    </>
  );
}

