import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileDetails";
import perfisData from "../perfis.json"; // Certifique-se que o caminho está correto!

function Home() {
  const { isBrightMode } = useOutletContext();
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Configurações de tema
  const bgClass = isBrightMode ? "bg-[#f8fafc]" : "bg-black";
  const textMain = isBrightMode ? "text-gray-900" : "text-white";
  const textSub = isBrightMode ? "text-gray-500" : "text-gray-400";

  // Gradiente do Texto Principal
  const gradientText = isBrightMode
    ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600"
    : "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500";

  const handleOpenProfile = (profile) => {
    setSelectedProfile(profile);
    document.body.style.overflow = "hidden"; // Trava o scroll da página
  };

  const handleCloseProfile = () => {
    setSelectedProfile(null);
    document.body.style.overflow = "auto"; // Destrava o scroll
  };

  return (
    <div
      className={`min-h-screen w-full relative overflow-x-hidden ${bgClass} transition-colors duration-500`}
    >
      {/* 1. Background Pattern Global */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none z-0"></div>

      {/* 2. HERO SECTION (Estilo Vertex AI) */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col lg:flex-row items-center z-10">
        {/* Texto (Esquerda) */}
        <div className="flex-1 text-center lg:text-left z-10">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border uppercase mb-6 ${
              isBrightMode
                ? "bg-white border-gray-200 text-indigo-600 shadow-sm"
                : "bg-white/5 border-white/10 text-indigo-400"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${
                isBrightMode ? "bg-indigo-500" : "bg-indigo-800"
              }`}
            ></span>
            Foresight Network
          </div>

          <h1
            className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] ${textMain}`}
          >
            Potencialize seu <br />
            <span className={gradientText}>Futuro Profissional</span>
          </h1>

          <p
            className={`text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed ${textSub}`}
          >
            Conecte-se com talentos validados através de uma interface
            inteligente. Elimine processos manuais e visualize métricas reais de
            performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#profiles"
              className={`px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-xl transform hover:-translate-y-1 transition-all ${
                isBrightMode
                  ? "bg-gray-900 text-white hover:bg-black"
                  : "bg-indigo-700 text-black hover:bg-indigo-500"
              }`}
            >
              EXPLORAR TALENTOS
            </a>
            <button
              className={`px-8 py-4 rounded-full font-bold text-sm tracking-wide border transition-all ${
                isBrightMode
                  ? "border-gray-300 text-gray-600 hover:border-gray-400"
                  : "border-white/20 text-white hover:bg-white/5"
              }`}
            >
              SAIBA MAIS
            </button>
          </div>
        </div>

        {/* Visual Abstrato (Direita - Cards Flutuantes) */}
        <div className="flex-1 relative w-full flex justify-center items-center mt-20 lg:mt-0 z-0">
          {/* Luz de fundo (Glow) */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[500px] rounded-full blur-[100px] opacity-30 animate-pulse ${
              isBrightMode ? "bg-indigo-400" : "bg-indigo-600"
            }`}
          ></div>

          {/* Mockup de Interface Flutuante */}
          <div className="relative grid grid-cols-2 gap-4 p-4 rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out">
            {/* Card Decorativo 1 */}
            <div
              className={`w-40 h-40 rounded-2xl backdrop-blur-xl border p-4 flex flex-col justify-between transform translate-y-8 shadow-2xl ${
                isBrightMode
                  ? "bg-white/70 border-white"
                  : "bg-gray-800/50 border-gray-700"
              }`}
            >
              {/* Ícone do Python */}
              <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center shadow-md border border-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 255"
                  className="w-5 h-5"
                >
                  {/* Cobra Azul (Parte Superior) */}
                  <path
                    fill="#3776AB"
                    d="M126.9 1.6c-60.4 0-71.5 26.3-71.5 26.3v29.2h62.1v8.8H30.3c-16.4 0-28.7 11.5-28.7 41.9 0 30.4 8.6 43.3 43.3 43.3h26.8v-37.4s-1.2-26.3 26.3-26.3h50.8c26.8 0 26.8-26.8 26.8-26.8V29s1.8-27.4-48.7-27.4zm-33.3 18.1c5.3 0 8.8 4.1 8.8 8.8s-4.1 8.8-8.8 8.8-8.8-4.1-8.8-8.8 3.5-8.8 8.8-8.8z"
                  />
                  {/* Cobra Amarela (Parte Inferior) */}
                  <path
                    fill="#FFD43B"
                    d="M129.3 253.7c60.4 0 71.5-26.3 71.5-26.3v-29.2h-62.1v-8.8h87.3c16.4 0 28.7-11.5 28.7-41.9 0-30.4-8.6-43.3-43.3-43.3h-26.8v37.4s1.2 26.3-26.3 26.3h-50.8c-26.8 0-26.8 26.8-26.8 26.8v31.5s-1.8 27.4 48.6 27.4zm33.3-18.1c-5.3 0-8.8-4.1-8.8-8.8s4.1-8.8 8.8-8.8 8.8 4.1 8.8 8.8-3.5 8.8-8.8 8.8z"
                  />
                </svg>
              </div>

              <div className="space-y-2">
                <div
                  className={`h-2 w-full rounded ${
                    isBrightMode ? "bg-gray-200" : "bg-gray-600"
                  }`}
                ></div>
                <div
                  className={`h-2 w-2/3 rounded ${
                    isBrightMode ? "bg-gray-200" : "bg-gray-600"
                  }`}
                ></div>
              </div>
            </div>
            {/* Card Decorativo 2 */}
            {/* Card Decorativo 2 (TypeScript) */}
            <div
              className={`w-40 h-40 rounded-2xl backdrop-blur-xl border p-4 flex flex-col justify-between transform -translate-y-4 shadow-2xl ${
                isBrightMode
                  ? "bg-white/70 border-white"
                  : "bg-gray-800/50 border-gray-700"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-500/30">
                TS
              </div>

              {/* Linhas invisíveis (Skeleton) adicionadas aqui */}
              <div className="space-y-2">
                <div
                  className={`h-2 w-full rounded ${
                    isBrightMode ? "bg-gray-200" : "bg-gray-600"
                  }`}
                ></div>
                <div
                  className={`h-2 w-2/3 rounded ${
                    isBrightMode ? "bg-gray-200" : "bg-gray-600"
                  }`}
                ></div>
              </div>
            </div>
            {/* Card Decorativo 3 */}
            <div
              className={`col-span-2 h-24 rounded-2xl backdrop-blur-xl border p-4 flex items-center gap-4 shadow-2xl ${
                isBrightMode
                  ? "bg-white/70 border-white"
                  : "bg-gray-800/50 border-gray-700"
              }`}
            >
              {/* Ícone do React */}
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-11.5 -10.23174 23 20.46348"
                  className="w-6 h-6 animate-[spin_10s_linear_infinite]"
                >
                  <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                  <g stroke="#61dafb" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </div>

              <div className="flex-1 space-y-2">
                <div
                  className={`h-2 w-full rounded ${
                    isBrightMode ? "bg-gray-200" : "bg-gray-600"
                  }`}
                ></div>
                <div
                  className={`h-2 w-1/2 rounded ${
                    isBrightMode ? "bg-gray-200" : "bg-gray-600"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROFILE GRID SECTION */}
      <section
        id="profiles"
        className="py-24 px-6 relative z-10 border-t border-b border-dashed border-gray-500/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textMain}`}>
                Rede de Profissionais
              </h2>
              <p className={`text-lg ${textSub}`}>
                Explore perfis verificados, filtrados por competências técnicas
                e comportamentais.
              </p>
            </div>
          </div>

          {/* GRID DE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {perfisData && perfisData.length > 0 ? (
              perfisData.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  data={profile}
                  isBrightMode={isBrightMode}
                  onClick={handleOpenProfile}
                />
              ))
            ) : (
              <div className={`col-span-full text-center py-20 ${textSub}`}>
                Nenhum perfil carregado. Verifique o arquivo JSON.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`py-12 text-center ${
          isBrightMode
            ? "bg-gray-100 text-gray-500"
            : "bg-[#050505] text-gray-600"
        }`}
      >
        <p className="text-sm">
          © 2025 Foresight Network. Designed for the Future of Work.
        </p>
      </footer>

      {/* MODAL */}
      <ProfileModal
        profile={selectedProfile}
        isOpen={!!selectedProfile}
        onClose={handleCloseProfile}
        isBrightMode={isBrightMode}
      />
    </div>
  );
}

export default Home;
