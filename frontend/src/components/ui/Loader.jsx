import { motion } from "motion/react";
import { useEffect, useState } from "react";
import React from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        // Random increments for a more "realistic" feel
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05,
        filter: "blur(20px)",
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 font-sans"
    >
      <div className="relative mb-24 flex items-center justify-center">
        {/* Orbiting Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: 150 + i * 40,
              height: 150 + i * 40,
            }}
            className="absolute border border-white/5 rounded-full"
          />
        ))}

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-30 w-80 bg-gradient-to-br from-accent-blue via-accent-purple to-accent-pink rounded-full blur-3xl"
        />
        
        <div className="absolute flex flex-col items-center gap-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-display font-black tracking-tighter uppercase italic text-white"
          >
            MUDASSIR ALI
          </motion.h2>
          <motion.div 
             className="h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent w-32"
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>

      <div className="w-60 space-y-6">
        <div className="relative h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">System Status</span>
             <motion.span 
               key={Math.floor(progress/25)}
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               className="text-[12px] font-medium text-slate-300"
             >
               {progress < 30 && "Initializing Core..."}
               {progress >= 30 && progress < 60 && "Optimizing Assets..."}
               {progress >= 60 && progress < 90 && "Configuring Workspace..."}
               {progress >= 90 && "System Ready."}
             </motion.span>
          </div>
          <span className="text-2xl font-display font-light italic text-white tabular-nums">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-white/10" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r border-t border-white/10" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l border-b border-white/10" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r border-b border-white/10" />
    </motion.div>
  );
}
