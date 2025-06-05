"use client";

import Link from "next/link";

export default function AutomatizacionAPIs() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Automatización con APIs: Conectividad Eficiente para Negocios Escalables
        </h1>

        <p className="text-lg text-gray-700 text-left max-w-3xl mx-auto mb-6">
          En Cloudworks integramos APIs para automatizar flujos de negocio entre plataformas como Shopify, HubSpot, Salesforce y sistemas ERP internos. Esto permite eliminar tareas manuales, reducir errores y liberar tiempo para el crecimiento.
        </p>

        <p className="text-lg text-gray-700 text-left max-w-3xl mx-auto mb-6">
          Para <strong>SomosReyes.com</strong>, conectamos su tienda Shopify con un sistema de gestión de stock y logística personalizado. Gracias a esta automatización, el tiempo de actualización de stock bajó de 20 minutos manuales a 3 segundos por API.
        </p>

        <p className="text-lg text-gray-700 text-left max-w-3xl mx-auto mb-6">
          En <strong>Kingsman</strong>, desarrollamos una integración directa entre su CRM y su pasarela de pagos para facilitar la validación de transacciones y creación automática de leads. Resultado: incremento del 18% en velocidad de conversión post-checkout.
        </p>

        <p className="text-lg text-gray-700 text-left max-w-3xl mx-auto mb-6">
          Utilizamos tecnologías como <strong>Node.js, Python, Airtable API, Zapier, Integromat y Webhooks personalizados</strong>, generando sistemas interconectados, seguros y con bajo mantenimiento.
        </p>

        <p className="text-lg text-gray-700 text-left max-w-3xl mx-auto mb-8">
          Automatizar con APIs es más que eficiencia: es escalabilidad, trazabilidad y crecimiento sin fricciones.
        </p>

        <div className="mt-10">
          <Link href="/blog" className="text-blue-600 font-bold hover:underline">
            ← Volver al Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
