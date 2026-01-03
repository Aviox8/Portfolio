import { Github, Linkedin, Mail, Code, User } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* HEADER / IDENTITY */}
        <section id="hero" className="mb-20 scroll-mt-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            Gaurav Yadav
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 font-medium max-w-2xl leading-relaxed">
            BCA Cybersecurity Student @ ADYPU <span className="text-slate-300 mx-2">|</span> Web & Frontend Development
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="https://github.com/archduke1337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium group"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gurvv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:gauravramyadav@gmail.com"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-rose-600 transition-colors font-medium group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <User size={20} className="text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">About</h2>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>
              I am a <span className="text-slate-900 font-medium">BCA Cybersecurity student</span> at Ajeenkya DY Patil University (ADYPU), Pune (2025–2028), 
              receiving industry-aligned training through SeamEdu.
            </p>
            <p>
              My academic focus lies at the intersection of <span className="text-slate-900 font-medium">cybersecurity fundamentals</span> and modern web development. 
              I am passionate about building secure, performant, and user-centric frontend applications.
            </p>
            <p>
              Beyond the classroom, I actively participate in <span className="text-slate-900 font-medium">Hackathons & CTF challenges</span> and maintain a growing portfolio 
              of web projects, documenting my journey step-by-step.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-xs text-slate-400 font-medium uppercase tracking-widest">
          <p>© 2025 Gaurav Yadav. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </div>
    </main>
  );
}
