// DarkThemeToggle.jsx
import React from "react";
import { useTheme } from "../../ThemeContext";
const DarkThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme(); 

  return (
    <button onClick={toggleTheme} className="dark-theme-toggle">
      {isDarkTheme ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkThemeToggle;
