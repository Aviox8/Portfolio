import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-apple-900 font-sans selection:bg-blue-100 selection:text-apple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section id="contact" className="scroll-mt-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-rose-100">
                <Send size={24} className="text-rose-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-apple-900">Contact</h1>
            </div>
            <p className="text-lg text-apple-600 max-w-2xl">Let's connect and discuss opportunities, ideas, or collaborations.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:gauravramyadav@gmail.com"
              className="apple-card-hover group"
            >
              <div className="p-4 rounded-lg bg-rose-50 group-hover:bg-rose-100 w-fit mb-4 transition-colors">
                <Mail size={24} className="text-rose-600" />
              </div>
              <h3 className="font-bold text-apple-900 mb-1">Email</h3>
              <p className="text-sm text-apple-600">gauravramyadav@gmail.com</p>
            </a>
            <a
              href="https://github.com/archduke1337"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-card-hover group"
            >
              <div className="p-4 rounded-lg bg-apple-100 group-hover:bg-apple-200 w-fit mb-4 transition-colors">
                <Github size={24} className="text-apple-700" />
              </div>
              <h3 className="font-bold text-apple-900 mb-1">GitHub</h3>
              <p className="text-sm text-apple-600">@archduke1337</p>
            </a>
            <a
              href="https://www.linkedin.com/in/gurvv/"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-card-hover group"
            >
              <div className="p-4 rounded-lg bg-blue-100 group-hover:bg-blue-200 w-fit mb-4 transition-colors">
                <Linkedin size={24} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-apple-900 mb-1">LinkedIn</h3>
              <p className="text-sm text-apple-600">@gurvv</p>
            </a>
          </div>
          
          <div className="apple-card border border-apple-200">
            <p className="text-apple-600 leading-relaxed text-center">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out through any of the platforms above!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
