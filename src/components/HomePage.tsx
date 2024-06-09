import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiData from "../data/api.json"; // Assuming the JSON data is stored in api.json

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<
    { name: string; link: string }[]
  >([]);

  useEffect(() => {
    const categoryList = Object.entries(apiData.Tools).map(
      ([categoryName, _]) => ({
        name: categoryName,
        link: `/categories/${categoryName.toLowerCase().replace(/\s+/g, "-")}`, // Convert category name to kebab case
      })
    );
    setCategories(categoryList);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-400 rounded px-4 py-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
      <div>
        <h2 className="text-2xl font-bold mb-2">Categories</h2>
        <div className="grid grid-cols-3 gap-4">
          {filteredCategories.map((category, index) => (
            <div key={index} className="border border-gray-300 rounded p-4">
              <Link
                to={category.link}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
