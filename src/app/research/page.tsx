import { Search } from "lucide-react";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white text-apple-900 font-sans selection:bg-blue-100 selection:text-apple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section id="research" className="scroll-mt-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-100">
                <Search size={24} className="text-orange-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-apple-900">Research</h1>
            </div>
            <p className="text-lg text-apple-600 max-w-2xl">Foundational research in cybersecurity and network defense.</p>
          </div>
          
          <div className="apple-card flex flex-col items-center justify-center text-center py-20 border-2 border-dashed">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <Search size={32} className="text-orange-600 opacity-40" />
            </div>
            <h2 className="text-2xl font-bold text-apple-900 mb-2">Research In Progress</h2>
            <p className="text-apple-600 max-w-sm mx-auto leading-relaxed">
              I am currently working on foundational research in cybersecurity fundamentals and network defense. 
              Academic notes and experiment results will be shared here.
            </p>
            <div className="mt-8 px-4 py-2 bg-orange-50 rounded-full text-xs font-bold text-orange-600 uppercase tracking-widest">
              Actively Researching
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
