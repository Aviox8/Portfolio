import { useRef, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface AntiGravityCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  index?: number;
  onExpand?: () => void;
}

// 3D tumbling box for card
const TumblingBox = memo(({ index }: { index?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * ((index ?? 0) + 1);
      meshRef.current.rotation.y += 0.005 * ((index ?? 0) + 1);
      meshRef.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;
    }
  });

  return (
    <Box ref={meshRef} args={[2, 1.5, 0.1]}>
      <meshPhongMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.4}
        wireframe={true}
      />
    </Box>
  );
});

TumblingBox.displayName = 'TumblingBox';

// Main anti-gravity card component
const AntiGravityCardInner = memo(({
  title,
  description,
  image,
  tags = [],
  link,
  index = 0,
  onExpand,
}: AntiGravityCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      className="relative h-96 cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      initial={{
        opacity: 0,
        y: 40,
      }}
      transition={{
        type: 'spring',
        stiffness: 60,
        damping: 20,
        delay: index * 0.1,
      }}
      style={{
        animation: `tumble ${8 + index * 0.5}s linear infinite`,
        perspective: '1000px',
      }}
    >
      {/* Glass panel background */}
      <div
        className="absolute inset-0 glass-card rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '2px solid rgba(0, 255, 255, 0.2)',
          boxShadow: isHovered
            ? '0 0 40px rgba(0, 255, 255, 0.4), 0 0 80px rgba(170, 0, 255, 0.2)'
            : '0 0 20px rgba(0, 255, 255, 0.1)',
        }}
      >
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <TumblingBox index={index} />
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1} />
          </Canvas>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col p-6">
          {/* Image placeholder or actual image */}
          <motion.div
            className="mb-4 h-32 rounded-lg overflow-hidden flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(170, 0, 255, 0.1))',
            }}
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="text-3xl"
                style={{ color: '#00ffff' }}
              >
                🚀
              </div>
            )}
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-xl font-bold mb-2 truncate"
            style={{
              color: '#00ffff',
              textShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
              fontFamily: "'Orbitron', sans-serif",
            }}
            animate={{
              letterSpacing: isHovered ? '0.1em' : '0',
            }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p
            className="text-sm mb-4 flex-grow line-clamp-3"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: "'Exo 2', sans-serif",
            }}
          >
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <motion.div
              className="flex gap-2 flex-wrap mb-4"
              animate={{
                opacity: isHovered ? 1 : 0.6,
              }}
            >
              {tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full"
                  style={{
                    background: 'rgba(0, 255, 255, 0.15)',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    color: '#00ffff',
                    fontFamily: "'Exo 2', sans-serif",
                    fontWeight: '600',
                  }}
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span
                  className="px-3 py-1 text-xs rounded-full"
                  style={{
                    background: 'rgba(170, 0, 255, 0.15)',
                    border: '1px solid rgba(170, 0, 255, 0.3)',
                    color: '#aa00ff',
                  }}
                >
                  +{tags.length - 3}
                </span>
              )}
            </motion.div>
          )}

          {/* Action button */}
          <motion.button
            className="mt-auto px-6 py-2 rounded-lg font-semibold text-sm"
            style={{
              background: isHovered
                ? 'rgba(0, 255, 255, 0.2)'
                : 'rgba(0, 255, 255, 0.1)',
              border: '1.5px solid rgba(0, 255, 255, 0.4)',
              color: '#00ffff',
              fontFamily: "'Exo 2', sans-serif",
            }}
            onClick={onExpand}
            whileHover={{
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)',
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {link ? '→ View Project' : 'Learn More'}
          </motion.button>
        </div>

        {/* Black hole warp effect on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background:
                'radial-gradient(circle at center, rgba(255, 0, 255, 0.2) 0%, transparent 70%)',
              animation: 'black-hole-warp 3s ease-in-out infinite',
            }}
          />
        )}
      </div>
    </motion.div>
  );
});

AntiGravityCardInner.displayName = 'AntiGravityCard';

export const AntiGravityCard = memo(AntiGravityCardInner);
