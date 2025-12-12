/**
 * Hero Section Component
 * Main landing section with greeting, title, and CTA buttons
 * NO HARDCODED DATA - All content from data/translations
 */

'use client';

import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolio';
import { type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/loader';
import { motion } from 'framer-motion';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = getMessages(locale);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 sm:pt-32 md:pt-40 pb-32 overflow-visible"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-accent-primary/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-accent-secondary/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-accent-tertiary/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 overflow-visible pt-4">
        {/* Greeting Badge - Code Editor Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1e1e1e] dark:bg-[#0d0d0d] border-2 border-[#333333] mb-8 shadow-lg font-mono"
        >
          {/* Editor dots */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
          </div>
          
          {/* Code text */}
          <div className="flex items-center gap-2">
            <span className="text-[#569cd6] font-semibold text-sm">console</span>
            <span className="text-white/90 text-sm">.</span>
            <span className="text-[#dcdcaa] font-semibold text-sm">log</span>
            <span className="text-[#ffd700] text-sm">(</span>
            <span className="text-[#ce9178] text-sm">&quot;{t.hero.greeting}&quot;</span>
            <span className="text-[#ffd700] text-sm">)</span>
            <span className="text-white/60 text-sm">;</span>
          </div>
          
          {/* Blinking cursor */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-0.5 h-4 bg-white/80"
          />
        </motion.div>

        {/* Name with animated gradient */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-50 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient overflow-visible pt-6 sm:pt-8 md:pt-10 pb-2 sm:pb-3"
          style={{ 
            zIndex: 50,
            lineHeight: '1.15',
          }}
        >
          {portfolioData.personal.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
        >
          {t.hero.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="min-w-[200px] shadow-lg shadow-accent-primary/25 hover:shadow-xl hover:shadow-accent-primary/30"
          >
            {t.hero.cta.primary}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="min-w-[200px]"
          >
            {t.hero.cta.secondary}
          </Button>
        </motion.div>

        {/* Social proof badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4 text-sm"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-500/50" />
            <span className="text-text-secondary font-medium">{t.hero.availability}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border shadow-sm">
            <svg className="w-4 h-4 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-text-secondary font-medium">{portfolioData.personal.location}</span>
          </div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-text-tertiary hover:text-text-secondary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider font-medium">{t.hero.scroll}</span>
            <svg
              className="w-5 h-5 group-hover:text-accent-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

