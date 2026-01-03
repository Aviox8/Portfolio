'use client';

import { Github, Linkedin, Mail, Code, User, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/archduke1337",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/gurvv/",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:gauravramyadav@gmail.com",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-apple-900 selection:bg-blue-100 selection:text-apple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28">
        
        {/* HERO SECTION */}
        <section id="hero" className={`mb-24 scroll-mt-24 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-apple-900">
              Gaurav Yadav
            </h1>
            <p className="text-lg sm:text-xl text-apple-600 font-medium max-w-2xl leading-relaxed animate-slide-up animate-delay-100">
              BCA Cybersecurity Student @ ADYPU. Building secure, performant web experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4 animate-slide-up animate-delay-200">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="apple-btn-secondary group"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <Icon size={18} />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="mb-24 scroll-mt-24 animate-slide-up animate-delay-300">
          <h2 className="section-title mb-8 text-apple-900">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="apple-card">
              <h3 className="text-lg font-semibold text-apple-900 mb-3">Education</h3>
              <p className="text-apple-600 leading-relaxed">
                BCA Cybersecurity student at Ajeenkya DY Patil University (ADYPU), Pune (2025–2028), receiving industry-aligned training through SeamEdu.
              </p>
            </div>

            <div className="apple-card animate-slide-up animate-delay-100">
              <h3 className="text-lg font-semibold text-apple-900 mb-3">Focus</h3>
              <p className="text-apple-600 leading-relaxed">
                My academic focus lies at the intersection of cybersecurity fundamentals and modern web development, building secure and performant applications.
              </p>
            </div>

            <div className="apple-card animate-slide-up animate-delay-200">
              <h3 className="text-lg font-semibold text-apple-900 mb-3">Involvement</h3>
              <p className="text-apple-600 leading-relaxed">
                Actively participate in Hackathons & CTF challenges, continuously expanding my skillset and tackling real-world problems.
              </p>
            </div>

            <div className="apple-card animate-slide-up animate-delay-300">
              <h3 className="text-lg font-semibold text-apple-900 mb-3">Projects</h3>
              <p className="text-apple-600 leading-relaxed">
                Maintain a growing portfolio of web projects, documenting my journey through blogging and open-source contributions.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK NAVIGATION */}
        <section className="mb-24 animate-slide-up animate-delay-400">
          <h2 className="section-title mb-8">Explore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Projects", href: "/projects", icon: Code },
              { title: "Experience", href: "/experience", icon: User },
              { title: "Contact", href: "/contact", icon: Mail },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="apple-card-hover group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <span className="font-medium text-apple-900">{item.title}</span>
                  </div>
                  <ExternalLink size={16} className="text-apple-400 group-hover:text-apple-600 transition-colors" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-apple-200 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-sm text-apple-600 font-medium">
            © {new Date().getFullYear()} Gaurav Yadav. Built with Next.js & Tailwind CSS.
          </p>
        </footer>
      </div>
    </main>
  );
}
