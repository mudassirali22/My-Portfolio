import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import Badge from './Badge';
import { stagger, fadeUp, slideIn } from '../config/animations';
import characterImage from '/1764162908062.jpg';
import CV from '/MudassirAli_FullStack_Updated-CV-2.pdf'
const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["responsive", "scalable", "user-friendly", "modern"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-foreground/10 via-background to-background" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-10 w-96 h-96 rounded-full bg-gradient-to-r from-green-500/15 to-cyan-500/15 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 py-8 md:grid-cols-2 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={slideIn} className="mb-6">
            <Badge variant="primary" className="bg-primary/10 text-primary font-semibold border-primary/20">
              Full Stack Developer
            </Badge>
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-foreground"
          >
            Building{" "}
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex}
                className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {texts[textIndex]}
              </motion.span>
            </AnimatePresence>{" "}
            <br />
            web experiences.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="mt-6 max-w-prose text-lg text-muted-foreground">
            I'm a FullStack developer focused on expressive interfaces, motion, and performance. 
            I turn complex ideas into elegant, usable products that users love.
          </motion.p>
          
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects   <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
            </motion.a>
            
            <motion.a
              href={CV} 
              target='blank'
              className="inline-flex items-center gap-3 rounded-full border border-border bg-secondary px-6 py-3 text-secondary-foreground hover:bg-accent transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-4 w-4" /> Download CV
            </motion.a>
            
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/mudassirali22", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mudassir-a-ba721830b", label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-border bg-secondary p-3 text-secondary-foreground transition-all hover:bg-accent hover:scale-110"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-64 sm:w-80"
        >
          <motion.div
            className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-b from-primary/20 to-transparent blur-xl"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative  items-center justify-center">
            <motion.div
              className="h-full w-full rounded-b-full rounded-t-full   bg-background  ring-border shadow-2xl flex items-center justify-center"
              whileHover={{ scale: 1.01, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute h-28 w-28 border-primary/40"
              />
              <div className=" h-full w-full text-primary " >
                <img src = {characterImage} alt="pic" className='rounded-tl-full rounded-b-full' />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;