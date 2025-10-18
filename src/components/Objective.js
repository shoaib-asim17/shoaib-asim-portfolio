"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaLaptopCode, FaBriefcase, FaServer, FaLightbulb, FaHandshake, FaPython } from "react-icons/fa";

const cardData = [
  {
    title: "Showcase My Web Development Skills",
    description:
      "Present diverse web projects demonstrating my proficiency in React, Tailwind, and Node.js.",
    icon: <FaLaptopCode size={28} />,
  },
  {
    title: "Highlight Professional Experience",
    description:
      "Detail internships and my role as Associate Tech Head at CSI, showing hands-on leadership.",
    icon: <FaBriefcase size={28} />,
  },
  {
    title: "Demonstrate Full-Stack Capabilities",
    description:
      "Show examples of full-stack projects: REST APIs, MongoDB integration, interactive UI.",
    icon: <FaServer size={28} />,
  },
  {
    title: "Illustrate Problem-Solving Approach",
    description:
      "Showcase projects and case studies tackling technical challenges efficiently and creatively.",
    icon: <FaLightbulb size={28} />,
  },
  {
    title: "Work on Data Panther Projects",
    description:
      "Engaged in real-world projects at Data Panther, integrating MERN stack and Python full-stack solutions, and building LLM-powered applications.",
    icon: <FaPython size={28} />,
  },
  {
    title: "Build Connections with Employers",
    description:
      "Create a platform to share work, network with industry professionals, and highlight my skills.",
    icon: <FaHandshake size={28} />,
  },
];

const Objective = () => {
  const [key, setKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setKey((prev) => prev + 1);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, [router]);

  const pageVariants = {
    initial: { opacity: 0, y: -30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: 30 },
  };

  const pageTransition = {
    type: "spring",
    stiffness: 50,
    damping: 20,
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleCardClick = (title) => {
    console.log(`Clicked: ${title}`);
  };

  return (
    <motion.div
      key={key}
      className="objective min-h-screen p-8 bg-black text-white"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-12">
        My Path to Success
      </h2>

      {/* Grid for first three cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {cardData.slice(0, 3).map((card, index) => (
          <motion.div
            key={index}
            className="group bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-2xl hover:scale-105 cursor-pointer transition-transform duration-300"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => handleCardClick(card.title)}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-purple-400">{card.icon}</div>
              <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                {card.title}
              </h3>
            </div>
            <p className="text-gray-300">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Grid for last three cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.slice(3).map((card, index) => (
          <motion.div
            key={index + 3}
            className="group bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-2xl hover:scale-105 cursor-pointer transition-transform duration-300"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => handleCardClick(card.title)}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-purple-400">{card.icon}</div>
              <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                {card.title}
              </h3>
            </div>
            <p className="text-gray-300">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Objective;
