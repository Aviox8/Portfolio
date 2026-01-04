import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Ro0mProject() {
  return (
    <main className="min-h-screen bg-apple-gradient text-zinc-900 dark:text-white font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-white transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Projects</span>
        </Link>

        <section className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden transition-colors duration-500">
          <div className="p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Ro0m</h1>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">Real-time Collaboration Platform</p>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/archduke1337/Ro0m" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none mb-12">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                Ro0m is a modern video conferencing application built as a lightweight, open-source alternative to Zoom. It enables instant room creation, real-time video & audio communication, screen sharing, and seamless collaboration—all without requiring signups or downloads. Perfect for teams, classrooms, and instant meetings with shareable links.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-3">Real-time Video & Audio</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">WebRTC-powered HD video and audio communication with low latency</p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-3">Screen Sharing</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">Share your screen for presentations, demos, and collaborative work</p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-3">Instant Rooms</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">Create meetings instantly with unique shareable links - no signup required</p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-3">Responsive Design</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">Works seamlessly on desktop and mobile devices for on-the-go meetings</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-zinc-100 dark:border-zinc-800">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React 18", "WebRTC", "Stream.io SDK", "Tailwind CSS", "Clerk Auth"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 text-sm font-medium rounded-xl border border-zinc-200 dark:border-zinc-700/50">
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
