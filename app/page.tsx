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
    </>
  );
}
