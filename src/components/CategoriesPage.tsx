import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import apiData from "../data/api.json"; // Assuming api.json is in a 'data' folder
import Navbar from "./Navbar";
import Thunder from "../assets/icons/thunder.png";
import RarrowOutlined from "../assets/icons/right_arrow_rounded.png";

const CategoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const categoryNames = Object.keys(apiData.Tools);
    setCategories(categoryNames);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      <Navbar />
      <div className="container w-[90%] mx-auto p-4 flex flex-col items-center gap-10 mt-[50px]">
        <div className="head-info-card h-[40px] flex justify-center items-center p-3 gap-5 border-[1px] border-[#3c3c3c] rounded-3xl">
          <img className="w-[20px] h-[20px]" src={Thunder} alt="" />
          <strong className="font-normal text-[0.9rem]">
            Find the Perfect Tool For the best
          </strong>
          <img className="w-[20px] h-[20px]" src={RarrowOutlined} alt="" />
        </div>
        <h1 className=" w-[700px] text-5xl font-extrabold text-center">
          Find The Best Productivity Tools Effortlessly
        </h1>
        <div className=" flex justify-center items-center search-bar bg-[#191919] text-white w-[500px] h-[50px] rounded-full">
          <input
            type="text"
            placeholder="Search for Category or tool"
            value={searchQuery}
            onChange={handleSearchChange}
            className="outline-none px-4 py-2 w-[365px] rounded-full bg-inherit  h-[45px]"
          />
          <button className="bg-[#244CEA] w-[130px] h-[45px] py-[3px] px-[8px]   rounded-full">
            search
          </button>
        </div>
        <h3>
          Over 100+ Productivity tools in our Database reviewed and curated by
          keep Productive to help you find the Tools and Softwares
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {filteredCategories.map((category, index) => (
            <div key={index} className="border border-gray-300 rounded p-4">
              <Link
                to={`/categories/${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                {category}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
