// Minimal animations - simple, clean, and elegant
import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const hoverScale: Variants = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } },
};

export const cardHover: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  whileHover: { y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' },
};
