"use client";

import React from "react";
import HeaderTags from "./headerTags";
import { useTheme } from "../app/ThemeContext";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const AboutMe = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className={`px-4 lg:px-8 pt-16 rounded-3xl border border-dashed border-red-600 ${isDark ? "bg-zinc-900 text-gray-100" : "text-gray-800"}`}>
      <section className="py-6 lg:py-14">
        <div className="container flex flex-col lg:flex-row items-start justify-start">
          {/* Profile Image */}
          <div className="lg:pr-8 w-2/6 lg:w-full pb-4">
            <img
              className="w-full rounded-full p-1 ring-2 ring-blue-400 shadow-lg"
              src="/images/herosh.jpg"
              alt="Mohammed Shoaib Asim"
            />
          </div>

          {/* Profile Info */}
          <div>
            <div className="header mb-16">
              <p className={` font-serif font-extrabold text-4xl ${isDark ? "text-gray-100" : "text-gray-900"}`}>
                Mohammed Shoaib Asim
              </p>
              <p className={`text-md font-serif ${isDark ? "text-gray-400" : "text-gray-800"}`}>
                Student at Muffakham Jah College Of Engineering And Technology.
              </p>
              <h2 className={`text-md font-serif font-light ${isDark ? "text-gray-400" : "text-gray-800"}`}>
                Full Stack Developer | Hack Revolution 2025 Winner | CSE Undergraduate
              </h2>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
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

            {/* Skills Section */}
            <div className="py-2">
              <HeaderTags />
            </div>

            {/* About Section */}
            <div className="bg-slate-100 dark:bg-gray-800 py-4 px-4 rounded-md text-gray-800 dark:text-gray-300">
              <p>
                I am a passionate web developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). Currently pursuing my Bachelor's degree in Computer Science Engineering at Muffakham Jah College of Engineering and Technology, I am constantly learning new technologies to enhance my skills and contribute to innovative projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
