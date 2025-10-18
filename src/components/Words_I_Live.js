"use client";

import React from "react";
import { motion } from "framer-motion";

const QuoteCard = ({ quote, photo, name, isRight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`max-w-md w-full rounded-xl overflow-hidden m-4 p-6 
      bg-gradient-to-r from-zinc-900 to-teal-600 shadow-lg hover:shadow-2xl
      flex items-center lg:justify-${isRight ? "end" : "start"} 
      ${isRight ? "ml-auto" : "mr-auto"}`}
    >
      <img
        className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-teal-400"
        src={photo}
        alt={name}
      />
      <div>
        <h2 className="text-xl lg:text-2xl font-semibold text-teal-100 mb-2">
          {name}
        </h2>
        <p className="text-gray-200 text-sm lg:text-base">{quote}</p>
      </div>
    </motion.div>
  );
};

export default function QuotesSection() {
  const myQuotes = [
    {
      quote: "Success is the product of dedication and passion.",
      photo: "/images/successImg.jpg",
      name: "Success",
    },
    {
      quote: "Coding is not just about algorithms, it's about problem-solving.",
      photo: "/images/coding.jpg",
      name: "Coding",
    },
    {
      quote: "Embrace challenges, for they are opportunities in disguise.",
      photo: "/images/challenges.png",
      name: "Challenges",
    },
    {
      quote: "Learn from failure and rise stronger.",
      photo: "/images/failure.jpg",
      name: "Failure",
    },
  ];

  return (
    <div className="py-12 bg-black">
      <h2 className="text-5xl font-bold text-center text-white mb-12">
        Words That Inspire
      </h2>

      <div className="flex flex-wrap justify-center">
        {myQuotes.map((item, index) => (
          <QuoteCard
            key={index}
            quote={item.quote}
            photo={item.photo}
            name={item.name}
            isRight={index % 2 !== 0} // Alternate alignment
          />
        ))}
      </div>
    </div>
  );
}
