export default function Footer({ isBrightMode }) {
  return (
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
  );
}
