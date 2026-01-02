'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Briefcase, GraduationCap, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects';

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 overflow-hidden relative group hover:border-white/10 transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 auto-rows-[180px]">
        {/* Intro Card */}
        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between" delay={0.1}>
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold">
              GY
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Gaurav Yadav</h1>
              <p className="text-gray-400 mt-2 leading-relaxed">
                First-year Cybersecurity student at Seamedu × ADYPU. SIH 2025 Qualifier. 
                Full-stack developer building production-ready apps.
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> SIH 2025 Qualifier
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 flex items-center gap-1.5">
              <Briefcase className="w-3 h-3" /> Founder @ Zocav
            </span>
          </div>
        </BentoCard>

        {/* Status Card */}
        <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-between" delay={0.2}>
          <div className="flex justify-between items-start">
            <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Status</span>
          </div>
          <div>
            <p className="text-lg font-semibold">Available</p>
            <p className="text-sm text-gray-500">for new projects</p>
          </div>
        </BentoCard>

        {/* Socials Card */}
        <BentoCard className="md:col-span-1 md:row-span-1 grid grid-cols-2 gap-2" delay={0.3}>
          <Link href="https://github.com/archduke1337" target="_blank" className="flex items-center justify-center bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://linkedin.com/in/gaurav-yadav" target="_blank" className="flex items-center justify-center bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="mailto:contact@gaurav.me" className="flex items-center justify-center bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
            <Mail className="w-6 h-6" />
          </Link>
          <Link href="/contact" className="flex items-center justify-center bg-white/5 rounded-2xl hover:bg-white/10 transition-colors text-xs font-bold uppercase">
            CV
          </Link>
        </BentoCard>

        {/* Location Card */}
        <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-between" delay={0.4}>
          <div className="flex justify-between items-start">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
              <MapPin className="w-5 h-5" />
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold italic">Pune, IN</p>
            <p className="text-sm text-gray-500">Working remotely</p>
          </div>
        </BentoCard>

        {/* Stack Card */}
        <BentoCard className="md:col-span-2 md:row-span-1 flex flex-col justify-between" delay={0.5}>
          <div className="flex justify-between items-center mb-2">
             <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Stack</span>
             <Code2 className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'TypeScript', 'React', 'Node.js', 'Tailwind', 'PostgreSQL', 'Python'].map(tech => (
              <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* Featured Project Small */}
        <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-between group" delay={0.6}>
           <div className="flex justify-between items-start">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Latest Project</p>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
          <div>
            <p className="text-lg font-semibold">{featuredProjects[0].title}</p>
            <p className="text-sm text-gray-500 line-clamp-1">{featuredProjects[0].shortDesc}</p>
          </div>
        </BentoCard>

        {/* Education/Exp row */}
        <BentoCard className="md:col-span-2 md:row-span-1 flex items-center gap-6" delay={0.7}>
           <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <GraduationCap className="w-8 h-8 text-gray-400" />
           </div>
           <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Education</p>
              <p className="text-lg font-bold">B.Sc. Cybersecurity</p>
              <p className="text-sm text-gray-400">Seamedu × ADYPU • 2024-2027</p>
           </div>
        </BentoCard>

         <BentoCard className="md:col-span-2 md:row-span-1 flex items-center gap-6" delay={0.8}>
           <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Briefcase className="w-8 h-8 text-gray-400" />
           </div>
           <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Work</p>
              <p className="text-lg font-bold">Full-stack Developer</p>
              <p className="text-sm text-gray-400">Founder @ Zocav Digital</p>
           </div>
        </BentoCard>
      </div>

      {/* Projects Section */}
      <section className="mt-20">
        <div className="flex justify-between items-end mb-8 px-2">
          <div>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-gray-500 mt-2">Selection of my favorite works</p>
          </div>
          <Link href="/projects" className="text-sm font-medium hover:underline flex items-center gap-1 group">
            All projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.slice(0, 4).map((project, i) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#0A0A0A] border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 transition-colors"
              >
                <div className="aspect-[16/9] bg-white/5 relative overflow-hidden">
                  {/* In a real app, use next/image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-6xl italic">
                    {project.title.split(' ')[0]}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:translate-x-1 transition-transform">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
