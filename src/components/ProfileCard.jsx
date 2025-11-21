import React from "react";

export default function ProfileCard({ data, onClick, isBrightMode }) {
  if (!data) return null;

  return (
    <div
      onClick={() => onClick && onClick(data)}
      className={`
        group relative w-full h-[280px] p-6 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between
        ${
          isBrightMode
            ? "bg-white/60 border-gray-200 hover:border-indigo-400 shadow-lg hover:shadow-indigo-200/50"
            : "bg-gray-900/40 border-white/10 hover:border-indigo-500/50 shadow-2xl hover:shadow-indigo-900/20"
        }
        backdrop-blur-md
      `}
    >
      {/* Glow de Fundo (Ambient Light) */}
      <div
        className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-[80px] transition-opacity duration-500 opacity-40 group-hover:opacity-80
        ${isBrightMode ? "bg-indigo-500" : "bg-indigo-600"}`}
      ></div>

      {/* Conteúdo Principal */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3
              className={`text-lg font-bold leading-tight ${
                isBrightMode ? "text-gray-900" : "text-white"
              }`}
            >
              {data.cargo || "Profissional"}
            </h3>
            <p
              className={`text-xs font-semibold mt-1 uppercase tracking-wider ${
                isBrightMode ? "text-indigo-600" : "text-indigo-400"
              }`}
            >
              {data.area || "Geral"}
            </p>
          </div>

          {/* Avatar com Fallback */}
          <img
            src={data.foto || "https://via.placeholder.com/150"}
            alt={data.nome}
            className={`w-12 h-12 rounded-full object-cover border-2 transition-colors ${
              isBrightMode
                ? "border-gray-200 group-hover:border-indigo-400"
                : "border-white/10 group-hover:border-indigo-700"
            }`}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150";
            }}
          />
        </div>

        {/* Tags de Skills (Limitado a 3) */}
        <div className="flex flex-wrap gap-2 content-start h-16 overflow-hidden">
          {data.habilidadesTecnicas?.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className={`text-[10px] px-2 py-1 rounded-md font-mono font-medium border
                ${
                  isBrightMode
                    ? "bg-gray-100 text-gray-700 border-gray-200"
                    : "bg-white/5 text-gray-300 border-white/5"
                }`}
            >
              {skill}
            </span>
          ))}
          {(data.habilidadesTecnicas?.length || 0) > 3 && (
            <span
              className={`text-[10px] px-2 py-1 rounded-md font-mono ${
                isBrightMode ? "text-gray-500" : "text-gray-500"
              }`}
            >
              +{data.habilidadesTecnicas.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Rodapé do Card */}
      <div
        className={`relative z-10 pt-4 border-t border-dashed flex items-end justify-between ${
          isBrightMode ? "border-gray-300" : "border-gray-700"
        }`}
      >
        <div>
          <p
            className={`text-[10px] opacity-60 uppercase font-bold tracking-widest mb-0.5 ${
              isBrightMode ? "text-gray-800" : "text-white"
            }`}
          >
            Experiência
          </p>
          <p
            className={`text-2xl font-bold ${
              isBrightMode ? "text-gray-800" : "text-white"
            }`}
          >
            {data.experiencias?.length || 0}{" "}
            <span className="text-sm font-normal opacity-60">cargos</span>
          </p>
        </div>

        {/* Ícone de Seta */}
        <div
          className={`p-2 rounded-full transition-colors duration-300 ${
            isBrightMode
              ? "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
              : "bg-white/5 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-black"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
