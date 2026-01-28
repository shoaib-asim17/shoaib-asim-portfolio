"use client";

import React, { useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { COLORS, ANIMATIONS } from "../constants/colors";

const Home = () => {


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
    <div className="relative min-h-screen overflow-hidden">

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20" style={{ zIndex: 3 }}>
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-neon-cyan font-mono text-lg mb-4"
            >
              Hello, I'm
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-text-primary mb-6"
            >
              <span className="text-[#A3485A]">
                Mohammed Shoaib Asim
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl lg:text-3xl text-text-secondary mb-8"
            >
              <span className="font-light">GenAI | Python | Software Developer @ Data Panther </span>
              <br />
              {/* <span className="text-neon-cyan font-medium">
                MERN Stack Specialist
              </span> */}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-text-tertiary text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed"
            >
              From lines of code to impactful solutions – shaping the digital future.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.a
                href="/software-developer.pdf"
                target="_blank"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-primary text-dark-bg font-semibold rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#CD1818]" />
                <div className="relative flex items-center space-x-2">
                  <FaDownload className="w-5 h-5 text-white" />
                  <span className="text-white">Download Resume</span>
                </div>
              </motion.a>

              <motion.button
                onClick={() => {
                  const aboutSection = document.getElementById('About');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(122, 0, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 border-2 border-slate-800 text-gray-200 font-semibold rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative">Explore More</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-6 mt-12"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-text-secondary ${social.color} ${social.glow} transition-all duration-300 p-3 rounded-full border border-glass-border hover:border-neon-cyan`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse" />

              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-full p-1">
                  <div className="w-full h-full bg-dark-bg-secondary rounded-full p-4">
                    <img
                      src="/me.jpeg"
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ zIndex: 3 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
