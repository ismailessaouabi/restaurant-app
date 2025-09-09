import { useState } from "react";
import { Menu, X } from "lucide-react"; // icônes

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-orange-600 flex items-center gap-2">
          🍴 RestaurantApp
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-orange-600 transition">Accueil</a>
          <a href="/menu" className="hover:text-orange-600 transition">Menu</a>
          <a href="/reservation" className="hover:text-orange-600 transition">Réservation</a>
          <a href="/contact" className="hover:text-orange-600 transition">Contact</a>
        </nav>

        {/* Boutons */}
        <div className="hidden md:flex gap-4">
          <a
            href="/login"
            className="px-4 py-2 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition"
          >
            Connexion
          </a>
          <a
            href="/register"
            className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
          >
            S’inscrire
          </a>
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
            <a href="/" className="hover:text-orange-600">Accueil</a>
            <a href="/menu" className="hover:text-orange-600">Menu</a>
            <a href="/reservation" className="hover:text-orange-600">Réservation</a>
            <a href="/contact" className="hover:text-orange-600">Contact</a>
            <a
              href="/login"
              className="px-4 py-2 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition text-center"
            >
              Connexion
            </a>
            <a
              href="/register"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition text-center"
            >
              S’inscrire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
