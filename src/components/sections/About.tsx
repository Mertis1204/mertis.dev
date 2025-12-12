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
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-primary">
            {t.about.title}
          </h2>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="text-lg leading-relaxed">
              <p className="text-text-secondary">{portfolioData.personal.about}</p>

              {/* Education */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold mb-4 text-text-primary">
                  {t.experience.title}
                </h3>
                <div className="space-y-2 text-text-secondary">
                  <p className="font-medium">{portfolioData.education.degree}</p>
                  <p>{portfolioData.education.university}</p>
                  <p className="text-sm text-text-tertiary">{portfolioData.education.years}</p>
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

