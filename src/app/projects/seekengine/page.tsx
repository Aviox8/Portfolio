import { ArrowLeft, Github, ExternalLink, Search, Moon, Zap, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SeekEngineProject() {
  return (
    <main className="min-h-screen bg-apple-gradient text-zinc-900 dark:text-white font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-white transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Projects</span>
        </Link>

        <section className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden transition-colors duration-500">
          <div className="p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">SeekEngine</h1>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">Advanced Information Retrieval System</p>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://seekengine.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors shadow-sm font-semibold text-sm"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
                <Link 
                  href="/research/seekengine" 
                  className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors shadow-sm"
                  title="View Research Paper"
                >
                  <Search size={20} />
                </Link>
                <a 
                  href="https://github.com/Aviox8/SeekEngine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Project Hero Image */}
            <div className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800 group">
                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                <Image 
                  src="/Project/SeekEngine/img.png" 
                  alt="SeekEngine Searching Interface" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none mb-12">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                SeekEngine is a modern, open-source search engine powered by Google Custom Search API. It provides a clean, minimal, and highly responsive interface with theme-aware design, dark/light mode support, and a playful &quot;teleport&quot; discovery feature. Built for speed and accessibility, SeekEngine delivers Google-backed search results without the clutter.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    <Search size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Google-Powered Search</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Leverages Google Custom Search API for accurate, up-to-date search results</p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    <Moon size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Theme-Aware Design</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Responsive UI with light/dark mode and system preference detection</p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                    <Globe size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Teleport Discovery</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Jump to curated, delightful corners of the web for random inspiration</p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
                    <Zap size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Fast & Minimal</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Lightning-fast performance with clean interface and zero clutter</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-zinc-100 dark:border-zinc-800">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React 18", "Google Search API", "Tailwind CSS", "Heroicons", "Vercel"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 text-sm font-medium rounded-xl border border-zinc-200 dark:border-zinc-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
