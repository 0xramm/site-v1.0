import spinner from "./assets/icons/spinner.gif";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <img src={spinner} className="w-[60px] h-[60px]" alt="Loading..." />
  </div>
);

export default LoadingSpinner;
