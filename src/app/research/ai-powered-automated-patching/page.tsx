'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, User, Shield, FileText, Download, Share2, Linkedin, Twitter, Bug, Cpu, RefreshCw, CheckCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function AIResearchPaper() {
  const content = `
## Abstract

The rapid advancement of vulnerability detection mechanisms—such as runtime sanitizers, fuzzing engines, and AI-assisted testing—has significantly improved the discovery of software defects. However, the remediation of these vulnerabilities remains predominantly manual, resulting in prolonged time-to-fix and accumulated security debt. This paper investigates the feasibility of integrating Large Language Models (LLMs) into an automated vulnerability remediation pipeline.

We present a structured analysis of an AI-powered patch generation framework, examine its effectiveness in addressing post-merge runtime vulnerabilities, and discuss the associated security risks, limitations, and future research directions. The findings suggest that LLM-assisted patching, when combined with rigorous validation and human oversight, can substantially improve remediation efficiency without compromising software security.

---

## Keywords

AI-assisted Security, Automated Patching, Vulnerability Remediation, Large Language Models, Secure Software Engineering

---

## I. Introduction

Modern software systems increasingly rely on automated tools to identify security vulnerabilities during development and post-deployment. Runtime sanitizers and dynamic analysis tools have proven effective in detecting elusive defects such as memory safety violations, data races, and temporal errors. Despite these advances, vulnerability remediation remains a human-intensive process.

This imbalance between detection scalability and remediation capacity introduces operational inefficiencies and increases exposure windows for exploitable flaws. Consequently, there is a growing need for automated systems capable of assisting developers in generating reliable vulnerability fixes.

This research explores the application of Large Language Models (LLMs) as a core component of an automated patch generation pipeline.

---

## II. Background and Motivation

### A. Limitations of Traditional Remediation Workflows

Conventional remediation workflows exhibit several limitations:
- High manual effort per vulnerability
- Long remediation queues for non-blocking bugs
- Increased likelihood of security debt accumulation
- Reduced engineering focus on high-impact security decisions

These limitations are exacerbated as detection systems continue to scale.

### B. Applicability of Large Language Models

LLMs demonstrate strong capabilities in:
- Understanding structured programming languages
- Recognizing recurring vulnerability patterns
- Producing syntactically and semantically valid code transformations

Given that many security fixes follow established remediation strategies, LLMs present a promising opportunity for automated or semi-automated patch generation.

---

## III. System Architecture

The proposed AI-powered patching framework follows a modular, human-in-the-loop design. Figure 1 illustrates the high-level architecture.

### Figure 1: AI-Powered Automated Patching Pipeline

\`\`\`mermaid
flowchart LR
    A[Vulnerability Detection<br/>(Sanitizers / Fuzzers)] --> B[Bug Isolation & Reproduction]
    B --> C[LLM-Based Patch Generation]
    C --> D[Automated Testing & Validation]
    D -->|Pass| E[Human Review & Approval]
    D -->|Fail| C
\`\`\`

<Callout type="info">
The architecture emphasizes iterative validation and human oversight to mitigate risks associated with AI-generated code.
</Callout>

---

## IV. Pipeline Components

### A. Vulnerability Detection

Runtime sanitizers and dynamic analysis tools identify vulnerabilities during execution. Crucial contextual information—such as stack traces and execution paths—is preserved to support downstream analysis.

### B. Bug Isolation and Context Reduction

Due to LLM context-length constraints, the vulnerable code must be isolated. This typically involves:

* Selecting the most relevant source file
* Extracting minimal yet sufficient code context
* Ensuring deterministic reproduction via automated tests

---

### C. Patch Generation Using LLMs

The isolated code and vulnerability metadata are provided to an LLM through structured prompts. Multiple candidate patches may be generated to improve success probability.

\`\`\`mermaid
sequenceDiagram
    participant LLM
    participant Repo as Codebase
    Repo->>LLM: Vulnerable Code + Error Context
    LLM-->>Repo: Candidate Patch A
    LLM-->>Repo: Candidate Patch B
    LLM-->>Repo: Candidate Patch C
\`\`\`

<Callout type="warning">
LLMs may generate syntactically valid but semantically unsafe patches. Automated testing alone is insufficient for final acceptance.
</Callout>

---

### D. Automated Validation

Generated patches undergo:

* Unit testing
* Regression testing
* Sanitizer re-execution

Only patches that pass all automated checks proceed to human review.

---

### E. Human Review and Secure Approval

Human reviewers perform final validation to detect:

* Security regressions
* Logic degradation
* Silent vulnerability masking

This step remains critical to maintaining trustworthiness in AI-assisted remediation workflows.

---

## V. Experimental Observations

Empirical evidence from industry-scale implementations indicates:

* Approximately 15% of sanitizer-detected vulnerabilities can be automatically fixed
* Highest success rates occur for:

  1. Uninitialized memory usage
  2. Data race conditions
  3. Buffer overflows
  4. Temporal memory errors

Despite the seemingly modest success rate, large-scale deployment yields substantial reductions in engineering effort.

---

## VI. Security Risks and Ethical Considerations

### A. Hallucinated or Misleading Fixes

LLMs may produce fixes that:

* Mask symptoms instead of resolving root causes
* Reduce concurrency to avoid race conditions
* Remove failing tests instead of correcting logic

### B. Automation Bias

Reviewers may exhibit increased trust in AI-generated patches, potentially reducing scrutiny. Explicit awareness and training are required to counteract this bias.

<Callout type="danger">
AI-generated patches must never bypass human security review, regardless of test outcomes.
</Callout>

---

## VII. Future Research Directions

Future enhancements may include:

* Multi-file and cross-module patch generation
* Integration with fuzzing and dependency scanning pipelines
* Fine-tuning LLMs on organization-specific secure coding patterns
* Formal verification-assisted validation stages

---

## VIII. Conclusion

AI-powered automated patching represents a significant evolution in secure software engineering. While incapable of replacing human judgment, LLM-assisted remediation can substantially reduce vulnerability backlogs and accelerate secure development lifecycles. When deployed with rigorous validation and human oversight, such systems offer a scalable and responsible approach to modern vulnerability management.

---

## Acknowledgment

This work is informed by publicly available industry research on AI-assisted vulnerability remediation, including a Google Security Engineering technical report on AI-powered patching .
All analysis, structuring, and interpretations presented herein are original and intended for academic and educational purposes.
`;

    const Flowchart = () => (
      <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-inner">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-3xl mx-auto overflow-x-auto pb-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 border border-orange-200 dark:border-orange-800">
              <Bug size={24} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tight text-center max-w-[100px]">Detection</span>
          </div>
          <div className="hidden md:block text-zinc-300 dark:text-zinc-700">→</div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 border border-blue-200 dark:border-blue-800">
              <Shield size={24} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tight text-center max-w-[100px]">Isolation</span>
          </div>
          <div className="hidden md:block text-zinc-300 dark:text-zinc-700">→</div>
          <div className="flex flex-col items-center gap-2 relative">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 border border-purple-200 dark:border-purple-800 animate-pulse">
              <Cpu size={24} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tight text-center max-w-[100px]">LLM Patch</span>
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-16 w-px border-l border-dashed border-zinc-300 dark:border-zinc-700 md:hidden"></div>
          </div>
          <div className="hidden md:block text-zinc-300 dark:text-zinc-700">→</div>
          <div className="flex flex-col items-center gap-2 relative">
            <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 border border-green-200 dark:border-green-800">
              <RefreshCw size={24} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tight text-center max-w-[100px]">Validation</span>
            <motion.div 
               animate={{ x: [0, -40, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="hidden md:block absolute -top-8 left-0 text-[10px] font-mono text-zinc-400"
            >
              (Fail: Retry)
            </motion.div>
          </div>
          <div className="hidden md:block text-zinc-300 dark:text-zinc-700">→</div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700">
              <CheckCircle size={24} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tight text-center max-w-[100px]">Approval</span>
          </div>
        </div>
        <div className="mt-8 text-center text-[10px] font-mono text-zinc-400 italic">
          Figure 1: Automated Vulnerability Remediation Pipeline Logic
        </div>
      </div>
    );

    const SequenceDiagram = () => (
      <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 font-mono text-xs">
        <div className="flex justify-around mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="flex flex-col items-center gap-2">
             <div className="px-4 py-2 bg-blue-600 text-white rounded-lg">CODEBASE</div>
             <div className="w-px h-[200px] bg-zinc-200 dark:bg-zinc-800"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
             <div className="px-4 py-2 bg-purple-600 text-white rounded-lg">LLM MODEL</div>
             <div className="w-px h-[200px] bg-zinc-200 dark:bg-zinc-800"></div>
          </div>
        </div>
        <div className="relative -top-[210px] space-y-8 max-w-md mx-auto">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="flex items-center gap-2"
           >
              <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700 relative">
                 <div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-zinc-400 rotate-45 transform"></div>
              </div>
              <span className="text-[10px] bg-white dark:bg-zinc-900 px-2 text-zinc-500">Vulnerable Context</span>
           </motion.div>
           <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-row-reverse items-center gap-2"
           >
              <div className="flex-1 h-px bg-blue-500/50 border-dashed border-t relative">
                 <div className="absolute left-0 -top-1 w-2 h-2 border-t border-l border-blue-400 -rotate-45 transform"></div>
              </div>
              <span className="text-[10px] bg-white dark:bg-zinc-900 px-2 text-blue-500 font-bold tracking-tight">Candidate Patch A</span>
           </motion.div>
           <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-row-reverse items-center gap-2"
           >
              <div className="flex-1 h-px bg-blue-500/50 border-dashed border-t relative">
                 <div className="absolute left-0 -top-1 w-2 h-2 border-t border-l border-blue-400 -rotate-45 transform"></div>
              </div>
              <span className="text-[10px] bg-white dark:bg-zinc-900 px-2 text-blue-500 font-bold tracking-tight">Candidate Patch B</span>
           </motion.div>
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
             if (childrenStr.includes('flowchart')) {
                return <Flowchart />;
             }
             if (childrenStr.includes('sequenceDiagram')) {
                return <SequenceDiagram />;
             }
             return (
                <code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-blue-700 dark:text-blue-400" {...props}>
                    {children}
                </code>
            )
        },
    };
    
    // Pre-processing MDX-like Callouts to standard Blockquotes for safe rendering
    const processedContent = content
        .replace(/<Callout type="info">/g, '> **INFO:** ')
        .replace(/<Callout type="warning">/g, '> **WARNING:** ')
        .replace(/<Callout type="danger">/g, '> **DANGER:** ')
        .replace(/<\/Callout>/g, '')
        .replace(/```mermaid/g, '\`\`\`mermaid\n');

  return (
    <main className="min-h-screen pt-24 pb-20 bg-white dark:bg-zinc-950 font-serif"> 
      {/* Using Serif font for Academic Paper feel */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Navigation & Actions */}
        <motion.div 
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="flex items-center justify-between mb-12 font-sans"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors">
            <ArrowLeft size={18} />
            <span className="font-medium">Back to Home</span>
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
              <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full">
                 Research Paper
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
                 AI-Powered Automated Patching for Software Vulnerabilities
              </h1>
              
              <div className="flex flex-col items-center justify-center gap-4 text-zinc-600 dark:text-zinc-400 mb-8">
                 <div className="flex items-center gap-2">
                    <User size={18} />
                    <span className="font-semibold text-zinc-900 dark:text-white">Gaurav Yadav</span>
                 </div>
                 <div className="text-sm">
                    BCA Cybersecurity, Ajeenkya DY Patil University, Pune
                 </div>
                 <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Calendar size={14} />
                    <span>January 04, 2026</span>
                 </div>
              </div>

               {/* Tags */}
               <div className="flex flex-wrap justify-center gap-2">
                  {["Cybersecurity", "AI", "Software Engineering", "Vulnerability Remediation"].map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs rounded border border-zinc-200 dark:border-zinc-700">
                          {tag}
                      </span>
                  ))}
               </div>
           </header>

           <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

           {/* Paper Body */}
           <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-sans prose-p:font-serif prose-p:leading-loose">
              <ReactMarkdown components={MarkdownComponents}>
                 {processedContent}
              </ReactMarkdown>
           </div>
           
           {/* References / Footer */}
           <div className="mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800 font-sans text-sm text-zinc-500">
              <p className="mb-4 font-bold uppercase tracking-wider text-zinc-900 dark:text-white">Citation (BibTeX)</p>
              <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                 @article&#123;yadav2026ai,<br/>
                 &nbsp;&nbsp;title=&#123;AI-Powered Automated Patching for Software Vulnerabilities&#125;,<br/>
                 &nbsp;&nbsp;author=&#123;Yadav, Gaurav&#125;,<br/>
                 &nbsp;&nbsp;year=&#123;2026&#125;,<br/>
                 &nbsp;&nbsp;institution=&#123;Ajeenkya DY Patil University&#125;<br/>
                 &#125;
              </div>
           </div>

        </article>
      </div>
    </main>
  );
}
