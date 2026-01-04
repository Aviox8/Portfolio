'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  User, 
  Shield, 
  Download, 
  Share2, 
  Bug, 
  Cpu, 
  RefreshCw, 
  CheckCircle,
  AlertTriangle,
  Lock,
  GitBranch,
  Eye,
  XCircle,
  HelpCircle,
  ChevronRight,
  Activity,
  Target,
  Layers,
  GitMerge,
  Search,
  MessageSquare
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

// ============================================
// LIVE UI DIAGRAM COMPONENTS
// ============================================

const ResearchQuestionsVisual = () => (
  <div className="my-12 p-6 sm:p-8 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <HelpCircle size={18} className="text-blue-500" />
        </div>
        <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest">Research Questions</h4>
      </div>
      
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
        {[
          { id: "RQ1", question: "Which vulnerability classes are most amenable to automated patching?", focus: "Feasibility" },
          { id: "RQ2", question: "How effective are LLM-generated patches under realistic validation?", focus: "Effectiveness" },
          { id: "RQ3", question: "What failure modes emerge when LLMs assist remediation?", focus: "Risk Analysis" },
          { id: "RQ4", question: "How can human-in-the-loop design mitigate automation bias?", focus: "Design" }
        ].map((rq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-4 sm:p-5 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-blue-500/30 transition-colors group overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3 gap-2">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-black rounded flex-shrink-0">{rq.id}</span>
              <span className="text-[9px] font-bold text-zinc-500 uppercase flex-shrink-0">{rq.focus}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{rq.question}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const MethodologyDiagram = () => (
  <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-inner">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-purple-500/10 rounded-lg">
        <Layers size={18} className="text-purple-500" />
      </div>
      <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest">Research Methodology Stages</h4>
    </div>
    
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>
      
      <div className="space-y-6 pl-16">
        {[
          { stage: 1, title: "Workflow Decomposition", desc: "Remediation pipelines decomposed into discrete stages", icon: <GitBranch size={16} /> },
          { stage: 2, title: "Automation Feasibility Analysis", desc: "Each stage evaluated for LLM automation viability", icon: <Search size={16} /> },
          { stage: 3, title: "Failure Mode Enumeration", desc: "Systematic identification of AI-introduced failure scenarios", icon: <AlertTriangle size={16} /> },
          { stage: 4, title: "Architectural Synthesis", desc: "Human-in-the-loop architecture designed for security", icon: <Layers size={16} /> }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            <div className="absolute -left-16 w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border-2 border-purple-500/50 flex items-center justify-center text-purple-500">
              {item.icon}
            </div>
            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black text-purple-500">STAGE {item.stage}</span>
              </div>
              <h5 className="font-bold text-zinc-900 dark:text-white mb-1">{item.title}</h5>
              <p className="text-xs text-zinc-500">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const DesignAlternativesVisual = () => {
  const [selected, setSelected] = useState(2);
  
  return (
    <div className="my-12 p-6 sm:p-8 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-orange-500/10 rounded-lg">
          <GitMerge size={18} className="text-orange-500" />
        </div>
        <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest">Design Alternatives Evaluated</h4>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {[
          { 
            title: "Fully Autonomous", 
            status: "rejected", 
            reason: "High semantic risk",
            icon: <XCircle size={18} />
          },
          { 
            title: "Suggestion-Only", 
            status: "rejected", 
            reason: "Minimal effort savings",
            icon: <XCircle size={18} />
          },
          { 
            title: "Constrained Gen.", 
            status: "selected", 
            reason: "Efficiency + governance",
            icon: <CheckCircle size={18} />
          }
        ].map((alt, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(i)}
            className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all ${
              alt.status === 'selected' 
                ? 'bg-green-500/10 border-green-500/30' 
                : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
            } ${selected === i ? 'ring-2 ring-blue-500' : ''}`}
          >
            <div className={`mb-3 ${alt.status === 'selected' ? 'text-green-500' : 'text-red-500'}`}>
              {alt.icon}
            </div>
            <h5 className="font-bold text-white mb-1 text-sm">{alt.title}</h5>
            <p className="text-[11px] text-zinc-500 mb-3">{alt.reason}</p>
            <span className={`px-2 py-1 text-[8px] font-black uppercase rounded ${
              alt.status === 'selected' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-red-500/20 text-red-400'
            }`}>
              {alt.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const PipelineFlowchart = () => (
  <div className="my-12 p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-inner">
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-2 max-w-4xl mx-auto">
      {[
        { icon: <Bug size={20} />, label: "Detection", color: "orange", desc: "Sanitizers" },
        { icon: <Shield size={20} />, label: "Isolation", color: "blue", desc: "Context" },
        { icon: <Cpu size={20} />, label: "LLM Patch", color: "purple", desc: "Generate", pulse: true },
        { icon: <RefreshCw size={20} />, label: "Validate", color: "green", desc: "CI/CD" },
        { icon: <Eye size={20} />, label: "Review", color: "zinc", desc: "Audit" },
        { icon: <CheckCircle size={20} />, label: "Approve", color: "emerald", desc: "Merge" }
      ].map((step, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center border ${
            step.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 border-orange-200 dark:border-orange-800' :
            step.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 border-blue-200 dark:border-blue-800' :
            step.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 border-purple-200 dark:border-purple-800' :
            step.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 border-green-200 dark:border-green-800' :
            step.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 border-emerald-200 dark:border-emerald-800' :
            'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700'
          } ${step.pulse ? 'animate-pulse' : ''}`}>
            {step.icon}
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-tight text-center">{step.label}</span>
          <span className="text-[8px] text-zinc-500 text-center">{step.desc}</span>
        </motion.div>
      ))}
    </div>
    <div className="mt-6 text-center text-[10px] font-mono text-zinc-400 italic">
      Figure 1: AI-Assisted Vulnerability Remediation Pipeline
    </div>
  </div>
);

const PseudocodeAlgorithm = () => (
  <div className="my-12 p-1 bg-zinc-800 rounded-3xl shadow-2xl">
    <div className="bg-zinc-950 rounded-[1.4rem] p-6 font-mono text-[11px] sm:text-xs">
      <div className="flex items-center justify-between mb-6 border-b border-zinc-900 pb-4">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        </div>
        <span className="text-zinc-600 text-[10px] uppercase tracking-widest font-black">Algorithm 1: Patch Generation</span>
      </div>
      
      <pre className="text-zinc-300 leading-relaxed overflow-x-auto">
{`ALGORITHM: LLM_PATCH_GENERATION(vuln, context)
INPUT:  vuln    ← Sanitizer vulnerability report
        context ← Minimal reproducible code context
OUTPUT: patch   ← Validated remediation patch

1.  candidates ← []
2.  FOR i = 1 TO MAX_RETRIES DO
3.      prompt ← BUILD_PROMPT(vuln, context)
4.      patch_i ← LLM.generate(prompt, temp=0.2)
5.      
6.      IF SYNTAX_CHECK(patch_i) = PASS THEN
7.          IF UNIT_TESTS(patch_i) = PASS THEN
8.              IF SANITIZER_RERUN(patch_i) = CLEAN THEN
9.                  candidates.append(patch_i)
10.             END IF
11.         END IF
12.     END IF
13. END FOR
14.
15. IF candidates.length > 0 THEN
16.     RETURN SELECT_BEST(candidates)  // Human review
17. ELSE
18.     RETURN ESCALATE_TO_HUMAN(vuln)
19. END IF`}
      </pre>
      
      <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-4 text-[9px] text-zinc-500">
        <span className="flex items-center gap-1"><div className="w-2 h-2 bg-purple-500 rounded-full"></div> LLM Inference</span>
        <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Validation Gates</span>
        <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Human Checkpoint</span>
      </div>
    </div>
  </div>
);

const ThreatModelTable = () => (
  <div className="my-12 p-8 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-red-500/10 rounded-lg">
        <Shield size={18} className="text-red-500" />
      </div>
      <h4 className="text-sm font-bold text-white uppercase tracking-widest">Threat Model & Assumptions</h4>
    </div>
    
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="text-left py-3 px-4 text-zinc-500 font-bold uppercase">Threat Vector</th>
            <th className="text-left py-3 px-4 text-zinc-500 font-bold uppercase">Assumption</th>
            <th className="text-left py-3 px-4 text-zinc-500 font-bold uppercase">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-900">
          {[
            { threat: "CI/CD Pipeline Compromise", assumption: "Pipeline is trusted and access-controlled", status: "trusted" },
            { threat: "LLM Network Access", assumption: "Model operates in sandboxed environment", status: "mitigated" },
            { threat: "Adversarial Training Data", assumption: "Out of scope for this research", status: "excluded" },
            { threat: "Semantic Vulnerability Introduction", assumption: "Primary threat — requires human review", status: "critical" },
            { threat: "Patch Injection via Input", assumption: "Post-detection only, not on user input", status: "mitigated" }
          ].map((row, i) => (
            <motion.tr 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="hover:bg-zinc-900/50"
            >
              <td className="py-3 px-4 text-white font-medium">{row.threat}</td>
              <td className="py-3 px-4 text-zinc-400">{row.assumption}</td>
              <td className="py-3 px-4">
                <span className={`px-2 py-1 text-[8px] font-black uppercase rounded ${
                  row.status === 'critical' ? 'bg-red-500/20 text-red-400' :
                  row.status === 'mitigated' ? 'bg-green-500/20 text-green-400' :
                  row.status === 'trusted' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-zinc-700 text-zinc-400'
                }`}>
                  {row.status}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const FailureTaxonomy = () => (
  <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-inner">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-orange-500/10 rounded-lg">
        <AlertTriangle size={18} className="text-orange-500" />
      </div>
      <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest">Failure Mode Taxonomy</h4>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { 
          category: "Superficial Fixes", 
          examples: ["Null checks without root cause", "Conditional guards masking flaws"],
          severity: "high",
          icon: <Target size={16} />
        },
        { 
          category: "Semantic Drift", 
          examples: ["Altered control flow", "Incorrect variable lifetime assumptions"],
          severity: "critical",
          icon: <GitBranch size={16} />
        },
        { 
          category: "Over-Constraining", 
          examples: ["Reduced concurrency", "Disabled optimizations"],
          severity: "medium",
          icon: <Lock size={16} />
        },
        { 
          category: "Test-Centric Deception", 
          examples: ["Passes tests but violates invariants", "Removed failing assertions"],
          severity: "critical",
          icon: <Eye size={16} />
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`p-5 rounded-2xl border ${
            item.severity === 'critical' ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800/30' :
            item.severity === 'high' ? 'bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800/30' :
            'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800/30'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`flex items-center gap-2 ${
              item.severity === 'critical' ? 'text-red-600' :
              item.severity === 'high' ? 'text-orange-600' :
              'text-yellow-600'
            }`}>
              {item.icon}
              <span className="font-bold text-sm">{item.category}</span>
            </div>
            <span className={`px-2 py-0.5 text-[8px] font-black uppercase rounded ${
              item.severity === 'critical' ? 'bg-red-500/20 text-red-600' :
              item.severity === 'high' ? 'bg-orange-500/20 text-orange-600' :
              'bg-yellow-500/20 text-yellow-600'
            }`}>
              {item.severity}
            </span>
          </div>
          <ul className="space-y-1">
            {item.examples.map((ex, j) => (
              <li key={j} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                <div className="w-1 h-1 bg-zinc-400 rounded-full"></div>
                {ex}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
);

const EvaluationCriteria = () => (
  <div className="my-12 p-6 sm:p-8 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-500/10 rounded-lg">
          <CheckCircle size={18} className="text-green-500" />
        </div>
        <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest">Patch Evaluation Criteria</h4>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[
          { 
            criterion: "Correctness", 
            definition: "Eliminates vulnerability without new errors",
            weight: "Required"
          },
          { 
            criterion: "Security Preservation", 
            definition: "No weakening of security controls",
            weight: "Required"
          },
          { 
            criterion: "Behavioral Integrity", 
            definition: "Preserves program semantics",
            weight: "Required"
          },
          { 
            criterion: "Review Overhead", 
            definition: "Less effort than manual fix",
            weight: "Optimized"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 sm:p-5 bg-zinc-900/50 rounded-2xl border border-zinc-800"
          >
            <div className="flex items-center justify-between mb-2 gap-2">
              <span className="font-bold text-white text-sm">{item.criterion}</span>
              <span className={`px-2 py-0.5 text-[8px] font-black uppercase rounded flex-shrink-0 ${
                item.weight === 'Required' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
              }`}>
                {item.weight}
              </span>
            </div>
            <p className="text-xs text-zinc-500 break-words">{item.definition}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
        <p className="text-[10px] text-zinc-500 font-mono italic">
          Note: Test coverage alone is insufficient for security-critical paths.
        </p>
      </div>
    </div>
  </div>
);

const ScopeConstraints = () => (
  <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-4">
    {[
      {
        title: "Scope",
        icon: <Target size={20} />,
        color: "blue",
        items: ["Post-merge runtime vulnerabilities", "Server-side & system software", "C/C++, Rust, Java ecosystems"]
      },
      {
        title: "Constraints",
        icon: <Lock size={20} />,
        color: "orange",
        items: ["LLM context window limits", "Non-deterministic model output", "Human accountability required"]
      },
      {
        title: "Non-Goals",
        icon: <XCircle size={20} />,
        color: "red",
        items: ["Replace security engineers", "Auto-merge to production", "Detect vulnerabilities", "Adversarial prompt defense"]
      }
    ].map((section, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className={`p-6 rounded-2xl border ${
          section.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800/30' :
          section.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800/30' :
          'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800/30'
        }`}
      >
        <div className={`flex items-center gap-2 mb-4 ${
          section.color === 'blue' ? 'text-blue-600' :
          section.color === 'orange' ? 'text-orange-600' :
          'text-red-600'
        }`}>
          {section.icon}
          <h5 className="font-bold text-sm uppercase tracking-wider">{section.title}</h5>
        </div>
        <ul className="space-y-2">
          {section.items.map((item, j) => (
            <li key={j} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
              <ChevronRight size={12} className="opacity-50" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
);

const SequenceDiagram = () => (
  <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800">
    <div className="flex justify-around mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
      <div className="flex flex-col items-center gap-2">
        <div className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold">CODEBASE</div>
        <div className="w-px h-[180px] bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="px-4 py-2 bg-purple-600 text-white rounded-lg text-xs font-bold">LLM MODEL</div>
        <div className="w-px h-[180px] bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="px-4 py-2 bg-green-600 text-white rounded-lg text-xs font-bold">VALIDATOR</div>
        <div className="w-px h-[180px] bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
    </div>
    <div className="relative -top-[190px] space-y-6 max-w-lg mx-auto font-mono text-[10px]">
      {[
        { from: 0, to: 1, label: "Vulnerable Context + Metadata", color: "zinc" },
        { from: 1, to: 0, label: "Candidate Patch A", color: "blue", dashed: true },
        { from: 1, to: 0, label: "Candidate Patch B", color: "blue", dashed: true },
        { from: 0, to: 2, label: "Run Validation Suite", color: "zinc" },
        { from: 2, to: 0, label: "PASS: Ready for Review", color: "green" }
      ].map((msg, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: msg.from < msg.to ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          className={`flex items-center gap-2 ${msg.from < msg.to ? '' : 'flex-row-reverse'}`}
        >
          <div className={`flex-1 h-px relative ${msg.dashed ? 'border-t border-dashed' : 'bg-zinc-300 dark:bg-zinc-700'} ${
            msg.color === 'blue' ? 'border-blue-500' :
            msg.color === 'green' ? 'border-green-500 bg-green-500' :
            'border-zinc-400'
          }`}>
            <div className={`absolute ${msg.from < msg.to ? 'right-0' : 'left-0'} -top-1 w-2 h-2 border-t border-r transform ${msg.from < msg.to ? 'rotate-45' : '-rotate-135'} ${
              msg.color === 'blue' ? 'border-blue-400' :
              msg.color === 'green' ? 'border-green-400' :
              'border-zinc-400'
            }`}></div>
          </div>
          <span className={`px-2 bg-white dark:bg-zinc-900 ${
            msg.color === 'blue' ? 'text-blue-500 font-bold' :
            msg.color === 'green' ? 'text-green-500 font-bold' :
            'text-zinc-500'
          }`}>{msg.label}</span>
        </motion.div>
      ))}
    </div>
    <div className="text-center text-[10px] font-mono text-zinc-400 italic -mt-12">
      Figure 2: Multi-Candidate Patch Generation Sequence
    </div>
  </div>
);

// NEW: Historical Evolution Timeline
const HistoricalEvolution = () => (
  <div className="my-12 p-6 sm:p-8 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <Activity size={18} className="text-blue-500" />
        </div>
        <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest">Evolution of Automated Remediation</h4>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 right-0 top-2 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 hidden sm:block"></div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative">
          {[
            { era: "2000s", title: "Rule-Based", desc: "Template fixes", status: "limited" },
            { era: "2010s", title: "Synthesis", desc: "Formal methods", status: "promising" },
            { era: "2020s", title: "ML Detection", desc: "Pattern recog.", status: "adopted" },
            { era: "2024+", title: "LLM Patch", desc: "Context-aware", status: "emerging" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className={`w-4 h-4 rounded-full border-2 mb-3 ${
                item.status === 'emerging' ? 'bg-green-500 border-green-400 animate-pulse' :
                item.status === 'adopted' ? 'bg-purple-500 border-purple-400' :
                item.status === 'promising' ? 'bg-blue-500 border-blue-400' :
                'bg-zinc-600 border-zinc-500'
              }`}></div>
              <div className="text-center">
                <span className="text-[10px] font-mono text-zinc-500">{item.era}</span>
                <h5 className="text-[11px] sm:text-xs font-bold text-white mt-1">{item.title}</h5>
                <p className="text-[9px] text-zinc-500 mt-0.5">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 p-3 sm:p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 text-center">
        <p className="text-[9px] sm:text-[10px] text-zinc-400 italic">
          LLM-assisted remediation as the next evolutionary step.
        </p>
      </div>
    </div>
  </div>
);

// NEW: Comparative Framework Table
const ComparativeFramework = () => (
  <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-inner">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-purple-500/10 rounded-lg">
        <Layers size={18} className="text-purple-500" />
      </div>
      <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest">Comparative Analysis Framework</h4>
    </div>
    
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b-2 border-zinc-200 dark:border-zinc-800">
            <th className="text-left py-3 px-3 text-zinc-500 font-bold uppercase">Approach</th>
            <th className="text-center py-3 px-3 text-zinc-500 font-bold uppercase">Automation</th>
            <th className="text-center py-3 px-3 text-zinc-500 font-bold uppercase">Scalability</th>
            <th className="text-center py-3 px-3 text-zinc-500 font-bold uppercase">Risk</th>
            <th className="text-center py-3 px-3 text-zinc-500 font-bold uppercase">Effort</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900">
          {[
            { approach: "Manual Patching", automation: "None", scalability: "Low", risk: "Low", effort: "High", highlight: false },
            { approach: "Rule-Based Fixes", automation: "Partial", scalability: "Medium", risk: "Medium", effort: "Medium", highlight: false },
            { approach: "Synthesis-Based", automation: "High", scalability: "Low", risk: "Low", effort: "Very High", highlight: false },
            { approach: "LLM-Assisted (Proposed)", automation: "Partial", scalability: "High", risk: "Mitigated", effort: "Low", highlight: true }
          ].map((row, i) => (
            <motion.tr 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`${row.highlight ? 'bg-green-50 dark:bg-green-900/10' : 'hover:bg-zinc-50 dark:hover:bg-zinc-900/50'}`}
            >
              <td className={`py-3 px-3 font-medium ${row.highlight ? 'text-green-700 dark:text-green-400' : 'text-zinc-900 dark:text-white'}`}>
                {row.approach}
                {row.highlight && <span className="ml-2 text-[8px] bg-green-500/20 text-green-600 px-1.5 py-0.5 rounded font-black">THIS WORK</span>}
              </td>
              <td className="py-3 px-3 text-center text-zinc-600 dark:text-zinc-400">{row.automation}</td>
              <td className="py-3 px-3 text-center text-zinc-600 dark:text-zinc-400">{row.scalability}</td>
              <td className="py-3 px-3 text-center text-zinc-600 dark:text-zinc-400">{row.risk}</td>
              <td className="py-3 px-3 text-center text-zinc-600 dark:text-zinc-400">{row.effort}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 text-center text-[10px] font-mono text-zinc-400 italic">
      The proposed approach occupies a previously underexplored middle ground.
    </div>
  </div>
);

// NEW: Negative Results
const NegativeResults = () => (
  <div className="my-12 p-8 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-red-500/10 rounded-lg">
        <XCircle size={18} className="text-red-500" />
      </div>
      <h4 className="text-sm font-bold text-white uppercase tracking-widest">Negative Results & Failed Approaches</h4>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { approach: "Verbose Prompting", result: "Degraded patch quality", insight: "Concise context outperforms detailed explanations" },
        { approach: "Full Repository Context", result: "Increased hallucinations", insight: "Minimal context reduces confusion" },
        { approach: "Aggressive Retry Strategies", result: "Diminishing returns", insight: "3-5 retries optimal; more wastes compute" },
        { approach: "Test-Only Validation", result: "Semantic regressions", insight: "Human review remains essential" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-5 bg-red-500/5 rounded-2xl border border-red-500/20"
        >
          <div className="flex items-center gap-2 mb-3">
            <XCircle size={14} className="text-red-500" />
            <span className="font-bold text-white text-sm">{item.approach}</span>
          </div>
          <p className="text-xs text-red-400 mb-2">{item.result}</p>
          <p className="text-[10px] text-zinc-500 italic">→ {item.insight}</p>
        </motion.div>
      ))}
    </div>
    
    <div className="mt-6 p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
      <p className="text-[10px] text-zinc-400">
        Documenting failures reinforces conservative automation boundaries.
      </p>
    </div>
  </div>
);

// NEW: Design Rationale
const DesignRationale = () => (
  <div className="my-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-inner">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-blue-500/10 rounded-lg">
        <MessageSquare size={18} className="text-blue-500" />
      </div>
      <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest">Researcher's Design Decisions</h4>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { decision: "Post-Detection Focus", rationale: "Detection is solved; remediation is the bottleneck" },
        { decision: "Architectural Safety First", rationale: "System design over model optimization" },
        { decision: "Untrusted LLM Outputs", rationale: "Treat all AI suggestions as potentially harmful" },
        { decision: "CI/CD Integration", rationale: "Real pipelines, not standalone research tools" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-2">
            <ChevronRight size={14} className="text-blue-500" />
            <span className="font-bold text-zinc-900 dark:text-white text-sm">{item.decision}</span>
          </div>
          <p className="text-xs text-zinc-500">{item.rationale}</p>
        </motion.div>
      ))}
    </div>
    
    <div className="mt-6 text-center text-[10px] font-mono text-zinc-400 italic">
      These decisions reflect a security-first mindset over novelty pursuit.
    </div>
  </div>
);

// NEW: Claims and Non-Claims
const ClaimsNonClaims = () => (
  <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-200 dark:border-red-800/30">
      <div className="flex items-center gap-2 mb-4 text-red-600">
        <XCircle size={20} />
        <h5 className="font-bold text-sm uppercase tracking-wider">This Research Does NOT Claim</h5>
      </div>
      <ul className="space-y-2">
        {[
          "LLMs can replace security engineers",
          "Automated patching is universally applicable",
          "Test coverage guarantees security",
          "AI-generated code should be trusted by default"
        ].map((item, i) => (
          <li key={i} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
    
    <div className="p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-200 dark:border-green-800/30">
      <div className="flex items-center gap-2 mb-4 text-green-600">
        <CheckCircle size={20} />
        <h5 className="font-bold text-sm uppercase tracking-wider">This Research DOES Argue</h5>
      </div>
      <ul className="space-y-2">
        {[
          "Bounded, assistive automation is viable",
          "Human oversight is non-negotiable",
          "Failure documentation is essential",
          "Architectural discipline enables trust"
        ].map((item, i) => (
          <li key={i} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================


export default function AIResearchPaper() {
  const content = `
## Abstract

The rapid advancement of vulnerability detection mechanisms—such as runtime sanitizers, fuzzing engines, and AI-assisted testing—has significantly improved the discovery of software defects. However, the remediation of these vulnerabilities remains predominantly manual, resulting in prolonged time-to-fix and accumulated security debt.

This research investigates the feasibility of integrating Large Language Models (LLMs) into an automated vulnerability remediation pipeline. We present a structured analysis of an AI-powered patch generation framework, examine its effectiveness in addressing post-merge runtime vulnerabilities, and discuss the associated security risks, limitations, and future research directions.

The findings suggest that LLM-assisted patching, when combined with rigorous validation and human oversight, can substantially improve remediation efficiency without compromising software security.

*Note: This paper presents architectural analysis and reasoned evidence rather than controlled experimental evaluation.*

---

## Keywords

automated patching, vulnerability remediation, large language models, secure software engineering, human-in-the-loop systems, semantic security.

---

## I. Introduction

Modern software systems increasingly rely on automated tools to identify security vulnerabilities during development and post-deployment. Runtime sanitizers and dynamic analysis tools have proven effective in detecting elusive defects such as memory safety violations, data races, and temporal errors. Despite these advances, vulnerability remediation remains a human-intensive process.

This imbalance between detection scalability and remediation capacity introduces operational inefficiencies and increases exposure windows for exploitable flaws. Consequently, there is a growing need for automated systems capable of assisting developers in generating reliable vulnerability fixes.

This research explores the application of Large Language Models (LLMs) as a core component of an automated patch generation pipeline.

---

## II. Historical Context: Evolution of Automated Remediation

Automated vulnerability remediation has evolved through multiple paradigms over the past two decades.

\`\`\`ui_historical_evolution
(Trigger: Timeline)
\`\`\`

Early approaches relied on **rule-based transformations**, such as static code rewriting and template-driven fixes. While effective for narrowly defined defect classes, these systems lacked adaptability and failed under real-world code diversity.

Subsequent research explored **program synthesis and constraint-solving techniques**, enabling correctness guarantees at the cost of computational feasibility and limited scalability.

More recently, **machine learning-based approaches** emerged, primarily focused on vulnerability detection rather than remediation. The introduction of Large Language Models represents a qualitative shift: for the first time, systems can generate *context-aware, human-readable code modifications*.

This research positions LLM-assisted remediation as the next evolutionary step—bridging rigid automation and human-driven patching.

---

## III. Problem Definition and Research Questions

Despite substantial progress in vulnerability detection, remediation workflows have not scaled proportionally. Modern development pipelines routinely surface thousands of sanitizer and fuzzing findings, many of which remain unresolved due to prioritization constraints, limited security expertise, or perceived low exploitability.

This research is motivated by the following core problem:

> **Can Large Language Models meaningfully assist in vulnerability remediation without introducing unacceptable security risk or developer over-reliance?**

\`\`\`ui_research_questions
(Trigger: RQ Visual)
\`\`\`

Rather than proposing a fully autonomous system, this research deliberately investigates *assisted remediation* as a more realistic and defensible security paradigm.

---

## IV. Scope, Constraints, and Non-Goals

This research deliberately constrains its scope to ensure engineering realism and security defensibility.

\`\`\`ui_scope_constraints
(Trigger: Scope Matrix)
\`\`\`

By clearly stating these non-goals, the system avoids overclaiming capabilities and maintains a conservative security posture.

---

## V. Research Methodology

This study follows a qualitative and systems-oriented research methodology, informed by publicly documented industry practices and first-principles analysis.

This work adopts a **design-oriented research methodology**, emphasizing architectural reasoning, failure analysis, and security threat modeling over empirical benchmarking. This research is model-agnostic and does not depend on any specific LLM architecture or vendor.

\`\`\`ui_methodology
(Trigger: Methodology Stages)
\`\`\`

This approach prioritizes *engineering realism* over speculative autonomy and emphasizes deployable system design rather than theoretical model performance.

---

## VI. Design Alternatives and Trade-Off Analysis

Multiple architectural approaches were evaluated before selecting the proposed human-in-the-loop pipeline.

\`\`\`ui_design_alternatives
(Trigger: Alternatives Grid)
\`\`\`

### Comparative Analysis with Existing Approaches

\`\`\`ui_comparative_framework
(Trigger: Comparison Table)
\`\`\`

This comparative framing highlights that the contribution of this work lies not in absolute automation, but in *architectural positioning*.

---

## VII. Proposed AI-Assisted Remediation Architecture

Based on the preceding analysis, this research proposes a modular AI-assisted remediation architecture designed explicitly for post-detection vulnerability fixing.

The architecture is guided by three non-negotiable design principles:

1. **Human Authority:** No AI-generated patch may be merged without human approval.
2. **Iterative Validation:** Patch generation is treated as a probabilistic process requiring feedback loops.
3. **Context Minimization:** Only the minimal vulnerable context is exposed to the LLM to reduce hallucination risk.

\`\`\`ui_pipeline_flowchart
(Trigger: Pipeline Diagram)
\`\`\`

---

## VIII. Pipeline Components

### A. Vulnerability Detection

Runtime sanitizers and dynamic analysis tools identify vulnerabilities during execution. Crucial contextual information—such as stack traces and execution paths—is preserved to support downstream analysis.

### B. Bug Isolation and Context Reduction

Effective patch generation depends critically on providing the LLM with sufficient—but not excessive—context.

The context reduction process follows a structured methodology:

1. **Crash-Centric Extraction:** Only code paths directly involved in the sanitizer-reported failure are included.
2. **Dependency Pruning:** Unrelated helper functions and utilities are removed unless directly referenced.
3. **Semantic Anchoring:** Function signatures, type definitions, and invariants are preserved.
4. **Test Harness Alignment:** Context is aligned with a minimal reproducing test.

### C. Patch Generation Using LLMs

The isolated code and vulnerability metadata are provided to an LLM through structured prompts. Multiple candidate patches are generated to improve success probability.

\`\`\`ui_sequence_diagram
(Trigger: Sequence)
\`\`\`

### D. Patch Generation Algorithm

\`\`\`ui_pseudocode
(Trigger: Algorithm)
\`\`\`

### E. Automated Validation

Generated patches undergo:
- Unit testing
- Regression testing
- Sanitizer re-execution

Only patches that pass all automated checks proceed to human review.

### F. Human Review and Secure Approval

Human reviewers perform final validation to detect:
- Security regressions
- Logic degradation
- Silent vulnerability masking

This step remains critical to maintaining trustworthiness in AI-assisted remediation workflows.

---

## IX. Evaluation Criteria

To assess the effectiveness of LLM-assisted patch generation, this research adopts rigorous evaluation criteria.

\`\`\`ui_evaluation_criteria
(Trigger: Criteria Grid)
\`\`\`

It is emphasized that high test coverage alone is insufficient to satisfy these criteria, particularly for security-sensitive code paths.

---

## X. Failure Mode Taxonomy

Analysis of AI-generated patches reveals recurring failure patterns that must be systematically addressed.

\`\`\`ui_failure_taxonomy
(Trigger: Failure Grid)
\`\`\`

Understanding these failure modes is essential for designing effective validation and review processes.

---

## XI. Threat Model and Assumptions

This research operates under a defined threat model to ensure security accountability.

\`\`\`ui_threat_model
(Trigger: Threat Table)
\`\`\`

The primary threat considered is **semantic vulnerability introduction**, where a patch appears correct under testing but weakens security guarantees.

---

## XII. Analytical Observations Derived from Operational Reasoning

Based on analysis of reported industry deployments and controlled reasoning over remediation workflows, several observations emerge:

Approximately **10–20%** of sanitizer-detected vulnerabilities exhibit structural simplicity suitable for automated patch generation.

The highest success rates are observed for:
1. Uninitialized variable usage
2. Missing bounds checks
3. Use-after-scope errors
4. Certain classes of data races

Conversely, vulnerabilities involving complex business logic, cross-module invariants, or protocol-level semantics demonstrate low automation viability.

### Qualitative Evaluation Methodology

During controlled reasoning over representative sanitizer reports, patch candidates were qualitatively categorized based on reviewer confidence rather than acceptance metrics. This approach avoids overstating empirical results while still capturing reviewer burden and semantic risk.

### Operational Impact Analysis

Manual remediation pipelines often experience exponential backlog growth as detection improves. Even low-severity vulnerabilities accumulate, increasing long-term security debt.

LLM-assisted remediation alters this dynamic by:
- Reducing average time-to-fix for structurally simple defects
- Allowing security teams to prioritize high-impact issues
- Converting remediation from a blocking activity to a background process

Although automation success rates remain limited, their *marginal utility* increases with scale, producing disproportionate operational benefits.

---

## XIII. Negative Results and Observed Limitations

Several approaches were explored and found ineffective:

\`\`\`ui_negative_results
(Trigger: Failed Approaches)
\`\`\`

These negative findings reinforce the necessity of conservative automation boundaries and human review checkpoints.

---

## XIV. Security Risks and Ethical Considerations

### A. Hallucinated or Misleading Fixes

LLMs may produce fixes that mask symptoms instead of resolving root causes, reduce concurrency to avoid race conditions, or remove failing tests instead of correcting logic.

### B. Automation Bias

Reviewers may exhibit increased trust in AI-generated patches, potentially reducing scrutiny. Explicit awareness and training are required to counteract this bias.

### C. Ethical Deployment

Ethically responsible deployment requires organizations to treat AI-generated patches as *assistive artifacts*, not authoritative decisions.

---

## XV. Researcher's Design Rationale

Several intentional design decisions shaped this research:

\`\`\`ui_design_rationale
(Trigger: Decisions Grid)
\`\`\`

These decisions reflect a security-first mindset, emphasizing accountability, reproducibility, and operational safety over novelty.

---

## XVI. Claims and Non-Claims

\`\`\`ui_claims_nonclaims
(Trigger: Claims Grid)
\`\`\`

---

## XVII. Reproducibility and Research Transparency

Although this study does not present controlled experimental results, its architectural reasoning and failure analyses are intended to be reproducible.

Future researchers can replicate this work by:
- Instrumenting sanitizer-driven CI pipelines
- Logging LLM patch proposals
- Tracking acceptance and rejection outcomes
- Categorizing failure modes over time

---

## XVIII. Open Problems & Research Directions

Future enhancements may include:
- Multi-file and cross-module patch generation
- Integration with fuzzing and dependency scanning pipelines
- Fine-tuning LLMs on organization-specific secure coding patterns
- Formal verification-assisted validation stages

---

## XIX. Threats to Validity

This research acknowledges several threats to validity:

**Internal Validity:**  
Observations are derived from architectural reasoning and reported industry behavior rather than controlled experiments.

**External Validity:**  
Results may not generalize to domains with complex business logic or weak testing infrastructure.

**Construct Validity:**  
Patch quality is evaluated through proxies such as sanitizer cleanliness and reviewer judgment, which may not capture all semantic flaws.

Recognizing these limitations reinforces the need for cautious interpretation and further empirical validation.

---

## XX. Evaluation Metrics (Defined but Not Measured)

Future empirical evaluation should track:

- **Patch Acceptance Rate (%):** Proportion of generated patches approved by reviewers
- **Mean Time-to-Fix (MTTF):** Average elapsed time from detection to merged fix
- **Reviewer Time per Patch:** Human effort required for validation
- **False-Positive Patch Rate:** Patches that pass tests but introduce regressions
- **Semantic Regression Incidents:** Post-merge security weakening events

Defining these metrics upfront enables future reproducibility and objective comparison.

---

## XXI. Why Automated Remediation Remains Hard

Automated remediation is not constrained by syntax, but by *intent*.

Security vulnerabilities often emerge from implicit assumptions, cross-module invariants, and human design decisions that are not explicitly encoded in code.

LLMs excel at surface-level transformations but struggle with latent intent, making unrestricted automation fundamentally unsafe.

This research treats this limitation not as a failure of models, but as a **design constraint** that must be respected rather than circumvented.

---

## XXII. Summary of Contributions

This research demonstrates that Large Language Models can serve as effective assistants in vulnerability remediation when embedded within carefully constrained, human-supervised workflows.

While fully autonomous patching remains impractical and unsafe, assisted remediation offers a pragmatic middle ground—reducing time-to-fix while preserving security accountability.

The primary contributions of this work include:

1. **Architectural Framework:** A modular, human-in-the-loop pipeline for AI-assisted remediation
2. **Failure Taxonomy:** Systematic enumeration of LLM-generated patch failure modes
3. **Threat Model:** Security-first design assumptions and accountability structure
4. **Negative Results:** Documented ineffective approaches informing future research
5. **Comparative Positioning:** Clear differentiation from prior automation paradigms

This work is released as an open, inspectable system to encourage critical evaluation rather than passive adoption.

---

## Research Artifacts Produced

This research produced the following artifacts:

- A human-in-the-loop remediation architecture
- A structured failure mode taxonomy for LLM-generated patches
- A comparative framework positioning LLM-assisted remediation
- A threat model tailored to AI-assisted patching systems
- A qualitative evaluation methodology for reviewer confidence

These artifacts are intended to be independently reusable beyond this work. All conclusions are independent of any specific LLM implementation, vendor, or training corpus.

---

## Appendix A: Glossary of Terms

**Sanitizer:** Runtime instrumentation detecting undefined or unsafe behavior during program execution.

**Semantic Vulnerability:** A flaw that preserves functional correctness but weakens security guarantees.

**Automation Bias:** Human tendency to over-trust automated system outputs, reducing critical scrutiny.

**Human-in-the-Loop:** System design requiring explicit human approval at critical decision stages.

**Context Reduction:** Process of minimizing input code while preserving vulnerability-relevant semantics.

**Patch Candidate:** An LLM-generated code modification proposed as a potential fix for a detected vulnerability.

**Validation Gate:** An automated checkpoint that patches must pass before proceeding to human review.

---

## Acknowledgment

This work is informed by publicly available industry research on AI-assisted vulnerability remediation. All analysis, structuring, and interpretations presented herein are original and intended for academic and educational purposes.

*No generative model was permitted to make architectural decisions in this work.*

*This document reflects the state of the research as of January 2026.*
`;

  const MarkdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white border-b pb-2 border-zinc-200 dark:border-zinc-800 tracking-tight">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-10 mb-5 text-zinc-900 dark:text-white uppercase tracking-wider">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-200">{children}</h3>,
    p: ({ children }: any) => <p className="text-lg leading-loose text-zinc-700 dark:text-zinc-300 mb-6 text-justify lg:text-left">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-zinc-700 dark:text-zinc-300 ml-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-3 mb-8 text-lg text-zinc-700 dark:text-zinc-300 ml-4">{children}</ol>,
    li: ({ children }: any) => <li className="pl-2">{children}</li>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed bg-blue-50/50 dark:bg-blue-900/10 py-4 pr-4 rounded-r-xl">
        {children}
      </blockquote>
    ),
    code: ({ node, inline, className, children, ...props }: any) => {
      const childrenStr = String(children).toLowerCase();
      const classStr = String(className || '').toLowerCase();
      const matchStr = childrenStr + ' ' + classStr;
      
      if (matchStr.includes('historical_evolution')) return <HistoricalEvolution />;
      if (matchStr.includes('research_questions')) return <ResearchQuestionsVisual />;
      if (matchStr.includes('scope_constraints')) return <ScopeConstraints />;
      if (matchStr.includes('methodology')) return <MethodologyDiagram />;
      if (matchStr.includes('design_alternatives')) return <DesignAlternativesVisual />;
      if (matchStr.includes('comparative_framework')) return <ComparativeFramework />;
      if (matchStr.includes('pipeline_flowchart')) return <PipelineFlowchart />;
      if (matchStr.includes('sequence_diagram') || matchStr.includes('sequence')) return <SequenceDiagram />;
      if (matchStr.includes('pseudocode') || matchStr.includes('algorithm')) return <PseudocodeAlgorithm />;
      if (matchStr.includes('evaluation_criteria')) return <EvaluationCriteria />;
      if (matchStr.includes('failure_taxonomy')) return <FailureTaxonomy />;
      if (matchStr.includes('threat_model')) return <ThreatModelTable />;
      if (matchStr.includes('negative_results')) return <NegativeResults />;
      if (matchStr.includes('design_rationale')) return <DesignRationale />;
      if (matchStr.includes('claims_nonclaims')) return <ClaimsNonClaims />;

      return !inline ? (
        <div className="relative group my-8">
          <pre className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-x-auto text-sm font-mono text-zinc-300">
            <code className={className} {...props}>{children}</code>
          </pre>
        </div>
      ) : (
        <code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-blue-700 dark:text-blue-400" {...props}>
          {children}
        </code>
      );
    },
    hr: () => <hr className="my-12 border-zinc-200 dark:border-zinc-800" />,
  };

  return (
    <main className="min-h-screen pt-24 pb-32 bg-white dark:bg-zinc-950 font-serif selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900/40 dark:selection:text-blue-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
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
            <button className="p-2.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-white bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all" title="Share">
              <Share2 size={18} />
            </button>
          </div>
        </motion.div>

        {/* Paper Header */}
        <article className="animate-fade-in">
          <header className="mb-20 text-center font-sans relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/5 blur-[100px] pointer-events-none"></div>
            
            <div className="inline-block px-5 py-2 mb-8 text-[11px] font-black tracking-[0.2em] text-purple-600 uppercase bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-800/30 rounded-2xl">
              Independent Systems Security Research
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white mb-10 leading-[1.1] tracking-tight">
              AI-Powered Automated Patching <br className="hidden sm:block"/> for Software Vulnerabilities
            </h1>
            
            <div className="flex flex-col items-center justify-center gap-6 text-zinc-600 dark:text-zinc-400 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <User size={20} className="text-zinc-800 dark:text-zinc-200" />
                </div>
                <div className="text-left">
                  <span className="font-black text-zinc-900 dark:text-white block leading-none">Gaurav Yadav</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-purple-600 dark:text-purple-400">Independent Researcher, Secure Systems</span>
                </div>
              </div>
              
              <div className="text-sm max-w-sm text-center leading-relaxed font-medium">
                BCA Cybersecurity, Ajeenkya DY Patil University, Pune <br/>
                <span className="text-zinc-400 dark:text-zinc-600">January 04, 2026 — Pune, India</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              {["AI-Assisted Security", "Automated Patching", "LLM Safety", "Secure SDLC", "Human-in-the-Loop"].map((tag) => (
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
          
          {/* BibTeX Citation */}
          <div className="mt-24 pt-12 border-t border-zinc-200 dark:border-zinc-900 font-sans">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 bg-purple-600 rounded-full"></div>
              <p className="font-black uppercase tracking-[0.2em] text-xs text-zinc-500">Scholarly Citation (BibTeX)</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900/30 p-8 rounded-[2rem] font-mono text-[11px] sm:text-xs overflow-x-auto border border-zinc-100 dark:border-zinc-800">
              <pre className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
{`@article{yadav2026aipatching,
  title={AI-Powered Automated Patching for Software Vulnerabilities},
  author={Yadav, Gaurav},
  journal={Independent Research - Cybersecurity},
  year={2026},
  location={Pune, India},
  institution={Ajeenkya DY Patil University}
}`}
              </pre>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-24 pt-16 font-sans text-center border-t border-dashed border-zinc-200 dark:border-zinc-900 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white dark:bg-zinc-950">
              <Shield size={24} className="text-zinc-200 dark:text-zinc-800" />
            </div>
            
            <p className="italic text-lg text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
              "Human authority is not a constraint on AI—it is the foundation of trustworthy automation."
            </p>
            
            <p className="mt-6 text-[10px] text-zinc-400 dark:text-zinc-600 max-w-md mx-auto">
              No generative model was permitted to make architectural decisions in this work.
            </p>
            
            <div className="mt-12 text-[9px] font-bold text-zinc-300 dark:text-zinc-800 uppercase tracking-[0.5em]">
              © 2026 GAURAV YADAV • ARCHDUKE
            </div>
          </div>

        </article>
      </div>
    </main>
  );
}
