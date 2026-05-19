import { motion } from "motion/react";
import React from 'react';

export default function Footer({ isDark }) {
  return (
    <footer className={`py-10 border-t ${isDark ? 'border-white/5 bg-black/40' : 'border-black/5 bg-slate-100'} relative overflow-hidden`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-3xl md:text-4xl font-display font-black tracking-tighter uppercase italic text-gradient leading-none">MUDASSIR ALI.</h4>
            <p className={`text-[9px] uppercase tracking-[0.5em] font-black opacity-60 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}> FullStack Developer</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
            {[
              { name: "GITHUB", href: "https://github.com/mudassirali22" },
              { name: "LINKEDIN", href: "https://www.linkedin.com/in/mudassir-a-ba721830b" },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className={`text-sm uppercase tracking-[0.3em] font-bold transition-all relative group px-2 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {social.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-accent-blue to-accent-purple group-hover:w-full transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
            <p className={`text-[9px] uppercase tracking-[0.4em] font-bold ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
              © 2026 Mudassir Ali. All rights reserved.
            </p>
            <div className={`hidden md:block h-1 w-1 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-300'}`} />
          </div>
          <div className="flex items-center gap-6">
             <div className="h-[1px] w-12 bg-white/10" />
             <p className={`text-[9px] uppercase tracking-[0.4em] font-black italic ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
               Handcrafted in React
             </p>
          </div>
        </div>
      </div>

      {/* Decorative background text */}
      <div className="absolute -bottom-20 -right-20 text-[20vw] font-display font-black text-white/[0.02] pointer-events-none select-none uppercase italic leading-none">
        Mudassir
      </div>
    </footer>
  );
}
