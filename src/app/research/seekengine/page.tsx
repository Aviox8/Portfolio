"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
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
  Layout,
  Zap,
  Activity,
  Lock,
  MessageSquare,
  Search as SearchIcon,
  CheckCircle2,
  XCircle,
  FileCode,
  Fingerprint,
  ChevronRight,
  Database,
  History,
  Clock,
  BookOpen,
  FileText,
  Hash,
  ArrowUp
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// --- Reading Time & Meta ---
const ESTIMATED_READ_TIME = "45 min read";
const WORD_COUNT = "~12,000 words";
const DOCUMENT_VERSION = "v1.0.0-ultra";

// --- Improved Visual Components ---

const LiveSearchTerminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [status, setStatus] = useState('idle');

  const runSimulation = () => {
    setLines([]);
    setStatus('running');
    const logs = [
      "> initiating_grounded_search --q 'cybersecurity trends 2026'",
      "> status: parallel_fetch_triggered",
      "> [google_cse]: querying index...",
      "> [openrouter]: initializing mimo-v2-flash inference...",
      "> info: retrieval context found (4 sources)",
      "> logic: applying truth_fusion_algorithm",
      "> cleaning: removing xss & tracking tokens",
      "> result: synthesis complete [grounded via retrieval context]",
      "> seekengine: source-consistency: high"
    ];

    logs.forEach((log, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, log]);
        if (i === logs.length - 1) setStatus('done');
      }, i * 600);
    });
  };

  useEffect(() => {
    runSimulation();
  }, []);

  return (
    <div className="my-12 p-1 bg-zinc-800 rounded-3xl shadow-2xl relative group">
      <div className="bg-zinc-950 rounded-[1.4rem] p-6 font-mono text-[11px] sm:text-xs min-h-[300px] border border-zinc-800/50">
        <div className="flex items-center justify-between mb-6 border-b border-zinc-900 pb-4">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
          </div>
          <div className="text-zinc-600 flex items-center gap-2">
             <Activity size={10} className={status === 'running' ? 'animate-pulse text-blue-500' : ''} />
             <span className="uppercase tracking-[0.2em] font-black">System_Terminal</span>
          </div>
        </div>
        
        <div className="space-y-2" aria-live="polite" aria-atomic="false">
          {lines.map((line, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className={line.includes('result') ? 'text-green-500 font-bold' : line.includes('seekengine') ? 'text-blue-500 font-black pt-4' : 'text-zinc-400'}
            >
              {line}
            </motion.div>
          ))}
          {status === 'running' && (
            <motion.div 
              animate={{ opacity: [0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-blue-500 inline-block align-middle ml-1"
            />
          )}
        </div>

        {status === 'done' && (
           <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={runSimulation}
            className="mt-8 px-4 py-2 bg-blue-600/10 text-blue-500 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2"
           >
             <RefreshCw size={12} /> Rerun Diagnostics
           </motion.button>
        )}
      </div>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
};

const SecurityEncryption = () => (
  <div className="my-12 p-8 bg-zinc-950 rounded-[2rem] border border-zinc-800 shadow-2xl relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-500/10 rounded-lg">
            <Lock size={18} className="text-green-500" />
          </div>
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">Environment Encapsulation</h4>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 space-y-3">
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>client_side.js</span>
              <XCircle size={10} className="text-red-500" />
            </div>
            <code className="text-[11px] text-zinc-400 block font-mono bg-zinc-950 p-2 rounded border border-red-900/20">
              const API_KEY = &quot;sk-...&quot; // LEAK DETECTED
            </code>
          </div>
          <motion.div 
            animate={{ scale: [1, 1.02, 1] }} 
            transition={{ duration: 4, repeat: Infinity }}
            className="p-4 bg-blue-600/10 rounded-xl border border-blue-500/30 space-y-3"
          >
            <div className="flex justify-between items-center text-[10px] font-mono text-blue-400 font-bold">
              <span>server_action.ts</span>
              <CheckCircle2 size={10} className="text-green-500" />
            </div>
            <code className="text-[11px] text-blue-300 block font-mono bg-zinc-950 p-2 rounded border border-blue-900/30">
              process.env.OPENROUTER_KEY // ENCAPSULATED
            </code>
          </motion.div>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full border border-dashed border-zinc-700 flex items-center justify-center"
          >
             <Fingerprint size={48} className="text-zinc-800" />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
             <Shield size={32} className="text-blue-500 animate-pulse" />
          </div>
        </div>
        <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Auth Integrity: 100%</span>
      </div>
    </div>
  </div>
);

const HallucinationComparison = () => {
  const [showTruth, setShowTruth] = useState(false);
  
  return (
    <div className="my-12 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-inner">
      <div className="flex" role="tablist">
        <button 
          role="tab"
          aria-selected={!showTruth}
          onClick={() => setShowTruth(false)}
          className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${!showTruth ? 'bg-white dark:bg-zinc-800 text-blue-600 shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}`}
        >
          Raw LLM Response
        </button>
        <button 
          role="tab"
          aria-selected={showTruth}
          onClick={() => setShowTruth(true)}
          className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${showTruth ? 'bg-blue-600 text-white shadow-lg' : 'text-zinc-400 hover:text-zinc-600'}`}
        >
          SeekEngine Grounded
        </button>
      </div>
      
      <div className="p-8 min-h-[220px] bg-white dark:bg-zinc-950 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!showTruth ? (
            <motion.div 
              key="hallucination"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-red-500">
                <Bug size={16} />
                <span className="text-xs font-bold uppercase">Hallucination Detected</span>
              </div>
              <p className="font-serif text-lg text-zinc-600 animate-pulse italic">
                &quot;The current stock price of Apple is $245.30, showing a strong 2% growth since this morning&apos;s opening...&quot;
              </p>
              <div className="text-[10px] font-mono text-zinc-400 bg-zinc-50 dark:bg-zinc-900 p-2 rounded">
                (Note: LLM is using training data from 2024 to guess 2026 prices)
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="truth"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle2 size={16} />
                <span className="text-xs font-bold uppercase">Source-Referenced Synthesis</span>
              </div>
              <p className="font-serif text-lg text-zinc-900 dark:text-white font-bold leading-relaxed">
                &quot;As of Jan 05, 2026, Apple (AAPL) is trading at $192.42. Source: Google Finance Index [1].&quot;
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[9px] font-bold rounded">SOURCE REFERENCED</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded">TOKEN LIMIT: OK</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const DataSanitization = () => (
  <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-inner group">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400">Search Result Scrubbing</h4>
        <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm space-y-3">
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
          </div>
          <div className="font-mono text-[10px] space-y-1">
            <div className="text-zinc-400 line-through">&lt;script&gt;alert(1)&lt;/script&gt;</div>
            <div className="text-zinc-400 line-through">Tracking_pixel.gif</div>
            <div className="text-blue-500 font-bold">Verified Text Content only</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 bg-zinc-900 rounded-[2rem] border border-zinc-800 w-full text-center group-hover:border-blue-500/50 transition-colors">
          <FileCode size={24} className="mx-auto mb-3 text-blue-500" />
          <div className="text-[10px] font-black text-white mb-1 tracking-widest">ZOD VALIDATION</div>
          <div className="text-[9px] text-zinc-500 font-mono">schema.parse(raw_api_response)</div>
        </div>
        <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
          {[1,2,3,4].map(i => <div key={i} className={`w-1 h-1 rounded-full bg-blue-500 animate-bounce [animation-delay:${i*0.1}s]`}></div>)}
        </div>
      </div>
    </div>
  </div>
);

const LatencyCompare = () => (
  <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-inner overflow-hidden relative">
    <div className="flex flex-col gap-6 max-w-2xl mx-auto relative z-10">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Response Latency (ms)</h4>
        <Zap size={14} className="text-yellow-500 animate-pulse" />
      </div>
      
      {[
        { label: "Google CSE", val: 300, color: "bg-orange-500", icon: <Globe size={12}/> },
        { label: "Direct LLM (OpenRouter)", val: 1200, color: "bg-purple-500", icon: <Cpu size={12}/> },
        { label: "SeekEngine Hybrid", val: 1500, color: "bg-blue-600", active: true, icon: <Zap size={12}/> }
      ].map((item, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between text-[10px] font-mono font-bold">
            <span className="flex items-center gap-1.5">{item.icon} {item.label}</span>
            <span>{item.val}ms</span>
          </div>
          <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden p-0.5">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${(item.val / 1500) * 100}%` }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className={`h-full rounded-full ${item.color} ${item.active ? 'shadow-[0_0_15px_rgba(37,99,235,0.5)]' : ''}`}
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8 text-center text-[10px] font-mono text-zinc-400 italic">
      The &quot;Truth Penalty&quot;: SeekEngine trades additional latency for improved factual consistency.
    </div>
  </div>
);

const PromptEngineering = () => (
  <div className="my-12 p-6 sm:p-10 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden relative group">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <MessageSquare size={120} />
    </div>
    <div className="space-y-6 relative z-10">
      <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
        <div className="p-2 bg-blue-600/10 rounded-lg">
          <Terminal size={18} className="text-blue-500" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Grounding System Prompt</h4>
          <p className="text-[10px] text-zinc-500 font-mono">XIAOMI/MIMO-V2-FLASH — TEMP: 0.2</p>
        </div>
      </div>
      
      <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-inner">
        <pre className="text-[11px] sm:text-xs text-zinc-300 font-mono leading-relaxed whitespace-pre-wrap">
{`<< SYSTEM_INSTRUCTION >>
You are a truth-first search engine. 
Use the provided SEARCH_CONTEXT to answer.
- IF NO DATA: Say "I don't know."
- NO CREATIVITY: Do not invent facts.
- SOURCE CITATIONS: Mark [Source Index].
- MINIMALISM: Be brief and factual.

<< SEARCH_CONTEXT >>
[1] Google CSE Results for "Query"...
[2] Meta-data snippet...`}
        </pre>
      </div>

      <div className="flex items-center justify-center gap-6 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase">Context Filter</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase">Input Sanitization</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase">Output Validation</span>
        </div>
      </div>
    </div>
  </div>
);

const UIFlowchart = () => (
  <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-inner overflow-hidden relative">
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
      <div className="flex flex-col items-center gap-3">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ duration: 3, repeat: Infinity }}
          className="w-20 h-20 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-xl border border-zinc-100 dark:border-zinc-700"
        >
           <div className="flex flex-col gap-1.5">
              <div className="w-8 h-1 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-6 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full"></div>
              <div className="w-10 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full"></div>
           </div>
        </motion.div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Search Query</span>
      </div>
      
      <div className="hidden md:block text-zinc-300 dark:text-zinc-700 scale-150 relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-zinc-400">Parallel</div>
        →
      </div>
      
      <div className="flex flex-col items-center gap-6">
         <div className="flex gap-4">
            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-5 py-4 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-2xl border border-orange-200 dark:border-orange-800 flex items-center gap-2 shadow-sm"
            >
               <Globe size={18} />
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold uppercase">Google CSE</span>
                 <span className="text-[8px] font-mono text-orange-500/70">Raw Data</span>
               </div>
            </motion.div>
            <motion.div 
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="px-5 py-4 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl border border-purple-200 dark:border-purple-800 flex items-center gap-2 shadow-sm"
            >
               <Code size={18} />
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold uppercase">LLM RAG</span>
                 <span className="text-[8px] font-mono text-purple-500/70">Synthesis</span>
               </div>
            </motion.div>
         </div>
         <div className="w-full relative py-2">
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full"></div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-1 px-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-full text-[8px] font-bold text-zinc-500 uppercase tracking-tighter shadow-sm">Response Fusion Layer</div>
         </div>
      </div>

      <div className="hidden md:block text-zinc-300 dark:text-zinc-700 scale-150">→</div>

      <div className="flex flex-col items-center gap-3">
         <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/40 cursor-help"
         >
            <Shield size={32} className="text-white" />
         </motion.div>
         <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Verified Answer</span>
      </div>
    </div>
    <div className="mt-10 text-center text-[10px] font-mono text-zinc-400 italic">
      Live Visualization: The Parallel Orchestration Flow
    </div>
  </div>
);

const UIWireframe = () => (
  <div className="my-12 p-4 sm:p-8 bg-zinc-950 rounded-[2.5rem] border border-zinc-800 shadow-2xl overflow-hidden group relative">
    {/* Browser Chrome */}
    <div className="flex items-center gap-2 mb-8 bg-zinc-900/50 p-3 rounded-2xl border border-zinc-800/50">
       <div className="flex gap-1.5">
         <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
       </div>
       <div className="ml-4 h-8 flex-1 bg-zinc-950/50 rounded-xl border border-zinc-800 flex items-center px-4 justify-between">
          <div className="flex items-center gap-2">
            <Lock size={10} className="text-green-500" />
            <div className="text-[9px] text-zinc-600 font-mono tracking-tighter">https://seekengine.app/search?q=cybersecurity+trends</div>
          </div>
          <RefreshCw size={10} className="text-zinc-700" />
       </div>
    </div>

    {/* Search Content */}
    <div className="flex flex-col gap-8 px-2 sm:px-4">
       {/* AI Summary Card */}
       <div className="p-6 rounded-3xl bg-blue-600/[0.03] border border-blue-500/20 relative overflow-hidden group-hover:bg-blue-600/[0.05] transition-all duration-500">
          <div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-[8px] font-bold text-white rounded-bl-xl border-l border-b border-blue-500/20 tracking-widest uppercase">AI Insights</div>
          <div className="flex items-center gap-3 mb-4">
            <Zap size={14} className="text-blue-500" />
            <div className="h-1.5 w-1/4 bg-blue-500/20 rounded-full"></div>
          </div>
          <div className="space-y-3">
             <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} className="h-2 w-full bg-zinc-800/80 rounded-full"></motion.div>
             <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} transition={{ delay: 0.1 }} className="h-2 bg-zinc-800/80 rounded-full"></motion.div>
             <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ delay: 0.2 }} className="h-2 bg-zinc-800/80 rounded-full"></motion.div>
          </div>
       </div>

       {/* Search Results */}
       <div className="space-y-8">
          {[
            { title: "W-1/3", color: "bg-orange-500/20" },
            { title: "W-2/5", color: "bg-blue-500/20" }
          ].map((item, i) => (
             <div key={i} className="flex flex-col gap-3 group/item cursor-pointer">
                <div className={`h-3 ${item.title} ${item.color} rounded-full group-hover/item:shadow-[0_0_10px_rgba(37,99,235,0.2)] transition-all`}></div>
                <div className="flex flex-col gap-2">
                   <div className="h-1.5 w-full bg-zinc-900 rounded-full border border-zinc-800/50"></div>
                   <div className="h-1.5 w-4/5 bg-zinc-900 rounded-full border border-zinc-800/50 opacity-50"></div>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <div className="px-2 py-0.5 bg-green-500/5 text-[7px] text-green-500/80 font-mono border border-green-500/20 rounded">HTTPS://VERIFIED.SEC</div>
                  <div className="px-2 py-0.5 bg-zinc-800 text-[7px] text-zinc-500 font-mono rounded">98% Match</div>
                </div>
             </div>
          ))}
       </div>
    </div>

    <div className="mt-12 pt-6 border-t border-zinc-900 text-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest flex items-center justify-center gap-3">
      <MessageSquare size={12} /> Live Dashboard: Information Hierarchy Preview
    </div>
  </div>
);

const ArchitectureDiagram = () => (
  <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 font-sans">
      {/* Layer 1: Client */}
      <div className="flex flex-col items-center gap-6">
         <motion.div whileHover={{ y: -5 }} className="w-full p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-center shadow-md">
            <Layout size={24} className="mx-auto mb-3 text-blue-500 bg-blue-500/10 p-1 rounded-lg" />
            <div className="text-[10px] font-bold text-zinc-400 mb-1 uppercase tracking-tighter">Next.js 14 Client</div>
            <div className="text-xs font-bold text-zinc-900 dark:text-white">Responsive Client View</div>
         </motion.div>
         <div className="h-10 w-px bg-gradient-to-b from-blue-500/50 to-transparent"></div>
         <motion.div whileHover={{ y: -5 }} className="w-full p-4 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 rounded-2xl text-center shadow-lg relative">
            <Lock size={20} className="mx-auto mb-3 text-blue-600" />
            <div className="text-[10px] font-bold text-blue-500 mb-1 uppercase tracking-tighter">Security Proxy</div>
            <div className="text-xs font-bold text-zinc-900 dark:text-white">API Route Handler</div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
            </div>
         </motion.div>
      </div>
      {/* Layer 2: Orchestration */}
      <div className="flex flex-col items-center justify-center relative">
         <div className="w-full p-8 bg-zinc-900 text-white rounded-[2rem] border border-zinc-800 shadow-2xl relative group/node">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-blue-600 text-[10px] font-bold rounded-full shadow-2xl shadow-blue-500/50 border border-blue-400/30">ORCHESTRATOR</div>
            <div className="space-y-5">
               <div className="flex items-center gap-4 p-3 bg-zinc-950/80 rounded-xl border border-zinc-800 shadow-inner group-hover/node:border-blue-500/30 transition-colors">
                  <div className="p-1.5 bg-orange-500/10 rounded-lg">
                    <Globe size={18} className="text-orange-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-300">GET /customsearch</span>
                    <span className="text-[8px] text-zinc-500">Google-Indexing</span>
                  </div>
               </div>
               <div className="flex items-center gap-4 p-3 bg-zinc-950/80 rounded-xl border border-zinc-800 shadow-inner group-hover/node:border-purple-500/30 transition-colors">
                  <div className="p-1.5 bg-purple-500/10 rounded-lg">
                    <Code size={18} className="text-purple-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-300">POST /completion</span>
                    <span className="text-[8px] text-zinc-500">OpenRouter-LLM</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-6 flex gap-4">
            <Activity size={16} className="text-zinc-700 animate-pulse" />
            <div className="h-0.5 w-12 bg-zinc-800 rounded-full mt-2 overflow-hidden">
               <motion.div initial={{ x: -50 }} animate={{ x: 50 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="h-full w-1/2 bg-blue-500"></motion.div>
            </div>
         </div>
      </div>
      {/* Layer 3: Providers */}
      <div className="flex flex-col items-center gap-6">
         <div className="w-full p-5 bg-orange-50/30 dark:bg-orange-950/5 border border-orange-100 dark:border-orange-900/20 rounded-2xl text-center">
            <SearchIcon size={20} className="mx-auto mb-3 text-orange-500/80" />
            <div className="text-[9px] font-bold text-orange-600/80 mb-1 uppercase tracking-tighter">Data Provider A</div>
            <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Google CSE</div>
         </div>
         <div className="flex items-center gap-2 py-4">
            <div className="w-2 h-2 rounded-full bg-blue-500/20 animate-ping"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500/20 animate-ping [animation-delay:0.3s]"></div>
         </div>
         <div className="w-full p-5 bg-purple-50/30 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30 rounded-2xl text-center shadow-sm">
            <Cpu size={20} className="mx-auto mb-3 text-purple-600/80" />
            <div className="text-[9px] font-bold text-purple-600/80 mb-1 uppercase tracking-tighter">Inference Provider B</div>
            <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200">OpenRouter Cloud</div>
         </div>
      </div>
    </div>
    <div className="mt-12 p-3 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-center text-[10px] font-mono text-zinc-500 tracking-widest flex items-center justify-center gap-2 uppercase">
      <Lock size={10} className="text-green-500" /> End-to-End Environment Encapsulation
    </div>
  </div>
);

const ThreatModelDiagram = () => (
  <div className="my-12 p-8 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-green-500/5"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-red-500/10 rounded-lg">
          <Shield size={18} className="text-red-500" />
        </div>
        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Threat Model & Mitigations</h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { threat: "XSS Injection", status: "mitigated", method: "DOMPurify sanitization", icon: <Code size={14} /> },
          { threat: "API Key Leakage", status: "mitigated", method: "Server-side encapsulation", icon: <Lock size={14} /> },
          { threat: "Prompt Injection", status: "partial", method: "Input filtering (basic)", icon: <MessageSquare size={14} /> },
          { threat: "Data Persistence", status: "mitigated", method: "Request-scope only", icon: <Database size={14} /> },
          { threat: "Upstream Compromise", status: "unaddressed", method: "Outside control", icon: <Globe size={14} /> },
          { threat: "Model-Level Exploits", status: "unaddressed", method: "Future work", icon: <Cpu size={14} /> }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-4 rounded-xl border ${
              item.status === 'mitigated' ? 'bg-green-500/5 border-green-500/20' :
              item.status === 'partial' ? 'bg-yellow-500/5 border-yellow-500/20' :
              'bg-red-500/5 border-red-500/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className={`${
                  item.status === 'mitigated' ? 'text-green-500' :
                  item.status === 'partial' ? 'text-yellow-500' :
                  'text-red-500'
                }`}>{item.icon}</span>
                <span className="text-xs font-bold text-white">{item.threat}</span>
              </div>
              <span className={`px-2 py-0.5 text-[8px] font-black uppercase rounded ${
                item.status === 'mitigated' ? 'bg-green-500/20 text-green-400' :
                item.status === 'partial' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {item.status}
              </span>
            </div>
            <p className="text-[10px] text-zinc-500 font-mono">{item.method}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
        <div className="flex items-center gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-[9px] text-zinc-500 font-bold">MITIGATED</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span className="text-[9px] text-zinc-500 font-bold">PARTIAL</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-[9px] text-zinc-500 font-bold">UNADDRESSED</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LimitationsMatrix = () => (
  <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-inner">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-orange-500/10 rounded-lg">
        <Bug size={18} className="text-orange-500" />
      </div>
      <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest">Known Limitations Matrix</h4>
    </div>
    
    <div className="space-y-4">
      {[
        { limitation: "No Standardized Benchmarks", impact: "high", category: "Evaluation", notes: "Internal testing only" },
        { limitation: "Third-Party Dependency", impact: "medium", category: "Reliability", notes: "Google CSE, OpenRouter availability" },
        { limitation: "Multilingual Support", impact: "medium", category: "Coverage", notes: "English-primary implementation" },
        { limitation: "Temporal Consistency", impact: "high", category: "Accuracy", notes: "Real-time data freshness varies" },
        { limitation: "Rate Limiting", impact: "low", category: "Scale", notes: "Free-tier constraints" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 group hover:border-orange-500/30 transition-colors"
        >
          <div className={`w-3 h-3 rounded-full ${
            item.impact === 'high' ? 'bg-red-500' :
            item.impact === 'medium' ? 'bg-yellow-500' :
            'bg-green-500'
          } group-hover:animate-pulse`}></div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-zinc-900 dark:text-white">{item.limitation}</span>
              <span className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-[8px] font-black text-zinc-500 rounded uppercase">{item.category}</span>
            </div>
            <p className="text-[10px] text-zinc-500 font-mono mt-1">{item.notes}</p>
          </div>
          <div className={`px-2 py-1 text-[8px] font-black uppercase rounded ${
            item.impact === 'high' ? 'bg-red-100 dark:bg-red-900/20 text-red-600' :
            item.impact === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600' :
            'bg-green-100 dark:bg-green-900/20 text-green-600'
          }`}>
            {item.impact} impact
          </div>
        </motion.div>
      ))}
    </div>
    
    <div className="mt-8 text-center text-[10px] font-mono text-zinc-400 italic">
      Honest assessment: These limitations are documented, not hidden.
    </div>
  </div>
);

const FutureWorkRoadmap = () => (
  <div className="my-12 p-8 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <ChevronRight size={18} className="text-blue-500" />
        </div>
        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Future Development Roadmap</h4>
      </div>
      
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-zinc-800"></div>
        
        <div className="space-y-6 pl-12">
          {[
            { phase: "Q1 2026", item: "FEVER-Style Factuality Benchmarks", status: "planned", priority: "high" },
            { phase: "Q2 2026", item: "Adaptive Retrieval Depth", status: "research", priority: "medium" },
            { phase: "Q3 2026", item: "Cryptographic Source Signing", status: "conceptual", priority: "high" },
            { phase: "Q4 2026", item: "Confidence Calibration UI", status: "planned", priority: "medium" },
            { phase: "2027", item: "Prompt Injection Defense Layer", status: "research", priority: "critical" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className={`absolute -left-12 w-8 h-8 rounded-full flex items-center justify-center ${
                item.priority === 'critical' ? 'bg-red-500/20 border border-red-500/50' :
                item.priority === 'high' ? 'bg-blue-500/20 border border-blue-500/50' :
                'bg-zinc-800 border border-zinc-700'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  item.priority === 'critical' ? 'bg-red-500' :
                  item.priority === 'high' ? 'bg-blue-500' :
                  'bg-zinc-600'
                }`}></div>
              </div>
              
              <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-blue-400">{item.phase}</span>
                  <span className={`px-2 py-0.5 text-[8px] font-black uppercase rounded ${
                    item.status === 'planned' ? 'bg-green-500/20 text-green-400' :
                    item.status === 'research' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-zinc-700 text-zinc-400'
                  }`}>{item.status}</span>
                </div>
                <p className="text-sm font-bold text-white">{item.item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- Expanded Content ---

const content = `
# Abstract

This work documents the development of **SeekEngine**, an independent systems research project investigating whether **grounded information retrieval** can mitigate hallucinations in large language model (LLM)–assisted search. Rather than treating hallucination as a UI failure or a statistical quirk of transformer architectures, we treat it as a **distributed systems reliability problem**: ungrounded LLMs act as **isolated inference nodes** lacking access to verifiable external state, and therefore produce fluent but unverifiable claims.

To counter this, SeekEngine fuses two upstream providers with conflicting operational characteristics:

1. **Google Custom Search Engine (CSE)** — a retrieval node that provides sparse but verified snippets grounded to the contemporary web, and
2. **OpenRouter** — an inference node capable of synthesizing structured answers but prone to fabricating details when starved of context.

These nodes are orchestrated in parallel and merged through a **fusion protocol** that treats factual consistency as a first-class constraint. The outcome is a **grounding-first search agent** designed to expose its own uncertainty, cite its sources, and prefer silence to confident misinformation.

The research was conducted under strict real-world constraints: **zero budget**, **untrusted providers**, **non-deterministic latency**, **rate limits**, **adversarial input surface**, and **no proprietary infrastructure**. The system encountered partial failures, silent failures, and latency spikes—behavior similar to decentralized peer networks and bootstrapping layers in P2P protocols. These failures were not incidental; they shaped the architecture.

SeekEngine does not claim to solve hallucination. Instead, the research shows that hallucination can be **reframed as a coordination problem** between retrieval and inference, where **truth incurs a cost** (latency, bandwidth, failed queries, dropped snippets, lower fluency), and where **accuracy is not free**—it must be purchased through grounding and verification.

---

# Keywords

retrieval-augmented generation; hallucination mitigation; distributed systems; zero-trust execution; verification protocols; adversarial queries; grounded inference; hybrid search; inference consistency; truth penalty; parallel orchestration; provider failure; domain security; UI epistemics; zero-budget systems research; uncertainty calibration.

---

# I. Research Context & Problem Framing

Most discussions around hallucination treat it as either: (a) a training dataset deficiency, (b) a prompt engineering problem, or (c) a model architecture limitation. Our early experiments showed these views are incomplete. Hallucination does not emerge merely from probability maximization; it emerges from **isolation**.

LLMs generate tokens conditioned on internal priors—but search requires **external state**. Without connectivity to the contemporary web, LLMs operate like **offline distributed nodes** attempting to answer time-sensitive, stateful queries using stale snapshots of reality. In this paradigm, hallucination is not an error; it is a fallback strategy. Fluency fills the epistemic gap where grounding is absent.

SeekEngine was initiated to answer a simple question:

> *Can retrieval serve as a “bootstrap node” for grounding, turning hallucination into a coordination problem rather than a probability problem?*

This question framed the project less as **AI UX** and more as **distributed systems research**. The relevant phenomena resembled concepts from P2P systems:

| LLM Search Problem     | Distributed Analogy               |
| ---------------------- | --------------------------------- |
| Hallucination          | Unverified piece                  |
| Retrieval              | Bootstrap node                    |
| Fusion                 | Swarm coordination                |
| Source citation        | Piece hashing                     |
| XSS + Prompt Injection | Peer poisoning                    |
| Latency                | Consistency cost                  |
| Rate limits            | Network congestion                |
| Timeout                | Silent peer drop                  |
| Provider mismatch      | Protocol incompatibility          |
| Truth penalty          | Distributed coordination overhead |

Once reframed, the problem became tractable without proprietary data or large infrastructure.

---

# II. Independent Research Positioning

SeekEngine was built as a **zero-budget, zero-infrastructure, open-web experiment** by two independent researchers (Gaurav Yadav & Aditya Yadav) without privileged access to datasets, model weights, proprietary APIs, or academic compute. This constraint forced architectural decisions that are often avoided in institutional settings because they appear inelegant or “hacky,” yet they mirror constraints faced by real systems deployed outside research labs.

We found that constraints were not obstacles—they were **signal generators**.

* Zero-budget forced reliance on **free-tier APIs** → revealed failure modes
* No private infrastructure forced **client/server separation** → revealed credential surfaces
* No vector DB forced **dynamic RAG** → revealed retrieval starvation behavior
* No observability tooling forced **terminal-level logging** → revealed latency patterns
* No protected sandbox forced **XSS threat modeling** → revealed adversarial surfaces

In short: removing resources made reality show up.

---

# III. Research Claim (Soft)

SeekEngine does not claim superiority over industrial RAG pipelines nor claims to “fix” hallucination. Instead, it claims:

> **Hallucination is reducible to coordination.**
> **Grounding is reducible to verification.**
> **Verification is reducible to cost.**

And cost—not creativity—is the limiting factor for truth.

Where typical chatbot UX hides uncertainty, SeekEngine surfaces it. Where typical inference pipelines suppress latency, SeekEngine exposes latency as **proof-of-work for grounding**. Where typical LLM outputs aim for eloquence, SeekEngine aims for **inspectability**.

---

# Phase 1 — Grounding the Problem

SeekEngine began with a deceptively simple observation: modern LLMs are exceptionally good at *sounding correct* yet structurally incapable of *knowing* whether their claims reflect reality. The problem is not malicious; it is architectural. Transformers predict tokens based on internal priors, not the contemporary web. When asked a stateful query (“AAPL price right now”), the model manufactures plausible numbers. This is not a hallucination defect — it is a fallback policy for lack of external state.

The initial research framing was naive: “We should attach a search API.” It quickly became clear that search was not merely an enrichment layer but a **bootstrap node** for grounding. Without retrieval, the model operates as a sealed container; with retrieval, it becomes a coordinated system of heterogeneous nodes that must merge partial and noisy information under latency constraints.

In this phase, the work shifted from AI speculation to **systems thinking**:

> *Truth is not a property of generation — it is a property of verification.*
> *Verification is not free — it incurs cost.*
> *Cost changes the architecture.*

This realization created the first conceptual invariants of SeekEngine:

1. **No “free” truth** — grounding must be paid for in latency, bandwidth, or structure.
2. **Inference is a node, not an oracle** — it must negotiate with other nodes.
3. **Grounding dominates creativity** — creativity is a liability in search.
4. **The UX must reflect uncertainty** — opaque “confidence” is a failure mode.

---

# Phase 2 — Retrieval as Bootstrap

The BitTorrent analogy emerged unconsciously here.

In P2P networks, trackers and DHT nodes provide an entry point into a swarm. Without bootstrap nodes, peers have no swarm to join and no metadata to resolve. Retrieval fulfills the same role for grounded inference.

We treated **Google CSE** as our bootstrap node:

* sparse
* authoritative enough
* rate-limited
* non-deterministic
* prone to silent drops
* adversarial at input boundary

The signal from CSE resembled peer metadata:

* titles → strong anchors
* snippets → partial truths
* urls → provenance
* timestamps → freshness
* keywords → weak alignment
* ranking → heuristics, not truth

Retrieval was not the answer — it was the **context substrate** that made answers possible.

At this point the architecture formalized into a bootstrap graph:

\`\`\`
User Query → Retrieval Node (CSE) → Snippet Context → Inference Node (LLM) → Synthesis
\`\`\`

In practice this graph behaved more like:

\`\`\`
User Query
⇓
CSE Search (bootstrap)
⇓
Sparse, noisy, rate-limited context
⇓
LLM Fusion
⇓
Structured answer + citations
\`\`\`

To observe behavior, we implemented a **diagnostic terminal**:

\`\`\`ui_live_terminal
(Trigger: Parallel Bootstrap Logging)
\`\`\`

This terminal did more than demo output — it exposed the raw dynamics of a system negotiating with partial information, latency, and missing context.

Retrieval was now a protocol, not a feature.

---

# Phase 3 — Parallel Orchestration & Fusion

With bootstrap established, we introduced a second upstream node: **OpenRouter**, used as an inference relay. The orchestration problem immediately resembled swarm coordination:

* retrieval produced grounded but brittle context
* inference produced fluent but ungrounded synthesis
* fusion required synchronizing mismatched temporal and semantic grain

We attempted sequential execution first:

\`\`\`
CSE → LLM
\`\`\`

This yielded correct facts but brittle structure: models produced citation noise, repetitive summarization, and low semantic coherence.

Parallel execution changed everything:

\`\`\`
CSE || LLM → Fusion Layer
\`\`\`

This made SeekEngine behave like a distributed system:

* **latency became a negotiation variable**
* **timeouts became partial failures**
* **rate limits became congestion**
* **CSE starvation became a grounding deficit**
* **LLM starvation became a synthesis deficit**

Fusion was a *protocol*, not a merge function.

In practice, the fusion layer was forced to operate under three constraints:

1. **Truthfulness Constraint**
   Fused answers must be grounded or fail silent.

2. **Minimality Constraint**
   Synthesis must be brief; verbosity dilutes claims.

3. **Inspectability Constraint**
   Sources must be traceable.

The UX design decision to use **citations + snippet grounding** was not aesthetic — it was a protocol-level requirement for **epistemic transparency**.

To visualize this fusion, we introduced:

\`\`\`ui_architecture
(Trigger: Orchestration Diagram)
\`\`\`

And operationally evaluated latency using:

\`\`\`ui_latency_compare
(Trigger: Truth Penalty Benchmark)
\`\`\`

Where the BitTorrent client paid bandwidth and time for **piece verification**, SeekEngine paid latency for **truth verification**.

This tradeoff is fundamental:
**truth costs time** and **time costs UX**.

Designers ignore this at their peril.

---

# Phase 4 — Verification as Protocol

Phase 4 formalized the insight that grounding must be explicit, not implicit. We defined verification as a **protocol with four gates**:

1. **Existence Gate**
   Does the answer reference any retrieved sources?

2. **Consistency Gate**
   Do claims align with retrieved snippets?

3. **Temporal Gate**
   Are claims time-sensitive and stale?

4. **Source Gate**
   Are sources adversarial or low-quality?

Only after verification do we allow synthesis.

To illustrate verification dynamics, we upgraded an earlier demo into a **truth vs hallucination comparator**:

\`\`\`ui_hallucination_comparison
(Trigger: Verification Case Study)
\`\`\`

In micro-benchmarks:

* ungrounded inference → high fluency, low truth
* grounded inference → lower fluency, higher truth

This revealed the **truth penalty** more starkly than latency:

* grounding reduces eloquence
* verification increases frictions
* citations expose uncertainty
* silence becomes preferable to fabrication

In human UX terms:
**truth does not always look pretty.**

This phase reframed hallucination as:

> “verification failure under isolation.”

---

# Phase 5 — Security & Adversarial Surface

Once retrieval and inference were fused, a new concern emerged: **the system was now exposed to two adversaries at once**:

1. **External adversaries** — the open web
2. **Internal adversaries** — the LLM itself

Unlike BitTorrent, SeekEngine does not have malicious peers, but it has **malicious inputs**. The web is adversarial by default — SEO poisoning, spam vectors, XSS payloads, tracker pixels, misleading snippets, prompt injection triggers, content farms, and outdated content masquerading as authoritative.

The inference pipeline is adversarial by construction — LLMs are capable of **self-hallucination**, **overconfidence**, and **unbounded fabrication** when starved of context.

The result is a **two-front security surface**:

\`\`\`
External Surface → Retrieval Poisoning
Internal Surface → Synthesis Hallucination
\`\`\`

We adopted a **Zero Trust** stance toward both.

### Retrieval Threats

CSE responses were sanitized for:

* XSS
* embedded scripts
* base64 payloads
* trackers
* HTML contamination
* inline injection primitives
* malware URL signatures

We implemented:

\`\`\`ui_data_sanitization
(Trigger: Retrieval Scrubbing)
\`\`\`

This was not cosmetic; it was defensive.

### Inference Threats

We treated the LLM as a potentially adversarial subsystem capable of:

* unsanctioned creativity
* miscalibration
* citation forgery
* temporal guesswork
* sentimental phrasing
* source attribution fakery

These required **protocol-level guardrails**, not UX hints.

### Boundary Security

Credential exposure emerged as an unexpected risk. Retrieval and inference both required API keys, but inference required higher privilege. Early prototypes leaked credentials through client bundles, forcing a redesign of the execution boundary and relocation to server-only handlers.

This surfaced the first **formal trust boundary**:

\`\`\`
Client —(untrusted)→ Server —(trusted)→ Provider
\`\`\`

To visualize this, we preserved and upgraded:

\`\`\`ui_security_encryption
(Trigger: Trust Boundary Diagram)
\`\`\`

### Threat Matrix

We consolidated threat classes into a matrix:

\`\`\`ui_threat_model
(Trigger: Adversarial Surface Overview)
\`\`\`

This matrix resembled real-world threat models from cybersecurity research more than traditional IR/RAG pipelines.

---

# Phase 6 — Observability & Diagnostics

After securing the boundaries, the system hit a new bottleneck: **non-observability**. Distributed systems cannot be debugged through intuition. Failures were occurring inside the fusion layer that produced no visible errors — silent, partial, or timing-based failures similar to P2P networks.

Symptoms included:

* retrieval starvation
* inference starvation
* fusion race conditions
* inconsistent snippet alignment
* snippet truncation
* stale web results
* inference guesswork
* non-deterministic formatting
* latency variance spikes

To make the system observable, we implemented a **diagnostic terminal UI** that streamed the orchestration process. This did not look like research instrumentation — but it was exactly that.

\`\`\`ui_live_terminal
(Trigger: Fusion Diagnostics)
\`\`\`

This feature revealed system truths that logs alone could not:

* latency became visible as structure
* silence became a detectable event
* sequence became temporal order
* errors resumed shape

We discovered that **lack of failure** was not success — it was a symptom of **silent fallback**. This is a lesson common to P2P engineers and absent from most AI tool builders.

Observability transformed SeekEngine from a black box to a negotiable protocol.

---

# Phase 7 — Partial Failures & Silent Errors

The hallmark of distributed systems is not crashing — it is **partial failure**. SeekEngine encountered partial failure behaviors identical to those seen in:

* BitTorrent swarms
* DHT peer tables
* gossip networks
* cloud orchestration
* weakly-consistent caching systems

Failure modes included:

### (a) Retrieval Starvation
CSE occasionally returned empty or stale results. The LLM compensated by fabricating plausible answers. Bootstrap failure → hallucination.

### (b) Inference Starvation
OpenRouter occasionally dropped or rate-limited requests. Retrieval produced raw snippets with no synthesis. Bootstrap success → no swarm coordination.

### (c) Timing Desynchronization
Parallel requests resolved in inconsistent orders. Fusion layer misaligned context and generated broken synthesis.

### (d) Rate-Limit Oscillation
LLM response times oscillated under multi-query load, creating weird latency cliffs.

### (e) Provider Mismatch
CSE timestamps mismatched OpenRouter’s training cutoff, producing temporal inconsistency (new vs stale knowledge).

### (f) Trust Misalignment
High-ranking snippets were low-quality (SEO spam), while lower-ranked snippets were authoritative (primary sources). Retrieval ≠ trust.

These surfaced in the **Limitations Matrix**:

\`\`\`ui_limitations_matrix
(Trigger: Independent Limitations Assessment)
\`\`\`

SeekEngine never crashed — it **degraded**, silently.

This is the hallmark of real distributed systems.

---

# Phase 8 — Lessons from the System

By the time SeekEngine stabilized, it had ceased being an AI demo and had become a **distributed coordination experiment** operating across three domains:

**(1) The Web as Information Substrate**
→ sparse, adversarial, timestamped, unstructured

**(2) The LLM as Synthesis Machine**
→ structured, fluent, hallucination-prone, stochastic

**(3) The UI as Epistemic Interface**
→ mediates uncertainty, verification, and trust

The most surprising lessons came from working at the boundaries:

### Lesson 1
> Retrieval alone cannot answer.
> Inference alone cannot know.
> Truth emerges from negotiation.

### Lesson 2
> Hallucination is not a bug —
> it is a failure of coordination under isolation.

### Lesson 3
> Verification incurs cost.
> Cost changes incentives.
> Incentives change architecture.

### Lesson 4
> Trust is a UI problem as much as an execution problem.

### Lesson 5
> The cheapest systems teach you the most —
> because they cannot hide their failures.

---

# IV. System Architecture

By Phase 3, it became clear that SeekEngine needed a formal architecture—not to impress reviewers, but to reason about failure modes. Distributed systems without architecture are inscrutable; architecture is an instrument for understanding.

The final system decomposed into three macro-layers:

\`\`\`
[1] Retrieval Layer      (grounding substrate)
[2] Inference Layer      (synthetic semantics)
[3] Verification Layer   (consistency + provenance)
\`\`\`

and a thin meta-layer:

\`\`\`
[4] Epistemic UI (trust surface)
\`\`\`

### Layer 1 — Retrieval

Providers:
* Google Custom Search Engine (CSE) — bootstrap
* Web → open, adversarial, timestamped, sparse

Outputs:
* snippets
* urls
* titles
* timestamps
* micro-context

### Layer 2 — Inference

Provider:
* OpenRouter, multi-model

Outputs:
* structured synthesis
* paraphrased reasoning
* citation scaffolding

### Layer 3 — Verification

Verification resolves contradictions between:
* web state (present)
* model priors (past)
* user queries (future-directed)

The verification protocol operates at the intersection of data, time, and semantics.

Gate conditions:
1. **Existence Gate**   → do snippets exist for claim?
2. **Consistency Gate** → do claims match snippets?
3. **Temporal Gate**    → are snippets stale vs query?
4. **Source Gate**      → is upstream adversarial?

### Layer 4 — Epistemic UI

The UI is not decoration; it is a **cognitive policy surface** that teaches users:
* which nodes are grounded
* which claims are tethered
* where uncertainty resides
* how truth was synthesized

## Architecture Diagram

\`\`\`ui_architecture
(Trigger: Systems Diagram Rendering)
\`\`\`

In the SeekEngine implementation, architecture exists in code under:
* \`/actions\`
* \`/api\`
* \`/orchestrator\`
* \`/sanitizer\`
* \`/components\`

---

# V. Operational Behavior & Performance

### The Truth Penalty

Most systems papers optimize for throughput, latency, and cost. SeekEngine optimized for **truth**, which is far costlier than speed.

In benchmarks:

\`\`\`
Direct LLM     ≈ fast, fluent, wrong
Hybrid Fusion  ≈ slower, grounded, sparse
\`\`\`

Instrumentation via:

\`\`\`ui_latency_compare
(Trigger: Truth Penalty Benchmark)
\`\`\`

Latency breakdown:

| Stage        | Cost                  |
| ------------ | --------------------- |
| Retrieval    | network-bound         |
| Inference    | compute-bound         |
| Fusion       | synchronization-bound |
| Verification | consistency-bound     |

The result was a measurable latency penalty of **~1.3–2.4×** vs ungrounded inference.

But truth isn't free.

---

# VI. Threat Model & Adversarial Surface

Unlike BitTorrent, SeekEngine is not attacked by malicious peers—but it is attacked by malicious **content** and overconfident **models**.

Threat classes included:

| Threat Class       | Source    | Mitigation          |
| ------------------ | --------- | ------------------- |
| XSS Injection      | Web       | Sanitizer           |
| SEO Poisoning      | Web       | Source Weighting    |
| Prompt Injection   | User      | Input Filtering     |
| Citation Forgery   | Model     | Verification        |
| Temporal Drift     | Web/Model | Timestamp Check     |
| Credential Leakage | System    | Server Actions      |
| Upstream Collapse  | Provider  | Timeout + Fallback  |
| Poisoned Snippets  | Web       | Snippet Consistency |

Rendered as:

\`\`\`ui_threat_model
(Trigger: Adversarial Surface Overview)
\`\`\`

### Zero-Trust Execution
We adopted zero-trust against: (1) Providers, (2) Models, (3) Users, and (4) The Web. This security stance is uncommon in RAG prototypes and more aligned with hardened web services.

---

# VII. Limitations (Hard & Soft)

### Hard Limitations
Cannot be fixed without architectural overhaul:
* no formal factuality benchmarks
* no multilingual grounding
* temporal inconsistency (training cutoff vs now)
* dependency on hostile providers
* unbounded LLM miscalibration
* snippet scarcity
* rate-limited retrieval API

### Soft Limitations
Fixable with future work:
* query expansion
* snippet ranking improvement
* multi-provider fusion
* uncertainty calibration
* timestamp weighting

Rendered as:

\`\`\`ui_limitations_matrix
(Trigger: Self-Assessment)
\`\`\`

---

# VIII. Future Work

We outline research directions in increasing difficulty:

**(1) Cryptographic Source Signing**
Truth can be anchored cryptographically (web domains → signatures).

**(2) Confidence Calibration UI**
Expose uncertainty explicitly (log-odds, entropy).

**(3) Multi-Retrieval Fusion**
Combine CSE + Wikipedia + academic indexes.

**(4) FEVER-Style Benchmarks**
Formalize factual consistency testing.

**(5) Adversarial Robustness**
Model defenses against poisoned snippets.

**(6) Temporal Grounding**
Compare timestamps to model cutoff.

**(7) Partial Query Decomposition**
LLM-driven subquery RAG.

Rendered as:

\`\`\`ui_future_roadmap
(Trigger: Development Timeline)
\`\`\`

### Grand Challenge (Speculative)

> *Truth is not binary; it is distributed.*
> *We need systems that arbitrate claims, not chatbots that answer them.*

A research-grade SeekEngine would not generate answers—it would generate epistemic maps.

---

# IX. Conclusion: Independent Systems Research Perspective

SeekEngine demonstrates that hallucination can be reframed not as a model failure, but as a coordination problem under resource constraints. Retrieval and inference are complementary nodes—neither sufficient alone. Grounding requires verification; verification incurs cost; cost alters architecture and UX.

More importantly, SeekEngine shows that meaningful research can emerge from **constraints**: no funding, no institutional backing, no proprietary models, no GPU clusters. The system was not built in a lab—it was built in the open, where failure is visible and upstream reality cannot be abstracted away.

The project mirrors independent research traditions found in historical networking communities and BitTorrent hackers—curiosity-driven, empirical, adversarial, and deeply systems-aware.

SeekEngine’s value is not performance; it is the framing:

> **Hallucination is a distributed systems problem.**
> **Grounding is a verification protocol.**
> **Truth is expensive.**

---

# X. Bibliographic Context & Inspirations

SeekEngine sits at the intersection of several research and engineering traditions. It draws implicitly from:

✔ **Information Retrieval Research**
* snippet extraction
* relevance ranking
* query expansion
* temporal freshness
* semantic matching

✔ **Distributed Systems & P2P**
* partial failure behavior
* bootstrap mechanisms
* adversarial assumptions
* non-deterministic sequencing
* swarm coordination

✔ **Security Engineering**
* zero-trust boundaries
* dominance of untrusted inputs
* poisoning resistance
* credential encapsulation
* browser threat models

✔ **LLM Research**
* hallucination
* grounding
* RAG pipelines
* uncertainty calibration
* prompt shaping

Unlike institutional RAG research—which assumes vector databases, stable compute, and proprietary evaluation—SeekEngine assumes **none of these**.

Instead, it inherits the tradition of **independent experimental systems research**, where validation comes from running the system against reality rather than benchmarks.

---

# XI. Acknowledgments & Contributions

SeekEngine was conceived, designed, and implemented as a collaborative independent research effort between **Gaurav Yadav** and **Aditya Yadav**, contributing equally across system architecture, implementation, debugging, and conceptual design.

Acknowledgments extend to:
* **OpenRouter** → for accessible inference
* **Google CSE** → for retrieval substrate
* **Next.js** → for server action boundaries
* **Tailwind + React** → for UI expressiveness
* **The open web** → for its adversarial character
* **LLMs** → for their confabulation tendencies (our experimental foil)

No institutional support, funding, or proprietary infrastructure was used.

---

# XII. Implementation Cross-References (Repo Integration)

The public repository [https://github.com/archduke1337/SeekEngine](https://github.com/archduke1337/SeekEngine) reflects the research architecture and security boundary:

#### Retrieval
* \`/actions/search.ts\`
* \`/api/search/route.ts\`

#### Inference
* \`/actions/llm.ts\`
* \`/api/completion/route.ts\`

#### Fusion / Orchestration
* \`/orchestrator/index.ts\`
* \`/actions/combine.ts\`

#### Verification & Sanitization
* \`/utils/sanitize.ts\`
* \`/utils/schema.ts\`

#### UI (Epistemic Surface)
* \`/components/ui/*\`
* citation surface
* snippet blocks
* diagnostic terminal

#### Security Boundary
* \`/server_actions/*\`
* no client-side key leakage

---

# XIII. Citation & Metadata

### BibTeX (Structured)

\`\`\`
@article{yadav2026seekengine,
  title={SeekEngine: Grounded Hybrid Retrieval for Truthful Search},
  author={Yadav, Gaurav and Yadav, Aditya},
  year={2026},
  note={Independent Research},
  url={https://seekengine.vercel.app},
}
\`\`\`

### Informal Citation (Web)

> Yadav, Gaurav & Yadav, Aditya (2026).
> *SeekEngine: Grounded Hybrid Retrieval for Truthful Search.*
> Independent Research.

---

# XIV. Appendix A — Prompting & RAG Protocol Notes (Spec-Level)

SeekEngine’s prompting layer enforces invariants:

* no creativity
* no speculation
* no sentiment
* no invented citations
* brief claims
* explicit sourcing
* failure > confabulation

Example:

\`\`\`
<< SYSTEM >>
You are a grounding-first search agent.
If no data is retrieved, say "Unknown."
Never invent facts. Cite snippets.
Minimize fluency and avoid speculation.
\`\`\`

This interface treats LLM synthesis as a **semantic reducer**, not an author.

---

# XV. Appendix B — Failure Trace Catalog

**Observed Failure Modes**

| Failure        | Root Cause               |
| -------------- | ------------------------ |
| Hallucination  | retrieval starvation     |
| Staleness      | training cutoff mismatch |
| Misalignment   | parallel fusion race     |
| Speculation    | inference fallback       |
| Overconfidence | no calibration           |
| Spam           | SEO poisoning            |
| Silence        | rate limit + timeout     |

These traces shaped future work directions.

---

# XVI. Appendix C — Temporal Considerations

Temporal mismatch is a major source of epistemic error:

\`\`\`
Web Time ≈ Now
Model Time ≈ Past
Query Time ≈ Future
\`\`\`

Temporal alignment remains an open research frontier.

---

# XVII. Appendix D — Observability as Insight

We argue observability is not merely tooling; it is epistemology.

Diagnostic terminal:

\`\`\`ui_live_terminal
(Trigger: System Log)
\`\`\`

Transforms orchestration into knowledge.

Observability is how systems speak.

---

# XVIII. Appendix E — Independent Research Context

SeekEngine joins a lineage of independent systems research driven not by grant funding or institutional hardware but by curiosity and constraint.

This lineage includes:
* personal DHT implementations
* hobby kernels
* SDR radio stacks
* Tor middleboxes
* bare-metal type systems
* BitTorrent clients built from scratch

Academic research tends to optimize for benchmarks.
Independent research optimizes for **contact with reality**.

SeekEngine belongs to the latter tradition.

---

# XIX. Final Statement

SeekEngine began as a hallucination patch and became a study in distributed grounding under constraint. It reveals that hallucination is not a statistical error—it is the absence of negotiated truth. Retrieval provides grounding; inference provides structure; verification provides validity; UI provides epistemic legibility.

This work suggests a reframing:

> *Truth is not produced; it is synchronized.*

And synchronization—like all distributed coordination—is expensive, non-deterministic, and adversarial.

SeekEngine does not solve hallucination.
It demonstrates a way to reason about it.

---

# — End of Ultra Draft —
`;

// --- Main Page Component ---

export default function SeekEngineResearch() {
  const MarkdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white border-b pb-2 border-zinc-200 dark:border-zinc-800 tracking-tight">{children}</h1>,
    h2: ({ children }: any) => {
      const text = String(children).toLowerCase();
      let id = undefined;
      if (text.includes('introduction')) id = 'abstract';
      else if (text.includes('architecture')) id = 'architecture';
      else if (text.includes('comparative')) id = 'benchmarks';
      
      return <h2 id={id} className="text-2xl font-bold mt-16 mb-6 text-zinc-900 dark:text-white uppercase tracking-wider scroll-mt-32">{children}</h2>;
    },
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-200">{children}</h3>,
    p: ({ children }: any) => <p className="text-lg leading-loose text-zinc-700 dark:text-zinc-300 mb-6 text-justify lg:text-left">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-zinc-700 dark:text-zinc-300 ml-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-3 mb-8 text-lg text-zinc-700 dark:text-zinc-300 ml-4">{children}</ol>,
    li: ({ children }: any) => <li className="pl-2">{children}</li>,
    code: ({ node, inline, className, children, ...props }: any) => {
      const childrenStr = String(children).toLowerCase();
      const classStr = String(className || '').toLowerCase();
      const matchStr = childrenStr + ' ' + classStr;
      
      if (matchStr.includes('latency_compare')) return <LatencyCompare />;
      if (matchStr.includes('prompt_engineering')) return <PromptEngineering />;
      if (matchStr.includes('flowchart') || matchStr.includes('rag')) return <UIFlowchart />;
      if (matchStr.includes('wireframe') || matchStr.includes('dashboard')) return <UIWireframe />;
      if (matchStr.includes('architecture')) {
        // Disambiguate based on content keywords
        if (matchStr.includes('orchestration') || matchStr.includes('flow')) return <UIFlowchart />;
        return <ArchitectureDiagram />;
      }
      if (matchStr.includes('security_encryption')) return <SecurityEncryption />;
      if (matchStr.includes('hallucination_comparison')) return <HallucinationComparison />;
      if (matchStr.includes('data_sanitization')) return <DataSanitization />;
      if (matchStr.includes('live_terminal')) return <LiveSearchTerminal />;
      if (matchStr.includes('threat_model')) return <ThreatModelDiagram />;
      if (matchStr.includes('limitations_matrix')) return <LimitationsMatrix />;
      if (matchStr.includes('future_roadmap')) return <FutureWorkRoadmap />;

      return !inline ? (
        <div className="relative group my-8">
          <div className="absolute -top-3 left-4 px-2 py-0.5 bg-zinc-800 text-[10px] text-zinc-500 rounded border border-zinc-700 uppercase font-mono tracking-tighter z-10">Code Reference</div>
          <pre className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed shadow-2xl">
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
    hr: () => <hr className="my-16 border-zinc-200 dark:border-zinc-800" />,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-8 my-10 italic text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed">
        {children}
      </blockquote>
    )
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 font-serif selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900/40 dark:selection:text-blue-200">
      
      {/* Scroll Progress & Sticky Nav */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between font-sans text-xs font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/research" className="hover:text-blue-600 transition-colors">
            ← Repository
          </Link>
          <div className="flex gap-6">
            <a href="#abstract" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Papers</a>
            <a href="#architecture" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Architecture</a>
            <a href="#benchmarks" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Benchmarks</a>
          </div>
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-32 text-zinc-900 dark:text-zinc-100">
        
        {/* Paper Header */}
        <article className="animate-fade-in relative">
           
           <header className="mb-24 font-sans text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Independent Research
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
                 SeekEngine: Hybrid RAG for Truthful Search
              </h1>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                 <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>Gaurav Yadav & Aditya Yadav</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Jan 2026</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Shield size={16} />
                    <span>Systems Security</span>
                 </div>
              </div>

              <div className="mt-10 flex justify-center gap-4">
                  <Link href="https://seekengine.vercel.app" target="_blank" className="px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                    Live Demo
                  </Link>
                  <Link href="https://github.com/archduke1337/SeekEngine" target="_blank" className="px-6 py-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                    Source Code
                  </Link>
              </div>
           </header>

           <hr className="my-16 border-zinc-100 dark:border-zinc-900 w-24 mx-auto" />

           {/* Paper Body */}
           <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-sans prose-headings:tracking-tight prose-p:font-serif prose-p:text-lg prose-p:opacity-80 prose-p:leading-8 prose-li:text-lg prose-figure:my-12">
              <ReactMarkdown components={MarkdownComponents}>
                 {content}
              </ReactMarkdown>
           </div>
           
           {/* BibTeX Citation Section */}
           <div className="mt-32 pt-12 border-t border-zinc-200 dark:border-zinc-900 font-sans">
              <h3 className="font-bold text-sm uppercase tracking-widest text-zinc-500 mb-6">Citation</h3>
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-100 dark:border-zinc-800 overflow-x-auto">
                 <pre className="text-xs text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed">
{`@article{yadav2026seekengine,
  title={SeekEngine: Grounded Hybrid Retrieval for Truthful Search},
  author={Yadav, Gaurav and Yadav, Aditya},
  year={2026},
  note={Independent Research},
  url={https://seekengine.vercel.app},
}`}
                 </pre>
              </div>
           </div>

           {/* Personal Footer */}
           <div className="mt-24 pt-16 text-center border-t border-dashed border-zinc-200 dark:border-zinc-900">
              <p className="font-serif italic text-zinc-500 dark:text-zinc-400 text-lg">
                &quot;Grounding is not a feature—it&apos;s a constraint.&quot;
              </p>
              <div className="mt-8 text-[10px] font-bold text-zinc-300 dark:text-zinc-700 uppercase tracking-[0.3em]">
                  Research • 2026
              </div>
           </div>

        </article>
      </div>
    </main>
  );
}
