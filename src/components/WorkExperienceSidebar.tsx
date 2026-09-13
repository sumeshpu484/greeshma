'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
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

interface WorkExperienceSidebarProps {
  experiences: Experience[];
}

const accentColors = {
  0: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-700', badge: 'bg-orange-100' },
  1: { bg: 'bg-pink-50', border: 'border-pink-500', text: 'text-pink-700', badge: 'bg-pink-100' },
  2: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-700', badge: 'bg-blue-100' },
  3: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-700', badge: 'bg-red-100' },
  4: { bg: 'bg-teal-50', border: 'border-teal-500', text: 'text-teal-700', badge: 'bg-teal-100' },
  5: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-700', badge: 'bg-purple-100' },
} as const;

export default function WorkExperienceSidebar({ experiences }: WorkExperienceSidebarProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = experiences[selectedIndex];
  const colors = accentColors[selectedIndex as keyof typeof accentColors];

  const iconMap: Record<string, string> = {
    'WARTENS UK': '🎯',
    'iUNI': '🚀',
    'EY': '💼',
    'Ignitho': '🔧',
    'StaxLabs': '✅',
  };

  const getIcon = (company: string) => {
    for (const [key, icon] of Object.entries(iconMap)) {
      if (company.includes(key)) return icon;
    }
    return '💼';
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
            Professional Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Work Experience
          </h2>
        </motion.div>

        {/* Sidebar + Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-3">
              {experiences.map((exp, idx) => {
                const itemColors = accentColors[idx as keyof typeof accentColors];
                return (
                  <motion.button
                    key={exp.id}
                    onClick={() => setSelectedIndex(idx)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-3 py-3 rounded-lg transition-all duration-300 overflow-hidden ${
                      selectedIndex === idx
                        ? `${itemColors.bg} ${itemColors.border} border-l-4 font-semibold ${itemColors.text}`
                        : 'bg-gray-50 border-l-4 border-gray-300 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-start gap-2 min-w-0">
                      <span className="text-base flex-shrink-0 mt-0.5">{getIcon(exp.company)}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold truncate leading-snug">{exp.company}</div>
                        <div className="text-xs opacity-75 line-clamp-2 leading-snug">{exp.position}</div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Main Card */}
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className={`bg-white rounded-lg p-8 md:p-12 border-l-4 ${colors.border} shadow-lg hover:shadow-xl transition-shadow`}>
              {/* Header */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`text-2xl md:text-3xl lg:text-4xl font-bold ${colors.text} mb-2 break-words`}
                    >
                      {selected.position}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className={`text-lg md:text-xl font-semibold ${colors.text} opacity-80 break-words`}
                    >
                      {selected.company}
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`${colors.badge} px-4 py-2 rounded-lg font-semibold ${colors.text} text-xs md:text-sm whitespace-nowrap flex-shrink-0 mt-2 md:mt-0`}
                  >
                    {selected.period}
                  </motion.div>
                </div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 break-words"
              >
                {selected.description}
              </motion.p>

              {/* Responsibilities */}
              {selected.responsibilities.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h4 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-4`}>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {selected.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + idx * 0.05 }}
                        className="flex gap-3 min-w-0"
                      >
                        <span className={`${colors.text} font-bold text-lg flex-shrink-0 mt-0.5`}>
                          ↪
                        </span>
                        <span className="text-gray-700 leading-relaxed break-words min-w-0">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Technologies */}
              {selected.technologies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-8 border-t border-gray-200"
                >
                  <h4 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-4`}>
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.35 + idx * 0.05 }}
                        whileHover={{ scale: 1.08 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium border-2 ${colors.border} ${colors.text} bg-white hover:${colors.bg} transition-all`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
