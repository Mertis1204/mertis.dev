/**
 * Contact Section Component
 * Contact information with email obfuscation and social links
 * NO HARDCODED DATA - All content from data/translations
 */

'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { EmailObfuscator } from '@/components/features/EmailObfuscator';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { portfolioData } from '@/data/portfolio';
import { type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/loader';
import { downloadCV } from '@/lib/download';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

interface ContactProps {
  locale: Locale;
}

export function Contact({ locale }: ContactProps) {
  const t = getMessages(locale);

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: t.contact.email,
      value: <EmailObfuscator email={portfolioData.personal.email} copyText={t.contact.copyEmail} copiedText={t.contact.emailCopied} />,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      ),
      label: t.contact.location,
      value: <span className="text-text-primary">{portfolioData.personal.location}</span>,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: portfolioData.personal.socials.github,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: portfolioData.personal.socials.linkedin,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
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
            <span className="text-sm font-semibold text-accent-secondary">Get In Touch</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t.contact.getInTouch}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-2">
            <CardContent className="space-y-4">
              {/* Contact Methods */}
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl hover:bg-surface-hover transition-all border border-transparent hover:border-border group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 text-accent-primary shrink-0 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-semibold text-text-tertiary mb-2">{method.label}</p>
                    <div className="text-text-primary font-medium">{method.value}</div>
                  </div>
                </motion.div>
              ))}

              {/* CV Download Section */}
              <div className="pt-6 border-t-2 border-border">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-br from-accent-primary/10 via-accent-secondary/5 to-accent-tertiary/10 border-2 border-accent-primary/20 hover:border-accent-primary/40 transition-all group"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg group-hover:scale-110 transition-transform">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-text-primary mb-1">{t.nav.cv}</h3>
                      <p className="text-sm text-text-secondary">
                        {locale === 'tr' ? 'CV\'mi indirin ve iletişime geçin' : 'Download my CV and get in touch'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => downloadCV(locale)}
                    className="relative z-10 flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-primary text-white hover:bg-accent-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 font-semibold whitespace-nowrap"
                  >
                    <Download className="w-5 h-5" />
                    <span>{t.nav.cv}</span>
                  </button>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t-2 border-border">
                <p className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">{t.commandPalette.sections.links}</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ExternalLink
                        href={social.url}
                        className="flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-secondary border-2 border-border hover:border-accent-primary hover:scale-105 hover:shadow-lg transition-all no-underline group"
                        aria-label={social.name}
                      >
                        <span className="text-text-primary group-hover:text-accent-primary transition-colors">{social.icon}</span>
                        <span className="text-text-primary font-semibold group-hover:text-accent-primary transition-colors">{social.name}</span>
                      </ExternalLink>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

