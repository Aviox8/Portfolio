import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white text-apple-900 font-sans selection:bg-blue-100 selection:text-apple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section id="experience" className="scroll-mt-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-100">
                <Briefcase size={24} className="text-amber-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-apple-900">Experience</h1>
            </div>
            <p className="text-lg text-apple-600 max-w-2xl">My professional journey and key roles that shaped my expertise.</p>
          </div>
          
          <div className="space-y-6">
            <div className="apple-card relative pl-8 border-l-4 border-blue-600 before:hidden">
              <div className="absolute left-[-14px] top-6 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-apple-sm" />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 mb-2">
                <h3 className="text-lg font-bold text-apple-900">Co-Founder</h3>
                <span className="text-xs font-bold text-apple-600 uppercase tracking-widest">2026 · Zocav</span>
              </div>
              <p className="text-apple-600 leading-relaxed">
                Focused on learning and early-stage exploration of product development and security architecture.
              </p>
            </div>

            <div className="apple-card relative pl-8 border-l-4 border-apple-400 before:hidden">
              <div className="absolute left-[-14px] top-6 w-6 h-6 rounded-full bg-apple-300 border-4 border-white shadow-apple-sm" />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 mb-2">
                <h3 className="text-lg font-bold text-apple-900">Head of Technical Operations</h3>
                <span className="text-xs font-bold text-apple-600 uppercase tracking-widest">2025 · Mind Mesh Club, ADYPU</span>
              </div>
              <p className="text-apple-600 leading-relaxed">
                Leading technical initiatives and managing infrastructure for the university's tech community.
              </p>
            </div>

            <div className="apple-card relative pl-8 border-l-4 border-blue-600 before:hidden">
              <div className="absolute left-[-14px] top-6 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-apple-sm" />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 mb-2">
                <h3 className="text-lg font-bold text-apple-900">Exam Operations Manager & Server Administrator</h3>
                <span className="text-xs font-bold text-apple-600 uppercase tracking-widest">2025</span>
              </div>
              <p className="text-apple-900 font-semibold mb-1">MHTCET 2025 Exams | Maharashtra Government | Pimpri Chinchwad University, Talegaon</p>
              <p className="text-apple-600 leading-relaxed">
                Managed exam operations and server infrastructure for MHTCET 2025, ensuring smooth execution of Maharashtra's competitive entrance examinations across multiple centers.
              </p>
            </div>

            <div className="apple-card relative pl-8 border-l-4 border-apple-400 before:hidden">
              <div className="absolute left-[-14px] top-6 w-6 h-6 rounded-full bg-apple-300 border-4 border-white shadow-apple-sm" />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 mb-2">
                <h3 className="text-lg font-bold text-apple-900">Marketing Associate</h3>
                <span className="text-xs font-bold text-apple-600 uppercase tracking-widest">2023</span>
              </div>
              <p className="text-apple-900 font-semibold mb-1">JioCinema | IPL Field Marketing & Promotions</p>
              <p className="text-apple-600 leading-relaxed">
                Executed field marketing and promotional campaigns for IPL on JioCinema across malls, public attractions, and high-density populated areas to drive brand awareness and user engagement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
