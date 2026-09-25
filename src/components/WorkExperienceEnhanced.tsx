'use client';

import { motion } from 'framer-motion';
import WorkExperienceCardEnhanced from './WorkExperienceCardEnhanced';
import { fadeInUp } from './animationsMinimal';

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  type: string;
}

interface WorkExperienceEnhancedProps {
  experiences: Experience[];
}

const accentColors = ['orange', 'pink', 'blue', 'red', 'teal', 'purple'] as const;

export default function WorkExperienceEnhanced({ experiences }: WorkExperienceEnhancedProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
            Professional Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A timeline of my professional growth, leadership roles, and strategic contributions across diverse organizations.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-2 md:left-1.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-blue-500 to-pink-500 opacity-20" />

          {/* Experience Cards */}
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <WorkExperienceCardEnhanced
                  company={exp.company}
                  position={exp.position}
                  period={exp.period}
                  description={exp.description}
                  responsibilities={exp.responsibilities}
                  technologies={exp.technologies}
                  accentColor={accentColors[idx % accentColors.length]}
                  isExpanded={idx === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline End */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex gap-6 md:gap-8 mt-12"
        >
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg"
            />
          </div>
          <div className="pt-1">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Continuing to lead and innovate
            </p>
            <p className="text-gray-600 mt-1">
              Actively pursuing new opportunities for strategic growth and organizational excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
