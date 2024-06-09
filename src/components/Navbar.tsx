import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ccw.jpg";

const Navbar = () => {
  return (
    <nav className="w-full border-b-[1px] h-[70px] ">
      <div className="w-[90%] h-full mx-auto flex">
        <div className="logo flex justify-start items-center">
          <img src={logo} alt="" className="w-12 mr-2" />
          <h1 className="font-semibold text-[1.3rem]">
            <Link to="/" className=" text-lg font-semibold">
              TN CyberCrime Wing
            </Link>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
