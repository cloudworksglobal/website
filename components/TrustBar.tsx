"use client";

import React from "react";

const STACK_TAGS = [
  "Python", "LangGraph", "FastAPI", "Node.js", "PHP / Laravel",
  "Next.js 15", "React", "Vue.js", "Tailwind CSS", "Shopify Plus", "HubSpot API", "n8n / Webhooks"
];

const CLIENTS = [
  { name: "Emergencias Salud", detail: "+5.000 usuarios" },
  { name: "310 Nutrition", detail: "+$40M ARR" },
  { name: "ALAXS B2B", detail: "58 países" },
  { name: "VIVA Telecom", detail: "eCommerce Award" },
  { name: "Zurich Seguros", detail: "E-Commerce" },
  { name: "Radio Mitre", detail: "High Traffic" }
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[#020617] border-y border-slate-800/80 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* LOGOS / MARCAS VALIDADAS */}
        <div className="mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 block mb-4 text-center md:text-left">
            // CLIENTES CORPORATIVOS & OPERACIONES CRÍTICAS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENTS.map((c) => (
              <div key={c.name} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/70 text-center md:text-left">
                <span className="text-xs font-bold text-slate-200 block font-mono">
                  {c.name}
                </span>
                <span className="text-[10px] text-cyan-400 font-mono block mt-0.5">
                  {c.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TAGS DE STACK TÉCNICO EN LÍNEA DISCRETA */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
            Stack & Protocolos:
          </span>
          <div className="flex flex-wrap gap-2">
            {STACK_TAGS.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
