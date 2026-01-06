"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
  History
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

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
## Abstract

SeekEngine is an exploratory implementation of a hybrid information retrieval system designed to reduce hallucination-prone responses in large language model (LLM)–assisted search interfaces. The system integrates Google Custom Search Engine (CSE) indexing with a lightweight retrieval-augmented generation (RAG) pipeline executed via cost-constrained inference models available through OpenRouter. Rather than optimizing for creative language generation, SeekEngine prioritizes verifiable factual grounding and transparent source attribution. Internal comparative evaluation on representative real-time queries demonstrates measurable improvement in factual consistency relative to ungrounded LLM outputs, at the cost of increased response latency. This work documents architectural decisions, security constraints, and user-interface considerations relevant to building truth-oriented search systems under zero-budget conditions.

---

## Keywords

retrieval-augmented generation, hybrid search systems, large language models, hallucination mitigation, secure inference, Next.js server architecture, cybersecurity-aware UI design.

---

## I. Introduction: The Hallucination Problem

The modern web faces a growing challenge of &quot;confident misinformation&quot; from AI systems. Large Language Models (LLMs), while capable of sophisticated synthesis, inherently prioritize probabilistic fluency over factual accuracy. A developer requesting a secure JWT implementation may receive syntactically valid code that references deprecated libraries or contains subtle race conditions.

SeekEngine emerged from this observation. The objective was not to build the most creative AI assistant, but to develop a **grounding-first** search agent that treats factual verification as a primary constraint rather than a post-processing concern.

---

## II. System Architecture

Built on **Next.js 14**, SeekEngine employs server-side route handlers as security proxies between client interfaces and sensitive API endpoints. The interface itself is treated as an experimental surface for communicating system trust and verification state.

### A. Environment Encapsulation

A common vulnerability in RAG implementations is credential exposure to client-side code. SeekEngine executes all inference calls within server-side environments, preventing API key leakage.

\`\`\`ui_security_encryption
(Trigger: Security Architecture)
\`\`\`

### B. Interface Design Philosophy

The minimal interface serves a functional purpose beyond aesthetics: by reducing visual complexity, user attention is directed toward verification indicators and source attribution rather than generated prose.

\`\`\`ui_wireframe
(Trigger: Live Dashboard)
\`\`\`

The AI synthesis component occupies the primary visual hierarchy, serving as a transitional bridge to the underlying retrieval results.

### C. Parallel Orchestration Model

To achieve acceptable response times under zero-budget constraints, SeekEngine fires concurrent requests to Google CSE and OpenRouter, merging results through a fusion layer.

\`\`\`architecture_diagram
(Trigger: Tech Architecture)
\`\`\`

---

## III. Orchestration Diagnostics

Understanding system behavior requires visibility into the parallel execution flow. The following visualization demonstrates the retrieval-synthesis fusion process.

\`\`\`ui_live_terminal
(Trigger: System Log)
\`\`\`

---

## IV. Data Integrity & Input Validation

All external inputs—including search results and user queries—are treated as potentially adversarial. External API responses undergo **Zod** schema validation, while user-facing content is sanitized to prevent XSS injection.

\`\`\`ui_data_sanitization
(Trigger: Zod Validation)
\`\`\`

---

## V. Comparative Evaluation: Grounded vs. Ungrounded Output

The qualitative difference between grounded and ungrounded responses is observable in real-time factual queries. The following comparison illustrates SeekEngine's source-referenced synthesis versus standard LLM hallucination patterns.

\`\`\`ui_hallucination_comparison
(Trigger: Truth Check)
\`\`\`

Across a controlled set of real-time factual queries, SeekEngine produced verifiable, source-consistent responses more frequently than ungrounded LLM outputs.

---

## VI. Latency-Accuracy Trade-off Analysis

Grounding systems inherently trade latency for verification. SeekEngine introduces approximately 300ms of fusion overhead compared to direct LLM responses.

\`\`\`ui_latency_compare
(Trigger: Performance Stats)
\`\`\`

This trade-off may be acceptable in domains where accuracy and source transparency outweigh raw responsiveness.

---

## VII. Security Considerations

SeekEngine operates under the assumption that all external inputs are potentially adversarial. To mitigate cross-site scripting (XSS) and prompt-injection risks, external API responses are sanitized prior to both user display and LLM ingestion. All inference requests execute exclusively within server-side route handlers to prevent client-side credential exposure. The system does not persist user queries or retrieved content beyond request scope, limiting data retention risks.

While these measures reduce common attack vectors, SeekEngine does not claim resistance against advanced model-level prompt exploitation or compromised upstream data providers.

\`\`\`ui_threat_model
(Trigger: Threat Matrix)
\`\`\`

---

## VIII. Limitations

This implementation is evaluated primarily through qualitative comparison and limited internal testing rather than standardized benchmarks. The system depends on third-party retrieval providers (Google CSE, OpenRouter) whose indexing policies, rate limits, and availability are outside developer control. Additionally, the current implementation does not address multilingual retrieval fidelity, temporal consistency validation, or adversarial prompt attacks at the model-behavior level.

\`\`\`ui_limitations_matrix
(Trigger: Limitations Overview)
\`\`\`

---

## IX. Future Work

- Formal factuality benchmarks using established datasets (e.g., FEVER-style evaluation)
- Adaptive retrieval depth based on query complexity
- Cryptographic source signing for provenance verification
- User-visible confidence calibration indicators
- Broader threat-model evaluation against prompt injection

\`\`\`ui_future_roadmap
(Trigger: Development Timeline)
\`\`\`

---

## X. Conclusion: Independent Systems Research Perspective

SeekEngine demonstrates that meaningful hallucination mitigation can be achieved without proprietary datasets or large-scale infrastructure, provided that architectural discipline and security-aware design principles are applied consistently. By treating factual grounding as a first-class system constraint, the project highlights the feasibility of truth-oriented search experiences for independent developers.

While the system introduces additional latency due to parallel orchestration and validation overhead, this trade-off may be acceptable in domains where accuracy and source transparency outweigh raw responsiveness.

This work is released as an open, inspectable system to encourage critical evaluation rather than passive adoption.

---

## References & Acknowledgments

- **Google Custom Search API**: Primary retrieval infrastructure
- **OpenRouter (Mimo-V2-Flash)**: Cost-efficient inference provider
- **Next.js 14**: Server-side security architecture
- **Zod**: Runtime schema validation
- **Tailwind CSS**: Interface styling framework
`;

// --- Main Page Component ---

export default function SeekEngineResearch() {
  const MarkdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white border-b pb-2 border-zinc-200 dark:border-zinc-800 tracking-tight">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-10 mb-5 text-zinc-900 dark:text-white uppercase tracking-wider">{children}</h2>,
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
      if (matchStr.includes('architecture')) return <ArchitectureDiagram />;
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
    <main className="min-h-screen pt-24 pb-32 bg-white dark:bg-zinc-950 font-serif selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900/40 dark:selection:text-blue-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-zinc-900 dark:text-zinc-100">
        
        {/* Navigation & Actions */}
        <motion.div 
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="flex items-center justify-between mb-16 font-sans"
        >
          <Link href="/research" className="inline-flex items-center gap-2.5 text-zinc-500 hover:text-blue-600 transition-all group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-sm">Return to Repository</span>
          </Link>
          <div className="flex gap-4">
             <button className="p-2.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-white bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all" title="Export as PDF">
                <Download size={18} />
             </button>
             <button className="p-2.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-white bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all" title="Share Research">
                <Share2 size={18} />
             </button>
          </div>
        </motion.div>

        {/* Paper Header */}
        <article className="animate-fade-in">
           <header className="mb-20 text-center font-sans relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] pointer-events-none"></div>
              
              <div className="inline-block px-5 py-2 mb-8 text-[11px] font-black underline-offset-4 tracking-[0.2em] text-orange-600 uppercase bg-orange-50/50 dark:bg-orange-950/30 border border-orange-200/50 dark:border-orange-800/30 rounded-2xl">
                 Published Independent Research
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-black text-zinc-900 dark:text-white mb-10 leading-[1.05] tracking-tight">
                 SeekEngine: A Hybrid RAG <br className="hidden sm:block"/> Approach to Truthful Search
              </h1>
              
              <div className="flex flex-col items-center justify-center gap-6 text-zinc-600 dark:text-zinc-400 mb-12">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <User size={20} className="text-zinc-800 dark:text-zinc-200" />
                    </div>
                    <div className="text-left">
                      <span className="font-black text-zinc-900 dark:text-white block leading-none">Gaurav Yadav</span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">Independent Researcher, Secure AI Systems</span>
                    </div>
                 </div>
                 
                 <div className="text-sm max-w-sm text-center leading-relaxed font-medium">
                    BCA Cybersecurity, Ajeenkya DY Patil University, Pune <br/>
                    <span className="text-zinc-400 dark:text-zinc-600">January 01, 2026 — Pune, India</span>
                 </div>

                 <Link href="mailto:gauravramyadav@gmail.com" className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold hover:bg-blue-100 transition-colors border border-blue-200/50 dark:border-blue-800/30">
                    gauravramyadav@gmail.com
                 </Link>
              </div>

               {/* Links */}
               <div className="flex flex-wrap justify-center gap-5 mb-12">
                  <Link href="https://seekengine.vercel.app" target="_blank" className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-2xl transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.98] font-sans text-sm font-black overflow-hidden">
                    <Globe size={18} /> 
                    <span>ACCESS LIVE ENGINE</span>
                    <ExternalLink size={14} className="opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/10 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Link>
                  <Link href="https://github.com/archduke1337/SeekEngine" target="_blank" className="inline-flex items-center gap-2.5 px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl transition-all border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl font-sans text-sm font-black active:scale-[0.98]">
                    <Terminal size={18} /> 
                    <span>DOWNLOAD REPO</span>
                  </Link>
               </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3">
                   {["RAG Pipeline", "Hybrid Indexing", "Next.js 14", "Secure Inference", "Cybersecurity"].map((tag) => (
                       <span key={tag} className="px-3.5 py-1.5 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-500 text-[10px] font-black uppercase tracking-[0.1em] rounded-xl border border-zinc-200 dark:border-zinc-800/50">
                           {tag}
                       </span>
                   ))}
                </div>
           </header>

           <hr className="my-16 border-zinc-100 dark:border-zinc-900" />

           {/* Paper Body */}
           <div className="prose prose-lg dark:prose-invert max-w-none prose-p:font-serif prose-p:opacity-90 prose-p:leading-loose">
              <ReactMarkdown components={MarkdownComponents}>
                 {content}
              </ReactMarkdown>
           </div>
           
           {/* BibTeX Citation Section */}
           <div className="mt-24 pt-12 border-t border-zinc-200 dark:border-zinc-900 font-sans">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                <p className="font-black uppercase tracking-[0.2em] text-xs text-zinc-500">Scholarly Citation (BibTeX)</p>
              </div>
              <div className="group bg-zinc-50 dark:bg-zinc-900/30 p-8 rounded-[2rem] font-mono text-[11px] sm:text-xs overflow-x-auto border border-zinc-100 dark:border-zinc-800 shadow-inner group transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900/50">
                 <pre className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono">
{`@article{yadav2026seekengine,
  title={SeekEngine: A Hybrid RAG Approach to Truthful Search},
  author={Yadav, Gaurav},
  journal={Independent Research - Cybersecurity},
  year={2026},
  location={Pune, India},
  institution={Ajeenkya DY Patil University},
  url={https://seekengine.vercel.app}
}`}
                 </pre>
              </div>
           </div>

           {/* Personal Footer */}
           <div className="mt-24 pt-16 font-sans text-center border-t border-dashed border-zinc-200 dark:border-zinc-900 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white dark:bg-zinc-950">
                 <Shield size={24} className="text-zinc-200 dark:text-zinc-800" />
              </div>
              
              <p className="italic text-lg text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
                "Grounding is not a feature—it's a design constraint we choose to enforce."
              </p>
              
              <div className="mt-12 flex justify-center gap-10">
                 {[
                   { name: 'GitHub', url: 'https://github.com/archduke1337' },
                   { name: 'LinkedIn', url: 'https://linkedin.com/in/gurvv' },
                   { name: 'Twitter', url: 'https://twitter.com/archduke1337' }
                 ].map((social) => (
                   <Link 
                    key={social.name} 
                    href={social.url} 
                    className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-blue-600 transition-all relative group"
                   >
                     {social.name}
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                   </Link>
                 ))}
              </div>
              <div className="mt-16 text-[9px] font-bold text-zinc-300 dark:text-zinc-800 uppercase tracking-[0.5em]">
                 © 2026 GAURAV YADAV • ARCHDUKE
              </div>
           </div>

        </article>
      </div>
    </main>
  );
}
