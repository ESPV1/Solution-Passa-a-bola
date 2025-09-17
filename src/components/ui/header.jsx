import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Navigation from "./navigation";
import AuthButtons from "./auth-buttons";
import UserDropdown from "./user-dropdown";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-rose-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-rose-200 transition-colors"
        >
          Passa a Bola
        </Link>

        <nav className="hidden md:flex flex-1 justify-center">
          <Navigation />
        </nav>

        {/* autenticação */}
        <div className="hidden md:flex items-center gap-4">
          {!isAuthenticated() ? <AuthButtons /> : <UserDropdown />}
        </div>

        {/* botão de menu mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* dropdown mobile */}
      {isOpen && (
        <div className="md:hidden bg-rose-600 px-6 py-4 space-y-6 animate-slide-down">
          <Navigation orientation="vertical" />
          <div className="border-t border-rose-400 pt-4">
            {!isAuthenticated() ? <AuthButtons /> : <UserDropdown />}
          </div>
        </div>
      )}
    </header>
  );
}
