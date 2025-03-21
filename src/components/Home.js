"use client";

import React from "react";
import { useTheme } from "../app/ThemeContext";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`home my-12 min-h-screen p-5 rounded-lg  ${
        isDark
          ? "bg-gradient-to-r from-slate-900 to-slate-300 text-white shadow-lg backdrop-blur-sm"
          : "text-gray-800 shadow-md bg-gray-50"
      }`}
    >
     

      <div className="container mx-auto mt-8 md:mt-24 relative">
        <div className="text-center flex flex-col md:flex-row items-center justify-between mx-5">
          <div className="flex-grow text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold">
              <span>Welcome to </span>
              <span className="bg-gradient-to-r from-neutral-300 to-orange-400 bg-clip-text text-transparent font-mono bg-gray-200 rounded-md px-1">
                Mohammed Shoaib Asim's
              </span>
              <span> Portfolio</span>
            </h1>

            <div className="text-base md:text-lg text-gray-500 font-serif px-2 mt-4">
              <p>
                This is a simple portfolio website built using React and
                Tailwind CSS.
              </p>
              <p>
                Explore my projects, experience, and contact information here.
              </p>
              <p>Enjoy!</p>
            </div>

            <div className="buttons flex flex-wrap justify-center md:justify-start mt-8">
              <a href="/RDxCC.pdf" target="_blank" className="w-full sm:w-auto">
                <button className="bg-red-600 text-white font-mono py-2 px-4 mt-2 mx-3 rounded hover:bg-blue-700 transition duration-300">
                  Resume
                </button>
              </a>
              <a href="#About" className="w-full sm:w-auto">
                <button className="border-2 border-green-600 text-green-600 font-mono py-2 px-4 mt-2 mx-3 rounded hover:bg-green-100 hover:text-green-600 transition duration-300">
                  Read More
                </button>
              </a>
            </div>

            <div className="flex space-x-4 mt-5 mx-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/mohammed-shoaib-asim-b04467206" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} className={`${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-500"}`} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={28} className={`${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-400"}`} />
              </a>
              <a href="https://github.com/shoaib-asim17" target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} className={`${isDark ? "text-gray-300 hover:text-gray-500" : "text-gray-700 hover:text-gray-900"}`} />
              </a>
              <a href="https://www.instagram.com/_.shoaib.asim._/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} className={`${isDark ? "text-gray-300 hover:text-pink-500" : "text-gray-700 hover:text-pink-500"}`} />
              </a>
              <a href="https://www.facebook.com/shoaib.asim.587/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={28} className={`${isDark ? "text-gray-300 hover:text-blue-600" : "text-gray-700 hover:text-blue-600"}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
