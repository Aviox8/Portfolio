import { BookOpen } from "lucide-react";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section id="blogs" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={24} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-900">Blogs</h1>
          </div>
          
          <div className="bg-white p-12 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <BookOpen size={32} className="text-blue-600 opacity-20" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Technical Blogs Coming Soon</h2>
            <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
              I am currently documenting my learning journey in cybersecurity and web development. 
              Write-ups and tutorials will be posted here soon.
            </p>
            <div className="mt-8 px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest">
              Under Construction
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
