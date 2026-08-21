'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at TechStart',
    content: 'Exceptional developer who delivers pixel-perfect results. Their attention to detail and proactive communication made the entire project smooth.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO of Digital Solutions Inc',
    content: 'Transformed our entire web infrastructure. The performance improvements alone saved us thousands in server costs. Highly recommended!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Lead at Creative Agency',
    content: 'A rare developer who truly understands design principles. They brought our most ambitious designs to life flawlessly.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    rating: 5
  },
  {
    name: 'David Park',
    role: 'Founder of StartupXYZ',
    content: 'Outstanding problem solver. Handled complex technical challenges with ease. Would definitely work together again!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    rating: 5
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

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-800/50 to-slate-900">
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
            <span className="gradient-text">What Clients Say</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-400 to-neon-pink rounded-full mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-modern p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary-400/30">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-100">{testimonial.name}</p>
                  <p className="text-sm text-primary-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
