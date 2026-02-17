export const SITE_CONFIG = {
  name: 'Aditya Yadav',
  title: 'BCA Cybersecurity Student & Full Stack Developer',
  description: 'Portfolio of Aditya Yadav, a BCA Cybersecurity student and Web Developer specializing in full-stack development and cybersecurity.',
  email: 'adityayadav@gmail.com',
  github: 'https://github.com/Aviox8',
  linkedin: 'https://www.linkedin.com/in/avioxdiii/',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://adityayadav.dev',
} as const;

export const NAVIGATION_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Research', href: '/research' },
  { name: 'Education', href: '/education' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: SITE_CONFIG.github,
    label: 'Visit my GitHub profile',
  },
  {
    name: 'LinkedIn',
    href: SITE_CONFIG.linkedin,
    label: 'Connect with me on LinkedIn',
  },
  {
    name: 'Email',
    href: `mailto:${SITE_CONFIG.email}`,
    label: 'Send me an email',
  },
] as const;

export const ANIMATION_TIMING = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
} as const;
