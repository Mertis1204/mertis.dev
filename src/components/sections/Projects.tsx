/**
 * Projects Section Component
 * Portfolio projects in Bento grid layout
 * NO HARDCODED DATA - All content from data/translations
 */

'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { portfolioData } from '@/data/portfolio';
import { type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/loader';
import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';

interface ProjectsProps {
  locale: Locale;
}

export function Projects({ locale }: ProjectsProps) {
  const t = getMessages(locale);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Live':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Development':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Archived':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-surface text-text-tertiary border-border';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Enterprise':
        return 'bg-purple-500/20 text-purple-400';
      case 'Infrastructure':
        return 'bg-orange-500/20 text-orange-400';
      case 'Open Source':
        return 'bg-green-500/20 text-green-400';
      case 'Personal':
        return 'bg-blue-500/20 text-blue-400';
      case 'Startup':
        return 'bg-pink-500/20 text-pink-400';
      default:
        return 'bg-surface text-text-tertiary';
    }
  };

  return (
    <section id="projects" className="py-24 px-4 bg-surface/30">
      <div className="max-w-7xl mx-auto">
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
            className="inline-block px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-4"
          >
            <span className="text-sm font-semibold text-accent-primary">Portfolio</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t.projects.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {locale === 'tr' ? 'Seçili projelerim ve çalışmalarım' : 'Featured projects and work'}
          </p>
        </motion.div>

        {/* Modern Grid Layout - All cards equal height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                }}
              >
                <Card className="h-full flex flex-col group overflow-hidden relative border-border hover:border-accent-primary/50 transition-all duration-300">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 via-transparent to-accent-secondary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  
                  <CardHeader className="pb-4 relative">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <CardTitle className="text-xl leading-tight group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <span
                        className={cn(
                          'px-3 py-1 rounded-full text-xs font-bold shrink-0 shadow-sm',
                          getStatusColor(project.status)
                        )}
                      >
                        {t.projects.status[project.status.toLowerCase() as keyof typeof t.projects.status]}
                      </span>
                    </div>

                    {/* Type badge */}
                    <span
                      className={cn(
                        'inline-flex w-fit px-3 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm',
                        getTypeColor(project.type)
                      )}
                    >
                      {t.projects.type[project.type.toLowerCase().replace(' ', '') as keyof typeof t.projects.type]}
                    </span>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col gap-4 relative">
                    <p className="text-text-secondary leading-relaxed text-sm">
                      {typeof project.description === 'object' 
                        ? project.description[locale] 
                        : project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-secondary/80 border border-border text-text-secondary hover:border-accent-primary/50 hover:text-text-primary transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-secondary/80 border border-border text-text-tertiary">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>
                  </CardContent>

                  {project.link && (
                    <CardFooter className="pt-4 relative">
                      <ExternalLink 
                        href={project.link} 
                        showIcon 
                        className="text-sm font-semibold text-accent-primary hover:text-accent-secondary transition-colors inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        {t.projects.viewProject}
                      </ExternalLink>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

