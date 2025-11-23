import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
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
      'Seamless peer-to-peer video conferencing with WebRTC technology. Zero server costs, maximum privacy.',
    tagline: 'Real-time communication made simple',
    techStack: ['React', 'Next.js', 'WebRTC', 'Tailwind CSS'],
  },
  {
    name: 'SeekEngine',
    url: 'https://seekengine.vercel.app',
    role: 'Creator & Lead Developer',
    description:
      'Privacy-focused search engine with advanced filtering and modern interface. 50% faster results.',
    tagline: 'Search with privacy in mind',
    techStack: ['React', 'Next.js', 'Search API', 'Tailwind CSS'],
  },
];

export function ProjectCarousel() {
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
      {/* Minimalist Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2
          className="gradient-text mb-3"
          style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2 }}
        >
          Built for Real Users
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Projects That Make an Impact.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative" role="region" aria-roledescription="carousel" aria-live="polite">
        <Carousel
          setApi={setApi}
          opts={{ 
            loop: true, 
            align: 'start', 
            containScroll: 'trimSnaps',
            dragFree: true,
            skipSnaps: false
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-3 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <CarouselItem key={project.name} className="pl-2 sm:pl-4 md:pl-3 basis-full md:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="h-full p-6 sm:p-8 flex flex-col bg-gradient-to-br from-muted/50 to-background border-none hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <motion.h3
                          className="font-mono text-2xl font-bold text-primary mb-1"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 }}
                        >
                          {project.name}
                        </motion.h3>
                        <motion.p 
                          className="text-xs text-muted-foreground uppercase tracking-widest font-medium"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          {project.role}
                        </motion.p>
                      </div>
                      <motion.div 
                        className="flex gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Visit ${project.name}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href="https://github.com/archduke1337"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`View on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </motion.div>
                    </div>
                    {/* Description */}
                    <motion.div
                      className="mb-6 flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
                        {project.description}
                      </p>
                      <p className="text-sm font-medium text-primary/80 italic">
                        {project.tagline}
                      </p>
                    </motion.div>
                    {/* Tech Stack */}
                    <motion.div
                      className="mb-6 flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 }}
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-foreground/70 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Minimalist Navigation */}
        <motion.div
          className="flex items-center justify-between mt-8 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-sm text-muted-foreground font-mono">
            {String(current + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </div>
          
          {/* Progress Line */}
          <div className="flex-1 mx-6 h-px bg-white/10 relative">
            <motion.div
              className="absolute inset-y-0 left-0 h-px bg-primary"
              initial={{ width: '0%' }}
              animate={{ width: count > 1 ? `${((current + 1) / count) * 100}%` : '0%' }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => api?.scrollPrevious()}
              className="px-3 py-1.5 text-sm border border-white/20 rounded hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="px-3 py-1.5 text-sm border border-white/20 rounded hover:border-primary hover:text-primary transition-colors"
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>

      {/* View All Link */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="https://github.com/archduke1337"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
        >
          <span>View all projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}