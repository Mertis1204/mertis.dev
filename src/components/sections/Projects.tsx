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
      default:
        return 'bg-surface text-text-tertiary';
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-primary">
            {t.projects.title}
          </h2>

          {/* Enhanced Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                className={cn(
                  // First project is featured - larger
                  index === 0 && 'md:col-span-2 lg:col-span-2 md:row-span-2',
                  // Add random heights for more dynamic grid
                  index === 2 && 'lg:row-span-2'
                )}
              >
                <Card className="h-full flex flex-col group overflow-hidden relative">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <CardTitle>{project.title}</CardTitle>
                      <span
                        className={cn(
                          'px-2 py-1 rounded-md text-xs font-medium border shrink-0',
                          getStatusColor(project.status)
                        )}
                      >
                        {t.projects.status[project.status.toLowerCase() as keyof typeof t.projects.status]}
                      </span>
                    </div>

                    {/* Type badge */}
                    <span
                      className={cn(
                        'inline-flex w-fit px-3 py-1 rounded-full text-sm font-medium',
                        getTypeColor(project.type)
                      )}
                    >
                      {t.projects.type[project.type.toLowerCase().replace(' ', '') as keyof typeof t.projects.type]}
                    </span>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-surface border border-border text-text-tertiary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  {project.link && (
                    <CardFooter>
                      <ExternalLink href={project.link} showIcon className="text-sm">
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

