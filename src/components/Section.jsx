import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, GraduationCap, Mail, Sparkles, User } from 'lucide-react';
import { fadeUp, floating } from '../config/animations';

const Section = ({ id, title, subtitle, children, className = "" }) => (
  <section id={id} className={`relative py-20 sm:py-24 overflow-hidden ${className}`}>
    <motion.div
      className="absolute top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"
      variants={floating}
      animate="animate"
    />
    <motion.div
      className="absolute bottom-10 -right-10 w-16 h-16 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 blur-xl"
      variants={floating}
      animate="animate"
      transition={{ delay: 2 }}
    />
    
    <div className="mx-auto max-w-6xl px-4 relative z-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12"
      >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground flex items-center gap-3">
            <motion.span 
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-1 ring-border"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title === "About Me" ? (
                <User className="h-4 w-4 text-primary-foreground" />
              ) : title === "Featured Projects" ? (
                <Code2 className="h-4 w-4 text-primary-foreground" />
              ) : title === "Skills & Expertise" ? (
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              ) : title === "Education" ? (
                <GraduationCap  className="h-4 w-4 text-primary-foreground" />
              ) : (
                <Mail className="h-4 w-4 text-primary-foreground" />
              )}
            </motion.span>
            {title}
          </h2>
        {subtitle && (
          <motion.p 
            variants={fadeUp}
            className="mt-2 text-muted-foreground max-w-prose text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);

export default Section;