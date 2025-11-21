import ProfileCard from "./ProfileCard";
import SearchFilters from "./SearchFilters";

export default function ProfileGrid({
  isBrightMode,
  filteredProfiles,
  onFiltersChange,
  onProfileClick,
  loading = false,
  error = null,
}) {
  const textMain = isBrightMode ? "text-gray-900" : "text-white";
  const textSub = isBrightMode ? "text-gray-500" : "text-gray-400";

  return (
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
              Explore perfis verificados, filtrados por competências técnicas e
              comportamentais.
            </p>
          </div>
        </div>

        {/* FILTROS DE BUSCA */}
        <SearchFilters
          onFiltersChange={onFiltersChange}
          isBrightMode={isBrightMode}
        />

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            // Loading state - skeleton cards
            Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border animate-pulse ${
                  isBrightMode
                    ? "bg-white border-gray-200"
                    : "bg-gray-800/50 border-gray-700"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full mb-4 ${
                    isBrightMode ? "bg-gray-200" : "bg-gray-600"
                  }`}
                ></div>
                <div
                  className={`h-4 rounded mb-2 ${
                    isBrightMode ? "bg-gray-200" : "bg-gray-600"
                  }`}
                ></div>
                <div
                  className={`h-3 rounded mb-4 w-2/3 ${
                    isBrightMode ? "bg-gray-200" : "bg-gray-600"
                  }`}
                ></div>
                <div className="space-y-2">
                  <div
                    className={`h-2 rounded ${
                      isBrightMode ? "bg-gray-200" : "bg-gray-600"
                    }`}
                  ></div>
                  <div
                    className={`h-2 rounded w-4/5 ${
                      isBrightMode ? "bg-gray-200" : "bg-gray-600"
                    }`}
                  ></div>
                </div>
              </div>
            ))
          ) : error ? (
            // Error state
            <div className={`col-span-full text-center py-20 ${textSub}`}>
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Erro ao carregar perfis
              </h3>
              <p className="mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  isBrightMode
                    ? "bg-gray-900 text-white hover:bg-black"
                    : "bg-indigo-700 text-white hover:bg-indigo-600"
                }`}
              >
                Tentar Novamente
              </button>
            </div>
          ) : filteredProfiles && filteredProfiles.length > 0 ? (
            // Success state with profiles
            filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                data={profile}
                isBrightMode={isBrightMode}
                onClick={onProfileClick}
              />
            ))
          ) : (
            // No profiles found
            <div className={`col-span-full text-center py-20 ${textSub}`}>
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto mb-4 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Nenhum perfil encontrado
              </h3>
              <p>
                Tente ajustar os filtros de busca para encontrar mais
                resultados.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
