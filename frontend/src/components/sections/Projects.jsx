import { motion } from "motion/react";
import Section from "../layout/Section";
import ProjectCard from "../ui/ProjectCard";
import React, { useState } from 'react';
import { itemVariants, filters, projects } from "../../data/portfolioData";

export default function Projects({ isDark, handleProjectClick }) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects = selectedFilter === "All"
    ? projects
    : projects.filter(p => p.tags.includes(selectedFilter));

  return (
    <Section id="projects" className={isDark ? "bg-slate-900/15" : "bg-slate-100"}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-accent-blue/60 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-accent-blue/30" />
              Portfolio
            </h2>
            <h3 className={`text-2xl md:text-4xl lg:text-5xl font-display font-black tracking-tighter leading-[0.85] italic ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Featured
              <span className="text-gradient p-2">Selection.</span>
            </h3>
          </motion.div>
          <motion.p variants={itemVariants} className={`${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-sm text-xs md:text-sm font-light leading-relaxed border-l border-accent-blue/20 pl-8 italic`}>
            A curated selection of high-performance products, emphasizing pixel-perfect engineering and seamless user interaction.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 pt-4"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${selectedFilter === filter
                ? (isDark ? "bg-white text-slate-950 border-white shadow-[0_10px_30px_rgba(255,255,255,0.15)]" : "bg-slate-900 text-white border-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.1)]")
                : `glass border-white/5 ${isDark ? 'text-slate-400 hover:text-white hover:border-white/20' : 'text-slate-500 hover:text-slate-900 hover:border-slate-300'}`
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid lg:grid-cols-2 gap-16"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                project={project}
                isDark={isDark}
                onClick={() => handleProjectClick(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
