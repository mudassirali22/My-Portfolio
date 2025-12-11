import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Card from './Card';
import Badge from './Badge';
import { skills } from '../config/data';
import { stagger, fadeUp } from '../config/animations';

const Skills = () => (
  <Section
    id="skills"
    title="Skills & Expertise"
    subtitle="What I use to deliver impactful, polished interfaces."
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6"
      >
        {skills.map((skill, i) => (
          <motion.div key={skill.id} variants={fadeUp} className="group">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <motion.span 
                className="text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                {skill.level}%
              </motion.span>
            </div>
            <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut", 
                  delay: i * 0.1 
                }}
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2 + 1,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6"
      >
        <Card>
          <h3 className="text-lg font-semibold text-foreground mb-4">Development Philosophy</h3>
          <p className="text-muted-foreground mb-6">
            I move fast without breaking things: strong type systems, component contracts, 
            and visual tests keep speed and quality aligned.
          </p>
          
          <div className="space-y-4">
            {[
              { category: "Frontend", skills: ["javascript","React","TailwindCSS","CSS","bootstrap5"] },
              { category: "Backend", skills: ["Node.js", "Express", "MongoDB"] },
              { category: "Tools", skills: ["Git & Github", "Postman", "VsCode","Mangodb Compass"] },
            ].map((group) => (
              <div key={group.category}>
                <h4 className="text-sm font-medium text-foreground mb-2">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} className="bg-secondary/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  </Section>
);

export default Skills;
