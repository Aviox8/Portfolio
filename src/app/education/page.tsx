import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EducationPage() {
  const education = [
    {
      degree: "BCA in Cybersecurity",
      institution: "Ajeenkya DY Patil University (ADYPU)",
      location: "Pune",
      dates: "2025 — 2028",
      partner: "SeamEdu Industry Training",
      link: "/education/adypu",
      color: "bg-blue-100 dark:bg-blue-900/30",
      accentColor: "text-blue-600 dark:text-blue-400",
      image: "/ADYPU/sih.jpeg"
    }
  ];

  const schools = [
    {
      name: "MIT World Peace School",
      level: "High School",
      location: "Alandi, Pune",
      dates: "2023 — 2025",
      link: "/education/mit-wps",
      accentColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      image: "/MIT WPS/1000023951.png"
    },
    {
      name: "Cambridge School",
      level: "Secondary School",
      location: "Pune, Maharashtra",
      dates: "2010 — 2023",
      link: "/education/spicer",
      accentColor: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      image: "/Spicer/100_1676.JPG"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-apple-50 to-white dark:from-apple-950 dark:via-apple-900 dark:to-apple-950 text-apple-900 dark:text-apple-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-apple-900 dark:selection:text-white transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <section id="education" className="scroll-mt-24">
          {/* Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-purple-100 dark:bg-purple-900/30">
                <GraduationCap size={20} className="sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-apple-900 dark:text-white">Education</h1>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-apple-600 dark:text-apple-300 max-w-3xl leading-relaxed animate-slide-up animate-delay-100">
              My academic journey at prestigious institutions, shaping my expertise in cybersecurity and development.
            </p>
          </div>
          
          {/* Current Degree */}
          <div className="mb-16 animate-slide-up animate-delay-200">
            <h2 className="text-sm font-bold uppercase tracking-widest text-apple-500 mb-4">Current Program</h2>
            {education.map((item) => (
              <div key={item.degree} className="apple-card-elevated group hover:shadow-elevation-3 transition-smooth overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                  {item.image && (
                    <div className="w-full md:w-48 h-48 md:h-auto aspect-video md:aspect-square relative rounded-xl overflow-hidden shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.institution} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex-1 p-2">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-apple-900 dark:text-white mb-2">{item.degree}</h3>
                        <p className="text-lg text-apple-700 dark:text-apple-200 font-medium mb-1">{item.institution}</p>
                        <p className="text-sm text-apple-500 dark:text-apple-400">{item.location}</p>
                      </div>
                      <span className={`px-4 py-2 ${item.color} ${item.accentColor} text-xs font-bold rounded-lg uppercase tracking-wider shrink-0 w-fit`}>
                        {item.dates}
                      </span>
                    </div>
                    <div className="pt-4 border-t border-apple-200 dark:border-apple-800">
                      <p className="text-xs font-bold text-apple-500 dark:text-apple-400 uppercase tracking-widest mb-1">Industry Partner</p>
                      <p className="text-apple-600 dark:text-apple-300 font-medium">{item.partner}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Schools */}
          <div className="animate-slide-up animate-delay-300">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-apple-500 mb-4 sm:mb-6">Previous Education</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              {schools.map((school, idx) => (
                <div 
                  key={school.name}
                  className="apple-card-elevated group hover:shadow-elevation-3 transition-smooth flex flex-col h-full overflow-hidden p-0"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {school.image && (
                    <div className="relative w-full h-48 overflow-hidden">
                       <Image 
                        src={school.image} 
                        alt={school.name} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`text-xs font-bold bg-white/90 dark:bg-black/80 backdrop-blur-sm ${school.accentColor} px-3 py-1 rounded-lg uppercase tracking-wider shadow-sm`}>
                          {school.dates}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <h3 className="font-bold text-apple-900 dark:text-white text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-smooth">
                        {school.name}
                      </h3>
                      <p className="text-sm text-apple-600 dark:text-apple-300 font-medium">{school.level}</p>
                      <p className="text-xs text-apple-500 dark:text-apple-400 mt-1">{school.location}</p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-apple-200 dark:border-apple-800">
                      <Link 
                        href={school.link}
                        className={`inline-flex items-center gap-2 ${school.accentColor} font-semibold text-sm hover:gap-3 transition-all`}
                      >
                        Explore
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
