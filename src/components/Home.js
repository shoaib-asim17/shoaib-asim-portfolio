"use client";
import React from 'react';
import { useTheme } from '../app/ThemeContext';

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`home my-12 min-h-screen p-5 rounded-lg relative transition duration-300 ease-in-out ${theme === 'dark' ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-300 text-gray-800 shadow-md'}`}style={{boxShadow: '0 4px 15px rgba(255, 255, 255, 0.5)'}}>
      <div className='container mx-auto mt-8 md:mt-24'>
        <div className="text-center relative flex flex-col md:flex-row items-center justify-between mx-5">
          <div className="flex-grow text-center md:text-left mb-8 md:mb-0">
            <h1 className='text-3xl md:text-5xl font-bold'>
              <span>Welcome to </span>
              <span className='text-red-700'>Mohammed Shoaib Asim's</span>
              <span> Portfolio</span>
            </h1>
            <div className='text-base md:text-lg text-gray-500 font-bold px-2 mt-4'>
              <p>This is a simple portfolio website created using React and Tailwind CSS.</p>
              <p>You can view my projects, experience, and contact information on this website.</p>
              <p>Enjoy!</p>
            </div>
            <div className='buttons justify-center md:justify-start mt-8 flex flex-wrap'>
              <a href="/Resume_103.pdf" target="_blank" className="w-full sm:w-auto">
                <button className="bg-gray-900 text-white font-bold py-2 px-4 mt-2 mx-3 rounded hover:bg-blue-700 transition duration-300">
                  Resume
                </button>
              </a>
              <a href="#About" className="w-full sm:w-auto">
                <button className="bg-red-900 text-white font-bold py-2 px-4 mt-2 mx-3 rounded hover:bg-blue-700 transition duration-300">
                  Read more
                </button>
              </a>
            </div>
            <div className='links mt-5 mx-4 flex justify-center md:justify-start space-x-4'>
               {/* Social media icons (unchanged) */}
               <a href='https://www.linkedin.com/in/mohammed-shoaib-asim-b04467206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' target='_blank' className='hover:shadow-md shadow-red-800 hover:shadow-pink-800'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M22.225 0H1.775C.794 0 0 .794 0 1.775v20.449C0 23.206.794 24 1.775 24h20.449C23.206 24 24 23.206 24 22.225V1.775C24 .794 23.206 0 22.225 0zM7.114 20.452H3.557V9h3.557v11.452zM5.335 7.421c-1.142 0-2.055-.921-2.055-2.063 0-1.141.913-2.063 2.055-2.063 1.142 0 2.054.922 2.054 2.063 0 1.142-.912 2.063-2.054 2.063zM20.443 20.452h-3.557v-5.581c0-1.332-.027-3.042-1.853-3.042-1.853 0-2.136 1.447-2.136 2.933v5.691h-3.557V9h3.413v1.558h.049c.475-.899 1.634-1.844 3.357-1.844 3.591 0 4.250 2.364 4.250 5.438v6.301z" />
                  </svg>
                </a>
                <a href='twitter' className='hover:shadow-md shadow-red-800 hover:shadow-pink-800'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M23.953 4.569c-.885.392-1.83.654-2.825.775a4.939 4.939 0 0 0 2.163-2.723 9.88 9.88 0 0 1-3.127 1.184 4.924 4.924 0 0 0-8.388 4.482A13.98 13.98 0 0 1 1.671 3.149 4.922 4.922 0 0 0 3.199 9.137 4.904 4.904 0 0 1 .97 8.733v.061a4.924 4.924 0 0 0 3.95 4.827 4.905 4.905 0 0 1-2.213.084 4.93 4.93 0 0 0 4.604 3.417A9.866 9.866 0 0 1 0 19.539 13.913 13.913 0 0 0 7.548 22c9.054 0 14.004-7.496 14.004-13.977 0-.213 0-.426-.015-.637A10.02 10.02 0 0 0 24 4.59a9.947 9.947 0 0 1-2.847.775 4.925 4.925 0 0 0 2.164-2.723z" />
                  </svg>
                </a>
                <a href='https://github.com/shoaib-asim17' target="_blank" className='hover:shadow-md shadow-red-800 hover:shadow-pink-800'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.287-.011-1.243-.017-2.244-3.338.724-4.042-1.613-4.042-1.613-.546-1.384-1.334-1.755-1.334-1.755-1.086-.742.082-.726.082-.726 1.205.084 1.836 1.236 1.836 1.236 1.069 1.837 2.809 1.304 3.493.996.107-.774.418-1.304.761-1.604-2.665-.303-5.466-1.333-5.466-5.932 0-1.313.469-2.386 1.236-3.227-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.298 1.229.955-.265 1.983-.397 3.002-.402 1.02.005 2.048.137 3.004.402 2.29-1.551 3.298-1.229 3.298-1.229.653 1.652.241 2.873.118 3.176.77.841 1.236 1.914 1.236 3.227 0 4.613-2.806 5.622-5.466 5.922.43.37.815 1.096.815 2.208 0 1.592-.014 2.872-.014 3.259 0 .319.219.695.825.577C20.563 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href='https://www.instagram.com/_.shoaib.asim._/' target="_blank" className='hover:shadow-md shadow-red-800 hover:shadow-pink-800'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="28" height="28">
                    <rect x="5" y="5" width="40" height="40" rx="10" ry="10" fill="#000000" />
                    <circle cx="25" cy="25" r="10" fill="none" stroke="#FFFFFF" strokeWidth="3" />
                    <circle cx="37" cy="13" r="3" fill="#FFFFFF" />
                  </svg>
                </a>
                <a href='https://www.facebook.com/shoaib.asim.587/' target="_blank" className='hover:shadow-md hover:shadow-pink-800'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.293H9.691V12h3.129V9.632c0-3.086 1.837-4.774 4.514-4.774 1.293 0 2.407.096 2.727.139v3.16h-1.87c-1.463 0-1.746.695-1.746 1.715V12h3.494l-.458 2.707h-3.036V24h5.964C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
            </div>
          </div>
          <img 
            src={"./images/emojiwithcomp.png"} 
            alt="emoji with computer" 
            className="hidden md:block w-80 mb-5 rounded-full" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
