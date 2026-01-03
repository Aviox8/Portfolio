import { Code, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      name: "SeekEngine",
      description: "Open-source search engine powered by Google Custom Search API with theme-aware design and playful teleport discovery feature.",
      tech: ["Next.js", "React 18", "Google Search API", "Tailwind CSS", "Vercel"],
      link: "https://github.com/archduke1337/SeekEngine",
      slug: "/projects/seekengine"
    },
    {
      name: "Ro0m",
      description: "Modern video conferencing app as a Zoom alternative with real-time video/audio, screen sharing, and instant shareable meeting rooms.",
      tech: ["Next.js", "React 18", "WebRTC", "Stream.io SDK", "Tailwind CSS"],
      link: "https://github.com/archduke1337/Ro0m",
      slug: "/projects/ro0m"
    },
    {
      name: "Gil Project",
      description: "Professional diamond certification and verification platform with 3D gem analysis, secure admin panel, and comprehensive gemstone encyclopedia.",
      tech: ["React 18", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Framer Motion"],
      link: "https://github.com/archduke1337/Gil",
      slug: "/projects/gil"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-apple-900 font-sans selection:bg-blue-100 selection:text-apple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section id="projects" className="scroll-mt-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-100">
                <Code size={24} className="text-green-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-apple-900">Projects</h1>
            </div>
            <p className="text-lg text-apple-600 max-w-2xl">A collection of my recent work, showcasing full-stack development and creative problem-solving.</p>
          </div>
          
          <div className="grid gap-6">
            {projects.map((project) => (
              <div key={project.name} className="apple-card-hover group animate-slide-up">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-apple-900 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-apple-600 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-apple-400 hover:text-blue-600 hover:bg-blue-50 transition-all rounded-lg shrink-0"
                    title="View on GitHub"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-apple-200">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-apple-100 text-apple-600 text-xs font-bold uppercase tracking-wider rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.slug && (
                    <Link 
                      href={project.slug}
                      className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                    >
                      View Details
                      <ArrowRight size={16} />
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
