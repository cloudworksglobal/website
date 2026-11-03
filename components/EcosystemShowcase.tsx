"use client";

import React, { useState } from "react";

interface EcosystemModule {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  flowSteps: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  caseRef: string;
  endpointPreview: string;
}

const MODULES: EcosystemModule[] = [
  {
    id: "headless-shopify",
    tabLabel: "Headless E-Commerce",
    badge: "Edge Architecture",
    title: "Storefronts Desacoplados (Next.js ↔ Shopify Plus)",
    description:
      "Eliminación de la sobrecarga de plantillas Liquid monolíticas mediante un frontend ligero que consulta la API GraphQL en el borde, con soporte para carritos dinámicos y personalización total.",
    flowSteps: ["Next.js App Router (SSR)", "Edge Cache / CDN", "Shopify Storefront API (GraphQL)", "Checkout Seguro"],
    metrics: [
      { label: "Tiempo de Carga (TTFB)", value: "< 0.4s" },
      { label: "Score Lighthouse", value: "98-100" },
      { label: "Lift de Conversión", value: "+34% a +52%" }
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shopify GraphQL"],
    caseRef: "310 Nutrition / VIVA E-Commerce",
    endpointPreview: "query GetProducts { products(first: 10) { edges { node { title priceRange } } } }"
  },
  {
    id: "api-backend-sync",
    tabLabel: "Backend & ERP Engine",
    badge: "0 Errores de Stock",
    title: "Orquestador de Inventario & Facturación (Python ↔ SAP / Odoo)",
    description:
      "Servicio en background que procesa webhooks transaccionales en tiempo real, transformando e insertando pedidos en el ERP contable sin intervención manual.",
    flowSteps: ["Webhook Shopify Trigger", "Python FastEngine (Validación)", "SAP / Odoo RFC Bridge", "Facturación Automática"],
    metrics: [
      { label: "Desfase de Inventario", value: "0 errores" },
      { label: "Frecuencia de Sync", value: "Tiempo Real (<2s)" },
      { label: "Ahorro Carga Operativa", value: "+45%" }
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "SAP Connector"],
    caseRef: "Global Retail Corp / Pari Logistics",
    endpointPreview: "POST /api/v1/inventory/reconcile-stock \nHeaders: { 'X-Signature-SHA256': '...' }"
  },
  {
    id: "martech-hubspot",
    tabLabel: "MarTech & HubSpot CRM",
    badge: "Lead Machine",
    title: "Pipelines de Ingesta, Calificación IA & Nutrición",
    description:
      "Conexión de formularios y canales conversacionales (WhatsApp API) con HubSpot. Los prospectos se enriquecen con datos de Apollo/Clay y se asignan automáticamente según scoring comercial.",
    flowSteps: ["Webform / WhatsApp API", "Data Enrichment (Apollo/Clay)", "Scoring Predictivo", "HubSpot Deal Pipeline"],
    metrics: [
      { label: "Conversión MQL → SQL", value: "+41%" },
      { label: "Reducción de CPL", value: "-38%" },
      { label: "Leads Procesados", value: "+14.000" }
    ],
    stack: ["HubSpot API", "WhatsApp Business API", "n8n", "Make", "Apollo.io"],
    caseRef: "ALAXS B2B Marketplace",
    endpointPreview: "POST https://api.hubapi.com/crm/v3/objects/contacts \nBody: { 'properties': { 'lead_score': 92 } }"
  },
  {
    id: "email-retention",
    tabLabel: "Email & Retention Loops",
    badge: "High Deliverability",
    title: "Automatización de Ciclo de Vida (Klaviyo / Brevo)",
    description:
      "Modelado de journeys avanzados de retención basados en eventos reales de navegación y compra: carritos abandonados, reposición periódica y reactivación de clientes inactivos.",
    flowSteps: ["Customer Interaction Event", "Segmentación por Comportamiento", "Disparo Vía API / SMTP", "Conversión Recompra"],
    metrics: [
      { label: "Tasa de Apertura Promedio", value: "> 42%" },
      { label: "AOV en Flujos Upsell", value: "+22%" },
      { label: "Retención de Clientes (LTV)", value: "+20%" }
    ],
    stack: ["Klaviyo API", "Brevo SMTP", "Webhooks", "JSON Payloads"],
    caseRef: "7 Haircare / E-commerce Brands",
    endpointPreview: "POST https://a.klaviyo.com/api/events/ \nBody: { 'metric': 'Started Checkout', 'value': 149.00 }"
  }
];

export default function EcosystemShowcase() {
  const [activeModule, setActiveModule] = useState<EcosystemModule>(MODULES[0]);

  return (
    <section id="arquitectura-integraciones" className="w-full py-24 bg-[#020617] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-[#49c5b6] animate-pulse"></span>
            <span>CAPA DE INTEGRACIÓN & INFRAESTRUCTURA TÉCNICA</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Ecosistemas Conectados de Alto Rendimiento.
          </h2>
          <p className="text-slate-400 text-base md:text-lg mt-4 leading-relaxed">
            Eliminamos silos de datos uniendo frontends rápidos, motores de backend en Python y automatizaciones de CRM que operan las 24 horas.
          </p>
        </div>

        {/* Pestañas */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-8">
          {MODULES.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveModule(mod)}
              className={`px-5 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-150 font-mono ${
                activeModule.id === mod.id
                  ? "bg-gradient-to-r from-[#0068ca] to-[#49c5b6] text-white shadow-lg shadow-cyan-500/10"
                  : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {mod.tabLabel}
            </button>
          ))}
        </div>

        {/* Consola Técnica */}
        <div className="grid lg:grid-cols-12 gap-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-10 backdrop-blur-md">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  {activeModule.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Caso Relacionado: <strong className="text-white">{activeModule.caseRef}</strong>
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                {activeModule.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base mt-4 leading-relaxed">
                {activeModule.description}
              </p>
            </div>

            {/* Pipeline */}
            <div className="bg-black/70 border border-slate-800 rounded-2xl p-5 font-mono text-xs">
              <span className="text-slate-500 uppercase tracking-widest text-[10px] block mb-3">
                Flujo del Pipeline de Datos:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {activeModule.flowSteps.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700/70">
                      {step}
                    </span>
                    {idx < activeModule.flowSteps.length - 1 && (
                      <span className="text-[#49c5b6] font-bold">──▶</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div>
              <span className="text-xs font-mono uppercase text-slate-500 block mb-2.5">
                Tecnologías & Estándares:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeModule.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/80"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Métricas y CTA */}
          <div className="lg:col-span-5 bg-black/60 border border-slate-800/90 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-4">
                Impacto Operativo & Resultados Medidos
              </span>
              <div className="grid grid-cols-1 gap-4">
                {activeModule.metrics.map((m) => (
                  <div key={m.label} className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                    <span className="text-xs font-mono text-slate-400 block">{m.label}</span>
                    <span className="text-2xl font-black font-mono text-[#49c5b6] mt-1 block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#020617] border border-slate-800 rounded-xl p-4">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                Protocolo / Payload de Ejemplo
              </span>
              <pre className="text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre-wrap leading-tight">
                <code>{activeModule.endpointPreview}</code>
              </pre>
            </div>

            <div>
              <a
                href="https://meetings.hubspot.com/apalmieri-paso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-[#0068ca] to-[#49c5b6] hover:opacity-95 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/10 font-mono text-center"
              >
                Diseñar Esta Integración →
              </a>
              <span className="text-center block text-[11px] text-slate-500 font-mono mt-2.5">
                Sesión de relevamiento con Lead Solutions Architect.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
