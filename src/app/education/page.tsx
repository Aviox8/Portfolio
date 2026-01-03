import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section id="education" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={24} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-900">Education</h1>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 mb-4">
                  <h3 className="text-xl font-bold text-slate-900">BCA in Cybersecurity</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    2025 — 2028
                  </span>
                </div>
                <p className="text-slate-700 font-medium text-lg">Ajeenkya DY Patil University (ADYPU), Pune</p>
                <div className="mt-4 flex flex-wrap justify-between items-end gap-4">
                  <div className="text-sm text-slate-500">
                    <span className="font-bold text-slate-400 uppercase text-[10px] tracking-widest block mb-1">Industry Partner</span>
                    SeamEdu Industry Training
                  </div>
                  <Link 
                    href="/education/adypu" 
                    className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold hover:gap-3 transition-all"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-100 transition-all flex flex-col group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900">MIT World Peace School</h3>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wider">2023 — 2025</span>
                </div>
                <p className="text-sm text-slate-600">High School</p>
                <p className="text-xs text-slate-400 mt-1">Alandi, Pune</p>
                <div className="mt-auto pt-4">
                  <Link 
                    href="/education/mit-wps" 
                    className="inline-flex items-center gap-2 text-slate-400 group-hover:text-blue-600 text-xs font-bold hover:gap-3 transition-all"
                  >
                    VIEW SCHOOL LIFE
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-100 transition-all flex flex-col group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900">Spicer Higher Secondary School</h3>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-full uppercase tracking-wider">2021 — 2023</span>
                </div>
                <p className="text-sm text-slate-600">Secondary School</p>
                <p className="text-xs text-slate-400 mt-1">Pune, Maharashtra</p>
                <div className="mt-auto pt-4">
                  <Link 
                    href="/education/spicer" 
                    className="inline-flex items-center gap-2 text-slate-400 group-hover:text-blue-600 text-xs font-bold hover:gap-3 transition-all"
                  >
                    VIEW MEMORIES
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
