'use client';

import { Book, Code, Globe, Terminal, Award, Heart, Cpu, Shield } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function About() {
  const skills = [
    { category: "Languages", items: ["TypeScript", "Python", "C++", "Java", "SQL"] },
    { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Supabase"] },
    { category: "Cybersecurity", items: ["Network Security", "Ethical Hacking", "Cryptography", "Linux"] },
  ];

  const journeyContent = `
My journey into technology started with a curiosity for how things work under the hood. Currently pursuing my **BCA in Cybersecurity** at **ADYPU, Pune**, I am deeply immersed in the world of digital security.

However, my passion isn't limited to just breaking things (ethically, of course). I love **building** them too. I've spent countless hours mastering modern web technologies like **Next.js** and **Tailwind CSS** to create seamless digital experiences.
`;

  const interestsContent = `
When I'm not coding or studying security protocols, you can find me participating in **Heptathlon** events, solving **CTF challenges**, or exploring the latest in tech innovation. I believe in continuous learning and pushing my limits, both mentally and physically.
`;

  // Custom Markdown Components for consistent styling
  const MarkdownComponents = {
    p: (props: any) => (
      <p className="text-apple-600 dark:text-apple-300 leading-relaxed mb-4 last:mb-0">
        {props.children}
      </p>
    ),
    strong: (props: any) => (
      <strong className="font-semibold text-apple-900 dark:text-apple-50">
        {props.children}
      </strong>
    ),
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-white via-apple-50 to-white dark:from-apple-950 dark:via-apple-900 dark:to-apple-950 text-apple-900 dark:text-apple-50 selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-apple-900 dark:selection:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* HEADER SECTION */}
        <section className="animate-fade-in flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="space-y-6 flex-1">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-apple-900 via-blue-600 to-apple-900 dark:from-white dark:via-blue-400 dark:to-white">
              About Me
            </h1>
            <div className="text-xl text-apple-600 dark:text-apple-300 leading-relaxed max-w-2xl">
              <ReactMarkdown components={MarkdownComponents}>
                I'm a BCA Cybersecurity student and a passionate full-stack developer. I bridge the gap between secure infrastructure and beautiful, user-centric web applications.
              </ReactMarkdown>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-[30rem] shrink-0">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>
             <Image
              src="/About/pfp.png"
              alt="Gaurav Yadav"
              fill
              className="object-cover object-top rounded-2xl shadow-2xl hover:scale-[1.02] transition-all duration-500"
              priority
             />
          </div>
        </section>

        {/* BIO / STORY SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start animate-slide-up animate-delay-200">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                <Terminal size={24} />
              </div>
              <h2 className="text-2xl font-semibold">My Journey</h2>
            </div>
            
            {/* Markdown Rendered Content */}
            <ReactMarkdown components={MarkdownComponents}>
              {journeyContent}
            </ReactMarkdown>
          </div>

          <div className="apple-card-elevated p-8 space-y-6 transform hover:rotate-1 transition-all duration-500">
             <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg text-amber-600 dark:text-amber-300">
                <Book size={24} />
              </div>
              <h2 className="text-xl font-semibold">Education</h2>
            </div>
            
            <div className="space-y-4">
              <div className="relative pl-6 border-l-2 border-apple-200 dark:border-apple-700">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-apple-900"></div>
                <h3 className="font-semibold text-lg">BCA Cybersecurity</h3>
                <p className="text-apple-500 dark:text-apple-400 text-sm">Ajeenkya DY Patil University, Pune</p>
                <p className="text-apple-400 dark:text-apple-500 text-xs mt-1">2025 – 2028</p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-apple-200 dark:border-apple-700">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-apple-900"></div>
                <h3 className="font-semibold text-lg">Industry Training</h3>
                <p className="text-apple-500 dark:text-apple-400 text-sm">SeamEdu</p>
                <p className="text-apple-400 dark:text-apple-500 text-xs mt-1">Specialized Industry Curriculum</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="animate-slide-up animate-delay-300">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-300">
              <Cpu size={24} />
            </div>
            <h2 className="text-2xl font-semibold">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <div 
                key={skillGroup.category} 
                className="apple-card p-6 space-y-4 hover:-translate-y-2 transition-transform duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="font-bold text-apple-900 dark:text-apple-100 border-b border-apple-100 dark:border-apple-800 pb-2">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-apple-600 dark:text-apple-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CURIOSITY / INTERESTS */}
        <section className="animate-slide-up animate-delay-400">
           <div className="apple-card-elevated p-8 sm:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400 to-rose-400 opacity-10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-rose-100 dark:from-orange-900 dark:to-rose-900 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-300 mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                  <Heart size={32} fill="currentColor" />
                </div>
                
                <h2 className="text-3xl font-bold text-apple-900 dark:text-white">Beyond the Code</h2>
                <div className="text-lg text-apple-600 dark:text-apple-300 leading-relaxed">
                  <ReactMarkdown components={MarkdownComponents}>
                    {interestsContent}
                  </ReactMarkdown>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <Link href="/projects" className="apple-btn-primary">
                    View My Projects
                  </Link>
                  <Link href="/contact" className="apple-btn-secondary">
                    Get in Touch
                  </Link>
                </div>
              </div>
           </div>
        </section>

      </div>
    </main>
  );
}
