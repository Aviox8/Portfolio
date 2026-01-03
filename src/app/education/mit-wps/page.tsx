import { GraduationCap, MapPin, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MITWPSPage() {
  const images = [
    { src: "/MIT WPS/1000023951.png", alt: "MIT World Peace School Campus", caption: "School event memories" },
    { src: "/MIT WPS/IMG_20231109_124020_146.jpg", alt: "MIT WPS Student Life", caption: "Academic activities and workshops" },
    { src: "/MIT WPS/IMG-20230812-WA0042.jpg", alt: "MIT WPS Group", caption: "Memorable moments with classmates" },
    { src: "/MIT WPS/IMG-20231214-WA0010.jpg", alt: "MIT WPS Activity", caption: "Sports and extracurriculars" },
    { src: "/MIT WPS/IMG-20250125-WA0034.jpg", alt: "MIT WPS Graduation/Event", caption: "Celebrating milestones" },
  ];

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
              <h1 className="text-3xl font-bold text-slate-900 mb-2">MIT World Peace School</h1>
              <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  Alandi, Pune
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  2023 — 2025
                </span>
              </div>
            </div>
            <span className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
              High School
            </span>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              My time at <span className="text-slate-900 font-semibold">MIT World Peace School</span> in Alandi was a period of significant growth. 
              The school's emphasis on holistic development and value-based education helped me build a strong foundation for my future studies.
            </p>
            <p>
              It was during these years that I started exploring my interest in technology and cybersecurity more seriously, 
              balancing academic excellence with technical curiosity.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <GraduationCap size={20} className="text-blue-600" />
            School Memories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-square overflow-hidden">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-600 font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
