# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Start development server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Architecture Overview

**Bilingual corporate consulting website** (English/Arabic) built with Next.js 16 App Router, React 19, and Tailwind CSS v4.

### Core Structure

- **`app/[lang]/`** — Locale-segmented routing with static params (`en`, `ar`). RTL/LTR direction handled in root layout.
- **`app/[lang]/(main)/`** — Route group for main site sections:
  - `/services/[slug]` — Dynamic service pages (e.g., project-management, market-studies, feasibility-studies)
  - `/knowledge-hub/` — Content library with categories (lectures implemented)
  - `/bi-center/` — Business intelligence section (economic-insights, investment-study implemented)
  - `/legislation-library/`, `/success-stories/`
- **`components/`** — Shared UI components:
  - `navigation/` — Navbar (dynamic dropdowns from dictionary), Footer
  - `ui/` — shadcn/ui base components (button, card, sheet, navigation-menu, etc.)
- **`dictionaries/`** — JSON localization files (`en.json`, `ar.json`). All UI text, navigation, and service metadata lives here.
- **`content/`** — Markdown content for service pages (`content/en/services/*.md`, `content/ar/services/*.md`)
- **`lib/`** — Utilities:
  - `utils.ts` — `cn()` helper (clsx + tailwind-merge)
  - `get-dictionary.ts` — Async locale loader

### Key Patterns

- **i18n**: Dictionary passed as prop through layout → components. No runtime i18n library.
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`. Custom fonts (Futura, Calibri) via `next/font/local`.
- **Markdown**: Service pages use `react-markdown` + `remark-gfm` for content rendering.
- **Navigation**: Dynamic dropdown menus populated from `dictionary.services_hub.services[]` and similar structures.
- **Images**: Unsplash allowed via `next.config.ts` remotePatterns.

### Scripts

- `update_*.mjs` files in root are content sync scripts (not part of build).
