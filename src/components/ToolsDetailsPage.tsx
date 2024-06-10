import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
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
  Osint,
  FIRDownload,
} from "./ToolsData";
import Navbar from "./Navbar";

const ToolsDetailsPage = () => {
  const { categoryName, toolName } = useParams();

  let toolDetails = null;

  switch (categoryName) {
    case "network-scanners":
      toolDetails = NetworkScanners.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "sandboxing-tools":
      toolDetails = SandboxingTools.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "data-exfiltration-tools":
      toolDetails = DataExfiltrationTools.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "network-tools":
      toolDetails = NetworkTools.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "social-engineering-tools":
      toolDetails = SocialEngineeringTools.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "ddos-tools":
      toolDetails = DDoSTools.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "packet-sniffers":
      toolDetails = PacketSniffers.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "steganography-tools":
      toolDetails = SteganographyTools.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "encryption-tools":
      toolDetails = EncryptionTools.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "password-crackers":
      toolDetails = PasswordCrackers.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "threat-intelligence-platforms-(tip)":
      toolDetails = ThreatIntelligencePlatforms.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "forensic-tools":
      toolDetails = ForensicTools.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      console.log();
      break;
    case "phishing-tools":
      toolDetails = PhishingTools.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "vulnerability-scanners":
      toolDetails = VulnerabilityScanners.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "malware-analysis-tools":
      toolDetails = MalwareAnalysisTools.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "reverse-engineering-tools":
      toolDetails = ReverseEngineeringTools.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "web-application-scanners":
      toolDetails = WebApplicationScanners.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "osint-tools":
      toolDetails = Osint.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    case "fir-download":
      toolDetails = FIRDownload.find(
        (tool) => tool.Name.toLowerCase().replace(/\s+/g, "-") === toolName
      );
      break;
    default:
      // Handle invalid category
      break;
  }
  if (!toolDetails) {
    return (
      <div>No tool details found for the given category and tool name.</div>
    );
  }
  return (
    <>
      <Navbar />
      <Helmet>
        <title>
          {toolDetails.Name}- {categoryName}
        </title>
      </Helmet>
      <div className="container mx-auto p-4 flex flex-col items-center mt-[100px] gap-5">
        <h2 className="text-4xl font-bold mb-4 text-center">
          {toolDetails.Name}
        </h2>
        <img
          src={toolDetails.image}
          alt={toolDetails.Name}
          className="w-full md:w-[600px] h-auto rounded-xl mb-4"
        />
        <p className="text-gray-600 mb-4 text-center font-bold text-lg md:text-2xl">
          {toolDetails.Description}
        </p>
        <p className="text-[1rem] md:text-[1.3rem] text-gray-500 mt-2 text-center">
          <span className="font-bold">How To Use :</span> {toolDetails.HTU}
        </p>
        <p className="text-sm md:text-base italic text-gray-500 mt-2 text-center">
          Keywords: {toolDetails.keywords.join(", ")}
        </p>
        <p className="text-blue-500 underline font-medium text-lg md:text-2xl text-center">
          <a href={toolDetails.Link} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </p>
      </div>
    </>
  );
};

export default ToolsDetailsPage;
