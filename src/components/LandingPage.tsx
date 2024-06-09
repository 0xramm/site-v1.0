import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import HeroImg from "../assets/HeroImg.svg";
import { Helmet } from "react-helmet";
import Rarrow from "../assets/icons/bxs-right-arrow-alt.svg";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>TN Cyber Crime Tools</title>
      </Helmet>
      <div className="flex flex-col justify-between">
        <Navbar /> {/* Include the Navbar component */}
        <section className="hero md:w-[80%] w-[90%]  md:flex  md:flex-col justify-center items-center mx-auto md:mt-[120px] mt-[150px]">
          <div className="main w-full md:h-[600px] h-[500px] md:flex md:flex-row flex flex-col-reverse items-start justify-center">
            <div className="hero-content md:w-[45%] w-[100%] flex flex-col md:items-start items-center md:gap-8 gap-4">
              <h1 className="md:text-[4rem] text-[1.3rem] text-center md:text-left md:w-[700px] w-[100%] mt-[3rem] font-semibold md:leading-[90px]">
                100+ Essential Tools for Cybercrime Investigations
              </h1>
              <p className="text-[#867B7B] md:w-[400px] w-full md:text-left text-center font-medium">
                This comprehensive resource guide equips you with the tools and
                knowledge to become a professional investigator.
              </p>
              <div className="btn text-white">
                <Link
                  to="/categories"
                  className="bg-black text-white flex justify-center items-center  px-8 rounded-xl py-3 font-medium mb-4"
                >
                  Explore <img src={Rarrow} className="ml-1" alt="" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:w-[45%] mt-[3rem]">
              <img className="w-[350px] md:w-[550px]" src={HeroImg} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
