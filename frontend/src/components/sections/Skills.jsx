import { motion } from "motion/react";
import Section from "../layout/Section";
import SkillCard from "../ui/SkillCard";
import React from 'react';
import { itemVariants, skills } from "../../data/portfolioData";

export default function Skills({
  isDark,
  skillItems,
  handleDrag,
  skillsRef,
  cardRefs
}) {
  return (
    <Section id="skills" className={`overflow-hidden !pb-8 !pt-2 ${isDark ? 'bg-slate-900/5' : 'bg-slate-100/50'}`}>
      <div className="max-w-6xl mx-auto space-y-14">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.h2
            variants={itemVariants}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-pink/60"
          >
            Tech Infrastructure
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tighter leading-none italic ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            The <span className="text-gradient">Stack.</span>
          </motion.h3>
        </div>

        <motion.div
          layout
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          ref={skillsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative"
        >
          {skillItems.map((skill, idx) => (
            <div
              key={skill.name}
              ref={el => cardRefs.current[idx] = el}
              className="h-full"
            >
              <SkillCard
                skill={skill}
                idx={idx}
                isDark={isDark}
                onDragOver={handleDrag}
                parentRef={skillsRef}
              />
            </div>
          ))}
        </motion.div>

        <div className={`relative py-4 md:py-6 overflow-hidden border-y rotate-[-1deg] md:rotate-[-2deg] ${isDark ? 'border-white/5 bg-black/20' : 'border-black/5 bg-slate-100/50'} group mt-4`}>
          <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] cursor-default text-slate-400 w-max">
            {[...Array(4)].map((_, listIdx) => (
              <div key={listIdx} className={`flex shrink-0 gap-12 md:gap-24 grayscale transition-opacity duration-700 px-6 md:px-12 ${isDark ? 'opacity-30 group-hover:opacity-60' : 'opacity-70 group-hover:opacity-90'}`}>
                {skills.map((skill, i) => (
                  <span key={i} className={`text-2xl md:text-5xl font-display font-black tracking-tighter uppercase whitespace-nowrap italic ${!isDark ? 'text-slate-600' : 'text-white'}`}>{skill.name}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
