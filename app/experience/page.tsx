'use client';

import { experience } from '@/lib/experience';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Trophy } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <main className="pt-32 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            My Journey
          </h1>
          <p className="text-xl text-gray-400">2023 → 2025 → Future</p>
        </motion.div>

        {/* Simplified Timeline */}
        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors"
            >
               <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                      {item.type === 'role' ? <Briefcase className="w-6 h-6" /> : 
                       item.type === 'achievement' ? <Trophy className="w-6 h-6" /> : 
                       <GraduationCap className="w-6 h-6" />}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-gray-400">{item.organization}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <Calendar className="w-4 h-4" />
                        {item.year}
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.impact.map((point, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-start gap-2">
                          <span className="text-white/20 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Future section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group hover:border-white/10 transition-colors"
        >
          <h2 className="text-3xl font-bold mb-4">What's Next?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            By 2026, I'm building Zocav into a premier digital agency. Hiring the best. Shipping the hardest.
            Making a dent in the Indian tech ecosystem.
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            {['Scale Zocav', 'Open Source', 'Conferences', 'Future Tech'].map((goal) => (
              <span key={goal} className="px-4 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/5 text-sm font-medium">
                {goal}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
