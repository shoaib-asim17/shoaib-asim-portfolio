"use client"
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { HiHome, HiUser, HiBriefcase, HiMail, HiBookOpen } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-bg-secondary/90 backdrop-blur-xl border-b border-glass-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <img
                src="./images/shoaib asim.png"
                alt="Shoaib Asim"
                className="w-12 h-12 rounded-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse"></div>
          </div>
           
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'Home', icon: HiHome, label: 'Home' },
              { id: 'About', icon: HiUser, label: 'About' },
              { id: 'Projects', icon: HiBriefcase, label: 'Projects' },
              { id: 'Contact', icon: HiMail, label: 'Contact' },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => smoothScrollTo(item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-text-secondary hover:text-neon-cyan transition-colors duration-300 group"
              >
                <item.icon className="w-5 h-5 group-hover:text-neon-cyan transition-colors duration-300" />
                <span className="font-figtree font-medium">{item.label}</span>
              </motion.button>
            ))}

            <Link href="/dsa">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-text-secondary hover:text-neon-cyan transition-colors duration-300 group"
              >
                <HiBookOpen className="w-5 h-5 group-hover:text-neon-cyan transition-colors duration-300" />
                <span className="font-figtree font-medium">Learn</span>
              </motion.button>
</Link>

            {/* More Dropdown */}
          <div className="relative">
              <motion.button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-text-secondary hover:text-neon-cyan transition-colors duration-300 font-figtree font-medium"
            >
              More
              </motion.button>
              <AnimatePresence>
            {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-dark-bg-secondary/95 backdrop-blur-xl border border-glass-border rounded-lg shadow-glow-primary overflow-hidden"
                  >
                    {[
                      { id: 'Words_I_Live', label: 'Quotes' },
                      { id: 'Qualifications', label: 'Qualifications' },
                      { id: 'Objective', label: 'Objective' },
                    ].map((item) => (
          <button
                        key={item.id}
                        onClick={() => {
                          smoothScrollTo(item.id);
                          setIsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-3 text-text-secondary hover:text-neon-cyan hover:bg-dark-bg-tertiary/50 transition-colors duration-300"
                      >
                        {item.label}
            </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
        </div>

        {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-text-primary hover:text-neon-cyan transition-colors duration-300"
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </motion.button>
      </div>

      {/* Mobile Menu */}
        <AnimatePresence>
      {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-dark-bg-secondary/95 backdrop-blur-xl border border-glass-border rounded-lg overflow-hidden"
            >
              {[
                { id: 'Home', icon: HiHome, label: 'Home' },
                { id: 'About', icon: HiUser, label: 'About' },
                { id: 'Projects', icon: HiBriefcase, label: 'Projects' },
                { id: 'Contact', icon: HiMail, label: 'Contact' },
              ].map((item) => (
            <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-text-secondary hover:text-neon-cyan hover:bg-dark-bg-tertiary/50 transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-figtree font-medium">{item.label}</span>
            </button>
              ))}
              
              <Link href="/dsa">
                <div className="flex items-center space-x-3 w-full px-4 py-3 text-text-secondary hover:text-neon-cyan hover:bg-dark-bg-tertiary/50 transition-colors duration-300">
                  <HiBookOpen className="w-5 h-5" />
                  <span className="font-figtree font-medium">Learn</span>
              </div>
              </Link>

              <div className="border-t border-glass-border">
                {[
                  { id: 'Words_I_Live', label: 'Quotes' },
                  { id: 'Qualifications', label: 'Qualifications' },
                  { id: 'Objective', label: 'Objective' },
                ].map((item) => (
          <button
                    key={item.id}
                    onClick={() => smoothScrollTo(item.id)}
                    className="flex items-center space-x-3 w-full px-4 py-3 text-text-secondary hover:text-neon-cyan hover:bg-dark-bg-tertiary/50 transition-colors duration-300"
                  >
                    <span className="font-figtree font-medium">{item.label}</span>
          </button>
                ))}
        </div>
            </motion.div>
      )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;