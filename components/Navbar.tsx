"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800/80 transition-all font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO & STATUS BADGE EVERGREEN */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              CLOUDWORKS<span className="text-[#49c5b6]">.</span>
            </span>
          </Link>
          <div className="hidden sm:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM ACTIVE</span>
          </div>
        </div>

        {/* NAVEGACIÓN DESKTOP (FUENTES ALINEADAS) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a
            href="#configurador-servicios"
            className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
          >
            <span className="text-[#49c5b6] font-mono font-bold">//</span>
            <span>Servicios & Packs</span>
          </a>
          <Link href="/cases" className="hover:text-cyan-400 transition-colors">
            Casos de Éxito
          </Link>
          <Link href="/blog" className="hover:text-cyan-400 transition-colors">
            Knowledge Hub
          </Link>
        </div>

        {/* CTA PRINCIPAL */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://meetings.hubspot.com/apalmieri-paso"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide text-white bg-gradient-to-r from-[#0068ca] to-[#49c5b6] hover:opacity-95 transition-all shadow-lg shadow-cyan-500/10 font-sans"
          >
            <span>Agendar Consultoría</span>
            <span className="ml-1.5 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white p-2"
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#020617] border-b border-slate-800 px-6 py-6 space-y-4">
          <a
            href="#configurador-servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 text-sm py-2 hover:text-cyan-400 flex items-center space-x-1"
          >
            <span className="text-[#49c5b6] font-mono">//</span>
            <span>Servicios & Packs</span>
          </a>
          <Link
            href="/cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 text-sm py-2 hover:text-cyan-400"
          >
            Casos de Éxito
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 text-sm py-2 hover:text-cyan-400"
          >
            Knowledge Hub
          </Link>
          <div className="pt-4 border-t border-slate-800">
            <a
              href="https://meetings.hubspot.com/apalmieri-paso"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0068ca] to-[#49c5b6] font-sans"
            >
              Agendar Consultoría →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
