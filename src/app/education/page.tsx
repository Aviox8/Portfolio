import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white text-apple-900 font-sans selection:bg-blue-100 selection:text-apple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section id="education" className="scroll-mt-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-100">
                <GraduationCap size={24} className="text-purple-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-apple-900">Education</h1>
            </div>
            <p className="text-lg text-apple-600 max-w-2xl">My academic journey and continuous learning at prestigious institutions.</p>
          </div>
          
          <div className="space-y-6">
            <div className="apple-card group relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-apple-900">BCA in Cybersecurity</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    2025 — 2028
                  </span>
                </div>
                <p className="text-lg text-apple-700 font-medium mb-4">Ajeenkya DY Patil University (ADYPU), Pune</p>
                <div className="mt-4 flex flex-wrap justify-between items-end gap-4">
                  <div className="text-sm text-apple-600">
                    <span className="font-bold text-apple-500 uppercase text-xs tracking-widest block mb-1">Industry Partner</span>
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
              <div className="apple-card-hover group flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-apple-900">MIT World Peace School</h3>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wider">2023 — 2025</span>
                </div>
                <p className="text-sm text-apple-600">High School</p>
                <p className="text-xs text-apple-500 mt-1">Alandi, Pune</p>
                <div className="mt-auto pt-4">
                  <Link 
                    href="/education/mit-wps" 
                    className="inline-flex items-center gap-2 text-apple-500 group-hover:text-blue-600 text-xs font-bold hover:gap-3 transition-all"
                  >
                    VIEW SCHOOL LIFE
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="apple-card-hover group flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-apple-900">Spicer Higher Secondary School</h3>
                  <span className="text-xs font-bold text-apple-500 bg-apple-50 px-2 py-1 rounded-full uppercase tracking-wider">2021 — 2023</span>
                </div>
                <p className="text-sm text-apple-600">Secondary School</p>
                <p className="text-xs text-apple-500 mt-1">Pune, Maharashtra</p>
                <div className="mt-auto pt-4">
                  <Link 
                    href="/education/spicer" 
                    className="inline-flex items-center gap-2 text-apple-500 group-hover:text-blue-600 text-xs font-bold hover:gap-3 transition-all"
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
