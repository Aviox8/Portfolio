import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section id="contact" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Send size={24} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="mailto:gaurav@example.com"
              className="group flex flex-col p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all"
            >
              <Mail size={24} className="text-slate-400 group-hover:text-rose-600 transition-colors mb-4" />
              <span className="text-sm font-bold text-slate-900">Email</span>
              <span className="text-xs text-slate-500 mt-1 truncate">gaurav@example.com</span>
            </a>
            <a
              href="https://github.com/archduke1337"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all"
            >
              <Github size={24} className="text-slate-400 group-hover:text-slate-900 transition-colors mb-4" />
              <span className="text-sm font-bold text-slate-900">GitHub</span>
              <span className="text-xs text-slate-500 mt-1">@archduke1337</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gurvv/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all"
            >
              <Linkedin size={24} className="text-slate-400 group-hover:text-blue-600 transition-colors mb-4" />
              <span className="text-sm font-bold text-slate-900">LinkedIn</span>
              <span className="text-xs text-slate-500 mt-1">@gurvv</span>
            </a>
          </div>
          
          <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100">
            <p className="text-slate-700 leading-relaxed text-center">
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. 
              Feel free to reach out through any of the platforms above!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
