import { useOutletContext } from "react-router-dom";
import logo from "/foresight-logo.png";
import ProfileCard from "../components/ProfileCard";

function Home() {
  const { isBrightMode } = useOutletContext();

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center py-12 px-4 gap-6 
    ${isBrightMode ? "bg-white" : "bg-black"}`}
    >
      {/* Large blurred gradient background (behind content) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-[700px] h-[700px] rounded-full bg-gradient-to-r from-indigo-400 via-blue-800 to-indigo-700
            ${
              isBrightMode
                ? "opacity-40 blur-[150px]"
                : "opacity-30 blur-[200px]"
            }`}
        />
      </div>

      <div className="flex flex-col items-center justify-center z-10">
        <img
          src={logo}
          alt="Foresight Logo"
          className="w-36 h-36 mb-4 drop-shadow-2xl"
        />
        <h1 className="text-indigo-300 text-shadow-white text-4xl font-bold">
          Welcome to Foresight
        </h1>
      </div>

      <div id="profiles" className="w-full max-w-3xl mt-12 z-10">
        <ProfileCard />
      </div>
    </div>
  );
}

export default Home;
