// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CategoriesPage from "./components/CategoriesPage";
import CategoryToolsPage from "./components/CategoryToolsPage"; // Make sure to import the correct component
import ToolDetailsPage from "./components/ToolsDetailsPage";

const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
