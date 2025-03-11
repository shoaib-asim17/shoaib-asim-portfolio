"use client"; 

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from '../app/ThemeContext'; 

const cardData = [
  {
    title: "Showcase My Web Development Skills",
    description: "Present a collection of diverse web development projects to demonstrate my proficiency in technologies like React, Tailwind, and Node.js.",
    delay: 0,
  },
  {
    title: "Highlight Professional Experience",
    description: "Detail my practical experience, including internships and roles like Associate Tech Head at CSI, to showcase my growth and hands-on involvement.",
    delay: 0.3,
  },
  {
    title: "Demonstrate Full-Stack Capabilities",
    description: "Provide examples of full-stack projects, such as building RESTful APIs, working with MongoDB, and developing interactive user interfaces.",
    delay: 0.6,
  },
  {
    title: "Illustrate Problem-Solving Approach",
    description: "Showcase projects and case studies where I tackled technical challenges, focusing on algorithmic efficiency and design principles.",
    delay: 0.9,
  },
  {
    title: "Build Connections with Potential Employers",
    description: "Create a platform to share my work, connect with industry professionals, and present myself as a valuable candidate for future opportunities.",
    delay: 1.2,
  },
];

const Objective = () => {
  const [key, setKey] = useState(0); 
  const router = useRouter(); 
  const { theme } = useTheme(); 

  useEffect(() => {
    const handleRouteChange = () => {
      setKey((prevKey) => prevKey + 1); 
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange); 
    };
  }, [router]);

  const pageVariants = {
    initial: { opacity: 0, y: -50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: 50 },
  };

  const pageTransition = {
    type: "spring",
    stiffness: 50,
    damping: 20,
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Reusable Card component
  const Card = ({ title, description, delay }) => (
    <motion.div
      className={`max-w-sm mx-auto rounded-2xl shadow-xl border border-gray-400  overflow-hidden my-2 ${theme === 'dark' ? 'bg-gradient-to-r from-zinc-900 to-teal-400' : 'bg-white text-gray-800'}`}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      role="button" 
      tabIndex={0} 
      onClick={() => handleCardClick(title)} 
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(title); }} 
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold bg-red-100  text-blue-950 px-2">{title}</h2>
        <p className="mt-2">⭐{description}</p>
      </div>
    </motion.div>
  );

  const handleCardClick = (title) => {
    console.log(title);
  };

  return (
    <motion.div
      key={key}
      className={`objective min-h-screen p-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-800'}`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Objective heading */}
      <h2 className={`text-5xl font-medium text-center py-8 mb-5 ${theme === 'dark' ? 'text-white' : 'bg-gradient-to-r from-zinc-900 to-teal-400 bg-clip-text text-transparent'}`}>  My Path to Success</h2>


      {/* Grid for cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            delay={card.delay}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Objective;
