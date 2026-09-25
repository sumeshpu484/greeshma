'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Profile, CTAButton } from '@/types';

interface HeroMinimalProps {
  profile: Profile;
  ctaButtons: CTAButton[];
}

const groupAnimate = { y: [0, -14, 0] };
const groupTransition = { duration: 4.5, repeat: Infinity, ease: 'easeInOut' as const };

const dotAnimate = { x: [0, 6, 0, -6, 0], y: [0, -6, 0, 6, 0] };
const dotTransition = { duration: 4, repeat: Infinity, ease: 'easeInOut' as const };

export default function HeroMinimal({ profile, ctaButtons }: HeroMinimalProps) {
  const primaryButtons = ctaButtons.filter(btn => btn.style === 'primary').sort((a, b) => a.displayOrder - b.displayOrder);
  const secondaryButtons = ctaButtons.filter(btn => btn.style !== 'primary').sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 flex items-center justify-center py-20 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex justify-center md:justify-start"
          >
            <motion.div
              animate={groupAnimate}
              transition={groupTransition}
              className="relative w-72 h-[580px] md:w-80 md:h-[650px]"
            >
              {/* Background circle - stays static so its rotated edges never alias */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-orange-600 dark:to-orange-800 rounded-2xl transform -rotate-6" />

              {/* Image container */}
              <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={profile.avatar?.url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=professional'}
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Accent dot */}
              <motion.div
                animate={dotAnimate}
                transition={dotTransition}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-500 rounded-full"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Welcome label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Welcome
              </p>
            </motion.div>

            {/* Name and title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                {profile.name}
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-400 font-medium">
                {profile.title}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
            >
              {profile.bio || profile.tagline || 'Strategic leader driving innovation and organizational excellence'}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {primaryButtons.slice(0, 2).map((btn) => (
                <Link
                  key={btn.id}
                  href={btn.href}
                  className="px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300"
                >
                  {btn.label}
                </Link>
              ))}
              {secondaryButtons.slice(0, 1).map((btn) => (
                <Link
                  key={btn.id}
                  href={btn.href}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-lg font-semibold hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                >
                  {btn.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
