
import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); 
  const [color, setColor] = useState("#3498db"); 
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  // 🔑 Push variables into CSS on every change
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", color);

    if (mode === "dark") {
      document.documentElement.style.setProperty("--bg-color", "#111");
      document.documentElement.style.setProperty("--text-color", "#fff");
      document.documentElement.style.setProperty("--secondary-text-color", "#ccc");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#fff");
      document.documentElement.style.setProperty("--text-color", "#000");
      document.documentElement.style.setProperty("--secondary-text-color", "#444");
    }
  }, [mode, color]);

  return (
    <ThemeContext.Provider value={{ mode, color, toggleMode, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
