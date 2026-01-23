'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS, SITE_CONFIG } from '@/config/site';

const IconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
} as const;

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

export function SocialLinks({ className = '', showLabels = false }: SocialLinksProps) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map((social) => {
        const Icon = IconMap[social.name as keyof typeof IconMap];
        
        const isEmail = social.name === 'Email';
        
        return (
          <Link
            key={social.name}
            href={social.href}
            rel={!isEmail ? 'noopener noreferrer' : undefined}
            target={!isEmail ? '_blank' : undefined}
            title={social.label}
            className="apple-btn-secondary rounded-full p-3 transition-all hover:scale-110"
            aria-label={social.label}
          >
            <Icon size={20} />
            {showLabels && <span className="ml-2">{social.name}</span>}
          </Link>
        );
      })}
    </div>
  );
}
