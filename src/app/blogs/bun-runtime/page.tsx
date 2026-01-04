'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Clock, Share2, Linkedin, Twitter } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function BunRuntimeBlog() {
  const content = `
# Bun: Rethinking the JavaScript Runtime for Performance-First Development

Modern JavaScript development is fast—but our tooling hasn’t always kept up. Long install times, bloated build chains, and fragmented ecosystems still slow developers down.

Enter **Bun** — a modern JavaScript runtime built with **performance-first engineering** and **developer experience** at its core.

This post is part of my learning and experimentation log at **archduke.is-a.dev**, where I explore emerging developer tooling and modern infrastructure.

---

## What Is Bun?

Bun is an **all-in-one JavaScript runtime** that ships as a single binary and replaces:

- Node.js (runtime)
- npm / pnpm / yarn (package manager)
- Webpack / Rollup (bundler)
- Jest (test runner)

Built using **Zig** and powered by **JavaScriptCore**, Bun prioritizes speed, simplicity, and correctness.

---

## Why Bun Is Fast

Bun isn’t fast by accident — it’s fast by design.

### Architectural advantages:
- Native Zig implementation
- JavaScriptCore engine
- Zero-cost abstractions
- Optimized module resolution
- Aggressive caching

In benchmarks and real-world usage, Bun consistently:
- Starts faster
- Installs dependencies faster
- Uses less memory

---

## Package Management That Feels Instant

Installing dependencies:

\`\`\`bash
bun install
\`\`\`

### Highlights:

* Millisecond-level installs
* Global module cache
* npm compatibility
* Deterministic lockfile (\`bun.lockb\`)

This alone can dramatically improve developer iteration speed.

---

## Built-In Tooling (Zero Configuration)

### Native TypeScript

\`\`\`bash
bun run index.ts
\`\`\`

### Bundler

\`\`\`bash
bun build src/index.ts --outdir dist
\`\`\`

### Test Runner

\`\`\`bash
bun test
\`\`\`

No additional tooling required.

---

## Minimal Bun HTTP Server Example

\`\`\`ts
Bun.serve({
  port: 3000,
  fetch() {
    return new Response("Hello from Bun ⚡");
  },
});
\`\`\`

Run it with:

\`\`\`bash
bun run server.ts
\`\`\`

That’s a production-grade server in ~6 lines.

---

## Bun in Modern Full-Stack Development

Bun integrates naturally with:

* React & modern frontend stacks
* APIs & microservices
* CLI tooling
* Edge & serverless workloads

For indie developers, startups, and students, Bun reduces friction between idea and execution.

---

## Stability & Ecosystem Considerations

While Bun is production-ready for many use cases:

* Some Node APIs are still partial
* Legacy Node apps may require adjustments
* Best suited for modern stacks

Adoption is growing rapidly, and the ecosystem is maturing fast.

---

## Why I’m Exploring Bun

As a cybersecurity and web development student, I care about:

* Performance
* Efficiency
* Reduced attack surface
* Modern infrastructure

Bun aligns strongly with these principles and represents the future direction of JavaScript tooling.

---

## Final Thoughts

Bun isn’t just a faster runtime — it’s a **rethink of how JavaScript tooling should work**.

If you value speed, simplicity, and modern engineering, Bun deserves a place in your toolkit.
`;

  // Custom components for Markdown rendering
  const MarkdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl sm:text-4xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 text-zinc-800 dark:text-zinc-100">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-zinc-800 dark:text-zinc-200">{children}</h3>,
    p: ({ children }: any) => <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 mb-6">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-zinc-600 dark:text-zinc-300 ml-4">{children}</ul>,
    li: ({ children }: any) => <li className="pl-2">{children}</li>,
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline ? (
        <div className="relative my-6 rounded-xl overflow-hidden bg-[#1e1e1e] border border-zinc-800 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-zinc-800">
             <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
             </div>
             <div className="text-xs font-mono text-zinc-400">{match?.[1] || 'sh'}</div>
          </div>
          <pre className="p-4 overflow-x-auto text-sm sm:text-base font-mono leading-relaxed text-zinc-300">
            <code className={className} {...props}>
              {children}
            </code>
          </pre>
        </div>
      ) : (
        <code className="px-1.5 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 font-mono text-sm text-pink-600 dark:text-pink-400 font-semibold" {...props}>
          {children}
        </code>
      )
    },
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 italic my-8 text-xl text-zinc-700 dark:text-zinc-300 bg-blue-50 dark:bg-blue-900/10 py-4 pr-4 rounded-r-xl">
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
                 <span>Jan 04, 2026</span>
               </div>
               <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                 <Tag size={14} />
                 <span>Engineering</span>
               </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                 <Clock size={14} />
                 <span>5 min read</span>
               </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6">
              Bun: Rethinking the JavaScript Runtime
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
              A deep dive into Bun — the modern JavaScript runtime built for speed, simplicity, and full-stack development.
            </p>
          </motion.div>

          {/* Hero Image (CSS Version) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[16/9] mb-16 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/5 dark:ring-white/10 group"
          >
            <div className="absolute inset-0 bg-[#0f0f11] flex items-center justify-center relative overflow-hidden">
               {/* Background Gradients */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-[100px] opacity-60"></div>
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/10 to-blue-500/10 rounded-full blur-[100px] opacity-40"></div>
               
               {/* Grid Pattern */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

               {/* Center Console Content */}
               <div className="relative z-10 p-8 sm:p-12 w-full max-w-2xl">
                 <div className="bg-[#1a1b1e]/90 backdrop-blur-xl rounded-2xl border border-zinc-700/50 shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-700/50 bg-[#1a1b1e]">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       <div className="ml-4 text-xs font-mono text-zinc-500">user@dev:~/project</div>
                    </div>
                    <div className="p-6 font-mono text-lg sm:text-xl text-zinc-300">
                       <div className="flex gap-2">
                         <span className="text-pink-500">➜</span>
                         <span className="text-cyan-400">~</span>
                         <span className="text-white">bun install</span>
                         <span className="animate-pulse">⚡</span>
                       </div>
                       <div className="mt-4 text-sm text-zinc-500">
                         lockfile saved<br/>
                         <span className="text-green-400">dependencies installed [6ms]</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500 prose-img:rounded-2xl">
            <ReactMarkdown components={MarkdownComponents}>
              {content}
            </ReactMarkdown>
          </div>

          <hr className="my-12 border-zinc-200 dark:border-zinc-800" />

          {/* Share / Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900">
             <div>
                <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Enjoyed this read?</h4>
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
