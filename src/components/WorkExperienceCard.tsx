'use client';

import { motion } from 'framer-motion';
import { cardHover } from './animationsMinimal';

interface WorkExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  accentColor?: 'orange' | 'pink' | 'blue' | 'red' | 'teal' | 'purple';
}

const accentColorMap = {
  orange: 'border-orange-500 bg-orange-50',
  pink: 'border-pink-500 bg-pink-50',
  blue: 'border-blue-500 bg-blue-50',
  red: 'border-red-500 bg-red-50',
  teal: 'border-teal-500 bg-teal-50',
  purple: 'border-purple-500 bg-purple-50',
};

const textColorMap = {
  orange: 'text-orange-700',
  pink: 'text-pink-700',
  blue: 'text-blue-700',
  red: 'text-red-700',
  teal: 'text-teal-700',
  purple: 'text-purple-700',
};

export default function WorkExperienceCard({
  company,
  position,
  period,
  description,
  responsibilities = [],
  technologies = [],
  accentColor = 'blue',
}: WorkExperienceCardProps) {
  return (
    <motion.div
      variants={cardHover}
      className={`bg-white rounded-lg p-6 md:p-8 border-l-4 ${accentColorMap[accentColor]} shadow-sm hover:shadow-md transition-shadow`}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className={`text-xl md:text-2xl font-bold ${textColorMap[accentColor]} mb-1`}>
              {position}
            </h3>
            <p className="text-gray-600 font-medium">{company}</p>
          </div>
          <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{period}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

      {/* Responsibilities */}
      {responsibilities.length > 0 && (
        <div className="mb-4">
          <ul className="space-y-2">
            {responsibilities.map((resp, idx) => (
              <li key={idx} className="flex gap-3 text-gray-600 text-sm">
                <span className={`text-${accentColor}-500 font-bold mt-0.5`}>•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {technologies.length > 0 && (
        <div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`text-xs px-3 py-1 rounded-full bg-white border border-gray-300 text-gray-700`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
