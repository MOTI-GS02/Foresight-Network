export default function Footer({ isBrightMode }) {
  const bgClass = isBrightMode ? "bg-gray-100" : "bg-[#050505]";
  const textMain = isBrightMode ? "text-gray-800" : "text-gray-200";
  const textSub = isBrightMode ? "text-gray-600" : "text-gray-400";
  const textMuted = isBrightMode ? "text-gray-500" : "text-gray-500";

  return (
    <footer className={`py-16 ${bgClass}`} id="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Sobre o Projeto */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${textMain}`}>
              Sobre o Projeto
            </h3>
            <p className={`text-sm mb-4 ${textSub} leading-relaxed`}>
              Foresight Network é uma plataforma inovadora que conecta
              profissionais talentosos com oportunidades futuras. Exploramos
              competências técnicas e comportamentais para construir o futuro do
              trabalho.
            </p>
            <p className={`text-sm ${textSub}`}>
              Desenvolvido com React, Vite e Tailwind CSS.
            </p>
          </div>

          {/* Contatos */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${textMain}`}>
              Contatos
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg
                  className={`w-4 h-4 ${textSub}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className={`text-sm ${textSub}`}>
                  contato@foresight.network
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className={`w-4 h-4 ${textSub}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className={`text-sm ${textSub}`}>+55 (11) 9999-9999</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className={`w-4 h-4 ${textSub}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className={`text-sm ${textSub}`}>
                  São Paulo, SP - Brasil
                </span>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${textMain}`}>
              Links Úteis
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className={`block text-sm ${textSub} hover:${textMain} transition-colors`}
              >
                Como funciona
              </a>
              <a
                href="#"
                className={`block text-sm ${textSub} hover:${textMain} transition-colors`}
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className={`block text-sm ${textSub} hover:${textMain} transition-colors`}
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className={`block text-sm ${textSub} hover:${textMain} transition-colors`}
              >
                Suporte
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div
          className={`pt-8 border-t ${
            isBrightMode ? "border-gray-300" : "border-gray-700"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className={`text-sm ${textMuted}`}>
              © 2025 Foresight Network. Designed for the Future of Work.
            </p>

            {/* Redes sociais */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className={`${textSub} hover:${textMain} transition-colors`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className={`${textSub} hover:${textMain} transition-colors`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
