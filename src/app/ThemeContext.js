// src/app/ThemeContext.js
import React, { createContext, useContext } from 'react';

// Create a ThemeContext
const ThemeContext = createContext();

// Create a custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Create a ThemeProvider component - Always dark theme
export const ThemeProvider = ({ children }) => {
  const theme = 'dark'; // Always dark theme

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
