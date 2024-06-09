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
      <div className="w-[90%] m-auto">
        <h2 className="text-2xl font-bold mb-4">{categoryName}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <Link
              key={index}
              to={`/categories/${categoryName}/${tool.Name.toLowerCase().replace(
                /\s+/g,
                "-"
              )}`}
            >
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={tool.image}
                  alt={tool.Name}
                  className="w-full h-[200px] object-cover"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{tool.Name}</h3>
                  <p className="mt-2 text-gray-600">{tool.Description}</p>
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
