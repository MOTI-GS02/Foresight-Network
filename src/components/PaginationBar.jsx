export default function PaginationBar({
  currentPage,
  totalPages,
  onPageChange,
  isBrightMode,
  totalItems,
  itemsPerPage,
}) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Info de resultados */}
      <div
        className={`text-sm ${
          isBrightMode ? "text-gray-600" : "text-gray-400"
        }`}
      >
        Mostrando <span className="font-semibold">{startItem}</span> a{" "}
        <span className="font-semibold">{endItem}</span> de{" "}
        <span className="font-semibold">{totalItems}</span> perfis
      </div>

      {/* Botões de paginação */}
      <div className="flex items-center gap-2">
        {/* Botão Anterior */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-lg font-medium transition-all ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-105"
          } ${
            isBrightMode
              ? "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
              : "bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Números das páginas */}
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`min-w-10 px-3 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
                currentPage === page
                  ? isBrightMode
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-indigo-500 text-black shadow-md shadow-indigo-500/30"
                  : isBrightMode
                  ? "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  : "bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Botão Próximo */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-lg font-medium transition-all ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-105"
          } ${
            isBrightMode
              ? "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
              : "bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
