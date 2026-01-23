'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import type { ReactNode } from 'react';

interface BlogLayoutProps {
  title: string;
  description?: string;
  date?: string;
  readTime?: number;
  children: ReactNode;
  toc?: ReactNode;
}

export function BlogLayout({
  title,
  description,
  date,
  readTime,
  children,
  toc,
}: BlogLayoutProps) {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to blogs
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-black mb-4 text-zinc-900 dark:text-white">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
              {description}
            </p>
          )}
          {(date || readTime) && (
            <div className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-500">
              {date && <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>}
              {readTime && <span>{readTime} min read</span>}
            </div>
          )}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 prose dark:prose-invert prose-lg max-w-none"
          >
            {children}
          </motion.div>

          {/* Sidebar with TOC */}
          {toc && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1 sticky top-24 h-fit"
            >
              {toc}
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
