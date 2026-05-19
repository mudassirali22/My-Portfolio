import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import React from 'react';

export default function Section({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1],
            staggerChildren: 0.05,
            when: "beforeChildren",
          },
        },
      }}
      className={`relative min-h-[50vh] py-16 md:py-24 flex items-center will-change-transform ${className}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
