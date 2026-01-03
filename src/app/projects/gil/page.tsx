import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GilProject() {
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
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Gil Project</h1>
                <p className="text-slate-500 font-medium">Security & Web Exploration Platform</p>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/archduke1337/Gil" 
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
                GIL (Gemological Institute Laboratories) is a professional diamond certification and verification platform. It features a comprehensive gemstone encyclopedia, advanced analysis & grading services, AI-powered recommendations, and a secure admin panel for certificate management. The platform provides professionals with state-of-the-art tools for gemological examination and certification verification.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Certificate Verification</h3>
                  <p className="text-slate-600">Verify authentic diamond certificates using reference numbers with instant results</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Gem Encyclopedia</h3>
                  <p className="text-slate-600">Comprehensive database with detailed information on 200+ gemstone varieties</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Analysis & Grading</h3>
                  <p className="text-slate-600">Professional 3D gem visualization and GIA-standard testing methods</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Admin Dashboard</h3>
                  <p className="text-slate-600">Secure management interface for certificate uploads and bulk operations</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-100">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {["React 18", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PostgreSQL", "Express"].map((tech) => (
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
