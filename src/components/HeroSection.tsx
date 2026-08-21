'use client';

import { Profile, CTAButton } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  nameAnimation,
  titleAnimation,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 20, repeat: Infinity, ease: 'linear' },
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            transition: { duration: 25, repeat: Infinity, ease: 'linear' },
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div className="space-y-8">
            {/* Name */}
            <motion.div
              {...nameAnimation}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="gradient-text">
                  {profile.name.split(' ')[0]}
                </span>
                <br />
                <span className="text-slate-100">
                  {profile.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div {...titleAnimation}>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-400">
                {profile.title}
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.div {...taglineAnimation}>
              <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
                {profile.tagline}
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-1 w-20 bg-gradient-to-r from-primary-400 to-neon-pink rounded-full"
            />

            {/* CTA Buttons */}
            <motion.div
              {...buttonAnimation}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {getPrimaryButtons().map((btn, idx) => (
                <motion.div
                  key={btn.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={btn.href}
                    className="btn-primary"
                  >
                    {btn.label}
                  </Link>
                </motion.div>
              ))}
              {getSecondaryButtons().slice(0, 1).map((btn, idx) => (
                <motion.div
                  key={btn.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={btn.href}
                    className={btn.style === 'secondary' ? 'btn-secondary' : 'btn-ghost'}
                  >
                    {btn.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats or Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-8 pt-8 border-t border-slate-700/50"
            >
              <div>
                <p className="text-2xl font-bold gradient-text">5+</p>
                <p className="text-sm text-slate-400">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">20+</p>
                <p className="text-sm text-slate-400">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">100%</p>
                <p className="text-sm text-slate-400">Client Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            {...avatarAnimation}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="relative"
            >
              {/* Glow background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-6 bg-gradient-to-r from-primary-500/50 via-neon-purple/50 to-neon-pink/50 rounded-3xl blur-2xl"
              />

              {/* Avatar container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-neon-purple/20 rounded-3xl border border-primary-400/30 overflow-hidden backdrop-blur-md">
                  <Image
                    src={profile.avatar.url}
                    alt={profile.avatar.alt || profile.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Animated border */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(69, 105, 255, 0.5)',
                      '0 0 40px rgba(69, 105, 255, 0.8), 0 0 20px rgba(181, 55, 242, 0.5)',
                      '0 0 20px rgba(69, 105, 255, 0.5)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-3xl border-2 border-primary-400/50"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-10 -right-10 w-20 h-20 border-2 border-neon-cyan/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -left-10 w-16 h-16 border-2 border-neon-pink/30 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="text-center">
          <p className="text-sm text-slate-400 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-primary-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
