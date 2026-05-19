import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import React from 'react';
import { itemVariants } from "../../data/portfolioData";

export default function Hero({ isDark }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_70%)] animate-pulse" />
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] bg-accent-blue/5 blur-[140px] animate-float opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] bg-accent-pink/5 blur-[140px] animate-float [animation-delay:3s] opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center md:space-y-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex glass md:px-4 md:py-3 px-2 py-2 rounded-full text-[10px] md:text-[13px] uppercase tracking-[0.3em] font-bold text-accent-purple border-accent-purple/20"
        >
          Available for new opportunities
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className={`text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter leading-[0.85] uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Mudassir Ali <br />
            <span className="text-gradient">Fullstack</span> <br />
            <span className="italic">Developer.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-3xl mx-auto font-medium leading-relaxed tracking-tight opacity-80`}
          >
            I'm a FullStack developer focused on expressive interfaces, motion, and performance. I turn complex ideas into elegant,usable products that users love.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 pt-4 pb-5"
        >
          <Magnetic>
            <a href="#projects" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`${isDark ? 'bg-white text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.1)]' : 'bg-slate-900 text-white shadow-2xl'} w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all duration-500 group`}
              >
                View Works <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </a>
          </Magnetic>
          
          <Magnetic>
            <motion.a 
              href="/mudassirAli-fullstack.CV.pdf" 
              download="MudassirAli-fullstack.CV.pdf"
              whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(168,85,247,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className={`glass w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all border-accent-purple/20 ${isDark ? 'text-accent-purple' : 'text-purple-600 font-bold'}`}
            >
              Resume <Download size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </Magnetic>
        </motion.div>

        {/* Hero Social Row */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center justify-center gap-6 md:gap-12 pt-10"
        >
           {[
             { icon: <Github size={20} />, href: "https://github.com/mudassirali22" },
             { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mudassir-a-ba721830b" },            //  { icon: <Twitter size={20} />, href: "#" }
           ].map((social, i) => (
             <Magnetic key={i}>
               <motion.a 
                 href={social.href}
                 whileHover={{ scale: 1.2, y: -5 }}
                 className={`${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-600 hover:text-slate-950'} transition-colors`}
               >
                 {social.icon}
               </motion.a>
             </Magnetic>
           ))}
        </motion.div> */}
      </div>
    </section>
  );
}
