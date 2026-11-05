"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ServiceConfigurator from "../components/ServiceConfigurator";
import TrustBar from "../components/TrustBar";
import ValueAndIndustries from "../components/ValueAndIndustries";
import EcosystemShowcase from "../components/EcosystemShowcase";
import AgentSimulator from "../components/AgentSimulator";

export default function Home() {
  return (
    <div className="bg-[#020617] text-white selection:bg-[#49c5b6] selection:text-white">

      {/* PROPUESTA DE VALOR, CUMPLIMIENTO E INDUSTRIAS */}
      <ValueAndIndustries />

      {/* CATÁLOGO TÉCNICO INTERACTIVO: LO RESOLVEMOS CON CÓDIGO */}
      <ServiceConfigurator />

      {/* INFRAESTRUCTURA TÉCNICA & ENGINE SCRIPTS */}
<section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="bg-gradient-to-br from-[#0068ca]/20 to-[#49c5b6]/20 border border-white/10 backdrop-blur-3xl rounded-[4rem] p-16 lg:p-32 text-center">
                <h2 className="text-5xl lg:text-7xl font-black mb-10 tracking-tighter">
                    ¿Hablamos de <br /> <span className="text-[#49c5b6]">escalabilidad real?</span>
                </h2>
                <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
                    Llevamos la automatización de inventarios y el análisis de negocios a otro nivel. Sin fricción, sin errores manuales.
                </p>
                <Link href="https://meetings.hubspot.com/apalmieri-paso" className="bg-[#49c5b6] text-black font-black py-6 px-16 rounded-2xl hover:bg-white transition-all text-xl uppercase tracking-widest shadow-[0_0_50px_rgba(73,197,182,0.3)]">
                    Iniciar Transformación
                </Link>
            </div>
        </div>
      </section>

      {/* SIMULADOR MULTI-AGENTE LANGGRAPH */}
      <AgentSimulator />

      {/* CAPA DE ARQUITECTURA & INTEGRACIONES */}
      <TrustBar />

      {/* CAPA DE ARQUITECTURA & INTEGRACIONES */}
      <EcosystemShowcase />


    </div>
  );
}









