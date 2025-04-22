"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
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
            {[
              { title: "CRM a Medida", desc: "Desarrollamos CRMs personalizados que potencian tu equipo comercial, automatizan seguimientos y maximizan las conversiones." },
              { title: "Automatización de Procesos", desc: "Eliminá tareas repetitivas. Automatizamos cotizaciones, seguimientos y reportes para que vendas más en menos tiempo." },
              { title: "Integraciones & APIs", desc: "Conectamos tus sistemas ERP, eCommerce y CRM para lograr una visión 360° de tu negocio y una operativa eficiente." }
            ].map((service, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + idx * 0.2 }} className="flex flex-col justify-between p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all text-center h-full">
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                </div>
                <a
                  href="https://meetings.hubspot.com/apalmieri-paso"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Agenda tu reunión
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios del Servicio */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl font-bold text-gray-900 text-center mb-16">
            Beneficios para tu Negocio
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { title: "Optimización de Ventas", desc: "Automatizá tu proceso comercial para aumentar tasas de conversión y disminuir tiempos de ciclo." },
              { title: "Datos Centralizados", desc: "Accedé a toda la información de clientes y operaciones en un solo lugar, en tiempo real." },
              { title: "Escalabilidad de Procesos", desc: "Diseñamos sistemas modulares que acompañan tu crecimiento de forma ágil." },
              { title: "Integración Inteligente", desc: "Unificamos herramientas de marketing, ventas y servicio al cliente para un ecosistema eficiente." }
            ].map((benefit, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + idx * 0.2 }} className="bg-white p-6 rounded-xl shadow text-center h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.desc}</p>
                <a
                  href="https://meetings.hubspot.com/apalmieri-paso"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Agenda tu reunión
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Software Factory Section */}
      <section className="py-24 bg-blue-50 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="container mx-auto px-6">
          <Image
            src="/softwarefactory.png"
            alt="Software Factory Logo"
            width={400}
            height={400}
            className="mx-auto"
          />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-center text-white">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            ¿Querés transformar tu operación comercial?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Agendá una consulta gratuita y descubrí cómo podemos escalar tus ventas y procesos con soluciones hechas a medida.
          </p>
          <a
            href="https://meetings.hubspot.com/apalmieri-paso"
            className="bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition"
          >
            Agenda tu reunión
          </a>
        </motion.div>
      </section>
    </>
  );
}
