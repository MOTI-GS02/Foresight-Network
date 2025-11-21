import React, { useState } from "react";

export default function SearchFilters({ onFiltersChange, isBrightMode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isSkillOpen, setIsSkillOpen] = useState(false);
  const [isPositionOpen, setIsPositionOpen] = useState(false);

  // Lista de skills
  const skills = [
    "Python", "Node.js", "React", "HTML", "CSS", "JavaScript", "Java", "SQL", "Tailwind"
  ];

  // Lista de categorias de cargo
  const positions = [
    "Design", "Desenvolvimento", "Dados"
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onFiltersChange({ searchQuery: value, selectedSkill, selectedPosition });
  };

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
    setIsSkillOpen(false);
    onFiltersChange({ searchQuery, selectedSkill: skill, selectedPosition });
  };

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
    setIsPositionOpen(false);
    onFiltersChange({ searchQuery, selectedSkill, selectedPosition: position });
  };

  const clearSkill = () => {
    setSelectedSkill("");
    onFiltersChange({ searchQuery, selectedSkill: "", selectedPosition });
  };

  const clearPosition = () => {
    setSelectedPosition("");
    onFiltersChange({ searchQuery, selectedSkill, selectedPosition: "" });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      {/* Barra de Pesquisa */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Buscar por nome ou título..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={`w-full pl-12 pr-4 py-3 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            isBrightMode
              ? "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              : "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
          }`}
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Dropdown de Skills */}
      <div className="relative">
        <button
          onClick={() => setIsSkillOpen(!isSkillOpen)}
          className={`flex items-center justify-between w-48 px-4 py-3 rounded-full border transition-all duration-300 ${
            isBrightMode
              ? "bg-white border-gray-300 text-gray-900 hover:border-indigo-500"
              : "bg-gray-800 border-gray-600 text-white hover:border-indigo-500"
          }`}
        >
          <span className={selectedSkill ? (isBrightMode ? "text-gray-900" : "text-white") : (isBrightMode ? "text-gray-500" : "text-gray-400")}>
            {selectedSkill || "Filtrar por Skill"}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${isSkillOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {selectedSkill && (
          <button
            onClick={clearSkill}
            className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        {isSkillOpen && (
          <div className={`absolute z-10 mt-2 w-48 rounded-lg shadow-lg border ${
            isBrightMode ? "bg-white border-gray-300" : "bg-gray-800 border-gray-600"
          }`}>
            <div className="py-1 max-h-48 overflow-y-auto">
              {skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => handleSkillSelect(skill)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 hover:text-indigo-600 ${
                    isBrightMode ? "text-gray-900" : "text-white"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Dropdown de Cargo */}
      <div className="relative">
        <button
          onClick={() => setIsPositionOpen(!isPositionOpen)}
          className={`flex items-center justify-between w-48 px-4 py-3 rounded-full border transition-all duration-300 ${
            isBrightMode
              ? "bg-white border-gray-300 text-gray-900 hover:border-indigo-500"
              : "bg-gray-800 border-gray-600 text-white hover:border-indigo-500"
          }`}
        >
          <span className={selectedPosition ? (isBrightMode ? "text-gray-900" : "text-white") : (isBrightMode ? "text-gray-500" : "text-gray-400")}>
            {selectedPosition || "Filtrar por Cargo"}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${isPositionOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {selectedPosition && (
          <button
            onClick={clearPosition}
            className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        {isPositionOpen && (
          <div className={`absolute z-10 mt-2 w-48 rounded-lg shadow-lg border ${
            isBrightMode ? "bg-white border-gray-300" : "bg-gray-800 border-gray-600"
          }`}>
            <div className="py-1 max-h-48 overflow-y-auto">
              {positions.map((position) => (
                <button
                  key={position}
                  onClick={() => handlePositionSelect(position)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 hover:text-indigo-600 ${
                    isBrightMode ? "text-gray-900" : "text-white"
                  }`}
                >
                  {position}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
