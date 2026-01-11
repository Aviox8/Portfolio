import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
  const experiences = [
    {
      role: "Co-Founder",
      company: "Zocav",
      date: "2026",
      description: "Focused on learning and early-stage exploration of product development and security architecture.",
      color: "bg-blue-100 dark:bg-blue-900/30",
      dotColor: "bg-blue-600 dark:bg-blue-500",
      accentColor: "text-blue-600 dark:text-blue-400"
    },
    {
      role: "Head of Technical Operations",
      company: "Mind Mesh Club, ADYPU",
      date: "2025",
      description: "Leading technical initiatives and managing infrastructure for the university's tech community.",
      color: "bg-purple-100 dark:bg-purple-900/30",
      dotColor: "bg-purple-600 dark:bg-purple-500",
      accentColor: "text-purple-600 dark:text-purple-400"
    },
    {
      role: "Exam Operations Manager & Server Administrator",
      company: "MHTCET 2025 Exams | Maharashtra Government",
      date: "2025",
      description: "Managed exam operations and server infrastructure for MHTCET 2025, ensuring smooth execution across multiple centers.",
      location: "Pimpri Chinchwad University, Talegaon",
      color: "bg-amber-100 dark:bg-amber-900/30",
      dotColor: "bg-amber-600 dark:bg-amber-500",
      accentColor: "text-amber-600 dark:text-amber-400"
    },
    {
      role: "Co-Founding Engineer",
      company: "Exeiv.in Digital Agency & Spydown.in Creative Studio",
      date: "2023 — 2025",
      description: "Co-founded and led technical development for two joint ventures: Exeiv, a digital agency delivering end-to-end web solutions, and Spydown, a creative studio specializing in brand identity and digital experiences. Both ventures have since concluded.",
      location: "Remote",
      color: "bg-rose-100 dark:bg-rose-900/30",
      dotColor: "bg-rose-600 dark:bg-rose-500",
      accentColor: "text-rose-600 dark:text-rose-400"
    },
    {
      role: "Marketing Associate",
      company: "JioCinema | IPL Field Marketing",
      date: "2023",
      description: "Executed field marketing and promotional campaigns for IPL across malls, public attractions, and high-density areas to drive brand awareness.",
      color: "bg-green-100 dark:bg-green-900/30",
      dotColor: "bg-green-600 dark:bg-green-500",
      accentColor: "text-green-600 dark:text-green-400"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-apple-50 to-white dark:from-apple-950 dark:via-apple-900 dark:to-apple-950 text-apple-900 dark:text-apple-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-apple-900 dark:selection:text-white transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        <section id="experience" className="scroll-mt-24">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className={`p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30`}>
                <Briefcase size={24} className="text-amber-600 dark:text-amber-400" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-apple-900 dark:text-white">Experience</h1>
            </div>
            <p className="text-lg sm:text-xl text-apple-600 dark:text-apple-300 max-w-3xl leading-relaxed animate-slide-up animate-delay-100">
              My professional journey shaped by diverse roles and meaningful contributions.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div 
                key={exp.role}
                className="apple-card-elevated group hover:shadow-elevation-3 transition-smooth border-l-4 border-transparent hover:border-blue-600 pl-6 animate-slide-up"
                style={{ 
                  borderLeftColor: 'var(--accent-color)',
                  '--accent-color': exp.accentColor === 'text-blue-600 dark:text-blue-400' ? '#2563eb' : exp.accentColor === 'text-purple-600 dark:text-purple-400' ? '#9333ea' : exp.accentColor === 'text-amber-600 dark:text-amber-400' ? '#d97706' : exp.accentColor === 'text-rose-600 dark:text-rose-400' ? '#e11d48' : '#16a34a'
                } as any}
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-4 top-6 w-7 h-7 rounded-full border-4 border-white dark:border-apple-900 shadow-md transition-transform group-hover:scale-125 ${exp.dotColor}`} />
                
                {/* Content */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <h3 className="text-xl font-bold text-apple-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-smooth">
                      {exp.role}
                    </h3>
                    <span className={`text-xs font-bold uppercase tracking-widest shrink-0 ${exp.accentColor}`}>
                      {exp.date}
                    </span>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.accentColor.replace('text-', 'bg-').replace('dark:text-', 'dark:bg-')}`} />
                    <p className="font-semibold text-apple-900 dark:text-apple-100">{exp.company}</p>
                  </div>
                  
                  {exp.location && (
                    <p className="text-sm text-apple-500 dark:text-apple-400">{exp.location}</p>
                  )}
                  
                  <p className="text-apple-600 dark:text-apple-300 leading-relaxed pt-1">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
