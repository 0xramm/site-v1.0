// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CategoriesPage from "./components/CategoriesPage";
import CategoryToolsPage from "./components/CategoryToolsPage"; // Make sure to import the correct component
import ToolDetailsPage from "./components/ToolsDetailsPage";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner"; // Ensure the file path is correct

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulating a delay to show the spinner for demonstration
    }, 3000); // Change the delay time as per your requirement

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route
            path="/categories/:categoryName"
            element={<CategoryToolsPage />}
          />{" "}
          {/* Use the correct component */}
          <Route
            path="/categories/:categoryName/:toolName"
            element={<ToolDetailsPage />}
          />
        </Routes>
      )}
    </Router>
  );
};

export default App;
