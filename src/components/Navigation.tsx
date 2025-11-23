import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Zap, Code2, User, FileText, Mail } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', id: 'about', icon: User },
    { label: 'Projects', id: 'projects', icon: Code2 },
    { label: 'Experience', id: 'experience', icon: FileText },
    { label: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        role="navigation"
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-xl border-b border-cyan-500/20 bg-black/40 py-3 shadow-lg shadow-cyan-500/10' 
            : 'bg-transparent py-4'
        }`}
        style={{
          background: isScrolled 
            ? 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(15,15,35,0.6) 100%)'
            : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with cosmic glow */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono relative group"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#00ffff' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative">
              GAURAV
              <motion.span
                className="absolute -inset-2 bg-cyan-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="logo-glow"
                style={{
                  boxShadow: 'var(--glow-cyan-intense)'
                }}
              />
            </span>
          </motion.button>

          {/* Desktop Navigation - Icon based with cosmic effects */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative group p-2 rounded-lg transition-all ${
                    isActive 
                      ? 'text-cyan-400' 
                      : 'text-gray-400 hover:text-cyan-400'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={`Go to ${link.label} section`}
                  role="link"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  <Icon className="w-5 h-5" />
                  {isActive && (
                    <motion.span
                      layoutId="nav-pulse"
                      className="absolute inset-0 rounded-lg border border-cyan-400/50"
                      style={{
                        boxShadow: 'var(--glow-cyan)'
                      }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {!isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </motion.button>
              );
            })}
            <div className="border-l border-cyan-500/20 h-6"></div>
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/50 relative overflow-hidden group"
                onClick={() => scrollToSection('contact')}
                style={{
                  boxShadow: 'var(--glow-cyan)'
                }}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  Get in Touch
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-violet-500/50 to-cyan-500/50"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Cosmic styled */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg border border-cyan-500/30 hover:border-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/10 backdrop-blur-sm transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: isMobileMenuOpen ? 'var(--glow-cyan)' : 'none'
            }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-cyan-400"
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-cyan-400"
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
            />
            
            {/* Menu Panel - Cosmic themed */}
                <motion.div
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[320px] z-50 md:hidden p-6 safe-area-padding border-l border-cyan-500/20"
                  id="mobile-menu"
                  role="dialog"
                  aria-modal="true"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(15,15,35,0.9) 100%)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                      <motion.h2 
                        className="text-lg font-semibold text-cyan-400"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                      >
                        MENU
                      </motion.h2>
                      <ThemeToggle />
                    </div>
                {/* Close button - Touch optimized */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 rounded-xl border border-white/10 hover:border-primary bg-white/5 hover:bg-primary/10 transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Nav Links - Cosmic style */}
                <div className="flex flex-col gap-3 flex-1">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.id;
                    const Icon = link.icon;
                    return (
                      <motion.button
                        key={link.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => scrollToSection(link.id)}
                        className={`text-left py-4 px-4 rounded-lg transition-all relative group touch-manipulation min-h-[44px] text-base font-medium flex items-center gap-3 ${
                          isActive 
                            ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30' 
                            : 'text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/5'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{link.label}</span>
                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-indicator"
                            className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                            style={{
                              boxShadow: 'var(--glow-cyan)'
                            }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* CTA Button - Cosmic themed */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Button
                    size="lg"
                    className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/50 w-full touch-manipulation h-[52px] relative overflow-hidden"
                    onClick={() => scrollToSection('contact')}
                    style={{
                      boxShadow: 'var(--glow-cyan)'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      Get in Touch
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-violet-500/30 to-cyan-500/30"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
