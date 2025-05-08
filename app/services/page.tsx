"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  Cog6ToothIcon,
  LinkIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";

const Servicio = ({ title, subtitle, description, features, icon: Icon }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Hero Services */}
      <section className="bg-blue-50 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Servicios para Escalar tu Negocio
          </h1>
          <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto">
            Integramos soluciones de CRM, automatización de procesos de ventas, integraciones de sistemas y desarrollo a medida para que tu empresa crezca de manera eficiente.
          </p>
          <div className="mt-8">
            <a
              href="https://meetings.hubspot.com/apalmieri-paso"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition"
            >
              Agenda tu reunión
            </a>
          </div>
        </motion.div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl font-bold text-gray-900 text-center mb-16">
            Soluciones Especializadas
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col justify-between p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all text-center h-full">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">CRM a Medida</h3>
                <p className="text-gray-600 mb-6">
                  Desarrollamos CRMs personalizados que potencian tu equipo comercial, automatizan seguimientos y maximizan las conversiones.
                </p>
              </div>
              <Link
                href="/services/crm-a-medida"
                className="text-blue-600 font-semibold hover:underline"
              >
                Ver más
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col justify-between p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all text-center h-full">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Automatización de Procesos</h3>
                <p className="text-gray-600 mb-6">
                  Eliminá tareas repetitivas. Automatizamos cotizaciones, seguimientos y reportes para que vendas más en menos tiempo.
                </p>
              </div>
              <a
                href="https://meetings.hubspot.com/apalmieri-paso"
                className="text-blue-600 font-semibold hover:underline"
              >
                Agenda tu reunión
              </a>
            </motion.div>

            {/* Card 3 - con el href corregido */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col justify-between p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all text-center h-full">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Integraciones & APIs</h3>
                <p className="text-gray-600 mb-6">
                  Conectamos tus sistemas ERP, eCommerce y CRM para lograr una visión 360° de tu negocio y una operativa eficiente.
                </p>
              </div>
              <Link
                href="/services/crm-a-medida"
                className="text-blue-600 font-semibold hover:underline"
              >
                Ver más
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.p
        className="text-gray-700 mb-4"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {description}
      </motion.p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-blue-600 font-medium hover:underline mb-3"
      >
        {expanded ? "Ocultar detalles" : "Ver beneficios"}
      </button>

      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden list-disc list-inside text-sm text-gray-600 space-y-1"
      >
        {features.map((f, i) => (
          <li key={i} className="hover:text-blue-600 transition-colors duration-200">{f}</li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default function Servicios() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 text-center mb-6"
        >
          Servicios para transformar tu negocio digital
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16"
        >
          En Cloudworks desarrollamos soluciones que escalan contigo: tecnología personalizada para optimizar ventas, conectar tus sistemas y automatizar tu operación.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          <Servicio
            title="CRM a Medida"
            subtitle="Gestión Comercial Inteligente"
            description="Diseñamos CRMs modulares enfocados en tus flujos reales. Cada contacto, lead o venta se sigue, automatiza y mide."
            icon={CheckCircleIcon}
            features={[
              "Seguimiento automatizado de leads",
              "Embudo visual y editable",
              "Alertas, recordatorios y reportes en tiempo real",
              "Integración con plataformas de email marketing",
              "Roles personalizados por usuario",
              "Segmentación de clientes con etiquetas dinámicas"
            ]}
          />

          <Servicio
            title="Automatización de Procesos"
            subtitle="Ahorro de tiempo y recursos"
            description="Eliminamos tareas repetitivas con automatizaciones que conectan áreas. Desde presupuestos a onboarding y soporte."
            icon={Cog6ToothIcon}
            features={[
              "Cotizaciones automáticas",
              "Notificaciones entre equipos",
              "Flujos de trabajo personalizados",
              "Integración con Slack y CRMs externos",
              "Automatización de tareas de seguimiento",
              "Condiciones lógicas en flujos multicanal"
            ]}
          />

          <Servicio
            title="Integraciones & APIs"
            subtitle="Tu ecosistema conectado"
            description="Conectamos tu ecommerce, ERP y CRM. Hacemos que la info fluya entre herramientas para que vos tomes mejores decisiones."
            icon={LinkIcon}
            features={[
              "Integraciones Shopify, WooCommerce, Odoo, HubSpot",
              "Webhooks personalizados y sincronización",
              "Documentación clara y soporte técnico",
              "Single Sign-On (SSO) y autenticación OAuth",
              "Control de versiones en endpoints",
              "Logs detallados y fallback ante errores"
            ]}
          />

          <Servicio
            title="Infraestructura & Performance"
            subtitle="Escalabilidad y velocidad garantizada"
            description="Diseñamos arquitecturas modulares con métricas técnicas de alto rendimiento y foco en Core Web Vitals."
            icon={ChartBarIcon}
            features={[
              "Renderizado SSR y edge caching",
              "Uso de CDN y optimización de imágenes",
              "Lazy loading estratégico de componentes",
              "Optimización para LCP, FID, CLS",
              "Infraestructura autoescalable en Vercel o AWS",
              "Métricas visualizadas desde consola central"
            ]}
          />

          <Servicio
            title="UX/UI & Frontend Dinámico"
            subtitle="Interacción moderna orientada a resultados"
            description="Creamos interfaces visualmente atractivas, mobile-first, con animaciones suaves y performance óptimo."
            icon={CursorArrowRaysIcon}
            features={[
              "Componentes con microinteracciones",
              "Formularios progresivos y condicionales",
              "Layouts adaptativos para ecommerce",
              "Testing de conversión A/B integrado",
              "Carga progresiva y priorización visual",
              "Accesibilidad e internacionalización"
            ]}
          />

          <Servicio
            title="Testing & QA Automatizado"
            subtitle="Calidad continua antes y después del deploy"
            description="Validamos cada funcionalidad con pruebas automatizadas para garantizar estabilidad en todo el ciclo de vida."
            icon={WrenchScrewdriverIcon}
            features={[
              "Pruebas unitarias con Jest",
              "End-to-End testing con Cypress",
              "Cobertura automatizada en CI/CD",
              "Análisis de performance Lighthouse",
              "Pruebas funcionales con usuarios reales",
              "Reportes automáticos para bugs y coverage"
            ]}
          />
        </div>

        <div className="mt-24 text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
          >
            <a href="#contacto">Contactanos para un diagnóstico gratuito</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
