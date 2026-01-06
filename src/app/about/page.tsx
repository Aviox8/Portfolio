'use client';



import { Book, Code, Globe, Terminal, Award, Heart, Cpu, Shield, ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { category: "Languages", items: ["TypeScript", "Python", "C++", "Java", "SQL"], color: "bg-blue-500", light: "bg-blue-50", dark: "dark:bg-blue-900/20", text: "text-blue-600 dark:text-blue-400" },
    { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"], color: "bg-rose-500", light: "bg-rose-50", dark: "dark:bg-rose-900/20", text: "text-rose-600 dark:text-rose-400" },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Supabase"], color: "bg-green-500", light: "bg-green-50", dark: "dark:bg-green-900/20", text: "text-green-600 dark:text-green-400" },
    { category: "Cybersecurity", items: ["Network Security", "Ethical Hacking", "Cryptography", "Linux"], color: "bg-orange-500", light: "bg-orange-50", dark: "dark:bg-orange-900/20", text: "text-orange-600 dark:text-orange-400" },
  ];

  const journeyContent = `
My journey into technology started with a curiosity for how things work under the hood. Currently pursuing my **BCA in Cybersecurity** at **ADYPU, Pune**, I am deeply immersed in the world of digital security.

However, my passion isn't limited to just breaking things (ethically, of course). I love **building** them too. I've spent countless hours mastering modern web technologies like **Next.js** and **Tailwind CSS** to create seamless digital experiences.
`;

  const interestsContent = `
When I'm not coding or studying security protocols, you can find me participating in **Hackathons** events, solving **CTF challenges**, or exploring the latest in tech innovation. I believe in continuous learning and pushing my limits, both mentally and physically.
`;

  // Custom Markdown Components for consistent styling
  const MarkdownComponents = {
    p: (props: any) => (
      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4 last:mb-0 text-lg">
        {props.children}
      </p>
    ),
    strong: (props: any) => (
      <strong className="font-semibold text-zinc-900 dark:text-white">
        {props.children}
      </strong>
    ),
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-apple-gradient text-zinc-900 dark:text-zinc-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* HEADER SECTION */}
        <section className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 flex-1 pt-8"
          >
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white">
              About Me
            </h1>
            <div className="text-xl sm:text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl font-medium">
              <ReactMarkdown components={MarkdownComponents}>
                I&apos;m a BCA Cybersecurity student and a passionate full-stack developer. I bridge the gap between secure infrastructure and beautiful, user-centric web applications.
              </ReactMarkdown>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative w-72 h-72 md:w-96 md:h-96 shrink-0"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-[2.5rem] blur-3xl animate-pulse"></div>
             <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                <Image
                  src="/About/pfp.png"
                  alt="Gaurav Yadav"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  priority
                />
             </div>
          </motion.div>
        </section>

        {/* BIO / STORY SECTION */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl">
                <Terminal size={28} className="text-zinc-900 dark:text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">My Journey</h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert">
              <ReactMarkdown components={MarkdownComponents}>
                {journeyContent}
              </ReactMarkdown>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="apple-card-elevated p-8 space-y-8 relative overflow-hidden">
             <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-2xl text-amber-600 dark:text-amber-400">
                <Book size={28} />
              </div>
              <h2 className="text-2xl font-bold">Education Timeline</h2>
            </div>
            
            <div className="space-y-8 relative pl-2">
              <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-700"></div>

              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-zinc-900 border-4 border-blue-500 z-10 group-hover:scale-110 transition-transform"></div>
                <h3 className="font-bold text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">BCA Cybersecurity</h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">Ajeenkya DY Patil University, Pune</p>
                <div className="inline-block mt-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wide">
                  2025 – 2028
                </div>
              </div>
              
              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-zinc-900 border-4 border-purple-500 z-10 group-hover:scale-110 transition-transform"></div>
                <h3 className="font-bold text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Industry Training</h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">SeamEdu</p>
                <p className="text-sm text-zinc-400 mt-1">Specialized Curriculum in Network Security & Forensics</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* SKILLS BENTO GRID */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl">
              <Cpu size={28} className="text-zinc-900 dark:text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Technical Arsenal</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={skillGroup.category} 
                variants={itemVariants}
                className={`apple-card p-6 flex flex-col h-full hover:scale-[1.03] transition-transform duration-300 relative overflow-hidden`}
              >
                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-20 blur-2xl ${skillGroup.color}`}></div>
                
                <h3 className={`text-xl font-bold mb-6 ${skillGroup.text}`}>{skillGroup.category}</h3>
                
                <ul className="space-y-3 flex-1">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 font-medium text-zinc-600 dark:text-zinc-300">
                      <div className={`w-2 h-2 rounded-full ${skillGroup.color}`}></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* INTERESTS */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-16"
        >
           <div className="apple-card-elevated p-8 sm:p-12 relative overflow-hidden group text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-rose-500/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <div className="inline-flex p-4 bg-gradient-to-br from-orange-100 to-rose-100 dark:from-orange-900/40 dark:to-rose-900/40 rounded-3xl text-orange-600 dark:text-orange-400 mb-2 shadow-inner">
                  <Heart size={40} fill="currentColor" className="bg-clip-text" />
                </div>
                
                <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Beyond the Code</h2>
                <div className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  <ReactMarkdown components={MarkdownComponents}>
                    {interestsContent}
                  </ReactMarkdown>
                </div>

                <div className="pt-6 flex flex-wrap justify-center gap-4">
                  <Link href="/projects" className="apple-btn-primary rounded-full px-8">
                    View My Projects
                  </Link>
                  <Link href="/contact" className="group apple-btn-secondary rounded-full px-8">
                    Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                  </Link>
                </div>
              </div>
           </div>
        </motion.section>

      </div>
    </main>
  );
}
