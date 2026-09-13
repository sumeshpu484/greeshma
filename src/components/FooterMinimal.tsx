'use client';

import { Profile, SocialLink } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from './animationsMinimal';

interface FooterMinimalProps {
  profile: Profile;
  socialLinks: SocialLink[];
}

export default function FooterMinimal({ profile, socialLinks }: FooterMinimalProps) {
  const currentYear = new Date().getFullYear();

  const platformIcons: Record<string, string> = {
    linkedin: '👔',
    github: '🐙',
    twitter: '𝕏',
    email: '✉️',
    instagram: '📷',
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">{profile.name}</h3>
            <p className="text-gray-600 text-sm">{profile.title}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(link => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-600 hover:text-orange-600 transition-colors text-lg"
                  title={link.platform}
                >
                  {platformIcons[link.platform] || '🔗'}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Contact</h4>
            <div className="space-y-2">
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="text-gray-600 hover:text-orange-600 transition-colors text-sm block"
                >
                  {profile.email}
                </a>
              )}
              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="text-gray-600 hover:text-orange-600 transition-colors text-sm block"
                >
                  {profile.phone}
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
