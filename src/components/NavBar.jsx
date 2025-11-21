import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar({
  isBrightMode = false,
  toggleMode = () => {},
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProfilesClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("profiles");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    /* Container Principal Fixo */
    <div
      className={`fixed top-0 left-0 right-0 flex justify-center z-50 pointer-events-none transition-all duration-300 ${
        isScrolled
          ? isBrightMode
            ? "bg-white/80 backdrop-blur-md pb-6"
            : "bg-black/80 backdrop-blur-md pb-6"
          : ""
      }`}
    >
      {/* Container Responsivo */}
      <div className="w-full max-w-6xl px-4 sm:px-6 flex items-center justify-between relative pt-4 sm:pt-6">
        {/* 1. LOGO */}
        <div className="pointer-events-auto">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/foresight-logo.png"
              alt="Foresight Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            />
            <div className="text-lg sm:text-xl font-bold text-indigo-400 select-none tracking-tight">
              Foresight
            </div>
          </Link>
        </div>

        {/* 2. MENU CENTRAL - Escondido no mobile */}
        <nav
          className={`pointer-events-auto hidden md:flex items-center gap-6 lg:gap-8 px-6 lg:px-8 py-3 rounded-full border backdrop-blur-md transition-all duration-300 absolute left-1/2 -translate-x-1/2 ${
            isBrightMode
              ? "bg-white/80 border-white/50 shadow-sm text-gray-900"
              : "bg-gray-900/80 border-gray-700 shadow-lg text-gray-200"
          }`}
        >
          <Link
            to="/"
            className="hover:opacity-70 transition-opacity text-sm font-semibold"
          >
            Início
          </Link>

          <a
            href="#profiles"
            onClick={handleProfilesClick}
            className="hover:opacity-70 cursor-pointer transition-opacity text-sm font-semibold"
          >
            Perfis
          </a>

          <Link
            to="#contato"
            className="hover:opacity-70 transition-opacity text-sm font-semibold"
          >
            Contato
          </Link>
        </nav>

        {/* 3. THEME TOGGLE - Otimizado para mobile */}
        <button
          onClick={toggleMode}
          className={`pointer-events-auto relative w-12 h-6 sm:w-14 sm:h-7 rounded-full p-1 cursor-pointer transition-colors duration-200 touch-manipulation ${
            isBrightMode
              ? "bg-white/80 backdrop-blur shadow-sm"
              : "bg-gray-800/80 backdrop-blur shadow-sm"
          }`}
          aria-label={`Mudar para tema ${isBrightMode ? "escuro" : "claro"}`}
        >
          {/* Toggle knob */}
          <div
            className={`w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow-md flex items-center justify-center transform transition-transform duration-200 ${
              isBrightMode ? "translate-x-0" : "translate-x-6 sm:translate-x-7"
            }`}
          >
            {isBrightMode ? (
              <svg
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
