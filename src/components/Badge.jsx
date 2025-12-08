import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "border-border bg-secondary text-secondary-foreground",
    primary: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <motion.span 
      className={`rounded-full border px-3 py-1 text-xs shadow-sm ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {children}
    </motion.span>
  );
};

export default Badge;