export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: {
    url: string;
    alt?: string;
  };
  tagline: string;
  email: string;
  phone?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  featured: boolean;
  displayOrder: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  tags: string[];
  published: boolean;
  publishedAt: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface SocialLink {
  id: string;
  platform: 'linkedin' | 'github' | 'twitter' | 'email' | 'instagram';
  url: string;
  label?: string;
  displayOrder: number;
}

export interface CTAButton {
  id: string;
  label: string;
  href: string;
  style: 'primary' | 'secondary' | 'ghost';
  displayOrder: number;
}

export interface PageData {
  profile: Profile;
  projects: Project[];
  blogPosts: BlogPost[];
  socialLinks: SocialLink[];
  ctaButtons: CTAButton[];
}
