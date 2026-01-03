import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SeekEngineProject() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Projects</span>
        </Link>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">SeekEngine</h1>
                <p className="text-slate-500 font-medium">Advanced Information Retrieval System</p>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/archduke1337/SeekEngine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="prose prose-slate max-w-none mb-12">
              <p className="text-slate-600 leading-relaxed text-lg">
                SeekEngine is a modern, open-source search engine powered by Google Custom Search API. It provides a clean, minimal, and highly responsive interface with theme-aware design, dark/light mode support, and a playful "teleport" discovery feature. Built for speed and accessibility, SeekEngine delivers Google-backed search results without the clutter.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Google-Powered Search</h3>
                  <p className="text-slate-600">Leverages Google Custom Search API for accurate, up-to-date search results</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Theme-Aware Design</h3>
                  <p className="text-slate-600">Responsive UI with light/dark mode and system preference detection</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Teleport Discovery</h3>
                  <p className="text-slate-600">Jump to curated, delightful corners of the web for random inspiration</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Fast & Minimal</h3>
                  <p className="text-slate-600">Lightning-fast performance with clean interface and zero clutter</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-100">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React 18", "Google Search API", "Tailwind CSS", "Heroicons", "Vercel"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-slate-50 text-slate-600 text-sm font-medium rounded-xl border border-slate-200">
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
