'use client';

import { Profile, CTAButton } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  nameAnimation,
  taglineAnimation,
  avatarAnimation,
  buttonAnimation,
} from './animations';

interface HeroSectionProps {
  profile: Profile;
  ctaButtons: CTAButton[];
}

export default function HeroSection({ profile, ctaButtons }: HeroSectionProps) {
  const getPrimaryButtons = () =>
    ctaButtons
      .filter(btn => btn.style === 'primary')
      .sort((a, b) => a.displayOrder - b.displayOrder);

  const getSecondaryButtons = () =>
    ctaButtons
      .filter(btn => btn.style !== 'primary')
      .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4 py-20 md:py-0">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          <motion.h1
            {...nameAnimation}
            className="text-5xl md:text-6xl font-bold text-secondary-900 leading-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...taglineAnimation}
            className="text-2xl md:text-3xl text-primary-600 font-semibold"
          >
            {profile.title}
          </motion.p>

          <motion.p
            {...taglineAnimation}
            className="text-lg text-secondary-700 max-w-md leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            {...buttonAnimation}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            {getPrimaryButtons().map(btn => (
              <Link
                key={btn.id}
                href={btn.href}
                className="btn-primary text-center"
              >
                {btn.label}
              </Link>
            ))}
            {getSecondaryButtons()
              .slice(0, 1)
              .map(btn => (
                <Link
                  key={btn.id}
                  href={btn.href}
                  className={
                    btn.style === 'secondary'
                      ? 'btn-secondary text-center'
                      : 'btn-ghost text-center'
                  }
                >
                  {btn.label}
                </Link>
              ))}
          </motion.div>
        </motion.div>

        <motion.div
          {...avatarAnimation}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-shadow">
            <Image
              src={profile.avatar.url}
              alt={profile.avatar.alt || profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
