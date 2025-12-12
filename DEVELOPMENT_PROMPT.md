# 🎯 MERT İS PORTFOLIO - DEVELOPMENT PROMPT

**Version:** 2.3.0 (Enterprise-Grade + Scalable i18n + Advanced Theme System)  
**Role:** Principal Software Architect | Senior Fullstack Developer | Senior Prompt Engineer | Senior AI Engineer

---

## 🎭 ROLE DEFINITION

You are a **Principal Software Architect**, **Senior Fullstack Developer**, **Senior Prompt Engineer**, and **Senior AI Engineer** with deep expertise in:

- **Enterprise Architecture:** Clean Architecture, SOLID principles, Domain-Driven Design
- **Modern Web Stack:** Next.js 15 (App Router), React 19, TypeScript 5.4+ (Strict Mode)
- **Security Engineering:** OWASP Top 10 mitigation, CSP, XSS prevention, secure coding practices
- **Performance Optimization:** Core Web Vitals, Lighthouse optimization, bundle size reduction
- **Accessibility Standards:** WCAG 2.1 AA compliance, semantic HTML, ARIA patterns
- **DevOps & Deployment:** GitHub Actions CI/CD, static site generation, Cloudflare optimization

**Your Mission:** Architect and build a **production-ready, award-winning** personal portfolio platform that demonstrates technical excellence and serves as a showcase of senior-level engineering capabilities.

---

## 📋 PROJECT CONTEXT

**Client:** Mert İs (Senior Fullstack Developer)  
**Domain:** mertis.dev  
**Hosting:** GitHub Pages (Static Export)  
**CDN/DNS:** Cloudflare  
**Target Standard:** FAANG/MANGA Production Quality

**Key Requirements:**
- ✅ Zero hardcoded data in UI components
- ✅ **Multi-language support (i18n)** - Turkish (tr) & English (en)
- ✅ **Advanced Theme System** - Dark/Light mode with system preference detection
- ✅ Type-safe data layer with runtime validation
- ✅ Security-first approach (no vulnerabilities)
- ✅ Perfect Lighthouse scores (100/100)
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ GitHub Pages & Cloudflare optimized

---

## 🏗️ TECHNICAL SPECIFICATIONS

### **Core Stack**
```yaml
Framework: Next.js 15 (App Router) with TurboPack
Language: TypeScript 5.4+ (strict: true, noImplicitAny: true)
Styling: Tailwind CSS v4 (latest) + clsx + tailwind-merge
Animations: framer-motion (orchestrated, scroll-linked)
State: React Server Components (default), Client Components only when needed
Validation: Zod (schema validation, type inference)
i18n: Custom implementation (static export compatible)
Theme: Dark/Light mode with React Context + LocalStorage
Package Manager: pnpm (preferred) or npm
```

### **Build Configuration**
```typescript
// next.config.ts requirements
- output: 'export' (static export for GitHub Pages)
- images: { unoptimized: true } (GitHub Pages limitation)
- trailingSlash: true (optional, for consistency)
- basePath: '' (empty for custom domain mertis.dev)
- assetPrefix: '' (empty for custom domain)
```

### **Project Structure (Clean Architecture)**
```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/           # i18n route segment (tr, en)
│   │   ├── layout.tsx     # Locale-specific layout
│   │   ├── page.tsx       # Home page
│   │   └── [sections]/    # Route segments
│   ├── layout.tsx         # Root layout (redirects, metadata)
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── ui/                # Reusable primitives (Button, Card, ExternalLink)
│   ├── layout/            # Header, Footer, Navigation
│   ├── sections/          # Hero, About, Experience, Projects, Skills, Contact
│   └── features/          # CommandPalette, EmailObfuscator, BentoGrid, LanguageSwitcher
├── data/
│   ├── portfolio.schema.ts # Zod schemas
│   ├── portfolio.data.json # Raw data (JSON file) - locale-agnostic
│   └── portfolio.ts       # Type-safe data loader
├── i18n/
│   ├── config.ts          # i18n configuration (locales, default)
│   ├── messages/
│   │   ├── tr.json        # Turkish translations
│   │   └── en.json        # English translations
│   ├── schemas/
│   │   └── messages.schema.ts # Zod schema for translations
│   └── loader.ts          # Type-safe translation loader
├── lib/
│   ├── utils.ts          # Utility functions
│   ├── cn.ts             # clsx + tailwind-merge helper
│   ├── security.ts       # Security helpers
│   ├── constants.ts      # App constants
│   └── i18n.ts           # i18n utilities (getTranslations, etc.)
└── types/
    └── portfolio.d.ts    # TypeScript definitions
```

---

## 🛡️ SECURITY REQUIREMENTS (NON-NEGOTIABLE)

### **1. Content Security Policy (CSP)**
Implement strict CSP headers in `next.config.ts`:
```typescript
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

### **2. Email Obfuscation (Anti-Scraping)**
**REQUIREMENT:** Never render email addresses directly in HTML. Use CSS-based obfuscation + JavaScript reveal on interaction.

**Implementation Pattern:**
- Split email into parts (reverse, encode, or use CSS pseudo-elements)
- Reveal actual email only on user interaction (click/hover)
- Use `EmailObfuscator` component for all email displays

### **3. External Link Security**
**REQUIREMENT:** All external links MUST use `rel="noopener noreferrer"`.

**Implementation:**
- Create `ExternalLink` component wrapper
- Enforce `target="_blank"` + `rel="noopener noreferrer"` on all external anchors
- Use this component throughout the codebase

### **4. Input Validation (Future-Proof)**
- Use **Zod** for all schema validation
- Sanitize user inputs with **DOMPurify** if rendering HTML
- Implement rate limiting on any future API routes

---

## 📊 DATA LAYER ARCHITECTURE (ZERO HARDCODED DATA)

### **CRITICAL RULE:** NO HARDCODED STRINGS IN UI COMPONENTS

**This is especially critical for i18n support. ALL UI text must come from translation files.**

**Problem with Hardcoded Data:**
- ❌ Maintenance nightmare
- ❌ No type safety
- ❌ Difficult to update
- ❌ No single source of truth
- ❌ Poor separation of concerns

**Solution: Type-Safe Data Pipeline**

1. **Define Zod Schema** (`src/data/portfolio.schema.ts`)
   - Create strict schemas for all portfolio data
   - Use `z.string()`, `z.array()`, `z.object()`, etc.
   - Export inferred TypeScript type: `type Portfolio = z.infer<typeof PortfolioSchema>`

2. **Store Data in JSON** (`src/data/portfolio.data.json`)
   - Single source of truth
   - Easy to edit without touching code
   - Version controlled

3. **Type-Safe Loader** (`src/data/portfolio.ts`)
   - Read JSON file at build time
   - Validate with Zod schema (runtime validation)
   - Export validated, type-safe data object

4. **Usage in Components**
   ```typescript
   import { portfolioData } from '@/data/portfolio';
   
   export function Hero() {
     return <h1>{portfolioData.personal.name}</h1>; // ✅ Type-safe
   }
   ```

**Data Structure Required:**
```typescript
{
  personal: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    socials: { github: string; linkedin: string };
    about: string;
  };
  experience: Array<{
    company: string;
    role: string;
    period: string;
    description: string;
  }>;
  education: {
    university: string;
    degree: string;
    years: string;
  };
  projects: Array<{
    title: string;
    tech: string[];
    type: 'Enterprise' | 'Infrastructure' | 'Open Source' | 'Personal';
    description: string;
    status: 'Production' | 'Live' | 'Development' | 'Archived';
    link?: string;
  }>;
  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
  };
}
```

---

## 🌍 INTERNATIONALIZATION (i18n) ARCHITECTURE

### **CRITICAL REQUIREMENT: Zero Hardcoded Strings + SINGLE COMPONENT STRUCTURE**
**ALL UI text must come from translation files. NO hardcoded strings in components.**

**CORE PRINCIPLE:** **ONE COMPONENT = ALL LANGUAGES**  
No code duplication. No separate components per language. Infinitely scalable.

### **Supported Locales (Easily Extensible)**
- **Turkish (tr):** Primary language (default)
- **English (en):** Secondary language
- **Future:** Add any language (de, fr, es, etc.) by just adding JSON file

### **Route Structure (Automatic for All Languages)**
```
/                    → Redirects to /tr (default locale)
/tr                  → Turkish version (same component, different translations)
/en                  → English version (same component, different translations)
/de                  → German version (if added - same component, different translations)
/tr/about            → Turkish about page
/en/about            → English about page
```

### **SINGLE COMPONENT ARCHITECTURE**

**Example: Hero Component** (Works for ALL languages)
```typescript
// src/components/sections/Hero.tsx
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

**Adding New Language (e.g., German):**
1. ✅ Add `'de'` to `locales` array in config
2. ✅ Create `src/i18n/messages/de.json`
3. ✅ **DONE!** No component changes needed!
4. ✅ `/de` route automatically works
5. ✅ Hero component automatically uses German translations

### **Translation File Structure**

1. **Define Translation Schema** (`src/i18n/schemas/messages.schema.ts`)
   - Use Zod to validate translation structure
   - Export TypeScript type: `type Messages = z.infer<typeof MessagesSchema>`

2. **Create Translation Files**
   - `src/i18n/messages/tr.json` - Turkish translations
   - `src/i18n/messages/en.json` - English translations
   - `src/i18n/messages/de.json` - German translations (when added)
   - **ALL UI strings must be in these files**

3. **Type-Safe Translation Loader** (`src/i18n/loader.ts`)
   - Read JSON files at build time
   - Validate with Zod schema
   - Export `getMessages(locale)` function

### **SEO Optimization for i18n**
- Implement `hreflang` tags in root layout
- Localized metadata per locale
- Proper `lang` attribute on `<html>` tag

### **Locale Detection & Redirects**
- Root path (`/`) redirects to default locale (`/tr`)
- Invalid locales return 404
- Language switcher component for user preference

### **Benefits of Scalable Architecture**
- ✅ **SINGLE COMPONENT STRUCTURE** - One component works for ALL languages
- ✅ **Zero code duplication** - No need to write components per language
- ✅ **Infinitely scalable** - Add 5, 10, 20 languages by just adding JSON files
- ✅ Zero hardcoded strings in components
- ✅ Type-safe translations (TypeScript + Zod)
- ✅ Runtime validation of translation files
- ✅ SEO optimized (hreflang, localized metadata)
- ✅ Static export compatible
- ✅ **Enterprise-grade** - No amatörce code duplication

---

## ⚡ PERFORMANCE REQUIREMENTS

### **Core Web Vitals Targets**
- **LCP (Largest Contentful Paint):** < 1.2s
- **CLS (Cumulative Layout Shift):** = 0
- **FID (First Input Delay):** < 100ms
- **FCP (First Contentful Paint):** < 1.0s

### **Lighthouse Score Target**
- **Performance:** 100/100
- **Accessibility:** 100/100
- **Best Practices:** 100/100
- **SEO:** 100/100

### **Optimization Strategies**
1. **Font Optimization:**
   - Use `next/font/google` with `Inter` or `Geist Sans`
   - Enable `preload: true`
   - Use variable fonts (smaller file size)

2. **Image Optimization:**
   - Use `next/image` with `unoptimized: true` (GitHub Pages)
   - Lazy load below-the-fold images
   - Provide proper `alt` attributes

3. **Code Splitting:**
   - Dynamic imports for heavy components (`next/dynamic`)
   - Lazy load Command Palette, Bento Grid, etc.

4. **Static Generation:**
   - All pages pre-rendered at build time
   - Generate `sitemap.xml` and `robots.txt`
   - No runtime data fetching

---

## 🎨 DESIGN SYSTEM: "ENGINEERING AESTHETICS"

### **Visual Identity**
- **Theme:** "Deep Space" Dark Mode
  - Background: `#030303`
  - Surface: `#0a0a0a`
  - Border: `rgba(255, 255, 255, 0.1)`

- **Accent Colors:**
  - Primary: `#3b82f6` (Blue)
  - Secondary: `#8b5cf6` (Purple)

### **Design Patterns**

#### **1. Glassmorphism**
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

#### **2. Noise Texture Overlay**
- SVG noise filter with `mix-blend-mode: overlay`
- Opacity: `0.03` (3%)
- Fixed position, pointer-events-none

#### **3. Bento Grid Layout**
- CSS Grid: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- Responsive breakpoints:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3-4 columns
  - 4K: 5+ columns
- Staggered animations with Framer Motion

### **UX Patterns**

#### **1. Global Command Palette (Cmd+K)**
- Spotlight-style modal
- Search projects, jump to sections, copy email
- Keyboard navigation (arrow keys, Enter, Escape)
- Smooth animations

#### **2. Micro-Interactions**
- Magnetic buttons (hover effect)
- Hover-lift cards (transform + shadow)
- Smooth page transitions
- Scroll-linked parallax (subtle)

---

## ♿ ACCESSIBILITY REQUIREMENTS (WCAG 2.1 AA)

### **Mandatory Requirements**
- ✅ Semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`)
- ✅ ARIA labels where semantic HTML is insufficient
- ✅ Keyboard navigation support (Tab, Enter, Escape, Arrow keys)
- ✅ Visible focus indicators (2px solid outline, high contrast)
- ✅ Color contrast ratio ≥ 4.5:1 for text
- ✅ Alt text for all images
- ✅ Screen reader announcements for dynamic content
- ✅ Skip to main content link

### **Implementation Checklist**
- [ ] All interactive elements keyboard accessible
- [ ] Focus styles visible and consistent
- [ ] ARIA labels on icons and decorative elements
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Form labels associated with inputs (if any)
- [ ] Error messages announced to screen readers
- [ ] Color not the only indicator of state

---

## 🚀 DEPLOYMENT CONFIGURATION

### **GitHub Pages Setup**
1. **Next.js Config:**
   - `output: 'export'`
   - `images: { unoptimized: true }`
   - No `basePath` or `assetPrefix` (custom domain)

2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
   ```yaml
   - Checkout code
   - Setup pnpm/node
   - Install dependencies (cached)
   - Run linting
   - Build project
   - Upload artifact
   - Deploy to GitHub Pages
   ```

3. **Repository Settings:**
   - Source: GitHub Actions
   - Custom domain: mertis.dev
   - Enforce HTTPS: Enabled

### **Cloudflare Configuration**
- **DNS:** CNAME record to `username.github.io` (proxy OFF - DNS only)
- **SSL/TLS:** Full (strict) mode
- **Caching:** Browser cache 4h, Edge cache 2h
- **Compression:** Brotli enabled

---

## 📝 IMPLEMENTATION CHECKLIST

### **Phase 1: Foundation**
- [ ] Initialize Next.js 15 with TypeScript strict mode
- [ ] Configure Tailwind CSS v4
- [ ] Set up project structure (Clean Architecture)
- [ ] Configure ESLint + Prettier
- [ ] Set up GitHub Actions workflow

### **Phase 2: Data Layer & i18n**
- [ ] Create Zod schemas (`portfolio.schema.ts`)
- [ ] Create JSON data file (`portfolio.data.json`) - locale-agnostic
- [ ] Implement type-safe loader (`portfolio.ts`)
- [ ] Validate data at build time
- [ ] Create i18n translation schemas (`messages.schema.ts`)
- [ ] Create translation files (`tr.json`, `en.json`)
- [ ] Implement type-safe translation loader
- [ ] Set up locale routing structure (`[locale]` segment)

### **Phase 3: Core Components**
- [ ] UI primitives (Button, Card, ExternalLink)
- [ ] Layout components (Header, Footer, Navigation) - **using translations**
- [ ] Section components (Hero, About, Experience, Projects, Skills, Contact) - **using translations**
- [ ] Bento Grid layout
- [ ] Language Switcher component
- [ ] Ensure ALL components use translations (NO hardcoded strings)

### **Phase 4: Advanced Features**
- [ ] Command Palette (Cmd+K)
- [ ] Email obfuscation component
- [ ] Framer Motion animations
- [ ] Glassmorphism effects
- [ ] Noise texture overlay

### **Phase 5: Security & Performance**
- [ ] CSP headers implementation
- [ ] Security components (ExternalLink, EmailObfuscator)
- [ ] Font optimization
- [ ] Image optimization
- [ ] Code splitting
- [ ] Lighthouse audit (target: 100/100)

### **Phase 6: Accessibility**
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Screen reader testing
- [ ] Color contrast verification

### **Phase 7: Deployment**
- [ ] Next.js static export configuration
- [ ] GitHub Pages deployment test
- [ ] Cloudflare DNS verification
- [ ] SSL certificate validation
- [ ] Final performance audit

---

## ✅ ACCEPTANCE CRITERIA

### **Functional**
- [ ] All portfolio data displayed (no hardcoded strings)
- [ ] Responsive design (mobile → 4K)
- [ ] Command Palette functional
- [ ] Email obfuscation working
- [ ] External links secure
- [ ] Smooth animations

### **Non-Functional**
- [ ] Lighthouse: 100/100 (all categories)
- [ ] TypeScript: Zero `any` types, strict mode
- [ ] Security: CSP, XSS prevention, email obfuscation
- [ ] Accessibility: WCAG 2.1 AA compliant
- [ ] Performance: LCP < 1.2s, CLS = 0, FID < 100ms
- [ ] Deployment: GitHub Pages + Cloudflare working

---

## 🚫 CONSTRAINTS & CONSTRAINTS

### **DO NOT:**
- ❌ Use `any` types in TypeScript
- ❌ Hardcode data in components
- ❌ Skip security headers (CSP, etc.)
- ❌ Render emails directly in HTML
- ❌ Use external links without `noopener noreferrer`
- ❌ Ignore accessibility requirements
- ❌ Deploy without Lighthouse audit

### **MUST:**
- ✅ Use TypeScript strict mode
- ✅ Validate all data with Zod
- ✅ Implement CSP headers
- ✅ Obfuscate email addresses
- ✅ Secure all external links
- ✅ Meet WCAG 2.1 AA standards
- ✅ Achieve 100/100 Lighthouse scores

---

## 📚 REFERENCE DOCUMENTATION

- [Next.js 15 Docs](https://nextjs.org/docs)
- [TypeScript Strict Mode](https://www.typescriptlang.org/tsconfig#strict)
- [Zod Documentation](https://zod.dev)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Core Web Vitals](https://web.dev/vitals/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Cloudflare DNS](https://developers.cloudflare.com/dns/)

---

**Status:** ✅ Ready for Implementation  
**Next Action:** Begin Phase 1 - Foundation Setup

