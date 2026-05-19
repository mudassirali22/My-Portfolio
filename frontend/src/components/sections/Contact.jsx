import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin } from "lucide-react";
import Section from "../layout/Section";
import Magnetic from "../ui/Magnetic";
import React, { useState } from 'react';
import { itemVariants } from "../../data/portfolioData";
import Toast from "../ui/Toast";

export default function Contact({ isDark }) {
  const [formData, setFormData] = useState({ name: "", email: "", vision: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

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
      <Section id="contact" className="min-h-screen flex items-center py-20 md:py-32">
      <div className="glass p-6 sm:p-10 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden max-w-6xl mx-auto group w-full">
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-accent-purple/10 blur-[130px] group-hover:scale-110 transition-transform duration-[2000ms]" />

        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
          <motion.div variants={itemVariants} className="space-y-10 text-center lg:text-left">
            <div className="space-y-5">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-pink/60 flex items-center justify-center lg:justify-start gap-4">
                <div className="w-8 h-[1px] bg-accent-pink/30" />
                Get In Touch
              </h2>
              <h3 className={`text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-[1.2] tracking-tighter italic ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Let's build something <br className="hidden sm:block" />
                <span className="text-gradient">memorable together.</span>
              </h3>
            </div>
            <div className="space-y-4">
              <p className={`text-lg font-bold italic ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Ready to start your project?
              </p>
              <p className={`text-sm md:text-md font-light leading-relaxed max-w-sm mx-auto lg:mx-0 italic ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                I'm currently available for freelance work and full-time opportunities. Let's discuss how we can bring your ideas to life with cutting-edge technology and stunning design.
              </p>
            </div>
            <div className="space-y-4 pt-2">
              <a href="mailto:mudassir4227@gmail.com" className={`group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 glass px-6 py-5 rounded-3xl transition-all hover:scale-[1.02] border-white/5 shadow-2xl ${isDark ? 'hover:bg-white/[0.03]' : 'hover:bg-slate-900/[0.03]'}`}>
                <Mail size={24} strokeWidth={1} className="text-accent-purple" />
                <div>
                  <p className={`text-[8px] font-black uppercase tracking-[0.4em] mb-1 ${isDark ? 'text-slate-500 group-hover:text-white/60' : 'text-slate-400 group-hover:text-slate-900'}`}>Direct Line</p>
                  <p className={`text-sm md:text-lg font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>mudassir4227@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/mudassir-a-ba721830b" target="_blank" rel="noopener noreferrer" className={`group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 glass px-6 py-5 rounded-3xl transition-all hover:scale-[1.02] border-white/5 shadow-2xl ${isDark ? 'hover:bg-white/[0.03]' : 'hover:bg-slate-900/[0.03]'}`}>
                <Linkedin size={24} strokeWidth={1} className="text-accent-blue" />
                <div>
                  <p className={`text-[8px] font-black uppercase tracking-[0.4em] mb-1 ${isDark ? 'text-slate-500 group-hover:text-white/60' : 'text-slate-400 group-hover:text-slate-900'}`}>Professional Profile</p>
                  <p className={`text-sm md:text-lg font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Mudassir Ali</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form variants={itemVariants} className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2.5">
                <label className={`text-[10px] uppercase tracking-[0.4em] font-black ${isDark ? 'text-slate-600' : 'text-slate-500'} ml-4`}>Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`w-full glass bg-white/[0.1] rounded-xl px-6 py-4 focus:outline-none focus:ring-1 transition-all text-base font-light ${isDark ? 'placeholder:text-slate-500 text-white' : 'placeholder:text-slate-400 text-slate-900'} ${errors.name ? 'ring-1 ring-red-500/50 border-red-500/20' : 'focus:ring-accent-purple/40 hover:bg-white/[0.03]'}`}
                />
                {errors.name && <p className="text-[9px] text-red-400 font-bold uppercase tracking-widest ml-4 mt-1 italic">{errors.name}</p>}
              </div>
              <div className="space-y-2.5">
                <label className={`text-[10px] uppercase tracking-[0.4em] font-black ${isDark ? 'text-slate-600' : 'text-slate-500'} ml-4`}>Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full glass bg-white/[0.01] rounded-xl px-6 py-4 focus:outline-none focus:ring-1 transition-all text-base font-light ${isDark ? 'placeholder:text-slate-500 text-white' : 'placeholder:text-slate-400 text-slate-900'} ${errors.email ? 'ring-1 ring-red-500/50 border-red-500/20' : 'focus:ring-accent-purple/40 hover:bg-white/[0.03]'}`}
                />
                {errors.email && <p className="text-[9px] text-red-400 font-bold uppercase tracking-widest ml-4 mt-1 italic">{errors.email}</p>}
              </div>
            </div>
            <div className="space-y-2.5">
              <label className={`text-[10px] uppercase tracking-[0.4em] font-black ${isDark ? 'text-slate-600' : 'text-slate-500'} ml-4`}>Vision</label>
              <textarea
                name="vision"
                rows={4}
                value={formData.vision}
                onChange={handleInputChange}
                placeholder="Describe your project..."
                className={`w-full glass bg-white/[0.01] rounded-xl px-6 py-4 focus:outline-none focus:ring-1 transition-all text-base font-light resize-none ${isDark ? 'placeholder:text-slate-500 text-white' : 'placeholder:text-slate-400 text-slate-900'} ${errors.vision ? 'ring-1 ring-red-500/50 border-red-500/20' : 'focus:ring-accent-purple/40 hover:bg-white/[0.03]'}`}
              />
              {errors.vision && <p className="text-[9px] text-red-400 font-bold uppercase tracking-widest ml-4 mt-1 italic">{errors.vision}</p>}
            </div>
            <Magnetic>
              <motion.button
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-xl font-black uppercase tracking-[0.5em] text-[10px] shadow-[0_10px_30px_rgba(168,85,247,0.2)] hover:shadow-accent-purple/50 transition-all group overflow-hidden relative ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="relative z-10">{isSubmitting ? 'Processing...' : 'Submit'}</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
            </Magnetic>
          </motion.form>
        </div>
      </div>
    </Section>
    </>
  );
}
