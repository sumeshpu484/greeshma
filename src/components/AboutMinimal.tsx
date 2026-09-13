'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, fadeInLeft, fadeInRight } from './animationsMinimal';

interface AboutMinimalProps {
  photoUrl: string;
  title: string;
  description: string;
  highlights: string[];
}

export default function AboutMinimal({
  photoUrl,
  title,
  description,
  highlights,
}: AboutMinimalProps) {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-orange-100 rounded-2xl"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={photoUrl}
                  alt="About"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-4">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <span className="text-orange-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
