/**
 * Translation Schema (Zod)
 * Type-safe translation structure with runtime validation
 * NO HARDCODED STRINGS - All UI text must be in translation files
 */

import { z } from 'zod';

export const MessagesSchema = z.object({
  // Navigation
  nav: z.object({
    home: z.string(),
    about: z.string(),
    experience: z.string(),
    projects: z.string(),
    skills: z.string(),
    contact: z.string(),
    cv: z.string(),
  }),

  // Hero Section
  hero: z.object({
    greeting: z.string(),
    title: z.string(),
    subtitle: z.string(),
    cta: z.object({
      primary: z.string(),
      secondary: z.string(),
    }),
  }),

  // About Section
  about: z.object({
    title: z.string(),
    description: z.string(),
    readMore: z.string(),
    readLess: z.string(),
  }),

  // Experience Section
  experience: z.object({
    title: z.string(),
    current: z.string(),
    previous: z.string(),
  }),

  // Projects Section
  projects: z.object({
    title: z.string(),
    viewProject: z.string(),
    viewCode: z.string(),
    status: z.object({
      production: z.string(),
      live: z.string(),
      development: z.string(),
      archived: z.string(),
    }),
    type: z.object({
      enterprise: z.string(),
      infrastructure: z.string(),
      openSource: z.string(),
      personal: z.string(),
    }),
  }),

  // Skills Section
  skills: z.object({
    title: z.string(),
    frontend: z.string(),
    backend: z.string(),
    database: z.string(),
    devops: z.string(),
  }),

  // Contact Section
  contact: z.object({
    title: z.string(),
    email: z.string(),
    phone: z.string(),
    location: z.string(),
    getInTouch: z.string(),
    copyEmail: z.string(),
    emailCopied: z.string(),
  }),

  // Common
  common: z.object({
    loading: z.string(),
    error: z.string(),
    download: z.string(),
    copy: z.string(),
    copied: z.string(),
  }),

  // Command Palette
  commandPalette: z.object({
    placeholder: z.string(),
    noResults: z.string(),
    sections: z.object({
      navigation: z.string(),
      actions: z.string(),
      links: z.string(),
    }),
  }),

  // Theme
  theme: z.object({
    toggle: z.string(),
    dark: z.string(),
    light: z.string(),
    system: z.string(),
  }),

  // Footer
  footer: z.object({
    rights: z.string(),
    builtWith: z.string(),
  }),
});

export type Messages = z.infer<typeof MessagesSchema>;

