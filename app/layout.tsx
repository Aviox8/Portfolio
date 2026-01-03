import type { Metadata } from 'next';
import './globals.css';
import { Dock } from '@/components/Dock';
import LightningBackground from '@/components/LightningBackground';

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
          <LightningBackground />
          <div className="fixed inset-0 -z-20 bg-[#000000]" /> {/* Solid pitch black base */}
          
          {/* Main content */}
          {children}
          
          <Dock />
      </body>
    </html>
  );
}
