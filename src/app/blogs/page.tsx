import Link from "next/link";
import { BookOpen, Shield, Lock, Package, AlertTriangle, Key } from "lucide-react";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-apple-50 to-white dark:from-apple-950 dark:via-apple-900 dark:to-apple-950 text-apple-900 dark:text-apple-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-apple-900 dark:selection:text-white transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        <section id="blogs" className="scroll-mt-24">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <BookOpen size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-apple-900 dark:text-white">Blogs</h1>
            </div>
            <p className="text-lg sm:text-xl text-apple-600 dark:text-apple-300 max-w-3xl leading-relaxed animate-slide-up animate-delay-100">
              Sharing insights on cybersecurity, web development, and technical learnings from my journey.
            </p>
          </div>
          
          {/* Blog Grid */}
          <div className="grid gap-8 animate-slide-up animate-delay-200">
            
            {/* Bun Blog Card */}
            <Link href="/blogs/bun-runtime" className="group relative block w-full">
              <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                 <div className="flex flex-col md:flex-row h-full">
                    {/* Image / Graphic Side */}
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden bg-[#0f0f11]">
                        {/* CSS Graphic Placeholder representing the Bun Post Hero */}
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[60px]"></div>
                          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[60px]"></div>
                          <div className="bg-[#1a1b1e] p-6 rounded-xl border border-zinc-700/50 shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                             <div className="font-mono text-zinc-300 text-sm">
                                <span className="text-pink-500">➜</span> <span className="text-cyan-400">~</span> bun install <span className="animate-pulse">⚡</span>
                             </div>
                             <div className="mt-2 h-2 w-24 bg-zinc-700 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-2/3"></div>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 p-8 flex flex-col justify-center">
                       <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md">Jan 04, 2026</span>
                          <span className="text-cyan-600 dark:text-cyan-400">Engineering</span>
                       </div>
                       
                       <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                         Bun: Rethinking the JavaScript Runtime
                       </h2>
                       
                       <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                         A deep dive into Bun — the modern JavaScript runtime built for speed, simplicity, and full-stack development. Learn why it&apos;s changing the tooling landscape.
                       </p>
                       
                       <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 transition-all">
                          Read Article <span className="ml-2">→</span>
                       </div>
                    </div>
                 </div>
              </div>
            </Link>

            {/* Runtime Comparison Blog Card */}
            <Link href="/blogs/bun-vs-node-vs-deno" className="group relative block w-full">
              <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                 <div className="flex flex-col md:flex-row-reverse h-full"> 
                    {/* Image / Graphic Side */}
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden bg-[#1e1e1e]">
                       <div className="absolute inset-0 flex">
                          <div className="w-1/3 h-full bg-green-900/20 border-r border-white/5 group-hover:bg-green-500/20 transition-colors duration-500 flex items-end justify-center pb-8">
                             <div className="w-3 h-16 bg-green-500 rounded-t-lg shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                          </div>
                          <div className="w-1/3 h-full bg-blue-900/20 border-r border-white/5 group-hover:bg-blue-500/20 transition-colors duration-500 flex items-end justify-center pb-8">
                             <div className="w-3 h-24 bg-blue-500 rounded-t-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                          </div>
                           <div className="w-1/3 h-full bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors duration-500 flex items-end justify-center pb-8">
                             <div className="w-3 h-32 bg-white rounded-t-lg shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse"></div>
                          </div>
                       </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 p-8 flex flex-col justify-center">
                       <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md">Jan 04, 2026</span>
                          <span className="text-blue-600 dark:text-blue-400">Comparison</span>
                       </div>
                       
                       <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                         Bun vs Node.js vs Deno
                       </h2>
                       
                       <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                         A deep showdown between the three major JavaScript runtimes. We compare performance, security, ecosystem, and help you decide which one fits your next project.
                       </p>
                       
                       <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 transition-all">
                          Read The Showdown <span className="ml-2">→</span>
                       </div>
                    </div>
                 </div>
              </div>
            </Link>

            {/* Placeholder for future posts */}
            {/* Recent Security Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               
               {/* 1. Zero Days */}
               <Link href="/blogs/most-attacks-dont-need-zero-days" className="group relative block w-full h-full">
                  <div className="h-full flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                     <div className="p-6 bg-red-50 dark:bg-red-900/10 border-b border-red-100 dark:border-red-900/20 flex items-center justify-between">
                         <Shield className="text-red-500" size={32} />
                         <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest bg-white dark:bg-black/20 px-2 py-1 rounded">Cybersecurity</span>
                     </div>
                     <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                           Why Most Cyber Attacks Don&apos;t Need Zero-Days
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                           Most breaches happen because of things we already know are broken. A breakdown of real-world attack vectors.
                        </p>
                     </div>
                     <div className="px-6 pb-6 pt-0 mt-auto">
                        <span className="text-sm font-semibold text-red-600 dark:text-red-400 flex items-center gap-1">Read Article <span className="transition-transform group-hover:translate-x-1">→</span></span>
                     </div>
                  </div>
               </Link>

               {/* 2. Env Vars */}
               <Link href="/blogs/environment-variables-security" className="group relative block w-full h-full">
                  <div className="h-full flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                     <div className="p-6 bg-yellow-50 dark:bg-yellow-900/10 border-b border-yellow-100 dark:border-yellow-900/20 flex items-center justify-between">
                         <Key className="text-yellow-600 dark:text-yellow-500" size={32} />
                         <span className="text-xs font-bold text-yellow-700 dark:text-yellow-500 uppercase tracking-widest bg-white dark:bg-black/20 px-2 py-1 rounded">Secrets</span>
                     </div>
                     <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors">
                           The Real Security Risk of Environment Variables
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                           Environment variables are convenient, not safe. How they leak and what to use instead for secrets management.
                        </p>
                     </div>
                     <div className="px-6 pb-6 pt-0 mt-auto">
                        <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-500 flex items-center gap-1">Read Article <span className="transition-transform group-hover:translate-x-1">→</span></span>
                     </div>
                  </div>
               </Link>

               {/* 3. Dependencies */}
               <Link href="/blogs/dependency-security-problem" className="group relative block w-full h-full">
                  <div className="h-full flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                     <div className="p-6 bg-purple-50 dark:bg-purple-900/10 border-b border-purple-100 dark:border-purple-900/20 flex items-center justify-between">
                         <Package className="text-purple-500" size={32} />
                         <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest bg-white dark:bg-black/20 px-2 py-1 rounded">Supply Chain</span>
                     </div>
                     <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                           Why Dependency Security Is a Bigger Problem
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                           Modern apps fail because they trust code they didn&apos;t write. Exploring the hidden attack surface of npm and supply chains.
                        </p>
                     </div>
                     <div className="px-6 pb-6 pt-0 mt-auto">
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1">Read Article <span className="transition-transform group-hover:translate-x-1">→</span></span>
                     </div>
                  </div>
               </Link>

            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
