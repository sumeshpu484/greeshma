'use client';

import { motion } from 'framer-motion';
import WorkExperienceCard from './WorkExperienceCard';
import { fadeInUp, staggerContainer, staggerItem } from './animationsMinimal';

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

interface WorkExperienceMinimalProps {
  experiences: Experience[];
}

const accentColors = ['orange', 'pink', 'blue', 'red', 'teal', 'purple'] as const;

export default function WorkExperienceMinimal({ experiences }: WorkExperienceMinimalProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Work Experience
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, idx) => (
            <motion.div key={exp.id} variants={staggerItem}>
              <WorkExperienceCard
                company={exp.company}
                position={exp.position}
                period={exp.period}
                description={exp.description}
                responsibilities={exp.responsibilities}
                technologies={exp.technologies}
                accentColor={accentColors[idx % accentColors.length]}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
