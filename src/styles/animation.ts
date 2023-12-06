import { Variants } from 'framer-motion';

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const fadeInHalf: Variants = {
  initial: {
    opacity: 0.3,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0.3,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity',
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
};

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const fadeInScale: Variants = {
  initial: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const fadeInSlideToRight: Variants = {
  initial: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const fadeInSlideToLeft: Variants = {
  initial: {
    opacity: 0,
    x: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};
