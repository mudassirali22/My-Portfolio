import { motion } from "motion/react";
import Section from "../layout/Section";
import React from 'react';
import { itemVariants, processSteps } from "../../data/portfolioData";

export default function Workflow({ isDark }) {
  return (
    <Section id="process" className={isDark ? "bg-slate-900/10" : "bg-slate-50"}>
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-pink/60 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-accent-pink/30" />
             Workflow
          </h2>
          <h3 className={`text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tighter italic ${isDark ? 'text-white' : 'text-slate-900'}`}>My Process</h3>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Visual Line Connectors */}
          <div className="hidden md:block absolute top-[60px] left-8 right-8 h-[1px] bg-white/5 z-0" />

          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative z-10 space-y-8 group"
            >
              <div className={`w-10 h-10 rounded-full glass flex items-center justify-center font-display font-black text-accent-pink border-accent-pink/20 ${isDark ? 'bg-slate-950' : 'bg-white'} group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(244,114,182,0.3)] transition-all duration-500 text-sm`}>
                {step.step}
              </div>
              <div className="space-y-4">
                <h4 className={`text-xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.title}</h4>
                <p className={`text-sm font-light leading-relaxed italic ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
