import { Search, FileText, Globe, Shield } from "lucide-react";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-apple-50 to-white dark:from-apple-950 dark:via-apple-900 dark:to-apple-950 text-apple-900 dark:text-apple-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-apple-900 dark:selection:text-white transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <section id="research" className="scroll-mt-24">
          {/* Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-orange-100 dark:bg-orange-900/30">
                <Search size={20} className="sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-apple-900 dark:text-white">Research</h1>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-apple-600 dark:text-apple-300 max-w-3xl leading-relaxed animate-slide-up animate-delay-100">
              Foundational research in cybersecurity, network defense, and emerging security paradigms.
            </p>
          </div>
          
          {/* Research Grid */}
          <div className="grid gap-6 sm:gap-7 lg:gap-8 animate-slide-up animate-delay-200">

            {/* AI Patching Research Card */}
            <Link href="/research/ai-powered-automated-patching" className="group relative block w-full">
               <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row h-full">
                     {/* Graphic Side */}
                     <div className="relative w-full sm:w-1/3 min-h-[180px] sm:min-h-[250px] bg-blue-50 dark:bg-blue-900/10 sm:border-r border-b sm:border-b-0 border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-6 sm:p-8">
                        <div className="relative w-48 h-64 bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-800 rounded-sm flex flex-col p-4 group-hover:scale-105 transition-transform duration-500">
                           <div className="flex items-center gap-2 mb-4">
                              <Shield size={16} className="text-blue-600" />
                              <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
                           </div>
                           <div className="space-y-3">
                              <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
                              <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
                              <div className="h-1.5 w-3/4 bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
                           </div>
                           <div className="mt-6 space-y-2">
                              {[...Array(3)].map((_, i) => (
                                 <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
                                 </div>
                              ))}
                           </div>
                           <div className="mt-auto flex justify-between items-center text-[10px] text-zinc-400 font-mono">
                              <span>PAPER-2026</span>
                              <FileText size={12} />
                           </div>
                           {/* Badge */}
                           <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-200 dark:border-blue-800 shadow-sm">
                              Published
                           </div>
                        </div>
                     </div>

                     {/* Content Side */}
                     <div className="flex-1 p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                           <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md">Research Paper</span>
                           <span className="text-zinc-600 dark:text-zinc-400">Jan 2026</span>
                        </div>
                        
                        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                           AI-Powered Automated Patching for Software Vulnerabilities
                        </h2>
                        
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                           Investigating the feasibility of integrating Large Language Models (LLMs) into an automated vulnerability remediation pipeline. Analysis, risks, and future directions for secure software engineering.
                        </p>
                        
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 transition-all">
                           Read Paper <span className="ml-2">→</span>
                        </div>
                     </div>
                  </div>
               </div>
            </Link>

            {/* SeekEngine Research Card */}
            <Link href="/research/seekengine" className="group relative block w-full">
               <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row h-full">
                     {/* Graphic Side */}
                     <div className="relative w-full md:w-1/3 min-h-[250px] bg-orange-50 dark:bg-orange-900/10 border-r border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-8">
                        <div className="relative w-48 h-64 bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-800 rounded-sm flex flex-col p-4 group-hover:scale-105 transition-transform duration-500">
                           <div className="flex items-center gap-2 mb-4">
                              <Search size={16} className="text-orange-600" />
                              <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
                           </div>
                           <div className="space-y-3">
                              <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
                              <div className="h-2 w-5/6 bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
                              <div className="h-2 w-4/6 bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
                           </div>
                           <div className="mt-8 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50">
                              <div className="h-1.5 w-full bg-blue-200 dark:bg-blue-800 rounded-full mb-2"></div>
                              <div className="h-1.5 w-3/4 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                           </div>
                           <div className="mt-auto flex justify-between items-center text-[10px] text-zinc-400 font-mono">
                              <span>SEEK-2026</span>
                              <div className="flex gap-1">
                                 <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                                 <Globe size={12} />
                              </div>
                           </div>
                           <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-[10px] font-bold uppercase tracking-wider rounded border border-orange-200 dark:border-orange-800 shadow-sm">
                              Independent
                           </div>
                        </div>
                     </div>

                     {/* Content Side */}
                     <div className="flex-1 p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                           <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-md">Research Note</span>
                           <span className="text-zinc-600 dark:text-zinc-400">Jan 2026</span>
                        </div>
                        
                        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                           SeekEngine: A Hybrid RAG Approach to Truthful Search
                        </h2>
                        
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                           A messy yet effective attempt at combining Google Custom Search with LLMs to reduce AI hallucinations. Real-world testing shows a 40% reduction in misinformation through grounded generation.
                        </p>
                        
                        <div className="flex items-center text-orange-600 dark:text-orange-400 font-semibold group-hover:gap-2 transition-all">
                           Explore Research <span className="ml-2">→</span>
                        </div>
                     </div>
                  </div>
               </div>
            </Link>

            {/* Placeholder for future research */}
            <div className="apple-card-elevated p-12 text-center border-2 border-orange-200 dark:border-orange-800 border-opacity-30 border-dashed bg-transparent shadow-none">
              <div className="w-16 h-16 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-orange-600 dark:text-orange-400 opacity-50" />
              </div>
              <h3 className="text-xl font-bold text-apple-900 dark:text-white mb-2">More Research Coming Soon</h3>
              <p className="text-apple-600 dark:text-apple-300 max-w-lg mx-auto leading-relaxed text-sm mb-6">
                I am actively conducting research in network defense strategies and emerging threats.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-400 animate-pulse" />
                <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">In Progress</span>
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
