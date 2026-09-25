'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInUp } from './animationsMinimal';

const skillCategories = [
  {
    title: 'Operations & Strategy',
    skills: ['Operations Strategy', 'Business Analysis', 'Digital Transformation', 'Project Management'],
    dot: 'bg-orange-400',
  },
  {
    title: 'Technology & Innovation',
    skills: ['VR/XR Technology', 'Agile Methodology', 'Technology Strategy', 'Systems Architecture'],
    dot: 'bg-blue-400',
  },
  {
    title: 'Leadership & Management',
    skills: ['Team Leadership', 'Stakeholder Management', 'Organizational Development', 'Change Management'],
    dot: 'bg-pink-400',
  },
];

export default function SkillsMinimal() {
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
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Expertise & Capabilities
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 h-full hover:shadow-lg dark:hover:shadow-black/30 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className={`inline-block w-2 h-2 rounded-full ${category.dot} mt-2`}></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
