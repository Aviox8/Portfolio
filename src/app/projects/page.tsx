'use client';

import { Code, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { containerVariants, itemVariants } from "@/types/animations";

export default function ProjectsPage() {
  const projects = [
    {
      name: "MindMesh Club",
      description: "A collaborative platform for the MindMesh community, featuring event management with PDF ticketing, a markdown-powered blog, and interactive 3D elements.",
      tech: ["Next.js 14", "Appwrite", "Three.js", "GSAP", "Tailwind CSS", "Resend"],
      link: "https://mindmeshclub.vercel.app",
      slug: "/projects/mindmesh",
      color: "from-purple-500/20 to-violet-500/20",
      iconColor: "bg-purple-500",
      accent: "text-purple-600 dark:text-purple-400"
    },
    {
      name: "SeekEngine",
      description: "Open-source search engine powered by Google Custom Search API with theme-aware design and playful teleport discovery feature.",
      tech: ["Next.js", "React 18", "Google Search API", "Tailwind CSS", "Vercel"],
      link: "https://github.com/Aviox8/SeekEngine",
      slug: "/projects/seekengine",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "bg-green-500",
      accent: "text-green-600 dark:text-green-400"
    },
    
  ];

  return (
    <main className="min-h-screen bg-apple-gradient text-zinc-900 dark:text-zinc-50 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <section id="projects">
          {/* Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Code size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Projects</h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed"
            >
              A collection of digital craftsmanship, focused on user experience and robust architecture.
            </motion.p>
          </div>
          
          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6"
          >
            {projects.map((project, idx) => (
              <motion.div 
                key={project.name} 
                variants={itemVariants}
                className={`apple-card group relative overflow-hidden flex flex-col justify-between h-full bg-gradient-to-br ${project.color}`}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${project.iconColor} flex items-center justify-center text-white shadow-lg`}>
                       <Code size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <a href={project.link} target="_blank" className="p-2 bg-white/50 dark:bg-black/20 rounded-full hover:bg-white dark:hover:bg-black/40 transition-colors">
                      <ExternalLink size={16} className="sm:w-5 sm:h-5 text-zinc-700 dark:text-zinc-300" />
                    </a>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/60 dark:bg-black/20 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-3 sm:pt-4 border-t border-black/5 dark:border-white/5">
                   <Link href={project.slug} className="flex items-center gap-2 font-semibold text-sm sm:text-base lg:text-lg hover:gap-3 transition-all">
                     View Case Study <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                   </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}
