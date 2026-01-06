'use client';

import { Github, Linkedin, Mail, Code, User, ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <main className="min-h-screen bg-apple-gradient text-zinc-900 dark:text-zinc-50 selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        
        {/* HERO SECTION */}
        <section id="hero" className="mb-32">
          <div className="flex flex-col items-center text-center space-y-8 pt-16">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.9]"
            >
              Gaurav<br/>Yadav
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl sm:text-3xl text-zinc-500 dark:text-zinc-400 font-medium max-w-2xl leading-snug"
            >
              Architecting secure, beautiful digital experiences.
            </motion.p>
            
            {/* Social Links - Floating Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center flex-wrap gap-4 pt-8"
            >
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="apple-btn-secondary rounded-full px-8 py-4 text-lg"
                  >
                    <Icon size={24} />
                    {social.name}
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID NAVIGATION */}
        <section className="mb-32">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Featured Projects Card - Large */}
            <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
              <Link href="/projects" className="block h-full apple-card-elevated group relative overflow-hidden min-h-[400px] flex flex-col justify-between hover:scale-[1.01] transition-transform duration-500">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 transition-colors"></div>
                 <div className="relative z-10 p-2">
                   <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-600/20">
                     <Code size={28} />
                   </div>
                   <h3 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">Projects</h3>
                   <p className="text-zinc-500 dark:text-zinc-400 text-xl max-w-sm">Explore my latest work in full-stack dev and cybersecurity.</p>
                 </div>
                 <div className="relative z-10 mt-8 self-end">
                   <span className="apple-btn-primary rounded-full px-6 py-2 text-sm">View Work</span>
                 </div>
                 {/* Decorative Circle */}
                 <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              </Link>
            </motion.div>

            {/* About Me Card */}
            <motion.div variants={itemVariants} className="h-full">
              <Link href="/about" className="block h-full apple-card group relative overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[220px]">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                       <User size={24} />
                    </div>
                    <span className="text-xs font-semibold uppercase opacity-50 tracking-wider">Profile</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mt-4 mb-2">About Me</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
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
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[220px]">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-500/30">
                       <GraduationCap size={24} />
                    </div>
                    <span className="text-xs font-semibold uppercase opacity-50 tracking-wider">Studies</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mt-4 mb-2">Education</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Ajeenkya DY Patil University.<br/>
                      specializing in Network Security.<br/>
                      <span className="font-semibold text-rose-500 text-xs">Class of 2028</span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

             {/* Experience Card */}
             <motion.div variants={itemVariants} className="h-full">
               <Link href="/experience" className="block h-full apple-card group relative overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[220px]">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                       <Briefcase size={24} />
                    </div>
                    <span className="text-xs font-semibold uppercase opacity-50 tracking-wider">Work</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mt-4 mb-2">Experience</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Freelance Developer.<br/>
                      Open Source Contributor.<br/>
                      Building scalable web apps.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

             {/* Contact Card */}
             <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1 h-full">
               <Link href="/contact" className="block h-full apple-card group relative overflow-hidden hover:scale-[1.02] transition-transform duration-500 bg-zinc-900 dark:bg-white text-white dark:text-black">
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
                   <div className="p-4 bg-white/10 dark:bg-black/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                     <Mail size={32} />
                   </div>
                  <h3 className="text-2xl font-bold">Get in Touch</h3>
                  <p className="text-sm opacity-60 mt-2 mb-4">Have an idea? Let&apos;s build it.</p>
                  <span className="px-4 py-2 border border-white/30 dark:border-black/30 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all">
                    Available for Hire
                  </span>
                </div>
              </Link>
            </motion.div>

          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="pt-16 border-t border-zinc-200 dark:border-zinc-800 text-center animate-fade-in">
          <p className="text-sm text-zinc-400 font-medium">
            © {new Date().getFullYear()} Gaurav Yadav. Crafted with care.
          </p>
        </footer>
      </div>
    </main>
  );
}
