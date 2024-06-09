import { useState, useEffect } from "react";
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className="container w-[90%] mx-auto p-4 flex flex-col items-center gap-[30px] mt-[105px]">
        <div className="head-info-card md:h-[40px] h-[35px] flex justify-center items-center p-3 gap-5 border-[1px] border-[#3c3c3c] rounded-3xl">
          <img className="w-[20px] h-[20px]" src={Thunder} alt="" />
          <strong className="md:font-normal w-full md:text-[0.9rem] text-[0.7rem] font-bold">
            Find the Perfect Tool For the best
          </strong>
          <img className="w-[20px] h-[20px]" src={RarrowOutlined} alt="" />
        </div>
        <h1 className=" md:w-[700px] w-full md:text-5xl text-3xl font-extrabold text-center md:leading-[70px] ">
          Find The Best Productivity Tools Effortlessly
        </h1>
        <div className=" flex justify-center items-center search-bar bg-[#191919] text-white md:w-[500px] w-[350px] h-[50px] rounded-full">
          <input
            type="text"
            placeholder="Search for Category or tool"
            value={searchQuery}
            onChange={handleSearchChange}
            className="outline-none px-4 py-2 md:w-[365px] w-[255px] rounded-full bg-inherit  h-[45px]"
          />
          <button className="bg-[#244CEA] md:w-[130px] w-[90px] h-[45px] py-[3px] px-[8px]   rounded-full">
            search
          </button>
        </div>
        <h3 className="text-base sm:text-[1.1rem] text-gray-700 text-center w-full max-w-[570px] mt-4">
          Over 100+ Productivity tools in our Database reviewed and curated by
          keep Productive to help you find the Tools and Softwares
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-6">
          {filteredCategories.map((category, index) => (
            <Link
              key={index}
              to={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              <div className="h-[150px] sm:h-[200px] md:h-[250px] w-full sm:w-auto border border-gray-300 rounded p-4 flex items-end text-xl sm:text-2xl md:text-3xl bg-white shadow-md hover:shadow-lg transition-shadow">
                {category}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
