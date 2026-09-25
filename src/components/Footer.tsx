'use client';

import { Profile, SocialLink } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FooterProps {
  profile: Profile;
  socialLinks: SocialLink[];
}

export default function Footer({ profile, socialLinks }: FooterProps) {
  const platformIcons: Record<string, string> = {
    linkedin: '👔',
    github: '🐙',
    twitter: '𝕏',
    email: '✉️',
    instagram: '📷',
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 p-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to collaborate?</h3>
          <p className="text-blue-100 mb-6 text-lg max-w-2xl">
            Let's discuss how I can help you drive strategic innovation and achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <h3 className="text-xl font-bold">{profile.name?.split(' ')[0]}</h3>
            </div>
            <p className="text-gray-400 text-sm">{profile.title}</p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6 text-white">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(link => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  aria-label={link.label || link.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#60a5fa' }}
                  className="text-lg text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {platformIcons[link.platform] || '🔗'}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6 text-white">Info</h4>
            {profile.email && (
              <p className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            )}
            {profile.phone && (
              <p className="text-gray-400 text-sm mt-3 hover:text-blue-400 transition-colors">
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </p>
            )}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm"
        >
          <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
          <p>Built with Payload CMS, Next.js & Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
}
