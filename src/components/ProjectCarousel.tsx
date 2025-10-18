import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';

const projects = [
  {
    name: 'ro0m',
    url: 'https://ro0m.vercel.app',
    role: 'Creator & Lead Developer',
    description:
      'Open-source video conferencing app with WebRTC technology. Built for seamless real-time communication.',
    outcome: 'Enabled secure peer-to-peer video calls with zero server costs',
    impact: '100+ users across 5 countries',
    techStack: ['React', 'Next.js', 'WebRTC', 'Vercel', 'Tailwind CSS'],
    gradient: 'from-[#00D9FF] to-[#0066FF]',
  },
  {
    name: 'SeekEngine',
    url: 'https://seekengine.vercel.app',
    role: 'Creator & Lead Developer',
    description:
      'Open-source smart web search engine with advanced filtering and modern interface.',
    outcome: 'Delivered privacy-focused search with 50% faster results',
    impact: '50+ GitHub stars, active community',
    techStack: ['React', 'Next.js', 'Search API', 'Vercel', 'Tailwind CSS'],
    gradient: 'from-[#00FF88] to-[#00D9FF]',
  },
];

export function ProjectCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
    api.on('reInit', () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
  <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto" aria-label="Projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 sm:mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider font-mono text-primary mb-3">
          Built for Real Users
        </div>
        <h2
          className="gradient-text inline-block px-4"
          style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 700 }}
        >
          Projects That Make an Impact
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
          Open-source solutions built for real-world challenges and developer delight.
        </p>
      </motion.div>

  <div className="relative" role="region" aria-roledescription="carousel" aria-live="polite" aria-atomic="true">
        <Carousel
          setApi={setApi}
          opts={{ 
            loop: true, 
            align: 'start', 
            containScroll: 'trimSnaps',
            dragFree: true, // Enable free scrolling on mobile
            skipSnaps: false
          }}
          className="w-full relative touch-manipulation"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={project.name} className="pl-2 sm:pl-4 basis-full sm:basis-full md:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <Card
                    className="glass h-full p-6 sm:p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group relative overflow-hidden touch-manipulation"
                    role="group"
                    aria-label={`${project.name} project card`}
                    style={{ ['--mx' as any]: '50%', ['--my' as any]: '0%' }}
                    onMouseMove={(e) => {
                      // Only on desktop
                      if (window.innerWidth >= 768) {
                        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        (e.currentTarget as HTMLDivElement).style.setProperty('--mx', `${x}px`);
                        (e.currentTarget as HTMLDivElement).style.setProperty('--my', `${y}px`);
                      }
                    }}
                  >
                    {/* Spotlight hover effect */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          'radial-gradient(220px circle at var(--mx) var(--my), rgba(0,217,255,0.16), transparent 60%)',
                      }}
                      aria-hidden="true"
                    />
                    {/* Gradient Background on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 0.12 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                      aria-hidden="true"
                    />

                    {/* Animated border glow */}
                    <motion.div
                      className={`absolute inset-0 rounded-lg bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 0.2 : 0 }}
                      transition={{ duration: 0.5 }}
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3
                            className="font-mono text-primary"
                            style={{ fontSize: '1.75rem' }}
                          >
                            {project.name}
                          </h3>
                          <p className="text-sm text-muted-foreground font-mono mt-1">
                            {project.role}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <motion.a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-white/10 hover:border-primary hover:bg-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label={`Visit ${project.name}`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                          <motion.a
                            href="https://github.com/archduke1337"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-white/10 hover:border-primary hover:bg-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label={`View ${project.name} on GitHub`}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed text-[15px]">
                        {project.description}
                      </p>

                      {/* Outcome & Impact */}
                      <motion.div 
                        className="space-y-3 mb-6 p-5 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 border border-white/10"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.div 
                          className="flex items-start gap-3 group/outcome"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-secondary mt-1.5"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                          />
                          <p className="text-sm flex-1">
                            <span className="text-foreground font-semibold">Outcome:</span>{' '}
                            <span className="text-secondary">{project.outcome}</span>
                          </p>
                        </motion.div>
                        <motion.div 
                          className="flex items-start gap-3 group/impact"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-primary mt-1.5"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                          />
                          <p className="text-sm flex-1">
                            <span className="text-foreground font-semibold">Impact:</span>{' '}
                            <span className="text-primary">{project.impact}</span>
                          </p>
                        </motion.div>
                      </motion.div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1.5 rounded-full bg-muted/50 border border-white/10 text-sm font-mono hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary relative overflow-hidden"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          View Project
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>


        </Carousel>

        {/* Progress bar */}
        <div className="mx-auto mt-6 max-w-sm">
          <div className="h-1.5 w-full rounded bg-white/10 overflow-hidden" aria-hidden="true">
            <div
              className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary"
              style={{ width: count > 1 ? `${((current + 1) / count) * 100}%` : '0%' }}
            />
          </div>
          <p className="sr-only">Project {current + 1} of {count}</p>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6" aria-hidden={count <= 1}>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                current === i ? 'w-6 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to project ${i + 1}`}
              aria-current={current === i}
            />
          ))}
        </div>
      </div>

      {/* View More Projects Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/archduke1337"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
        >
          <span className="font-mono">View all projects on GitHub</span>
          <Github className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}