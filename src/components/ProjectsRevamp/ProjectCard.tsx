"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from './types';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaServer, FaCode, FaLayerGroup } from 'react-icons/fa';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative"
        >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-pink opacity-30 group-hover:opacity-100 blur transition duration-500 rounded-2xl" />

            <div className="relative h-full bg-dark-bg-secondary border border-glass-border rounded-2xl overflow-hidden flex flex-col">
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-neon-cyan group-hover:to-white transition-all duration-300">
                            {project.title}
                        </h3>
                        <div className="flex gap-3">
                            {project.links?.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-neon-cyan transition-colors"
                                    title="Live Demo"
                                >
                                    <FaExternalLinkAlt size={20} />
                                </a>
                            )}
                            {project.links?.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-white transition-colors"
                                    title="GitHub Repo"
                                >
                                    <FaGithub size={22} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Key Capabilities */}
                    <div className="mb-6 space-y-2">
                        {project.keyCapabilities.slice(0, 3).map((cap, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                <span className="text-neon-cyan mt-1">▹</span>
                                <span>{cap}</span>
                            </div>
                        ))}
                        {project.keyCapabilities.length > 3 && !isExpanded && (
                            <div className="text-xs text-gray-500 italic">...plus {project.keyCapabilities.length - 3} more</div>
                        )}
                    </div>

                    <div className="mt-auto">
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-dark-bg-tertiary border border-glass-border text-neon-cyan/80"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Expand Button */}
                        {(project.details || project.keyCapabilities.length > 3) && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="w-full py-2 flex items-center justify-center gap-2 text-sm text-text-secondary hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                {isExpanded ? (
                                    <>
                                        <FaChevronUp /> Collapse Details
                                    </>
                                ) : (
                                    <>
                                        <FaChevronDown /> View Architecture & Details
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </div>

                {/* Expandable Section */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-black/20 border-t border-glass-border"
                        >
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Full Capabilities */}
                                {project.keyCapabilities.length > 3 && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-neon-pink mb-3 flex items-center gap-2">
                                            <FaCode /> Full Capabilities
                                        </h4>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {project.keyCapabilities.map((cap, i) => (
                                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                    <span className="text-neon-pink/70">▹</span> {cap}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Architecture Details */}
                                {project.details?.architecture && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-neon-purple mb-3 flex items-center gap-2">
                                            <FaServer /> System Architecture
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.details.architecture.map((item, i) => (
                                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                    <span className="text-neon-purple/70">▹</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Features Details */}
                                {project.details?.features && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-neon-cyan mb-3 flex items-center gap-2">
                                            <FaLayerGroup /> Core Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.details.features.map((item, i) => (
                                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                    <span className="text-neon-cyan/70">▹</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
