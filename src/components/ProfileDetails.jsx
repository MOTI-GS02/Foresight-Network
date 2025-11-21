import { toast } from "react-toastify";

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

  const handleRecommend = () => {
    toast.success(`${profile.nome} foi recomendado(a) com sucesso!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const handleSendMessage = () => {
    toast.info(`Enviando mensagem de email para ${profile.nome}!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      onClose: () => {
        window.location.href = `mailto:${profile.email}`;
      },
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={handleOverlayClick}
    >
      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row animate-fadeIn ${
          isBrightMode ? "bg-white" : "bg-[#0a0a0a]"
        }`}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-gray-500/10 transition-colors"
        >
          <svg
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

        {/* SIDEBAR ESQUERDA */}
        <div
          className={`md:w-1/3 p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r ${
            isBrightMode ? "border-gray-200" : "border-gray-800"
          }`}
        >
          <div className="mt-4 text-center">
            {/* Imagem do Perfil */}
            <div className="w-24 h-24 mx-auto mb-4">
              {profile.foto ? (
                <img
                  src={profile.foto}
                  alt={profile.nome}
                  className="w-full h-full rounded-full object-cover border-2 border-indigo-200"
                />
              ) : (
                <div
                  className={`w-full h-full rounded-full border-2 flex items-center justify-center ${
                    isBrightMode
                      ? "border-gray-200 bg-gray-100"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <svg
                    className={`w-12 h-12 ${
                      isBrightMode ? "text-gray-400" : "text-gray-500"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </div>
              )}
            </div>

            <h2
              className={`text-2xl font-bold mb-1 ${
                isBrightMode ? "text-gray-900" : "text-white"
              }`}
            >
              {profile.nome}
            </h2>
            <p
              className={`font-medium mb-2 ${
                isBrightMode ? "text-indigo-600" : "text-indigo-400"
              }`}
            >
              {profile.cargo}
            </p>

            <div className="flex items-center justify-center gap-1 opacity-70">
              <svg
                className={`w-4 h-4 ${
                  isBrightMode ? "text-gray-500" : "text-gray-400"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className={`text-sm ${
                  isBrightMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {profile.localizacao}
              </span>
            </div>
          </div>

          <div className="w-full mt-8 space-y-3">
            <button
              onClick={handleSendMessage}
              className={`w-full py-3 rounded-xl font-bold shadow-lg transition-all ${
                isBrightMode
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-indigo-500 hover:bg-indigo-400 text-black"
              }`}
            >
              Enviar Mensagem
            </button>
            <button
              onClick={handleRecommend}
              className={`w-full py-3 rounded-xl font-bold border transition-all ${
                isBrightMode
                  ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                  : "border-gray-700 text-white hover:bg-white/5"
              }`}
            >
              Recomendar
            </button>
          </div>

          {/* Soft Skills */}
          <div className="mt-8 w-full text-left">
            <p
              className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                isBrightMode ? "text-gray-500" : "text-gray-400"
              }`}
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

        {/* CONTEÚDO DIREITA */}
        <div className="md:w-2/3 p-8 overflow-y-auto">
          {/* Sobre */}
          <div className="mb-8">
            <h3
              className={`text-xl font-bold mb-3 ${
                isBrightMode ? "text-gray-900" : "text-white"
              }`}
            >
              Sobre
            </h3>
            <p
              className={`leading-relaxed ${
                isBrightMode ? "text-gray-600" : "text-gray-300"
              }`}
            >
              {profile.resumo}
            </p>
          </div>

          {/* Stack Tecnológica */}
          <div className="mb-8">
            <h3
              className={`text-xl font-bold mb-4 ${
                isBrightMode ? "text-gray-900" : "text-white"
              }`}
            >
              Stack Tecnológica
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.habilidadesTecnicas?.map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    isBrightMode
                      ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                      : "bg-indigo-900/30 text-indigo-300 border border-indigo-700"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Experiência */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                isBrightMode ? "text-gray-900" : "text-white"
              }`}
            >
              Experiência
            </h3>
            <div className="space-y-4">
              {profile.experiencias?.map((exp, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg border ${
                    isBrightMode
                      ? "bg-gray-50 border-gray-200"
                      : "bg-white/5 border-gray-700"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4
                      className={`font-bold ${
                        isBrightMode ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {exp.cargo}
                    </h4>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
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
                  <p
                    className={`text-sm ${
                      isBrightMode ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {exp.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
