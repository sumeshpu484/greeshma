'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Profile } from '@/types';
import { fadeInLeft, fadeInRight } from './animationsMinimal';

interface AboutPageClientProps {
  profile: Profile;
}

export default function AboutPageClient({ profile }: AboutPageClientProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
            About
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My Story
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Learn more about my journey, expertise, and the driving force behind my work in strategic innovation and organizational leadership.
          </p>
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center pb-20">
        {/* Image */}
        <motion.div
          variants={fadeInLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-96 md:w-80 md:h-96">
            <div className="absolute inset-0 bg-orange-100 rounded-2xl transform -rotate-3"></div>
            <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={profile.avatar?.url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=professional'}
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeInRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {profile.name}
            </h2>
            <p className="text-xl font-medium text-orange-600 mb-6">
              {profile.title}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              {profile.bio || profile.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 pt-4 border-t border-gray-200">
            {profile.email && (
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">Email</p>
                <a href={`mailto:${profile.email}`} className="text-orange-600 hover:text-orange-700 text-lg">
                  {profile.email}
                </a>
              </div>
            )}
            {profile.phone && (
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">Phone</p>
                <a href={`tel:${profile.phone}`} className="text-orange-600 hover:text-orange-700 text-lg">
                  {profile.phone}
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
