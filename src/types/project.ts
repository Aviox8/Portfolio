export type Project = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured?: boolean;
};

export type ProjectCategory = 'web' | 'security' | 'ai' | 'other';
