"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from './data';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-dark-bg" id="projects">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A selection of production-grade applications demonstrating engineering depth, complex system architecture, and real-world impact.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-8 rounded-full" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <a
                        href="#Contact"
                        className="inline-block px-10 py-4 text-lg font-semibold bg-white/5 hover:bg-white/10 border border-glass-border hover:border-neon-cyan rounded-full transition-all duration-300 backdrop-blur-sm group"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:text-white">
                            Discuss Your Next Project
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
