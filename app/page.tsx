"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
  return (
    <>
      {/* Hero Services */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Infraestructura Digital para Impulsar Ventas
            </h1>
            <p className="text-lg text-gray-700 mt-6 max-w-2xl">
              Implementamos plataformas web, automatizaciones y sistemas de captación de leads, integrando procesos comerciales para lograr eficiencia, escalabilidad y resultados reales.
            </p>
            <div className="mt-10">
              <Link
                href="https://meetings.hubspot.com/apalmieri-paso"
                className="bg-[#0068ca] hover:bg-[#0050a3] text-white font-bold py-3 px-8 rounded-lg transition-all inline-block"
              >
                Agendar una llamada
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/hero.webp"
              alt="Infraestructura Digital"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>
      
      {/* FILOSOFÍA DE TRABAJO */}
<section className="py-24 bg-white text-center" id="filosofia-trabajo">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-montserrat mb-12">
      Nuestra Filosofía de Trabajo
    </h2>

    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center px-4">
        <svg className="w-14 h-14 text-[#0068ca] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
        <h3 className="text-2xl font-bold text-[#0068ca] font-montserrat mb-2">Integraciones & APIs</h3>
        <p className="text-gray-700 font-lato">
          Implementamos integraciones inteligentes mediante APIs RESTful y Webhooks para conectar CRMs, ERPs y plataformas.
        </p>
      </div>

      <div className="flex flex-col items-center text-center px-4">
        <svg className="w-14 h-14 text-[#0068ca] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <h3 className="text-2xl font-bold text-[#0068ca] font-montserrat mb-2">Automatización de Datos</h3>
        <p className="text-gray-700 font-lato">
          Automatizamos flujos de información clave para mejorar la eficiencia operativa y la trazabilidad del negocio.
        </p>
      </div>
    </div>
  </div>
</section>
{/* SERVICIOS */}
<section className="py-24 bg-[#0068ca] text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat mb-16">
            Soluciones Especializadas
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="p-8 bg-white text-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold font-montserrat mb-4">Integraciones Web & Automatizaciones</h3>
              <p className="text-gray-700 font-lato mb-6">
                Conectamos CRMs, plataformas de eCommerce y sistemas externos con APIs seguras, optimizando los procesos comerciales de nuestros clientes.
              </p>
              <Link href="/services#integraciones" className="text-[#0068ca] font-bold hover:underline inline-block">
                Ver más
              </Link>
            </div>
            {/* Card 2 */}
            <div className="p-8 bg-white text-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold font-montserrat mb-4">CMS & Desarrollo Backend</h3>
              <p className="text-gray-700 font-lato mb-6">
                Implementamos soluciones a medida sobre plataformas líderes como Shopify, WooCommerce y WordPress, combinando estabilidad con flexibilidad.
              </p>
              <Link href="/services#cms" className="text-[#0068ca] font-bold hover:underline inline-block">
                Ver más
              </Link>
            </div>
            {/* Card 3 */}
            <div className="p-8 bg-white text-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold font-montserrat mb-4">Lead Generation Orgánica</h3>
              <p className="text-gray-700 font-lato mb-6">
                Diseñamos sistemas de prospección orgánica integrados a CRM, optimizando la captación, el nurturing y el cierre de oportunidades comerciales.
              </p>
              <Link href="/services#leadgen" className="text-[#0068ca] font-bold hover:underline inline-block">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* CÓMO TRABAJAMOS */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-montserrat mb-16">
            ¿Cómo trabajamos?
          </h2>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0068ca] p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m0 14v2m0-6h6m2 4H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4">Análisis Técnico Comercial</h3>
              <p className="text-gray-700 font-lato">
                Entendemos las necesidades comerciales y analizamos los sistemas existentes para planificar una solución efectiva.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0068ca] p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a4 4 0 00-8 0v2a4 4 0 008 0zm-9 4v1a3 3 0 006 0v-1a3 3 0 00-6 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4">Arquitectura & Planificación</h3>
              <p className="text-gray-700 font-lato">
                Diseñamos arquitecturas flexibles y modulares, priorizando velocidad de implementación y escalabilidad a largo plazo.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0068ca] p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4">Desarrollo & Testing</h3>
              <p className="text-gray-700 font-lato">
                Ejecutamos desarrollos frontend/backend y testeamos integraciones asegurando funcionalidad, estabilidad y rendimiento óptimo.
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0068ca] p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4">Implementación & Optimización</h3>
              <p className="text-gray-700 font-lato">
                Desplegamos soluciones de forma controlada, monitoreando resultados y proponiendo mejoras continuas basadas en métricas reales.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* TECNOLOGÍAS QUE USAMOS */}
<section className="py-24 bg-gray-50 text-center">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-montserrat mb-16">
      Tecnologías que impulsan nuestros proyectos
    </h2>
    <div className="grid grid-cols-4 md:grid-cols-7 gap-6 items-center justify-center">
      {/* Next.js */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-10 h-10 md:w-16 md:h-16">
          <Image src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js" width={40} height={40} />
        </div>
        <p className="text-xs md:text-sm font-lato text-gray-700 mt-2">Next.js</p>
      </div>

      {/* React */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-10 h-10 md:w-16 md:h-16">
          <Image src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="React" width={40} height={40} />
        </div>
        <p className="text-xs md:text-sm font-lato text-gray-700 mt-2">React</p>
      </div>

      {/* Shopify */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-10 h-10 md:w-16 md:h-16">
          <Image src="https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" alt="Shopify" width={40} height={40} />
        </div>
        <p className="text-xs md:text-sm font-lato text-gray-700 mt-2">Shopify</p>
      </div>

      {/* WordPress */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-10 h-10 md:w-16 md:h-16">
          <Image src="https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg" alt="WordPress" width={40} height={40} />
        </div>
        <p className="text-xs md:text-sm font-lato text-gray-700 mt-2">WordPress</p>
      </div>

      {/* Node.js */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-10 h-10 md:w-16 md:h-16">
          <Image src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="Node.js" width={40} height={40} />
        </div>
        <p className="text-xs md:text-sm font-lato text-gray-700 mt-2">Node.js</p>
      </div>

      {/* HubSpot */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-10 h-10 md:w-16 md:h-16">
          <Image src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" alt="HubSpot" width={40} height={40} />
        </div>
        <p className="text-xs md:text-sm font-lato text-gray-700 mt-2">HubSpot</p>
      </div>

      {/* PHP */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-10 h-10 md:w-16 md:h-16">
          <Image src="https://www.vectorlogo.zone/logos/php/php-icon.svg" alt="PHP" width={40} height={40} />
        </div>
        <p className="text-xs md:text-sm font-lato text-gray-700 mt-2">PHP</p>
      </div>
    </div>
  </div>
</section>


      {/* CÓMO TRABAJAMOS */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-montserrat mb-16">
            ¿Cómo trabajamos?
          </h2>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0068ca] p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m0 14v2m0-6h6m2 4H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4">Análisis Técnico Comercial</h3>
              <p className="text-gray-700 font-lato">
                Entendemos las necesidades comerciales y analizamos los sistemas existentes para planificar una solución efectiva.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0068ca] p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a4 4 0 00-8 0v2a4 4 0 008 0zm-9 4v1a3 3 0 006 0v-1a3 3 0 00-6 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4">Arquitectura & Planificación</h3>
              <p className="text-gray-700 font-lato">
                Diseñamos arquitecturas flexibles y modulares, priorizando velocidad de implementación y escalabilidad a largo plazo.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0068ca] p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4">Desarrollo & Testing</h3>
              <p className="text-gray-700 font-lato">
                Ejecutamos desarrollos frontend/backend y testeamos integraciones asegurando funcionalidad, estabilidad y rendimiento óptimo.
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0068ca] p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4">Implementación & Optimización</h3>
              <p className="text-gray-700 font-lato">
                Desplegamos soluciones de forma controlada, monitoreando resultados y proponiendo mejoras continuas basadas en métricas reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS DE CLOUDWORKS */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-montserrat mb-16">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0068ca] font-montserrat">Entendimiento Comercial Real</h3>
              <p className="text-gray-700 font-lato">
                Conocemos a fondo las dinámicas comerciales de ventas B2B y B2C, orientando las implementaciones a resultados concretos de negocio.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0068ca] font-montserrat">Expertise en Frontend Dinámico</h3>
              <p className="text-gray-700 font-lato">
                Creamos interfaces modernas, rápidas y optimizadas para performance, experiencia de usuario y escalabilidad en el tiempo.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0068ca] font-montserrat">Tecnologías Probadas</h3>
              <p className="text-gray-700 font-lato">
                Apostamos a plataformas líderes como Shopify, WooCommerce, WordPress y Next.js, asegurando estabilidad, soporte y evolución.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0068ca] font-montserrat">Integraciones Estratégicas</h3>
              <p className="text-gray-700 font-lato">
                Potenciamos los sistemas existentes mediante integraciones eficientes que conectan eCommerce, CRM y automatizaciones de workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICIOS */}
      <section className="py-24 bg-[#0068ca] text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat mb-16">
            Soluciones Especializadas
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="p-8 bg-white text-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold font-montserrat mb-4">Integraciones Web & Automatizaciones</h3>
              <p className="text-gray-700 font-lato mb-6">
                Conectamos CRMs, plataformas de eCommerce y sistemas externos con APIs seguras, optimizando los procesos comerciales de nuestros clientes.
              </p>
              <Link href="/services/crm-a-medida" className="text-[#0068ca] font-bold hover:underline inline-block">
                Ver más
              </Link>
            </div>
            {/* Card 2 */}
            <div className="p-8 bg-white text-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold font-montserrat mb-4">CMS & Desarrollo Backend</h3>
              <p className="text-gray-700 font-lato mb-6">
                Implementamos soluciones a medida sobre plataformas líderes como Shopify, WooCommerce y WordPress, combinando estabilidad con flexibilidad.
              </p>
              <Link href="/services/desarrollo-backend" className="text-[#0068ca] font-bold hover:underline inline-block">
                Ver más
              </Link>
            </div>
            {/* Card 3 */}
            <div className="p-8 bg-white text-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold font-montserrat mb-4">Lead Generation Orgánica</h3>
              <p className="text-gray-700 font-lato mb-6">
                Diseñamos sistemas de prospección orgánica integrados a CRM, optimizando la captación, el nurturing y el cierre de oportunidades comerciales.
              </p>
              <Link href="/services/lead-generation" className="text-[#0068ca] font-bold hover:underline inline-block">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gray-900 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat mb-6">
            ¿Listo para escalar tu infraestructura digital?
          </h2>
          <p className="text-lg font-lato max-w-2xl mx-auto mb-10">
            Construyamos juntos soluciones que conecten tecnología, procesos y resultados de negocio reales.
          </p>
          <div className="mt-8">
            <Link
              href="https://meetings.hubspot.com/apalmieri-paso"
              className="bg-[#0068ca] hover:bg-[#0050a3] text-white font-bold py-4 px-10 rounded-lg transition-all inline-block"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* CARROUSEL DE LOGOS DE CLIENTES */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-2">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            loop={true}
          >
            <SwiperSlide>
              <div className="flex justify-center">
                <Image src="/axiacore.png" alt="Axiacore Logo" width={75} height={40} className="object-contain" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image src="/seven.webp" alt="Seven Logo" width={75} height={40} className="object-contain" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image src="/alaxs.png" alt="Alaxs Logo" width={75} height={40} className="object-contain" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image src="/shakeagain.png" alt="Shake Again Logo" width={55} height={28} className="object-contain" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image src="/atencion.webp" alt="Grupo Atención Logo" width={55} height={28} className="object-contain" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image src="/logo-emergencias.png" alt="Emergencias Logo" width={75} height={40} className="object-contain" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image src="/Proyecto nuevo (1).webp" alt="310 Nutrition Logo" width={55} height={28} className="object-contain" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image src="/Proyecto nuevo.webp" alt="Colorshop Logo" width={55} height={28} className="object-contain" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
