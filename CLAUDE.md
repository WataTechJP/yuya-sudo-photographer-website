# CLAUDE.md

## Project Overview

Professional photographer portfolio website for "yuya" — a single-page site showcasing portrait, landscape, street, and commercial photography. Built with Next.js 16 (App Router) and TypeScript, styled with Tailwind CSS v4 and shadcn/ui components, animated with Framer Motion.

## Tech Stack

- **Framework:** Next.js 16.0.10 (App Router, React Server Components)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4, CSS custom properties (oklch color space), shadcn/ui (new-york style)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Email:** SendGrid (@sendgrid/mail) + Nodemailer
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond (serif, `--font-serif`), Inter (sans, `--font-sans`)
- **Analytics:** Vercel Analytics
- **Package manager:** npm (lock file present), pnpm lock also exists

## Project Structure

```
app/
  layout.tsx          # Root layout (fonts, metadata, theme provider)
  page.tsx            # Home page — assembles all sections
  globals.css         # CSS variables, design tokens, Tailwind config
  api/contact/route.ts # POST endpoint for contact form (SendGrid)

components/
  header.tsx          # Fixed nav bar with mobile menu
  hero.tsx            # Hero section ("Candid Light")
  portfolio-grid.tsx  # Main portfolio grid (49 images, responsive columns)
  about-section.tsx   # About the photographer
  contact-section.tsx # Contact info (email, Instagram, location)
  footer.tsx          # Footer with nav links
  theme-provider.tsx  # next-themes dark/light mode provider
  ui/                 # shadcn/ui components (57+ files, auto-generated)

lib/
  utils.ts            # cn() utility (clsx + tailwind-merge)

hooks/
  use-toast.ts        # Toast notification hook
  use-mobile.ts       # Mobile detection hook

public/
  Resized-portfolio/  # Optimized portfolio images (DSC_*.jpg)
  portfolio/          # Original portfolio images
```

## Commands

```bash
npm run dev      # Start dev server on http://localhost:4002
npm run build    # Production build (TS errors ignored in config)
npm start        # Serve production build
npm run lint     # ESLint
```

## Key Configuration Notes

- **next.config.mjs:** `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`
- **tsconfig.json:** Path alias `@/*` maps to project root. Target ES6, strict mode.
- **components.json:** shadcn/ui configured with RSC support, neutral base color, lucide icons
- **Border radius:** Set to `0rem` (square corners throughout)

## Environment Variables

Required for the contact form API route:
- `SENDGRID_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

## Coding Conventions

- **Imports:** Use `@/` path alias (e.g., `@/components/ui/button`)
- **Components:** Functional components with default exports. Use `"use client"` directive for interactive components.
- **Styling:** Tailwind utility classes. Use `cn()` from `@/lib/utils` to merge conditional classes.
- **Animations:** Framer Motion `motion.div` with `whileInView` for scroll-triggered animations.
- **Images:** Next.js `<Image>` with images in `public/Resized-portfolio/`. First 14 images use `priority` loading; rest use lazy loading with blur placeholders.
- **UI components:** Located in `components/ui/` — these are shadcn/ui generated files. Add new ones via `npx shadcn@latest add <component>` rather than writing manually.
- **Dark mode:** Supported via next-themes. Colors defined as CSS variables in `globals.css` under `:root` (light) and `.dark` selectors.

## Architecture Notes

- Single-page application — all sections render on `app/page.tsx`
- No testing framework is configured
- No Prettier config — relies on ESLint only
- Portfolio images are hardcoded in `portfolio-grid.tsx` (49 items with metadata)
- Content is in English with Japanese metadata (SEO)
- Deployment target: Vercel (analytics integrated)
