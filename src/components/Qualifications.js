"use client";
import React from 'react';

const qualificationsData = [

  {
    date: 'Present',
    title: 'Software Developer at Data Panther',
    description: 'Contributing to the development of scalable web applications and AI-powered solutions using MERN stack and Python Full Stack technologies.',
  },
  {
    date: '2025',
    title: 'Computer Science Engineering',
    description: 'Mastering web development, data structures, algorithms, and software engineering principles.',
  },
  {
    date: '2024',
    title: 'Full Stack Developer',
    description: 'Complete web development stack, including front-end, back-end, and database development.',
  },
  {
    date: '2021',
    title: 'Intermediate',
    description: 'Studied MPC',
  },
  {
    date: '2019',
    title: 'Secondary School Certificate',
    description: 'Completed my secondary school certificate (SSC) with a GPA of 9.7, emphasizing foundational academic excellence and dedication to learning.',
  },
];

// Qualification entry function
function QualificationItem({ date, title, description, linkText, linkHref }) {
  
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-white bg-slate-500 px-2 py-1 rounded-sm dark:text-gray-500">{date}</time>
      <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      <p className="text-base font-normal text-gray-500 dark:text-gray-100">{description}</p>
      {linkText && linkHref && (
        <a
          href={linkHref}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          {linkText}
          <svg
            className="w-3 h-3 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      )}
    </li>
  );
}

export function Qualifications() {
  
  return (
    <div className="flex flex-col items-center w-full max-w-full mx-auto p-6 bg-black bg-opacity-10 text-gray-100">
<h2 className="text-5xl font-medium text-center py-8 mb-5 text-white">Credentials That Speak</h2>
            
      <div className="px-4 py-6 rounded-lg bg-zinc-950">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {qualificationsData.map((qualification, index) => (
            <QualificationItem
              key={index}
              date={qualification.date}
              title={qualification.title}
              description={qualification.description}
              linkText={qualification.linkText}
              linkHref={qualification.linkHref}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
