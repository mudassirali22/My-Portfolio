import { motion } from "motion/react";
import { ExternalLink, Github, Eye } from "lucide-react";
import React from 'react';

export default function ProjectCard({ project, onClick, isDark, featured = false }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`group relative w-full overflow-hidden cursor-pointer ${
        featured ? 'h-[380px] md:h-[480px]' : 'h-[350px] md:h-[420px]'
      } rounded-2xl md:rounded-3xl`}
    >
      {/* Image */}
      <motion.img
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        referrerPolicy="no-referrer"
      />

      {/* Gradient Overlay — always visible, deepens on hover */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${
        isDark
          ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90'
          : 'bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80'
      }`} />

      {/* Top-right: Tags (visible on hover) */}
      <div className="absolute top-5 right-5 flex flex-wrap justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 max-w-[70%]">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-[8px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 bg-white/15 backdrop-blur-md border border-white/10 text-white/90 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom: Title + Actions */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        {/* Title — always visible */}
        <h3 className={`font-display font-black text-white tracking-tight leading-[1.1] ${
          featured ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'
        }`}>
          {project.title}
        </h3>

        {/* Description — visible on hover */}
        <p className="text-[11px] md:text-xs text-white/60 font-light leading-relaxed mt-2 max-w-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75 line-clamp-2">
          {project.description}
        </p>

        {/* Action links — visible on hover */}
        <div className="flex items-center gap-3 mt-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-150">
          <span
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white bg-white/15 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            <Eye size={11} /> View Details
          </span>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300"
          >
            <ExternalLink size={11} /> Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300"
          >
            <Github size={14} /> Code
          </a>
        </div>
      </div>

      {/* Subtle inner border */}
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/[0.06] pointer-events-none" />
    </motion.div>
  );
}
