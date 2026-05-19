import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import Magnetic from "../ui/Magnetic";
import React from 'react';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out ${scrolled ? "py-4" : "py-8"
        } ${isDark ? 'bg-slate-950/95 md:bg-transparent' : 'bg-white/95 md:bg-transparent'
        } backdrop-blur-lg md:backdrop-blur-none border-b ${isDark ? 'border-white/5' : 'border-black/5'} md:border-none`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Magnetic>
          <a href="#" className={`text-2xl font-display font-bold tracking-tighter ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-700/90 hover:text-slate-900'}`}>
            MUDASSIR ALI<span className="text-accent-purple"></span>
          </a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 backdrop-blur-xl">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className={`text-xs font-bold uppercase tracking-[0.15em] transition-all px-5 py-2 rounded-full ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-700/80 hover:text-slate-950'}`}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Magnetic>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`w-12 h-12 glass rounded-full flex items-center justify-center transition-all border border-white/5 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </Magnetic>
          <Magnetic>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(169, 85, 247, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className={`glass px-4 py-3 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md transition-all border border-white/10 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Hire Me
            </motion.a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 transition-all ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 hover:scale-110 transition-all ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden absolute top-full left-0 right-0 ${isDark ? 'bg-slate-950 border-white/5 shadow-2xl shadow-black/50' : 'bg-white border-black/5 shadow-2xl shadow-black/10'
              } py-12 px-6 space-y-8 flex flex-col items-center border-b backdrop-blur-3xl`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-black uppercase tracking-[0.2em] transition-colors ${isDark ? 'text-slate-100 hover:text-accent-purple' : 'text-slate-900 hover:text-accent-purple'
                  }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`w-full text-center py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.3em] transition-all border ${isDark
                  ? 'bg-white text-slate-950 border-white/10'
                  : 'bg-slate-950 text-white border-black/5'
                }`}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
