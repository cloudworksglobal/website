"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function InfraestructuraDigital() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#4A5D44] text-center mb-12 leading-tight"
        >
          Cómo Integramos Infraestructura Digital para 3 PyMEs Reales y Disparamos su Eficiencia Comercial
        </motion.h1>

        {/* Introducción */}
        <motion.p className="text-gray-700 text-lg leading-relaxed mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Las PyMEs suelen depender de herramientas aisladas, integraciones manuales o procesos repetitivos. En Cloudworks, abordamos este problema construyendo infraestructuras digitales modulares y abiertas. A continuación, tres casos reales.
        </motion.p>

        {/* Caso 1 */}
        <motion.div className="mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="text-2xl font-bold text-[#4A5D44] mb-2">1. SomosReyes.com</h2>
          <p className="text-gray-700 mb-2">
            Integramos Shopify con su CRM interno y sistema de logística mediante APIs y automatizaciones custom con Node.js. Esto permitió:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Reducir en un 60% las tareas manuales de soporte post-venta</li>
            <li>Acelerar la actualización de stock en tiempo real</li>
            <li>Automatizar el seguimiento de pedidos en WhatsApp Business</li>
          </ul>
        </motion.div>

        {/* Caso 2 */}
        <motion.div className="mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <h2 className="text-2xl font-bold text-[#4A5D44] mb-2">2. ALAXS Global</h2>
          <p className="text-gray-700 mb-2">
            Desarrollamos un dashboard de ventas que consolidaba datos de canales distintos (WooCommerce, Mercado Libre, facturación interna) usando Python + Google Sheets API.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Unificación de datos comerciales en tiempo real</li>
            <li>Reducción de errores humanos en reportes: -80%</li>
            <li>Decisiones basadas en KPIs automáticos: ticket promedio, margen y devoluciones</li>
          </ul>
        </motion.div>

        {/* Caso 3 */}
        <motion.div className="mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <h2 className="text-2xl font-bold text-[#4A5D44] mb-2">3. 310 Nutrition</h2>
          <p className="text-gray-700 mb-2">
            Automatizamos flujos entre Shopify, Klaviyo y herramientas internas de marketing para sincronizar descuentos, popups y registros de usuarios. Tecnologías: Liquid, Tailwind, Rebuy y API de descuentos.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>+35% de eficiencia en actualización de promos y popups</li>
            <li>Mejora del CTR en funnels de captura: +18%</li>
            <li>Menor dependencia del equipo técnico para tareas operativas</li>
          </ul>
        </motion.div>

        {/* Diagrama simple */}
        <motion.div className="my-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
          <h3 className="text-xl font-bold text-center mb-4">Infraestructura Modular Típica</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-[#E9F0EA] rounded-xl px-4 py-2">Shopify</div>
            <div className="bg-[#E9F0EA] rounded-xl px-4 py-2">CRM / ERP</div>
            <div className="bg-[#E9F0EA] rounded-xl px-4 py-2">Klaviyo</div>
            <div className="bg-[#E9F0EA] rounded-xl px-4 py-2">Zapier / Make</div>
            <div className="bg-[#E9F0EA] rounded-xl px-4 py-2">Python Scripts</div>
            <div className="bg-[#E9F0EA] rounded-xl px-4 py-2">Google Sheets / Dashboards</div>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Link
            href="/blog"
            className="inline-block text-[#0068cc] font-semibold hover:underline transition"
          >
            ← Volver al Blog
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
