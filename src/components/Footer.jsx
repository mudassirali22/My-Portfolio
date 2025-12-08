import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../config/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Mail: Mail
  };

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <motion.p 
            className="text-sm text-muted-foreground text-center sm:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Mudassir Ali.
          </motion.p>
          
          <motion.div 
            className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
          >
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <IconComponent className="h-4 w-4" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;