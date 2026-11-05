"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface IndustryItem {
  id: string;
  tabTitle: { ES: string; EN: string };
  badge: { ES: string; EN: string };
  title: { ES: string; EN: string };
  description: { ES: string; EN: string };
  compliancePoints: { ES: string[]; EN: string[] };
  solvedProblems: { ES: string[]; EN: string[] };
  referenceCase: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "healthcare",
    tabTitle: { ES: "Salud & HealthTech", EN: "Healthcare & HealthTech" },
    badge: { ES: "Misión Crítica & Privacidad", EN: "Mission Critical & Privacy" },
    title: {
      ES: "Sistemas Clínicos, Triage y Trazabilidad Multiplataforma",
      EN: "Clinical Systems, Triage & Multi-Platform Traceability"
    },
    description: {
      ES: "Diseño de arquitecturas donde el margen de error es cero. Integración de flujos de atención rápida, disponibilidad continua y resguardo estricto en la transferencia de datos entre portales de pacientes y registros médicos.",
      EN: "Zero-margin-for-error system architectures. Fast-response patient intake flows, continuous uptime, and strict data compliance between clinical EHRs and client-facing portals."
    },
    compliancePoints: {
      ES: [
        "Interoperabilidad entre plataformas clínicas (HIS) y capas de atención al usuario.",
        "Triage automatizado y geolocalización de servicios en tiempo real.",
        "Cero pérdida de registros en entornos de alta demanda y más de 5.000 colaboradores."
      ],
      EN: [
        "Full interoperability between clinical EHR/HIS platforms and frontend portals.",
        "Automated patient triage and real-time dispatch geolocation.",
        "Zero data loss across high-volume environments serving 5,000+ staff."
      ]
    },
    solvedProblems: {
      ES: [
        "Eliminación de colapsos en líneas de atención mediante derivación digital inteligente.",
        "Unificación de canales de solicitud médica en un único expediente centralizado."
      ],
      EN: [
        "Elimination of support bottlenecks via intelligent digital routing.",
        "Centralized patient intake requests into a unified, audit-ready clinical file."
      ]
    },
    referenceCase: "Emergencias Salud (+5.000 staff) / Emergency App"
  },
  {
    id: "ecommerce-retail",
    tabTitle: { ES: "E-Commerce & Retail", EN: "E-Commerce & Retail" },
    badge: { ES: "High-Volume (+40M ARR)", EN: "High-Volume (+40M ARR)" },
    title: {
      ES: "Storefronts de Alta Conversión & Reconciliación de Stock",
      EN: "High-Converting Storefronts & Inventory Reconciliation"
    },
    description: {
      ES: "Arquitecturas diseñadas para soportar picos agresivos de tráfico, drops de inventario y catálogos de decenas de miles de productos sin degradar el tiempo de carga ni generar roturas de stock.",
      EN: "Infrastructure engineered for flash sales, inventory drops, and multi-thousand SKU catalogs without degrading page speeds or causing inventory mismatch."
    },
    compliancePoints: {
      ES: [
        "Tiempo de respuesta inferior a 0.5s en fichas de producto (PDP) con renderizado en el Edge.",
        "Sincronización transaccional instantánea de órdenes hacia ERPs contables (SAP, Odoo).",
        "Auditorías continuas de Core Web Vitals para proteger el SEO y la inversión publicitaria."
      ],
      EN: [
        "Sub-0.5s response time on Product Detail Pages (PDP) powered by Edge rendering.",
        "Instant transactional sync of orders into backend accounting ERPs (SAP, Odoo).",
        "Core Web Vitals compliance to safeguard SEO indexing and ad conversion efficiency."
      ]
    },
    solvedProblems: {
      ES: [
        "Erradicación de compras fallidas por desfasaje de inventario entre depósitos y la web.",
        "Optimización de carritos y flujos de upsell que incrementan directamente el ticket promedio (AOV)."
      ],
      EN: [
        "Elimination of out-of-stock orders through real-time warehouse sync.",
        "Cart and upsell funnel optimization that drives higher Average Order Value (AOV)."
      ]
    },
    referenceCase: "310 Nutrition (USA) / VIVA Telecom (eCommerce Award)"
  },
  {
    id: "b2b-marketplaces",
    tabTitle: { ES: "B2B & Marketplaces", EN: "B2B & Marketplaces" },
    badge: { ES: "RevOps & Lead Routing", EN: "RevOps & Lead Routing" },
    title: {
      ES: "Ingesta de Leads, Scoring Predictivo y Automatización de Pipeline",
      EN: "Lead Ingestion, Predictive Scoring & Pipeline Automation"
    },
    description: {
      ES: "Estructuración de procesos comerciales donde el lead calificado debe ingresar a la mesa de ventas en minutos. Enriquecimiento automático de cuentas y eliminación de carga manual para los ejecutivos.",
      EN: "Commercial pipeline engineering ensuring qualified leads reach SDRs in under 3 minutes. Automated account enrichment and zero manual data entry."
    },
    compliancePoints: {
      ES: [
        "Mapeo riguroso de propiedades personalizadas y ciclo de vida en HubSpot / Salesforce.",
        "Validación de números y scoring de intención vía WhatsApp Business API.",
        "Enriquecimiento automatizado con datos firmográficos antes de la asignación comercial."
      ],
      EN: [
        "Rigorous custom object & lifecycle stage mapping in HubSpot / Salesforce.",
        "Phone number validation and intent scoring via WhatsApp Business API.",
        "Automated firmographic enrichment prior to sales round-robin distribution."
      ]
    },
    solvedProblems: {
      ES: [
        "Aceleración del speed-to-lead de horas a menos de 3 minutos tras la cotización.",
        "Incremento de más del 40% en la tasa de paso de prospecto (MQL) a reunión calificada (SQL)."
      ],
      EN: [
        "Reduced speed-to-lead from hours to under 3 minutes after quote request.",
        "Over 40% increase in MQL-to-SQL qualification rate."
      ]
    },
    referenceCase: "ALAXS B2B Marketplace (58 countries) / Payment Tech"
  },
  {
    id: "corporate-integrations",
    tabTitle: { ES: "Corporativo & Logística", EN: "Corporate & Logistics" },
    badge: { ES: "Sistemas Heredados & APIs", EN: "Legacy Systems & APIs" },
    title: {
      ES: "Modernización de Sistemas Legacy y Orquestación de Procesos",
      EN: "Legacy System Modernization & Process Orchestration"
    },
    description: {
      ES: "Conexión de sistemas administrativos consolidados con interfaces web modernas y automatizaciones seguras, sin necesidad de rehacer toda la infraestructura desde cero.",
      EN: "Connecting existing administrative systems with modern web interfaces and secure automation pipelines, without rebuilding core infrastructure from scratch."
    },
    compliancePoints: {
      ES: [
        "Consumo controlado de APIs internas con límites de tasa y colas de reintento.",
        "Firma criptográfica HMAC en webhooks para validar la autenticidad de cada paquete de datos.",
        "Generación de reportes unificados para comités de dirección y áreas de operaciones."
      ],
      EN: [
        "Controlled internal API consumption with rate limiting and automated retry queues.",
        "HMAC cryptographic webhook signatures ensuring zero payload tampering.",
        "Unified reporting dashboards for operations and C-level stakeholders."
      ]
    },
    solvedProblems: {
      ES: [
        "Destrabe de silos operativos donde distintas áreas usaban hojas de cálculo aisladas.",
        "Eliminación de la dependencia de soporte externo continuo para cambios rutinarios."
      ],
      EN: [
        "Elimination of isolated data silos caused by disparate spreadsheets.",
        "Reduced reliance on continuous external vendor maintenance for routine updates."
      ]
    },
    referenceCase: "Global Retail Corp / Vending & Real-Time Billing"
  }
];

export default function ValueAndIndustries() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<IndustryItem>(INDUSTRIES[0]);

  return (
    <section className="w-full pt-32 pb-20 bg-[#020617] text-slate-100 border-b border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITULAR PRINCIPAL */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-[#49c5b6]"></span>
            <span>
              {lang === "ES"
                ? "PROPUESTA DE VALOR // INGENIERÍA ORIENTADA A RESULTADOS"
                : "VALUE PROPOSITION // RESULTS-DRIVEN ENGINEERING"}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {lang === "ES" ? (
              <>
                No vendemos tecnologías sueltas. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068ca] via-[#49c5b6] to-white">
                  Garantizamos el cumplimiento de requerimientos críticos.
                </span>
              </>
            ) : (
              <>
                We don't sell disconnected tools. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068ca] via-[#49c5b6] to-white">
                  We guarantee critical engineering requirements.
                </span>
              </>
            )}
          </h1>
          <p className="text-slate-400 text-base md:text-lg mt-4 leading-relaxed">
            {lang === "ES"
              ? "Las herramientas son solo el medio de ejecución. Nuestro valor radica en más de una década traduciendo problemas complejos de negocio en arquitecturas estables, sin burocracia de agencias y con responsabilidad directa sobre los entregables."
              : "Tools are merely execution vehicles. Our value comes from over a decade translating complex enterprise bottlenecks into resilient architectures, with zero agency overhead and direct engineering accountability."}
          </p>
        </div>

        {/* SELECTOR DE INDUSTRIAS */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-10">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind)}
              className={`px-5 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-150 font-mono ${
                activeTab.id === ind.id
                  ? "bg-gradient-to-r from-[#0068ca] to-[#49c5b6] text-white shadow-lg shadow-cyan-500/10"
                  : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {ind.tabTitle[lang]}
            </button>
          ))}
        </div>

        {/* DETALLE TÉCNICO DE LA INDUSTRIA */}
        <div className="grid lg:grid-cols-12 gap-8 bg-slate-950/80 border border-slate-800/90 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                {activeTab.badge[lang]}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {lang === "ES" ? "Caso Real:" : "Real Case:"}{" "}
                <strong className="text-white">{activeTab.referenceCase}</strong>
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {activeTab.title[lang]}
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {activeTab.description[lang]}
            </p>

            <div className="border-t border-slate-850 pt-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                {lang === "ES"
                  ? "Cumplimiento de Requerimientos Operativos:"
                  : "Operational Compliance & Standards:"}
              </span>
              <ul className="space-y-2">
                {activeTab.compliancePoints[lang].map((point, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-slate-300">
                    <span className="text-[#49c5b6] font-bold">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 bg-black/60 border border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                {lang === "ES" ? "Puntos de Dolor que Destrabamos" : "Bottlenecks We Eliminate"}
              </span>
              <div className="space-y-3">
                {activeTab.solvedProblems[lang].map((prob, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs md:text-sm text-slate-300">
                    {prob}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href="https://meetings.hubspot.com/apalmieri-paso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-[#0068ca] to-[#49c5b6] hover:opacity-95 text-white font-bold text-xs font-mono tracking-wide transition-all shadow-lg shadow-cyan-500/10 text-center"
              >
                {lang === "ES"
                  ? "Analizar Factibilidad en mi Empresa →"
                  : "Review Technical Scope for My Company →"}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
