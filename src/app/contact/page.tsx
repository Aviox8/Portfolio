'use client';

import { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle2, AlertCircle, User, MessageSquare } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    // Environment variables for EmailJS
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id_here') {
      alert("Please configure EmailJS credentials in .env.local");
      return;
    }

    setStatus('loading');

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          console.log(error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const contacts = [
    {
      name: "Email",
      value: "gauravramyadav@gmail.com",
      href: "mailto:gauravramyadav@gmail.com",
      icon: Mail,
      color: "bg-rose-100 dark:bg-rose-900/30",
      accentColor: "text-rose-600 dark:text-rose-400",
      description: "Drop me an email"
    },
    {
      name: "GitHub",
      value: "@archduke1337",
      href: "https://github.com/archduke1337",
      icon: Github,
      color: "bg-slate-100 dark:bg-slate-800",
      accentColor: "text-slate-700 dark:text-slate-300",
      description: "Check my repositories"
    },
    {
      name: "LinkedIn",
      value: "@gurvv",
      href: "https://www.linkedin.com/in/gurvv/",
      icon: Linkedin,
      color: "bg-blue-100 dark:bg-blue-900/30",
      accentColor: "text-blue-600 dark:text-blue-400",
      description: "Let's connect professionally"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-apple-50 to-white dark:from-apple-950 dark:via-apple-900 dark:to-apple-950 text-apple-900 dark:text-apple-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-apple-900 dark:selection:text-white transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <section id="contact" className="scroll-mt-24">
          {/* Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-rose-100 dark:bg-rose-900/30">
                <Send size={20} className="sm:w-6 sm:h-6 text-rose-600 dark:text-rose-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-apple-900 dark:text-white">Contact</h1>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-apple-600 dark:text-apple-300 max-w-3xl leading-relaxed animate-slide-up animate-delay-100">
              Let&apos;s connect and explore opportunities, ideas, and collaborations together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Cards & Info */}
            <div className="space-y-6 sm:space-y-8 animate-slide-up animate-delay-200">
              <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
                {contacts.map((contact, idx) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={contact.name}
                      href={contact.href}
                      target={contact.name !== "Email" ? "_blank" : undefined}
                      rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
                      className="apple-card-elevated group hover:shadow-elevation-3 transition-smooth hover:translate-y-[-2px] flex items-center gap-6 p-6"
                    >
                      <div className={`p-4 rounded-xl ${contact.color} group-hover:scale-110 transition-smooth shrink-0`}>
                        <Icon size={24} className={contact.accentColor} />
                      </div>
                      <div>
                        <h3 className="font-bold text-apple-900 dark:text-white text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-smooth">
                          {contact.name}
                        </h3>
                        <p className="text-sm text-apple-500 dark:text-apple-400">{contact.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
              
              <div className="apple-card p-8 bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30">
                <p className="text-apple-700 dark:text-apple-300 leading-relaxed font-medium">
                  Whether you have a groundbreaking idea, a complex engineering challenge, or just want to network — I am always open to meaningful collaborations that push the boundaries of what&apos;s possible on the web.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up animate-delay-300">
              <div className="apple-card-elevated p-8">
                <h2 className="text-2xl font-bold text-apple-900 dark:text-white mb-6">Send a Message</h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-sm font-semibold text-apple-700 dark:text-apple-300 ml-1">Name</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-apple-400">
                        <User size={18} />
                      </div>
                      <input 
                        type="text" 
                        name="user_name" 
                        id="user_name"
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/60 dark:bg-black/30 backdrop-blur-md border border-apple-200 dark:border-apple-800 hover:border-blue-400/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 placeholder:text-apple-400/70 dark:placeholder:text-apple-600"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-semibold text-apple-700 dark:text-apple-300 ml-1">Email</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-apple-400">
                        <Mail size={18} />
                      </div>
                      <input 
                        type="email" 
                        name="user_email" 
                        id="user_email"
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/60 dark:bg-black/30 backdrop-blur-md border border-apple-200 dark:border-apple-800 hover:border-blue-400/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 placeholder:text-apple-400/70 dark:placeholder:text-apple-600"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-apple-700 dark:text-apple-300 ml-1">Message</label>
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-apple-400">
                        <MessageSquare size={18} />
                      </div>
                      <textarea 
                        name="message" 
                        id="message" 
                        rows={4}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/60 dark:bg-black/30 backdrop-blur-md border border-apple-200 dark:border-apple-800 hover:border-blue-400/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 placeholder:text-apple-400/70 dark:placeholder:text-apple-600 resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading' || status === 'success'}
                    className={`
                      w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98]
                      ${status === 'success' 
                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
                        : status === 'error'
                        ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                        : 'bg-apple-900 dark:bg-white text-white dark:text-black hover:opacity-90 shadow-lg shadow-black/10 dark:shadow-white/10'
                      }
                      disabled:opacity-70 disabled:cursor-not-allowed
                    `}
                  >
                    {status === 'loading' && <Loader2 size={20} className="animate-spin" />}
                    {status === 'success' && <CheckCircle2 size={20} />}
                    {status === 'error' && <AlertCircle size={20} />}
                    
                    {status === 'idle' && (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                    {status === 'loading' && 'Sending...'}
                    {status === 'success' && 'Message Sent!'}
                    {status === 'error' && 'Failed to Send'}
                  </button>

                  {status === 'error' && (
                    <p className="text-xs text-red-500 text-center font-medium">
                      Something went wrong. Please email directly.
                    </p>
                  )}
                  {status === 'success' && (
                    <p className="text-xs text-green-500 text-center font-medium">
                      Thanks for reaching out! I&apos;ll get back to you soon.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
