'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from './providers';
import './globals.css';

export const metadata = {
  title: 'Gaurav Yadav | Front-End Developer & Cybersecurity Enthusiast',
  description: 'Building secure, interactive web experiences with React, Next.js, and WebRTC. Open-source developer and founder of Zocav digital agency.',
  keywords: [
    'developer',
    'portfolio',
    'react',
    'next.js',
    'typescript',
    'three.js',
    'cybersecurity',
    'web development',
    'full-stack',
    'open-source'
  ],
  authors: [{ name: 'Gaurav Yadav', url: 'https://archduke.is-a.dev' }],
  creator: 'Gaurav Yadav',
  publisher: 'Gaurav Yadav',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL('https://archduke.is-a.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://archduke.is-a.dev',
    title: 'Gaurav Yadav | Front-End Developer & Cybersecurity Enthusiast',
    description: 'Building secure, interactive web experiences with React, Next.js, and WebRTC.',
    siteName: 'Gaurav Yadav Portfolio',
    images: [
      {
        url: 'https://archduke.is-a.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gaurav Yadav Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaurav Yadav | Front-End Developer',
    description: 'Building secure, interactive web experiences.',
    creator: '@archduke1337',
    images: ['https://archduke.is-a.dev/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://archduke.is-a.dev',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
