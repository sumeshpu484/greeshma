'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    value: '50+',
    label: 'Projects Completed',
    icon: '📁'
  },
  {
    value: '30+',
    label: 'Happy Clients',
    icon: '😊'
  },
  {
    value: '5+',
    label: 'Years Experience',
    icon: '⚡'
  },
  {
    value: '100%',
    label: 'Client Satisfaction',
    icon: '⭐'
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="card-modern p-6 md:p-8 text-center group"
            >
              <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
