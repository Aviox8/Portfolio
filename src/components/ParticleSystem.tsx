import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: 'cyan' | 'violet';
}

export function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const createParticle = (): Particle => {
      const size = Math.random() * 2 + 1;
      return {
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
        vx: (Math.random() - 0.5) * 1,
        vy: -(Math.random() * 1.5 + 0.5),
        life: 0,
        maxLife: Math.random() * 8 + 12,
        size,
        color: Math.random() > 0.5 ? 'cyan' : 'violet'
      };
    };

    // Animation loop
    const animate = () => {
      const particles = particlesRef.current;
      
      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;

        if (p.life > p.maxLife) {
          particles.splice(i, 1);
        }
      }

      // Add new particles randomly
      if (Math.random() < 0.3) {
        particles.push(createParticle());
      }

      // Render particles
      const particleElements = container.querySelectorAll('.particle');
      particleElements.forEach((el: Element) => el.remove());

      particles.forEach((p: Particle) => {
        const el = document.createElement('div');
        el.className = `particle ${p.color}`;
        el.style.left = `${p.x}px`;
        el.style.top = `${p.y}px`;
        el.style.width = `${p.size}px`;
        el.style.height = `${p.size}px`;
        el.style.opacity = `${1 - p.life / p.maxLife}`;
        el.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 100}px`);
        el.style.animation = `float-particle ${p.maxLife}s linear forwards`;
        container.appendChild(el);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      // Particles will automatically adapt
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="particle-system"
      aria-hidden="true"
    />
  );
}
