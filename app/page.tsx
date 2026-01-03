'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight, Copy, Check, Calendar, Twitter, FileText } from 'lucide-react';
import { projects } from '@/lib/projects';
import { useState } from 'react';

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`bg-[#050505] border border-white/10 rounded-3xl p-6 overflow-hidden relative group hover:border-white/20 transition-all duration-300 flex flex-col ${className}`}
  >
    {children}
  </motion.div>
);

// Solid dark pill with lighter text, matching the screenshot
const TechItem = ({ name }: { name: string }) => (
  <div className="px-3 py-1.5 rounded-lg bg-[#1a1a1a] text-xs text-gray-300 font-medium border border-white/5 hover:bg-[#2a2a2a] hover:border-white/10 transition-colors cursor-default">
    {name}
  </div>
);

// Large white icons on dark rounded squares
const SocialBtn = ({ icon: Icon, href, label }: { icon: any, href: string, label?: string }) => (
  <Link 
    href={href} 
    target="_blank" 
    className="flex items-center justify-center aspect-square rounded-2xl bg-[#0A0A0A] hover:bg-[#151515] transition-all group border border-white/5"
    aria-label={label}
  >
    <Icon className="w-10 h-10 text-gray-300 group-hover:text-white transition-colors" />
  </Link>
);

export default function Home() {
  const [copied, setCopied] = useState(false);
  const email = "contact@gaurav.me";
  const [activeProject, setActiveProject] = useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 pt-24 pb-32 max-w-[1400px] mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
        
        {/* Left Column - Tech Stack - 3 Cols */}
        <div className="md:col-span-3 flex flex-col h-full">
          <BentoCard className="h-full !p-8" delay={0.1}>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] text-white">
                TECH<br />STACK.
              </h2>
            </div>
            
            <div className="flex flex-col gap-8 overflow-y-auto pr-2 custom-scrollbar">
              <div>
                <h3 className="text-lg font-bold text-gray-200 mb-4 tracking-tight">FullStack:</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Go', 'TanStack Query', 'Node', 'Express.js', 'FastAPI', 'gRPC'].map(t => (
                    <TechItem key={t} name={t} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-200 mb-4 tracking-tight">AI/RAG:</h3>
                <div className="flex flex-wrap gap-2">
                  {['LangChain', 'RAG', 'MCPClient', 'Pinecone', 'AI Agents', 'Vector DBs'].map(t => (
                    <TechItem key={t} name={t} />
                  ))}
                </div>
              </div>

               <div>
                <h3 className="text-lg font-bold text-gray-200 mb-4 tracking-tight">Db & DevOps:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Cloudflare Workers', 'Docker', 'Kubernetes', 'Redis', 'Postgres', 'AWS', 'Kafka'].map(t => (
                    <TechItem key={t} name={t} />
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Middle Column - Profile & Projects - 6 Cols */}
        <div className="md:col-span-6 flex flex-col gap-6">
          {/* Profile Section */}
          <BentoCard className="!p-0 min-h-[250px]" delay={0.2}>
            <div className="relative p-8 z-10 flex flex-col justify-between h-full bg-[#111] bg-opacity-40 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                            {/* Placeholder for avatar */}
                            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-xl font-bold">GY</div>
                        </div>
                        <div>
                             <h1 className="text-2xl font-black tracking-tight text-white">GAURAV YADAV.</h1>
                             <p className="text-gray-400 text-sm">{email}</p>
                        </div>
                    </div>
                    <Link href="/resume.pdf" target="_blank" className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold">
                       CV <ArrowUpRight className="w-3 h-3" />
                    </Link>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-bold text-white mb-1">I build digital products.</h2>
                    <p className="text-gray-400 text-sm max-w-lg">
                        Hello, I'm Gaurav! First-year Cybersecurity student and Full-Stack Developer. 
                        Building Zocav Digital.
                    </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                    <div className="text-xs text-gray-500">
                        Currently building <span className="text-gray-300">EcoQuest</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                         <span className="text-green-500 text-xs font-bold uppercase tracking-wide">Available for work</span>
                    </div>
                </div>
            </div>
            {/* Subtle background texture */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] -z-0 pointer-events-none" />
          </BentoCard>

          {/* Featured Project - Slider Look */}
          <BentoCard className="flex-1 !p-6 flex flex-col justify-between bg-black" delay={0.3}>
             <div className="text-center mb-6">
                 <h2 className="text-3xl font-black tracking-tight text-white">PROJECTS</h2>
             </div>
             
             {/* Slider Area */}
             <div className="flex-1 relative rounded-2xl overflow-hidden bg-[#111] border border-white/5 group">
                 {/* Current Project Image & Info Overlay */}
                 <div className="absolute inset-0 bg-cover bg-center transition-all duration-500" style={{ backgroundImage: `url(${projects[activeProject]?.image || '/grid.svg'})` }}>
                     <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                 </div>
                 
                 <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                      <div className="text-center max-w-md">
                          <h3 className="text-2xl font-bold mb-2 text-white">{projects[activeProject]?.title}</h3>
                          <p className="text-gray-400 text-sm mb-6">{projects[activeProject]?.shortDesc}</p>
                          <Link href={`/projects/${projects[activeProject]?.slug}`} className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform inline-block">
                              View Project
                          </Link>
                      </div>
                 </div>
                 
                 {/* Navigation Dots */}
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                     {projects.slice(0, 5).map((_, idx) => (
                         <button 
                            key={idx}
                            onClick={() => setActiveProject(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${activeProject === idx ? 'bg-white w-6' : 'bg-gray-600 hover:bg-gray-400'}`}
                         />
                     ))}
                 </div>
             </div>
          </BentoCard>
        </div>

        {/* Right Column - Socials & Updates - 3 Cols */}
        <div className="md:col-span-3 flex flex-col gap-6 h-full">
           
           {/* Social Grid Header + Icons */}
           <div className="flex flex-col h-[300px]"> 
              <div className="flex justify-between items-start mb-4">
                  <h2 className="text-4xl font-black tracking-tighter leading-[0.9] text-white">
                    LIN<br/>KS.
                  </h2>
                  <div className="grid grid-cols-2 gap-3 w-fit">
                    <SocialBtn icon={Github} href="https://github.com/archduke1337" label="GitHub" />
                    <SocialBtn icon={Twitter} href="https://twitter.com" label="Twitter" />
                    <SocialBtn icon={Mail} href="mailto:contact@gaurav.me" label="Email" />
                    <SocialBtn icon={Linkedin} href="https://linkedin.com/in/gaurav-yadav" label="LinkedIn" />
                  </div>
              </div>
           </div>

           {/* Recent Works List - Moved up to fill space */}
           <BentoCard className="flex-1 !p-6" delay={0.5}>
              <div className="mb-6 flex justify-between items-start">
                <div className="flex flex-col">
                     <h2 className="text-3xl font-black tracking-tighter leading-none text-white mb-1">RECENT</h2>
                     <h2 className="text-3xl font-black tracking-tighter leading-none text-white text-gray-500">WORKS.</h2>
                </div>
                <Link href="/projects" className="px-3 py-1 rounded bg-[#222] text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">More ↗</Link>
              </div>
              
              <div className="flex flex-col gap-4">
                 {projects.slice(0, 3).map((p) => (
                   <Link key={p.id} href={`/projects/${p.slug}`} className="group block">
                      <div className="flex justify-between items-baseline mb-1">
                          <h4 className="font-bold text-gray-200 group-hover:text-white transition-colors">{p.title}</h4>
                          <span className="text-xs text-gray-600 font-mono">June-{p.year}</span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-1 group-hover:text-gray-400 transition-colors">
                          {p.slug}.gaurav.me
                      </p>
                   </Link>
                 ))}
              </div>
           </BentoCard>
           
           {/* CTA */}
           <BentoCard className="!p-0 overflow-hidden" delay={0.6}>
              <Link href="/contact" className="w-full h-full flex items-center justify-center gap-3 p-6 bg-[#111] hover:bg-[#1a1a1a] transition-colors group">
                  <Calendar className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  <span className="font-bold text-gray-300 group-hover:text-white">Schedule a Call</span>
              </Link>
           </BentoCard>

        </div>
      </div>
    </main>
  );
}
