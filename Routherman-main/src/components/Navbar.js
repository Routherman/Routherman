"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.3)] transform rotate-45 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300">
            <span className="text-white font-bold text-xs transform -rotate-85 font-mono text-purple-400 select-none">
              &lt;/&gt;
            </span>
          </div>
          <span className="font-bold text-xl tracking-tighter text-white group-hover:text-purple-100 transition-colors">
            Routherman Space
          </span>
        </Link>

        {/* ENLACES (Escritorio) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/servicios/web" className="hover:text-white transition-colors hover:scale-105 transform">
            Desarrollo Web
          </Link>
          <Link href="/servicios/software" className="hover:text-white transition-colors hover:scale-105 transform">
            Software
          </Link>
          <Link href="/soluciones" className="hover:text-white transition-colors hover:scale-105 transform">
            Soluciones
          </Link>
          <Link href="/novedades" className="hover:text-white transition-colors hover:scale-105 transform">
            Novedades
          </Link>
        </div>

        {/* BOTÓN CTA & MENU */}
        <div className="flex items-center gap-4">

          <Link
            href="/contacto"
            className="hidden md:block bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all"
          >
            Contáctanos
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0A0A] absolute w-full left-0 top-20 shadow-2xl animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-6 gap-4">
            <MobileLink href="/servicios/web" onClick={toggleMenu}>Desarrollo Web</MobileLink>
            <MobileLink href="/servicios/software" onClick={toggleMenu}>Software Factory</MobileLink>
            <MobileLink href="/soluciones" onClick={toggleMenu}>Soluciones</MobileLink>
            <MobileLink href="/novedades" onClick={toggleMenu}>Novedades</MobileLink>
            <MobileLink href="/contacto" onClick={toggleMenu}>Contacto</MobileLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-lg font-medium text-gray-300 hover:text-purple-400 hover:pl-2 transition-all block"
    >
      {children}
    </Link>
  )
}