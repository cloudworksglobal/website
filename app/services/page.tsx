"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight font-montserrat mb-4">
            Infraestructura Digital para Impulsar Ventas
          </h1>
          <p className="text-lg text-gray-600 mt-2 mb-6 max-w-2xl font-lato">
            Implementamos plataformas web, automatizaciones y sistemas de captación de leads, integrando procesos comerciales para lograr eficiencia, escalabilidad y resultados reales.
          </p>
          <Link href="https://meetings.hubspot.com/apalmieri-paso" className="bg-[#0068ca] hover:bg-[#0050a3] text-white font-bold py-3 px-8 rounded-lg transition-all">
            Agendar una llamada
          </Link>
          <div className="mt-12 w-full max-w-4xl">
            <Image src="/hero.webp" alt="Infraestructura Digital" width={1200} height={800} className="rounded-2xl shadow-md" />
          </div>
        </div>
      </section>

      {/* NUESTRO MÉTODO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-montserrat mb-12">
            Nuestra Filosofía de Trabajo
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[#0068ca] mb-4">Integraciones & APIs</h3>
              <p className="text-gray-700 font-lato mb-4">
                Implementamos integraciones inteligentes mediante APIs RESTful y Webhooks para conectar CRMs, ERPs y plataformas de eCommerce, garantizando flujos de información estables y escalables.
              </p>
              <Image src="/integracionweb.png" alt="Integraciones y APIs" width={600} height={400} className="rounded-xl mx-auto" />
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[#0068ca] mb-4">Arquitectura & Performance</h3>
              <p className="text-gray-700 font-lato mb-4">
                Diseñamos arquitecturas modulares, enfocadas en rapidez de carga, buenas prácticas SEO, lazy loading de recursos e infraestructura en servidores optimizados.
              </p>
              <Image src="/performance.webp" alt="Performance Optimization" width={600} height={400} className="rounded-xl mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* NUESTROS SERVICIOS */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-montserrat mb-12">
            Nuestras Especialidades
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <Image src="/cms.webp" alt="CMS y eCommerce" width={400} height={300} className="rounded-lg mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat">CMS & eCommerce</h3>
              <p className="text-gray-600 mt-4 font-lato">
                Desarrollo en Shopify, WordPress y WooCommerce, enfocados en escalabilidad, optimización de rendimiento y maximización de conversiones.
              </p>
            </div>
            {/* Servicio 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <Image src="/crm.webp" alt="CRM & Leads" width={400} height={300} className="rounded-lg mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat">Lead Generation Orgánica</h3>
              <p className="text-gray-600 mt-4 font-lato">
                Implementación de CRM y captación orgánica de oportunidades comerciales, sin dependencias de campañas pagas.
              </p>
            </div>
            {/* Servicio 3 */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <Image src="/itidigital.webp" alt="Infraestructura Digital" width={400} height={300} className="rounded-lg mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat">Infraestructura Digital</h3>
              <p className="text-gray-600 mt-4 font-lato">
                Diseño y gestión de sistemas de integración web, bases de datos, APIs y servidores cloud escalables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-[#0068ca] text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat">
            ¿Listo para construir tu infraestructura comercial?
          </h2>
          <p className="text-lg mt-6 max-w-2xl mx-auto font-lato">
            Trabajemos juntos en tu captación de leads, automatización de procesos y expansión digital.
          </p>
          <div className="mt-8">
            <Link href="https://meetings.hubspot.com/apalmieri-paso" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all">
              Agendar una llamada
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
