"use client";
import React from 'react';
import { useTheme } from '../ThemeContext'; 

const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`about my-1 min-h-screen p-5 rounded-lg ${theme === 'dark' ? 'bg-gray-900 text-gray-100  ' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">About Me</h1>

        <div className={`flex flex-col md:flex-row items-center max-w-3xl mx-auto rounded overflow-hidden shadow-lg my-4 ${theme === 'dark' ? 'bg-gray-800 text-white shadow-xl shadow-slate-400 overflow-hidden' : 'bg-white text-gray-800 shadow-md'}`}>
          <img 
            className="w-full md:w-20 lg:w-40 object-cover rounded-full mx-3" 
            src="/zorawar.jpg" // replace with the actual path to the image
            alt="About Me" 
          />
          <div className="p-6 w-full md:w-1/2">
            {/* <h2 className="font-bold text-xl mb-2">About Me</h2> */}
            <p className="text-gray-400 text-base">
              Hi! I'm Mohammed Shoaib Asim, a passionate programmer and web developer specializing in creating seamless user interfaces and robust backend systems.
            </p>
            <p className="text-gray-400 text-base mt-2">
              I love exploring new technologies and building projects that can make a difference. Here are a few skills I possess:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
