import React from "react";
import DarkThemeToggle from "../Dark/DarkThemeToggle";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>DevJobs</h1>
        <DarkThemeToggle />
      </div>
    </header>
  );
};

export default Header;
