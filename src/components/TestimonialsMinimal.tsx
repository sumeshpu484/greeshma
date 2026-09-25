'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInUp } from './animationsMinimal';

const testimonials = [
  {
    quote: 'Exceptional strategic leader who consistently delivers results',
    author: 'Industry Recognition',
    role: '2025 Startup Awards Winner',
  },
  {
    quote: 'Demonstrated expertise in digital transformation and innovation',
    author: 'Team Feedback',
    role: 'Cross-functional collaboration',
  },
  {
    quote: 'Outstanding ability to bridge technology and business goals',
    author: 'Stakeholder Feedback',
    role: 'Partnership Development',
  },
];

export default function TestimonialsMinimal() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What Others Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 flex flex-col h-full hover:shadow-lg dark:hover:shadow-black/30 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
            >
              <span className="text-orange-500 dark:text-orange-400 text-3xl font-serif leading-none mb-2">"</span>
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
