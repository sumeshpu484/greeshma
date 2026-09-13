'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInUp } from './animationsMinimal';

const services = [
  {
    icon: '🎯',
    title: 'Operations Strategy',
    description: 'Strategic planning and execution across business operations for growth and efficiency',
  },
  {
    icon: '🚀',
    title: 'Digital Transformation',
    description: 'Leading organizational digitalization and modernization initiatives',
  },
  {
    icon: '💡',
    title: 'Innovation Leadership',
    description: 'Driving innovation through technology and organizational change',
  },
  {
    icon: '👥',
    title: 'Team Development',
    description: 'Building high-performing teams and developing organizational talent',
  },
];

export default function ServicesMinimal() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            What I Do
          </h2>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '64px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="block h-1 bg-orange-500 rounded-full"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.15, ease: 'backOut' }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="text-4xl mb-4 inline-block"
              >
                {service.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 + 0.25 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-gray-900 mb-3"
              >
                {service.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 + 0.35 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
