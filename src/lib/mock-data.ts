import type { PageData } from '@/types';

export const mockPageData: PageData = {
  profile: {
    id: '1',
    name: 'Your Name',
    title: 'Full Stack Engineer',
    bio: 'Passionate about building beautiful and functional web experiences.',
    avatar: {
      url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=profile',
      alt: 'Profile Avatar',
    },
    tagline: 'Turning ideas into reality with code and creativity',
    email: 'you@example.com',
    phone: '+1 (555) 123-4567',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  socialLinks: [
    {
      id: '1',
      platform: 'linkedin',
      url: 'https://linkedin.com/in/yourname',
      label: 'LinkedIn',
      displayOrder: 1,
    },
    {
      id: '2',
      platform: 'github',
      url: 'https://github.com/yourname',
      label: 'GitHub',
      displayOrder: 2,
    },
    {
      id: '3',
      platform: 'twitter',
      url: 'https://twitter.com/yourname',
      label: 'Twitter',
      displayOrder: 3,
    },
  ],
  ctaButtons: [
    {
      id: '1',
      label: 'Get in Touch',
      href: 'mailto:you@example.com',
      style: 'primary',
      displayOrder: 1,
    },
    {
      id: '2',
      label: 'View Resume',
      href: '#',
      style: 'secondary',
      displayOrder: 2,
    },
  ],
};
