"use client";

import React from 'react';
import { useTheme } from '../app/ThemeContext';


const QuoteCard = ({ quote, photo, name, isRight, theme }) => {
  // Define inline styles for white shadow
  const whiteShadow = {
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.5)', // Adjust as needed
  };

  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden m-4 
      ${isRight ? 'ml-auto lg:mr-auto' : 'mr-auto lg:ml-auto'} 
      lg:flex lg:justify-${isRight ? 'end' : 'start'} 
      ${theme === 'dark' ? 'bg-gradient-to-r from-slate-900 to-red-600 text-white' : 'bg-white shadow-lg  text-gray-800'}`}
      style={whiteShadow} // Apply the inline white shadow style
    >
      <div className="flex items-center p-6">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src={photo}
          alt={name}
        />
        <div>
          <h2 className={`text-2xl font-serif text-teal-600`}>{name}</h2>
          <p className={` ${theme === 'dark' ? 'text-gray-100' : 'text-gray-600'}`}>{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default function QuotesSection() {
  const { theme } = useTheme(); // Get the current theme from context

  const myQuotes = [
    { 
      quote: "Success is the product of dedication and passion.", 
      photo: "successImg.jpg",
      name: "Success"
    },
    { 
      quote: "Coding is not just about algorithms, it's about problem-solving.", 
      photo: "coding.jpg",
      name: "Coding"
    },
    { 
      quote: "Embrace challenges, for they are opportunities in disguise.", 
      photo: "challenges.png",
      name: "Challenges"
    },
    { 
      quote: "Learn from failure and rise stronger.", 
      photo: "failure.jpg",
      name: "Failure"
    }
  ];

  return (
    <div className={` ${theme === 'dark' ? '' : 'bg-gray-50'}`}>
     {/* <h1 className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Words I Live By</h1> */}
     <h2 className={`text-5xl font-sans font-bold text-center py-8 mb-5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}> ✨ Words That Inspire</h2>

      <div className="flex flex-wrap justify-center ">
        {myQuotes.map((item, index) => (
          <QuoteCard 
            key={index}
            quote={item.quote}
            photo={item.photo}
            name={item.name}
            isRight={index % 2 !== 0} // Alternate the alignment
            theme={theme} // Pass the theme to the QuoteCard
          />
        ))}
      </div>
    </div>
  );
}
