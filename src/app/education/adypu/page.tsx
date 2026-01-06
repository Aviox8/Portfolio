import { GraduationCap, MapPin, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ADYPUPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-apple-50 to-white dark:from-apple-950 dark:via-apple-900 dark:to-apple-950 text-apple-900 dark:text-apple-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-apple-900 dark:selection:text-white transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link 
          href="/education" 
          className="inline-flex items-center gap-2 text-apple-500 dark:text-apple-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Education</span>
        </Link>

        <section className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-apple-900 dark:text-white mb-2">Ajeenkya DY Patil University (ADYPU)</h1>
              <div className="flex flex-wrap gap-4 text-apple-500 dark:text-apple-400 text-sm">
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
            <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider">
              Currently Pursuing
            </span>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none text-apple-600 dark:text-apple-300 leading-relaxed space-y-4">
            <p>
              At ADYPU, I am pursuing my <span className="text-apple-900 dark:text-white font-semibold">BCA in Cybersecurity</span>. 
              The university provides a dynamic environment that fosters innovation and hands-on learning, which is crucial for a field as fast-paced as cybersecurity.
            </p>
            <p>
              My journey here is enriched by industry-aligned training through <span className="text-apple-900 dark:text-white font-semibold">SeamEdu</span>, 
              giving me exposure to real-world security challenges and modern defense strategies.
            </p>
            <p>
              I&apos;ve also had the opportunity to represent the technical community here, participating in events like the <span className="text-apple-900 dark:text-white font-semibold">Smart India Hackathon (SIH)</span>, 
              where we worked on solving complex problems under pressure.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-apple-900 dark:text-white mb-6 flex items-center gap-2">
            <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
            Campus Life & Events
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="group overflow-hidden rounded-2xl border border-apple-200 dark:border-apple-800 bg-white dark:bg-apple-900/20 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src="/ADYPU/sih.jpeg" 
                  alt="Smart India Hackathon at ADYPU" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-apple-900 dark:text-white">Smart India Hackathon (SIH)</h3>
                <p className="text-sm text-apple-500 dark:text-apple-400 mt-1">Participating in one of India&apos;s biggest hackathons, focusing on cybersecurity solutions.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
