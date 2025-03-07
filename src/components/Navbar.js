"use client"
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../app/ThemeContext';
import Link from 'next/link'; // Import Link from next/link
// import { HiHome } from "react-icons/hi2";
import { HiHome, HiUser, HiBriefcase, HiMail ,  HiBookOpen } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen, ] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Access theme and toggleTheme from the useTheme hook
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`px-2 py-1 w-full fixed top-0 left-0 z-50 shadow-md backdrop-blur-lg ${theme === 'dark' ? 'bg-gray-900 bg-opacity-10' : 'bg-gray-50 bg-opacity-70'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/#About">
          <div className={`text-lg font-bold flex items-center mx-2 rounded-md p-2 hover:shadow-md ${theme === 'dark' ? ' text-gray-900' : ' text-white'}`}>
            <img
              src={"./images/shoaib asim.png"}
              alt="zorawar"
              className="w-20 rounded-full"
            />
            {/* <div className="nameandrole flex flex-col px-2">
              <span className="ml-2 text-lg font-bold">Mohammed Shoaib Asim</span>
              <p className="text-pink-300 text-sm font-serif px-2 hover:text-yellow-400 ">Full Stack Developer</p>
            </div> */}
          </div>
        </a>

        <div className="hidden md:flex space-x-10">

                      <a href="/#Home" 
              className={`flex items-center gap-2 hover:text-white hover:bg-green-600 hover:px-3 py-2 text-lg font-serif rounded-md 
              ${theme === 'dark' ? 'text-white' : 'text-blue-950'}`}>
              <HiHome className="w-5 h-5" />
              Home
            </a>


            <a href="/#About" className={`flex items-center gap-2 hover:text-white hover:bg-green-600 hover:px-3 py-2 text-lg font-serif rounded-md 
            ${theme === 'dark' ? 'text-white' : 'text-blue-950'}`}>
              <HiUser className="w-5 h-5" />
              About
            </a>

            <a href="/#Projects" className={`flex items-center gap-2 hover:text-white hover:bg-green-600 hover:px-3 py-2 text-lg font-serif rounded-md 
            ${theme === 'dark' ? 'text-white' : 'text-blue-950'}`}>
              <HiBriefcase className="w-5 h-5" />
              Projects
            </a>

            <a href="/#Contact" className={`flex items-center gap-2 hover:text-white hover:bg-green-600 hover:px-3 py-2 text-lg font-serif rounded-md 
            ${theme === 'dark' ? 'text-white' : 'text-blue-950'}`}>
              <HiMail className="w-5 h-5" />
              Contact
            </a>


<Link href="/dsa" className={`flex items-center gap-2 hover:text-white hover:bg-green-600 hover:px-3 py-2 text-lg font-serif rounded-md 
${theme === 'dark' ? 'text-white' : 'text-blue-950'}`}>
   <HiBookOpen className="w-5 h-5" />
   Learn
</Link>


          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={` hover:text-white hover:bg-green-600 hover:px-3 py-2 rounded-md ${theme === 'dark' ? 'text-white' : 'text-blue-950'}`}
              aria-expanded={isDropdownOpen}
            >
              More
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 bg-pink-950 backdrop-blur-3xl bg-opacity text-white rounded shadow-lg mt-2 z-10">
                <a href="/#Words_I_Live" className="block px-4 py-2 hover:bg-pink-100 hover:text-pink-950">Quotes</a>
                <a href="/#Qualifications" className="block px-4 py-2 hover:bg-pink-100 hover:text-pink-950">Qualifications</a>
                <a href="/#Objective" className="block px-4 py-2 hover:bg-pink-100 hover:text-pink-950">Objective</a>
              </div>
            )}
          </div>

          {/* Theme Toggle Button with Icons */}
          <button
            onClick={toggleTheme}
            className={`flex items-center px-4 py-2 rounded-md ${theme === 'dark' ? 'text-white' : 'text-dark'} `}
          >
            {theme === 'light' ? (
              <>
                <MoonIcon className="w-5 h-5 mr-2" />
              </>
            ) : (
              <>
                <SunIcon className="w-5 h-5 mr-2" />
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-700'}`}>
          {/* <a href="/#Home" className="block px-4 py-2 text-white">Home</a>
          <HiHome /> */}
          <a href="/#Home" className="block px-4 py-2 text-white flex items-center">
  <HiHome className="w-5 h-5 mr-2" />
  Home
</a>


<a href="/#About" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-700 rounded-md">
   <HiUser className="w-5 h-5" />
   About
</a>

<a href="/#Projects" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-700 rounded-md">
   <HiBriefcase className="w-5 h-5" />
   Projects
</a>

<a href="/#Contact" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-700 rounded-md">
   <HiMail className="w-5 h-5" />
   Contact
</a>

<a href="/dsa" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-700 rounded-md">
   <HiBookOpen className="w-5 h-5" />
   DSA
</a>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block w-full text-left px-4 py-2 text-white"
              aria-expanded={isDropdownOpen}
            >
              More
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 bg-gray-600 text-white rounded shadow-lg mt-2 z-10">
                <a href="/#Words_I_Live" className="block px-4 py-2 hover:bg-gray-500">Quotes</a>
                <a href="/#Qualifications" className="block px-4 py-2 hover:bg-gray-500">Qualifications</a>
                <a href="/#Objective" className="block px-4 py-2 hover:bg-gray-500">Objective</a>

              </div>
            )}
          </div>

          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleTheme}
            className={`block w-full text-left px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-gray-950 backdrop-blur-2xl backdrop-brightness-50 text-white' : 'bg-gray-800 text-white'} mt-2`}
          >
            {theme === 'light' ? (
              <>
                <MoonIcon className="w-5 h-5 mr-2 inline" />
              </>
            ) : (
              <>
                <SunIcon className="w-5 h-5 mr-2 inline" />
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;