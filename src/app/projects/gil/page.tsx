import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GilProject() {
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
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Gil Project</h1>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">Security & Web Exploration Platform</p>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/archduke1337/Gil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none mb-12">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                GIL (Gemological Institute Laboratories) is a professional diamond certification and verification platform. It features a comprehensive gemstone encyclopedia, advanced analysis & grading services, AI-powered recommendations, and a secure admin panel for certificate management. The platform provides professionals with state-of-the-art tools for gemological examination and certification verification.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Certificate Verification</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Verify authentic diamond certificates using reference numbers with instant results</p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Gem Encyclopedia</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Comprehensive database with detailed information on 200+ gemstone varieties</p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4">
                    <Minimize2 size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Analysis & Grading</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Professional 3D gem visualization and GIA-standard testing methods</p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
                    <Settings size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Admin Dashboard</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Secure management interface for certificate uploads and bulk operations</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-zinc-100 dark:border-zinc-800">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {["React 18", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PostgreSQL", "Express"].map((tech) => (
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
