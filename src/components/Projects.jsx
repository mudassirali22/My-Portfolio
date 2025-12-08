import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import Badge from './Badge';
import { projects } from '../config/data';
import { fadeUp } from '../config/animations';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Selected work that balances craft and impact."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onHoverStart={() => setHoveredProject(index)}
            onHoverEnd={() => setHoveredProject(null)}
            className="relative h-full"
          >
            <Card className="h-full overflow-hidden group flex flex-col">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 flex-shrink-0">
                <motion.div
                  className="aspect-video w-full bg-gradient-to-br from-muted to-background relative"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className='
                    border border-gray-600/70 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md shadow-2xl shadow-black/30 w-auto h-8 rounded-2xl
                     absolute z-20 left-3 top-3 px-4 py-1.5 flex items-center justify-center text-sm font-semibold text-gray-100 transition-all duration-500 ease-out 
                     hover:scale-110 hover:shadow-2xl hover:border-gray-400 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700 cursor-default group overflow-hidden
                  '>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10 drop-shadow-md">
                      {project.category}
                    </span>
                  </div>    

                  {/* Project video and image */}
                  {project.type == 'video' ? (
                    <div className="absolute flex items-center justify-center z-10">
                      <video
                        controls
                        muted
                        loop
                        playsInline
                        style={{ width: "100%", height: "auto" }}
                        className="rounded-lg"
                      >
                        <source src={project.image} type="video/mp4"/>
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : <img src={project.image} alt="" className="w-full h-full object-cover" />}
                  
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="flex gap-4"
                    >
                      <motion.a
                        href={project.link}
                        className="bg-background text-foreground p-3 rounded-full hover:bg-accent transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={project.repo}
                        className="bg-background text-foreground p-3 rounded-full hover:bg-accent transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Project Content*/}
              <div className="space-y-4 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 mt-auto">
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.repo}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="h-4 w-4" /> Source Code
                  </motion.a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;