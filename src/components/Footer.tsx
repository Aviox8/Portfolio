import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useTheme } from '../theme';

export function Footer() {
  const { theme } = useTheme();
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 overflow-hidden" role="contentinfo">
      {/* Subtle background glow */}
      <motion.div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[48rem] rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        aria-hidden="true"
      />

      {/* Let's Build Together Section */}
      <div 
        style={{
          background: theme === 'light'
            ? 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))'
            : 'linear-gradient(to bottom, transparent, rgba(10,10,10,1))'
        }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="gradient-text inline-block text-4xl font-bold"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Build Together
          </motion.h2>
          <motion.p 
            className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Have a project in mind? Looking for a developer who combines technical expertise with security awareness? 
            Let's create something amazing together.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px] shadow-lg shadow-primary/25"
                onClick={() => scrollToSection('contact')}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  aria-hidden="true"
                />
                <span className="relative z-10">Start a Conversation</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 min-w-[200px]"
                onClick={() => window.open('https://github.com/archduke1337', '_blank', 'noopener,noreferrer')}
              >
                View GitHub
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <button
                onClick={scrollToTop}
                className="font-mono gradient-text hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                style={{ fontSize: '1.25rem' }}
                aria-label="Scroll to top"
              >
                Gaurav Yadav
              </button>
              <p className="text-sm text-muted-foreground mt-1">
                Building the future, one line at a time
              </p>
            </div>

            {/* Link groups and Socials */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-center md:items-start gap-8">
              {/* Navigation links */}
              <nav aria-label="Footer navigation">
                <ul className="flex gap-6 text-sm text-muted-foreground">
                  {[
                    { id: 'about', label: 'About' },
                    { id: 'projects', label: 'Projects' },
                    { id: 'experience', label: 'Experience' },
                    { id: 'contact', label: 'Contact' },
                  ].map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <nav aria-label="Social media links">
                <div className="flex items-center gap-4">
                  <motion.a
                    href="https://github.com/archduke1337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    aria-label="GitHub Profile"
                    whileHover={{ scale: 1.05, rotate: -3 }}
                  >
                    <Github className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                  <motion.a
                    href="http://www.linkedin.com/in/gurvv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    aria-label="LinkedIn Profile"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                  >
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                  <motion.a
                    href="mailto:gauravramyadav@gmail.com"
                    className="p-3 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    aria-label="Send Email"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                </div>
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <div className="relative mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {year} Gaurav Yadav. Built with{' '}
              <Heart className="w-4 h-4 text-secondary fill-secondary" aria-label="love" />
              and coffee
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-mono">
              Made with React × Three.js × Motion × Tailwind CSS
            </p>

            {/* Back to top button */}
            <div className="absolute right-0 top-8">
              <button
                onClick={scrollToTop}
                className="group p-2 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Back to top"
                title="Back to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
