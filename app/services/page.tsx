"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  CheckCircleIcon,
  Cog6ToothIcon,
  LinkIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  WrenchScrewdriverIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

const Servicio = ({ title, subtitle, description, features, icon: Icon, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full"
    >
      <div className="h-full bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-[2.5rem] hover:border-[#49c5b6]/50 transition-all duration-500 shadow-2xl overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#0068ca] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-5 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#0068ca] to-[#49c5b6] rounded-2xl shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white leading-tight">{title}</h3>
              <p className="text-[#49c5b6] font-mono text-[10px] uppercase tracking-[0.2em] mt-1">{subtitle}</p>
            </div>
          </div>

          <p className="text-slate-400 mb-8 leading-relaxed text-sm">
            {description}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-[#49c5b6] transition-colors mb-4"
          >
            {expanded ? "Cerrar Especificaciones" : "Ver Especificaciones Técnicas"}
            <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-slate-800">
                  <ul className="space-y-3">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-slate-400 group/item">
                        <span className="text-[#49c5b6] mt-0.5">▹</span>
                        <span className="group-hover/item:text-white transition-colors">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default function Servicios() {
  const data = [
    {
      title: "CRM a Medida",
      subtitle: "Smart Management",
      description: "Desarrollamos arquitecturas de datos para gestionar leads con lógica de negocio real, no solo formularios.",
      icon: CheckCircleIcon,
      features: ["Pipeline visual reactivo", "Machine Learning Scoring", "API First Architecture", "Custom Field Logic"]
    },
    {
      title: "Automatización",
      subtitle: "Python Powered",
      description: "Scripts autónomos que conectan procesos comerciales con inventarios y logística en tiempo real.",
      icon: Cog6ToothIcon,
      features: ["Multi-Step Workflows", "Inventory Sync Workers", "Auto-Billing (Stripe/ERP)", "Slack/Bot Integration"]
    },
    {
      title: "Integraciones",
      subtitle: "Ecosystem Connectivity",
      description: "Somos expertos en conectar lo imposible. APIs, Webhooks y capas de autenticación robustas.",
      icon: LinkIcon,
      features: ["Odoo & SAP Bridge", "Shopify/WooCommerce Sync", "OAuth 2.0 Auth Flow", "Real-time Data Streaming"]
    },
    {
      title: "Performance Audit",
      subtitle: "Vitals Optimization",
      description: "Llevamos tus métricas a 100/100. SSR, Edge Computing y optimización de assets pesados.",
      icon: ChartBarIcon,
      features: ["Core Web Vitals Fix", "Image AI Compression", "Server Side Rendering", "Edge Cache Delivery"]
    },
    {
      title: "UX/UI Dinámico",
      subtitle: "Elite Frontend",
      description: "Interfaces de alto impacto con Next.js y React. Mobile-first y animaciones que guían al usuario.",
      icon: CursorArrowRaysIcon,
      features: ["Framer Motion Micro-interactions", "A/B Testing Layers", "Layouts Dinámicos", "Accesibilidad WCAG"]
    },
    {
      title: "QA & Stability",
      subtitle: "Continuous Testing",
      description: "Infraestructura sin errores. Pruebas automatizadas que corren antes de cada deploy.",
      icon: WrenchScrewdriverIcon,
      features: ["E2E Cypress Testing", "Jest Unit Tests", "CI/CD Pipeline Support", "Automated Bug Reporting"]
    }
  ];

  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0068ca] rounded-full blur-[150px] opacity-[0.05]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8"
          >
            Arquitectura de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068ca] to-[#49c5b6]">Servicios Elite</span>
          </motion.h2>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            En Cloudworks Global no "hacemos páginas". Construimos sistemas de software que escalan, automatizan y transforman el fondo de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((servicio, index) => (
            <Servicio key={index} {...servicio} index={index} />
          ))}
        </div>

        <div className="mt-32 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0068ca] to-[#49c5b6] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Link 
              href="https://meetings.hubspot.com/apalmieri-paso"
              className="relative px-12 py-6 bg-slate-900 border border-slate-700 rounded-2xl text-xl font-bold text-white transition-all block"
            >
              Iniciar Auditoría Técnica
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}