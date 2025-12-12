/**
 * About Section Component
 * Personal information and bio
 * NO HARDCODED DATA - All content from data/translations
 */

'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { portfolioData } from '@/data/portfolio';
import { type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/loader';
import { motion } from 'framer-motion';

interface AboutProps {
  locale: Locale;
}

export function About({ locale }: AboutProps) {
  const t = getMessages(locale);

  return (
    <section id="about" className="py-24 px-4 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 mb-4"
          >
            <span className="text-sm font-semibold text-accent-secondary">About Me</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            {t.about.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto border-2">
            <CardContent className="text-lg leading-relaxed">
              <p className="text-text-secondary text-justify">
                {typeof portfolioData.personal.about === 'object' 
                  ? portfolioData.personal.about[locale] 
                  : portfolioData.personal.about}
              </p>

              {/* Education */}
              <div className="mt-8 pt-8 border-t-2 border-border">
                <h3 className="text-2xl font-bold mb-6 text-text-primary flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  {locale === 'tr' ? 'Eğitim' : 'Education'}
                </h3>
                <div className="space-y-3 text-text-secondary p-5 rounded-xl bg-surface-hover border border-border">
                  <p className="font-bold text-lg text-text-primary">
                    {typeof portfolioData.education.degree === 'object' 
                      ? portfolioData.education.degree[locale] 
                      : portfolioData.education.degree}
                  </p>
                  <p className="font-medium">{portfolioData.education.university}</p>
                  <p className="text-sm text-text-tertiary font-medium">{portfolioData.education.years}</p>
                </div>
              </div>

              {/* Location */}
              <div className="mt-6 flex items-center gap-2 text-text-secondary">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{portfolioData.personal.location}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

