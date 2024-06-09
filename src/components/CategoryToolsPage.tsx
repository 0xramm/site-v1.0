import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import {
  NetworkScanners,
  SandboxingTools,
  DataExfiltrationTools,
  NetworkTools,
  SocialEngineeringTools,
  DDoSTools,
  PacketSniffers,
  SteganographyTools,
  EncryptionTools,
  PasswordCrackers,
  ThreatIntelligencePlatforms,
  ForensicTools,
  PhishingTools,
  VulnerabilityScanners,
  MalwareAnalysisTools,
  ReverseEngineeringTools,
  WebApplicationScanners,
} from "../components/ToolsData";
import Navbar from "./Navbar";

const gradientClasses = [
  "bg-gradient-to-r from-slate-500 to-slate-800",
  "bg-gradient-to-r from-emerald-500 to-emerald-900",
  "bg-gradient-to-r from-blue-800 to-indigo-900",
  "bg-gradient-to-r from-violet-600 to-indigo-600",
  "bg-gradient-to-r from-blue-600 to-violet-600",
  "bg-gradient-to-r from-indigo-500 to-blue-500",
  "bg-gradient-to-r from-fuchsia-500 to-cyan-500",
  "bg-gradient-to-r from-fuchsia-600 to-purple-600",
  "bg-gradient-to-r from-slate-900 to-slate-700",
  "bg-gradient-to-r from-red-500 to-orange-500",
  "bg-gradient-to-r from-rose-400 to-red-500",
  "bg-gradient-to-r from-fuchsia-600 to-pink-600",
];

const getRandomGradient = () => {
  return gradientClasses[Math.floor(Math.random() * gradientClasses.length)];
};

const CategoryToolsPage = () => {
  const { categoryName } = useParams();
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        let categoryData = [];
        switch (categoryName) {
          case "network-scanners":
            categoryData = NetworkScanners;
            break;
          case "sandboxing-tools":
            categoryData = SandboxingTools;
            break;
          case "data-exfiltration-tools":
            categoryData = DataExfiltrationTools;
            break;
          case "network-tools":
            categoryData = NetworkTools;
            break;
          case "social-engineering-tools":
            categoryData = SocialEngineeringTools;
            break;
          case "ddos-tools":
            categoryData = DDoSTools;
            break;
          case "packet-sniffers":
            categoryData = PacketSniffers;
            break;
          case "steganography-tools":
            categoryData = SteganographyTools;
            break;
          case "encryption-tools":
            categoryData = EncryptionTools;
            break;
          case "password-crackers":
            categoryData = PasswordCrackers;
            break;
          case "threat-intelligence-platforms-(tip)":
            categoryData = ThreatIntelligencePlatforms;
            break;
          case "forensic-tools":
            categoryData = ForensicTools;
            break;
          case "phishing-tools":
            categoryData = PhishingTools;
            break;
          case "vulnerability-scanners":
            categoryData = VulnerabilityScanners;
            break;
          case "malware-analysis-tools":
            categoryData = MalwareAnalysisTools;
            break;
          case "reverse-engineering-tools":
            categoryData = ReverseEngineeringTools;
            break;
          case "web-application-scanners":
            categoryData = WebApplicationScanners;
            break;
          default:
            throw new Error("Category not found");
        }
        setTools(categoryData);
      } catch (error) {
        console.error("Error fetching tools:", error);
      }
    };
    fetchTools();
  }, [categoryName]);

  return (
    <>
      <Helmet>
        <title>{categoryName}</title>
      </Helmet>
      <Navbar />
      <div className="w-[90%] m-auto mt-[100px]">
        <div
          className={`box md:rounded-[40px] rounded-2xl md:h-[400px] h-[250px] flex justify-center items-center text-white mb-8 ${getRandomGradient()}`}
        >
          <h2 className="md:text-5xl text-2xl font-bold mb-4 text-center">
            TOP {tools.length} {categoryName.replace(/-/g, " ").toUpperCase()}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-[40px]">
          {tools.map((tool, index) => (
            <Link
              key={index}
              to={`/categories/${categoryName}/${tool.Name.toLowerCase().replace(
                /\s+/g,
                "-"
              )}`}
            >
              <div className="bg-white rounded-xl shadow-xl h-full flex flex-col justify-between">
                <img
                  src={tool.image}
                  alt={tool.Name}
                  className="w-full h-[200px] md:h-[230px] rounded-t-xl bg-cover object-cover"
                />
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold">{tool.Name}</h3>
                  <p className="my-3 text-gray-600 line-clamp-3">
                    {tool.Description}
                  </p>
                  <div className="keywords inline-flex flex-wrap gap-2 mt-auto">
                    {tool.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryToolsPage;
