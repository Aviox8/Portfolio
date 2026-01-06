'use client';

import { ArrowLeft, Github, ExternalLink, Calendar, Users, FileText, Box } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MindMeshProject() {
  const containerVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const featureVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <main className="min-h-screen bg-apple-gradient text-zinc-900 dark:text-white font-sans selection:bg-purple-100 dark:selection:bg-purple-900 selection:text-purple-900 dark:selection:text-white transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Projects</span>
          </Link>
        </motion.div>

        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden transition-colors duration-500"
        >
          <div className="p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
              <div>
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-zinc-900 dark:text-white mb-2"
                >
                  MindMesh Club
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-zinc-500 dark:text-zinc-400 font-medium"
                >
                  Official Hub for Innovation & Collaboration
                </motion.p>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://mindmeshclub.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors shadow-sm font-semibold text-sm"
                >
                  <ExternalLink size={18} />
                  <span>Live Site</span>
                </a>
                <a 
                  href="https://github.com/archduke1337/mindmesh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Project Hero Image */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800 group"
            >
                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                <Image 
                  src="/Project/mindmesh/img.png" 
                  alt="MindMesh Club Interface" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
            </motion.div>

            <div className="prose prose-zinc dark:prose-invert max-w-none mb-12">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                MindMesh Club is the flagship digital platform for ADYPU's Innovation Cell. It's more than just a website; it's a living ecosystem designed to bridge the gap between abstract ideas and tangible projects. Built from the ground up to support a growing community of student innovators, the platform handles everything from lightning-fast event registrations to knowledge sharing through its high-performance markdown engine.
              </p>
              
              <div className="my-12 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-3xl border border-purple-100 dark:border-purple-900/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Users size={120} className="text-purple-600" />
                </div>
                <h3 className="text-purple-900 dark:text-purple-300 font-bold text-xl mb-4 flex items-center gap-2 relative z-10">
                  <Users size={24} />
                  The Collaboration Story
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed italic text-lg relative z-10">
                  &quot;This project was a defining chapter in my college journey, co-architected with my close friend and peer, <strong>Sahil Mane</strong>. As peers in the same year, we treated MindMesh as our developmental playground. We didn't just write code; we debated architecture, optimized database schemas late into the night, and learned the nuances of full-stack collaboration. Working with Sahil taught me that the best software is built when there's trust, shared ambition, and a healthy dose of peer-to-peer collaboration.&quot;
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-8 text-center">Engineering Highlights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    variants={featureVariants}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                      <Calendar size={24} />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2 text-lg">Smart Event Ticketing</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">A seamless registration pipeline that generates unique QR-coded PDF tickets using jspdf and html2canvas, delivered instantly via Resend SMTP.</p>
                  </motion.div>
                  <motion.div 
                    variants={featureVariants}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                      <FileText size={24} />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2 text-lg">GFM Blog Engine</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Supports GitHub Flavored Markdown with syntax highlighting and live admin previews, allowing club members to share tech insights effortlessly.</p>
                  </motion.div>
                  <motion.div 
                    variants={featureVariants}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                      <Box size={24} />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2 text-lg">Serverless Architecture</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Utilized Appwrite's robust suite for Auth, Realtime Databases, and Storage, enabling a scalable backend without the overhead of traditional servers.</p>
                  </motion.div>
                  <motion.div 
                    variants={featureVariants}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/40 rounded-xl flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4">
                      <Box size={24} />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2 text-lg">Immersive 3D Exp</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Integrated Three.js and GSAP for interactive 3D mesh backgrounds and smooth layout transitions that reflect the &quot;MindMesh&quot; identity.</p>
                  </motion.div>
                </div>
              </div>

              <div className="pt-8">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {["Next.js 14", "TypeScript", "Appwrite", "Three.js", "GSAP", "Tailwind CSS", "Resend", "Lucide", "Framer Motion", "Zod"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 text-sm font-medium rounded-xl border border-zinc-200 dark:border-zinc-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
