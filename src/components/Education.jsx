import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Card from './Card';
import { Education_fields } from '../config/data';
import { fadeUp } from '../config/animations';
import { Pencil } from 'lucide-react';

const Education= () => (
  <Section
    id="education"
    title="Education"
    subtitle="Education Background "
  >
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-border to-transparent" />
      
      <div className="space-y-12">
        {Education_fields.map((edu, index) => (
          <motion.div
            key={edu.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative pl-20"
          >
           <motion.div
              className="absolute left-6 top-2 h-4 w-4 rounded-full bg-primary ring-4 ring-background flex items-center justify-center"
              whileInView={{ scale: [0, 1.2, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Pencil className="h-3 w-3 text-primary-foreground" />
            </motion.div>
            
            <Card className="hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.name}
                    {edu.course}
                  </h3>
                  <p className="text-primary font-medium">{edu.institute}</p>
                  <p> {edu.certificate}</p>
                </div>
                <motion.p 
                  className="text-sm text-muted-foreground shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  {edu.time}
                 
                </motion.p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default Education;