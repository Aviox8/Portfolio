'use client';

import React, { useEffect, useRef } from 'react';

export default function LightningBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    // Lightning Bolt Class
    class Bolt {
      x: number;
      y: number;
      points: {x: number, y: number}[];
      opacity: number;
      fading: boolean;
      speed: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = -50; // Start above screen
        this.points = [{x: this.x, y: this.y}];
        this.opacity = 0;
        this.fading = false;
        this.speed = Math.random() * 5 + 5;
        // Blue/Purple lightning colors
        this.color = Math.random() > 0.5 ? 'rgba(0, 110, 255,' : 'rgba(120, 50, 255,'; 
      }

      update() {
        // Growth phase
        if (!this.fading) {
           this.opacity += 0.1;
           if(this.opacity >= 1) this.opacity = 1;
           
           // Add segments
           const lastPoint = this.points[this.points.length - 1];
           if (lastPoint.y < height + 50) {
             const newX = lastPoint.x + (Math.random() - 0.5) * 50; // Jagged X movement
             const newY = lastPoint.y + Math.random() * 50 + 10; // Downward y movement
             this.points.push({x: newX, y: newY});
           } else {
             // Reached bottom, start fading
             this.fading = true;
           }
        } else {
          // Fading phase
          this.opacity -= 0.02;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if(this.points.length < 2) return;
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for(let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.strokeStyle = `${this.color}${this.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color === 'rgba(0, 110, 255,' ? '#00eeff' : '#aa00ff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    let bolts: Bolt[] = [];
    let lastTime = 0;
    const interval = 800; // New bolt every ~800ms
    let timer = 0;

    const animate = (timeStamp: number) => {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      timer += deltaTime;

      if (timer > interval) {
        if(bolts.length < 5) bolts.push(new Bolt()); // Limit active bolts
        timer = 0;
      }

      ctx.clearRect(0, 0, width, height);

      // Background subtle glow
      // const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width);
      // gradient.addColorStop(0, '#050a14'); // Dark center
      // gradient.addColorStop(1, '#000000'); // Black edges
      // ctx.fillStyle = gradient; // We'll let CSS handle bg color, just clear here
      
      bolts.forEach((bolt, index) => {
        bolt.update();
        bolt.draw(ctx);
        if (bolt.opacity <= 0) {
          bolts.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-30 mix-blend-screen"
    />
  );
}
