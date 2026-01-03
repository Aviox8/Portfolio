import { Code, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      name: "SeekEngine",
      description: "Open-source search engine powered by Google Custom Search API with theme-aware design and playful teleport discovery feature.",
      tech: ["Next.js", "React 18", "Google Search API", "Tailwind CSS", "Vercel"],
      link: "https://github.com/archduke1337/SeekEngine",
      slug: "/projects/seekengine",
      color: "bg-green-50 dark:bg-green-900/20",
      accentColor: "text-green-600 dark:text-green-400"
    },
    {
      name: "Ro0m",
      description: "Modern video conferencing app as a Zoom alternative with real-time video/audio, screen sharing, and instant shareable meeting rooms.",
      tech: ["Next.js", "React 18", "WebRTC", "Stream.io SDK", "Tailwind CSS"],
      link: "https://github.com/archduke1337/Ro0m",
      slug: "/projects/ro0m",
      color: "bg-blue-50 dark:bg-blue-900/20",
      accentColor: "text-blue-600 dark:text-blue-400"
    },
    {
      name: "Gil Project",
      description: "Professional diamond certification and verification platform with 3D gem analysis, secure admin panel, and comprehensive gemstone encyclopedia.",
      tech: ["React 18", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Framer Motion"],
      link: "https://github.com/archduke1337/Gil",
      slug: "/projects/gil",
      color: "bg-rose-50 dark:bg-rose-900/20",
      accentColor: "text-rose-600 dark:text-rose-400"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-apple-50 to-white dark:from-apple-950 dark:via-apple-900 dark:to-apple-950 text-apple-900 dark:text-apple-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-apple-900 dark:selection:text-white transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        <section id="projects" className="scroll-mt-24">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 group-hover:scale-110 transition-smooth">
                <Code size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-apple-900 dark:text-white">Projects</h1>
            </div>
            <p className="text-lg sm:text-xl text-apple-600 dark:text-apple-300 max-w-3xl leading-relaxed animate-slide-up animate-delay-100">
              A collection of my work, showcasing full-stack development, creative problem-solving, and attention to user experience.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <div 
                key={project.name} 
                className="apple-card-elevated group hover:shadow-elevation-3 transition-smooth animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-apple-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-smooth">
                      {project.name}
                    </h3>
                    <p className="text-apple-600 dark:text-apple-300 mt-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-smooth shrink-0 ${project.color} ${project.accentColor} hover:scale-110`}
                    title="View on GitHub"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                {/* Tech Stack and Link */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 pt-6 border-t border-apple-200 dark:border-apple-800">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-smooth ${project.color} ${project.accentColor}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.slug && (
                    <Link 
                      href={project.slug}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-smooth whitespace-nowrap"
                    >
                      Details
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
