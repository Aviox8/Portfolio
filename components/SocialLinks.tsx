'use client';

import { socials } from '@/lib/socials';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

type IconKey = 'github' | 'linkedin' | 'mail' | 'twitter';

const getIcon = (key: IconKey) => {
  const icons: Record<IconKey, React.ReactNode> = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    mail: <Mail size={20} />,
    twitter: <ExternalLink size={20} />,
  };
  return icons[key];
};

export const SocialLinks = () => {
  return (
    <motion.div
      className="flex gap-6 justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-lg backdrop-blur-glass bg-glass-light border border-glass-border text-gray-300 hover:text-cyan hover:border-cyan/50 transition-all duration-300 group"
          title={social.name}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              delay: index * 0.1,
              repeat: Infinity,
            }}
          >
            {getIcon(social.icon as IconKey)}
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
};
