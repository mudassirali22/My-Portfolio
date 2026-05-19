import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

// Layout & UI Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/ui/Loader";
import Background3D from "./components/ui/Background3D";
import ProjectModal from "./components/ui/ProjectModal";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import Workflow from "./components/sections/Workflow";
import Contact from "./components/sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const modalRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleProjectClick = (project) => {
    setModalLoading(true);
    setSelectedProject(project);
    setTimeout(() => setModalLoading(false), 800);
  };

  const handleModalScroll = (e) => {
    setShowScrollTop(e.target.scrollTop > 300);
  };

  const scrollToTop = () => {
    if (modalRef.current) {
      modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`min-h-screen ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-900'} selection:bg-accent-purple/30 font-sans transition-colors duration-500 overflow-x-hidden`}
          >
            <Navbar isDark={isDark} setIsDark={setIsDark} />
            <Background3D isDark={isDark} />

            {/* Global Progress Bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink z-[60] origin-left"
              style={{ scaleX }}
            />

            <main className="relative z-10">
              <Hero isDark={isDark} />
              <About isDark={isDark} />
              <Experience isDark={isDark} />
              <Education isDark={isDark} />
              <Skills isDark={isDark} />
              <Projects 
                isDark={isDark} 
                handleProjectClick={handleProjectClick}
              />
              <Services isDark={isDark} />
              <Workflow isDark={isDark} />
              <Contact isDark={isDark} />
            </main>

            <Footer isDark={isDark} />

            <ProjectModal 
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              isDark={isDark}
              modalRef={modalRef}
              handleModalScroll={handleModalScroll}
              showScrollTop={showScrollTop}
              scrollToTop={scrollToTop}
              modalLoading={modalLoading}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
