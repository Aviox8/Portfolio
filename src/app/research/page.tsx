import { Search } from "lucide-react";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-apple-50 to-white dark:from-apple-950 dark:via-apple-900 dark:to-apple-950 text-apple-900 dark:text-apple-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-apple-900 dark:selection:text-white transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        <section id="research" className="scroll-mt-24">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                <Search size={24} className="text-orange-600 dark:text-orange-400" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-apple-900 dark:text-white">Research</h1>
            </div>
            <p className="text-lg sm:text-xl text-apple-600 dark:text-apple-300 max-w-3xl leading-relaxed animate-slide-up animate-delay-100">
              Foundational research in cybersecurity, network defense, and emerging security paradigms.
            </p>
          </div>
          
          {/* Research Section */}
          <div className="apple-card-elevated p-12 text-center border-2 border-orange-200 dark:border-orange-800 border-opacity-30 animate-slide-up animate-delay-200">
            <div className="w-20 h-20 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search size={40} className="text-orange-600 dark:text-orange-400 opacity-50" />
            </div>
            <h2 className="text-3xl font-bold text-apple-900 dark:text-white mb-4">Research In Progress</h2>
            <p className="text-apple-600 dark:text-apple-300 max-w-lg mx-auto leading-relaxed text-lg mb-8">
              I am actively working on foundational research in cybersecurity fundamentals, network defense strategies, and emerging threat landscapes. 
              Academic findings and experiment results will be shared here.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-orange-600 dark:bg-orange-400 animate-pulse" />
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">Actively Researching</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
