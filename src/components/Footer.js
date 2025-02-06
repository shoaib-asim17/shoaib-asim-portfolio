import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = ({ isDark }) => {
  return (
    <div className={`footer bg-blue-950 text-white`}>
      <div className="content mx-auto py-12 px-4">
        <div className="flex justify-center items-center">
          <p className="text-zinc-400 text-sm">
            © 2024 Mohammed Shoaib Asim. All Rights Reserved.
          </p>
        </div>
        <div className="flex space-x-4 justify-center mt-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohammed-shoaib-asim-b04467206"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-400 hover:text-blue-500'}`}
          >
            <FaLinkedin size={28} />
          </a>
          
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-400 hover:text-blue-400'}`}
          >
            <FaTwitter size={28} />
          </a>
          
          {/* GitHub */}
          <a
            href="https://github.com/shoaib-asim17"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? 'text-gray-300 hover:text-gray-500' : 'text-gray-400 hover:text-gray-300'}`}
          >
            <FaGithub size={28} />
          </a>
          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/_.shoaib.asim._/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? 'text-gray-300 hover:text-pink-500' : 'text-gray-400 hover:text-pink-500'}`}
          >
            <FaInstagram size={28} />
          </a>
          
          {/* Facebook */}
          <a
            href="https://www.facebook.com/shoaib.asim.587/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? 'text-gray-300 hover:text-blue-600' : 'text-gray-400 hover:text-blue-600'}`}
          >
            <FaFacebook size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
