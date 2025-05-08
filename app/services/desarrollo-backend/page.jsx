"use client";

import { motion } from "framer-motion";
import { FaCode, FaWordpress, FaShopify, FaDatabase } from "react-icons/fa";

export default function DesarrolloBackend() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Intro */}
      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            CMS & Desarrollo Backend
          </h1>
          <p className="text-lg text-gray-700">
            Desarrollamos soluciones sobre plataformas como Shopify, WooCommerce y WordPress, integrando funcionalidades backend personalizadas con foco en performance y estabilidad.
          </p>
        </motion.div>
      </section>

      {/* Plataformas & tecnologías */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            {
              icon: <FaShopify size={40} className="text-green-600 mx-auto mb-4" />,
              title: "Shopify & Liquid",
              desc: "Temas personalizados, automatización de cart rules, scripts de checkout, y Rebuy/Boost integrados.",
            },
            {
              icon: <FaWordpress size={40} className="text-blue-600 mx-auto mb-4" />,
              title: "WordPress & WooCommerce",
              desc: "Plugins custom, checkout extendido, integración con pasarelas y CRMs.",
            },
            {
              icon: <FaDatabase size={40} className="text-blue-800 mx-auto mb-4" />,
              title: "Backends Escalables",
              desc: "Desarrollo en Node.js, Laravel y Python, con bases de datos SQL/NoSQL y APIs RESTful.",
            },
            {
              icon: <FaCode size={40} className="text-gray-700 mx-auto mb-4" />,
              title: "CMS Headless",
              desc: "Next.js + CMS headless para performance y personalización total.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-xl shadow-md"
            >
              {item.icon}
              <h3 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cómo lo hacemos */}
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
              "Revisamos tu stack actual y definimos si conviene mejorar el CMS o ir hacia headless.",
              "Construimos componentes reutilizables, integraciones API-first y funciones backend.",
              "Optimización de velocidad, caching, arquitectura limpia y seguridad avanzada.",
              "Testing funcional, QA manual y documentación técnica para tu equipo o proveedor.",
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
              >
                <p className="text-gray-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos reales */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-center mb-6">Implementaciones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Checkout personalizado en WooCommerce con pasarela externa e impuestos regionales.",
              "Migración de WordPress a headless con Next.js y CMS Sanity.",
              "Lógica avanzada de bundles, Rebuy y scripts en Shopify (310 Nutrition).",
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

      {/* Cierre */}
      <section className="py-20 text-center bg-gradient-to-r from-gray-100 to-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700">
            Si tu plataforma actual ya no alcanza, la solución no es empezar de cero. Es desarrollar mejor.
            <br /> Nosotros te ayudamos a extender, conectar y escalar tu CMS como nunca antes.
          </p>
        </div>
      </section>
    </main>
  );
}
