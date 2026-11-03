"use client";

import React, { useState } from "react";

interface IndustryItem {
  id: string;
  tabTitle: string;
  badge: string;
  title: string;
  description: string;
  compliancePoints: string[];
  solvedProblems: string[];
  referenceCase: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "healthcare",
    tabTitle: "Salud & HealthTech",
    badge: "Misión Crítica & Privacidad",
    title: "Sistemas Clínicos, Triage y Trazabilidad Multiplataforma",
    description:
      "Diseño de arquitecturas donde el margen de error es cero. Integración de flujos de atención rápida, disponibilidad continua y resguardo estricto en la transferencia de datos entre portales de pacientes y registros médicos.",
    compliancePoints: [
      "Interoperabilidad entre plataformas clínicas (HIS) y capas de atención al usuario.",
      "Triage automatizado y geolocalización de servicios en tiempo real.",
      "Cero pérdida de registros en entornos de alta demanda y más de 5.000 colaboradores."
    ],
    solvedProblems: [
      "Eliminación de colapsos en líneas de atención mediante derivación digital inteligente.",
      "Unificación de canales de solicitud médica en un único expediente centralizado."
    ],
    referenceCase: "Emergencias Salud (+5.000 colaboradores) / App de Urgencias"
  },
  {
    id: "ecommerce-retail",
    tabTitle: "E-Commerce & Retail Masivo",
    badge: "High-Volume (+40M ARR)",
    title: "Storefronts de Alta Conversión & Reconciliación de Stock",
    description:
      "Arquitecturas diseñadas para soportar picos agresivos de tráfico, drops de inventario y catálogos de decenas de miles de productos sin degradar el tiempo de carga ni generar roturas de stock.",
    compliancePoints: [
      "Tiempo de respuesta inferior a 0.5s en fichas de producto (PDP) con renderizado en el Edge.",
      "Sincronización transaccional instantánea de órdenes hacia ERPs contables (SAP, Odoo).",
      "Auditorías continuas de Core Web Vitals para proteger el SEO y la inversión publicitaria."
    ],
    solvedProblems: [
      "Erradicación de compras fallidas por desfasaje de inventario entre depósitos y la web.",
      "Optimización de carritos y flujos de upsell que incrementan directamente el ticket promedio (AOV)."
    ],
    referenceCase: "310 Nutrition (USA) / VIVA Telecom (eCommerce Award)"
  },
  {
    id: "b2b-marketplaces",
    tabTitle: "B2B, Finanzas & Marketplaces",
    badge: "RevOps & Lead Routing",
    title: "Ingesta de Leads, Scoring Predictivo y Automatización de Pipeline",
    description:
      "Estructuración de procesos comerciales donde el lead calificado debe ingresar a la mesa de ventas en minutos. Enriquecimiento automático de cuentas y eliminación de carga manual para los ejecutivos.",
    compliancePoints: [
      "Mapeo riguroso de propiedades personalizadas y ciclo de vida en HubSpot / Salesforce.",
      "Validación de números y scoring de intención vía WhatsApp Business API.",
      "Enriquecimiento automatizado con datos firmográficos antes de la asignación comercial."
    ],
    solvedProblems: [
      "Aceleración del speed-to-lead de horas a menos de 3 minutos tras la cotización.",
      "Incremento de más del 40% en la tasa de paso de prospecto (MQL) a reunión calificada (SQL)."
    ],
    referenceCase: "ALAXS B2B Marketplace (58 países) / Soluciones de Pago"
  },
  {
    id: "corporate-integrations",
    tabTitle: "Corporativo & Logística",
    badge: "Sistemas Heredados & APIs",
    title: "Modernización de Sistemas Legacy y Orquestación de Procesos",
    description:
      "Conexión de sistemas administrativos consolidados con interfaces web modernas y automatizaciones seguras, sin necesidad de rehacer toda la infraestructura desde cero.",
    compliancePoints: [
      "Consumo controlado de APIs internas con límites de tasa y colas de reintento.",
      "Firma criptográfica HMAC en webhooks para validar la autenticidad de cada paquete de datos.",
      "Generación de reportes unificados para comités de dirección y áreas de operaciones."
    ],
    solvedProblems: [
      "Destrabe de silos operativos donde distintas áreas usaban hojas de cálculo aisladas.",
      "Eliminación de la dependencia de soporte externo continuo para cambios rutinarios."
    ],
    referenceCase: "Global Retail Corp / Soluciones de Vending y Facturación en Tiempo Real"
  }
];

export default function ValueAndIndustries() {
  const [activeTab, setActiveTab] = useState<IndustryItem>(INDUSTRIES[0]);

  return (
    <section className="w-full py-24 bg-[#020617] text-slate-100 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BLOQUE SUPERIOR: EL VERDADERO VALOR AGREGADO */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-[#49c5b6]"></span>
            <span>PROPUESTA DE VALOR // INGENIERÍA ORIENTADA A RESULTADOS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            No vendemos tecnologías sueltas. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068ca] via-[#49c5b6] to-white">
              Garantizamos el cumplimiento de requerimientos críticos.
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg mt-5 leading-relaxed">
            Las herramientas (Next.js, Python o HubSpot) son solo el medio de ejecución. Nuestro valor radica en más de una década traduciendo problemas complejos de negocio en arquitecturas estables, sin burocracia de agencias y con responsabilidad directa sobre los entregables.
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
              {ind.tabTitle}
            </button>
          ))}
        </div>

        {/* TARJETA TÉCNICA DE LA INDUSTRIA SELECCIONADA */}
        <div className="grid lg:grid-cols-12 gap-8 bg-slate-950/80 border border-slate-800/90 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
          
          {/* Columna Izquierda: Definición del Desafío */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                {activeTab.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Caso Real: <strong className="text-white">{activeTab.referenceCase}</strong>
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              {activeTab.title}
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {activeTab.description}
            </p>

            <div className="border-t border-slate-850 pt-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                Cumplimiento de Requerimientos Operativos:
              </span>
              <ul className="space-y-2.5">
                {activeTab.compliancePoints.map((point, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-slate-300">
                    <span className="text-[#49c5b6] font-bold">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna Derecha: Problemas que Resolvemos & Botón */}
          <div className="lg:col-span-5 bg-black/60 border border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Puntos de Dolor que Destrabamos
                </span>
                <div className="space-y-3">
                  {activeTab.solvedProblems.map((prob, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs md:text-sm text-slate-300">
                      {prob}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                <span className="text-xs font-mono text-cyan-300 block font-semibold mb-1">
                  Enfoque de Entrega:
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Diagnóstico técnico directo con Alfredo Palmieri (Lead Architect), sin pasamanos de cuentas ni estimaciones infladas.
                </p>
              </div>
            </div>

            <div>
              <a
                href="https://meetings.hubspot.com/apalmieri-paso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-[#0068ca] to-[#49c5b6] hover:opacity-95 text-white font-bold text-xs font-mono tracking-wide transition-all shadow-lg shadow-cyan-500/10 text-center"
              >
                Analizar Factibilidad en mi Empresa →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
