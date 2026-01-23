'use client';

import { Github, Linkedin, Mail, Code, User, ArrowRight, GraduationCap, Briefcase, Mail as MailIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { containerVariants, itemVariants } from "@/types/animations";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/config/site";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-apple-gradient text-zinc-900 dark:text-zinc-50 selection:bg-blue-500/30 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        
        {/* HERO SECTION */}
        <section id="hero" className="mb-16 sm:mb-24 lg:mb-32">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 pt-8 sm:pt-12 lg:pt-16">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.85]"
            >
              Gaurav<br/>Yadav
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-500 dark:text-zinc-400 font-medium max-w-xs sm:max-w-md lg:max-w-2xl leading-relaxed"
            >
              Architecting secure, beautiful digital experiences.
            </motion.p>
            
            {/* Social Links - Floating Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center flex-wrap gap-2 sm:gap-3 lg:gap-4 pt-4 sm:pt-6 lg:pt-8"
            >
              {SOCIAL_LINKS.map((social, idx) => {
                const IconMap = {
                  GitHub: Github,
                  LinkedIn: Linkedin,
                  Email: MailIcon,
                };
                const Icon = IconMap[social.name as keyof typeof IconMap];
                const isEmail = social.name === 'Email';
                
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={!isEmail ? "_blank" : undefined}
                    rel={!isEmail ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="apple-btn-secondary rounded-full px-4 sm:px-5 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base"
                    aria-label={social.label}
                  >
                    <Icon size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    {social.name}
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID NAVIGATION */}
        <section className="mb-16 sm:mb-24 lg:mb-32">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          >
            {/* Featured Projects Card - Large */}
            <motion.div variants={itemVariants} className="col-span-1 sm:col-span-2 lg:col-span-2 sm:row-span-2">
              <Link href="/projects" className="block h-full apple-card-elevated group relative overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] flex flex-col justify-between hover:scale-[1.01] transition-transform duration-500">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 transition-colors"></div>
                 <div className="relative z-10">
                   <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-xl shadow-blue-600/20">
                     <Code size={24} className="sm:w-7 sm:h-7" />
                   </div>
                   <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-2">Projects</h3>
                   <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base lg:text-xl max-w-sm">Explore my latest work in full-stack dev and cybersecurity.</p>
                 </div>
                 <div className="relative z-10 mt-4 sm:mt-6 lg:mt-8 self-start">
                   <span className="apple-btn-primary rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm">View Work</span>
                 </div>
                 {/* Decorative Circle */}
                 <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              </Link>
            </motion.div>

            {/* About Me Card */}
            <motion.div variants={itemVariants} className="h-full">
              <Link href="/about" className="block h-full apple-card group relative overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                       <User size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase opacity-50 tracking-wider">Profile</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4 mb-1 sm:mb-2">About Me</h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      BCA Cybersecurity Student.<br/>
                      Full Stack Web Developer.<br/>
                      Passionate about secure code.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Education Card */}
             <motion.div variants={itemVariants} className="h-full">
               <Link href="/education" className="block h-full apple-card group relative overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                 <div className="absolute inset-0 bg-gradient-to-tr from-rose-50 to-transparent dark:from-rose-900/10 opacity-50"></div>
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-500/30">
                       <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase opacity-50 tracking-wider">Studies</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4 mb-1 sm:mb-2">Education</h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      Ajeenkya DY Patil University.<br/>
                      Specializing in Network Security.<br/>
                      <span className="font-semibold text-rose-500 text-[10px] sm:text-xs">Class of 2028</span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

             {/* Experience Card */}
             <motion.div variants={itemVariants} className="h-full">
               <Link href="/experience" className="block h-full apple-card group relative overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                       <Briefcase size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase opacity-50 tracking-wider">Work</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4 mb-1 sm:mb-2">Experience</h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      Freelance Developer.<br/>
                      Open Source Contributor.<br/>
                      Building scalable web apps.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

             {/* Contact Card */}
             <motion.div variants={itemVariants} className="col-span-1 sm:col-span-2 lg:col-span-1 h-full">
               <Link href="/contact" className="block h-full apple-card group relative overflow-hidden hover:scale-[1.02] transition-transform duration-500 bg-zinc-900 dark:bg-white text-white dark:text-black min-h-[180px] sm:min-h-[200px]">
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                   <div className="p-3 sm:p-4 bg-white/10 dark:bg-black/10 rounded-full mb-3 sm:mb-4 group-hover:bg-white/20 transition-colors">
                     <Mail size={24} className="sm:w-8 sm:h-8" />
                   </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Get in Touch</h3>
                  <p className="text-xs sm:text-sm opacity-60 mt-1 sm:mt-2 mb-3 sm:mb-4">Have an idea? Let&apos;s build it.</p>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-white/30 dark:border-black/30 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all">
                    Available for Hire
                  </span>
                </div>
              </Link>
            </motion.div>

          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 sm:pt-12 lg:pt-16 border-t border-zinc-200 dark:border-zinc-800 text-center animate-fade-in">
          <p className="text-xs sm:text-sm text-zinc-400 font-medium">
            © {new Date().getFullYear()} Gaurav Yadav. Crafted with care.
          </p>
        </footer>
      </div>
    </main>
  );
}
