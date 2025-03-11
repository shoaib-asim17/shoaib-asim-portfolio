"use client";
import React from "react";
import { FaRegStickyNote, FaComments, FaTasks } from "react-icons/fa";
import { useTheme } from '../app/ThemeContext'; 

const projects = [
  {
    _id: "1",
    title: "Notes Making App",
    description: "A simple and efficient notes-taking application to organize your thoughts, tasks, and ideas.",
    imageUrl: "/notesapp.jpg",
    likes: 10,
    githubLink: "https://github.com/yourusername/notes-app",
    icon: <FaRegStickyNote className="text-blue-500 text-4xl" />,
  },
  {
    _id: "2",
    title: "Chat Application",
    description: "A real-time chat application with instant messaging, group chats, and media sharing features.",
    imageUrl: "/chatimg.png",
    likes: 15,
    githubLink: "https://github.com/yourusername/chat-app",
    icon: <FaComments className="text-green-500 text-4xl" />,
  },
  {
    _id: "3",
    title: "Project Management System",
    description: "A full-featured project management tool to track progress, manage teams, and enhance productivity.",
    imageUrl: "/projectimg.jpg",
    likes: 20,
    githubLink: "https://github.com/yourusername/project-management-system",
    icon: <FaTasks className="text-red-500 text-4xl" />,
  },
];

// Individual Project Card Component
const Card = ({ project }) => {
  const { theme } = useTheme(); // Corrected placement of useTheme()

  return (
    <div
      className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300 dark:border-gray-700 
        ${theme === 'dark' ? 'bg-gradient-to-r from-zinc-950 to-zinc-600  text-white' : 'bg-white'}`}
    >
      <div className="flex justify-center">{project.icon}</div>
      <h3 className="text-xl font-semibold  text-center mt-4">
        {project.title}
      </h3>
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg my-4"
        />
      )}
      <p className=" my-2">{project.description}</p>
      <p className=" text-center">⭐ {project.likes} Likes</p>
      {project.githubLink && (
        <a
          href="/#Contact"
          rel="noopener noreferrer"
          className="mt-4 block text-center px-4 py-2 border-2 border-green-500 font-medium rounded hover:bg-green-500 hover:text-white transition"
        >
          Enquire
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  const { theme } = useTheme(); // Ensure useTheme is properly used here

  return (
    <div className={`pb-6 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      <h2 className={`text-5xl font-medium text-center py-8 mb-5 ${theme === 'dark' ? 'text-white' : 'bg-gradient-to-r from-zinc-900 to-teal-400 bg-clip-text text-transparent'}`}>
         Innovative Creations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
