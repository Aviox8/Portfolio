import { BookOpen } from "lucide-react";

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
          
          {/* Coming Soon Section */}
          <div className="apple-card-elevated p-12 text-center border-2 border-blue-200 dark:border-blue-800 border-opacity-30 animate-slide-up animate-delay-200">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <BookOpen size={40} className="text-blue-600 dark:text-blue-400 opacity-50" />
            </div>
            <h2 className="text-3xl font-bold text-apple-900 dark:text-white mb-4">Technical Blogs Coming Soon</h2>
            <p className="text-apple-600 dark:text-apple-300 max-w-lg mx-auto leading-relaxed text-lg mb-8">
              I am currently documenting my learning journey in cybersecurity and web development. 
              In-depth write-ups, tutorials, and technical insights will be published here soon.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Under Construction</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
