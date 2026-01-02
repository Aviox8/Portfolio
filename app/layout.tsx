import type { Metadata } from 'next';
import './globals.css';
import { Dock } from '@/components/Dock';

export const metadata: Metadata = {
  title: 'Gaurav Yadav | First-Year Cybersecurity Student & Builder',
  description:
    'Legendary portfolio of Gaurav Yadav. SIH 2025 Qualifier. Full-stack developer shipping production apps weekly. Building Zocav digital agency.',
  authors: [{ name: 'Gaurav Yadav', url: 'https://archduke.is-a.dev' }],
  openGraph: {
    title: 'Gaurav Yadav | Builder & Founder',
    description: 'First-year student. Already SIH-qualified. Already freelancing. Already building startup.',
    url: 'https://archduke.is-a.dev',
    siteName: 'Gaurav Yadav Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaurav Yadav | First-Year Developer',
    description: 'SIH 2025 External Qualifier. Full-stack developer. Building Zocav.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden selection:bg-white/10 selection:text-white">
        <div className="relative min-h-screen">
          {/* Subtle noise/grid background if needed, but keeping it clean for now */}
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Main content */}
          {children}
          
          <Dock />
        </div>
      </body>
    </html>
  );
}
