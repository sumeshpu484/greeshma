'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '🎨',
    title: 'Web Design & Development',
    description: 'Creating beautiful, responsive websites that engage users and drive conversions.'
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description: 'Optimizing websites for speed, SEO, and user experience to boost rankings.'
  },
  {
    icon: '🔧',
    title: 'Full-Stack Development',
    description: 'Building complete web applications with modern tech stacks and best practices.'
  },
  {
    icon: '📱',
    title: 'Mobile-First Design',
    description: 'Crafting responsive designs that work seamlessly across all devices.'
  },
  {
    icon: '🤝',
    title: 'Team Augmentation',
    description: 'Joining your team to accelerate development and deliver quality solutions.'
  },
  {
    icon: '🚀',
    title: 'Project Consultation',
    description: 'Strategic guidance on architecture, tech stack, and implementation planning.'
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

export default function ServicesSection() {
  return (
    <section className="relative py-20 md:py-28">
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
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            Comprehensive solutions to bring your digital vision to life
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-400 to-neon-pink rounded-full mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group card-modern p-8 h-full flex flex-col"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors flex-grow">
                {service.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 pt-6 border-t border-primary-400/20 group-hover:border-primary-400/40 transition-colors">
                <span className="text-primary-400 text-sm font-semibold">Explore →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
