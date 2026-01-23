import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";
import { ThemeProvider } from "@/components/ThemeProvider";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Gaurav Yadav - Full Stack Developer & Cybersecurity Enthusiast",
  description: "Architecting secure, beautiful digital experiences. Full-stack web developer specializing in cybersecurity and scalable web applications.",
  keywords: "full-stack developer, cybersecurity, web development, react, next.js, javascript, security",
  metadataBase: new URL("https://gauravyadav.dev"),
  openGraph: {
    title: "Gaurav Yadav - Developer & Security Specialist",
    description: "Building secure digital experiences with modern web technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Yadav - Full Stack Developer",
    description: "Architecting secure, beautiful digital experiences",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark'); } } catch (e) {}`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LenisProvider>
            <Navbar />
            {children}
          </LenisProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
