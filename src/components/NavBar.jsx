import React, { useState, useEffect } from "react";
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
      window.location.href = "/#profiles";
    }
  };

  // States de cores
  const [brightTextColor, setBrightTextColor] = useState(() => {
    try {
      return localStorage.getItem("nav_bright_text_color") || "#1f2937";
    } catch (e) {
      return "#1f2937";
    }
  });
  const [darkTextColor, setDarkTextColor] = useState(() => {
    try {
      return localStorage.getItem("nav_dark_text_color") || "#e5e7eb";
    } catch (e) {
      return "#e5e7eb";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("nav_bright_text_color", brightTextColor);
    } catch (e) {}
  }, [brightTextColor]);

  useEffect(() => {
    try {
      localStorage.setItem("nav_dark_text_color", darkTextColor);
    } catch (e) {}
  }, [darkTextColor]);

  const textStyle = { color: isBrightMode ? brightTextColor : darkTextColor };

  // Estilo da cápsula do menu
  const capsuleClass = isBrightMode
    ? "bg-white/80 border-white/50 shadow-sm shadow-gray-200/50"
    : "bg-gray-900/80 border-gray-700 shadow-lg shadow-black/40";

  return (
    /* Container Principal Fixo */
    <div className="fixed top-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      {/* Container Limitador de Largura (max-w-6xl) */}
      <div className="w-full max-w-6xl px-6 flex items-center justify-between relative">
        {/* 1. LOGO (Com Imagem + Texto e Link para Home) */}
        <div className="pointer-events-auto">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/foresight-logo.png"
              alt="Foresight Logo"
              className="w-9 h-9 object-contain drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            />
            <div className="text-xl font-bold text-indigo-400 select-none tracking-tight">
              Foresight
            </div>
          </Link>
        </div>

        {/* 2. MENU CENTRAL (Cápsula - Absolute Center) */}
        <nav
          className={`pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-8 px-8 py-3 rounded-full border backdrop-blur-md transition-all duration-300 ${capsuleClass}`}
        >
          <Link
            to="/"
            className="hover:opacity-70 transition-opacity text-sm font-semibold"
            style={textStyle}
          >
            Início
          </Link>

          <a
            href="#profiles"
            onClick={handleProfilesClick}
            className="hover:opacity-70 cursor-pointer transition-opacity text-sm font-semibold"
            style={textStyle}
          >
            Perfis
          </a>

          <Link
            to="/contato"
            className="hover:opacity-70 transition-opacity text-sm font-semibold"
            style={textStyle}
          >
            Contato
          </Link>
        </nav>

        {/* 3. TOGGLE (Original w-28) */}
        <div className="pointer-events-auto">
          <div
            role="switch"
            aria-checked={isBrightMode}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleMode();
            }}
            onClick={toggleMode}
            className={`relative inline-flex items-center w-28 h-11 rounded-full p-1 cursor-pointer select-none transition-colors duration-200 ease-in-out border border-transparent hover:border-indigo-500/20
              ${
                isBrightMode
                  ? "bg-white/80 backdrop-blur shadow-sm"
                  : "bg-gray-800/80 backdrop-blur shadow-sm"
              }`}
          >
            <div className="flex items-center justify-between w-full px-2 text-xs">
              {/* sun icon (left) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isBrightMode ? "#31307c" : "#dadada"}
                strokeWidth="1.5"
                className="w-4 h-4"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  fill={isBrightMode ? "#3a1879" : "none"}
                />
                <path
                  d="M12 1v2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 21v2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.2 4.2l1.4 1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.4 18.4l1.4 1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 12h2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12h2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.2 19.8l1.4-1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.4 5.6l1.4-1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* moon icon (right) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isBrightMode ? "#444444" : "#2c2aa8"}
                strokeWidth="1.5"
                className="w-4 h-4"
              >
                <path
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Knob que se move */}
            <div
              className={`absolute top-1 left-1 w-9 h-9 rounded-full shadow-md bg-white flex items-center justify-center transform transition-transform duration-200 ease-in-out
                ${isBrightMode ? "translate-x-0" : "translate-x-16"}`}
            >
              {/* ícones dentro do knob */}
              {isBrightMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-indigo-400"
                  fill="none"
                  stroke="#ad87f5"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="3" fill="#693dd1" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-indigo-400"
                  fill="none"
                  stroke="#2c2aa8"
                  strokeWidth="1.5"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
