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
  createdAt: string;
  updatedAt: string;
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
  socialLinks: SocialLink[];
  ctaButtons: CTAButton[];
}
