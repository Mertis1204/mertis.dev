# 🏗️ MERT İS PORTFOLIO - ENTERPRISE ARCHITECTURE PLAN

**Document Version:** 1.3.0 (Scalable i18n + Advanced Theme System)  
**Architecture Level:** Principal Software Architect  
**Target Standard:** FAANG/MANGA Production Quality  
**Last Updated:** 2024

---

## 📋 EXECUTIVE SUMMARY

Bu doküman, **mertis.dev** portfolio platformunun enterprise-grade mimari planını ve geliştirme prompt'unu içermektedir. Sistem, GitHub Pages static hosting ve Cloudflare DNS/CDN altyapısı üzerinde çalışacak şekilde optimize edilmiştir.

**Core Principles:**
- ✅ Zero hardcoded data in UI components
- ✅ Type-safe data layer with runtime validation
- ✅ **Multi-language support (i18n)** - Turkish (tr) & English (en)
- ✅ **Advanced Theme System** - Dark/Light mode with system preference detection
- ✅ Security-first approach (CSP, XSS prevention, email obfuscation)
- ✅ Performance-optimized (Lighthouse 100/100 target)
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ Cloudflare & GitHub Pages optimized

---

## 🎯 REFINED DEVELOPMENT PROMPT

### **Role Definition**
You are a **Principal Software Architect**, **Senior Fullstack Developer**, **Senior Prompt Engineer**, and **Senior AI Engineer** with expertise in:
- Enterprise-grade Next.js architecture
- TypeScript strict mode development
- Security hardening (OWASP Top 10)
- Performance optimization (Core Web Vitals)
- Accessibility standards (WCAG 2.1 AA)
- Static site generation and deployment pipelines

### **Project Context**
Build a production-ready, award-winning personal portfolio platform for **Mert İs** (Senior Fullstack Developer) that demonstrates:
- Technical excellence in modern web development
- Clean architecture and SOLID principles
- Enterprise security practices
- World-class UX/UI design
- Perfect performance metrics

---

## 🏛️ TECHNICAL ARCHITECTURE

### **1. Technology Stack**

#### **Core Framework**
- **Next.js 15** (App Router) with TurboPack
- **TypeScript 5.4+** (Strict mode: `strict: true`, `noImplicitAny: true`)
- **React 19** (Server Components by default)

#### **Styling & Design**
- **Tailwind CSS v4** (Latest alpha/beta)
- **clsx** + **tailwind-merge** for conditional classes
- **framer-motion** for orchestrated animations
- **@radix-ui** components (accessible, unstyled primitives)

#### **Data Management**
- **Zod** for schema validation and type inference
- **JSON Schema** for data contracts
- **Type-safe data layer** (no `any` types)

#### **Internationalization (i18n)**
- **Custom i18n solution** (static export compatible, no runtime library)
- **Supported Languages:** Turkish (tr), English (en) - **Easily extensible to 5+ languages**
- **Route-based:** `/[locale]/` structure (e.g., `/tr/`, `/en/`, `/de/`)
- **SINGLE COMPONENT ARCHITECTURE** - One component works for all languages
- **Type-safe translations** with TypeScript inference
- **SEO optimized:** hreflang tags, localized metadata
- **Zero code duplication** - Add new language = just add JSON file

#### **Theme Management**
- **Dark + Light Mode** with seamless switching
- **System Preference Detection** (`prefers-color-scheme` media query)
- **Manual Override** with animated toggle button
- **LocalStorage Persistence** (user preference saved)
- **Tailwind CSS `class` strategy** (no flash of unstyled content)
- **Type-safe theme context** with React Context API
- **Smooth transitions** between themes (0.3s CSS transition)

#### **Build & Deployment**
- **Static Export** (`output: 'export'` in `next.config.ts`)
- **pnpm** (preferred) or npm
- **GitHub Actions** for CI/CD
- **GitHub Pages** for hosting
- **Cloudflare** for DNS/CDN

---

### **2. Project Structure (Clean Architecture)**

```
mertis.dev/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD pipeline
├── .next/                          # Build output (gitignored)
├── public/
│   ├── CNAME                       # GitHub Pages domain
│   ├── favicon.ico
│   ├── og-image.png                # Open Graph image
│   └── robots.txt
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── [locale]/               # i18n route segment
│   │   │   ├── layout.tsx          # Locale-specific layout
│   │   │   ├── page.tsx            # Home page
│   │   │   └── [sections]/         # Route segments
│   │   ├── layout.tsx              # Root layout (redirects, metadata)
│   │   └── globals.css             # Global styles + Tailwind
│   ├── components/
│   │   ├── ui/                     # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ExternalLink.tsx    # Security wrapper
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   ├── features/
│   │   │   ├── CommandPalette.tsx  # Cmd+K modal
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── EmailObfuscator.tsx # Anti-scraping
│   │   │   ├── ThemeToggle.tsx     # Dark/Light mode switcher
│   │   │   └── LanguageSwitcher.tsx
│   │   └── providers/
│   │       └── ThemeProvider.tsx   # Theme context provider
│   ├── data/
│   │   ├── portfolio.schema.ts      # Zod schemas
│   │   ├── portfolio.data.json     # Raw data (JSON) - locale-agnostic
│   │   └── portfolio.ts             # Type-safe data loader
│   ├── i18n/
│   │   ├── config.ts                # i18n configuration (locales, default)
│   │   ├── messages/
│   │   │   ├── tr.json              # Turkish translations
│   │   │   └── en.json              # English translations
│   │   ├── schemas/
│   │   │   └── messages.schema.ts   # Zod schema for translations
│   │   └── loader.ts                # Type-safe translation loader
│   ├── lib/
│   │   ├── utils.ts                # Utility functions
│   │   ├── cn.ts                   # clsx + tailwind-merge
│   │   ├── security.ts             # Security helpers
│   │   ├── constants.ts            # App constants
│   │   └── i18n.ts                 # i18n utilities (getTranslations, etc.)
│   ├── types/
│   │   └── portfolio.d.ts          # TypeScript definitions
│   └── hooks/                      # Custom React hooks
│       ├── useCommandPalette.ts
│       ├── useEmailObfuscation.ts
│       ├── useLocale.ts            # Locale switching hook
│       └── useTheme.ts             # Theme switching hook
├── .eslintrc.json                  # ESLint config
├── .prettierrc                     # Prettier config
├── next.config.ts                  # Next.js config
├── tailwind.config.ts              # Tailwind config
├── tsconfig.json                   # TypeScript config
├── package.json
└── README.md
```

---

### **3. Data Layer Architecture (NO HARDCODED DATA)**

#### **Problem Statement**
Hardcoded data in components creates:
- ❌ Maintenance nightmares
- ❌ Type safety issues
- ❌ No single source of truth
- ❌ Difficult to internationalize
- ❌ Poor separation of concerns

#### **Solution: Type-Safe Data Pipeline**

**Step 1: Define Zod Schema** (`src/data/portfolio.schema.ts`)
```typescript
import { z } from 'zod';

export const PortfolioSchema = z.object({
  personal: z.object({
    name: z.string().min(1),
    title: z.string(),
    location: z.string(),
    email: z.string().email(),
    phone: z.string().regex(/^\+?\d[\d\s-]+$/),
    socials: z.object({
      github: z.string().url(),
      linkedin: z.string().url(),
    }),
    about: z.string().min(50),
  }),
  experience: z.array(
    z.object({
      company: z.string(),
      role: z.string(),
      period: z.string(),
      description: z.string(),
    })
  ),
  education: z.object({
    university: z.string(),
    degree: z.string(),
    years: z.string(),
  }),
  projects: z.array(
    z.object({
      title: z.string(),
      tech: z.array(z.string()),
      type: z.enum(['Enterprise', 'Infrastructure', 'Open Source', 'Personal']),
      description: z.string(),
      status: z.enum(['Production', 'Live', 'Development', 'Archived']),
      link: z.string().url().optional(),
    })
  ),
  skills: z.object({
    frontend: z.array(z.string()),
    backend: z.array(z.string()),
    database: z.array(z.string()),
    devops: z.array(z.string()),
  }),
});

export type Portfolio = z.infer<typeof PortfolioSchema>;
```

**Step 2: Store Data in JSON** (`src/data/portfolio.data.json`)
```json
{
  "personal": {
    "name": "Mert İs",
    "title": "Senior Fullstack Developer",
    ...
  },
  ...
}
```

**Step 3: Type-Safe Loader** (`src/data/portfolio.ts`)
```typescript
import { readFileSync } from 'fs';
import { join } from 'path';
import { PortfolioSchema, type Portfolio } from './portfolio.schema';

const DATA_PATH = join(process.cwd(), 'src/data/portfolio.data.json');

export function loadPortfolioData(): Portfolio {
  const rawData = JSON.parse(readFileSync(DATA_PATH, 'utf-8'));
  return PortfolioSchema.parse(rawData); // Runtime validation
}

export const portfolioData = loadPortfolioData();
```

**Step 4: Usage in Components**
```typescript
import { portfolioData } from '@/data/portfolio';

export function Hero() {
  return (
    <h1>{portfolioData.personal.name}</h1>
    // ✅ Type-safe, no hardcoding
  );
}
```

**Benefits:**
- ✅ Single source of truth (JSON file)
- ✅ Runtime validation (Zod)
- ✅ Type safety (TypeScript inference)
- ✅ Easy to update (edit JSON, not code)
- ✅ **i18n-ready** (locale-agnostic data structure)

---

### **4. Internationalization (i18n) Architecture**

#### **Critical Requirement: Zero Hardcoded Strings**
**ALL UI text must come from translation files. NO hardcoded strings in components.**

#### **Scalable i18n Strategy (Enterprise-Grade)**

**Core Principle:** **SINGLE COMPONENT STRUCTURE** - One component works for ALL languages. No code duplication.

**Challenge:** Next.js 15 App Router with static export doesn't support built-in i18n routing.  
**Solution:** Custom implementation with `[locale]` route segment + translation files + single component architecture.

#### **Supported Locales (Easily Extensible)**
- **Turkish (tr):** Primary language (default)
- **English (en):** Secondary language
- **Future:** Add any language by simply adding a new JSON file (e.g., `de.json`, `fr.json`, `es.json`)

#### **Route Structure (Automatic for All Languages)**
```
/                    → Redirects to /tr (default locale)
/tr                  → Turkish version (same component, different translations)
/en                  → English version (same component, different translations)
/de                  → German version (if added - same component, different translations)
/tr/about            → Turkish about page
/en/about            → English about page
```

**Key Point:** Adding a new language requires:
1. ✅ Add new JSON file: `src/i18n/messages/[locale].json`
2. ✅ Add locale to config: `locales: ['tr', 'en', 'de']`
3. ❌ **NO component changes needed**
4. ❌ **NO page changes needed**
5. ❌ **NO code duplication**

#### **Translation File Structure**

**Step 1: Define Translation Schema** (`src/i18n/schemas/messages.schema.ts`)
```typescript
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
  }),
  
  // Common
  common: z.object({
    loading: z.string(),
    error: z.string(),
    readMore: z.string(),
    readLess: z.string(),
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
});

export type Messages = z.infer<typeof MessagesSchema>;
```

**Step 2: Create Translation Files**

**Turkish** (`src/i18n/messages/tr.json`):
```json
{
  "nav": {
    "home": "Ana Sayfa",
    "about": "Hakkımda",
    "experience": "Deneyim",
    "projects": "Projeler",
    "skills": "Yetenekler",
    "contact": "İletişim",
    "cv": "CV İndir"
  },
  "hero": {
    "greeting": "Merhaba, ben",
    "title": "Senior Fullstack Developer",
    "subtitle": "Yüksek performanslı dağıtık sistemler ve enterprise çözümler konusunda uzman",
    "cta": {
      "primary": "Projelerimi İncele",
      "secondary": "İletişime Geç"
    }
  },
  "about": {
    "title": "Hakkımda",
    "description": "1M+ kullanıcılı oyun altyapıları yönetimi ve enterprise B2B ekosistemleri geliştirme konusunda kanıtlanmış başarı geçmişine sahip Senior Fullstack Engineer."
  },
  "experience": {
    "title": "Deneyim",
    "current": "Şu An",
    "previous": "Önceki"
  },
  "projects": {
    "title": "Projeler",
    "viewProject": "Projeyi Görüntüle",
    "viewCode": "Kodu Görüntüle",
    "status": {
      "production": "Üretimde",
      "live": "Canlı",
      "development": "Geliştirme",
      "archived": "Arşivlendi"
    },
    "type": {
      "enterprise": "Kurumsal",
      "infrastructure": "Altyapı",
      "openSource": "Açık Kaynak",
      "personal": "Kişisel"
    }
  },
  "skills": {
    "title": "Yetenekler",
    "frontend": "Frontend",
    "backend": "Backend",
    "database": "Veritabanı",
    "devops": "DevOps"
  },
  "contact": {
    "title": "İletişim",
    "email": "E-posta",
    "phone": "Telefon",
    "location": "Konum",
    "getInTouch": "İletişime Geçin"
  },
  "common": {
    "loading": "Yükleniyor...",
    "error": "Bir hata oluştu",
    "readMore": "Devamını Oku",
    "readLess": "Daha Az Göster",
    "download": "İndir",
    "copy": "Kopyala",
    "copied": "Kopyalandı!"
  },
  "commandPalette": {
    "placeholder": "Komut ara...",
    "noResults": "Sonuç bulunamadı",
    "sections": {
      "navigation": "Navigasyon",
      "actions": "İşlemler",
      "links": "Bağlantılar"
    }
  }
}
```

**English** (`src/i18n/messages/en.json`):
```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "experience": "Experience",
    "projects": "Projects",
    "skills": "Skills",
    "contact": "Contact",
    "cv": "Download CV"
  },
  "hero": {
    "greeting": "Hello, I'm",
    "title": "Senior Fullstack Developer",
    "subtitle": "Expert in high-performance distributed systems and enterprise solutions",
    "cta": {
      "primary": "View Projects",
      "secondary": "Get In Touch"
    }
  },
  "about": {
    "title": "About",
    "description": "Senior Fullstack Engineer with proven track record of managing game infrastructures with 1M+ users and building enterprise B2B ecosystems."
  },
  "experience": {
    "title": "Experience",
    "current": "Current",
    "previous": "Previous"
  },
  "projects": {
    "title": "Projects",
    "viewProject": "View Project",
    "viewCode": "View Code",
    "status": {
      "production": "Production",
      "live": "Live",
      "development": "Development",
      "archived": "Archived"
    },
    "type": {
      "enterprise": "Enterprise",
      "infrastructure": "Infrastructure",
      "openSource": "Open Source",
      "personal": "Personal"
    }
  },
  "skills": {
    "title": "Skills",
    "frontend": "Frontend",
    "backend": "Backend",
    "database": "Database",
    "devops": "DevOps"
  },
  "contact": {
    "title": "Contact",
    "email": "Email",
    "phone": "Phone",
    "location": "Location",
    "getInTouch": "Get In Touch"
  },
  "common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "readMore": "Read More",
    "readLess": "Show Less",
    "download": "Download",
    "copy": "Copy",
    "copied": "Copied!"
  },
  "commandPalette": {
    "placeholder": "Search commands...",
    "noResults": "No results found",
    "sections": {
      "navigation": "Navigation",
      "actions": "Actions",
      "links": "Links"
    }
  }
}
```

**Step 3: Type-Safe Translation Loader** (`src/i18n/loader.ts`)
```typescript
import { readFileSync } from 'fs';
import { join } from 'path';
import { MessagesSchema, type Messages } from './schemas/messages.schema';

const MESSAGES_DIR = join(process.cwd(), 'src/i18n/messages');

export type Locale = 'tr' | 'en';

export const locales: Locale[] = ['tr', 'en'];
export const defaultLocale: Locale = 'tr';

export function loadMessages(locale: Locale): Messages {
  const filePath = join(MESSAGES_DIR, `${locale}.json`);
  const rawData = JSON.parse(readFileSync(filePath, 'utf-8'));
  return MessagesSchema.parse(rawData); // Runtime validation
}

export function getMessages(locale: Locale = defaultLocale): Messages {
  return loadMessages(locale);
}
```

**Step 4: i18n Configuration** (`src/i18n/config.ts`)
```typescript
import { type Locale, locales, defaultLocale } from './loader';

export const i18nConfig = {
  locales,
  defaultLocale,
  localeNames: {
    tr: 'Türkçe',
    en: 'English',
  } as Record<Locale, string>,
} as const;

export type { Locale };
```

**Step 5: SINGLE COMPONENT STRUCTURE (Works for ALL Languages)**

**CRITICAL:** One component, all languages. No duplication.

**Example: Hero Component** (`src/components/sections/Hero.tsx`)
```typescript
// ✅ SINGLE COMPONENT - Works for tr, en, de, fr, es, etc.
import { getMessages } from '@/i18n/loader';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/i18n/config';

interface HeroProps {
  locale: Locale; // Automatically passed from [locale] route
}

export default function Hero({ locale }: HeroProps) {
  const t = getMessages(locale); // Loads correct translation file
  
  return (
    <section>
      <h1>{t.hero.greeting} {portfolioData.personal.name}</h1>
      <p>{t.hero.title}</p>
      <p>{t.hero.subtitle}</p>
      <button>{t.hero.cta.primary}</button>
      {/* ✅ Same component, different translations based on locale */}
    </section>
  );
}
```

**Usage in Page** (`src/app/[locale]/page.tsx`)
```typescript
// ✅ SINGLE PAGE - Works for all languages
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
// ... other sections

interface PageProps {
  params: { locale: string };
}

export default function HomePage({ params }: PageProps) {
  const { locale } = params;
  
  return (
    <>
      <Hero locale={locale as Locale} />
      <About locale={locale as Locale} />
      {/* ✅ Same page structure, locale determines content */}
    </>
  );
}
```

**Adding a New Language (e.g., German):**
```typescript
// 1. Add locale to config (src/i18n/config.ts)
export const locales = ['tr', 'en', 'de'] as const; // ✅ Just add 'de'

// 2. Create translation file (src/i18n/messages/de.json)
{
  "hero": {
    "greeting": "Hallo, ich bin",
    "title": "Senior Fullstack Entwickler",
    // ... rest of translations
  }
}

// 3. ✅ DONE! No component changes needed!
// 4. ✅ /de route automatically works
// 5. ✅ Hero component automatically uses German translations
```

**Language Switcher (Dynamic)**
```typescript
'use client';
import { useRouter, usePathname } from 'next/navigation';
import { locales, i18nConfig } from '@/i18n/config';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  
  const switchLanguage = (newLocale: string) => {
    // Replace current locale in path
    const newPath = pathname.replace(/^\/[^/]+/, `/${newLocale}`);
    router.push(newPath);
  };
  
  return (
    <select onChange={(e) => switchLanguage(e.target.value)}>
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {i18nConfig.localeNames[locale]}
        </option>
      ))}
    </select>
  );
}
```

#### **SEO Optimization for i18n**

**hreflang Tags** (in root layout):
```typescript
export function generateAlternateLinks() {
  return [
    { hreflang: 'tr', href: 'https://mertis.dev/tr' },
    { hreflang: 'en', href: 'https://mertis.dev/en' },
    { hreflang: 'x-default', href: 'https://mertis.dev/tr' },
  ];
}
```

**Localized Metadata:**
```typescript
export function generateMetadata({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  
  return {
    title: `${portfolioData.personal.name} - ${t.hero.title}`,
    description: t.about.description,
    alternates: {
      languages: {
        'tr': 'https://mertis.dev/tr',
        'en': 'https://mertis.dev/en',
      },
    },
  };
}
```

#### **Locale Detection & Redirects**

**Root Layout** (`src/app/layout.tsx`):
```typescript
import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Redirect root to default locale
  redirect(`/${defaultLocale}`);
}
```

**Locale Layout** (`src/app/[locale]/layout.tsx`):
```typescript
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/i18n/config';

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  
  if (!locales.includes(locale as Locale)) {
    notFound();
  }
  
  return <>{children}</>;
}
```

#### **Benefits of This Scalable i18n Architecture**
- ✅ **SINGLE COMPONENT STRUCTURE** - One component works for ALL languages
- ✅ **Zero code duplication** - No need to write components per language
- ✅ **Zero hardcoded strings** in components
- ✅ **Type-safe translations** (TypeScript + Zod)
- ✅ **Runtime validation** of translation files
- ✅ **SEO optimized** (hreflang, localized metadata)
- ✅ **Static export compatible** (no runtime i18n library needed)
- ✅ **Infinitely scalable** - Add 5, 10, 20 languages by just adding JSON files
- ✅ **Maintainable** (single source of truth per language)
- ✅ **Enterprise-grade** - No amatörce code duplication

#### **Adding New Languages: Step-by-Step**
1. ✅ Add locale code to `locales` array in `src/i18n/config.ts`
2. ✅ Create new JSON file: `src/i18n/messages/[locale].json`
3. ✅ Copy structure from existing translation file
4. ✅ Translate content
5. ✅ **DONE!** No component changes, no page changes, no code changes
6. ✅ Route `/[locale]` automatically works
7. ✅ All components automatically use new language

---

### **5. Security Architecture**

#### **5.1 Content Security Policy (CSP)**
```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js requires
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join('; '),
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
];
```

#### **5.2 Email Obfuscation Strategy**
**Problem:** Email addresses in HTML are scraped by bots.

**Solution:** CSS-based obfuscation + JavaScript reveal on interaction.

```typescript
// src/components/features/EmailObfuscator.tsx
'use client';

import { useState } from 'react';

export function EmailObfuscator({ email }: { email: string }) {
  const [revealed, setRevealed] = useState(false);
  
  // Split email into parts, reverse, encode
  const obfuscated = email.split('@').reverse().join(' [at] ');
  
  return (
    <span
      onClick={() => setRevealed(true)}
      onMouseEnter={() => setRevealed(true)}
      className="cursor-pointer"
    >
      {revealed ? (
        <a href={`mailto:${email}`}>{email}</a>
      ) : (
        <span className="select-none">{obfuscated}</span>
      )}
    </span>
  );
}
```

#### **5.3 External Link Security**
```typescript
// src/components/ui/ExternalLink.tsx
import Link from 'next/link';

export function ExternalLink({
  href,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </Link>
  );
}
```

#### **5.4 Input Sanitization (Future Forms)**
- Use **Zod** for schema validation
- Sanitize with **DOMPurify** if rendering user input
- Implement rate limiting on API routes (if any)

---

### **6. Performance Optimization**

#### **6.1 Core Web Vitals Targets**
- **LCP (Largest Contentful Paint):** < 1.2s
- **CLS (Cumulative Layout Shift):** = 0
- **FID (First Input Delay):** < 100ms
- **FCP (First Contentful Paint):** < 1.0s

#### **6.2 Font Optimization**
```typescript
// src/app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});
```

#### **6.3 Image Optimization**
- Use `next/image` with `unoptimized: true` (GitHub Pages limitation)
- Or implement custom loader for Cloudflare Images
- Lazy load below-the-fold images

#### **6.4 Code Splitting**
```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const BentoGrid = dynamic(() => import('@/components/sections/BentoGrid'), {
  loading: () => <Skeleton />,
  ssr: false, // If client-only
});
```

#### **6.5 Static Generation**
- All pages pre-rendered at build time
- No runtime data fetching (static export)
- Generate sitemap.xml and robots.txt

---

### **7. Design System: "Engineering Aesthetics"**

#### **7.1 Color Palette (Dark + Light Mode)**
```typescript
// tailwind.config.ts
const colors = {
  // Dark Mode (Primary)
  dark: {
    bg: '#030303',        // Deep space black
    surface: '#0a0a0a',   // Elevated surfaces
    border: 'rgba(255, 255, 255, 0.1)',
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(255, 255, 255, 0.5)',
    },
  },
  // Light Mode
  light: {
    bg: '#ffffff',        // Clean white
    surface: '#f8fafc',   // Subtle gray
    border: 'rgba(0, 0, 0, 0.1)',
    text: {
      primary: '#0f172a',
      secondary: 'rgba(15, 23, 42, 0.7)',
      tertiary: 'rgba(15, 23, 42, 0.5)',
    },
  },
  // Accent Colors (Same for both themes)
  accent: {
    primary: '#3b82f6',   // Blue
    secondary: '#8b5cf6', // Purple
  },
};
```

#### **7.2 Glassmorphism Pattern (Theme-Aware)**
```css
/* Dark Mode */
.glass-dark {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Light Mode */
.glass-light {
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Tailwind Usage */
.glass {
  @apply backdrop-blur-xl border;
  @apply bg-white/5 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)];
  @apply dark:bg-white/5 dark:border-white/10;
  @apply light:bg-black/3 light:border-black/10 light:shadow-[0_8px_32px_rgba(0,0,0,0.1)];
}
```

#### **7.3 Noise Texture**
```tsx
// Add SVG noise overlay
<div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
  <svg>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
</div>
```

#### **7.4 Bento Grid Layout**
- CSS Grid with `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- Responsive breakpoints: mobile (1 col) → tablet (2 cols) → desktop (3-4 cols) → 4K (5+ cols)
- Staggered animations with Framer Motion

---

### **8. Theme System Architecture**

#### **8.1 Overview: Dark + Light Mode Toggle**

**Core Features:**
- ✅ **System Preference Detection** - Auto-detect OS theme on first visit
- ✅ **Manual Override** - User can switch themes manually
- ✅ **LocalStorage Persistence** - Remember user preference across sessions
- ✅ **No Flash of Unstyled Content (FOUC)** - Proper SSR/SSG handling
- ✅ **Smooth Transitions** - 0.3s CSS transition between themes
- ✅ **Type-Safe** - Full TypeScript support

#### **8.2 Implementation Strategy**

**Tailwind CSS Configuration** (`tailwind.config.ts`)
```typescript
module.exports = {
  darkMode: 'class', // Use class-based dark mode (<html class="dark">)
  theme: {
    extend: {
      colors: {
        // Custom CSS variables for theme switching
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
      },
    },
  },
};
```

**CSS Variables** (`globals.css`)
```css
:root {
  /* Light Mode (Default) */
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text-primary: #0f172a;
  --color-text-secondary: rgba(15, 23, 42, 0.7);
  --color-border: rgba(0, 0, 0, 0.1);
}

.dark {
  /* Dark Mode */
  --color-background: #030303;
  --color-surface: #0a0a0a;
  --color-text-primary: #ffffff;
  --color-text-secondary: rgba(255, 255, 255, 0.7);
  --color-border: rgba(255, 255, 255, 0.1);
}

/* Smooth theme transition */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```

#### **8.3 ThemeProvider Component**

**Architecture:** React Context API for global theme state

```typescript
// src/components/providers/ThemeProvider.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark'; // Actual applied theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // 1. Check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      return;
    }

    // 2. Detect system preference
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    setResolvedTheme(systemTheme);
    
    // 3. Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        setResolvedTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    // Apply theme to <html> element
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, resolvedTheme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
      if (newTheme !== 'system') {
        setResolvedTheme(newTheme);
      }
    },
    resolvedTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Custom hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

#### **8.4 ThemeToggle Component**

**Animated Toggle Button with Icon Switching**

```typescript
// src/components/features/ThemeToggle.tsx
'use client';

import { useTheme } from '@/components/providers/ThemeProvider';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react'; // or any icon library

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12 rounded-full bg-surface border border-border hover:border-accent-primary transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: resolvedTheme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-5 h-5 text-text-primary" />
        ) : (
          <Sun className="w-5 h-5 text-text-primary" />
        )}
      </motion.div>
    </motion.button>
  );
}
```

#### **8.5 Preventing FOUC (Flash of Unstyled Content)**

**Inline Script in Root Layout** (runs before React hydration)

```typescript
// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'system';
                const resolvedTheme = theme === 'system'
                  ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                  : theme;
                document.documentElement.classList.add(resolvedTheme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

#### **8.6 Usage in Components**

**Example: Card component with theme-aware styles**

```typescript
// src/components/ui/Card.tsx
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      bg-surface 
      border border-border 
      rounded-lg p-6
      shadow-lg
      dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
      light:shadow-[0_8px_32px_rgba(0,0,0,0.1)]
      transition-all duration-300
    ">
      {children}
    </div>
  );
}
```

#### **8.7 SEO & Accessibility Considerations**

- **Meta tag for color-scheme:**
  ```html
  <meta name="color-scheme" content="dark light" />
  ```
- **ARIA label on toggle button:** `aria-label="Toggle theme"`
- **Keyboard accessible:** Space/Enter to toggle
- **Screen reader announcement:** "Theme switched to [light/dark] mode"

#### **8.8 Translation Support for Theme Toggle**

**Add to translation files:**

```json
// src/i18n/messages/tr.json
{
  "theme": {
    "toggle": "Tema Değiştir",
    "dark": "Koyu Mod",
    "light": "Açık Mod",
    "system": "Sistem Teması"
  }
}

// src/i18n/messages/en.json
{
  "theme": {
    "toggle": "Toggle Theme",
    "dark": "Dark Mode",
    "light": "Light Mode",
    "system": "System Theme"
  }
}
```

#### **8.9 Benefits of This Architecture**
- ✅ **Zero layout shift** - Proper FOUC prevention
- ✅ **Type-safe** - Full TypeScript support
- ✅ **Performant** - CSS variables, no re-renders
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **User-friendly** - Respects system preferences
- ✅ **Persistent** - LocalStorage integration
- ✅ **Animated** - Smooth transitions with Framer Motion
- ✅ **i18n-ready** - Translation support built-in

---

### **9. GitHub Pages & Cloudflare Configuration**

#### **8.1 Next.js Config for Static Export**
```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/mertis.dev' : '', // If repo name is mertis.dev
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mertis.dev' : '',
};

export default nextConfig;
```

**Note:** If using custom domain (mertis.dev), `basePath` and `assetPrefix` should be empty strings.

#### **8.2 GitHub Actions Workflow**
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint
      - run: pnpm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

#### **8.3 Cloudflare Optimizations**
- **DNS:** CNAME to `username.github.io` (proxy OFF)
- **SSL/TLS:** Full (strict) mode
- **Caching:** Browser cache TTL: 4 hours, Edge cache: 2 hours
- **Minification:** HTML, CSS, JS (optional, Next.js already minifies)
- **Brotli Compression:** Enable

---

### **10. Accessibility (WCAG 2.1 AA)**

#### **Requirements**
- ✅ Semantic HTML5 elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus indicators (visible outline)
- ✅ Color contrast ratio ≥ 4.5:1
- ✅ Alt text for all images
- ✅ Screen reader announcements
- ✅ Skip to main content link

#### **Implementation**
```typescript
// Skip link
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Focus styles
.focus-visible {
  outline: 2px solid theme('colors.accent.primary');
  outline-offset: 2px;
}
```

---

### **11. Development Workflow**

#### **11.1 Pre-commit Hooks**
- **Husky** + **lint-staged**
- Run ESLint + Prettier
- Type check with `tsc --noEmit`

#### **11.2 Code Quality**
- **ESLint:** Next.js recommended config + custom rules
- **Prettier:** Consistent formatting
- **TypeScript:** Strict mode, no `any` types
- **Conventional Commits:** For better git history

---

## 📝 DATA POPULATION REQUIREMENTS

### **Source Data (to be extracted from CV/resume)**

The following data structure must be populated in `src/data/portfolio.data.json`:

```json
{
  "personal": {
    "name": "Mert İs",
    "title": "Senior Fullstack Developer",
    "location": "İstanbul, Türkiye",
    "email": "mertisresmi@gmail.com",
    "phone": "+90 536 262 02 71",
    "socials": {
      "github": "https://github.com/Mertis1204",
      "linkedin": "https://www.linkedin.com/in/mertis/"
    },
    "about": "Senior Fullstack Engineer specializing in high-performance distributed systems. Proven track record of managing game infrastructures with 1M+ users and building enterprise B2B ecosystems. Expert in scaling Node.js architectures and optimizing Linux/Docker environments."
  },
  "experience": [
    {
      "company": "Waytogo",
      "role": "Full Stack Developer",
      "period": "07/2024 – 11/2024",
      "description": "Architected Moodle plugins and HubSpot API integrations. Modernized legacy web components using Mustache templating and SCSS, significantly improving maintainability."
    },
    {
      "company": "Betacraft",
      "role": "Founder & CEO (Lead Engineer)",
      "period": "01/2016 – 07/2024",
      "description": "Engineered a massive-scale Minecraft gaming infrastructure serving 1M+ registered users with 1,300+ concurrent connections. Managed bare-metal Linux servers, Docker containerization, and JVM optimization for peak performance."
    },
    {
      "company": "Hamlet Games",
      "role": "QA & Game Tester",
      "period": "08/2022 – 11/2022",
      "description": "Conducted rigorous QA testing and UX analysis to optimize player retention mechanics."
    },
    {
      "company": "Nar Sistem",
      "role": "Backend Intern",
      "period": "08/2022",
      "description": "Backend development using Java Spring Boot ecosystem."
    }
  ],
  "education": {
    "university": "İstanbul Gedik Üniversitesi",
    "degree": "Computer Engineering (B.Sc.)",
    "years": "2021 – 2025"
  },
  "projects": [
    {
      "title": "Doğan Otomotiv B2B Ecosystem",
      "tech": ["Next.js 15", "TypeScript", "MySQL 8.0", "Express.js", "Redis", "JWT"],
      "type": "Enterprise",
      "description": "A fully dynamic, production-grade B2B platform. Features a custom-built Admin Panel (HR, Blog, XML Product Integration), role-based access control (RBAC), and advanced security measures (Helmet, Rate Limiting).",
      "status": "Production",
      "link": null
    },
    {
      "title": "Betacraft Infrastructure",
      "tech": ["Java", "Linux", "Docker", "Nginx", "Bash Scripting"],
      "type": "Infrastructure",
      "description": "High-concurrency game server cluster architecture optimized for low-latency TCP/UDP packet handling.",
      "status": "Live",
      "link": null
    }
  ],
  "skills": {
    "frontend": ["Next.js 15", "React", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
    "backend": ["Node.js", "Express", "Java (Spring)", "PHP", "Python", "REST/GraphQL"],
    "database": ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    "devops": ["Docker", "Linux (RHEL/Ubuntu)", "CI/CD", "Nginx", "Git"]
  }
}
```

---

## 🚀 IMPLEMENTATION PHASES

### **Phase 1: Foundation Setup**
1. Initialize Next.js 15 project with TypeScript
2. Configure Tailwind CSS v4
3. Set up project structure (Clean Architecture)
4. Configure ESLint, Prettier, TypeScript strict mode
5. Set up GitHub Actions workflow

### **Phase 2: Data Layer & i18n & Theme**
1. Create Zod schemas for portfolio data
2. Create JSON data file (locale-agnostic)
3. Implement type-safe data loader
4. Validate data at build time
5. Create i18n translation schemas (Zod)
6. Create translation files (tr.json, en.json) - **including theme translations**
7. Implement type-safe translation loader
8. Set up locale routing structure (`[locale]` segment)
9. **Implement ThemeProvider (React Context)**
10. **Configure Tailwind CSS dark mode (class strategy)**
11. **Add CSS variables for theme switching**

### **Phase 3: Core Components**
1. Build UI primitives (Button, Card, ExternalLink)
2. **Implement ThemeToggle component (animated, with icons)**
3. Implement layout components (Header, Footer, Navigation) - **using translations + theme-aware**
4. Create section components (Hero, About, Experience, etc.) - **using translations + theme-aware**
5. Add Bento Grid layout
6. Implement Language Switcher component
7. Ensure ALL components use translations (NO hardcoded strings)
8. Ensure ALL components support both dark/light themes

### **Phase 4: Advanced Features**
1. Command Palette (Cmd+K) - **with i18n support**
2. Email obfuscation
3. Animations (Framer Motion)
4. Glassmorphism effects
5. Noise texture overlay
6. Language switcher integration

### **Phase 5: Security & Performance**
1. Implement CSP headers
2. Add security components (ExternalLink, EmailObfuscator)
3. Optimize fonts and images
4. Code splitting and lazy loading
5. Performance testing (Lighthouse)

### **Phase 6: Accessibility & Polish**
1. Add ARIA labels
2. Keyboard navigation
3. Focus indicators
4. Screen reader testing
5. Color contrast verification

### **Phase 7: Deployment**
1. Configure Next.js for static export
2. Test GitHub Pages deployment
3. Verify Cloudflare DNS/CDN
4. SSL certificate validation
5. Final performance audit

---

## ✅ ACCEPTANCE CRITERIA

### **Functional Requirements**
- [ ] All portfolio data displayed correctly (no hardcoded strings)
- [ ] **Multi-language support working (tr/en)**
- [ ] **All UI text from translation files (zero hardcoded strings)**
- [ ] **Language switcher functional**
- [ ] **Dark/Light mode toggle functional**
- [ ] **System preference detection working**
- [ ] **Theme preference persisted in LocalStorage**
- [ ] **No FOUC (Flash of Unstyled Content)**
- [ ] **SEO optimized (hreflang tags, localized metadata)**
- [ ] Responsive design (mobile → 4K)
- [ ] Command Palette functional (Cmd+K) - with i18n
- [ ] Email obfuscation working
- [ ] All external links secure (noopener noreferrer)
- [ ] Smooth animations and transitions

### **Non-Functional Requirements**
- [ ] Lighthouse score: 100/100 (Performance, Accessibility, Best Practices, SEO)
- [ ] TypeScript: Zero `any` types, strict mode enabled
- [ ] Security: CSP headers, XSS prevention, email obfuscation
- [ ] Accessibility: WCAG 2.1 AA compliant
- [ ] Performance: LCP < 1.2s, CLS = 0, FID < 100ms
- [ ] Deployment: Successful GitHub Pages + Cloudflare integration

---

## 📚 REFERENCES & BEST PRACTICES

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [TypeScript Strict Mode](https://www.typescriptlang.org/tsconfig#strict)
- [Zod Documentation](https://zod.dev)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Core Web Vitals](https://web.dev/vitals/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Cloudflare DNS Setup](https://developers.cloudflare.com/dns/)

---

**Document Status:** ✅ Ready for Implementation  
**Next Step:** Begin Phase 1 - Foundation Setup

