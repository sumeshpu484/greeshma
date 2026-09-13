'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp } from './animationsMinimal';

interface CTAMinimalProps {
  heading?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function CTAMinimal({
  heading = 'Ready to Collaborate?',
  description = 'Let\'s discuss how I can help you achieve your goals and drive meaningful change.',
  primaryCTA = { label: 'Get in Touch', href: '/contact' },
  secondaryCTA = { label: 'Learn More', href: '/about' },
}: CTAMinimalProps) {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {heading}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={primaryCTA.href}
                className="block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 text-center"
              >
                {primaryCTA.label}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={secondaryCTA.href}
                className="block px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 text-center"
              >
                {secondaryCTA.label}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
