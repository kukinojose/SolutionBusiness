import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutral text-neutral-content p-4 md:px-12 flex justify-between items-center shadow-md sticky top-0 z-50">
      <Link href="/">
        <a
          className="font-extrabold text-2xl tracking-wide cursor-pointer select-none"
          aria-label="Ir a la página principal"
        >
          solutionbusiness.ai
        </a>
      </Link>

      {/* Menú desktop */}
      <nav className="hidden md:flex items-center space-x-6" aria-label="Menú principal">
        <Link href="/">
          <a className="hover:text-primary font-semibold focus:outline focus:outline-2 focus:outline-primary rounded">
            Inicio
          </a>
        </Link>
        <Link href="/servicios">
          <a className="hover:text-primary font-semibold focus:outline focus:outline-2 focus:outline-primary rounded">
            Servicios
          </a>
        </Link>
        <Link href="/chatbot">
          <a className="hover:text-primary font-semibold focus:outline focus:outline-2 focus:outline-primary rounded">
            Chatbot
          </a>
        </Link>
        <Link href="/contacto">
          <a className="hover:text-primary font-semibold focus:outline focus:outline-2 focus:outline-primary rounded">
            Contacto
          </a>
        </Link>
        <ThemeToggle />
      </nav>

      {/* Botón menú móvil */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label="Alternar menú móvil"
        className="md:hidden btn btn-ghost btn-circle text-2xl"
      >
        {menuOpen ? '✖️' : '☰'}
      </button>

      {/* Menú móvil */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="absolute top-full right-0 bg-neutral text-neutral-content w-48 rounded shadow-lg mt-2 py-4 px-6 flex flex-col space-y-3 md:hidden"
          aria-label="Menú principal móvil"
        >
          <Link href="/">
            <a
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary font-semibold focus:outline focus:outline-2 focus:outline-primary rounded"
            >
              Inicio
            </a>
          </Link>
          <Link href="/servicios">
            <a
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary font-semibold focus:outline focus:outline-2 focus:outline-primary rounded"
            >
              Servicios
            </a>
          </Link>
          <Link href="/chatbot">
            <a
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary font-semibold focus:outline focus:outline-2 focus:outline-primary rounded"
            >
              Chatbot
            </a>
          </Link>
          <Link href="/contacto">
            <a
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary font-semibold focus:outline focus:outline-2 focus:outline-primary rounded"
            >
              Contacto
            </a>
          </Link>
          {/* Aquí también el toggle */}
          <ThemeToggle />
        </nav>
      )}
    </header>
  );
}
