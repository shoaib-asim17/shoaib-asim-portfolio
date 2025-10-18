"use client";

import React from "react";
import HeaderTags from "./headerTags";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { ANIMATIONS } from "../constants/colors";

const AboutMe = () => {

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mohammed-shoaib-asim-b04467206",
      color: "hover:text-blue-400",
      glow: "hover:shadow-glow-primary",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/",
      color: "hover:text-blue-400",
      glow: "hover:shadow-glow-primary",
    },
    {
      icon: FaGithub,
      href: "https://github.com/shoaib-asim17",
      color: "hover:text-gray-300",
      glow: "hover:shadow-glow-primary",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/_.shoaib.asim._/",
      color: "hover:text-pink-400",
      glow: "hover:shadow-glow-accent",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/shoaib.asim.587/",
      color: "hover:text-blue-500",
      glow: "hover:shadow-glow-primary",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80"
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-full p-1">
                  <div className="w-full h-full bg-dark-bg-secondary rounded-full p-4">
                    <img
              src="/images/herosh.jpg"
              alt="Mohammed Shoaib Asim"
                      className="w-full h-full object-cover rounded-full border-2 border-neon-cyan"
            />
          </div>
                </div>
                
                {/* Floating Elements around image */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-neon-cyan/30 rounded-full"
                />
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-neon-purple/20 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Glassmorphic Card */}
            <div className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl p-8 shadow-glow-primary">
              {/* Name and Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                Mohammed Shoaib Asim
                </h3>
                <p className="text-text-secondary text-lg mb-2">
GenAI | Python | Software Developer @ Data Panther                </p>
                <p className="text-neon-cyan font-medium text-lg">
  Full Stack Developer | AI & Web Solutions | Innovative Problem Solver
</p>
              </motion.div>

              {/* About Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="text-text-tertiary text-lg leading-relaxed">
  I am a Software Developer Intern at <span className="font-semibold text-neon-cyan">Data Panther</span>, 
  where I contribute to building scalable web applications and AI-powered solutions. 
  My work spans the MERN stack, Python Full Stack development, and integrating Large Language Models (LLMs) 
  into practical applications to enhance automation and intelligence. I am passionate about developing innovative 
  software solutions that solve real-world problems and continuously expanding my technical expertise.
</p>

              </motion.div>

            {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h4 className="text-xl font-semibold text-text-primary mb-4">
                  Core Skills
                </h4>
                <div className="bg-dark-bg-secondary/50 rounded-xl p-4 border border-glass-border">
              <HeaderTags />
            </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold text-text-primary mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.2, 
                        y: -5,
                        boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-text-secondary ${social.color} ${social.glow} transition-all duration-300 p-3 rounded-full border border-glass-border hover:border-neon-cyan bg-dark-bg-tertiary/30`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-xl p-6 hover:shadow-glow-primary transition-all duration-300"
              >
                <h5 className="text-lg font-semibold text-neon-cyan mb-2">
                  Education
                </h5>
                <p className="text-text-secondary">
                  B.E in Computer Science Engineering
                </p>
                <p className="text-text-tertiary text-sm">
                  Muffakham Jah College of Engineering and Technology
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-xl p-6 hover:shadow-glow-secondary transition-all duration-300"
              >
                <h5 className="text-lg font-semibold text-neon-purple mb-2">
                  Achievement
                </h5>
                <p className="text-text-secondary">
                  Hack Revolution 2025 Winner
                </p>
                <p className="text-text-tertiary text-sm">
                  Recognized for innovative project development
                </p>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
  );
};

export default AboutMe;
