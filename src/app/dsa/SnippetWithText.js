"use client";
import React from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid"; // Importing the copy icon from Heroicons

const SnippetWithText = ({ code, text, heading, index, onCopy, theme }) => {
  return (
    <div className="w-full mb-4">
      {/* Render the heading */}
      <h2 className={`text-lg font-semibold mb-2 px-2 ${theme === 'dark' ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-50 text-gray-800 shadow-md'}`}>
        {heading}
      </h2>

      {/* Wrapping code snippet and button in a relative container */}
      <div className="relative">
        {/* Render code snippet as preformatted text */}
        <pre className="bg-teal-950 p-2 rounded-md overflow-x-auto">
          <code className="text-sm text-gray-200">{code}</code>
        </pre>

        {/* Copy button as an icon in the top-right corner of the code block */}
        <button
          onClick={() => onCopy(code, index)} // Copy the current code
          className="absolute top-2 right-2 p-1 bg-blue-500 text-white rounded-full hover:bg-black hover:text-white focus:outline-none"
          aria-label="Copy code to clipboard"
        >
          <ClipboardDocumentIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Render corresponding paragraph */}
      <p className="text-gray-700 text-sm md:text-base">{text}</p>
    </div>
  );
};

export default SnippetWithText;
