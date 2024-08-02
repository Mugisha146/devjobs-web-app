// DarkThemeToggle.jsx
import React from "react";
import { useTheme } from "../../ThemeContext"; // Import useTheme hook

const DarkThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme(); // Get theme state and toggle function

  return (
    <button onClick={toggleTheme} className="dark-theme-toggle">
      {isDarkTheme ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkThemeToggle;
