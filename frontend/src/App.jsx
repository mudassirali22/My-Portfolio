import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

// Layout & UI Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/ui/Loader";
import Background3D from "./components/ui/Background3D";
import ProjectModal from "./components/ui/ProjectModal";
import Toast from "./components/ui/Toast";

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

// Data
import { projects, skills } from "./data/portfolioData";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", vision: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  // Drag & Drop State for Skills
  const [skillItems, setSkillItems] = useState(skills);
  const cardRefs = useRef([]);
  const skillsRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    setSkillItems(skills);
  }, [skills]);

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

  const handleDrag = (dragIndex, point) => {
    const hoverIndex = cardRefs.current.findIndex((ref, i) => {
      if (i === dragIndex || !ref) return false;
      const rect = ref.getBoundingClientRect();
      return (
        point.x > rect.left &&
        point.x < rect.right &&
        point.y > rect.top &&
        point.y < rect.bottom
      );
    });

    if (hoverIndex !== -1) {
      const newItems = [...skillItems];
      const draggedItem = newItems[dragIndex];
      newItems.splice(dragIndex, 1);
      newItems.splice(hoverIndex, 0, draggedItem);
      setSkillItems(newItems);
    }
  };

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.vision.trim()) {
      newErrors.vision = "Please describe your vision";
    } else if (formData.vision.length < 10) {
      newErrors.vision = "Wait, tell me a bit more (at least 10 chars)";
    }
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

    fetch(`${backendUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Server responded with an error");
        return res.json();
      })
      .then((data) => {
        if (data.isMock) {
          setToast({ 
            message: "Validation passed! (Note: Configure EMAIL_USER and EMAIL_PASS in your .env for real emails.)", 
            type: "success" 
          });
        } else {
          setToast({ message: "Protocol initiated! Your message has been sent to Mudassir.", type: "success" });
        }
        setFormData({ name: "", email: "", vision: "" });
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error("Nodemailer fetch error:", err);
        setToast({ message: "Connection error. Make sure the Node server is running on port 5000.", type: "error" });
        setIsSubmitting(false);
      });
  };

  const filteredProjects = selectedFilter === "All"
    ? projects
    : projects.filter(p => p.tags.includes(selectedFilter));

  return (
    <>
      <AnimatePresence>
        {toast && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast(null)} 
          />
        )}
      </AnimatePresence>
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
              <Skills 
                isDark={isDark}
                skillItems={skillItems}
                handleDrag={handleDrag}
                skillsRef={skillsRef}
                cardRefs={cardRefs}
              />
              <Projects 
                isDark={isDark} 
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                filteredProjects={filteredProjects}
                handleProjectClick={handleProjectClick}
              />
              <Services isDark={isDark} />
              <Workflow isDark={isDark} />
              <Contact 
                isDark={isDark}
                formData={formData}
                errors={errors}
                isSubmitting={isSubmitting}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
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
