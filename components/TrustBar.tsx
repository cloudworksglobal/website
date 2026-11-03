"use client";

import React from "react";

const STACK_TAGS = [
  { name: "Python", category: "Data & Scraping" },
  { name: "LangGraph", category: "AI Multi-Agent Logic" },
  { name: "Node.js", category: "API Gateways" },
  { name: "PHP / Laravel", category: "Backend Robustness" },
  { name: "Vue.js", category: "Dynamic Frontend" },
  { name: "Tailwind CSS", category: "Zero-Bloat UI" },
  { name: "Next.js 15", category: "SSR & Edge Speed" },
  { name: "HubSpot API", category: "RevOps & Lead Scoring" },
  { name: "Shopify Plus", category: "Headless GraphQL" },
  { name: "n8n / Webhooks", category: "Event Orchestration" }
];

const VALIDATED_CLIENTS = [
  { name: "Emergencias Salud", metric: "+5.000 usuarios / Triage Real-Time" },
  { name: "310 Nutrition (USA)", metric: "+$40M ARR / Core Vitals 90+" },
  { name: "ALAXS B2B", metric: "+14.000 Leads / Scoring Autónomo" },
  { name: "VIVA Telecom", metric: "eCommerce Award Winner" },
  { name: "Zurich Seguros", metric: "E-Commerce de Coberturas" },
  { name: "Radio Mitre / Clarín", metric: "WPO en Tráfico Masivo" }
];

export default function TrustBar() {
  return (
    <div className="w-full bg-[#020617] border-y border-slate-800/80 py-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#49c5b6]">
            // TECH STACK DE ÉLITE & ARQUITECTURA MULTI-AGENTE
          </span>
          <span className="text-xs font-mono text-slate-500">
            Validado en infraestructuras de misión crítica
          </span>
        </div>
      </div>

      {/* CARRUSEL DE STACK TECNOLÓGICO */}
      <div className="flex overflow-x-auto no-scrollbar gap-4 max-w-7xl mx-auto px-6 pb-6">
        {STACK_TAGS.map((s) => (
          <div
            key={s.name}
            className="flex-shrink-0 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center space-x-3 hover:border-cyan-500/40 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#49c5b6]"></span>
            <div>
              <span className="text-xs font-bold text-white block font-mono">
                {s.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono block">
                {s.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* LOGOS / MARCAS VALIDADAS */}
      <div className="border-t border-slate-850/80 pt-6 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {VALIDATED_CLIENTS.map((c) => (
            <div key={c.name} className="border-l border-slate-800 pl-3">
              <span className="text-xs font-bold text-slate-300 block font-mono">
                {c.name}
              </span>
              <span className="text-[11px] text-cyan-400 font-mono block mt-0.5">
                {c.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
