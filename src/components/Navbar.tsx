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
    <nav className="sticky top-0 z-50 bg-white dark:bg-apple-950 backdrop-blur-xl border-b border-apple-200 dark:border-apple-800 shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="font-bold text-sm sm:text-base text-apple-900 dark:text-apple-50 hover:text-blue-600 dark:hover:text-blue-400 transition-smooth relative group"
          >
            <span className="sm:hidden">GY</span>
            <span className="hidden sm:inline">Gaurav Yadav</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
          
          <div className="hidden md:flex gap-2 items-center">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className="apple-nav-pill group relative px-4 py-2 text-apple-600 dark:text-apple-300 hover:bg-apple-100 dark:hover:bg-apple-800 hover:shadow-elevation-1 rounded-full transition-all duration-300"
                style={{ animationDelay: `${idx * 30}ms` }}
              >
                <span className="relative flex items-center gap-1">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex gap-2 items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-apple-100 dark:hover:bg-apple-800 rounded-lg transition-smooth relative group"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5 w-6 h-6 justify-center">
                <span className={`h-0.5 w-6 bg-apple-900 dark:bg-apple-100 transition-all duration-300 origin-center group-hover:bg-blue-600 dark:group-hover:bg-blue-400 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-apple-900 dark:bg-apple-100 transition-all duration-300 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-apple-900 dark:bg-apple-100 transition-all duration-300 origin-center group-hover:bg-blue-600 dark:group-hover:bg-blue-400 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-up space-y-2 bg-white dark:bg-apple-900">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-apple-600 dark:text-apple-300 hover:text-apple-900 dark:hover:text-apple-50 hover:bg-apple-50 dark:hover:bg-apple-800 rounded-lg transition-smooth"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
