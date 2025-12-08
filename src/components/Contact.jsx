import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Section from './Section';
import { socialLinks } from '../config/data';
import { fadeUp } from '../config/animations';

const Contact = () => {
  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Mail: Mail
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's build something memorable together."
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-foreground">
            Ready to start your project?
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm currently available for freelance work and full-time opportunities. 
            Let's discuss how we can bring your ideas to life with cutting-edge technology and stunning design.
          </p>
          
          <div className="space-y-4">
            {socialLinks.map((contact, index) => {
              const IconComponent = iconMap[contact.icon];
              return (
                <motion.a
                  key={contact.name}
                  href={contact.url}
                  target='_blank'
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:bg-accent transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.name}</p>
                    <p className="font-medium text-foreground">
                      {contact.name === 'Email' ? `${import.meta.env.VITE_EMAIL}`:contact.url.replace('https://', '')}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          action="https://formsubmit.co/9c8e79e823d26a59b4564dc2e739eea9" method="POST"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
         
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <input type="hidden" name="_subject" value="New Contact Form Submission!" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://mudassirali.vercel.app/thank-you" />
              <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
              <motion.input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Your name"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
              <motion.input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="you@example.com"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
            <motion.textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder="Tell me about your project, timeline, and budget..."
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          
          <motion.button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
