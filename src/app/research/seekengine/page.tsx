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
  Share2,
  Cpu,
  RefreshCw,
  Bug,
  Layout
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// --- Visual Components ---

const UIFlowchart = () => (
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
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Search Query</span>
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
               <span className="text-[10px] font-bold uppercase">Google CSE</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="px-4 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl border border-purple-200 dark:border-purple-800 flex items-center gap-2"
            >
               <Code size={16} />
               <span className="text-[10px] font-bold uppercase">LLM RAG</span>
            </motion.div>
         </div>
         <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 px-3 bg-zinc-50 dark:bg-zinc-900 text-[8px] font-mono text-zinc-400">Context Fusion</div>
         </div>
      </div>

      <div className="hidden md:block text-zinc-300 dark:text-zinc-700 scale-150">→</div>

      <div className="flex flex-col items-center gap-3">
         <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
            <Shield size={32} className="text-white" />
         </div>
         <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Verified Answer</span>
      </div>
    </div>
    <div className="mt-8 text-center text-[10px] font-mono text-zinc-400 italic">
      Figure 1: SeekEngine Hybrid Retrieval-Augmented Generation Pipeline
    </div>
  </div>
);

const UIWireframe = () => (
  <div className="my-12 p-4 sm:p-8 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden group relative">
    <div className="flex items-center gap-2 mb-6">
       <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
       <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
       <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
       <div className="ml-4 h-7 w-2/3 bg-zinc-900 rounded-full border border-zinc-800 flex items-center px-4">
          <div className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></div>
          <div className="text-[10px] text-zinc-600 font-mono">seekengine.vercel.app</div>
       </div>
    </div>
    <div className="flex flex-col gap-6">
       <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 border-dashed relative overflow-hidden group-hover:border-blue-500/30 transition-colors">
          <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-blue-500 bg-blue-500/10 rounded-bl-xl border-l border-b border-blue-500/20">AI SUMMARY SLOT</div>
          <div className="space-y-3">
             <div className="h-2 w-full bg-zinc-800 rounded-full"></div>
             <div className="h-2 w-5/6 bg-zinc-800 rounded-full"></div>
             <div className="h-2 w-4/6 bg-zinc-800 rounded-full"></div>
          </div>
       </div>
       <div className="space-y-6">
          {[...Array(2)].map((_, i) => (
             <div key={i} className="flex flex-col gap-2">
                <div className="h-3 w-2/5 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors"></div>
                <div className="flex flex-col gap-1.5">
                   <div className="h-1.5 w-3/4 bg-zinc-800 rounded-full"></div>
                   <div className="h-1.5 w-4/5 bg-zinc-800 rounded-full opacity-60"></div>
                </div>
                <div className="h-1.5 w-1/4 bg-green-500/10 rounded-full text-[8px] text-green-500 font-mono px-2 py-0.5 mt-1 border border-green-500/20">Source: Verified.edu</div>
             </div>
          ))}
       </div>
    </div>
    <div className="mt-8 text-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
      Minimalist UI: Priority-Based Layout Structure
    </div>
  </div>
);

const ArchitectureDiagram = () => (
  <div className="my-12 p-8 bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 font-sans">
      {/* Layer 1: Client */}
      <div className="flex flex-col items-center gap-6">
         <div className="w-full p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-center shadow-sm">
            <Layout size={20} className="mx-auto mb-2 text-blue-500" />
            <div className="text-[10px] font-bold text-zinc-400 mb-1 uppercase">Frontend Layer</div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">Next.js 14 Client</div>
         </div>
         <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800"></div>
         <div className="w-full p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50 rounded-2xl text-center shadow-md">
            <Shield size={20} className="mx-auto mb-2 text-blue-600" />
            <div className="text-[10px] font-bold text-blue-500 mb-1 uppercase">Security Proxy</div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">API Route Handler</div>
         </div>
      </div>
      {/* Layer 2: Orchestration */}
      <div className="flex flex-col items-center justify-center relative">
         <div className="absolute top-1/2 -translate-y-1/2 -left-8 hidden md:block text-zinc-300 dark:text-zinc-700 animate-pulse">→</div>
         <div className="w-full p-6 bg-zinc-900 text-white rounded-3xl border border-zinc-700 shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-[10px] font-bold rounded-full shadow-lg shadow-blue-500/30">ORCHESTRATOR</div>
            <div className="space-y-4">
               <div className="flex items-center gap-3 p-2 bg-zinc-800 rounded-lg">
                  <Globe size={16} className="text-orange-500" />
                  <span className="text-[10px] font-mono whitespace-nowrap overflow-hidden text-ellipsis">google-search-v1</span>
               </div>
               <div className="flex items-center gap-3 p-2 bg-zinc-800 rounded-lg">
                  <Code size={16} className="text-purple-500" />
                  <span className="text-[10px] font-mono whitespace-nowrap overflow-hidden text-ellipsis">openrouter-completion</span>
               </div>
            </div>
         </div>
         <div className="absolute top-1/2 -translate-y-1/2 -right-8 hidden md:block text-zinc-300 dark:text-zinc-700 animate-pulse">→</div>
      </div>
      {/* Layer 3: Providers */}
      <div className="flex flex-col items-center gap-6">
         <div className="w-full p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800/50 rounded-2xl text-center shadow-sm">
            <div className="text-[10px] font-bold text-orange-600 mb-1 uppercase">External Resource A</div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">Google CSE API</div>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-bounce [animation-delay:0.2s]"></div>
         </div>
         <div className="w-full p-4 bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/50 rounded-2xl text-center shadow-sm">
            <div className="text-[10px] font-bold text-purple-600 mb-1 uppercase">External Resource B</div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">OpenRouter Model</div>
         </div>
      </div>
    </div>
    <div className="mt-12 p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-center text-[10px] font-mono text-zinc-500 tracking-wider">
      Figure 2: System Architecture & Parallel API Orchestration Topology
    </div>
  </div>
);

// --- Content ---

const content = `
## Abstract

SeekEngine is an exploratory implementation of a hybrid information retrieval system designed to mitigate LLM hallucinations in a consumer-grade search experience. By fusing Google's Custom Search Engine (CSE) indexing with a ground-up RAG (Retrieval-Augmented Generation) pipeline using OpenRouter's free-tier models, the system attempts to balance real-time factual accuracy with natural language synthesis. This paper documents the challenges of building a "truth-first" search engine with constraints, resulting in a measurable reduction in hallucination rates compared to ungrounded LLM usage.

---

## Keywords

RAG (retrieval-augmented generation), hybrid search (Google + AI), Next.js 14, Prompt Engineering, Hallucinations, Minimalism.

---

## I. Introduction: The "Hallucination" Crisis

Ask any developer for a secure JWT implementation, and most LLMs will give you a "perfect" solution that might use a deprecated library or introduce a critical race condition. We're building the future on a foundation of semi-confident lies.

SeekEngine was born from that frustration. It wasn't about the smartest AI; it was about the most *grounded* one.

---

## II. The Architecture of Trust

Choosing Next.js 14 allowed for robust Server Actions and Route Handlers, essential for keeping API keys hidden from the client-side.

### A. The Bare-Bones UI (Design by Necessity)

Minimalism isn't just an aesthetic; it's a UX filter. Every extra button is a potential distraction.

\`\`\`ui_wireframe
(Trigger: UI Wireframe)
\`\`\`

The summary sits on top—not as a replacement for results, but as a bridge to them.

### B. High-Level System Design

\`\`\`architecture_diagram
(Trigger: Tech Architecture)
\`\`\`

The system operates on a "Parallel-to-Fusion" model. We don't wait for Google to finish before calling the AI; we fire both and let the frontend handle the race condition.

### C. RAG Pipeline: Grounded Generation

The flow: user types query → two parallel fetches → fuse on results page.

\`\`\`ui_flowchart
(Trigger: RAG Flowchart)
\`\`\`

1. **Retrieval**: Google CSE JSON API implementation.
2. **Constraint**: Using temperature-controlled (0.2) prompts to ensure facts over creativity.

---

## III. Failure Analysis: When RAG Slaps You Back

Hallucinations dropped significantly, but the remaining errors are instructive. The system struggled when AI tried to "synthesize" future predictions as current facts despite the retrieval data.

---

## IV. Technical Cleanup & Polish

SeekEngine leverages debouncing to manage API quotas and strict security headers for production safety. It is a small win against the noise—a reminder that we can build something that values truth.
`;

// --- Main Page Component ---

export default function SeekEngineResearch() {
  const MarkdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-10 mb-6 text-zinc-900 dark:text-white border-b pb-2 border-zinc-200 dark:border-zinc-800">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-900 dark:text-white uppercase tracking-wide">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-8 mb-3 text-zinc-800 dark:text-zinc-200">{children}</h3>,
    p: ({ children }: any) => <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 text-justify">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-zinc-700 dark:text-zinc-300 ml-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-2 mb-6 text-lg text-zinc-700 dark:text-zinc-300 ml-4">{children}</ol>,
    li: ({ children }: any) => <li className="pl-2">{children}</li>,
    code: ({ node, inline, className, children, ...props }: any) => {
      const childrenStr = String(children).toLowerCase();
      const codeType = className || "";
      
      if (codeType.includes('ui_flowchart') || childrenStr.includes('flowchart') || childrenStr.includes('rag')) {
        return <UIFlowchart />;
      }
      if (codeType.includes('ui_wireframe') || childrenStr.includes('wireframe')) {
        return <UIWireframe />;
      }
      if (codeType.includes('architecture_diagram') || childrenStr.includes('architecture')) {
        return <ArchitectureDiagram />;
      }

      return !inline ? (
        <div className="relative group my-6">
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
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-zinc-900 dark:text-zinc-100">
        
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
              <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-widest text-orange-600 uppercase bg-orange-50 dark:bg-orange-950/40 border border-orange-200/50 dark:border-orange-800/30 rounded-full">
                 Research Paper
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
                 SeekEngine: A Hybrid RAG Approach to Truthful Search
              </h1>
              
              <div className="flex flex-col items-center justify-center gap-4 text-zinc-600 dark:text-zinc-400 mb-8">
                 <div className="flex items-center gap-2">
                    <User size={18} className="text-zinc-400" />
                    <span className="font-bold text-zinc-900 dark:text-white text-lg">Gaurav Yadav</span>
                 </div>
                 <div className="text-sm max-w-sm text-center leading-relaxed">
                    BCA Cybersecurity, Ajeenkya DY Patil University, Pune <br/>
                    Independent Cybersecurity Researcher
                 </div>
                 <div className="flex items-center gap-6 mt-2">
                   <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar size={14} />
                      <span>January 01, 2026</span>
                   </div>
                   <Link href="mailto:gauravramyadav@gmail.com" className="flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium">
                      gauravramyadav@gmail.com
                   </Link>
                 </div>
              </div>

               {/* Links */}
               <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link href="https://seekengine.vercel.app" target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-lg shadow-blue-500/25 font-sans text-sm font-semibold">
                    <Globe size={16} /> Live Demo <ExternalLink size={12} />
                  </Link>
                  <Link href="https://github.com/archduke1337/SeekEngine" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-black text-white rounded-xl transition-all border border-zinc-800 font-sans text-sm font-semibold">
                    <Terminal size={16} /> Source Code <ExternalLink size={12} />
                  </Link>
               </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                   {["RAG", "Hybrid Search", "Next.js 14", "Cybersecurity"].map((tag) => (
                       <span key={tag} className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider rounded border border-zinc-200 dark:border-zinc-700">
                           {tag}
                       </span>
                   ))}
                </div>
           </header>

           <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

           {/* Paper Body */}
           <div className="prose prose-lg dark:prose-invert max-w-none prose-p:leading-relaxed">
              <ReactMarkdown components={MarkdownComponents}>
                 {content}
              </ReactMarkdown>
           </div>
           
           {/* BibTeX Citation Section */}
           <div className="mt-20 pt-10 border-t border-zinc-200 dark:border-zinc-800 font-sans">
              <p className="mb-4 font-bold uppercase tracking-widest text-xs text-zinc-500">Citation (BibTeX)</p>
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl font-mono text-xs overflow-x-auto border border-zinc-100 dark:border-zinc-800 shadow-sm">
                 <pre className="text-zinc-600 dark:text-zinc-400">
{`@article{yadav2026seekengine,
  title={SeekEngine: A Hybrid RAG Approach to Truthful Search},
  author={Yadav, Gaurav},
  year={2026},
  institution={Ajeenkya DY Patil University, Pune},
  url={https://seekengine.vercel.app}
}`}
                 </pre>
              </div>
           </div>

           {/* Footer Footer */}
           <div className="mt-16 pt-10 font-sans text-sm text-zinc-500 text-center border-t border-dashed border-zinc-200 dark:border-zinc-800">
              <p className="italic">
                "SeekEngine's my small win against the noise. It's not fancy, but it's mine."
              </p>
              <div className="mt-8 flex justify-center gap-6">
                 <Link href="https://github.com/archduke1337" className="hover:text-zinc-900 dark:hover:text-white transition-all transform hover:scale-110">GitHub</Link>
                 <Link href="https://linkedin.com/in/archduke1337" className="hover:text-zinc-900 dark:hover:text-white transition-all transform hover:scale-110">LinkedIn</Link>
                 <Link href="https://twitter.com/archduke1337" className="hover:text-zinc-900 dark:hover:text-white transition-all transform hover:scale-110">Twitter</Link>
              </div>
           </div>

        </article>
      </div>
    </main>
  );
}
