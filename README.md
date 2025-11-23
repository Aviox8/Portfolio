# Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://dev-portfolio.vercel.app)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://dev-portfolio.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4.0-646CFF?logo=vite)](https://vitejs.dev/)

A modern, high-performance developer portfolio built with React, TypeScript, Vite, and Three.js. This portfolio showcases best practices for 2025 web development with a focus on performance, accessibility, and stunning visual effects.

![Portfolio Preview](https://via.placeholder.com/1200x630/0A0A0A/00D9FF?text=Portfolio+Preview)

## ✨ Features

### Performance Optimizations

- **Code Splitting**: Lazy loading with React.lazy() and Suspense for optimal bundle sizes
- **Manual Chunking**: Strategic vendor splitting (React, Three.js, Radix UI, etc.)
- **3D Performance**: 30 FPS limiting, low-power GPU mode, intersection observer pausing
- **Bundle Size**: Optimized from 1.2MB to multiple smaller chunks (<900KB largest)

### Accessibility
- **WCAG AAA Contrast**: High contrast ratios for text readability
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Keyboard Navigation**: Full keyboard accessibility on all interactive elements
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Focus Indicators**: Visible focus states with 2px cyan outline

### Design System
- **Glassmorphism**: Consistent 50% opacity with 12px backdrop blur
- **8px Grid System**: Spacing using 8px increments for visual harmony
- **Gradient Accents**: Cyan (#00D9FF) to Green (#00FF88) gradient
- **Typography**: Inter for body text, JetBrains Mono for code
- **Responsive**: Mobile-first approach with breakpoints at sm, md, lg, xl

### Components Architecture
```
/components
├── Hero3D.tsx              # 5-second hook with optimized 3D sphere
├── Navigation.tsx          # Sticky nav with glassmorphism on scroll
├── BentoAbout.tsx          # Story-first about section with bento grid
├── ProjectCarousel.tsx     # Case study project cards with outcomes
├── ExperienceTimeline.tsx  # Professional journey timeline
├── SkillsGrid.tsx          # Technology expertise grid
├── TerminalContact.tsx     # Terminal-themed contact form
├── Footer.tsx              # "Let's Build Together" CTA + footer
├── BackToTop.tsx           # Floating back-to-top button
├── ScrollProgress.tsx      # Reading progress indicator
└── TrustSignals.tsx        # Stats and testimonials
```

## 🛠️ Tech Stack

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.4.0 with SWC
- **3D Graphics**: Three.js via @react-three/fiber & @react-three/drei
- **Animation**: Motion (Framer Motion)
- **UI Components**: Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React
- **Form**: React Hook Form

## 📦 Installation

```bash
# Install dependencies (use --legacy-peer-deps if needed)
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build
```

## 🏗️ Build Output

The optimized production build creates the following chunks:

```
├── index-[hash].js          # Main application code (~160KB)
├── three-vendor-[hash].js   # Three.js bundle (~863KB)
├── react-vendor-[hash].js   # React core (~142KB)
├── radix-ui-[hash].js       # Radix UI components (~2KB)
├── ui-vendor-[hash].js      # UI utilities (~44KB)
├── form-vendor-[hash].js    # Form libraries (minimal)
└── [component]-[hash].js    # Lazy-loaded components (2-6KB each)
```

## 🎨 Design Tokens

### Colors
```css
--background: #0A0A0A
--secondary-bg: #1A1A1A
--primary: #00D9FF (Cyan)
--secondary: #00FF88 (Green)
--muted: #888888
--foreground: #ffffff
```

### Spacing
- Base unit: 8px
- Section padding: py-32 (128px)
- Component gaps: gap-2, gap-3, gap-4, gap-6, gap-8

### Effects
- **Glass**: rgba(26, 26, 26, 0.5) + backdrop-blur-xl
- **Gradient**: linear-gradient(135deg, #00D9FF 0%, #00FF88 100%)
- **Border**: rgba(255, 255, 255, 0.1)
- **Radius**: 0.75rem (12px)

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- Path aliases: `@/*` → `./src/*`
- ES2020 target with bundler module resolution

### Vite
- Port: 3000
- Output: `build/`
- Manual chunks for vendor code splitting
- Chunk size warning limit: 1000KB

## 📱 Responsive Design

- **Mobile**: < 768px (3D disabled, single column layout)
- **Tablet**: 768px - 1024px (Adjusted spacing, 2-column grids)
- **Desktop**: > 1024px (Full 3D experience, multi-column layouts)

## ♿ Accessibility Features

- ✅ WCAG AAA contrast ratios
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Reduced motion support
- ✅ Touch-friendly targets (min 44x44px)
- ✅ Focus indicators on all interactive elements
- ✅ Semantic HTML structure

## 🎯 Performance Metrics

- **First Contentful Paint**: Optimized with code splitting
- **Largest Contentful Paint**: Hero section optimized
- **Time to Interactive**: Lazy loading non-critical components
- **Cumulative Layout Shift**: Fixed dimensions on images/canvas
- **3D Rendering**: 30 FPS cap, pauses when off-screen

## 📝 SEO

- Dynamic meta tags (title, description)
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Open Graph tags ready
- Sitemap-friendly structure

## 🚧 Future Enhancements

1. **Analytics**: Google Analytics or Plausible integration
2. **Blog**: Technical articles and learnings
3. **Testimonials**: Client feedback carousel
4. **GitHub Stats**: Real-time contribution data
5. **Theme Toggle**: Dark/Light mode switcher

## � Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Modern browser with WebGL support

### Quick Start

```bash
# Clone the repository
git clone https://github.com/archduke1337/dev-portfolio.git
cd dev-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
dev-portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components
│   │   └── ...        # Feature components
│   ├── styles/        # Global styles
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── theme.tsx      # Theme provider
├── index.html         # HTML template
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
├── vite.config.ts     # Vite config
└── README.md          # This file
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero3D.tsx`
2. **About Section**: Edit `src/components/BentoAbout.tsx`
3. **Projects**: Update project data in `src/components/ProjectCarousel.tsx`
4. **Experience**: Modify timeline in `src/components/ExperienceTimeline.tsx`
5. **Skills**: Update skills in `src/components/SkillsGrid.tsx`
6. **Contact**: Configure form in `src/components/TerminalContact.tsx`

### Theme & Colors

Edit design tokens in `src/index.css` and `src/styles/globals.css`:

```css
:root {
  --primary: #00D9FF;    /* Cyan - main accent */
  --secondary: #00FF88;  /* Green - secondary accent */
  --background: #0A0A0A; /* Dark background */
  /* ... more tokens */
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/archduke1337/dev-portfolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## � License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Original design inspiration from [Figma Project](https://www.figma.com/design/H5RNL5dTV2Iyy0QFjiryV0/dev-portfolio)
- Icons by [Lucide](https://lucide.dev/)
- 3D effects powered by [Three.js](https://threejs.org/)
- UI components by [Radix UI](https://www.radix-ui.com/)

## 📞 Contact

**Gaurav Yadav** - [@archduke1337](https://github.com/archduke1337)

- LinkedIn: [linkedin.com/in/gurvv](https://www.linkedin.com/in/gurvv)
- Email: gauravramyadav@gmail.com

---

**⭐ Star this repo if you find it helpful!**

*Last Updated: October 18, 2025*
