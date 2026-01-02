# Project Structure

## 📂 app/
Core Next.js application directory using the App Router.
- **layout.tsx**: Root layout containing the MacOS-style Dock and global metadata.
- **page.tsx**: Homepage featuring the Bento Grid layout.
- **globals.css**: Global styles, Tailwind 4 configuration, and typography.
- **about/page.tsx**: About page with story sections and stats.
- **experience/page.tsx**: Journey timeline.
- **projects/page.tsx**: Portfolio grid with case study links.
- **projects/[slug]/page.tsx**: Detailed case study view (Next.js 15 async params).
- **contact/page.tsx**: Contact page with integrated form.

## 📂 components/
Reusable React components.
- **Dock.tsx**: Interactive MacOS-style navigation dock with Framer Motion.
- **ContactForm.tsx**: Clean, accessible contact form.
- **SocialLinks.tsx**: Social media icon links with hover animations.

## 📂 lib/
Data and utility functions.
- **projects.ts**: Project data and helper functions.
- **experience.ts**: Experience and journey data.
- **socials.ts**: Social media links and contact info.

## ⚙️ Configuration
- **package.json**: Optimized dependencies (Next.js 15, React 19, Tailwind 4, Framer Motion).
- **tailwind.config.ts**: Custom theme extensions.
- **tsconfig.json**: Simplified path aliases.
- **postcss.config.js**: PostCSS configuration for Tailwind 4.
