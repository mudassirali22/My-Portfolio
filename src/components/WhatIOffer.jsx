import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Server, Cloud, Zap,  Users} from 'lucide-react';
import { fadeUp,stagger } from '../config/animations';

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Modern, responsive web applications using React, and cutting-edge technologies for exceptional user experiences.",
    features: ["Javascript/React","Tailwind CSS", "Responsive Design", "SEO Optimization"],
    bg_color: "bg-blue-500",
    text_color: "text-blue-500",
    border_color: "border-blue-500"
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable server-side solutions with robust APIs, database design, and cloud infrastructure.",
    features: ["Node.js/Express", "RESTful APIs", "Authentication", "Database Design", "API Integration", "WebSockets"],
    bg_color: "bg-green-500",
    text_color: "text-green-500",
    border_color: "border-green-500"
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Efficient database architecture and management for optimal performance and data integrity.",
    features: ["Database Design", "Query Optimization", "Data Modeling", "MongoDB/PostgreSQL", "Redis Caching", "Data Security"],
    bg_color: "bg-purple-500",
    text_color: "text-purple-500",
    border_color: "border-purple-500"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast applications with optimized loading times and superior user experience.",
    features: ["Lighthouse Optimization", "Code Splitting", "Image Optimization", "Caching Strategies", "Bundle Analysis", "CDN Setup"],
    bg_color: "bg-yellow-500",
    text_color: "text-yellow-500",
    border_color: "border-yellow-500"
  }
];

const WhatIOffer = () => {
  return (
    <section id="services" className="relative bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            What I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            End-to-end full stack development services that transform your ideas into high-performance digital solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 px-8 sm:px-20 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group relative"
            >
              <div className="relative rounded-2xl border border-white/0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm sm:p-6 p-4 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
              
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${service.bg_color}/10 border ${service.border_color}/20`}>
                    <service.icon className={`h-8 w-8 ${service.text_color}`} />
                  </div>
                  <div className='text-2xl font-bold text-foreground'>
                    {service.title}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6 grid grid-cols-1 sm:grid-cols-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${service.bg_color} flex-shrink-0`} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect*/}
                <div className={`absolute inset-0 rounded-2xl ${service.bg_color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">My Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                step: "01", 
                title: "Discovery & Planning", 
                desc: "Understand requirements and create technical specifications",
                icon: Users
              },
              { 
                step: "02", 
                title: "Design & Architecture", 
                desc: "Create wireframes and plan system architecture",
                icon: Palette
              },
              { 
                step: "03", 
                title: "Development & Testing", 
                desc: "Agile development with continuous testing and feedback",
                icon: Code2
              },
              { 
                step: "04", 
                title: "Deployment & Support", 
                desc: "Deploy to production and provide ongoing maintenance",
                icon: Cloud
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-card/80 border border-border hover:border-blue-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <process.icon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIOffer;