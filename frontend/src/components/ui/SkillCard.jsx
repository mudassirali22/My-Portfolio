import { motion, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Layout, Code, Database, Terminal, FileJson, Atom, Wind, Palette, Grid, Server, Zap, GitBranch, Send, Laptop, Compass, Shield, Radio, Cloud, Rocket, Globe, RefreshCw, Bot, Layers, Box } from "lucide-react";
import React from 'react';
import { itemVariants } from "../../data/portfolioData";

export default function SkillCard({ skill, idx, isDark, onDragOver, parentRef }) {
  const containerRef = useRef(null);
  const x = useSpring(0, { stiffness: 100, damping: 15 });
  const y = useSpring(0, { stiffness: 100, damping: 15 });

  const rotateX = useTransform(y, [-0.5, 0.5], ["30deg", "-30deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-30deg", "30deg"]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / rect.width) - 0.5;
    const yPct = (mouseY / rect.height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      layout
      dragConstraints={parentRef}
      dragElastic={0.1}
      dragMomentum={false}
      whileDrag={{
        scale: 1.1,
        zIndex: 100,
        cursor: 'grabbing',
        boxShadow: "0 25px 60px rgba(0,0,0,0.6)"
      }}
      onDrag={(e, info) => {
        onDragOver(idx, info.point);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      variants={itemVariants}
      className="h-full cursor-grab active:cursor-grabbing"
    >
      <div
        style={{
          transform: "translateZ(80px)",
          transformStyle: "preserve-3d",
        }}
        className={`p-6 aspect-square flex flex-col items-center justify-center gap-4 text-center group transition-all relative overflow-hidden rounded-2xl border ${isDark ? 'bg-slate-900/60 border-white/10 hover:border-accent-purple/40' : 'bg-white border-slate-200 hover:border-accent-purple/30 shadow-lg'} hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] pointer-events-none`}
      >
        {/* Spotlight Glare */}
        <motion.div
          style={{
            background: `radial-gradient(400px circle at var(--mx) var(--my), ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.03)'}, transparent 40%)`,
            "--mx": useTransform(x, [-0.5, 0.5], ["0%", "100%"]),
            "--my": useTransform(y, [-0.5, 0.5], ["0%", "100%"]),
          }}
          className="absolute inset-0 z-0 pointer-events-none"
        />

        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

        <motion.div
          style={{ transform: "translateZ(50px)" }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx * 0.1
          }}
          className={`p-4 rounded-xl glass ${isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'} group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-accent-purple/10 relative z-10`}
        >
          {skill.icon === "Layout" && <Layout size={28} strokeWidth={1} />}
          {skill.icon === "Code" && <Code size={28} strokeWidth={1} />}
          {skill.icon === "Database" && <Database size={28} strokeWidth={1} />}
          {skill.icon === "Terminal" && <Terminal size={28} strokeWidth={1} />}
          {skill.icon === "FileJson" && <FileJson size={28} strokeWidth={1} />}
          {skill.icon === "Atom" && <Atom size={28} strokeWidth={1} />}
          {skill.icon === "Wind" && <Wind size={28} strokeWidth={1} />}
          {skill.icon === "Palette" && <Palette size={28} strokeWidth={1} />}
          {skill.icon === "Grid" && <Grid size={28} strokeWidth={1} />}
          {skill.icon === "Server" && <Server size={28} strokeWidth={1} />}
          {skill.icon === "Zap" && <Zap size={28} strokeWidth={1} />}
          {skill.icon === "GitBranch" && <GitBranch size={28} strokeWidth={1} />}
          {skill.icon === "Send" && <Send size={28} strokeWidth={1} />}
          {skill.icon === "Laptop" && <Laptop size={28} strokeWidth={1} />}
          {skill.icon === "Compass" && <Compass size={28} strokeWidth={1} />}
          {skill.icon === "Shield" && <Shield size={28} strokeWidth={1} />}
          {skill.icon === "Radio" && <Radio size={28} strokeWidth={1} />}
          {skill.icon === "Cloud" && <Cloud size={28} strokeWidth={1} />}
          {skill.icon === "Rocket" && <Rocket size={28} strokeWidth={1} />}
          {skill.icon === "Globe" && <Globe size={28} strokeWidth={1} />}
          {skill.icon === "RefreshCw" && <RefreshCw size={28} strokeWidth={1} />}
          {skill.icon === "Bot" && <Bot size={28} strokeWidth={1} />}
          {skill.icon === "Layers" && <Layers size={28} strokeWidth={1} />}
          {skill.icon === "Box" && <Box size={28} strokeWidth={1} />}
        </motion.div>

        <div className="space-y-1 relative z-10" style={{ transform: "translateZ(40px)" }}>
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 group-hover:text-accent-purple transition-colors truncate px-1">
            {skill.category}
          </p>
          <h4 className={`text-base font-display font-medium group-hover:text-white transition-colors ${isDark ? 'text-slate-300' : 'text-slate-700'} truncate px-1`}>
            {skill.name}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}
