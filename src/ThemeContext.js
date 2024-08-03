
import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkTheme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("isDarkTheme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

   useEffect(() => {
     const elements = document.querySelectorAll(
       "body, section,.search__panel-01 , .job__list__wrapper, .details__wrapper"
     );
     elements.forEach((el) => {
       if (isDarkTheme) {
         el.classList.add("dark");
         el.classList.remove("light");
       } else {
         el.classList.add("light");
         el.classList.remove("dark");
       }
     });
   }, [isDarkTheme]);
  
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
