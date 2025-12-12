/**
 * Portfolio Data Schema (Zod)
 * Type-safe portfolio data structure with runtime validation
 * NO HARDCODED DATA - All data comes from portfolio.data.json
 */

import { z } from 'zod';

// Personal Information Schema
export const PersonalSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  title: z.string().min(1, 'Title is required'),
  location: z.string().min(1, 'Location is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?\d[\d\s-()]+$/, 'Invalid phone number'),
  socials: z.object({
    github: z.string().url('Invalid GitHub URL'),
    linkedin: z.string().url('Invalid LinkedIn URL'),
  }),
  about: z.string().min(50, 'About section too short'),
});

// Experience Schema
export const ExperienceSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  role: z.string().min(1, 'Role is required'),
  period: z.string().min(1, 'Period is required'),
  description: z.string().min(10, 'Description is required'),
  current: z.boolean().default(false),
});

// Education Schema
export const EducationSchema = z.object({
  university: z.string().min(1, 'University name is required'),
  degree: z.string().min(1, 'Degree is required'),
  years: z.string().min(1, 'Years are required'),
});

// Project Schema
export const ProjectSchema = z.object({
  title: z.string().min(1, 'Project title is required'),
  tech: z.array(z.string()).min(1, 'At least one technology is required'),
  type: z.enum(['Enterprise', 'Infrastructure', 'Open Source', 'Personal']),
  description: z.string().min(10, 'Description is required'),
  status: z.enum(['Production', 'Live', 'Development', 'Archived']),
  link: z.string().url('Invalid URL').optional().nullable(),
});

// Skills Schema
export const SkillsSchema = z.object({
  frontend: z.array(z.string()).min(1, 'Frontend skills required'),
  backend: z.array(z.string()).min(1, 'Backend skills required'),
  database: z.array(z.string()).min(1, 'Database skills required'),
  devops: z.array(z.string()).min(1, 'DevOps skills required'),
});

// Main Portfolio Schema
export const PortfolioSchema = z.object({
  personal: PersonalSchema,
  experience: z.array(ExperienceSchema).min(1, 'At least one experience entry required'),
  education: EducationSchema,
  projects: z.array(ProjectSchema).min(1, 'At least one project required'),
  skills: SkillsSchema,
});

// TypeScript types inferred from schemas
export type Personal = z.infer<typeof PersonalSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Skills = z.infer<typeof SkillsSchema>;
export type Portfolio = z.infer<typeof PortfolioSchema>;

