'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Clock, Share2, Linkedin, Twitter, Zap, Shield, Globe } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

// --- Callout Component ---
const Callout = ({ type = "info", title, children }: any) => {
  const styles: any = {
    info: "border-blue-500 bg-blue-50 dark:bg-blue-900/10 text-blue-900 dark:text-blue-100",
    success: "border-green-500 bg-green-50 dark:bg-green-900/10 text-green-900 dark:text-green-100",
    warning: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10 text-yellow-900 dark:text-yellow-100",
    neutral: "border-zinc-500 bg-zinc-50 dark:bg-zinc-900/10 text-zinc-900 dark:text-zinc-100",
  }

  const icons: any = {
    info: <Zap size={18} className="text-blue-500" />,
    success: <Zap size={18} className="text-green-500" />, // Using Zap for now, could be Check
    warning: <Shield size={18} className="text-yellow-500" />,
    neutral: <Globe size={18} className="text-zinc-500" />,
  }

  return (
    <div className={`border-l-4 p-5 rounded-r-xl my-8 ${styles[type]} shadow-sm`}>
      <div className="flex items-center gap-2 mb-2">
         {icons[type]}
         {title && <p className="font-bold text-base">{title}</p>}
      </div>
      <div className="text-base opacity-90 leading-relaxed">{children}</div>
    </div>
  )
}

// --- Main Blog Page ---
export default function RuntimeShowdownBlog() {
  const content = `
# Bun vs Node.js vs Deno: The JavaScript Runtime Showdown

JavaScript is no longer tied to a single runtime.

Today, developers actively choose between:
- **Node.js**
- **Deno**
- **Bun**

Each represents a different philosophy of how JavaScript should run outside the browser.

---

## Runtime Philosophies

| Runtime | Core Philosophy |
|------|----------------|
| Node.js | Stability & ecosystem dominance |
| Deno | Security-first & standards |
| Bun | Performance-first & all-in-one |

<Callout type="info" title="Key Insight">
There is no single “best” runtime — only the best runtime for your use case.
</Callout>

---

## Node.js — The Backbone of the Web

Node.js remains the most widely used JavaScript runtime in production.

### Strengths
- Massive npm ecosystem
- Enterprise-grade stability
- Long-term support guarantees

### Tradeoffs
- Slower cold starts
- Tooling fragmentation
- Legacy APIs

<Callout type="neutral" title="When to Use Node.js">
Choose Node.js when stability, ecosystem size, and long-term maintenance matter more than raw speed.
</Callout>

---

## Deno — Secure by Design

Deno fixes many of Node.js’s early design compromises.

### Strengths
- Explicit permission model
- Native TypeScript
- Web-standards-first APIs

### Tradeoffs
- Smaller ecosystem
- Permissions add friction
- Slower installs than Bun

<Callout type="warning" title="Security First">
Deno is ideal when sandboxing, isolation, and least-privilege execution are non-negotiable.
</Callout>

---

## Bun — Performance as a Feature

Bun reimagines JavaScript tooling as a single, cohesive system.

### Strengths
- Fastest startup times
- Built-in package manager, bundler, test runner
- Minimal configuration

### Tradeoffs
- Partial Node API compatibility
- Young ecosystem
- Rapidly evolving

<Callout type="success" title="Why Bun Feels Different">
Bun optimizes for developer flow — fewer tools, fewer configs, faster iteration.
</Callout>

---

## Performance Comparison

| Feature | Node.js | Deno | Bun |
|------|------|------|------|
| Cold Start | Slow | Medium | Fastest |
| Package Install | Slow | Medium | Instant |
| Built-in Tooling | No | Partial | Yes |
| Ecosystem Size | Massive | Growing | Growing |

---

## Security Comparison

| Area | Node.js | Deno | Bun |
|---|---|---|---|
| Permissions | None | Explicit | None |
| Defaults | Neutral | Secure | Performance-first |

<Callout type="info" title="Security Tradeoff">
Security and performance often pull in opposite directions — Deno and Bun represent each extreme.
</Callout>

---

## Which One Should You Choose?

### Choose Node.js if:
- You need ecosystem maturity
- You maintain large production systems

### Choose Deno if:
- Security is your top priority
- You’re building edge or sandboxed apps

### Choose Bun if:
- You want speed and simplicity
- You’re building modern apps or tooling

---

## Final Thoughts

Node.js laid the foundation.  
Deno corrected the mistakes.  
Bun redefined expectations.

JavaScript runtimes are evolving — fast.
`;

  // Custom components for Markdown rendering
  const MarkdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl sm:text-4xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 text-zinc-800 dark:text-zinc-100">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-zinc-800 dark:text-zinc-200">{children}</h3>,
    p: ({ children }: any) => <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 mb-6">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-zinc-600 dark:text-zinc-300 ml-4">{children}</ul>,
    li: ({ children }: any) => <li className="pl-2">{children}</li>,
    code: ({ node, inline, className, children, ...props }: any) => (
       <code className="px-1.5 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 font-mono text-sm text-pink-600 dark:text-pink-400 font-semibold" {...props}>
          {children}
        </code>
    ),
    table: ({ children }: any) => (
      <div className="overflow-x-auto my-8 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: any) => <thead className="bg-zinc-50 dark:bg-zinc-900">{children}</thead>,
    tbody: ({ children }: any) => <tbody className="bg-white dark:bg-zinc-950 divide-y divide-zinc-200 dark:divide-zinc-800">{children}</tbody>,
    tr: ({ children }: any) => <tr>{children}</tr>,
    th: ({ children }: any) => <th className="px-6 py-3 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">{children}</th>,
    td: ({ children }: any) => <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-700 dark:text-zinc-300">{children}</td>,
    // Custom Callout Handler
    // Note: ReactMarkdown doesn't support custom JSX tags directly in standard mode. 
    // We'll intercept the special <Callout> syntax or relying on the user's manual placement if we were using MDX.
    // Since we are using a string variable for content here, we need a way to render the component.
    // For this implementation, I will manually inject the Callout components into the rendered output 
    // by using a rehype plugin or custom parser IF this was a real MDX setup.
    // HOWEVER, to keep it simple and working with the provided content string in this specific file structure:
    // I will convert the <Callout> text in the 'content' string to a custom component usage 
    // or arguably better, I will just hardcode the content with components for this specific page 
    // to ensure it renders perfectly without complex MDX parsing setup in this Next.js app.
    
    // Actually, looking at the request, the user provided MDX. 
    // Since I am implementing this as a .tsx page, I will translate the MDX content directly into JSX structure 
    // where possible, OR use a specialized renderer. 
    // Given the constraints, I'll stick to ReactMarkdown but I will handle the specific Callout blocks
    // by replacing the raw HTML-like string in the content variable with actual JSX in a structured way below.
    // WAIT: ReactMarkdown can handle HTML if 'rehype-raw' is used, but treating custom components is tricky.
    
    // STRATEGY CHANGE: To ensure high fidelity, I will manually reconstruct the article structure in JSX 
    // for this specific page, rather than relying on a markdown parser that might choke on custom components 
    // without heavy configuration (like rehype-react). This guarantees the Callouts work 100%.
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
                 <span>Comparison</span>
               </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                 <Clock size={14} />
                 <span>8 min read</span>
               </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6">
              Bun vs Node.js vs Deno
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
              A deep comparison of the three major JavaScript runtimes: performance, security, and developer experience.
            </p>
          </motion.div>

          {/* Infographic Placeholder (CSS Version) */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative w-full aspect-[16/9] mb-16 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/5 dark:ring-white/10 flex flex-col md:flex-row"
          >
             {/* Node */}
             <div className="flex-1 bg-[#233023] relative p-6 flex flex-col justify-between group overflow-hidden">
                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="font-bold text-green-400 text-2xl z-10">Node.js</div>
                <div className="z-10">
                   <div className="text-xs font-mono text-green-200/50 mb-1">STABILITY</div>
                   <div className="h-1 w-full bg-green-900/50 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full"></div>
                   </div>
                </div>
                 <Globe className="absolute -bottom-4 -right-4 w-40 h-40 text-green-500/10" />
             </div>
             
             {/* Deno */}
             <div className="flex-1 bg-[#1e2530] relative p-6 flex flex-col justify-between group overflow-hidden border-l border-white/5">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="font-bold text-blue-400 text-2xl z-10">Deno</div>
                <div className="z-10">
                   <div className="text-xs font-mono text-blue-200/50 mb-1">SECURITY</div>
                    <div className="h-1 w-full bg-blue-900/50 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[90%]"></div>
                   </div>
                </div>
                <Shield className="absolute -bottom-4 -right-4 w-40 h-40 text-blue-500/10" />
             </div>

             {/* Bun */}
             <div className="flex-1 bg-[#252526] relative p-6 flex flex-col justify-between group overflow-hidden border-l border-white/5">
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="font-bold text-white text-2xl z-10 flex items-center gap-2">Bun <Zap size={20} className="text-yellow-400 fill-yellow-400 animate-pulse"/></div>
                <div className="z-10">
                   <div className="text-xs font-mono text-zinc-400 mb-1">SPEED</div>
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-full shadow-[0_0_10px_white]"></div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Manually Structured Article Content for React Component */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-300 mb-8">
              JavaScript is no longer tied to a single runtime. Today, developers actively choose between <strong>Node.js</strong>, <strong>Deno</strong>, and <strong>Bun</strong>. Each represents a different philosophy of how JavaScript should run outside the browser.
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Runtime Philosophies</h2>
            
            <div className="overflow-x-auto my-8 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
                <thead className="bg-zinc-50 dark:bg-zinc-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">Runtime</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">Core Philosophy</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-zinc-950 divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr><td className="px-6 py-4 font-bold text-green-600">Node.js</td><td className="px-6 py-4">Stability & ecosystem dominance</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-blue-600">Deno</td><td className="px-6 py-4">Security-first & standards</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-zinc-900 dark:text-white">Bun</td><td className="px-6 py-4">Performance-first & all-in-one</td></tr>
                </tbody>
              </table>
            </div>

            <Callout type="info" title="Key Insight">
              There is no single “best” runtime — only the best runtime for your use case.
            </Callout>

            {/* Node Section */}
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Node.js — The Backbone of the Web</h2>
            <p className="mb-4">Node.js remains the most widely used JavaScript runtime in production.</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Strengths</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Massive npm ecosystem</li>
              <li>Enterprise-grade stability</li>
              <li>Long-term support guarantees</li>
            </ul>
             <h3 className="text-xl font-semibold mt-6 mb-2">Tradeoffs</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Slower cold starts</li>
              <li>Tooling fragmentation</li>
              <li>Legacy APIs</li>
            </ul>
            <Callout type="neutral" title="When to Use Node.js">
              Choose Node.js when stability, ecosystem size, and long-term maintenance matter more than raw speed.
            </Callout>

             {/* Deno Section */}
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Deno — Secure by Design</h2>
            <p className="mb-4">Deno fixes many of Node.js’s early design compromises.</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Strengths</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Explicit permission model</li>
              <li>Native TypeScript</li>
              <li>Web-standards-first APIs</li>
            </ul>
             <h3 className="text-xl font-semibold mt-6 mb-2">Tradeoffs</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Smaller ecosystem</li>
              <li>Permissions add friction</li>
              <li>Slower installs than Bun</li>
            </ul>
            <Callout type="warning" title="Security First">
              Deno is ideal when sandboxing, isolation, and least-privilege execution are non-negotiable.
            </Callout>

             {/* Bun Section */}
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Bun — Performance as a Feature</h2>
            <p className="mb-4">Bun reimagines JavaScript tooling as a single, cohesive system.</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Strengths</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Fastest startup times</li>
              <li>Built-in package manager, bundler, test runner</li>
              <li>Minimal configuration</li>
            </ul>
             <h3 className="text-xl font-semibold mt-6 mb-2">Tradeoffs</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Partial Node API compatibility</li>
              <li>Young ecosystem</li>
              <li>Rapidly evolving</li>
            </ul>
            <Callout type="success" title="Why Bun Feels Different">
              Bun optimizes for developer flow — fewer tools, fewer configs, faster iteration.
            </Callout>

            {/* Comparison Tables */}
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Performance Comparison</h2>
             <div className="overflow-x-auto my-8 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
                <thead className="bg-zinc-50 dark:bg-zinc-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">Node.js</th>
                     <th className="px-6 py-4 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">Deno</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">Bun</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-zinc-950 divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr><td className="px-6 py-4 font-medium">Cold Start</td><td className="px-6 py-4 text-red-500">Slow</td><td className="px-6 py-4 text-yellow-500">Medium</td><td className="px-6 py-4 text-green-500 font-bold">Fastest</td></tr>
                   <tr><td className="px-6 py-4 font-medium">Package Install</td><td className="px-6 py-4 text-red-500">Slow</td><td className="px-6 py-4 text-yellow-500">Medium</td><td className="px-6 py-4 text-green-500 font-bold">Instant</td></tr>
                    <tr><td className="px-6 py-4 font-medium">Built-in Tooling</td><td className="px-6 py-4 text-red-500">No</td><td className="px-6 py-4 text-yellow-500">Partial</td><td className="px-6 py-4 text-green-500 font-bold">Yes</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Which One Should You Choose?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
               <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/50">
                  <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">Choose Node.js if:</h3>
                  <ul className="text-sm space-y-1 text-zinc-600 dark:text-zinc-300">
                    <li>• You need ecosystem maturity</li>
                    <li>• You maintain large production systems</li>
                  </ul>
               </div>
                <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50">
                  <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Choose Deno if:</h3>
                   <ul className="text-sm space-y-1 text-zinc-600 dark:text-zinc-300">
                    <li>• Security is your top priority</li>
                    <li>• You’re building edge/sandboxed apps</li>
                  </ul>
               </div>
                <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Choose Bun if:</h3>
                   <ul className="text-sm space-y-1 text-zinc-600 dark:text-zinc-300">
                    <li>• You want speed and simplicity</li>
                    <li>• You’re building modern apps</li>
                  </ul>
               </div>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-xl leading-relaxed font-medium">
              Node.js laid the foundation.<br/>
              Deno corrected the mistakes.<br/>
              Bun redefined expectations.
            </p>
            <p className="mt-4 text-lg text-zinc-500">JavaScript runtimes are evolving — fast.</p>

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
