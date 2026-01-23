'use client';

import React from 'react';
import { AlertCircle, CheckCircle, InfoIcon, XCircle } from 'lucide-react';
import type { CalloutProps } from '@/types/blog';

const iconMap = {
  info: InfoIcon,
  warning: AlertCircle,
  success: CheckCircle,
  error: XCircle,
};

const bgColorMap = {
  info: 'bg-blue-50 dark:bg-blue-950/30',
  warning: 'bg-amber-50 dark:bg-amber-950/30',
  success: 'bg-green-50 dark:bg-green-950/30',
  error: 'bg-red-50 dark:bg-red-950/30',
};

const borderColorMap = {
  info: 'border-blue-200 dark:border-blue-800',
  warning: 'border-amber-200 dark:border-amber-800',
  success: 'border-green-200 dark:border-green-800',
  error: 'border-red-200 dark:border-red-800',
};

const iconColorMap = {
  info: 'text-blue-600 dark:text-blue-400',
  warning: 'text-amber-600 dark:text-amber-400',
  success: 'text-green-600 dark:text-green-400',
  error: 'text-red-600 dark:text-red-400',
};

const textColorMap = {
  info: 'text-blue-900 dark:text-blue-200',
  warning: 'text-amber-900 dark:text-amber-200',
  success: 'text-green-900 dark:text-green-200',
  error: 'text-red-900 dark:text-red-200',
};

export function Callout({ type, title, children }: CalloutProps) {
  const Icon = iconMap[type];

  return (
    <div
      className={`rounded-lg border-l-4 p-4 my-6 ${bgColorMap[type]} ${borderColorMap[type]}`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${iconColorMap[type]}`} />
        <div className={`flex-1 ${textColorMap[type]}`}>
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
