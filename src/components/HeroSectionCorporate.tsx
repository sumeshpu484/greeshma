'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Profile, CTAButton } from '@/types';
import { heroHeading, heroSubheading, heroCTA, staggeredFadeUp } from './animations';

interface HeroSectionCorporateProps {
  profile: Profile;
  ctaButtons: CTAButton[];
}

export default function HeroSectionCorporate({ profile, ctaButtons }: HeroSectionCorporateProps) {
  const primaryButtons = ctaButtons.filter(btn => btn.style === 'primary').sort((a, b) => a.displayOrder - b.displayOrder);
  const secondaryButtons = ctaButtons.filter(btn => btn.style !== 'primary').sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 md:pt-0">
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gray-100/30 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)]">
          {/* Left content */}
          <motion.div
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-fit"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={heroHeading} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Strategic Leader</span>
                <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  in Innovation
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p variants={heroSubheading} className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
              {profile.tagline || 'Driving strategic innovation and operational excellence across transformative ventures'}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.320, 1] }}
              className="text-lg text-gray-600 max-w-lg leading-relaxed"
            >
              {profile.bio || 'Combining technical expertise with strategic business acumen to build future-ready solutions'}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.320, 1] }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {primaryButtons.map((btn, i) => (
                <Link
                  key={btn.id}
                  href={btn.url}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-center"
                >
                  {btn.label}
                </Link>
              ))}
              {secondaryButtons.slice(0, 1).map((btn) => (
                <Link
                  key={btn.id}
                  href={btn.url}
                  className="px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all border border-gray-300 text-center"
                >
                  {btn.label}
                </Link>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-8"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-gray-400 text-sm"
              >
                <span>Scroll to explore</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.320, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-md">
              {/* Background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl transform rotate-3"></div>

              {/* Image container */}
              <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={profile.avatar?.url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=professional'}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-80 blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
