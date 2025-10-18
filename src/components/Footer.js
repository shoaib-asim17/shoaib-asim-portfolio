"use client";

import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mohammed-shoaib-asim-b04467206",
      color: "hover:text-blue-400",
      glow: "hover:shadow-glow-primary"
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/",
      color: "hover:text-blue-400",
      glow: "hover:shadow-glow-primary"
    },
    {
      icon: FaGithub,
      href: "https://github.com/shoaib-asim17",
      color: "hover:text-gray-300",
      glow: "hover:shadow-glow-primary"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/_.shoaib.asim._/",
      color: "hover:text-pink-400",
      glow: "hover:shadow-glow-accent"
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/shoaib.asim.587/",
      color: "hover:text-blue-500",
      glow: "hover:shadow-glow-primary"
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Contact', href: '#Contact' }
  ];

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">

      {/* Gradient Line */}
      <div className="h-px bg-gradient-primary"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Shoaib Asim
              </span>
            </h3>
            <p className="text-text-tertiary leading-relaxed mb-6">
              Full Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through code.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
            target="_blank"
            rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-text-secondary ${social.color} ${social.glow} transition-all duration-300 p-3 rounded-full border border-glass-border hover:border-neon-cyan bg-dark-bg-secondary/30`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-xl font-semibold text-text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.name)}
                    className="text-text-tertiary hover:text-neon-cyan transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-xl font-semibold text-text-primary mb-6">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className="text-text-tertiary">
                <span className="text-neon-cyan">Email:</span> mohammedshoaibasim2003@gmail.com
              </p>
              <p className="text-text-tertiary">
                <span className="text-neon-cyan">Phone:</span> +91 8520830702
              </p>
              <p className="text-text-tertiary">
                <span className="text-neon-cyan">Location:</span> Hyderabad, India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-text-tertiary text-sm flex items-center space-x-2"
            >
              <span>© 2024 Mohammed Shoaib Asim. All Rights Reserved.</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-neon-pink"
              >
                <FaHeart size={12} />
              </motion.span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-text-tertiary text-sm"
            >
              Built with <span className="text-neon-cyan">React</span> & <span className="text-neon-cyan">Next.js</span>
            </motion.p>
        </div>
      </div>
    </div>

    </footer>
  );
};

export default Footer;
