import { GraduationCap, MapPin, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SpicerPage() {
  const images = [
    { src: "/Spicer/100_1676.JPG", alt: "Spicer Higher Secondary School", caption: "Early school memories" },
    { src: "/Spicer/20160224_092340.jpg", alt: "Spicer Childhood", caption: "Nostalgic classroom moments" },
    { src: "/Spicer/20180228_104243.jpg", alt: "Spicer School Event", caption: "Participating in school activities" },
    { src: "/Spicer/20190228_112146.jpg", alt: "Spicer Campus", caption: "Campus life and friends" },
    { src: "/Spicer/IMG_20230717_150232_474.jpg", alt: "Spicer Farewell/Event", caption: "Final years at Spicer" },
    { src: "/Spicer/Screenshot_20230712_130154_Instagram.jpg", alt: "Spicer Instagram Memory", caption: "Sharing moments from school days" },
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
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Spicer Higher Secondary School</h1>
              <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  Pune, Maharashtra
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  2010 — 2023
                </span>
              </div>
            </div>
            <span className="px-4 py-1.5 bg-slate-100 text-slate-400 text-xs font-bold rounded-full uppercase tracking-wider">
              Secondary School
            </span>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              <span className="text-slate-900 font-semibold">Spicer Higher Secondary School</span> is where my academic journey truly began to take shape. 
              The school provided a nurturing environment that encouraged curiosity and a love for learning.
            </p>
            <p>
              These foundational years were filled with diverse experiences, from academic achievements to extracurricular activities, 
              all of which contributed to my personal development and prepared me for high school and beyond.
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
