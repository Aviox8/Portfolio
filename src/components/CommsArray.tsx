import { useState, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, Phone } from 'lucide-react';

interface CommsArrayProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
  isLoading?: boolean;
}

const CommsArrayInner = memo(({
  onSubmit,
  isLoading = false,
}: CommsArrayProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [signalWave, setSignalWave] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger signal wave animation
    setSignalWave(true);
    setTimeout(() => setSignalWave(false), 2000);

    // Call external submit handler
    onSubmit?.(formData);

    // Show success state
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const inputVariants = {
    unfocused: {
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)',
    },
    focused: {
      boxShadow: '0 0 40px rgba(0, 255, 255, 0.4), 0 0 80px rgba(170, 0, 255, 0.2)',
    },
  };

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(10, 10, 30, 0.5) 100%)',
      }}
    >
      {/* Background cosmic dust */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'rgba(0, 255, 255, 0.6)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
            }}
            animate={{
              y: [0, -50 - Math.random() * 100],
              opacity: [1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60, damping: 15 }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: '#00ffff',
              textShadow: '0 0 30px rgba(0, 255, 255, 0.6)',
            }}
          >
            COMMS ARRAY
          </h2>
          <p
            className="text-lg"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: "'Exo 2', sans-serif",
              letterSpacing: '0.1em',
            }}
          >
            Initialize transmission protocols
          </p>
        </motion.div>

        {/* Form container with glassmorphism */}
        <motion.div
          className="glass-card rounded-2xl p-8 md:p-12 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60, damping: 15 }}
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid rgba(0, 255, 255, 0.2)',
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.2)',
          }}
        >
          {/* Success state overlay */}
          {submitted && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center rounded-2xl z-20"
              style={{
                background: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(10px)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(0, 255, 255, 0.2)',
                    border: '2px solid #00ffff',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                >
                  <span className="text-4xl">✓</span>
                </motion.div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{
                    color: '#00ffff',
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  TRANSMISSION COMPLETE
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Signal received. We'll respond soon.
                </p>
              </motion.div>
            </motion.div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <motion.div
              variants={inputVariants}
              animate={isFocused === 'name' ? 'focused' : 'unfocused'}
            >
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
                style={{
                  color: '#00ffff',
                  fontFamily: "'Exo 2', sans-serif",
                }}
              >
                OPERATOR CALLSIGN
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('name')}
                  onBlur={() => setIsFocused(null)}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 outline-none transition-all"
                  style={{
                    background: 'rgba(0, 255, 255, 0.05)',
                    border: '2px solid rgba(0, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontFamily: "'Exo 2', sans-serif",
                  }}
                />
              </div>
            </motion.div>

            {/* Email field */}
            <motion.div
              variants={inputVariants}
              animate={isFocused === 'email' ? 'focused' : 'unfocused'}
            >
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
                style={{
                  color: '#00ffff',
                  fontFamily: "'Exo 2', sans-serif",
                }}
              >
                TRANSMISSION ENDPOINT
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-3.5"
                  style={{ color: 'rgba(0, 255, 255, 0.5)' }}
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('email')}
                  onBlur={() => setIsFocused(null)}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-500 outline-none transition-all"
                  style={{
                    background: 'rgba(0, 255, 255, 0.05)',
                    border: '2px solid rgba(0, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontFamily: "'Exo 2', sans-serif",
                  }}
                />
              </div>
            </motion.div>

            {/* Message field */}
            <motion.div
              variants={inputVariants}
              animate={isFocused === 'message' ? 'focused' : 'unfocused'}
            >
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
                style={{
                  color: '#00ffff',
                  fontFamily: "'Exo 2', sans-serif",
                }}
              >
                MESSAGE PAYLOAD
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('message')}
                  onBlur={() => setIsFocused(null)}
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 outline-none transition-all resize-none"
                  style={{
                    background: 'rgba(0, 255, 255, 0.05)',
                    border: '2px solid rgba(0, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontFamily: "'Exo 2', sans-serif",
                  }}
                />
              </div>
            </motion.div>

            {/* Submit button with signal wave */}
            <motion.button
              type="submit"
              disabled={isLoading || submitted}
              className="w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-3 group relative overflow-hidden"
              style={{
                background: 'rgba(0, 255, 255, 0.15)',
                border: '2px solid rgba(0, 255, 255, 0.4)',
                color: '#00ffff',
                fontFamily: "'Exo 2', sans-serif",
              }}
              whileHover={{
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send size={18} />
                {submitted ? 'SIGNAL SENT' : 'TRANSMIT'}
              </span>

              {/* Signal wave effect on hover */}
              {signalWave && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background: 'rgba(0, 255, 255, 0.1)',
                    }}
                    initial={{ scale: 0.8, opacity: 1 }}
                    animate={{
                      scale: [1, 1.2, 1.5],
                      opacity: [1, 0.5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: 'easeOut',
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background: 'rgba(0, 255, 255, 0.1)',
                    }}
                    initial={{ scale: 0.8, opacity: 1 }}
                    animate={{
                      scale: [1, 1.2, 1.5],
                      opacity: [1, 0.5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: 'easeOut',
                      delay: 0.2,
                    }}
                  />
                </>
              )}
            </motion.button>
          </form>

          {/* Contact info displays */}
          <div className="mt-12 pt-8 border-t border-gray-700 grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <Mail size={20} />, label: 'Email', value: 'gauravramyadav@gmail.com' },
              { icon: <MessageSquare size={20} />, label: 'Discord', value: '@archduke' },
              { icon: <Phone size={20} />, label: 'Quick Response', value: '24/7' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="flex justify-center mb-2"
                  style={{ color: '#00ffff' }}
                >
                  {item.icon}
                </div>
                <p
                  className="text-xs font-semibold mb-1"
                  style={{
                    color: '#00ffff',
                    fontFamily: "'Exo 2', sans-serif",
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.label}
                </p>
                <p
                  className="text-sm"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CommsArrayInner.displayName = 'CommsArray';

export const CommsArray = memo(CommsArrayInner);
