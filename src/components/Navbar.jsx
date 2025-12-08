import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const navItems = [
      { href: "#home", label: "Home"},
      { href: "#about", label: "About"},
      { href: "#skills", label: "Skills"},
      { href: "#projects", label: "Projects"},
      { href: "#experience", label: "Experience"},
      { href: "#contact", label: "Contact"},
    ]

  const smoothScroll = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 80;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <motion.div 
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <motion.a 
          href="#home" 
          className="font-medium tracking-tight text-foreground text-lg"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => smoothScroll(e, "#home")}
        >
          <p> <span className='text-2xl'>&lt; </span> Mudassir Ali /  <span className='text-2xl'>&gt;</span></p>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm text-muted-foreground">
            {navItems.map((item, index) => (
              <motion.li key={item.href} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <a
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className="rounded-full px-4 py-2 transition-all hover:bg-accent hover:text-accent-foreground relative group overflow-hidden"
                >
                  {item.label}
                  <span 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary transition-all duration-500 w-0  group-hover:w-full"
                  />    
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border bg-secondary hover:bg-accent transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full border border-border"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </motion.button>

          <motion.a
            href="#contact"
            onClick={(e) => smoothScroll(e, "#contact")}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-primary px-4 py-2 text-sm text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-4 w-4" /> Hire me
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border"
          >
            <nav className="px-4 py-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <motion.li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => smoothScroll(e, item.href)}
                      className="block rounded-lg px-4 py-3 text-foreground hover:bg-accent transition-colors text-center"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;