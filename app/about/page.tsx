'use client';

import { SocialLinks } from '@/components/SocialLinks';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const sections = [
    {
      title: 'How I Hacked My Way into Cybersecurity',
      content:
        'At 17, I became obsessed with understanding how systems break. Not to break them—to build better ones. Started with CTFs, moved to security research, landed my first gig. Now, cybersecurity isn\'t just my field. It\'s my lens for everything.',
    },
    {
      title: 'Self-Taught Stack Evolution',
      content:
        'HTML → CSS → JavaScript (3 months). React (2 months). Next.js + TypeScript (deep dive). Three.js for 3D experiences. GSAP for motion. Blockchain fundamentals. Every tool I learned was driven by a problem I wanted to solve. Not curiosity. Necessity.',
    },
    {
      title: 'Current Obsession',
      content:
        'Secure, beautiful, physics-driven web experiences that make people stop scrolling and actually feel something. The intersection of cybersecurity, design, and performance is where the real innovation happens.',
    },
    {
      title: 'Leadership at Mind Mesh',
      content:
        'Running technical operations for 500+ members. Not just talks. Building infrastructure, mentoring juniors, organizing hackathons. Leading means shipping. My team ships.',
    },
    {
      title: 'Vision: Zocav',
      content:
        'Building the go-to digital agency for Indian SMEs who want production-quality web and blockchain solutions without production-quality budgets. We\'ve already landed our first 5 clients. By end of 2025, we aim for 20+ active projects and ₹5L MRR.',
    },
  ];

  return (
    <>
      <main className="pt-32 pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              The Story Behind the Code
            </h1>
            <p className="text-xl text-gray-400">From curiosity to production systems in 18 months.</p>
          </motion.div>

          {/* Story sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-12 hover:border-white/10 transition-colors group relative overflow-hidden"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 group-hover:translate-x-1 transition-transform">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">{section.content}</p>

                {/* Floating accent */}
                <div className="absolute top-6 right-8 text-white/5 text-6xl font-black select-none">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-4 py-12"
          >
            {[
              { label: 'Projects Shipped', value: '15+' },
              { label: 'Clients Served', value: '12' },
              { label: 'Lines of Code', value: '100k+' },
              { label: 'Years of Experience', value: '2' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <p className="text-xl text-gray-400">Ready to build something legendary together?</p>
            <SocialLinks />
          </motion.div>
        </div>
      </main>
    </>
  );
}
