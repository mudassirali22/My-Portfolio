import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import React from 'react';

export default function Background3D({ isDark }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse values to avoid jank
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const bgRotateX = useTransform(smoothY, [0, 1000], [5, -5]);
  const bgRotateY = useTransform(smoothX, [0, 1500], [-5, 5]);

  useEffect(() => {
    // Throttle or rely on Framer Motion's internal optimizations
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    // Use passive listener for better performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden will-change-transform">
      {/* 3D Perspective Grid */}
      <motion.div 
        style={{
          perspective: "1000px",
          rotateX: bgRotateX,
          rotateY: bgRotateY,
        }}
        className="absolute inset-0 z-0 opacity-[0.15]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </motion.div>

      {/* Floating 3D-like Objects - Reduced blur and complexity for performance */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{ 
            y: [null, Math.random() * -50, Math.random() * 50],
            rotate: [0, 180, 360],
            opacity: [0, 0.15, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: Math.random() * 15 + 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute w-96 h-96 rounded-full blur-[80px] will-change-transform ${
            i % 2 === 0 ? 'bg-accent-purple/10' : 'bg-accent-blue/10'
          }`}
        />
      ))}

      {/* Ambient Cursor Glow - Optimized */}
      <motion.div
        className={`absolute w-[400px] h-[400px] rounded-full ${isDark ? 'bg-accent-purple/10' : 'bg-accent-purple/15'} blur-[80px] pointer-events-none z-0 hidden lg:block will-change-transform`}
        style={{
          x: useTransform(smoothX, x => x - 200),
          y: useTransform(smoothY, y => y - 200),
        }}
      />
    </div>
  );
}
