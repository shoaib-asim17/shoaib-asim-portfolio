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
      className={`max-w-sm mx-auto rounded-lg shadow-xl shadow-slate-400 overflow-hidden my-2 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.6, delay }}
      role="button" 
      tabIndex={0} 
      onClick={() => console.log(title)} 
      onKeyPress={(e) => { if (e.key === 'Enter') console.log(title); }} 
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold bg-teal-900 rounded-md text-white px-2">{title}</h2>
        <p className="mt-2">⭐{description}</p>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      key={key}
      className={`objective min-h-screen p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : ' text-gray-800'}`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Objective heading */}
      <h1 className="font-lato font-light text-center text-4xl tracking-tight mb-8 bg-yellow-100 rounded-3xl text-gray-900 dark:text-black">
  Objective
</h1>
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
