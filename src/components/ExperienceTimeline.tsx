import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Award, Sparkles } from 'lucide-react';

const experiences = [
  {
    company: 'Zocav',
    role: 'Founder & Digital Strategist',
    period: '2024 – Present',
    description: 'Running a digital agency specialising in web solutions, helping clients build modern web applications and digital presence.',
    achievements: [
      'Built 10+ production web applications',
      'Established brand presence across digital channels',
      'Led team of designers & developers'
    ],
    icon: Briefcase,
    color: 'primary',
    isCurrent: true
  },
  {
    company: 'Smart India Hackathon 2025',
    role: 'Participant',
    period: '2025',
    description: 'Qualified for national-level competition, working on innovative solutions to real-world problems.',
    achievements: [
      'Selected among top teams nationwide',
      'Built innovative healthcare solution',
      'Collaborated with industry mentors'
    ],
    icon: Award,
    color: 'secondary',
    isCurrent: false
  }
];

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider font-mono text-secondary mb-3">
          Growth Through Shipping
        </div>
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-block relative"
        >
          <h2 className="gradient-text inline-block" style={{ fontSize: '3rem', fontWeight: 700 }}>
            My Journey
          </h2>
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10 rounded-full"
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        </motion.div>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          From hackathons to startups—building, leading, and learning along the way.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line with progress overlay */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-white/5 via-white/10 to-white/5 rounded-full" aria-hidden="true" />
        {!prefersReducedMotion && (
          <motion.div
            className="absolute left-8 top-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full origin-top shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]"
            style={{ height: '100%', scaleY: progress }}
            aria-hidden="true"
          />
        )}

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                className="relative pl-24 group"
              >
                {/* Timeline Dot with pulse for current role */}
                <div className="absolute left-[1.125rem] top-6 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                    className={`relative w-7 h-7 rounded-full border-4 border-background ${
                      exp.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                    } shadow-lg ${exp.color === 'primary' ? 'shadow-primary/50' : 'shadow-secondary/50'}`}
                    aria-hidden="true"
                  >
                    {exp.isCurrent && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary/30"
                          animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <Sparkles className="absolute inset-0 w-3 h-3 m-auto text-white" />
                      </>
                    )}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  className="relative glass p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all focus-within:border-primary/50 overflow-hidden"
                  tabIndex={0}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  {/* Gradient glow on hover */}
                  <motion.div
                    className={`absolute -inset-px bg-gradient-to-br ${
                      exp.color === 'primary' 
                        ? 'from-primary/0 via-primary/0 to-secondary/0' 
                        : 'from-secondary/0 via-secondary/0 to-primary/0'
                    } rounded-xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    aria-hidden="true"
                  />
                  
                  {/* Current role badge */}
                  {exp.isCurrent && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="absolute top-4 right-4"
                    >
                      <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                        <motion.span
                          className="text-xs font-mono text-primary flex items-center gap-1.5"
                          animate={{ opacity: [1, 0.7, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          Current
                        </motion.span>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`p-2.5 rounded-lg ${
                          exp.color === 'primary'
                            ? 'bg-primary/10 border border-primary/20'
                            : 'bg-secondary/10 border border-secondary/20'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        aria-hidden="true"
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            exp.color === 'primary' ? 'text-primary' : 'text-secondary'
                          }`}
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                        <p className={`font-mono text-sm font-medium ${
                          exp.color === 'primary' ? 'text-primary' : 'text-secondary'
                        }`}>
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <time className="font-mono text-sm text-muted-foreground whitespace-nowrap" dateTime={exp.period}>
                      {exp.period}
                    </time>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements list */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.1 * achIndex + 0.3 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <motion.div
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                            exp.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                          }`}
                          whileHover={{ scale: 1.5 }}
                          aria-hidden="true"
                        />
                        <span className="text-muted-foreground/80">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
