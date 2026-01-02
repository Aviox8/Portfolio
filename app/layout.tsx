import type { Metadata } from 'next';
import './globals.css';
import { Dock } from '@/components/Dock';

export const metadata: Metadata = {
  title: 'Gaurav Yadav | Cybersecurity Student & Full-Stack Developer',
  description:
    'Portfolio of Gaurav Yadav. SIH 2025 Qualifier. Full-stack developer building production apps. Founder of Zocav digital agency.',
  authors: [{ name: 'Gaurav Yadav', url: 'https://gaurav.me' }],
  openGraph: {
    title: 'Gaurav Yadav | Cybersecurity & Full-Stack Builder',
    description: 'SIH 2025 Qualifier. Full-stack developer. Building Zocav.',
    url: 'https://gaurav.me',
    siteName: 'Gaurav Yadav Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaurav Yadav | Builder',
    description: 'SIH 2025 Qualifier. Full-stack developer. Building Zocav.',
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
