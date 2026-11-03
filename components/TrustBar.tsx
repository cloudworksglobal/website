"use client";

import React from "react";

const CLIENTS = [
  { name: "Emergencias Salud", metric: "+5.000 colaboradores" },
  { name: "310 Nutrition (USA)", metric: "+$40M ARR Shopify Plus" },
  { name: "Zurich Seguros", metric: "Arquitectura E-Commerce" },
  { name: "VIVA Telecom", metric: "eCommerce Award Winner" },
  { name: "ALAXS Marketplace", metric: "+14.000 Leads B2B" },
  { name: "Radio Mitre / Cienradios", metric: "WPO & High-Traffic" },
  { name: "ColorShop", metric: "CRO & Automation" }
];

export default function TrustBar() {
  return (
    <div className="w-full bg-[#020617] border-y border-slate-800/80 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center md:text-left">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500">
          Infraestructura y código validado en operaciones críticas
        </span>
      </div>
      <div className="flex overflow-x-auto no-scrollbar gap-8 max-w-7xl mx-auto px-6 py-2 items-center justify-between flex-wrap md:flex-nowrap">
        {CLIENTS.map((c) => (
          <div key={c.name} className="flex-shrink-0 text-left border-l border-slate-800/80 pl-4 py-1">
            <span className="text-sm font-bold text-slate-300 block font-mono">
              {c.name}
            </span>
            <span className="text-[11px] text-cyan-400 font-mono block mt-0.5">
              {c.metric}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
