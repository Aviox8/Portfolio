'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Clock, Share2, Linkedin, Twitter, Package, Layers, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function DependencySecurityBlog() {
  const content = `
# Why Dependency Security Is a Bigger Problem Than Hackers

Modern applications don’t fail because of hackers.

They fail because they trust **too much code they didn’t write**.

---

## The Hidden Attack Surface

A simple web app might have:
- 10 direct dependencies
- 300+ transitive dependencies

Each dependency:
- Executes code
- Has maintainer access
- Can be compromised

---

## Common Dependency Attacks

### Typosquatting
\`expresss\` instead of \`express\`

### Dependency Confusion
Public package overrides private internal one

### Maintainer Compromise
Trusted package → malicious update

---

## Why This Is Hard to Defend

- Dependencies auto-update
- Transitive dependencies are invisible
- Audits are often ignored
- Security warnings are dismissed as “noise”

Attackers exploit trust, not vulnerabilities.

---

## Real Security Measures

- Lockfile enforcement
- Dependency pinning
- Minimal dependency philosophy
- Runtime monitoring
- Supply-chain audits

Security starts before runtime.

---

## Cybersecurity Perspective

Every dependency is:
> **An external actor inside your system**

Treat it accordingly.

---

## Final Thought

The biggest risk in your app  
isn’t who attacks it —

it’s **what you already installed**.
`;

  const MarkdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl sm:text-4xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 text-zinc-800 dark:text-zinc-100">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-zinc-800 dark:text-zinc-200">{children}</h3>,
    p: ({ children }: any) => <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 mb-6">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-zinc-600 dark:text-zinc-300 ml-4">{children}</ul>,
    li: ({ children }: any) => <li className="pl-2">{children}</li>,
    code: ({ node, inline, className, children, ...props }: any) => (
       <code className="px-1.5 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 font-mono text-sm text-purple-600 dark:text-purple-400 font-semibold" {...props}>
          {children}
        </code>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-purple-500 pl-6 italic my-8 text-xl text-zinc-700 dark:text-zinc-300 bg-purple-50 dark:bg-purple-900/10 py-4 pr-4 rounded-r-xl">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-12 border-zinc-200 dark:border-zinc-800" />,
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-apple-gradient">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Back Button */}
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="mb-8"
        >
          <Link href="/blogs" className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Blogs</span>
          </Link>
        </motion.div>

        {/* Hero Header */}
        <article className="animate-fade-in">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            {/* Meta Chips */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
               <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">
                 <Calendar size={14} />
                 <span>Jan 08, 2026</span>
               </div>
               <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                 <Tag size={14} />
                 <span>Supply Chain Security</span>
               </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                 <Clock size={14} />
                 <span>5 min read</span>
               </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6">
              Why Dependency Security Is a Bigger Problem
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
               A look at how modern software supply chains quietly expand attack surfaces beyond developer control.
            </p>
          </motion.div>

          {/* Hero Image / Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[16/9] mb-16 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/5 dark:ring-white/10 group bg-[#0a0a0c]"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(100,0,255,0.15),rgba(0,0,0,0))]"></div>
             
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative">
                    {/* Main Package */}
                    <div className="w-32 h-32 bg-purple-600 rounded-2xl flex items-center justify-center shadow-2xl relative z-10">
                       <Package size={48} className="text-white" />
                    </div>
                    
                    {/* Infected Dependency */}
                    <div className="absolute -right-16 -bottom-10 w-24 h-24 bg-zinc-800 rounded-2xl flex items-center justify-center shadow-xl border border-red-500/50 animate-bounce">
                       <AlertCircle size={32} className="text-red-500" />
                       <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">Malicious</div>
                    </div>

                    {/* Connecting Lines */}
                    <div className="absolute top-1/2 left-1/2 w-40 h-1 bg-gradient-to-r from-purple-600 to-transparent -translate-x-1/2 -z-10 blur-sm"></div>
                 </div>
             </div>
          </motion.div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown components={MarkdownComponents}>
              {content}
            </ReactMarkdown>
          </div>

          <hr className="my-12 border-zinc-200 dark:border-zinc-800" />

          {/* Share / Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900">
             <div>
                <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Found this useful?</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">Share it with your network.</p>
             </div>
             <div className="flex gap-3">
                <button className="p-3 rounded-full bg-white dark:bg-zinc-800 shadow-sm hover:scale-110 transition-transform text-zinc-600 dark:text-zinc-300">
                   <Twitter size={20} />
                </button>
                 <button className="p-3 rounded-full bg-white dark:bg-zinc-800 shadow-sm hover:scale-110 transition-transform text-zinc-600 dark:text-zinc-300">
                   <Linkedin size={20} />
                </button>
                 <button className="p-3 rounded-full bg-white dark:bg-zinc-800 shadow-sm hover:scale-110 transition-transform text-zinc-600 dark:text-zinc-300">
                   <Share2 size={20} />
                </button>
             </div>
          </div>
        </article>

      </div>
    </main>
  );
}
