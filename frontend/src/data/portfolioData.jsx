import { Code, Layout, Database, Terminal, FileJson, Atom, Wind, Palette, Grid, Server, Zap, GitBranch, Send, Laptop, Compass, Shield, Radio, Cloud, Rocket, Globe, RefreshCw, Bot, Layers, Box } from "lucide-react";
import React from 'react';

export const projects = [
  {
    id: "1",
    title: "HealthBuddy — AI Family Health Command Center",
    description: "A premium, clinical-grade family health platform integrating Google Gemini AI for automated lab report interpretation and patient stability scoring. Architected a multi-profile environment with strict data isolation, dynamic vitals tracking (Pulse, Blood Pressure, Glucose), and a custom mathematical health-scoring algorithm. Features encrypted record handling using Cloudinary, a glassmorphic interface with interactive timelines, and automated health analytics.",
    image: "healthbuddy-thumbnail.png",
    tags: ["Full-Stack", "AI-Powered"],
    github: "https://github.com/mudassirali22/Health-Buddy-App",
    demo: "https://healthbuddyapp.onrender.com",
  },
  {
    id: "2",
    title: "Meeting-Mind — Real-Time AI Meeting Lifecycle Platform",
    description: "A full-stack collaborative ecosystem designed to digitize meetings and enforce operational accountability. Built a high-performance live note-taking editor allowing participants to flag disputes or suggest edits in real time via Socket.io without flow disruption. Features automated Google Gemini AI transcription and meeting summarizing pipelines, administrative analytics, and structured task extraction.",
    image: "https://picsum.photos/seed/meetingmind/800/600",
    tags: ["Full-Stack", "AI-Powered", "Real-Time"],
    github: "",
    demo: "https://meeting-mind-olive.vercel.app",
  },
  {
    id: "3",
    title: "ExpenseMate — Enterprise-Grade Financial Dashboard",
    description: "An elite personal finance dashboard engineered to replace traditional ledger sheets with real-time analytics. Combines Google Gemini AI-driven spending patterns profiling for personalized saving strategies with advanced multi-user shared ledgers for collaborative cashflows and automated debt settlements. Handles dynamic stock, crypto, and real estate tracking with auto-calculated ROI, recurring subscription monitors, and robust tax calculation pipelines. Supports exporting clean financial reports.",
    image: "image.png",
    tags: ["Full-Stack", "AI-Powered"],
    github: "https://github.com/mudassirali22/ExpenseMate",
    demo: "https://expensemate-77fd.onrender.com",
  },
  {
    id: "4",
    title: "BMS Tracker — Bootcamp Management System",
    description: "A comprehensive role-based platform designed for SAYLANI Mass IT Training (SMIT) to digitize and manage the entire bootcamp lifecycle. Features complete Admin, Teacher, and Student workflows handling domain allocation, attendance tracking, and performance analytics. Digitized the complete physical student documentation workflow (employment/onboarding/undertakings) into a secure, paperless cloud record management system with secure data segregation.",
    image: "BootCamp-management-system-thumbnail.png",
    tags: ["Full-Stack", "Real-Time"],
    github: "#",
    demo: "https://bms-frontend-eight.vercel.app",
  },
];

export const filters = ["All", "Full-Stack", "AI-Powered", "Real-Time"];

export const skills = [
  // Frontend
  { name: "React.js", category: "Frontend", icon: "Atom" },
  { name: "Redux Toolkit", category: "Frontend", icon: "Layers" },
  { name: "JavaScript (ES6+)", category: "Frontend", icon: "FileJson" },
  { name: "HTML5", category: "Frontend", icon: "Code" },
  { name: "CSS3", category: "Frontend", icon: "Palette" },
  { name: "Tailwind CSS", category: "Frontend", icon: "Wind" },
  { name: "Bootstrap", category: "Frontend", icon: "Grid" },
  { name: "Framer Motion", category: "Frontend", icon: "Zap" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "Server" },
  { name: "Express.js", category: "Backend", icon: "Terminal" },
  { name: "REST APIs", category: "Backend", icon: "Globe" },
  { name: "JWT Auth", category: "Backend", icon: "Shield" },
  { name: "Socket.io", category: "Backend", icon: "Radio" },

  // Database & Cloud
  { name: "MongoDB", category: "Database & Cloud", icon: "Database" },
  { name: "Mongoose", category: "Database & Cloud", icon: "Box" },
  { name: "Cloudinary", category: "Database & Cloud", icon: "Cloud" },

  // Tools
  { name: "Git", category: "Tools", icon: "GitBranch" },
  { name: "GitHub", category: "Tools", icon: "GitBranch" },
  { name: "Postman", category: "Tools", icon: "Send" },
  { name: "VS Code", category: "Tools", icon: "Laptop" },
  { name: "Vercel", category: "Tools", icon: "Rocket" },
  { name: "Netlify", category: "Tools", icon: "Globe" },
  { name: "GitHub Actions", category: "Tools", icon: "RefreshCw" },
  { name: "CI/CD", category: "Tools", icon: "RefreshCw" },
];

export const education = [
  {
    id: "1",
    institution: "Virtual University Of Pakistan",
    degree: "BS Computer Science",
    period: "2026 — Present",
    description: "Focusing on core computer science principles, algorithms, and software engineering."
  },
  {
    id: "2",
    institution: "Saylani Mass IT Training Centre",
    degree: "FullStack Development",
    period: "2024 — 2025",
    description: "Comprehensive training in modern web technologies and full-stack architecture. Certified."
  },
  {
    id: "3",
    institution: "NED Academy",
    degree: "Python Development",
    period: "2025 Sep — Nov",
    description: "Hands-on experience with Python programming and its applications. Certified."
  },
  {
    id: "4",
    institution: "Board of Intermediate Larkana Board",
    degree: "Intermediate",
    period: "2023 — 2024",
    description: "Pre-Engineering background with strong fundamentals in mathematics and physics."
  }
];

export const experience = [
  {
    id: "1",
    role: "Full-Stack Web & App Developer",
    company: "Saylani Mass IT Training (SMIT)",
    type: "Internship",
    period: "Feb 2026 - Present",
    location: "Karachi, Pakistan · On-site",
    description: "Collaborated in a high-performance team to architect and build enterprise-grade, real-world platforms for the organization. Led the development of key modules in 'Meeting-Mind' (featuring a live Socket.io dispute system, Redis task queues, and AI summarization pipelines) and 'BMS Tracker' (digitizing training and bootcamp student documentation workflow with strict RBAC security). Developed complex MongoDB aggregation queries and robust MVC REST APIs.",
    skills: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redis", "BullMQ"]
  }
];

export const services = [
  {
    title: "Full-Stack Web Development",
    description: "Building scalable, high-performance web applications using MERN stack and modern frameworks.",
    icon: <Code size={32} strokeWidth={1} />
  },
  {
    title: "UI/UX Design Implementation",
    description: "Translating complex designs into pixel-perfect, responsive, and interactive user interfaces.",
    icon: <Layout size={32} strokeWidth={1} />
  },
  {
    title: "Database Architecture",
    description: "Designing efficient database schemas and managing data flow using MongoDB and other NoSQL/SQL solutions.",
    icon: <Database size={32} strokeWidth={1} />
  },
  {
    title: "API Development",
    description: "Creating robust and secure RESTful APIs to power seamless communication between services.",
    icon: <Terminal size={32} strokeWidth={1} />
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Research & Analysis",
    description: "Understanding client requirements, target audience, and project goals to create a solid roadmap."
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Planning the system architecture, database schema, and UI/UX design components."
  },
  {
    step: "03",
    title: "Execution & Testing",
    description: "Iterative development with rigorous testing at every stage to ensure quality and stability."
  },
  {
    step: "04",
    title: "Support & Deployment",
    description: "Deploying to production and providing continuous support and optimization."
  }
];

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};
