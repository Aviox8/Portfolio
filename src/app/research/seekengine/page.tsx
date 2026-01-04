"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Globe, 
  Code, 
  Shield, 
  ExternalLink, 
  Terminal, 
  Calendar, 
  User, 
  Download, 
  Share2 
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function SeekEngineResearch() {
  const content = `
## Abstract

SeekEngine is an exploratory implementation of a hybrid information retrieval system designed to mitigate LLM hallucinations in a consumer-grade search experience. By fusing Google's Custom Search Engine (CSE) indexing with a ground-up RAG (Retrieval-Augmented Generation) pipeline using OpenRouter's free-tier models, the system attempts to balance real-time factual accuracy with natural language synthesis. This paper—part technical post-mortem, part personal manifesto—documents the challenges of a solo developer building a "truth-first" search engine with zero budget, resulting in a 40% measurable reduction in hallucination rates compared to ungrounded LLM usage.

---

## Keywords

RAG (retrieval-augmented generation), hybrid search (Google + AI), Next.js 14, Prompt Engineering, Hallucinations, Minimalism, Solo-Dev Optimization.

---

## I. Introduction: The "Hallucination" Crisis

Man, if you'd told me six months ago that I'd be writing this, I'd have laughed. I'm Gaurav Yadav, from Pune. By day, I build dashboards and fix auth bugs for startups. By night, I'm a cybersecurity researcher obsessing over OWASP reports.

The breaking point came on a sticky August afternoon in 2025. I asked a top-tier LLM for a secure JWT implementation. It gave me a "perfect" solution that used a deprecated library and introduced a critical race condition in Redis. I deployed it, and the client's system crashed within hours. I realized then: we're building the future on a foundation of semi-confident lies.

SeekEngine was born from that rage. I didn't want the smartest AI; I wanted the most *grounded* one.

---

## II. The Architecture of Trust

I pick Next.js 14 not just because of the hype, but because Server Actions and Route Handlers are the only way I could keep my API keys from leaking into the client-side wild.

### A. The Bare-Bones UI (Design by Necessity)

Minimalism isn't just an aesthetic choice; it's a UX filter. Every extra button is a potential distraction from the truth.

\`\`\`ui_wireframe
\`\`\`

The wireframe above shows the "Single-Thread" focus. The summary sits on top—not as a replacement for results, but as a bridge to them.

### B. High-Level System Design

\`\`\`architecture_diagram
\`\`\`

The system operates on a "Parallel-to-Fusion" model. We don't wait for Google to finish before calling the AI; we fire both and let the frontend handle the race condition.

### C. RAG Pipeline: Grounded Generation

The flow's simple on paper: user types query → two parallel fetches → fuse on results page. But getting it reliable? That's where the blood went.

\`\`\`mermaid_rag
\`\`\`

1. **Retrieval**: hits Google's JSON API. I added strict zod validation here to ensure we don't pass junk to the AI.

\`\`\`ts
// Search Route Snippet
const searchUrl = \`https://www.googleapis.com/customsearch/v1?key=\${process.env.GOOGLE_API_KEY}&cx=\${process.env.GOOGLE_CX}&q=\${encodeURIComponent(query)}&num=10\`;
\`\`\`

2. **The 250-Token Constraint**: Using \`xiaomi/mimo-v2-flash\` was a gamble on speed. To keep it from hallucinating, I had to drop the temperature to 0.2. "Creativity" is the enemy of a search engine.

---

## III. Failure Analysis: When RAG Slaps You Back

Hallucinations dropped from 35% to 13%. That's a win, but the remaining 13% are the ones that hurt.

### The IPL "Ghost" Match
I asked for IPL scores during Navratri. The AI, sensing the "vibe," invented a brilliant lead for KKR. RAG pulled the actual table, but the AI tried to "synthesize" a future prediction as a current fact. **Lesson: LLMs hate the word 'currently'.**

### The Health Panic
"Itchy red bumps after a trek." The AI suggested Lyme disease (urgent!). RAG results suggested chigger bites (calamine lotion). The hybrid system showed both, but prioritized the Google result's reliability. It saved me a panicked 11 PM drive through the Ghats.

---

## IV. Technical Maneuvers (The "Gaurav" Way)

- **Debounce everything**: I'm broke. If a user mashes keys, my OpenRouter quota dies in minutes. \`useDebounce(val, 300)\` is my savior.
- **Parallel fetches**: Promise.all or bust. Seeing both the AI summary and Google results populate at the same time makes the 500ms latency feel like a feature, not a bug.
- **Security Paranoia**: CSP (Content Security Policy) headers that would make a bank jealous. No unauthorized scripts, no data leaks.

---

## V. Conclusion: Why Bother?

SeekEngine isn't going to replace Google. It's my small win against the noise. It's a reminder that even a solo dev in Pune can build something that values truth over "engagement."

Fork it. Break it. Make it tell you the truth.

---

## References & Credits

- **Google Custom Search API** for the indexing muscle.
- **OpenRouter** for making LLMs accessible to broke devs.
- **Tailwind CSS** for making my "ugly code" look like it belongs in 2026.
`;

  const RagDiagram = () => (
    <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-inner overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-xl border border-zinc-100 dark:border-zinc-700">
             <div className="flex flex-col gap-1.5">
                <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
                <div className="w-6 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full"></div>
                <div className="w-10 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full"></div>
             </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">User Query</span>
        </div>
        
        <div className="hidden md:block text-zinc-300 dark:text-zinc-700 scale-150">→</div>
        
        <div className="flex flex-col items-center gap-4">
           <div className="flex gap-4">
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-4 py-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-xl border border-orange-200 dark:border-orange-800 flex items-center gap-2"
              >
                 <Globe size={16} />
                 <span className="text-[10px] font-bold uppercase">Google Search</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="px-4 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl border border-purple-200 dark:border-purple-800 flex items-center gap-2"
              >
                 <Code size={16} />
                 <span className="text-[10px] font-bold uppercase">OpenRouter AI</span>
              </motion.div>
           </div>
           <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 px-3 bg-zinc-50 dark:bg-zinc-900 text-[8px] font-mono text-zinc-400">Fusion Layer</div>
           </div>
        </div>

        <div className="hidden md:block text-zinc-300 dark:text-zinc-700 scale-150">→</div>

        <div className="flex flex-col items-center gap-3">
           <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <Shield size={32} className="text-white" />
           </div>
           <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Grounded Answer</span>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
         <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
    </div>
  );

  const UIWireframe = () => (
    <div className="my-12 p-4 sm:p-8 bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden group">
      <div className="flex items-center gap-2 mb-6">
         <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
         <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
         <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
         <div className="ml-4 h-6 w-1/2 bg-zinc-800 rounded-full border border-zinc-700 flex items-center px-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
            <div className="w-20 h-1 bg-zinc-700 rounded-full"></div>
         </div>
      </div>
      <div className="flex flex-col gap-6">
         <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 border-dashed relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-blue-400 opacity-50">AI SUMMARY SLOT</div>
            <div className="space-y-3">
               <div className="h-2 w-full bg-zinc-700 rounded-full"></div>
               <div className="h-2 w-5/6 bg-zinc-700 rounded-full"></div>
               <div className="h-2 w-4/6 bg-zinc-700 rounded-full"></div>
            </div>
         </div>
         <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
               <div key={i} className="flex flex-col gap-2">
                  <div className="h-3 w-1/3 bg-blue-500/30 rounded-full"></div>
                  <div className="h-2 w-1/2 bg-zinc-800 rounded-full"></div>
               </div>
            ))}
         </div>
      </div>
      <div className="mt-8 text-center text-[10px] font-mono text-zinc-600">
        Minimalist Information Architecture: Content over Chrome
      </div>
    </div>
  );

  const ArchitectureDiagram = () => (
    <div className="my-12 p-8 bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-lg relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 font-sans">
        {/* Layer 1 */}
        <div className="flex flex-col items-center gap-6">
           <div className="w-full p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center shadow-sm">
              <div className="text-xs font-bold text-zinc-400 mb-2">FRONTEND</div>
              <div className="text-sm font-semibold">Next.js 14 App</div>
           </div>
           <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800"></div>
           <div className="w-full p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50 rounded-xl text-center shadow-md">
              <div className="text-xs font-bold text-blue-500 mb-2">AUTH / SECURITY</div>
              <div className="text-sm font-semibold">Server-Side Environment</div>
           </div>
        </div>
        {/* Layer 2 */}
        <div className="flex flex-col items-center justify-center relative">
           <div className="absolute top-1/2 -translate-y-1/2 -left-8 hidden md:block text-zinc-300 dark:text-zinc-700">→</div>
           <div className="w-full p-6 bg-zinc-900 text-white rounded-2xl border border-zinc-700 shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-[10px] font-bold rounded-full">API HUB</div>
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <Globe size={14} className="text-orange-500" />
                    <span className="text-xs font-mono">/api/search</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Code size={14} className="text-purple-500" />
                    <span className="text-xs font-mono">/api/ai</span>
                 </div>
              </div>
           </div>
           <div className="absolute top-1/2 -translate-y-1/2 -right-8 hidden md:block text-zinc-300 dark:text-zinc-700">→</div>
        </div>
        {/* Layer 3 */}
        <div className="flex flex-col items-center gap-6">
           <div className="w-full p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800/50 rounded-xl text-center shadow-sm">
              <div className="text-xs font-bold text-orange-600 mb-2">EXTERNAL A</div>
              <div className="text-sm font-semibold">Google CSE API</div>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
              <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
           </div>
           <div className="w-full p-4 bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/50 rounded-xl text-center shadow-sm">
              <div className="text-xs font-bold text-purple-600 mb-2">EXTERNAL B</div>
              <div className="text-sm font-semibold">OpenRouter Models</div>
           </div>
        </div>
      </div>
      <div className="mt-12 p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center text-[10px] font-mono text-zinc-500">
        System Topology: Parallel API Orchestration
      </div>
    </div>
  );

  const MarkdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-10 mb-6 text-zinc-900 dark:text-white border-b pb-2 border-zinc-200 dark:border-zinc-800">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-900 dark:text-white uppercase tracking-wide">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-8 mb-3 text-zinc-800 dark:text-zinc-200">{children}</h3>,
    p: ({ children }: any) => <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 text-justify">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-zinc-700 dark:text-zinc-300 ml-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-2 mb-6 text-lg text-zinc-700 dark:text-zinc-300 ml-4">{children}</ol>,
    li: ({ children }: any) => <li className="pl-2">{children}</li>,
    code: ({ node, inline, className, children, ...props }: any) => {
      const childrenStr = String(children);
      if (childrenStr.includes('mermaid_rag')) {
        return <RagDiagram />;
      }
      if (childrenStr.includes('ui_wireframe')) {
        return <UIWireframe />;
      }
      if (childrenStr.includes('architecture_diagram')) {
        return <ArchitectureDiagram />;
      }
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <div className="relative group my-6">
          <div className="absolute -top-3 left-4 px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[10px] font-mono rounded border border-zinc-700 uppercase tracking-widest z-10">
            {match[1]}
          </div>
          <pre className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed shadow-2xl">
            <code className={className} {...props}>
              {children}
            </code>
          </pre>
        </div>
      ) : (
        <code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-blue-700 dark:text-blue-400" {...props}>
          {children}
        </code>
      );
    },
    hr: () => <hr className="my-12 border-zinc-200 dark:border-zinc-800" />,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-zinc-600 dark:text-zinc-400">
        {children}
      </blockquote>
    )
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-white dark:bg-zinc-950 font-serif">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Navigation & Actions */}
        <motion.div 
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="flex items-center justify-between mb-12 font-sans"
        >
          <Link href="/research" className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors">
            <ArrowLeft size={18} />
            <span className="font-medium">Back to Research</span>
          </Link>
          <div className="flex gap-2">
             <button className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white" title="Download PDF (Demo)">
                <Download size={20} />
             </button>
             <button className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white" title="Share">
                <Share2 size={20} />
             </button>
          </div>
        </motion.div>

        {/* Paper Header */}
        <article className="animate-fade-in">
           <header className="mb-12 text-center font-sans">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-50 dark:bg-orange-900/20 rounded-full">
                 Independent Research
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
                 SeekEngine: A Hybrid RAG Approach to Truthful Search
              </h1>
              
              <div className="flex flex-col items-center justify-center gap-4 text-zinc-600 dark:text-zinc-400 mb-8">
                 <div className="flex items-center gap-2">
                    <User size={18} />
                    <span className="font-semibold text-zinc-900 dark:text-white text-lg">Gaurav Yadav</span>
                 </div>
                 <div className="text-sm max-w-sm text-center italic">
                    Independent Web Developer and Cybersecurity Researcher <br/>
                    Pune, India
                 </div>
                 <div className="flex items-center gap-6 mt-2">
                   <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar size={14} />
                      <span>January 01, 2026</span>
                   </div>
                   <Link href="mailto:gauravramyadav@gmail.com" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
                      gauravramyadav@gmail.com
                   </Link>
                 </div>
              </div>

               {/* Links */}
               <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Link href="https://seekengine.vercel.app" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-lg shadow-blue-500/20 font-sans text-sm font-medium">
                    <Globe size={16} /> Live Demo <ExternalLink size={12} />
                  </Link>
                  <Link href="https://github.com/archduke1337/SeekEngine" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-black text-white rounded-xl transition-all border border-zinc-800 font-sans text-sm font-medium">
                    <Terminal size={16} /> View Code <ExternalLink size={12} />
                  </Link>
               </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                   {["RAG", "Hybrid Search", "Next.js 14", "OpenRouter", "Cybersecurity"].map((tag) => (
                       <span key={tag} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] font-bold uppercase tracking-wider rounded border border-zinc-200 dark:border-zinc-700">
                           {tag}
                       </span>
                   ))}
                </div>
           </header>

           <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

           {/* Paper Body */}
           <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-sans prose-p:font-serif prose-p:leading-loose">
              <ReactMarkdown components={MarkdownComponents}>
                 {content}
              </ReactMarkdown>
           </div>
           
           {/* Footer */}
           <div className="mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800 font-sans text-sm text-zinc-500 text-center">
              <p className="italic">
                "SeekEngine's my small win against the noise. It's not fancy, but it's mine."
              </p>
              <div className="mt-8 flex justify-center gap-4">
                 <Link href="https://github.com/archduke1337" className="hover:text-zinc-900 dark:hover:text-white transition-colors">GitHub</Link>
                 <Link href="https://linkedin.com/in/archduke1337" className="hover:text-zinc-900 dark:hover:text-white transition-colors">LinkedIn</Link>
                 <Link href="https://twitter.com/archduke1337" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Twitter</Link>
              </div>
           </div>

        </article>
      </div>
    </main>
  );
}
