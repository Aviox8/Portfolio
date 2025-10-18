import { motion, useReducedMotion } from 'framer-motion';
import { useState, useCallback, memo } from 'react';
import { Card } from './ui/card';
import { BookOpen, Award, MapPin, Briefcase, Code2, Shield } from 'lucide-react';
import profileImage from '../assets/gaurav.png';
import { Button } from './ui/button';
import type { LucideIcon } from 'lucide-react';

// ==================== CONSTANTS ====================
const ANIMATION_CONSTANTS = {
  staggerDelay: 0.1,
  hoverScale: 1.05,
  tapScale: 0.98,
  iconHoverScale: 1.1,
  defaultDuration: 0.5,
  numberAnimationDuration: 1.2,
} as const;

const SPRING_CONFIG = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
};

const VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: ANIMATION_CONSTANTS.staggerDelay,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: SPRING_CONFIG,
    },
  },
} as const;

// ==================== TYPES ====================
interface InfoItemProps {
  icon: LucideIcon;
  text: string;
  color: 'text-secondary' | 'text-primary';
  index: number;
  prefersReducedMotion: boolean;
}

// ==================== COMPONENTS ====================

// Info Item Component
const InfoItem = memo(({ icon: Icon, text, color, index, prefersReducedMotion }: InfoItemProps) => (
  <motion.div
    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all cursor-default"
    initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
    whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
    transition={{ delay: index * ANIMATION_CONSTANTS.staggerDelay }}
    whileHover={prefersReducedMotion ? {} : { x: 8, scale: 1.02 }}
  >
    <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
    <span className="text-sm">{text}</span>
  </motion.div>
));

InfoItem.displayName = 'InfoItem';


// ==================== MAIN COMPONENT ====================
export function BentoAbout() {
  const prefersReducedMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleResumeClick = useCallback(() => {
    window.open('http://www.linkedin.com/in/gurvv', '_blank', 'noopener,noreferrer');
  }, []);

  // Data arrays
  const infoItems = [
    { icon: Shield, text: 'Open-source development', color: 'text-secondary' as const },
    { icon: Code2, text: 'Web3 & decentralized apps', color: 'text-primary' as const },
    { icon: Shield, text: 'Cybersecurity & ethical hacking', color: 'text-secondary' as const },
  ];

  const interests = ['UI/UX Design', 'Web3', 'Ethical Hacking', 'Open Source', 'Digital Agency'];

  // Quick Stats removed per request

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto" aria-label="About Me Section">
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider font-mono text-secondary mb-3">
          Design. Build. Secure.
        </div>
        <h2 className="gradient-text inline-block text-5xl font-bold">
          Meet Gaurav Yadav
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Blending UI precision, open-source, and cybersecurity for next-gen web experiences.
        </p>
      </motion.div>

      <motion.div
        variants={VARIANTS.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Profile Image Card */}
        <motion.div variants={VARIANTS.item} className="lg:col-span-1 lg:row-span-2">
          <Card className="glass h-full p-0 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden group">
            <div className="relative w-full h-full min-h-[400px] overflow-hidden">
              {/* Loading skeleton */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse z-20" />
              )}

              {/* Animated gradient glow */}
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-2xl"
                  transition={{ duration: ANIMATION_CONSTANTS.defaultDuration }}
                  aria-hidden="true"
                />
              )}
              
              <motion.img 
                src={profileImage} 
                alt="Gaurav Yadav - Front-End Developer and Cybersecurity Enthusiast"
                className="w-full h-full object-cover object-top relative z-10"
                loading="lazy"
                style={{ 
                  imageRendering: 'auto',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                }}
                whileHover={prefersReducedMotion ? {} : { scale: ANIMATION_CONSTANTS.hoverScale }}
                transition={{ duration: ANIMATION_CONSTANTS.defaultDuration }}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 z-20">
                  <p className="text-muted-foreground">Image unavailable</p>
                </div>
              )}

              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/30 to-transparent z-20"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                <motion.h3 
                  className="gradient-text text-2xl"
                  initial={{ y: 0 }}
                  whileHover={prefersReducedMotion ? {} : { y: -4 }}
                >
                  Gaurav Yadav
                </motion.h3>
                <motion.p 
                  className="text-sm text-muted-foreground font-mono mt-1"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  Developer & Founder
                </motion.p>
                <motion.div
                  className="mt-3 flex gap-2"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.span 
                    className="px-3 py-1 text-xs rounded-full bg-primary/20 border border-primary/30 text-primary flex items-center gap-1.5"
                    animate={prefersReducedMotion ? {} : { 
                      boxShadow: [
                        '0 0 0 0 rgba(0, 217, 255, 0)', 
                        '0 0 0 4px rgba(0, 217, 255, 0.1)', 
                        '0 0 0 0 rgba(0, 217, 255, 0)'
                      ] 
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    role="status"
                    aria-label="Available for work"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      animate={prefersReducedMotion ? {} : { opacity: [1, 0.5, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      aria-hidden="true"
                    />
                    Available
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Large Bio Card */}
        <motion.div variants={VARIANTS.item} className="lg:col-span-2 lg:row-span-2">
          <Card className="glass h-full p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group">
            <motion.div 
              className="flex items-start gap-4 mb-6"
              whileHover={prefersReducedMotion ? {} : { x: 4 }}
              transition={SPRING_CONFIG}
            >
              <motion.div 
                className="p-3 rounded-xl bg-primary/10 border border-primary/20"
                whileHover={prefersReducedMotion ? {} : { scale: ANIMATION_CONSTANTS.iconHoverScale, rotate: 5 }}
                transition={SPRING_CONFIG}
                aria-hidden="true"
              >
                <Code2 className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold">Who Am I</h3>
                <p className="text-xs text-muted-foreground mt-1">Developer | Founder | Cybersecurity Enthusiast</p>
              </div>
            </motion.div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
              Front-end developer and cybersecurity enthusiast pursuing BCA in Cybersecurity. 
              Creator of 2+ open-source projects and founder of{' '}
              <span className="text-primary font-semibold">Zocav digital agency</span>, focused on 
              building secure, accessible web experiences.
            </p>
            
            <div className="space-y-3" role="list">
              {infoItems.map((item, index) => (
                <InfoItem 
                  key={index} 
                  {...item} 
                  index={index} 
                  prefersReducedMotion={!!prefersReducedMotion}
                />
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <motion.div 
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }} 
                whileTap={prefersReducedMotion ? {} : { scale: ANIMATION_CONSTANTS.tapScale }}
              >
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group/btn shadow-lg shadow-primary/25"
                  onClick={() => scrollToSection('contact')}
                  aria-label="Navigate to contact section"
                >
                  {!prefersReducedMotion && (
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: ANIMATION_CONSTANTS.defaultDuration }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">Contact Me</span>
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }} 
                whileTap={prefersReducedMotion ? {} : { scale: ANIMATION_CONSTANTS.tapScale }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 hover:border-primary/70 transition-all"
                  onClick={handleResumeClick}
                  aria-label="View resume on LinkedIn"
                >
                  View Resume
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Education Card */}
        <motion.div variants={VARIANTS.item} className="lg:col-span-1">
          <Card className="glass h-full p-6 hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-500 group">
            <motion.div 
              className="flex items-center gap-3 mb-3"
              whileHover={prefersReducedMotion ? {} : { x: 4 }}
            >
              <motion.div 
                className="p-2 rounded-xl bg-secondary/10 border border-secondary/20"
                whileHover={prefersReducedMotion ? {} : { scale: ANIMATION_CONSTANTS.iconHoverScale, rotate: 5 }}
                aria-hidden="true"
              >
                <BookOpen className="w-5 h-5 text-secondary" />
              </motion.div>
              <h3 className="font-semibold">Education</h3>
            </motion.div>
            <p className="font-mono text-sm text-muted-foreground mb-2">BCA in Cybersecurity</p>
            <p className="text-sm text-muted-foreground">Seamedu-ADYPU</p>
          </Card>
        </motion.div>

        {/* Location Card */}
        <motion.div variants={VARIANTS.item} className="lg:col-span-1">
          <Card className="glass h-full p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group">
            <motion.div 
              className="flex items-center gap-3 mb-3"
              whileHover={prefersReducedMotion ? {} : { x: 4 }}
            >
              <motion.div 
                className="p-2 rounded-xl bg-primary/10 border border-primary/20"
                whileHover={prefersReducedMotion ? {} : { scale: ANIMATION_CONSTANTS.iconHoverScale, y: -2 }}
                animate={prefersReducedMotion ? {} : { y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                aria-hidden="true"
              >
                <MapPin className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="font-semibold">Location</h3>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-1">Pune, Maharashtra</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              India <span className="text-base" role="img" aria-label="India flag">🇮🇳</span>
            </p>
          </Card>
        </motion.div>

        {/* Status Card */}
        <motion.div variants={VARIANTS.item} className="lg:col-span-1">
          <Card className="glass h-full p-6 hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-500 group">
            <motion.div 
              className="flex items-center gap-3 mb-3"
              whileHover={prefersReducedMotion ? {} : { x: 4 }}
            >
              <motion.div 
                className="p-2 rounded-xl bg-secondary/10 border border-secondary/20"
                whileHover={prefersReducedMotion ? {} : { scale: ANIMATION_CONSTANTS.iconHoverScale, rotate: -5 }}
                aria-hidden="true"
              >
                <Briefcase className="w-5 h-5 text-secondary" />
              </motion.div>
              <h3 className="font-semibold">Status</h3>
            </motion.div>
            <div className="flex items-center gap-2">
              <motion.div 
                className="relative flex h-2 w-2"
                animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                role="status"
                aria-label="Available status indicator"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" aria-hidden="true" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </motion.div>
              <p className="text-sm text-secondary font-semibold">Available for work</p>
            </div>
          </Card>
        </motion.div>

        {/* Achievements Card */}
        <motion.div variants={VARIANTS.item} className="lg:col-span-1">
          <Card className="glass h-full p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group">
            <motion.div 
              className="flex items-center gap-3 mb-3"
              whileHover={prefersReducedMotion ? {} : { x: 4 }}
            >
              <motion.div 
                className="p-2 rounded-xl bg-primary/10 border border-primary/20"
                whileHover={prefersReducedMotion ? {} : { scale: ANIMATION_CONSTANTS.iconHoverScale, rotate: 10 }}
                aria-hidden="true"
              >
                <Award className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="font-semibold">Highlights</h3>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-2">2+ Open-source projects</p>
            <p className="text-sm text-muted-foreground">
              Founder of <span className="text-primary font-semibold">Zocav</span>
            </p>
          </Card>
        </motion.div>

        {/* Interests Card */}
        <motion.div variants={VARIANTS.item} className="lg:col-span-2">
          <Card className="glass h-full p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
            <h3 className="mb-4 font-semibold">Focus Areas</h3>
            <div className="flex flex-wrap gap-2" role="list">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-sm text-primary font-mono cursor-default hover:shadow-lg hover:shadow-primary/20"
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * ANIMATION_CONSTANTS.staggerDelay, 
                    ...SPRING_CONFIG,
                    stiffness: 200,
                  }}
                  whileHover={prefersReducedMotion ? {} : { 
                    scale: ANIMATION_CONSTANTS.iconHoverScale, 
                    y: -4, 
                    backgroundColor: 'rgba(0, 217, 255, 0.15)', 
                    borderColor: 'rgba(0, 217, 255, 0.4)' 
                  }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  role="listitem"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Quick Stats removed */}
      </motion.div>
    </section>
  );
}
