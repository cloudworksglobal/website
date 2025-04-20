"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Services() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-montserrat mb-8">
          Nuestros Servicios
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto font-lato mb-16">
          Infraestructura web, automatización y captación de leads para potenciar tu crecimiento comercial.
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-10">
          {serviceCards.map((card, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all text-left flex flex-col items-center">
              <div className="w-16 h-16 mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-4">{card.title}</h3>
              <p className="text-gray-700 font-lato mb-4 text-center">{card.description}</p>
              <ul className="list-disc list-inside text-gray-600 font-lato space-y-2 text-left">
                {card.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
          >
            {serviceCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all text-left flex flex-col items-center">
                  <div className="w-16 h-16 mb-4">{card.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-4">{card.title}</h3>
                  <p className="text-gray-700 font-lato mb-4 text-center">{card.description}</p>
                  <ul className="list-disc list-inside text-gray-600 font-lato space-y-2 text-left">
                    {card.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Final */}
        <div className="mt-16">
          <a
            href="https://meetings.hubspot.com/apalmieri-paso"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0068ca] hover:bg-[#0050a3] text-white font-bold py-4 px-10 rounded-lg text-lg transition-all inline-block"
          >
            Agendar una llamada
          </a>
        </div>
      </div>
    </section>
  );
}

// Cards de Servicios
const serviceCards = [
  {
    title: "Integraciones Web & Automatizaciones",
    description: "Conectamos sistemas comerciales mediante APIs seguras, automatizando captación de leads, nurturing y operaciones comerciales.",
    points: [
      "Formularios conectados a CRM",
      "Workflows automatizados",
      "Integraciones API REST personalizadas"
    ],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#0068ca] w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l-4-4m0 0l4-4m-4 4h16" />
      </svg>
    ),
  },
  {
    title: "CMS & eCommerce",
    description: "Desarrollamos sobre Shopify, WordPress y WooCommerce, priorizando estabilidad, performance y escalabilidad de tu infraestructura digital.",
    points: [
      "Themes personalizados",
      "Plugins y apps privadas",
      "Optimización UX/UI para conversión"
    ],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#0068ca] w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 5 9-5-9-5-9 5zm0 7l9 5 9-5" />
      </svg>
    ),
  },
  {
    title: "Performance Web & Escalabilidad",
    description: "Optimizamos tiempos de carga, arquitectura SEO y Core Web Vitals para maximizar resultados comerciales en web y mobile.",
    points: [
      "Optimización avanzada de recursos",
      "Lazy loading inteligente",
      "SEO técnico basado en performance"
    ],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#0068ca] w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
    ),
  },
  {
    title: "Lead Generation Orgánica",
    description: "Implementamos sistemas de captación de leads mediante plataformas de prospección automatizada y CRM, sin necesidad de servicios de marketing.",
    points: [
      "Configuración Apollo.io, HubSpot",
      "Automatización de scoring",
      "Lead assignment automático"
    ],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#0068ca] w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];
