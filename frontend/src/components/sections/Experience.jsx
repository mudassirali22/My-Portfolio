import { motion } from "motion/react";
import Section from "../layout/Section";
import React from 'react';
import { itemVariants, experience } from "../../data/portfolioData";

export default function Experience({ isDark }) {
  return (
    <Section id="experience" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.h2
            variants={itemVariants}
            className="text-[12px] font-black uppercase tracking-[0.5em] text-accent-blue/60"
          >
            Career Journey
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className={`text-2xl md:text-4xl lg:text-5xl font-display font-black tracking-tighter leading-none italic ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            My <span className="text-gradient">Experience.</span>
          </motion.h3>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-accent-blue/30 before:to-transparent">
          {/* Integrated Scanning Glow */}
          <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-accent-blue to-transparent z-0 shadow-[0_0_15px_rgba(96,165,250,0.5)]"
          />
          {experience.map((item, idx) => (
            <motion.div
              key={`exp-${item.id}`}
              variants={itemVariants}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Refined Node */}
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border border-accent-blue/20 text-accent-blue bg-slate-950 z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 group-hover:scale-125 transition-all duration-500`}>
                <div className={`w-1.5 h-1.5 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(96,165,250,1)]`} />
              </div>

              {/* Compact Card */}
              <div className={`w-[calc(100%-4rem)] md:w-[42%] p-5 md:p-6 glass rounded-2xl border border-white/5 group-hover:bg-slate-900/40 transition-all duration-500 relative overflow-hidden group-hover:border-accent-blue/20`}>
                <div className={`absolute top-0 right-0 w-32 h-32 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity bg-accent-blue/5`} />

                <div className="space-y-3 relative z-10">
                  <div className="flex flex-col gap-2">
                    <span className={`text-[8px] font-black uppercase tracking-[0.3em] px-4 py-2 glass rounded-full self-start text-accent-blue border-accent-blue/10`}>
                      {item.period}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 pl-2">{item.location}</span>
                  </div>

                  <div className="space-y-1">
                    <h4 className={`text-lg md:text-xl font-display font-bold transition-colors duration-500 tracking-tight group-hover:text-accent-blue ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.role}</h4>
                    <p className={`text-xs md:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} font-display font-medium italic opacity-70`}>{item.company}</p>
                  </div>
                  
                  {item.description && (
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'} font-light italic leading-relaxed pt-2 border-t border-white/5`}>
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
