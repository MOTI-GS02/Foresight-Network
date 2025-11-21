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
          <div className="mb-8">
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

          {/* Formação */}
          {profile.formacao && profile.formacao.length > 0 && (
            <div className="mb-8">
              <h3
                className={`text-xl font-bold mb-4 ${
                  isBrightMode ? "text-gray-900" : "text-white"
                }`}
              >
                Formação
              </h3>
              <div className="space-y-3">
                {profile.formacao.map((form, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-lg border ${
                      isBrightMode
                        ? "bg-gray-50 border-gray-200"
                        : "bg-white/5 border-gray-700"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4
                        className={`font-bold ${
                          isBrightMode ? "text-gray-900" : "text-white"
                        }`}
                      >
                        {form.curso}
                      </h4>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          isBrightMode
                            ? "bg-green-100 text-green-700"
                            : "bg-green-900/30 text-green-400"
                        }`}
                      >
                        {form.ano}
                      </span>
                    </div>
                    <p
                      className={`text-sm ${
                        isBrightMode ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {form.instituicao}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projetos */}
          {profile.projetos && profile.projetos.length > 0 && (
            <div className="mb-8">
              <h3
                className={`text-xl font-bold mb-4 ${
                  isBrightMode ? "text-gray-900" : "text-white"
                }`}
              >
                Projetos
              </h3>
              <div className="space-y-4">
                {profile.projetos.map((projeto, i) => (
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
                        {projeto.titulo}
                      </h4>
                      {projeto.link && (
                        <a
                          href={projeto.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs px-2 py-1 rounded hover:scale-105 transition-transform ${
                            isBrightMode
                              ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                              : "bg-blue-900/30 text-blue-400 hover:bg-blue-800/40"
                          }`}
                        >
                          <svg
                            className="w-3 h-3 inline mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Ver
                        </a>
                      )}
                    </div>
                    <p
                      className={`text-sm ${
                        isBrightMode ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {projeto.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificações */}
          {profile.certificacoes && profile.certificacoes.length > 0 && (
            <div className="mb-8">
              <h3
                className={`text-xl font-bold mb-4 ${
                  isBrightMode ? "text-gray-900" : "text-white"
                }`}
              >
                Certificações
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.certificacoes.map((cert, i) => (
                  <span
                    key={i}
                    className={`px-3 py-2 rounded-lg text-sm font-medium border ${
                      isBrightMode
                        ? "bg-amber-50 text-amber-700 border-amber-200"
                        : "bg-amber-900/30 text-amber-300 border-amber-700"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 inline mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Idiomas e Áreas de Interesse - Grid responsivo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Idiomas */}
            {profile.idiomas && profile.idiomas.length > 0 && (
              <div>
                <h3
                  className={`text-xl font-bold mb-4 ${
                    isBrightMode ? "text-gray-900" : "text-white"
                  }`}
                >
                  Idiomas
                </h3>
                <div className="space-y-3">
                  {profile.idiomas.map((idioma, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border ${
                        isBrightMode
                          ? "bg-gray-50 border-gray-200"
                          : "bg-white/5 border-gray-700"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className={`font-medium ${
                            isBrightMode ? "text-gray-900" : "text-white"
                          }`}
                        >
                          {idioma.idioma}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            idioma.nivel === "Fluente" ||
                            idioma.nivel === "Avançado"
                              ? isBrightMode
                                ? "bg-green-100 text-green-700"
                                : "bg-green-900/30 text-green-400"
                              : idioma.nivel === "Intermediário"
                              ? isBrightMode
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-yellow-900/30 text-yellow-400"
                              : isBrightMode
                              ? "bg-gray-100 text-gray-700"
                              : "bg-gray-700 text-gray-400"
                          }`}
                        >
                          {idioma.nivel}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Áreas de Interesse */}
            {profile.areaInteresses && profile.areaInteresses.length > 0 && (
              <div>
                <h3
                  className={`text-xl font-bold mb-4 ${
                    isBrightMode ? "text-gray-900" : "text-white"
                  }`}
                >
                  Áreas de Interesse
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.areaInteresses.map((area, i) => (
                    <span
                      key={i}
                      className={`px-3 py-2 rounded-lg text-sm font-medium ${
                        isBrightMode
                          ? "bg-purple-50 text-purple-700 border border-purple-200"
                          : "bg-purple-900/30 text-purple-300 border border-purple-700"
                      }`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
