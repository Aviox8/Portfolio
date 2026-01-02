'use client';

import { getProjectBySlug } from '@/lib/projects';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { use } from 'react';

export default function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-32 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 mb-12"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">{project.title}</h1>
              <p className="text-xl text-gray-400 font-medium">{project.subtitle}</p>
            </div>
            <div className="flex gap-4">
               {project.links.github && (
                 <Link href={project.links.github} target="_blank" className="p-3 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors text-gray-400 hover:text-white">
                   <Github className="w-6 h-6" />
                 </Link>
               )}
               {project.links.live && (
                 <Link href={project.links.live} target="_blank" className="p-3 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors text-gray-400 hover:text-white">
                   <ExternalLink className="w-6 h-6" />
                 </Link>
               )}
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{project.year}</span>
            <span>•</span>
            <span>Case Study</span>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Visual Placeholder */}
          <div className="aspect-video bg-white/5 rounded-[2.5rem] flex items-center justify-center text-white/5 font-black text-8xl italic select-none border border-white/5">
            {project.title.split(' ')[0]}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            <div className="md:col-span-2 space-y-12">
              {/* Description */}
              <section>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Overview</h2>
                <p className="text-xl text-gray-400 leading-relaxed">{project.description}</p>
              </section>

              {/* Challenges */}
              <section>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Challenges</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex gap-4 text-gray-400">
                      <span className="text-white/20 mt-1.5">•</span>
                      <span className="text-lg leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-12">
              {/* Technologies */}
              <section>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Impact */}
              <section>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Impact</h2>
                <div className="p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl">
                  <p className="text-gray-400 leading-relaxed">{project.impact}</p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-white/5 text-center"
        >
          <p className="text-gray-500 mb-8">Ready to see more?</p>
          <Link href="/projects" className="inline-block px-12 py-4 rounded-2xl bg-white text-black font-bold hover:bg-gray-200 transition-colors">
            All Projects
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
