import { useRef, useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingOrbProps {
  label: string;
  color: string;
  glowColor: string;
  position?: { x: number; y: number };
  onDrag?: (position: { x: number; y: number }) => void;
  onHover?: (isHovering: boolean) => void;
  size?: number;
  speed?: number;
}

// 3D Orb component rendered in Three.js
const OrbMesh = memo(({ color, glowColor, speed = 2 }: { color: string; glowColor: string; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.Light>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.rotation.y += 0.008 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      <pointLight ref={lightRef} color={glowColor} intensity={2} distance={10} />
    </Float>
  );
});

OrbMesh.displayName = 'OrbMesh';

// Wrapper component for the floating orb with interaction
const FloatingOrbInner = memo(({
  label,
  color,
  glowColor,
  position = { x: 0, y: 0 },
  onDrag,
  onHover,
  size = 80,
  speed = 2
}: FloatingOrbProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [currentPos, setCurrentPos] = useState(position);
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.parentElement?.getBoundingClientRect();
    if (!rect) return;

    const newPos = {
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2
    };

    // Constrain to viewport boundaries
    newPos.x = Math.max(0, Math.min(newPos.x, rect.width - size));
    newPos.y = Math.max(0, Math.min(newPos.y, rect.height - size));

    setCurrentPos(newPos);
    onDrag?.(newPos);
  };

  return (
    <motion.div
      ref={containerRef}
      className="absolute cursor-grab active:cursor-grabbing"
      style={{
        width: size,
        height: size,
        left: currentPos.x,
        top: currentPos.y,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovering(true);
        onHover?.(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        onHover?.(false);
      }}
      whileHover={{
        scale: 1.15,
        filter: 'drop-shadow(0 0 20px ' + glowColor + ')',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Canvas for 3D orb */}
      <Canvas
        className="w-full h-full"
        style={{ borderRadius: '50%' }}
        camera={{ position: [0, 0, 3] }}
      >
        <OrbMesh color={color} glowColor={glowColor} speed={speed} />
        <ambientLight intensity={0.4} />
      </Canvas>

      {/* Label below orb */}
      <div
        className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-center pointer-events-none"
        style={{
          color: color,
          fontSize: '12px',
          fontWeight: '600',
          textShadow: `0 0 10px ${glowColor}`,
          opacity: isHovering ? 1 : 0.7,
          transition: 'all 0.3s ease',
          fontFamily: "'Exo 2', sans-serif"
        }}
      >
        {label}
      </div>

      {/* Glow ring indicator */}
      <motion.div
        className="absolute inset-0 rounded-full border-2"
        style={{
          borderColor: glowColor,
          boxShadow: `0 0 15px ${glowColor}${isHovering ? 'cc' : '80'}`,
        }}
        animate={{
          opacity: isHovering ? 1 : 0.3,
          boxShadow: isHovering 
            ? `0 0 30px ${glowColor}, 0 0 60px ${glowColor}80` 
            : `0 0 15px ${glowColor}80`
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
});

FloatingOrbInner.displayName = 'FloatingOrbInner';

export const FloatingOrb = memo(FloatingOrbInner);
