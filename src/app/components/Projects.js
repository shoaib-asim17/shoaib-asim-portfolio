"use client";
import React from "react";
import { useTheme } from '../ThemeContext';

const projects = [
  {
    title: "DAA LAB-Programs",
    description: "daa programs",
    techs: ["Java"],
    img: "./images/shoaibPortfolio.jpeg",
    link: "https://github.com/shoaib-asim17/DaaPrograms.git",
  },
  {
    title: "Personal Portfolio",
    description: "Professional page for personal portfolio showcase.",
    techs: ["Tailwind", "JS", "Vite"],
    img: "./images/shoaibPortfolio.jpeg",
    link: "https://github.com/shoaib-asim17/AsimTechZenith",
  },
  {
    title: "Python Projects",
    description: "Projects in Python.",
    techs: ["Python"],
    img: "./images/csiblog.jpeg",
    link: "https://github.com/shoaib-asim17/python-projects",
  },
  {
    title: "CSI Blog",
    description: "CSI Blogging website.",
    techs: ["HTML", "CSS", "JS", "MongoDB"],
    img: "./images/csiblog.jpeg",
    link: "https://github.com/shoaib-asim17/CSI_Blog",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  return (
    <div className={`max-w-4xl mx-auto p-4 w-full h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                {project.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-950 text-white px-4 py-2 rounded hover:bg-pink-900 transition-colors"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
