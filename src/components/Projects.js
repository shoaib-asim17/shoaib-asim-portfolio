"use client";
import React from "react";
import { FaRegStickyNote, FaComments, FaTasks, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { ANIMATIONS } from "../constants/colors";

const projects = [
  {
    _id: "1",
    title: "Notes Making App",
    description: "A simple and efficient notes-taking application to organize your thoughts, tasks, and ideas. Built with React and modern web technologies.",
    imageUrl: "/notesapp.jpg",
    likes: 10,
    githubLink: "https://github.com/yourusername/notes-app",
    liveLink: "#",
    icon: <FaRegStickyNote className="text-neon-cyan text-4xl" />,
    gradient: "from-neon-cyan to-blue-500",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    _id: "2",
    title: "Chat Application",
    description: "A real-time chat application with instant messaging, group chats, and media sharing features. Real-time communication made simple.",
    imageUrl: "/chatimg.png",
    likes: 15,
    githubLink: "https://github.com/yourusername/chat-app",
    liveLink: "#",
    icon: <FaComments className="text-green-400 text-4xl" />,
    gradient: "from-green-400 to-emerald-500",
    technologies: ["Socket.io", "React", "Node.js", "MongoDB"],
  },
  {
    _id: "3",
    title: "Project Management System",
    description: "A full-featured project management tool to track progress, manage teams, and enhance productivity. Streamline your workflow.",
    imageUrl: "/projectimg.jpg",
    likes: 20,
    githubLink: "https://github.com/yourusername/project-management-system",
    liveLink: "#",
    icon: <FaTasks className="text-neon-pink text-4xl" />,
    gradient: "from-neon-pink to-red-500",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
  },
];

// Individual Project Card Component
const Card = ({ project, index }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)"
      }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
      
      {/* Main Card */}
      <div className="relative bg-dark-bg-secondary/80 backdrop-blur-xl border border-glass-border rounded-2xl p-6 hover:border-neon-cyan/50 transition-all duration-500 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-secondary rounded-full blur-2xl" />
        </div>

        {/* Icon */}
        <motion.div 
          className="flex justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 rounded-full bg-dark-bg-tertiary/50 border border-glass-border group-hover:border-neon-cyan/50 transition-colors duration-300">
            {project.icon}
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary text-center mb-4 group-hover:text-neon-cyan transition-colors duration-300">
        {project.title}
      </h3>

        {/* Image */}
      {project.imageUrl && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="mb-4 rounded-xl overflow-hidden border border-glass-border"
          >
        <img
          src={project.imageUrl}
          alt={project.title}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        )}

        {/* Description */}
        <p className="text-text-tertiary mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className="px-3 py-1 bg-dark-bg-tertiary/50 border border-glass-border rounded-full text-xs text-text-secondary hover:text-neon-cyan transition-colors duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>

    

       

         
    </div>
    </motion.div>
  );
};

const Projects = () => {

  return (
    <section className="py-20 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Innovative <span className="bg-gradient-primary bg-clip-text text-transparent">Creations</span>
      </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-6">
            Explore my portfolio of cutting-edge projects that showcase modern web development and innovative solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Card key={project._id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('Contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-primary text-dark-bg font-semibold rounded-lg hover:shadow-glow-primary transition-all duration-300"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;