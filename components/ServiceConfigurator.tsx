"use client";

import React, { useState } from "react";

interface ServiceItem {
  id: string;
  category: string;
  badge: string;
  name: string;
  delivery: string;
  scope: string;
  stack: string[];
  pipeline: string[];
  impact: string;
  description: string;
  ctaText: string;
  hubspotMeetingUrl: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "retainer-dev",
    category: "Bolsa de Horas",
    badge: "Alta Demanda",
    name: "Tech Lead & Dev Senior On-Demand",
    delivery: "Arranque en 24h",
    scope: "Paquetes de 20h / 40h mensuales",
    stack: ["Next.js", "React", "Python / FastAPI", "Node.js", "WordPress"],
    pipeline: ["Backlog Priorizado", "Sprint Semanal", "Code Review & QA", "Deploy a Producción"],
    impact: "Destrabar tickets complejos y features estancadas sin costos fijos de contratación.",
    description: "Capacidad técnica senior por demanda para startups y agencias. Cobertura ágil de integraciones complejas, optimizaciones críticas y desarrollo fullstack.",
    ctaText: "Reservar Bolsa de Horas",
    hubspotMeetingUrl: "https://meetings.hubspot.com/apalmieri-paso"
  },
  {
    id: "ecommerce-sync",
    category: "E-Commerce & APIs",
    badge: "Microservicio Llave en Mano",
    name: "Shopify Plus ↔ ERP / CRM Automation",
    delivery: "48 a 72 horas",
    scope: "Pipeline completo + Webhook Gateway",
    stack: ["Shopify GraphQL", "Python Daemon", "Brevo SMTP", "HubSpot CRM"],
    pipeline: ["Shopify Webhook", "Python Sync Engine", "ERP Stock Sincronizado", "Brevo Trigger"],
    impact: "0 errores de facturación, sincronización de existencias cada 60s y nutrición automática.",
    description: "Sincronización en tiempo real de inventarios, pedidos y clientes entre tu tienda Shopify y tus sistemas internos (SAP, Tango, HubSpot, Brevo) sin apps lentas de terceros.",
    ctaText: "Cotizar Integración Shopify",
    hubspotMeetingUrl: "https://meetings.hubspot.com/apalmieri-paso"
  },
  {
    id: "migrations",
    category: "Arquitectura & Migración",
    badge: "Zero-Downtime",
    name: "Migración de Arquitecturas Legacy a Next.js",
    delivery: "7 a 14 días",
    scope: "Refactor completo + SSR / Edge",
    stack: ["Next.js 14/15", "TypeScript", "Tailwind CSS", "Vercel Edge"],
    pipeline: ["Auditoría de Deuda Técnica", "Diseño en Capas", "Migración Progresiva", "DNS Cutover"],
    impact: "Reducción de hasta un 70% en tiempos de carga y escalabilidad sin caídas.",
    description: "Modernización de sistemas web obsoletos, lentos o costosos de mantener hacia stacks modernos basados en Server-Side Rendering (SSR) y Edge Computing.",
    ctaText: "Planificar Migración",
    hubspotMeetingUrl: "https://meetings.hubspot.com/apalmieri-paso"
  },
  {
    id: "vitals-audit",
    category: "Performance Extrema",
    badge: "Garantía 95+",
    name: "Sprint Core Web Vitals 100/100",
    delivery: "48 horas",
    scope: "Auditoría + Optimización de Código",
    stack: ["Lighthouse", "Edge Caching", "Image Optimization", "Code Splitting"],
    pipeline: ["Profiling de Renderizado", "Tree Shaking & Lazy Load", "Edge Compression", "100/100 Validado"],
    impact: "LCP < 0.8s, CLS < 0.01. Incremento directo en tasa de conversión y ranking SEO.",
    description: "Eliminación de scripts bloqueantes, optimización de renderizado crítico y compresión en el borde para que cada clic en tu web responda de forma instantánea.",
    ctaText: "Auditar Mi Sitio Web",
    hubspotMeetingUrl: "https://meetings.hubspot.com/apalmieri-paso"
  }
];

export default function ServiceConfigurator() {
  const [selected, setSelected] = useState<ServiceItem>(SERVICES[0]);

  return (
    <section id="configurador-servicios" className="w-full py-20 px-4 md:px-8 bg-black text-slate-100 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>CATÁLOGO TÉCNICO INTERACTIVO</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Elegí tu cuello de botella. <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Lo resolvemos con código y arquitectura.
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 max-w-2xl">
            Sin presupuestos inflados ni contrataciones lentas. Tocá el módulo que necesitás para ver el pipeline, entregables y agenda técnica inmediata.
          </p>
        </div>

        {/* Botones de Selección */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {SERVICES.map((s) => {
            const isCurrent = selected.id === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelected(s)}
                className={`p-5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isCurrent
                    ? "bg-gradient-to-b from-blue-950/60 to-slate-900 border-blue-500 shadow-xl shadow-blue-500/10"
                    : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {s.category}
                  </span>
                  <span className="text-base font-bold text-white leading-tight block">
                    {s.name}
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400">⏱ {s.delivery}</span>
                  <span className="text-slate-500">Ver →</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detalle del Módulo */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  {selected.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Alcance: {selected.scope}
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  {selected.name}
                </h3>
                <p className="text-slate-300 text-sm md:text-base mt-2 leading-relaxed">
                  {selected.description}
                </p>
              </div>

              {/* Pipeline Dinámico */}
              <div className="p-4 rounded-xl bg-black/60 border border-slate-800 font-mono text-xs">
                <div className="text-slate-400 text-[11px] uppercase tracking-wider mb-3">
                  Flujo Operativo de Entrega:
                </div>
                <div className="flex flex-wrap items-center gap-2 text-slate-200">
                  {selected.pipeline.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700/60">
                        {step}
                      </span>
                      {idx < selected.pipeline.length - 1 && (
                        <span className="text-blue-500 font-bold">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Stack Tecnológico */}
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                  Stack Involucrado:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selected.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 bg-slate-800/80 text-cyan-300 rounded-md border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Conversión y Agenda */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Tiempo de Puesta en Marcha
                  </span>
                  <span className="text-xl font-bold font-mono text-white">
                    {selected.delivery}
                  </span>
                </div>

                <div className="border-b border-slate-800 pb-3">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Retorno Operativo Inmediato
                  </span>
                  <span className="text-sm font-medium text-emerald-400 leading-snug block mt-1">
                    {selected.impact}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Modalidad de Trabajo
                  </span>
                  <span className="text-sm text-slate-300 mt-1 block">
                    Directo con Alfredo Palmieri (Lead Architect). Sin intermediarios ni burocracia de agencias.
                  </span>
                </div>
              </div>

              <div>
                <a
                  href={selected.hubspotMeetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-all duration-150 shadow-lg shadow-blue-600/30 font-mono text-center"
                >
                  {selected.ctaText} →
                </a>
                <span className="text-center block text-[11px] text-slate-500 font-mono mt-2.5">
                  Llamada técnica de 15 min • Evaluación de factibilidad
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
