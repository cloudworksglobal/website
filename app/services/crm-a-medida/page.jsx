"use client";

import { motion } from "framer-motion";
import { FaServer, FaCodeBranch, FaLock, FaProjectDiagram } from "react-icons/fa";

export default function CRMAMedida() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Intro */}
      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-br from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Integraciones Web & Automatizaciones
          </h1>
          <p className="text-lg text-gray-700">
            Diseñamos e implementamos conexiones seguras y eficientes entre tus plataformas digitales mediante APIs RESTful, Webhooks y middlewares personalizados.
          </p>
        </motion.div>
      </section>

      {/* Capacidades técnicas */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[{
            icon: <FaServer size={40} className="text-blue-600 mx-auto mb-4" />, title: "Middlewares Escalables", desc: "Aplicaciones intermedias en Node.js o Python que conectan servicios desacoplados con lógica de negocio y control total."
          }, {
            icon: <FaCodeBranch size={40} className="text-blue-600 mx-auto mb-4" />, title: "APIs RESTful & Webhooks", desc: "Diseño y consumo de APIs externas e internas. Conexión fluida entre CRMs, ERPs, ecommerce y plataformas SaaS."
          }, {
            icon: <FaLock size={40} className="text-blue-600 mx-auto mb-4" />, title: "Seguridad y Logs", desc: "Autenticación OAuth, tokenización, manejo de errores, encriptación y auditoría mediante logs y dashboards técnicos."
          }, {
            icon: <FaProjectDiagram size={40} className="text-blue-600 mx-auto mb-4" />, title: "Integración Modular", desc: "Arquitecturas desacopladas que permiten agregar o reemplazar sistemas sin rehacer la base de tu operación digital."
          }].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl shadow-md"
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
            {["Relevamiento de arquitectura actual y diagnóstico de puntos de integración.",
              "Definición de endpoints, payloads, autenticación y flujos asincrónicos.",
              "Desarrollo de middlewares desacoplados con logging persistente.",
              "Testeo con Postman, documentación Swagger y monitoreo con métricas."]
              .map((step, idx) => (
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

      {/* Casos de implementación */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-center mb-6">Implementaciones Reales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Sincronización de productos y stock entre Shopify, Odoo y sistema logístico vía API.",
              "Webhook para captura de leads en tiempo real desde formularios web a CRM interno.",
              "Middleware para consolidar métricas de ecommerce, Analytics y Meta Ads."]
              .map((use, idx) => (
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

      {/* Cierre técnico */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700">
            Si tu operación necesita hablar entre sistemas, nosotros escribimos el lenguaje.<br />
            Infraestructura sólida, procesos automatizados, y datos en tiempo real.
          </p>
        </div>
      </section>
    </main>
  );
}
