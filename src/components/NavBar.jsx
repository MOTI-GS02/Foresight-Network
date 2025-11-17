import { Link } from "react-router-dom";

export default function NavBar({
  isBrightMode = false,
  toggleMode = () => {},
}) {
  const handleProfilesClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("profiles");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", "#profiles");
    } else {
      // fallback: navigate to root then set hash (shouldn't be necessary in SPA)
      window.location.href = "/#profiles";
    }
  };
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4">
      <div className="text-xl font-bold text-indigo-400">Foresight</div>

      <div className="flex-1 flex justify-center space-x-6">
        <Link to="/" className="text-gray-200 hover:text-white">
          Início
        </Link>
        <a
          href="#profiles"
          onClick={handleProfilesClick}
          className="text-gray-200 hover:text-white cursor-pointer"
        >
          Perfis
        </a>
        <Link to="/contato" className="text-gray-200 hover:text-white">
          Contato
        </Link>
      </div>

      <div>
        <button
          onClick={toggleMode}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isBrightMode ? "Dark Mode" : "Bright Mode"}
        </button>
      </div>
    </nav>
  );
}
