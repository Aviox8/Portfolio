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
      className={`fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 transition-all duration-300`}
    >
      <div 
        className={`apple-nav-glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-0.5 sm:gap-2 transition-all duration-300 ${
          scrolled ? 'shadow-lg backdrop-blur-xl' : 'shadow-sm backdrop-blur-md'
        }`}
      >
        {/* Brand / Home Link */}
        <Link 
          href="/" 
          className="pl-2 sm:pl-3 pr-1.5 sm:pr-2 font-semibold text-sm sm:text-base tracking-tight text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          title="Go to home"
        >
          GY
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-4 bg-zinc-200 dark:bg-zinc-700 mx-1"></div>

        {/* Actions */}
        <div className="flex items-center gap-0.5 sm:gap-1 pr-1 sm:pr-2">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full Width Dropdown) */}
      {isOpen && (
        <div 
          className="fixed top-16 sm:top-20 left-0 right-0 w-full px-4 md:hidden z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="glass-panel rounded-2xl p-2 flex flex-col gap-0.5 backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-black/5 dark:hover:bg-white/5 text-zinc-900 dark:text-white'
                }`}
              >
                {link.name}
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
