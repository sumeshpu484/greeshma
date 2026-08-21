'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express', 'GraphQL']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Webpack']
  },
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Team Leadership', 'Communication', 'Project Management', 'Mentoring']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function SkillsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-800/50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-400 to-neon-pink rounded-full mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group card-modern p-6 h-full"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-400 group-hover:text-primary-300 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIdx * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-neon-pink" />
                    <span className="text-slate-300 group-hover:text-slate-100 transition-colors">
                      {skill}
                    </span>
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
