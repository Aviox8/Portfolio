'use client';

import { Github, Linkedin, Mail, Code, User } from "lucide-react";
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
    <main className="min-h-screen bg-gradient-to-br from-white via-apple-50 to-white dark:from-apple-950 dark:via-apple-900 dark:to-apple-950 text-apple-900 dark:text-apple-50 selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-apple-900 dark:selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        
        {/* HERO SECTION */}
        <section id="hero" className={`mb-32 scroll-mt-24 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="space-y-8">
            {/* Main Title with Gradient */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-apple-900 via-blue-600 to-apple-900 dark:from-white dark:via-blue-400 dark:to-white leading-tight">
                Gaurav Yadav
              </h1>
              <p className="text-xl sm:text-2xl text-apple-600 dark:text-apple-300 font-medium max-w-3xl leading-relaxed animate-slide-up animate-delay-100">
                Building secure, performant web experiences with a passion for clean design.
              </p>
            </div>
            
            {/* Social Links Grid */}
            <div className="flex flex-wrap gap-3 pt-6 animate-slide-up animate-delay-200">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="apple-btn-secondary group hover:scale-110 hover:-translate-y-1 transition-smooth shadow-elevation-1"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <Icon size={18} className="group-hover:rotate-12 group-hover:scale-125 transition-smooth" />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="mb-32 scroll-mt-24 animate-slide-up animate-delay-300">
          <div className="space-y-8">
            <h2 className="section-title">About</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Education",
                  desc: "BCA Cybersecurity student at ADYPU, Pune (2025–2028), receiving industry-aligned training through SeamEdu.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Focus",
                  desc: "Cybersecurity fundamentals and modern web development, building secure and performant applications.",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  title: "Involvement",
                  desc: "Hackathons & CTF challenges, continuously expanding skillset and tackling real-world problems.",
                  color: "from-orange-500 to-orange-600"
                },
                {
                  title: "Projects",
                  desc: "Growing portfolio of web projects, documenting journey through blogging and open-source contributions.",
                  color: "from-green-500 to-green-600"
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="apple-card-elevated group hover:shadow-elevation-3 transition-smooth relative overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Gradient background accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex items-start gap-3 mb-4">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 group-hover:scale-150 transition-smooth`} />
                    <h3 className="text-lg font-bold text-apple-900 dark:text-apple-50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 transition-smooth">{item.title}</h3>
                  </div>
                  <p className="relative z-10 text-apple-600 dark:text-apple-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK NAVIGATION */}
        <section className="mb-32 animate-slide-up animate-delay-400">
          <h2 className="section-title mb-8">Explore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Projects", href: "/projects", icon: Code, color: "bg-green-100", iconColor: "text-green-600", gradient: "from-green-500 to-green-600" },
              { title: "Experience", href: "/experience", icon: User, color: "bg-amber-100", iconColor: "text-amber-600", gradient: "from-amber-500 to-amber-600" },
              { title: "Contact", href: "/contact", icon: Mail, color: "bg-rose-100", iconColor: "text-rose-600", gradient: "from-rose-500 to-rose-600" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="apple-card-elevated group flex flex-col gap-4 hover:shadow-elevation-3 hover:-translate-y-1 transition-all relative overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Gradient accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className={`relative z-10 p-4 rounded-xl w-fit ${item.color} group-hover:scale-110 group-hover:shadow-lg transition-smooth`}>
                    <Icon size={24} className={`${item.iconColor} group-hover:scale-125 transition-smooth`} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-apple-900 dark:text-apple-50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 transition-smooth">{item.title}</h3>
                    <p className="text-sm text-apple-500 dark:text-apple-400 mt-1 group-hover:text-apple-600 dark:group-hover:text-apple-300 transition-smooth">Explore more →</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-16 border-t border-apple-200 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-sm text-apple-500 font-medium">
            © {new Date().getFullYear()} Gaurav Yadav. Crafted with care.
          </p>
        </footer>
      </div>
    </main>
  );
}
