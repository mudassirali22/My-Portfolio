import React from 'react';
import Aboutpic from '/1764162908062.jpg'
import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Globe2, Sparkles } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { fadeUp, scaleIn } from '../config/animations';

const About = () => (
  <Section
    id="about"
    title="About Me"
    subtitle="A quick snapshot of who I am and how I work."
  >
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="lg:col-span-2 text-foreground space-y-6"
      >
        <p className="text-lg leading-relaxed">
            Over the past <span className="text-primary font-semibold">1+ year</span>, I've honed my skills by transforming rough concepts into polished, performant realities.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
            I'm Mudassir, a passionate Web & Application Developer who builds modern, responsive, and user-friendly applications. I thrive on turning ideas into reality through code, enjoying every step from designing smooth user interfaces to engineering efficient backend systems.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            My toolkit includes <span className="text-foreground font-medium">JavaScript, React, Node.js, Express.js, and MongoDB</span>, and I use Git/GitHub for version control. I'm a firm believer in learning by doing, which is why I'm constantly working on personal projects, tackling challenges, and deploying real-world applications.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            I'm actively seeking new opportunities to contribute, collaborate, and grow as a developer in a forward-thinking tech environment.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 pt-6">
          {[
            { icon: Code2, title: "Core", desc: "React -  Tailwind - node.js - Express.js - MangoDB ", color: "blue" },
            { icon: MonitorSmartphone, title: "Focus", desc: "Design Systems DX", color: "green" },
            { icon: Globe2, title: "Extras", desc: "a11y - SEO - i18n", color: "purple" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg">
                <div className="flex flex-col items-center gap-3">
                  <div className={`p-3 rounded-full bg-${item.color}-500/10`}>
                    <item.icon className={`h-6 w-6 text-${item.color}-500`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="text-sm font-medium text-foreground">{item.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative"
      >
        <Card className="p-0 overflow-hidden group">
          <motion.div
            className="aspect-[3/4] w-full bg-gradient-to-br from-muted to-background relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Placeholder for portrait */}
            <div className="absolute inset-0 flex items-center justify-center w-full">
                  <img src={Aboutpic} alt="about pic" className='rounded-2xl'  />
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="bg-background/90 rounded-full p-4 backdrop-blur-sm"
              >
                <Sparkles className="h-6 w-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  </Section>
);

export default About