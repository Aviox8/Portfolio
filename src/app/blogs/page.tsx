import { BookOpen } from "lucide-react";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white text-apple-900 font-sans selection:bg-blue-100 selection:text-apple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section id="blogs" className="scroll-mt-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-100">
                <BookOpen size={24} className="text-blue-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-apple-900">Blogs</h1>
            </div>
            <p className="text-lg text-apple-600 max-w-2xl">Sharing insights on cybersecurity, web development, and technical learnings.</p>
          </div>
          
          <div className="apple-card flex flex-col items-center justify-center text-center py-20 border-2 border-dashed">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <BookOpen size={32} className="text-blue-600 opacity-40" />
            </div>
            <h2 className="text-2xl font-bold text-apple-900 mb-2">Technical Blogs Coming Soon</h2>
            <p className="text-apple-600 max-w-sm mx-auto leading-relaxed">
              I am currently documenting my learning journey in cybersecurity and web development. 
              Write-ups and tutorials will be posted here soon.
            </p>
            <div className="mt-8 px-4 py-2 bg-apple-100 rounded-full text-xs font-bold text-apple-600 uppercase tracking-widest">
              Under Construction
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
