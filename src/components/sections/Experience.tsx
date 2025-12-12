/**
 * Experience Section Component
 * Work experience timeline
 * NO HARDCODED DATA - All content from data/translations
 */

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { portfolioData } from '@/data/portfolio';
import { type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/loader';
import { motion } from 'framer-motion';

interface ExperienceProps {
  locale: Locale;
}

export function Experience({ locale }: ExperienceProps) {
  const t = getMessages(locale);

  return (
    <section id="experience" className="py-20 px-4 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-primary">
            {t.experience.title}
          </h2>

          <div className="space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={false}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle>{exp.role}</CardTitle>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          exp.current
                            ? 'bg-accent-primary/20 text-accent-primary'
                            : 'bg-surface text-text-tertiary'
                        }`}
                      >
                        {exp.current ? t.experience.current : exp.period}
                      </span>
                    </div>
                    <p className="text-text-secondary font-medium mt-2">{exp.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary leading-relaxed">
                      {typeof exp.description === 'object' 
                        ? exp.description[locale] 
                        : exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

