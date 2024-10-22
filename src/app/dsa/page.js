"use client";
import React, { useRef } from "react";
import { useTheme } from '../ThemeContext'; // Importing the theme context
import codeSnippets from './codeSnippet'; // Import the code snippets
import textContent from './textContent'; // Import the updated text content
import SnippetWithText from './SnippetWithText'; // Import the SnippetWithText component

const DSA = () => {
  const { theme } = useTheme(); // Accessing theme from context
  const editorRefs = useRef([]);

  const copyCode = (code, index) => {
    // Check if navigator is defined (client-side)
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
        editorRefs.current[index] = code; // Store the code in refs
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    } else {
      console.warn("Clipboard API is not available.");
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen p-4 my-28 ${theme === 'dark' ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-50 text-gray-800 shadow-md'}`} style={{ boxShadow: '0 4px 15px rgba(255, 255, 255, 0.5)' }}>
      <div className="relative flex flex-col items-start bg-gray-200 p-4 rounded-md w-full max-w-lg mx-auto md:max-w-xl lg:max-w-2xl">
        
        {/* Mapping over the imported content to render paragraphs, headings, and code editors */}
        {codeSnippets.map((code, index) => (
          <SnippetWithText
            key={index}
            code={code}
            text={textContent[index].text} // Access the text content
            heading={textContent[index].heading} // Access the heading content
            index={index}
            onCopy={copyCode}
            // theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default DSA;
