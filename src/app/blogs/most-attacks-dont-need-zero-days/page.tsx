'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Clock, Share2, Linkedin, Twitter, Shield, AlertTriangle, CheckCircle, Lock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function ZeroDaysBlog() {
  const content = `
# Why Most Cyber Attacks Don’t Need Zero-Days

When people think about hacking, they imagine **zero-day exploits**, elite attackers, and complex payloads.

Reality is far more boring — and far more dangerous.

Most successful cyber attacks don’t rely on unknown vulnerabilities.  
They rely on **things we already know are broken**.

---

## The Myth of the “Advanced Hacker”

Zero-days are rare, expensive, and usually reserved for:
- Nation-state actors
- Targeted espionage
- High-value surveillance

But most breaches happen because of:
- Exposed credentials
- Misconfigured servers
- Publicly accessible admin panels
- Unpatched but *known* vulnerabilities

Attackers don’t need sophistication when negligence works.

---

## Common Real-World Entry Points

### 1. Exposed Services
- Open databases (MongoDB, Redis)
- Public admin dashboards
- Dev environments deployed to production

A simple port scan is often enough.

---

### 2. Weak or Reused Credentials
Credential stuffing remains one of the most effective attack techniques.

If users reuse passwords, attackers don’t need exploits — they need patience.

---

### 3. Misconfigurations
Cloud misconfigurations are responsible for countless breaches:
- Public S3 buckets
- Over-permissioned IAM roles
- Secrets in environment variables

Misconfigurations are silent vulnerabilities.

---

## Why This Keeps Happening

Because security is often treated as:
- A checkbox
- A post-deployment task
- Someone else’s responsibility

Attackers exploit **human habits**, not just technical flaws.

---

## Cybersecurity Takeaway

If you defend only against advanced attacks,  
you remain vulnerable to basic ones.

Security starts with:
- Proper configuration
- Least privilege
- Asset visibility
- Regular audits

---

## Final Thought

You don’t need to stop elite hackers first.

You need to stop the **obvious mistakes** — because attackers start there.
`;

  // Custom components for Markdown rendering
  const MarkdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl sm:text-4xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 text-zinc-800 dark:text-zinc-100">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-zinc-800 dark:text-zinc-200">{children}</h3>,
    p: ({ children }: any) => <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 mb-6">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-zinc-600 dark:text-zinc-300 ml-4">{children}</ul>,
    li: ({ children }: any) => <li className="pl-2">{children}</li>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-red-500 pl-6 italic my-8 text-xl text-zinc-700 dark:text-zinc-300 bg-red-50 dark:bg-red-900/10 py-4 pr-4 rounded-r-xl">
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
                 <span>Jan 06, 2026</span>
               </div>
               <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                 <Tag size={14} />
                 <span>Cybersecurity</span>
               </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                 <Clock size={14} />
                 <span>6 min read</span>
               </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6">
              Why Most Cyber Attacks Don’t Need Zero-Days
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
              A practical breakdown of how real-world breaches happen using misconfigurations, weak credentials, and exposed services.
            </p>
          </motion.div>

          {/* Hero Image / Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[16/9] mb-16 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/5 dark:ring-white/10 group bg-zinc-900"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,0,0.5),rgba(0,0,0,0))]" />
             
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                   <div className="absolute -inset-4 bg-red-500/20 blur-xl rounded-full animate-pulse"></div>
                   <Shield size={120} className="text-zinc-800 relative z-10" fill="#18181b"/>
                   <AlertTriangle size={48} className="text-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
                </div>
             </div>

             {/* Code Overlay */}
             <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-xl font-mono text-sm text-zinc-400">
                   <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
                      <span className="text-red-400">TARGET_SYSTEM</span>
                      <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">VULNERABLE</span>
                   </div>
                   <div className="space-y-1">
                      <div className="flex justify-between">
                         <span>{'>'} 0-day exploit...</span>
                         <span className="text-zinc-600">NOT REQUIRED</span>
                      </div>
                      <div className="flex justify-between">
                         <span>{'>'} admin // admin123...</span>
                         <span className="text-green-400">ACCESS GRANTED</span>
                      </div>
                   </div>
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
