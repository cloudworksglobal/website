"use client";

import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaEnvelopeOpenText,
  FaFunnelDollar,
  FaChartLine,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import React from "react";

const featuresLead: { icon: IconType; title: string; desc: string }[] = [
  {
    icon: FaUserPlus,
    title: "Captación Multicanal",
    desc: "Inbound SEO, enlaces inteligentes, formularios, flujos automatizados y contenido direccionado.",
  },
  {
    icon: FaEnvelopeOpenText,
    title: "Nurturing Automatizado",
    desc: "Segmentación dinámica, workflows condicionales, cadencias por etapa y alertas para vendedores.",
  },
  {
    icon: FaFunnelDollar,
    title: "Integración con CRM",
    desc: "Asignación automática de leads calificados, enriquecimiento de datos y tracking embudo completo.",
  },
  {
    icon: FaChartLine,
    title: "Métricas y Optimización",
    desc: "Análisis por canal, cohortes de conversión, y mejoras continuas basadas en datos reales.",
  },
];

export default function LeadGeneration() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-br from-green-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Lead Generation Orgánica
          </h1>
          <p className="text-lg text-gray-700">
            Creamos sistemas de prospección orgánica conectados a CRMs, automatizando la captación, segmentación y nutrición de leads sin spam y sin pauta.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {featuresLead.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-green-50 p-6 rounded-xl shadow-md"
            >
              {React.createElement(item.icon, {
                size: 40,
                className: "text-green-600 mx-auto mb-4",
              })}
              <h3 className="text-xl font-bold text-green-700 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Cómo lo hacemos
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Creamos formularios web, popups, calendly y touchpoints embebidos en el sitio.",
              "Conectamos herramientas como HubSpot, Airtable, Notion o CRM propio con APIs seguras.",
              "Aplicamos lógica de maduración por score, actividad e historial para priorizar acciones.",
              "Automatizamos mensajes, alertas y follow-ups sin intervención manual en todo el funnel.",
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"
              >
                <p className="text-gray-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-center mb-6">Implementaciones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Sistema de nurturing para leads inbound en WordPress + HubSpot + alertas a Slack.",
              "Prospección automatizada en LinkedIn con carga directa a CRM interno.",
              "Workflows para campañas de contenido + filtros por intención de compra.",
            ].map((use, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <p className="text-gray-700">{use}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center bg-gradient-to-r from-green-50 to-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700">
            Si tu negocio no genera conversaciones todos los días, no es por falta de demanda: es por falta de sistema.
            <br /> Nosotros lo armamos.
          </p>
        </div>
      </section>
    </main>
  );
}
