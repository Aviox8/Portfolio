'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Clock, Share2, Linkedin, Twitter, Key, Lock, EyeOff } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function EnvVarsSecurityBlog() {
  const content = `
# The Real Security Risk of Environment Variables

Environment variables are treated as “secure by default”.

They are not.

They are **convenient**, not **safe**.

---

## Why Developers Love Environment Variables

- Easy to configure
- Easy to deploy
- No hardcoding secrets
- Supported everywhere

But convenience hides risk.

---

## How Secrets Leak in Practice

### 1. Debug Logs
Accidental logging of \`process.env\`  
→ credentials end up in logs.

---

### 2. Client-Side Exposure
Misconfigured builds expose secrets to:
- Frontend JavaScript
- Browser DevTools
- Public source maps

---

### 3. Compromised Dependencies
Any dependency with runtime access can read environment variables.

One malicious package = full access.

---

## Why This Is Dangerous

Environment variables often store:
- Database credentials
- API keys
- JWT secrets
- Cloud access tokens

If leaked, attackers don’t need lateral movement —  
they log in directly.

---

## Secure Alternatives

- Secret managers (Vault, cloud-native solutions)
- Short-lived credentials
- Scoped permissions
- Runtime isolation

Secrets should be **retrievable**, not **globally readable**.

---

## Cybersecurity Lesson

Environment variables reduce *hardcoding*, not *risk*.

Security comes from:
- Access control
- Scope limitation
- Monitoring usage

---

## Final Thought

If your app can read all secrets,  
so can anything running inside it.

That’s the real risk.
`;

  const MarkdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl sm:text-4xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 text-zinc-800 dark:text-zinc-100">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-zinc-800 dark:text-zinc-200">{children}</h3>,
    p: ({ children }: any) => <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 mb-6">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-zinc-600 dark:text-zinc-300 ml-4">{children}</ul>,
    li: ({ children }: any) => <li className="pl-2">{children}</li>,
    code: ({ node, inline, className, children, ...props }: any) => (
       <code className="px-1.5 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 font-mono text-sm text-yellow-600 dark:text-yellow-400 font-semibold" {...props}>
          {children}
        </code>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-yellow-500 pl-6 italic my-8 text-xl text-zinc-700 dark:text-zinc-300 bg-yellow-50 dark:bg-yellow-900/10 py-4 pr-4 rounded-r-xl">
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
                 <span>Jan 07, 2026</span>
               </div>
               <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
                 <Tag size={14} />
                 <span>Secrets Management</span>
               </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                 <Clock size={14} />
                 <span>5 min read</span>
               </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6">
              The Real Risk of Environment Variables
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
              How leaked environment variables quietly cause some of the most damaging breaches in modern applications.
            </p>
          </motion.div>

          {/* Hero Image / Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[16/9] mb-16 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/5 dark:ring-white/10 group bg-[#111]"
          >
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-[100px]"></div>
             
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-xl max-w-sm w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                   
                   <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <Key size={24} className="text-yellow-500" />
                      </div>
                      <div className="font-mono text-zinc-400 text-sm">.env</div>
                   </div>

                   <div className="space-y-3 font-mono text-sm">
                      <div className="flex justify-between items-center p-2 bg-zinc-800/50 rounded border border-zinc-700/50">
                         <span className="text-zinc-500">DB_PASS</span>
                         <div className="flex gap-1">
                            <span className="text-white">********</span>
                            <EyeOff size={14} className="text-zinc-600" />
                         </div>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-red-900/10 rounded border border-red-500/30 relative overflow-hidden">
                         <span className="text-red-400">AWS_KEY</span>
                         <span className="text-red-400 font-bold animate-pulse">EXPOSED</span>
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
