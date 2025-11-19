import React from "react";

export default function ProfileModal({
  profile,
  isOpen,
  onClose,
  isBrightMode,
}) {
  if (!isOpen || !profile) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Classes Dinâmicas para Tema
  const bgMain = isBrightMode ? "bg-white" : "bg-[#0a0a0a]";
  const textPrimary = isBrightMode ? "text-gray-900" : "text-white";
  const textSecondary = isBrightMode ? "text-gray-500" : "text-gray-400";
  const borderClass = isBrightMode ? "border-gray-200" : "border-gray-800";
  const cardBg = isBrightMode ? "bg-gray-50" : "bg-white/5";
  const accentColor = isBrightMode ? "text-indigo-600" : "text-indigo-400";
  const btnPrimary = isBrightMode
    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200"
    : "bg-indigo-500 hover:bg-indigo-400 text-black shadow-indigo-900/20";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={handleOverlayClick}
    >
      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row animate-fadeIn ${bgMain}`}
      >
        {/* Botão Fechar (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-gray-500/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* SIDEBAR ESQUERDA (Perfil) */}
        <div
          className={`md:w-1/3 p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r ${borderClass} relative overflow-hidden`}
        >
          {/* Background Decorativo na Sidebar */}
          <div
            className={`absolute top-0 left-0 w-full h-32 opacity-20 ${
              isBrightMode
                ? "bg-gradient-to-b from-indigo-200"
                : "bg-gradient-to-b from-indigo-900"
            }`}
          ></div>

          <div className="relative z-10 mt-4 text-center">
            {/* Container da Imagem */}
            <div
              className={`w-32 h-32 rounded-full p-1 border-2 border-dashed mx-auto mb-4 flex items-center justify-center overflow-hidden ${
                isBrightMode ? "border-indigo-300" : "border-indigo-500/50"
              }`}
            >
              {profile.foto ? (
                <img
                  src={profile.foto}
                  alt={profile.nome}
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    const fillColor = isBrightMode ? "%239ca3af" : "%23ffffff";

                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${fillColor}' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E`;

                    // Ajustamos a opacidade para garantir brilho no dark mode
                    e.target.className = `w-20 h-20 ${
                      isBrightMode ? "opacity-60" : "opacity-100"
                    }`;
                  }}
                />
              ) : (
                // Fallback se não houver URL de foto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className={`w-20 h-20 ${
                    isBrightMode
                      ? "text-gray-400 opacity-60"
                      : "text-gray-200 opacity-100"
                  }`}
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              )}
            </div>

            <h2 className={`text-2xl font-bold ${textPrimary} mb-1`}>
              {profile.nome}
            </h2>
            <p className={`font-medium ${accentColor} mb-2`}>{profile.cargo}</p>

            <div className="flex items-center justify-center gap-1 opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-4 h-4 ${textSecondary}`}
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={`text-sm ${textSecondary}`}>
                {profile.localizacao}
              </span>
            </div>
          </div>

          <div className="w-full mt-8 space-y-3 relative z-10">
            <button
              onClick={() => alert("Mensagem enviada!")}
              className={`w-full py-3 rounded-xl font-bold shadow-lg transform active:scale-95 transition-all ${btnPrimary}`}
            >
              Enviar Mensagem
            </button>
            <button
              onClick={() => alert("Recomendado!")}
              className={`w-full py-3 rounded-xl font-bold border transition-all hover:bg-gray-100/5 ${
                isBrightMode
                  ? "border-gray-300 text-gray-700"
                  : "border-gray-700 text-white"
              }`}
            >
              Recomendar
            </button>
          </div>

          {/* Soft Skills Compactas */}
          <div className="mt-10 w-full text-left">
            <p
              className={`text-xs font-bold uppercase tracking-wider mb-3 ${textSecondary}`}
            >
              Soft Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.softSkills?.map((skill, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded border ${
                    isBrightMode
                      ? "bg-white border-gray-200 text-gray-600"
                      : "bg-white/5 border-white/10 text-gray-300"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CONTEÚDO DIREITA (Detalhes) */}
        <div className="md:w-2/3 p-8 md:p-10 overflow-y-auto">
          {/* Seção Sobre */}
          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-3 ${textPrimary}`}>Sobre</h3>
            <p
              className={`leading-relaxed text-sm md:text-base ${textSecondary}`}
            >
              {profile.resumo} Profissional focado em resultados, com histórico
              comprovado em {profile.area} e paixão por inovação tecnológica.
            </p>
          </div>

          {/* Seção Stack Tecnológica (Visual de Grid) */}
          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>
              Stack Tecnológica
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {profile.habilidadesTecnicas?.map((tech, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl border ${
                    isBrightMode
                      ? "bg-white border-gray-100 shadow-sm"
                      : "bg-white/5 border-white/5"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isBrightMode ? "bg-indigo-500" : "bg-blue-400"
                    }`}
                  ></div>
                  <span className={`font-mono text-sm ${textPrimary}`}>
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Seção Experiência (Timeline Simplificada) */}
          <div>
            <h3 className={`text-xl font-bold mb-5 ${textPrimary}`}>
              Histórico Profissional
            </h3>
            <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-800">
              {profile.experiencias?.map((exp, i) => (
                <div key={i} className="relative pl-8">
                  {/* Bolinha da Timeline */}
                  <div
                    className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
                      isBrightMode
                        ? "bg-white border-indigo-500"
                        : "bg-black border-indigo-500"
                    }`}
                  ></div>

                  <div className={`p-5 rounded-2xl ${cardBg}`}>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                      <h4 className={`font-bold text-lg ${textPrimary}`}>
                        {exp.cargo}
                      </h4>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide ${
                          isBrightMode
                            ? "bg-indigo-100 text-indigo-700"
                            : "bg-indigo-900/30 text-indigo-400"
                        }`}
                      >
                        {exp.inicio} - {exp.fim}
                      </span>
                    </div>
                    <p
                      className={`font-medium mb-2 ${
                        isBrightMode ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      {exp.empresa}
                    </p>
                    <p className={`text-sm ${textSecondary}`}>
                      {exp.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
