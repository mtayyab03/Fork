import React, { createContext, useState, useContext } from "react";
import color from "../config/color";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const Colors = isDarkMode ? color.DarkThemeColors : color.LightThemeColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, Colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
