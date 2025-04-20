"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/cloudworks ms-icon-310x310.png" alt="Cloudworks Logo" width={40} height={40} />
          <span className="text-xl font-extrabold text-[#0068ca] font-montserrat">Cloudworks</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold font-lato">
          <Link href="/services" className="text-[#0068ca] hover:text-[#0050a3] hover:underline transition-all">
            Servicios
          </Link>
          <Link href="/cases" className="text-[#0068ca] hover:text-[#0050a3] hover:underline transition-all">
            Casos de Éxito
          </Link>
          <Link href="/blog" className="text-[#0068ca] hover:text-[#0050a3] hover:underline transition-all">
            Blog
          </Link>
          <Link href="https://meetings.hubspot.com/apalmieri-paso" className="text-[#0068ca] hover:text-[#0050a3] hover:underline transition-all">
            Contacto
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#0068ca] focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 flex flex-col space-y-4 text-sm font-semibold font-lato">
          <Link href="/services" className="text-[#0068ca] hover:text-[#0050a3] hover:underline transition-all" onClick={() => setMenuOpen(false)}>
            Servicios
          </Link>
          <Link href="/cases" className="text-[#0068ca] hover:text-[#0050a3] hover:underline transition-all" onClick={() => setMenuOpen(false)}>
            Casos de Éxito
          </Link>
          <Link href="/blog" className="text-[#0068ca] hover:text-[#0050a3] hover:underline transition-all" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="https://meetings.hubspot.com/apalmieri-paso" className="text-[#0068ca] hover:text-[#0050a3] hover:underline transition-all" onClick={() => setMenuOpen(false)}>
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
