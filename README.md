# 🚀 Mert İs - Enterprise Portfolio Platform

**Senior Fullstack Developer Portfolio**

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4+-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **FAANG-standard portfolio platform** with enterprise-grade architecture, internationalization (i18n), dark/light mode, and perfect security practices.

🌐 **Live:** [mertis.dev](https://mertis.dev)

## ✨ Features

### 🏗️ Enterprise Architecture
- ✅ **Zero hardcoded data** - All content from JSON files
- ✅ **Type-safe data layer** - Zod validation + TypeScript strict mode
- ✅ **Clean Architecture** - SOLID principles, separation of concerns
- ✅ **Static Export** - Optimized for GitHub Pages

### 🌍 Internationalization (i18n)
- ✅ **Multi-language support** - Turkish (tr) & English (en)
- ✅ **Single component architecture** - One component works for all languages
- ✅ **SEO optimized** - hreflang tags, localized metadata
- ✅ **Easily extensible** - Add new language = just add JSON file

### 🎨 Theme System
- ✅ **Dark + Light mode** - Seamless switching with animations
- ✅ **System preference detection** - Auto-detect OS theme
- ✅ **LocalStorage persistence** - Remember user preference
- ✅ **No FOUC** - Proper SSR/SSG handling

### 🔒 Security
- ✅ **CSP headers** - Content Security Policy
- ✅ **Email obfuscation** - Anti-scraping protection
- ✅ **Secure external links** - rel="noopener noreferrer"
- ✅ **XSS prevention** - Input sanitization

### ⚡ Performance
- ✅ **Lighthouse 100/100** - Perfect scores (target)
- ✅ **Static generation** - Pre-rendered at build time
- ✅ **Code splitting** - Optimized bundle size
- ✅ **Font optimization** - next/font with preload

### ♿ Accessibility
- ✅ **WCAG 2.1 AA compliant** - Full accessibility support
- ✅ **Keyboard navigation** - All features accessible
- ✅ **Screen reader compatible** - Proper ARIA labels
- ✅ **Focus indicators** - Visible focus states

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router) with TurboPack
- **Language:** TypeScript 5.4+ (Strict mode)
- **Styling:** Tailwind CSS v4 (latest alpha)
- **Animations:** Framer Motion 11+
- **Validation:** Zod 3.23+
- **Icons:** Lucide React
- **Deployment:** GitHub Pages + Cloudflare CDN

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/Mertis1204/mertis.dev.git
cd mertis.dev

# Install dependencies (using npm)
npm install

# Or using pnpm (recommended)
pnpm install
```

## 💻 Development

```bash
# Start development server
npm run dev

# Type check
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build (after build)
npm run start
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment:
1. Push to `main` branch
2. GitHub Actions workflow triggers automatically
3. Site builds and deploys to GitHub Pages
4. Available at: `https://username.github.io/mertis.dev`

### Custom Domain Setup (mertis.dev):
1. Add `CNAME` file in `public/` directory with domain name
2. Configure Cloudflare DNS:
   - **Type:** CNAME
   - **Name:** `@` (or `www`)
   - **Target:** `Mertis1204.github.io`
   - **Proxy status:** DNS only (orange cloud OFF)
3. Enable HTTPS in GitHub Pages settings
4. SSL/TLS mode in Cloudflare: Full (strict)

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/           # i18n route segment (tr, en)
│   │   ├── layout.tsx     # Locale-specific layout
│   │   ├── page.tsx       # Home page
│   │   └── not-found.tsx  # 404 page
│   ├── layout.tsx         # Root layout (redirect to locale)
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── ui/                # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ExternalLink.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── features/          # Advanced features
│   │   ├── ThemeToggle.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── EmailObfuscator.tsx
│   └── providers/         # React Context providers
│       └── ThemeProvider.tsx
├── data/
│   ├── portfolio.schema.ts # Zod schemas
│   ├── portfolio.data.json # Portfolio data (JSON)
│   └── portfolio.ts       # Type-safe data loader
├── i18n/
│   ├── config.ts          # i18n configuration
│   ├── messages/          # Translation files
│   │   ├── tr.json        # Turkish
│   │   └── en.json        # English
│   ├── schemas/
│   │   └── messages.schema.ts # Translation schema
│   └── loader.ts          # Translation loader
└── lib/
    ├── cn.ts              # Class name utility (clsx + tailwind-merge)
    ├── security.ts        # Security helpers
    └── constants.ts       # App constants
```

## 🌐 i18n - Adding New Languages

Adding a new language is incredibly simple:

1. **Add locale to config:**
```typescript
// src/i18n/config.ts
export const locales = ['tr', 'en', 'de'] as const; // Add 'de'
```

2. **Create translation file:**
```bash
cp src/i18n/messages/en.json src/i18n/messages/de.json
# Translate content in de.json
```

3. **Done!** No component changes needed. All components automatically support the new language.

## 🎨 Theme System

The theme system supports:
- **Dark mode** (default for developers)
- **Light mode** (for daylight users)
- **System preference** (auto-detect OS setting)

Users can manually toggle between themes using the animated toggle button in the header. Their preference is saved in LocalStorage and persists across sessions.

## 🔐 Security Features

### Content Security Policy (CSP)
Strict CSP headers implemented in `next.config.ts`:
- No inline scripts (except FOUC prevention)
- No unsafe-eval (except Next.js requirements)
- External resources whitelisted

### Email Obfuscation
Email addresses are never rendered directly in HTML:
- Obfuscated display before interaction
- Revealed only on user click/hover
- Clipboard copy functionality

### Secure External Links
All external links automatically include:
- `target="_blank"`
- `rel="noopener noreferrer"`

## 📊 Performance Optimization

- **Static Site Generation (SSG)** - All pages pre-rendered
- **Font Optimization** - next/font with preload
- **Code Splitting** - Dynamic imports for heavy components
- **Image Optimization** - Proper `alt` tags, lazy loading
- **Minimal Bundle Size** - Tree-shaking, no unused code

## ♿ Accessibility (WCAG 2.1 AA)

- **Semantic HTML5** - Proper use of header, main, nav, section, etc.
- **ARIA Labels** - On all interactive elements
- **Keyboard Navigation** - Full keyboard support (Tab, Enter, Escape)
- **Focus Indicators** - Visible focus states (2px ring)
- **Screen Reader Compatible** - Tested with NVDA/VoiceOver
- **Color Contrast** - All text ≥ 4.5:1 contrast ratio
- **Skip Links** - "Skip to main content" for assistive tech

## 🧪 Testing & Quality

```bash
# Type checking (no errors allowed)
npm run type-check

# Linting (strict rules)
npm run lint

# Build test (must succeed)
npm run build
```

### Code Quality Standards:
- ❌ NO `any` types in TypeScript
- ❌ NO hardcoded data in components
- ❌ NO hardcoded strings (use i18n)
- ❌ NO console.logs (use console.warn/error only)
- ✅ Strict TypeScript mode
- ✅ ESLint + Prettier
- ✅ Zod runtime validation

## 📝 License

MIT License - See [LICENSE](LICENSE) for details

## 👤 Author

**Mert İs** - Senior Fullstack Developer

- 🌐 Website: [mertis.dev](https://mertis.dev)
- 💼 LinkedIn: [@mertis](https://www.linkedin.com/in/mertis/)
- 🐙 GitHub: [@Mertis1204](https://github.com/Mertis1204)
- 📧 Email: mertisresmi@gmail.com
- 📍 Location: İstanbul, Türkiye

## 🙏 Acknowledgments

This project demonstrates:
- FAANG/MANGA-level engineering standards
- Enterprise-grade architecture
- Production-ready code quality
- Security-first approach
- Performance optimization
- Accessibility compliance

---

**Built with ❤️ and ☕ using Next.js 15, TypeScript, and Tailwind CSS**

*"Code is like humor. When you have to explain it, it's bad." - Cory House*
