import { useRef, useEffect, useState, memo } from 'react';
import { useViewportScroll, useTransform, motion as fmotion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion, useMotionValue, animate } from 'framer-motion';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code2, Shield } from 'lucide-react';
import { getDevicePerformance, isMobile, isTouchDevice } from '../utils/deviceDetection';
import { useTheme } from '../theme';

// Morphing mesh with mouse-follow light (optimized for performance)
const AnimatedSphere = memo(({ performance, primaryColor = "#00D9FF", secondaryColor = "#00FF88" }: { performance: 'low' | 'medium' | 'high'; primaryColor?: string; secondaryColor?: string }) => {
  const meshRef = useRef<any>(null);
  const lightRef = useRef<any>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const frameCount = useRef(0);
  const isTouchEnabled = isTouchDevice();

  // Reduce geometry detail on low-end devices
  const geometryDetail = performance === 'low' ? 1 : performance === 'medium' ? 2 : 3;
  const frameSkip = performance === 'low' ? 3 : performance === 'medium' ? 2 : 1;

  useEffect(() => {
    // Only track mouse on non-touch devices for performance
    if (isTouchEnabled) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchEnabled]);

  useFrame((state) => {
    frameCount.current++;
    if (frameCount.current % frameSkip !== 0) return;
    
    if (meshRef.current) {
      // Morph mesh by oscillating distortion
      const t = state.clock.getElapsedTime();
      meshRef.current.material.distort = 0.28 + Math.sin(t * 1.2) * 0.12;
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
    if (lightRef.current && !isTouchEnabled) {
      // Move light with mouse (desktop only)
      lightRef.current.position.x = mouse.x * 5;
      lightRef.current.position.y = mouse.y * 3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={performance === 'low' ? 2 : 2.5}>
        <icosahedronGeometry args={[1, geometryDetail]} />
        <MeshDistortMaterial
          color={primaryColor}
          attach="material"
          distort={0.5}
          speed={1.9}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Mouse-follow light */}
      <pointLight ref={lightRef} intensity={1.2} distance={8} color={secondaryColor} position={[0,0,3]} />
    </Float>
  );
});

AnimatedSphere.displayName = 'AnimatedSphere';

// Floating particles (optimized for performance)
const Particles = memo(({ performance }: { performance: 'low' | 'medium' | 'high' }) => {
  const group = useRef<any>(null);
  // Reduce particle count on lower-end devices
  const particleCount = performance === 'low' ? 8 : performance === 'medium' ? 12 : 18;
  const geometryDetail = performance === 'low' ? 4 : 8;
  const frameSkip = performance === 'low' ? 3 : 2;
  const frameCount = useRef(0);

  useFrame((state) => {
    frameCount.current++;
    if (frameCount.current % frameSkip !== 0) return;
    
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.children.forEach((mesh: any, i: number) => {
      mesh.position.x += Math.sin(t * 0.5 + i) * 0.002;
      mesh.position.y += Math.cos(t * 0.7 + i) * 0.002;
    });
  });
  
  return (
    <group ref={group}>
      {Array.from({ length: particleCount }).map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i) * 4 + Math.random() * 0.5,
          Math.cos(i) * 2 + Math.random() * 0.5,
          Math.random() * 2 - 1
        ]}>
          <sphereGeometry args={[0.08, geometryDetail, geometryDetail]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? '#00D9FF' : '#00FF88'} 
            transparent 
            opacity={0.64} 
          />
        </mesh>
      ))}
    </group>
  );
});

Particles.displayName = 'Particles';

const Scene = memo(({ performance, primaryColor = "#00D9FF", secondaryColor = "#00FF88" }: { performance: 'low' | 'medium' | 'high'; primaryColor?: string; secondaryColor?: string }) => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <pointLight position={[-10, -10, -5]} intensity={0.5} color={secondaryColor} />
    <Particles performance={performance} />
    <AnimatedSphere performance={performance} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    <OrbitControls 
      enableZoom={false} 
      enablePan={false} 
      autoRotate 
      autoRotateSpeed={0.7}
      enableDamping={performance !== 'low'}
      dampingFactor={0.3}
    />
  </>
));

Scene.displayName = 'Scene';

export function Hero3D() {
  const { theme } = useTheme();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [devicePerformance, setDevicePerformance] = useState<'low' | 'medium' | 'high'>('medium');
  const [shouldRender3D, setShouldRender3D] = useState(true);
  const words = ['Secure', 'Scalable', 'Modern', 'Interactive'];
  
  // Determine colors based on theme
  const primaryColor = theme === 'light' ? '#0066ff' : '#00D9FF';
  const secondaryColor = theme === 'light' ? '#00cc66' : '#00FF88';
  
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, 100, { duration: 2, delay: 0.5 });
    return controls.stop;
  }, [count]);

  useEffect(() => {
    // Rotate words every 3 seconds
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    // Detect device performance and capabilities
    const performance = getDevicePerformance();
    setDevicePerformance(performance);
    
    // Disable 3D on mobile devices or low-performance devices
    const shouldDisable3D = isMobile() || performance === 'low';
    setShouldRender3D(!shouldDisable3D);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Pause render when section is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('hero');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax gradient background (disable on mobile for performance)
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 600], [0, isMobile() ? 40 : 80]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Animated Gradient Background */}
      <fmotion.div
        aria-hidden
        className="absolute inset-0 z-0 animated-gradient-bg"
        style={{ y: isMobile() ? 0 : y, opacity: 0.7 }}
      />

      {/* 3D Background - Optimized for device capabilities */}
      {!prefersReducedMotion && isVisible && shouldRender3D && (
        <div className="absolute inset-0 z-0 hidden md:block">
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 50 }}
            frameloop="demand"
            dpr={devicePerformance === 'low' ? 1 : window.devicePixelRatio}
            performance={{ min: 0.5 }}
            gl={{ 
              powerPreference: devicePerformance === 'low' ? 'low-power' : 'default',
              antialias: devicePerformance === 'high',
              alpha: true,
              stencil: false,
              depth: true
            }}
          >
            <Scene performance={devicePerformance} primaryColor={primaryColor} secondaryColor={secondaryColor} />
          </Canvas>
        </div>
      )}

      {/* Gradient Overlay for readability */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: theme === 'light'
            ? 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,1) 100%)'
            : 'linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.8) 30%, rgba(10,10,10,0.8) 70%, rgba(10,10,10,1) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Available for freelance work</span>
          </motion.div>

          {/* Animated Headline with Rotating Words */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Title */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider font-mono"
              >
                <Code2 className="w-4 h-4 text-primary" />
                <span>Full-Stack Developer</span>
                <Shield className="w-4 h-4 text-secondary" />
              </motion.div>

              <h1 className="relative" style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1 }}>
                <span className="inline-block">
                  Building{' '}
                  <span className="relative inline-block">
                    <motion.span
                      key={currentWordIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="gradient-text absolute inset-0"
                    >
                      {words[currentWordIndex]}
                    </motion.span>
                    <span className="invisible">{words[currentWordIndex]}</span>
                  </span>
                </span>
                <br />
                <span className="gradient-text">Web Experiences</span>
              </h1>
            </div>
            
            {/* Enhanced value proposition with icons */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)' }}
            >
              Specializing in{' '}
              <span className="text-primary font-semibold">React</span>,{' '}
              <span className="text-primary font-semibold">Next.js</span>, and{' '}
              <span className="text-primary font-semibold">WebRTC</span>
              {' '}to create open-source tools that empower{' '}
              <span className="relative inline-block">
                <motion.span className="gradient-text font-semibold">
                  developers worldwide
                </motion.span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary"
                />
              </span>
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-2 pt-2"
            >
              {['React', 'TypeScript', 'Three.js', 'Tailwind', 'Node.js'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced CTA buttons with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto px-4 sm:px-0"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:min-w-[200px] shadow-lg shadow-primary/25 relative overflow-hidden group touch-manipulation"
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  View My Work
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary w-full sm:min-w-[200px] backdrop-blur-sm group relative overflow-hidden touch-manipulation"
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get in Touch
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links with hover effects - Touch optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-3 pt-6"
          >
            {[
              { href: "https://github.com/archduke1337", icon: Github, label: "GitHub", color: "hover:text-white" },
              { href: "http://www.linkedin.com/in/gurvv", icon: Linkedin, label: "LinkedIn", color: "hover:text-[#0A66C2]" },
              { onClick: () => scrollToSection('contact'), icon: Mail, label: "Email", color: "hover:text-primary" }
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.href ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 md:p-3 rounded-xl border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-primary/10 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 md:w-5 md:h-5 transition-transform group-hover:scale-110" />
                  </a>
                ) : (
                  <button
                    onClick={social.onClick}
                    className={`p-3 md:p-3 rounded-xl border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-primary/10 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 md:w-5 md:h-5 transition-transform group-hover:scale-110" />
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator - Touch optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 2, repeatType: 'reverse' }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono hidden sm:block">Scroll to explore</span>
          <motion.button
            onClick={() => scrollToSection('about')}
            className="p-3 rounded-full border border-white/20 hover:border-primary bg-white/5 hover:bg-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Scroll to About section"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
