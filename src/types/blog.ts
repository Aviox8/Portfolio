export type BlogPost = {
  title: string;
  description: string;
  date: string;
  readTime: number;
  tags: string[];
  content: string;
  slug: string;
};

export type BlogSection = {
  id: string;
  label: string;
  level?: number;
};

export type TableOfContentsItem = {
  id: string;
  label: string;
  level: number;
};

export type CalloutProps = {
  type: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  children: React.ReactNode;
};
