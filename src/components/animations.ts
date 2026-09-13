import type { Variants } from 'framer-motion';

export const nameAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const titleAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const taglineAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const avatarAnimation = {
  initial: { opacity: 0, scale: 0.5, y: 40 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  transition: { duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  whileTap: { scale: 0.95 },
};

export const buttonAnimation = {
  initial: { opacity: 0, y: 30, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  whileHover: {
    scale: 1.05,
    boxShadow: '0 20px 40px rgba(69, 105, 255, 0.4)',
    transition: { duration: 0.3 },
  },
  whileTap: { scale: 0.95 },
};

export const containerAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
};

export const itemAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, amount: 0.3 },
};

export const cardAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  whileHover: {
    y: -10,
    boxShadow: '0 30px 60px rgba(69, 105, 255, 0.3)',
    transition: { duration: 0.3 },
  },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, amount: 0.2 },
};

export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const glowAnimation = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(69, 105, 255, 0.5)',
      '0 0 40px rgba(69, 105, 255, 0.8)',
      '0 0 20px rgba(69, 105, 255, 0.5)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const rotateAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const scaleUpAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, amount: 0.3 },
};

export const slideInLeftAnimation = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, amount: 0.3 },
};

export const slideInRightAnimation = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, amount: 0.3 },
};

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  viewport: { once: true, amount: 0.3 },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Corporate Professional - Modern & Smooth Animations

export const parallaxContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

export const parallaxImage = {
  initial: { y: 0 },
  animate: { y: 0 },
  whileInView: {
    y: [-20, 20],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut',
  },
  viewport: { once: false, amount: 0.5 },
};

const smoothEase = [0.23, 1, 0.320, 1] as const;

export const heroHeading: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: smoothEase } },
};

export const heroSubheading: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: smoothEase } },
};

export const heroCTA: Variants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, delay: 0.4, ease: smoothEase } },
  whileHover: { scale: 1.02, y: -2 },
  whileTap: { scale: 0.98 },
};

export const staggeredFadeUp = {
  container: {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  } as Variants,
  item: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } },
  } as Variants,
};

export const smoothSlideIn = {
  left: {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.23, 1, 0.320, 1] },
    viewport: { once: true, amount: 0.3 },
  },
  right: {
    initial: { opacity: 0, x: 80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.23, 1, 0.320, 1] },
    viewport: { once: true, amount: 0.3 },
  },
};

export const cardHoverEffect = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  whileHover: {
    y: -8,
    transition: { duration: 0.3 },
  },
  transition: { duration: 0.6, ease: [0.23, 1, 0.320, 1] },
  viewport: { once: true, amount: 0.2 },
};

export const underlineExpand = {
  initial: { width: 0 },
  whileHover: { width: '100%' },
  transition: { duration: 0.4, ease: [0.23, 1, 0.320, 1] },
};

export const numberCounter = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.23, 1, 0.320, 1] },
  viewport: { once: true, amount: 0.3 },
};

export const smoothScaleUp = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.23, 1, 0.320, 1] },
  viewport: { once: true, amount: 0.3 },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.4, ease: [0.23, 1, 0.320, 1] },
};
