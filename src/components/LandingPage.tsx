import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import HeroImg from "../assets/HeroImg.svg";
import { Helmet } from "react-helmet";
import Rarrow from "../assets/icons/bxs-right-arrow-alt.svg";

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>TN Cyber Crime Tools</title>
      </Helmet>
      <Navbar /> {/* Include the Navbar component */}
      <section className="hero w-[80%] flex  flex-col mx-auto">
        <div className="main w-full md:h-[600px] md:flex md:flex-row flex flex-col-reverse items-start justify-center">
          <div className="hero-content w-[45%] flex flex-col items-start gap-8">
            <h1 className="text-[4rem] w-[700px] mt-[3rem] font-semibold leading-[90px]">
              100+ Essential Tools for Cybercrime Investigations
            </h1>
            <p className="text-[#867B7B] w-[400px] text-left font-medium">
              This comprehensive resource guide equips you with the tools and
              knowledge to become a professional investigator.
            </p>
            <div className="btn text-white">
              <Link
                to="/categories"
                className="bg-black text-white flex justify-center items-center  px-8 rounded-xl py-3 font-medium"
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
  );
};

export default LandingPage;

<Link
  to="/categories"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
  Explore Categories
</Link>;
