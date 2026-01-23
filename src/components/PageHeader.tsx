'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface PageHeaderProps {
  icon?: ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  accentColor?: string;
  animate?: boolean;
}

export function PageHeader({
  icon,
  title,
  description,
  iconColor = 'bg-blue-100 dark:bg-blue-900/30',
  accentColor = 'text-blue-600 dark:text-blue-400',
  animate = true,
}: PageHeaderProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const content = (
    <div className="mb-10 sm:mb-12 lg:mb-16">
      {icon && (
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
          <div className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl ${iconColor}`}>
            <div className={accentColor}>{icon}</div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-apple-900 dark:text-white">
            {title}
          </h1>
        </div>
      )}
      {!icon && (
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-apple-900 dark:text-white mb-4 sm:mb-6">
          {title}
        </h1>
      )}
      <p className="text-base sm:text-lg lg:text-xl text-apple-600 dark:text-apple-300 max-w-3xl leading-relaxed animate-slide-up animate-delay-100">
        {description}
      </p>
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      {content}
    </motion.div>
  );
}
