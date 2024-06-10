import { Link } from "react-router-dom";
import logo from "../assets/ccw.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-white border-b-[1px] z-50 shadow-lg">
      <div className="w-[90%] h-full mx-auto flex">
        <div className="logo flex justify-start items-center">
          <img src={logo} alt="Logo" className="w-12 mr-2" />
          <h1 className="font-semibold text-[1.3rem]">
            <Link to="/" className="text-lg font-semibold">
              TN CyberCrime Wing
            </Link>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
