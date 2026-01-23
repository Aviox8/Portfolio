'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { NAVIGATION_LINKS } from '@/config/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <nav 
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 transition-all duration-300`}
    >
      <div 
        className={`apple-nav-glass rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center gap-1 sm:gap-3 transition-all duration-300 ${
          scrolled ? 'shadow-xl backdrop-blur-2xl border border-white/20 dark:border-white/10' : 'shadow-lg backdrop-blur-xl border border-white/10 dark:border-white/5'
        }`}
      >
        {/* Brand / Home Link */}
        <Link 
          href="/" 
          className="pl-2 sm:pl-4 pr-2 sm:pr-3 font-bold text-sm sm:text-base tracking-tight text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 min-w-fit"
          title="Go to home"
        >
          GY
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1.5 ml-2">
          {NAVIGATION_LINKS.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                isActive(link.href)
                  ? 'text-blue-600 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-500/20'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {link.name}
              {!isActive(link.href) && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:w-1/2 transition-all duration-300" />
              )}
            </Link>
          ))}
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-5 bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-600 to-transparent mx-2"></div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-1.5 pr-2 sm:pr-3">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-500/20 text-zinc-900 dark:text-white transition-all duration-200"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full Width Dropdown) */}
      {isOpen && (
        <div 
          className="fixed top-20 sm:top-24 left-0 right-0 w-full px-4 md:hidden z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="glass-panel rounded-3xl p-3 sm:p-4 flex flex-col gap-1 backdrop-blur-xl border border-white/20 dark:border-white/10 space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 relative group overflow-hidden ${
                  isActive(link.href)
                    ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300'
                    : 'hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-900 dark:text-white'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300" />
                <span className="relative">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 md:hidden z-30 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}

