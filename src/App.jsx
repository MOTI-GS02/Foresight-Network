import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";

export default function App() {
  const [isBrightMode, setIsBrightMode] = useState(false);

  const toggleMode = () => setIsBrightMode((s) => !s);

  return (
    <div className={`min-h-screen ${isBrightMode ? "bg-white" : "bg-black"}`}>
      <Navbar isBrightMode={isBrightMode} toggleMode={toggleMode} />
      <main>
        <Outlet context={{ isBrightMode }} />
      </main>
    </div>
  );
}
