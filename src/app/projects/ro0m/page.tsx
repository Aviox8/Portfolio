import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Ro0mProject() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Projects</span>
        </Link>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Ro0m</h1>
                <p className="text-slate-500 font-medium">Real-time Collaboration Platform</p>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/archduke1337/Ro0m" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="prose prose-slate max-w-none mb-12">
              <p className="text-slate-600 leading-relaxed text-lg">
                Ro0m is a modern video conferencing application built as a lightweight, open-source alternative to Zoom. It enables instant room creation, real-time video & audio communication, screen sharing, and seamless collaboration—all without requiring signups or downloads. Perfect for teams, classrooms, and instant meetings with shareable links.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Real-time Video & Audio</h3>
                  <p className="text-slate-600">WebRTC-powered HD video and audio communication with low latency</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Screen Sharing</h3>
                  <p className="text-slate-600">Share your screen for presentations, demos, and collaborative work</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Instant Rooms</h3>
                  <p className="text-slate-600">Create meetings instantly with unique shareable links - no signup required</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">Responsive Design</h3>
                  <p className="text-slate-600">Works seamlessly on desktop and mobile devices for on-the-go meetings</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-100">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React 18", "WebRTC", "Stream.io SDK", "Tailwind CSS", "Clerk Auth"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-slate-50 text-slate-600 text-sm font-medium rounded-xl border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
