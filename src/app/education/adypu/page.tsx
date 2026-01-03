import { GraduationCap, MapPin, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ADYPUPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link 
          href="/education" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Education</span>
        </Link>

        <section className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Ajeenkya DY Patil University (ADYPU)</h1>
              <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  Lohegaon, Pune
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  2025 — 2028
                </span>
              </div>
            </div>
            <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
              Currently Pursuing
            </span>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              At ADYPU, I am pursuing my <span className="text-slate-900 font-semibold">BCA in Cybersecurity</span>. 
              The university provides a dynamic environment that fosters innovation and hands-on learning, which is crucial for a field as fast-paced as cybersecurity.
            </p>
            <p>
              My journey here is enriched by industry-aligned training through <span className="text-slate-900 font-semibold">SeamEdu</span>, 
              giving me exposure to real-world security challenges and modern defense strategies.
            </p>
            <p>
              I've also had the opportunity to represent the technical community here, participating in events like the <span className="text-slate-900 font-semibold">Smart India Hackathon (SIH)</span>, 
              where we worked on solving complex problems under pressure.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <GraduationCap size={20} className="text-blue-600" />
            Campus Life & Events
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src="/ADYPU/sih.jpeg" 
                  alt="Smart India Hackathon at ADYPU" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900">Smart India Hackathon (SIH)</h3>
                <p className="text-sm text-slate-500 mt-1">Participating in one of India's biggest hackathons, focusing on cybersecurity solutions.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
