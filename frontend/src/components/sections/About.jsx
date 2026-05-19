import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import Section from "../layout/Section";
import React, { useRef } from 'react';
import { itemVariants } from "../../data/portfolioData";

const ParallaxAbout = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <>
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-accent-purple/5 blur-[100px] rounded-full"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full"
      />
    </>
  );
};

export default function About({ isDark }) {
  const containerRef = useRef(null);
  
  // High performance hardware accelerated springs
  const x = useSpring(0, { stiffness: 180, damping: 22 });
  const y = useSpring(0, { stiffness: 180, damping: 22 });
  
  // Interactive depth springs
  const depthScale = useSpring(1.02, { stiffness: 180, damping: 22 });
  const depthZ = useSpring(30, { stiffness: 180, damping: 22 });
  const cardY = useSpring(8, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(y, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / rect.width) - 0.5;
    const yPct = (mouseY / rect.height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    depthScale.set(1.08);
    depthZ.set(45);
    cardY.set(0);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    depthScale.set(1.02);
    depthZ.set(30);
    cardY.set(8);
  };

  return (
    <Section id="about" className="overflow-hidden relative">
      <ParallaxAbout />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-blue/60 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-accent-blue/30" />
                About Me
              </h2>
              <h3 className={`text-xl md:text-4xl lg:text-5xl font-display font-black leading-[0.85] tracking-tighter italic ${isDark ? 'text-white' : 'text-slate-900'}`}>
                A quick snapshot of <br/> <span className="text-gradient">who I am.</span>
              </h3>
            </div>

            <div className={`space-y-5 ${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm md:text-base font-light leading-relaxed italic`}>
              <p>
                Over the past 1+ year, I've honed my skills by transforming rough concepts into polished, performant realities.
              </p>
              <p>
                I'm Mudassir, a passionate Full-Stack Web & Application Developer who builds modern, responsive, and user-friendly applications. I thrive on turning ideas into reality through code, enjoying every step from designing smooth user interfaces to engineering efficient backend systems.
              </p>
              <p>
                My toolkit includes React.js, Redux Toolkit, Tailwind CSS, Framer Motion, Node.js, Express.js, MongoDB, Socket.io, and Cloudinary. I leverage Git, GitHub Actions, CI/CD pipelines, and platforms like Vercel & Netlify for seamless deployments — and integrate the AI for intelligent features.
              </p>
              <p>
                I'm actively seeking new opportunities to contribute, collaborate, and grow as a developer in a forward-thinking tech environment.
              </p>
            </div>

            <div className="flex gap-8 pt-4">
              {[
                { icon: <Github size={22} />, href: "https://github.com/mudassirali22" },
                { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/mudassir-a-ba721830b" },
              ].map((item, idx) => (
                <div key={idx}>
                  <Magnetic>
                    <motion.a
                      href={item.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-accent-purple/40 hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)] transition-all"
                    >
                      {item.icon}
                    </motion.a>
                  </Magnetic>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative group w-full max-w-[400px] lg:max-w-[450px] mx-auto cursor-pointer will-change-transform"
          >
            {/* Enhanced background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 via-accent-purple/10 to-accent-pink/30 rounded-[2rem] md:rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none" />
            
            <div 
              style={{
                transform: "translateZ(50px)",
                transformStyle: "preserve-3d",
              }}
              className="relative aspect-[3/4] max-h-[480px] md:max-h-[520px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 group-hover:border-accent-blue/30 shadow-2xl bg-slate-900/10 transition-colors duration-500"
            >
              <motion.img
                src="1764162908062.jpg"
                alt="Profile"
                style={{
                  scale: depthScale,
                  translateZ: depthZ,
                }}
                className="w-full h-full object-cover object-top select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle glass reflection overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <motion.div 
                style={{
                  translateZ: 70,
                  y: cardY
                }}
                className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 glass p-3 md:p-4 rounded-2xl md:rounded-3xl z-20 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Based in</p>
                    <p className={`text-sm md:text-base font-display font-black italic ${isDark ? 'text-white' : 'text-slate-900'}`}>Karachi, PK</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
