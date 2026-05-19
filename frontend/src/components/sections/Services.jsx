import { motion } from "motion/react";
import Section from "../layout/Section";
import React from 'react';
import { itemVariants, services } from "../../data/portfolioData";

export default function Services({ isDark }) {
  return (
    <Section id="services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="max-w-6xl mx-auto space-y-16"
      >
        <motion.div variants={itemVariants} className="space-y-4 text-center">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-blue/60">
             What I Offer
          </h2>
          <h3 className={`text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tighter italic ${isDark ? 'text-white' : 'text-slate-900'}`}>Solutions & Services</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-10 rounded-3xl border space-y-6 group transition-all duration-500 ${isDark ? 'glass border-white/5 hover:bg-slate-900/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-white border-black/5 hover:bg-slate-50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]'}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <div className="space-y-3">
                <h4 className={`text-xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{service.title}</h4>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm italic font-light leading-relaxed`}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
