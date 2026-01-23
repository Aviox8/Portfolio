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
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 transition-all duration-300 ${
        scrolled ? 'top-2' : ''
      }`}
    >
      <div 
        className={`apple-nav-glass rounded-full px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-1 sm:gap-3 lg:gap-4 transition-all duration-300 ${
          scrolled ? 'shadow-xl backdrop-blur-xl' : 'shadow-lg'
        }`}
      >
        {/* Brand / Home Link */}
        <Link 
          href="/" 
          className="pl-3 sm:pl-4 pr-2 font-bold text-lg sm:text-xl tracking-tight text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 duration-200"
          title="Go to home"
        >
          GY
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`apple-nav-pill relative group transition-all duration-300 ${
                isActive(link.href)
                  ? 'apple-nav-pill-active'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <span className="relative z-10 text-sm lg:text-base">{link.name}</span>
              {/* Underline indicator for active */}
              {isActive(link.href) && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"></div>
              )}
            </Link>
          ))}
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-6 lg:h-7 bg-zinc-200 dark:bg-zinc-700 mx-1 lg:mx-2"></div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2 pr-2 sm:pr-3">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 active:scale-95"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={20} className="transition-transform duration-300" />
            ) : (
              <Menu size={20} className="transition-transform duration-300" />
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
            className="glass-panel rounded-2xl p-2 flex flex-col gap-1 backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {NAVIGATION_LINKS.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? 'bg-blue-500/20 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                    : 'hover:bg-black/5 dark:hover:bg-white/5 text-zinc-900 dark:text-white'
                } active:scale-95`}
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
