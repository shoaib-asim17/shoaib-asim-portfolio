"use client";
import React from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid"; // Importing the copy icon from Heroicons
import CodeEditor from './CodeEditor'; // Import the CodeEditor component
import { useTheme } from '../ThemeContext'; 

const SnippetWithText = ({ code, text, heading, index, onCopy }) => {

  const { theme } = useTheme(); // Access the theme from the context

  return (
    <div className="w-full mb-4">
      {/* Render the heading */}
      <h2 className={`text-lg font-semibold mb-2 px-2 ${theme === 'dark' ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-50 text-gray-800 shadow-md'}`}>{heading}</h2>

      {/* CodeMirror Editor */}
      <div className="relative w-full mb-2">
        <CodeEditor
          value={code}
          onChange={(value) => onCopy(value, index)} // Handle change
          theme={theme} // Pass the theme to CodeEditor
        />
        
        {/* Copy button as an icon in the top-right corner of the code block */}
        <button
          onClick={() => onCopy(code, index)} // Copy the current code
          className="absolute top-2 right-2 p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
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
