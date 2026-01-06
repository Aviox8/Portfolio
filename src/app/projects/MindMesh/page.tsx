'use client';

import { ArrowLeft, Github, ExternalLink, Calendar, Users, FileText, Box } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MindMeshProject() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const featureVariants = {
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

            {/* Project Hero Image Placeholder */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800 group"
            >
                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <Box size={64} className="text-purple-500 opacity-50" />
                </div>
            </motion.div>

            <div className="prose prose-zinc dark:prose-invert max-w-none mb-12">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                MindMesh Club is the official digital platform for our college's innovation cell. It serves as a centralized hub for organizing events, sharing knowledge through blogs, and fostering a community of thinkers and creators. 
              </p>
              <div className="mt-8 p-6 bg-purple-50 dark:bg-purple-900/10 rounded-2xl border border-purple-100 dark:border-purple-900/20">
                <h3 className="text-purple-900 dark:text-purple-300 font-bold mb-2 flex items-center gap-2">
                  <Users size={20} />
                  Collaboration Story
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                  "This project holds a special place in my journey as it was built in close collaboration with my close friend and peer, <strong>Sahil Mane</strong>. We both pursued our B.Tech together and shared the same passion for engineering impactful solutions. Working with Sahil taught me the importance of peer-review, collaborative architecture, and the power of shared vision. We learned, failed, and succeeded together, making MindMesh more than just a code repository—it's a testament to our engineering friendship."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Project Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  variants={featureVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50"
                >
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                    <Calendar size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Event Ecosystem</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Integrated registration system with automated PDF ticket generation and email delivery via Resend.</p>
                </motion.div>
                <motion.div 
                  variants={featureVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50"
                >
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    <FileText size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Markdown Blog</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">A high-performance blog engine supporting GitHub Flavored Markdown (GFM) with admin moderation.</p>
                </motion.div>
                <motion.div 
                  variants={featureVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50"
                >
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    <Users size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Appwrite Integration</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Leveraged Appwrite for secure Auth, Database, and Storage, ensuring a robust serverless architecture.</p>
                </motion.div>
                <motion.div 
                  variants={featureVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50"
                >
                  <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4">
                    <Box size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Interactive 3D UI</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Enhanced user engagement with Three.js and GSAP for fluid 3D elements and smooth transitions.</p>
                </motion.div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-zinc-100 dark:border-zinc-800">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {["Next.js 14", "TypeScript", "Appwrite", "Three.js", "GSAP", "Tailwind CSS", "Resend", "Lucide", "Framer Motion"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 text-sm font-medium rounded-xl border border-zinc-200 dark:border-zinc-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
