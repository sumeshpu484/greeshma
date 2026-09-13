'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface WorkExperienceCardEnhancedProps {
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  accentColor?: 'orange' | 'pink' | 'blue' | 'red' | 'teal' | 'purple';
  isExpanded?: boolean;
}

const accentColorMap = {
  orange: { border: 'border-orange-500', bg: 'bg-orange-50', text: 'text-orange-700', dot: 'bg-orange-500' },
  pink: { border: 'border-pink-500', bg: 'bg-pink-50', text: 'text-pink-700', dot: 'bg-pink-500' },
  blue: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
  red: { border: 'border-red-500', bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
  teal: { border: 'border-teal-500', bg: 'bg-teal-50', text: 'text-teal-700', dot: 'bg-teal-500' },
  purple: { border: 'border-purple-500', bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500' },
};

export default function WorkExperienceCardEnhanced({
  company,
  position,
  period,
  description,
  responsibilities = [],
  technologies = [],
  accentColor = 'blue',
  isExpanded = false,
}: WorkExperienceCardEnhancedProps) {
  const [expanded, setExpanded] = useState(isExpanded);
  const colors = accentColorMap[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex gap-6 md:gap-8">
        {/* Timeline Dot */}
        <div className="flex flex-col items-center relative">
          <motion.div
            whileHover={{ scale: 1.3 }}
            className={`w-4 h-4 rounded-full ${colors.dot} mt-2 cursor-pointer relative z-10 flex-shrink-0 shadow-lg`}
            onClick={() => setExpanded(!expanded)}
          />
          <div className={`w-1 ${colors.dot} flex-grow min-h-24`} />
        </div>

        {/* Card Content */}
        <motion.div
          layout
          onClick={() => setExpanded(!expanded)}
          className="flex-grow pb-12 cursor-pointer group"
        >
          <motion.div
            layout
            whileHover={{ y: -5 }}
            className={`bg-white rounded-lg p-6 md:p-8 border-l-4 ${colors.border} shadow-md hover:shadow-xl transition-all duration-300`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-grow">
                <motion.h3
                  layout
                  className={`text-xl md:text-2xl font-bold ${colors.text} mb-1`}
                >
                  {position}
                </motion.h3>
                <p className="text-gray-600 font-medium text-lg">{company}</p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap font-semibold bg-gray-100 px-3 py-1 rounded-full">
                {period}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

            {/* Key Achievements */}
            {responsibilities.length > 0 && (
              <motion.div
                layout
                className="mb-4 space-y-2"
              >
                <p className={`text-sm font-semibold ${colors.text} uppercase tracking-wider mb-3`}>
                  Key Highlights
                </p>
                <ul className="space-y-2">
                  {responsibilities.slice(0, expanded ? responsibilities.length : 2).map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex gap-3 text-gray-700 text-sm"
                    >
                      <span className={`${colors.text} font-bold mt-0.5 flex-shrink-0`}>→</span>
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Technologies */}
            {technologies.length > 0 && (
              <motion.div layout className="pt-4 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
                  Technologies & Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`text-xs px-3 py-1.5 rounded-full bg-white border-2 ${colors.border} ${colors.text} font-medium hover:${colors.bg} transition-colors`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Expand/Collapse Indicator */}
            {responsibilities.length > 2 && (
              <motion.div
                layout
                className="mt-4 flex items-center justify-center"
              >
                <motion.button
                  animate={{ rotate: expanded ? 180 : 0 }}
                  className={`text-sm font-semibold ${colors.text} flex items-center gap-2`}
                >
                  {expanded ? 'Show less' : 'Show more'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
