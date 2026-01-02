'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, User, Briefcase, FolderRoot, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/experience', label: 'Experience', icon: Briefcase },
  { href: '/projects', label: 'Projects', icon: FolderRoot },
  { href: '/contact', label: 'Contact', icon: Mail },
];

function DockItem({ href, icon: Icon, label, mouseX }: { href: string; icon: any; label: string; mouseX: any }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width }}
        className="aspect-square rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center relative group backdrop-blur-md"
      >
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {label}
        </span>
      </motion.div>
    </Link>
  );
}

export function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-4 px-4 py-3 rounded-2xl bg-gray-950/20 border border-white/10 backdrop-blur-2xl"
      >
        {navItems.map((item) => (
          <DockItem key={item.href} {...item} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  );
}
