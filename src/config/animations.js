export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
};

export const stagger = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2 
    } 
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
};

export const slideIn = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    } 
  },
};

export const floating = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};