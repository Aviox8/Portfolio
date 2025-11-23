import { useRef, useEffect, useState, memo } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GravitationalHeroProps {
  name: string;
  title?: string;
  subtitle?: string;
  cursorPos?: { x: number; y: number };
}

// Warped text shader component (Three.js)
const WarpedText = memo(({ text, cursorPos }: { text: string; cursorPos?: { x: number; y: number } }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.001;
      groupRef.current.rotation.x = (cursorPos?.y || 0) * 0.02 * (window.innerHeight / 2 - (cursorPos?.y || 0)) / window.innerHeight;
      groupRef.current.rotation.y = (cursorPos?.x || 0) * 0.02 * (window.innerWidth / 2 - (cursorPos?.x || 0)) / window.innerWidth;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <boxGeometry args={[text.length * 0.5, 2, 0.1]} />
        <meshPhongMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.6}
          wireframe={true}
        />
      </mesh>
    </group>
  );
});

WarpedText.displayName = 'WarpedText';

// Main hero component with floating text
const GravitationalHeroInner = memo(({
  name = 'GAURAV',
  title = 'Developer Explorer',
  subtitle = 'Navigating the void of web innovation',
  cursorPos
}: GravitationalHeroProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, transparent 70%)',
            left: cursorPos?.x || '50%',
            top: cursorPos?.y || '50%',
            x: -200,
            y: -200,
          }}
          animate={{
            x: (cursorPos?.x || 0) - 200,
            y: (cursorPos?.y || 0) - 200,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 0, 255, 0.1) 0%, transparent 70%)',
            right: cursorPos?.x ? `${cursorPos.x}px` : '0%',
            bottom: cursorPos?.y ? `${cursorPos.y}px` : '0%',
          }}
          animate={{
            right: cursorPos?.x ? `${cursorPos.x}px` : '0%',
            bottom: cursorPos?.y ? `${cursorPos.y}px` : '0%',
          }}
          transition={{ type: 'spring', stiffness: 80, damping: 25 }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Main name with gravitational effect and letter animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.2 }}
          className="mb-8"
        >
          <div className="text-7xl md:text-9xl font-black tracking-tighter select-none">
            <style>{`
              .hero-letter {
                display: inline-block;
                font-family: 'Orbitron', sans-serif;
                background: linear-gradient(135deg, #00ffff 0%, #ff00ff 50%, #00ffff 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: text-glow-wave 3s ease-in-out infinite;
                filter: drop-shadow(0 0 10px #00ffff) drop-shadow(0 0 20px #ff00ff);
              }
              
              .hero-letter:hover {
                animation: none;
                filter: drop-shadow(0 0 20px #00ffff) drop-shadow(0 0 40px #ff00ff) drop-shadow(0 0 60px #aa00ff);
                transform: scaleY(1.1) skewX(-5deg);
              }
            `}</style>
            {name.split('').map((letter, idx) => (
              <motion.span
                key={idx}
                className="hero-letter inline-block"
                onMouseEnter={() => setHoveredLetter(idx)}
                onMouseLeave={() => setHoveredLetter(null)}
                animate={{
                  y: hoveredLetter === idx ? -15 : 0,
                  skewX: hoveredLetter === idx ? -8 : 0,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Title with ethereal effect */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 60, damping: 15 }}
          className="text-2xl md:text-4xl font-light tracking-widest mb-4"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            color: '#00ffff',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(170, 0, 255, 0.3)',
          }}
        >
          {title}
        </motion.h2>

        {/* Subtitle that disperses on hover (particle-like text) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 60, damping: 15 }}
          className="text-lg md:text-xl tracking-wide mb-12 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            color: 'rgba(255, 255, 255, 0.7)',
            letterSpacing: '0.15em',
          }}
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons with glassmorphism and hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 60, damping: 15 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <button
            className="glass-panel px-8 py-4 rounded-lg font-semibold tracking-wide group relative overflow-hidden"
            style={{
              background: 'rgba(0, 255, 255, 0.1)',
              border: '2px solid rgba(0, 255, 255, 0.3)',
              color: '#00ffff',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span className="relative z-10">Explore Projects</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(170, 0, 255, 0.1) 100%)',
              }}
            />
          </button>

          <button
            className="glass-panel px-8 py-4 rounded-lg font-semibold tracking-wide group relative overflow-hidden"
            style={{
              background: 'rgba(170, 0, 255, 0.1)',
              border: '2px solid rgba(170, 0, 255, 0.3)',
              color: '#aa00ff',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(170, 0, 255, 0.6), inset 0 0 20px rgba(170, 0, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span className="relative z-10">Get In Touch</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, rgba(170, 0, 255, 0.2) 0%, rgba(0, 255, 255, 0.1) 100%)',
              }}
            />
          </button>
        </motion.div>

        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <div
              className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
              style={{ borderColor: '#00ffff' }}
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 rounded-full"
                style={{ backgroundColor: '#00ffff' }}
              />
            </div>
            <span className="text-xs mt-2 tracking-widest" style={{ color: '#00ffff' }}>
              SCROLL
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

GravitationalHeroInner.displayName = 'GravitationalHero';

export const GravitationalHero = memo(GravitationalHeroInner);
