// App.js
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import JobLists from "./components/Jobs/JobLists";
import JobDetails from "./components/Job-details/JobDetails";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/jobs" />} />
          <Route path="/jobs" element={<JobLists />} />
          <Route path="/jobs/:position" element={<JobDetails />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
