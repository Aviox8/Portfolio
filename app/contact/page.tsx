'use client';

import { SocialLinks } from '@/components/SocialLinks';
import { ContactForm } from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { contactEmail } from '@/lib/socials';
import { Mail, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-32 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Let's Build Together
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to chat about tech, security, and building products?
          </p>

          {/* Contact Form Container */}
          <div className="py-12">
            <ContactForm />
          </div>

          {/* Quick Contact Methods */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Or reach out directly</div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5 text-gray-400" />
                <span>Send Email</span>
              </a>

              <a
                href="https://calendly.com/gauravyadav"
                target="_blank"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors font-semibold"
              >
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>Schedule Call</span>
              </a>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 pt-12"
          >
            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Social Media</p>
            <SocialLinks />
          </motion.div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 mt-12 text-left"
          >
            <p className="text-lg text-gray-400 leading-relaxed italic">
              "I'm always interested in ambitious projects that push boundaries. Whether it's a startup looking for a technical cofounder, a company needing a full-stack engineer, or just a fellow builder wanting to collaborate—let's talk."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
