import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUp, Github, ExternalLink } from "lucide-react";
import Magnetic from "./Magnetic";
import React from 'react';

export default function ProjectModal({
  selectedProject,
  setSelectedProject,
  isDark,
  modalRef,
  handleModalScroll,
  showScrollTop,
  scrollToTop,
  modalLoading
}) {
  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl"
          />

          {/* Modal */}
          <motion.div
            layoutId={selectedProject.id}
            ref={modalRef}
            onScroll={handleModalScroll}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 15, transition: { duration: 0.3 } }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className={`relative w-full max-w-5xl rounded-2xl md:rounded-3xl border overflow-hidden ${
              isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-black/5'
            } shadow-[0_40px_100px_rgba(0,0,0,0.5)] z-10 max-h-[90vh] overflow-y-auto`}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 z-50 border shadow-lg ${
                isDark 
                  ? 'bg-white text-slate-950 border-white/20 hover:bg-slate-200' 
                  : 'bg-slate-800 text-white border-slate-800 hover:bg-slate-700'
              }`}
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* Scroll to top */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  onClick={scrollToTop}
                  className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white bg-accent-purple shadow-xl z-[110] hover:scale-110 transition-transform"
                >
                  <ArrowUp size={20} strokeWidth={2.5} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Image */}
            <div className="w-full h-[280px] md:h-[420px] relative overflow-hidden">
              <motion.img
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-12 space-y-8">
              {modalLoading ? (
                <div className="space-y-6 animate-pulse">
                  <div className="flex gap-2">
                    <div className="h-5 w-16 bg-white/5 rounded-md" />
                    <div className="h-5 w-20 bg-white/5 rounded-md" />
                  </div>
                  <div className="h-10 bg-white/5 rounded-xl w-3/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-white/5 rounded-md w-full" />
                    <div className="h-4 bg-white/5 rounded-md w-5/6" />
                  </div>
                </div>
              ) : (
                <>
                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2"
                  >
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className={`text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-md ${
                        isDark ? 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20' : 'bg-blue-50 text-blue-700 border border-blue-100'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className={`text-2xl md:text-4xl font-display font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    {selectedProject.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`text-sm md:text-base font-light leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
                  >
                    {selectedProject.description}
                  </motion.p>

                  {/* Divider */}
                  <div className={`h-px w-full ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Magnetic>
                      <motion.a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 ${
                          isDark ? 'bg-white text-slate-950 hover:bg-accent-purple hover:text-white' : 'bg-slate-900 text-white hover:bg-accent-purple'
                        } shadow-lg`}
                      >
                        Live Preview <ExternalLink size={14} />
                      </motion.a>
                    </Magnetic>
                    <Magnetic>
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.25em] border transition-all duration-300 ${
                          isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-black/5 text-slate-900 hover:bg-black/5'
                        }`}
                      >
                        Source Code <Github size={16} />
                      </motion.a>
                    </Magnetic>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
