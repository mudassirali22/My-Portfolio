// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
//   Download,
//   Sparkles,
//   Code2,
//   MonitorSmartphone,
//   Globe2,
// } from "lucide-react";

// const projects = [
//   {
//     title: "Motion Commerce",
//     desc: "Headless e‑commerce starter with animations, payments, and CMS hooks.",
//     stack: ["React", "Tailwind", "Framer Motion"],
//     link: "https://example.com",
//     repo: "https://github.com/yourname/motion-commerce",
//   },
//   {
//     title: "Devfolio",
//     desc: "A blazing‑fast portfolio template with MDX blogs and SEO baked in.",
//     stack: ["Vite", "Tailwind", "MDX"],
//     link: "https://example.com",
//     repo: "https://github.com/yourname/devfolio",
//   },
//   {
//     title: "Realtime Board",
//     desc: "Collaborative whiteboard with websockets and multiplayer cursors.",
//     stack: ["React", "Tailwind", "WS"],
//     link: "https://example.com",
//     repo: "https://github.com/yourname/realtime-board",
//   },
//   {
//     title: "UI Primitives",
//     desc: "Accessible React components with a tasteful blacked aesthetic.",
//     stack: ["React", "TypeScript"],
//     link: "https://example.com",
//     repo: "https://github.com/yourname/ui-primitives",
//   },
// ];

// const skills = [
//   { name: "Html", level: 90 },
//   { name: "css", level: 90 },
//   { name: "React", level: 90 },
//   { name: "Tailwind", level: 92 },
//   { name: "Node.js", level: 80 },
//   { name: "Express.js", level: 88 },
//   { name: "MongoDB", level: 88 },
//   { name: "Next.js", level: 84 },
// ];

// const experience = [
//   {
//     role: "Senior Frontend Engineer",
//     org: "NightShift Labs",
//     time: "2023 — Present",
//     points: [
//       "Led a design system overhaul shipped to 8+ product teams.",
//       "Improved LCP by ~38% via image strategy & code‑split routes.",
//       "Mentored 5 devs, instituted PR checklists & visual regression tests.",
//     ],
//   },
//   {
//     role: "Frontend Engineer",
//     org: "Studio Black",
//     time: "2021 — 2023",
//     points: [
//       "Built motion‑first marketing pages that lifted CVR by 19%.",
//       "Integrated analytics, feature flags, and a11y guardrails.",
//     ],
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const stagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.08 } },
// };

// const Section = ({ id, title, subtitle, children }) => (
//   <section id={id} className="relative py-20 sm:py-24">
//     <div className="mx-auto max-w-6xl px-4">
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         className="mb-10"
//       >
//         <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 flex items-center gap-3">
//           <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 ring-1 ring-zinc-800">
//             <Sparkles className="h-4 w-4" />
//           </span>
//           {title}
//         </h2>
//         {subtitle && (
//           <p className="mt-2 text-zinc-400 max-w-prose">{subtitle}</p>
//         )}
//       </motion.div>
//       {children}
//     </div>
//   </section>
// );

// const Badge = ({ children }) => (
//   <span className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300 shadow-sm">
//     {children}
//   </span>
// );

// const Card = ({ children }) => (
//   <div className="group relative rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-black p-6 shadow-[0_0_0_1px_rgba(24,24,27,.4)] hover:shadow-[0_0_0_1px_rgba(113,113,122,.5)] transition-shadow">
//     {/* Glow */}
//     <div
//       className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
//       style={{
//         background:
//           "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(161,161,170,.15), transparent 40%)",
//       }}
//     />
//     {children}
//   </div>
// );

// const usePointerGlow = () => {
//   // Sets CSS vars --x/--y on mouse move for nice radial glow
//   const onMove = (e) => {
//     const card = e.currentTarget;
//     const rect = card.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     card.style.setProperty("--x", `${x}%`);
//     card.style.setProperty("--y", `${y}%`);
//   };
//   return { onMouseMove: onMove };
// };

// const Nav = () => {
//   const items = useMemo(
//     () => [
//       { href: "#home", label: "Home" },
//       { href: "#about", label: "About" },
//       { href: "#skills", label: "Skills" },
//       { href: "#projects", label: "Projects" },
//       { href: "#experience", label: "Experience" },
//       { href: "#contact", label: "Contact" },
//     ],
//     []
//   );

//   const smooth = (e, href) => {
//     e.preventDefault();
//     const el = document.querySelector(href);
//     el?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <div className="sticky top-0 z-50 border-b border-zinc-900/80 backdrop-blur supports-[backdrop-filter]:bg-black/40">
//       <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
//         <a href="#home" className="font-medium tracking-tight text-zinc-200">
//           black.dev
//         </a>
//         <nav className="hidden md:block">
//           <ul className="flex items-center gap-2 text-sm text-zinc-400">
//             {items.map((it) => (
//               <li key={it.href}>
//                 <a
//                   href={it.href}
//                   onClick={(e) => smooth(e, it.href)}
//                   className="rounded-full px-3 py-1 transition hover:bg-zinc-900 hover:text-zinc-100"
//                 >
//                   {it.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <div className="flex items-center gap-2">
//           <a
//             href="#contact"
//             onClick={(e) => smooth(e, "#contact")}
//             className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-sm text-zinc-200 shadow hover:border-zinc-700"
//           >
//             <Mail className="h-4 w-4" /> Hire me
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Hero = () => (
//   <section id="home" className="relative overflow-hidden">
//     {/* ambient gradient */}
//     <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-to-b from-zinc-700/20 to-transparent blur-3xl" />
//     {/* subtle noise */}
//     <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />

//     <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-24 sm:py-28 md:grid-cols-2">
//       <motion.div variants={stagger} initial="hidden" animate="show">
//         <motion.h1
//           variants={fadeUp}
//           className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-zinc-100"
//         >
//           Building sleek, fast, and{" "}
//           <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
//             animated
//           </span>{" "}
//           web experiences.
//         </motion.h1>
//         <motion.p variants={fadeUp} className="mt-4 max-w-prose text-zinc-400">
//           I’m a senior frontend developer focused on expressive interfaces,
//           motion, and performance. I turn complex ideas into elegant, usable
//           products.
//         </motion.p>
//         <motion.div
//           variants={fadeUp}
//           className="mt-6 flex flex-wrap items-center gap-3"
//         >
//           <a
//             href="#projects"
//             onClick={(e) => {
//               e.preventDefault();
//               document
//                 .querySelector("#projects")
//                 ?.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-black shadow hover:bg-white"
//           >
//             View Projects <ArrowRight className="h-4 w-4" />
//           </a>
//           <a
//             href="/resume.pdf"
//             className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-700"
//           >
//             <Download className="h-4 w-4" /> Download CV
//           </a>
//           <div className="ml-2 flex items-center gap-2">
//             <a
//               href="https://github.com/yourname"
//               className="rounded-full border border-zinc-800 p-2 text-zinc-300 transition hover:border-zinc-700 hover:text-white"
//               aria-label="GitHub"
//             >
//               <Github className="h-4 w-4" />
//             </a>
//             <a
//               href="https://linkedin.com/in/yourname"
//               className="rounded-full border border-zinc-800 p-2 text-zinc-300 transition hover:border-zinc-700 hover:text-white"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="h-4 w-4" />
//             </a>
//           </div>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative mx-auto aspect-square w-64 sm:w-80"
//       >
//         <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
//         <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-zinc-800" />
//         <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-b from-zinc-700/20 to-transparent blur-2xl" />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
//             className="h-40 w-40 rounded-full border border-zinc-800/80"
//             style={{
//               background:
//                 "conic-gradient(from 0deg, rgba(255,255,255,.08), rgba(0,0,0,0) 60%)",
//             }}
//           />
//         </div>
//         <div className="relative flex h-full w-full items-center justify-center">
//           <div className="h-28 w-28 rounded-2xl bg-zinc-950 ring-1 ring-zinc-800 flex items-center justify-center">
//             <Sparkles className="h-8 w-8 text-zinc-300" />
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// const About = () => (
//   <Section
//     id="about"
//     title="About"
//     subtitle="A quick snapshot of who I am and how I work."
//   >
//     <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         className="md:col-span-2 text-zinc-300"
//       >
//         <p className="leading-relaxed">
//           Over the past 6+ years, I’ve worked across startups and product teams,
//           shipping interfaces that prioritize clarity, speed, and motion. I love
//           taking products from rough concept to polished, performant reality.
//         </p>
//         <p className="mt-4 leading-relaxed text-zinc-400">
//           My toolkit centers around React, TypeScript, and Tailwind. I obsess
//           over micro‑interactions, a11y, and fine‑grained performance wins.
//         </p>
//         <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
//           <Card>
//             <div className="flex items-center gap-3">
//               <Code2 className="h-5 w-5" />
//               <div>
//                 <p className="text-sm text-zinc-400">Core</p>
//                 <p className="text-sm font-medium">React • TS • Tailwind</p>
//               </div>
//             </div>
//           </Card>
//           <Card>
//             <div className="flex items-center gap-3">
//               <MonitorSmartphone className="h-5 w-5" />
//               <div>
//                 <p className="text-sm text-zinc-400">Focus</p>
//                 <p className="text-sm font-medium">Design Systems • DX</p>
//               </div>
//             </div>
//           </Card>
//           <Card>
//             <div className="flex items-center gap-3">
//               <Globe2 className="h-5 w-5" />
//               <div>
//                 <p className="text-sm text-zinc-400">Extras</p>
//                 <p className="text-sm font-medium">a11y • SEO • i18n</p>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </motion.div>
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
//           <div className="aspect-[4/5] w-full rounded-xl bg-gradient-to-br from-zinc-800 to-black" />
//           <p className="mt-4 text-sm text-zinc-400">
//             (Drop your portrait here)
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   </Section>
// );

// const Skills = () => (
//   <Section
//     id="skills"
//     title="Skills"
//     subtitle="What I use to deliver impactful, polished interfaces."
//   >
//     <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//       <motion.div
//         variants={stagger}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         className="space-y-4"
//       >
//         {skills.map((s, i) => (
//           <motion.div key={s.name} variants={fadeUp}>
//             <div className="mb-1 flex items-center justify-between">
//               <span className="text-sm text-zinc-300">{s.name}</span>
//               <span className="text-xs text-zinc-500">{s.level}%</span>
//             </div>
//             <div className="h-2 w-full rounded-full bg-zinc-900">
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileInView={{ width: `${s.level}%` }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.05 }}
//                 className="h-full rounded-full bg-zinc-200"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
//       >
//         <p className="text-sm text-zinc-400">
//           I move fast without breaking things: strong type systems, component
//           contracts, and visual tests keep speed and quality aligned.
//         </p>
//         <div className="mt-4 flex flex-wrap gap-2">
//           {[
//             "React",
//             "TypeScript",
//             "Tailwind",
//             "Framer Motion",
//             "Next.js",
//             "Vite",
//             "Jest",
//             "Playwright",
//             "Zustand",
//             "Redux",
//           ].map((t) => (
//             <Badge key={t}>{t}</Badge>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   </Section>
// );

// const Projects = () => {
//   const glowHandlers = usePointerGlow();
//   return (
//     <Section
//       id="projects"
//       title="Projects"
//       subtitle="Selected work that balances craft and impact."
//     >
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//         {projects.map((p) => (
//           <motion.div
//             key={p.title}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <Card>
//               <div {...glowHandlers} className="relative">
//                 <div className="aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-800 to-black" />
//               </div>
//               <div className="mt-4">
//                 <h3 className="text-lg font-medium text-zinc-100">{p.title}</h3>
//                 <p className="mt-1 text-sm text-zinc-400">{p.desc}</p>
//                 <div className="mt-3 flex flex-wrap items-center gap-2">
//                   {p.stack.map((s) => (
//                     <Badge key={s}>{s}</Badge>
//                   ))}
//                 </div>
//                 <div className="mt-4 flex items-center gap-3">
//                   <a
//                     href={p.link}
//                     className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white"
//                   >
//                     <ExternalLink className="h-4 w-4" /> Live
//                   </a>
//                   <a
//                     href={p.repo}
//                     className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white"
//                   >
//                     <Github className="h-4 w-4" /> Code
//                   </a>
//                 </div>
//               </div>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// const Experience = () => (
//   <Section
//     id="experience"
//     title="Experience"
//     subtitle="Highlights from the last few years."
//   >
//     <div className="space-y-6">
//       {experience.map((e) => (
//         <motion.div
//           key={e.role}
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
//         >
//           <div className="flex flex-wrap items-baseline justify-between gap-2">
//             <p className="text-base font-medium text-zinc-100">
//               {e.role} • {e.org}
//             </p>
//             <p className="text-sm text-zinc-400">{e.time}</p>
//           </div>
//           <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-400">
//             {e.points.map((pt, i) => (
//               <li key={i}>{pt}</li>
//             ))}
//           </ul>
//         </motion.div>
//       ))}
//     </div>
//   </Section>
// );

// const Contact = () => (
//   <Section
//     id="contact"
//     title="Contact"
//     subtitle="Let’s build something memorable."
//   >
//     <motion.form
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }}
//       onSubmit={(e) => {
//         e.preventDefault();
//         const data = new FormData(e.currentTarget);
//         const name = data.get("name");
//         const email = data.get("email");
//         const message = data.get("message");
//         window.location.href = `mailto:you@domain.com?subject=Project%20Inquiry%20from%20${encodeURIComponent(
//           name
//         )}&body=${encodeURIComponent(`${message}\n\nReply to: ${email}`)}`;
//       }}
//       className="grid grid-cols-1 gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
//     >
//       <div>
//         <label className="mb-1 block text-xs text-zinc-400">Name</label>
//         <input
//           name="name"
//           required
//           className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-zinc-600"
//           placeholder="Your name"
//         />
//       </div>
//       <div>
//         <label className="mb-1 block text-xs text-zinc-400">Email</label>
//         <input
//           type="email"
//           name="email"
//           required
//           className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-zinc-600"
//           placeholder="you@example.com"
//         />
//       </div>
//       <div>
//         <label className="mb-1 block text-xs text-zinc-400">Message</label>
//         <textarea
//           name="message"
//           rows={5}
//           required
//           className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-zinc-600"
//           placeholder="Tell me about your project"
//         />
//       </div>
//       <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-black transition hover:bg-white">
//         Send <ArrowRight className="h-4 w-4" />
//       </button>
//       <div className="flex items-center gap-3 pt-2 text-sm text-zinc-400">
//         <a
//           href="mailto:you@domain.com"
//           className="inline-flex items-center gap-2 hover:text-white"
//         >
//           <Mail className="h-4 w-4" />
//           you@domain.com
//         </a>
//         <span>•</span>
//         <a
//           href="https://github.com/yourname"
//           className="inline-flex items-center gap-2 hover:text-white"
//         >
//           <Github className="h-4 w-4" />
//           GitHub
//         </a>
//         <span>•</span>
//         <a
//           href="https://linkedin.com/in/yourname"
//           className="inline-flex items-center gap-2 hover:text-white"
//         >
//           <Linkedin className="h-4 w-4" />
//           LinkedIn
//         </a>
//       </div>
//     </motion.form>
//   </Section>
// );

// export default function BlackedPortfolio() {
//   return (
//     <div className="min-h-screen bg-black text-zinc-100 antialiased">
//       <Nav />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Contact />
//       <footer className="border-t border-zinc-900/80">
//         <div className="mx-auto max-w-6xl px-4 py-10 text-xs text-zinc-500">
//           © {new Date().getFullYear()} Your Name. Crafted with React, Tailwind,
//           and motion.
//         </div>
//       </footer>
//     </div>
//   );
// }


//////////////////////////////
// new ehnaced code
/////////////////////////////////
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';
import WhatIOffer from './components/WhatIOffer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300">
        {/* <GlobalStyles /> */}
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhatIOffer/>
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;