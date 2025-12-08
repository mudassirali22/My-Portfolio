import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = "", ...props }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  
  const onMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setRotate({ x: (y - 50) / 10, y: (50 - x) / 10 });
  };
  
  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`group relative rounded-2xl border border-border bg-card p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="absolute inset-0 rounded-2xl blur-xl transition-all duration-700"
          style={{
            background: "radial-gradient(800px circle at var(--x,50%) var(--y,50%), rgba(120,119,198,0.15), transparent 40%)",
          }}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;