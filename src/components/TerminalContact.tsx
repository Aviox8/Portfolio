import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Terminal, Send, Check } from 'lucide-react';
import { toast } from 'sonner';

export function TerminalContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the highlighted fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setSubmitted(false), 3000);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider font-mono text-primary mb-3">
          Say Hello
        </div>
        <h2 className="gradient-text inline-block" style={{ fontSize: '3rem', fontWeight: 700 }}>
          Let’s Connect
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Have an idea or opportunity? Reach out and let’s create something remarkable.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="glass p-8 border-primary/20">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
            <Terminal className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-mono text-primary" aria-label="Terminal prompt">contact@gaurav-yadav:~$</span>
            <span className="font-mono text-muted-foreground animate-pulse" aria-hidden="true">_</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="font-mono text-sm text-secondary mb-2 block">
                {'> '}name --required
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`font-mono bg-muted/30 focus:border-primary ${errors.name ? 'border-red-500/60' : 'border-white/10'}`}
                placeholder="Nathuram Godse"
                aria-required="true"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="font-mono text-sm text-secondary mb-2 block">
                {'> '}email --required
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`font-mono bg-muted/30 focus:border-primary ${errors.email ? 'border-red-500/60' : 'border-white/10'}`}
                placeholder="headshot@gandhi.com"
                aria-required="true"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="font-mono text-sm text-secondary mb-2 block">
                {'> '}message --required
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`font-mono bg-muted/30 focus:border-primary min-h-[150px] resize-none ${errors.message ? 'border-red-500/60' : 'border-white/10'}`}
                placeholder="Your message here..."
                aria-required="true"
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-400 font-mono">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background text-lg tracking-wide"
              disabled={submitted || isSubmitting}
              aria-live="polite"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4 mr-2" aria-hidden="true" />
                  Sent! Thank you.
                </>
              ) : (
                <>
                  <Send className={`w-4 h-4 mr-2 ${isSubmitting ? 'animate-pulse' : ''}`} aria-hidden="true" />
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </>
              )}
            </Button>
          </form>

          {/* Terminal Output */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="font-mono text-sm space-y-1">
              <p className="text-muted-foreground">
                <span className="text-secondary" aria-hidden="true">$</span> echo "Alternative ways to reach me:"
              </p>
              <p className="text-muted-foreground pl-4">
                → Email:{' '}
                <a 
                  href="mailto:gauravramyadav@gmail.com" 
                  className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  contact@example.com
                </a>
              </p>
              <p className="text-muted-foreground pl-4">
                → GitHub:{' '}
                <a
                  href="https://github.com/archduke1337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  @archduke1337
                </a>
              </p>
              <p className="text-muted-foreground pl-4">
                → LinkedIn:{' '}
                <a
                  href="http://www.linkedin.com/in/gurvv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  in/gurvv
                </a>
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
