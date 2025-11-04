import { useState } from "react";
import { Menu, X } from "lucide-react"; // icônes
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#191a1f] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white flex items-center gap-2 hover:text-[#d4af37] transition">
          🍴 RestaurantApp
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-[#d4af37] font-medium">
          <a href="/" className="text-white hover:text-[#d4af37] transition">Accueil</a>
          <a href="/menu" className="text-white hover:text-[#d4af37] transition">Menu</a>
          <a href="/reservation" className="text-white hover:text-[#d4af37] transition">Réservation</a>
          <a href="/contact" className="text-white hover:text-[#d4af37] transition">Contact</a>
        </nav>

        {/* Boutons */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-white text-white rounded-lg hover:bg-[#d4af37] transition"
          >
            Connexion
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-[#d4af37] text-white border border-white rounded-lg shadow hover:bg-transparent transition"
          >
            S’inscrire
          </Link>
        </div>

        {/* Bouton burger (mobile) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
            <a href="/" className="hover:text-[#d4af37]">Accueil</a>
            <a href="/menu" className="hover:text-[#d4af37]">Menu</a>
            <a href="/reservation" className="hover:text-[#d4af37]">Réservation</a>
            <a href="/contact" className="hover:text-[#d4af37]">Contact</a>
            <Link
              to="/login"
              className="px-4 py-2 border border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-orange-50 transition text-center"
            >
              Connexion
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-[#d4af37] text-white rounded-lg shadow hover:bg-[#d4af37] transition text-center"
            >
              S’inscrire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
