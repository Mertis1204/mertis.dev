/**
 * Application Constants
 * Centralized constants for the application
 * NO HARDCODED VALUES - Configuration only
 */

export const APP_CONFIG = {
  name: 'Mert İs Portfolio',
  domain: 'mertis.dev',
  url: 'https://mertis.dev',
  description: 'Senior Fullstack Developer - Enterprise-grade portfolio platform',
  keywords: [
    'fullstack developer',
    'next.js',
    'typescript',
    'react',
    'node.js',
    'portfolio',
    'enterprise',
  ],
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/Mertis1204',
  linkedin: 'https://www.linkedin.com/in/mertis/',
} as const;

export const ANIMATION_CONFIG = {
  defaultDuration: 0.3,
  defaultEasing: [0.4, 0, 0.2, 1] as const,
  staggerChildren: 0.1,
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const COMMAND_PALETTE_SHORTCUTS = {
  toggle: ['ctrl+k', 'cmd+k'],
  close: ['escape'],
  navigate: ['arrowdown', 'arrowup'],
  select: ['enter'],
} as const;

