import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={24} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-900">Experience</h1>
          </div>
          
          <div className="space-y-6">
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-200">
              <div className="absolute left-[-5px] top-2 w-[12px] h-[12px] rounded-full bg-blue-600 border-4 border-white shadow-sm" />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-900">Co-Founder</h3>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">2026 · Zocav</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Focused on learning and early-stage exploration of product development and security architecture.
              </p>
            </div>

            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-200">
              <div className="absolute left-[-5px] top-2 w-[12px] h-[12px] rounded-full bg-slate-300 border-4 border-white shadow-sm" />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-900">Head of Technical Operations</h3>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">2025 · Mind Mesh Club, ADYPU</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Leading technical initiatives and managing infrastructure for the university's tech community.
              </p>
            </div>

            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-200">
              <div className="absolute left-[-5px] top-2 w-[12px] h-[12px] rounded-full bg-blue-600 border-4 border-white shadow-sm" />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-900">Exam Operations Manager & Server Administrator</h3>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">2025</span>
              </div>
              <p className="text-slate-700 font-semibold mb-1">MHTCET 2025 Exams | Maharashtra Government | Pimpri Chinchwad University, Talegaon</p>
              <p className="text-slate-600 leading-relaxed">
                Managed exam operations and server infrastructure for MHTCET 2025, ensuring smooth execution of Maharashtra's competitive entrance examinations across multiple centers.
              </p>
            </div>

            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-200">
              <div className="absolute left-[-5px] top-2 w-[12px] h-[12px] rounded-full bg-slate-300 border-4 border-white shadow-sm" />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-900">Marketing Associate</h3>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">2023</span>
              </div>
              <p className="text-slate-700 font-semibold mb-1">JioCinema | IPL Field Marketing & Promotions</p>
              <p className="text-slate-600 leading-relaxed">
                Executed field marketing and promotional campaigns for IPL on JioCinema across malls, public attractions, and high-density populated areas to drive brand awareness and user engagement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
