import React from "react";
import { motion } from "framer-motion";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { ANIMATIONS } from "../constants/colors";

const HeaderTags = () => {
  const tags = [
    {
      icon: <DesktopMacIcon className="text-neon-cyan" fontSize="small" />,
      name: "Web Developer",
      color: "border-neon-cyan hover:bg-neon-cyan/10",
    },
    {
      icon: <CodeIcon className="text-neon-purple" fontSize="small" />,
      name: "React Developer",
      color: "border-neon-purple hover:bg-neon-purple/10",
    },
    {
      icon: <CodeIcon className="text-green-400" fontSize="small" />,
      name: "Node.js",
      color: "border-green-400 hover:bg-green-400/10",
    },
    {
      icon: <TerminalIcon className="text-orange-400" fontSize="small" />,
      name: "MERN Stack",
      color: "border-orange-400 hover:bg-orange-400/10",
    },
    {
      icon: <TerminalIcon className="text-blue-400" fontSize="small" />,
      name: "Material UI",
      color: "border-blue-400 hover:bg-blue-400/10",
    },
    {
      icon: <PeopleAltIcon className="text-pink-400" fontSize="small" />,
      name: "Collaboration",
      color: "border-pink-400 hover:bg-pink-400/10",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className={`
            flex items-center space-x-2 px-4 py-2 rounded-full 
            border-2 ${tag.color}
            text-text-secondary hover:text-text-primary
            bg-dark-bg-tertiary/30 backdrop-blur-sm
            transition-all duration-300
            font-medium text-sm
            group
          `}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {tag.icon}
          </motion.div>
          <span className="group-hover:text-current transition-colors duration-300">
            {tag.name}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default HeaderTags;