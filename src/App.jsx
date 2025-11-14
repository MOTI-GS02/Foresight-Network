import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
