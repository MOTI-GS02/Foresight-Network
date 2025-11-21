import { useState, useMemo, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ProfileGrid from "../components/ProfileGrid";
import Footer from "../components/Footer";
import ProfileModal from "../components/ProfileDetails";

function Home() {
  const { isBrightMode } = useOutletContext();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    searchQuery: "",
    selectedSkill: "",
    selectedPosition: "",
  });

  // Fetch dos perfis
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/perfis.json");

        const jsonData = await response.json();
        const profiles = jsonData.perfis;

        setData(profiles);
      } catch (error) {
        console.error("Erro ao carregar perfis:", error);
        setError(error.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  // Configurações de tema
  const bgClass = isBrightMode ? "bg-[#f8fafc]" : "bg-black";

  const handleOpenProfile = (profile) => {
    setSelectedProfile(profile);
    document.body.style.overflow = "hidden";
  };

  const handleCloseProfile = () => {
    setSelectedProfile(null);
    document.body.style.overflow = "auto";
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Filtrar perfis
  const filteredProfiles = useMemo(() => {
    if (!data || data.length === 0) return [];

    return data.filter((profile) => {
      const matchesSearch =
        filters.searchQuery === "" ||
        profile.nome
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) ||
        profile.cargo.toLowerCase().includes(filters.searchQuery.toLowerCase());

      const matchesSkill =
        filters.selectedSkill === "" ||
        profile.habilidadesTecnicas?.includes(filters.selectedSkill);

      const matchesPosition =
        filters.selectedPosition === "" ||
        profile.area === filters.selectedPosition;

      return matchesSearch && matchesSkill && matchesPosition;
    });
  }, [filters, data]);

  return (
    <div
      className={`min-h-screen w-full relative overflow-x-hidden ${bgClass} transition-colors duration-500`}
    >
      {/* Background Pattern Global */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none z-0"></div>

      {/* HERO SECTION */}
      <HeroSection isBrightMode={isBrightMode} />

      {/* PROFILE GRID SECTION */}
      <ProfileGrid
        isBrightMode={isBrightMode}
        filteredProfiles={filteredProfiles}
        onFiltersChange={handleFiltersChange}
        onProfileClick={handleOpenProfile}
        loading={loading}
        error={error}
      />

      {/* FOOTER */}
      <Footer isBrightMode={isBrightMode} />

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
