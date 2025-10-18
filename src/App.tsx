import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './theme';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { Toaster } from './components/ui/sonner';

// Lazy load heavy components for better code splitting
const Hero3D = lazy(() => import('./components/Hero3D').then(module => ({ default: module.Hero3D })));
const BentoAbout = lazy(() => import('./components/BentoAbout').then(module => ({ default: module.BentoAbout })));
const ProjectCarousel = lazy(() => import('./components/ProjectCarousel').then(module => ({ default: module.ProjectCarousel })));
const ExperienceTimeline = lazy(() => import('./components/ExperienceTimeline').then(module => ({ default: module.ExperienceTimeline })));
const SkillsGrid = lazy(() => import('./components/SkillsGrid').then(module => ({ default: module.SkillsGrid })));
const TerminalContact = lazy(() => import('./components/TerminalContact').then(module => ({ default: module.TerminalContact })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const BackToTop = lazy(() => import('./components/BackToTop').then(module => ({ default: module.BackToTop })));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
  </div>
);

const AppContent = () => {
  const { theme } = useTheme();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Determine cursor color based on theme
  const cursorColor = theme === 'light' ? '#0066ff' : '#00D9FF';

  useEffect(() => {
    // Set meta tags for SEO
    document.title = 'Gaurav Yadav | Front-End Developer & Cybersecurity Enthusiast';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Building secure, interactive web experiences with React, Next.js, and WebRTC. Open-source developer and founder of Zocav digital agency.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Building secure, interactive web experiences with React, Next.js, and WebRTC. Open-source developer and founder of Zocav digital agency.';
      document.head.appendChild(meta);
    }

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
  {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navigation />

      {/* Custom Cursor Glow Effect - spring-following, reduced motion aware */}
      {!prefersReducedMotion && (
        <motion.div
          className="fixed pointer-events-none z-50 w-96 h-96 rounded-full opacity-20 blur-3xl hidden md:block"
          animate={{ x: cursorPosition.x - 192, y: cursorPosition.y - 192 }}
          transition={{ type: 'spring', stiffness: 140, damping: 18, mass: 0.5 }}
          style={{ background: `radial-gradient(circle, ${cursorColor} 0%, transparent 70%)` }}
        />
      )}

      {/* Background Grid */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.05
        }}
      />

      {/* Main Content */}
  <main id="main-content" className="relative z-10" role="main">
        <AnimatePresence>
          <motion.section
            id="hero"
            aria-label="Hero section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18 }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <Hero3D />
            </Suspense>
          </motion.section>
          <motion.div className="animated-gradient-divider opacity-30 my-12" aria-hidden="true" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} />
          <motion.section
            id="about"
            aria-label="About section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.08 }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <BentoAbout />
            </Suspense>
          </motion.section>
          <motion.div className="animated-gradient-divider opacity-30 my-12" aria-hidden="true" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} />
          <motion.section
            id="projects"
            aria-label="Projects section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.16 }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <ProjectCarousel />
            </Suspense>
          </motion.section>
          <motion.div className="animated-gradient-divider opacity-30 my-12" aria-hidden="true" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} />
          <motion.section
            id="experience"
            aria-label="Experience section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.24 }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <ExperienceTimeline />
            </Suspense>
          </motion.section>
          <motion.div className="animated-gradient-divider opacity-30 my-12" aria-hidden="true" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} />
          <motion.section
            id="skills"
            aria-label="Skills section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.32 }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <SkillsGrid />
            </Suspense>
          </motion.section>
          <motion.div className="animated-gradient-divider opacity-30 my-12" aria-hidden="true" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} />
          <motion.section
            id="contact"
            aria-label="Contact section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.40 }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <TerminalContact />
            </Suspense>
          </motion.section>
        </AnimatePresence>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: 'var(--card)',
            color: 'var(--card-foreground)',
            border: '1px solid var(--border)'
          }
        }}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}