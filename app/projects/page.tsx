'use client';

import { projects } from '@/lib/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of production-ready systems, experiments, and open-source tools.
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/10 transition-colors"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Visual side */}
                <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-8xl italic select-none">
                    {project.title.split(' ')[0]}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent" />
                </div>
                
                {/* Content side */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{project.year} • {project.subtitle}</div>
                      <h2 className="text-3xl font-bold group-hover:translate-x-1 transition-transform">{project.title}</h2>
                    </div>
                    <div className="flex gap-3">
                       {project.links.github && (
                         <Link href={project.links.github} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                           <Github className="w-5 h-5" />
                         </Link>
                       )}
                       {project.links.live && (
                         <Link href={project.links.live} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                           <ExternalLink className="w-5 h-5" />
                         </Link>
                       )}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-500">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-white font-semibold group/btn">
                    Case Study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact / Stats section - Simplified */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-[#0A0A0A] border border-white/5 rounded-3xl p-12 text-center"
        >
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { metric: '15+', label: 'Projects Completed' },
              { metric: '500+', label: 'Happy Users' },
              { metric: '100k+', label: 'Lines of Code' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold mb-2">{item.metric}</div>
                <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
