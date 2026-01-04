'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Research", href: "/research" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <div className="apple-nav-glass rounded-full px-2 py-2 flex items-center gap-2 sm:gap-4 transition-all duration-500 hover:scale-[1.01]">
        {/* Brand / Home Link */}
        <Link 
          href="/" 
          className="pl-4 pr-2 font-bold text-lg tracking-tight text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          GY
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="apple-nav-pill relative group"
            >
              <span className="relative z-10">{link.name}</span>
              {/* Active/Hover State could be added here if we tracked current path */}
            </Link>
          ))}
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-6 bg-zinc-200 dark:bg-zinc-700 mx-2"></div>

        {/* Actions */}
        <div className="flex items-center gap-2 pr-2">
          <ThemeToggle />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5 w-5 h-5 justify-center items-center">
              <span className={`h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Floating Bubble) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-4 px-2 md:hidden">
          <div className="glass-panel rounded-3xl p-4 flex flex-col gap-2 animate-slide-up origin-top">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-6 py-4 rounded-2xl text-lg font-medium text-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
