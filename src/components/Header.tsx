'use client';

import { SocialLink } from '@/types';
import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  socialLinks: SocialLink[];
  name: string;
}

export default function Header({ socialLinks, name }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-subtle">
      <div className="container-max flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="text-2xl font-bold text-primary-600">
          {name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-secondary-700 hover:text-primary-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map(link => (
            <a
              key={link.id}
              href={link.url}
              aria-label={link.label || link.platform}
              className="text-xl hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              {platformIcons[link.platform] || '🔗'}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-secondary-700 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-secondary-700 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200 flex gap-4">
            {socialLinks.map(link => (
              <a
                key={link.id}
                href={link.url}
                className="text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {platformIcons[link.platform] || '🔗'}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
