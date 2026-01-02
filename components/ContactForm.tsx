'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onSubmit?.(formData);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent! I\'ll get back to you soon.');
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-[#0A0A0A] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/10 transition-colors"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-[#0A0A0A] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/10 transition-colors"
          required
        />
      </div>
      <textarea
        placeholder="How can I help you?"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full bg-[#0A0A0A] border border-white/5 rounded-3xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/10 transition-colors min-h-[160px] resize-none"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : (
          <>
            Send Message <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </motion.form>
  );
};
