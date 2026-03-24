"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
  return (
    <div className="bg-[#020617] text-white selection:bg-[#49c5b6] selection:text-white">
      
      {/* HERO: RED NEURONAL & IA */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Efecto de Fondo: Redes y Nodos */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#0068ca] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#49c5b6] rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-[#49c5b6]/30 bg-[#49c5b6]/10 text-[#49c5b6] text-sm font-mono mb-6 animate-bounce">
              // AI & AUTOMATION ENGINE READY
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
              Infraestructura <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068ca] via-[#49c5b6] to-white">
                Autónoma
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed mb-10">
              No solo hacemos webs. Construimos ecosistemas con **Python Scrips**, **IA Agents** e integraciones de **APIs críticas** para escalar inventarios y ventas sin intervención humana.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="#automation" className="bg-white text-black hover:bg-[#49c5b6] hover:text-white font-bold py-4 px-10 rounded-xl transition-all duration-300">
                Ver Ecosistemas
              </Link>
              <Link href="https://meetings.hubspot.com/apalmieri-paso" className="border border-slate-700 hover:border-[#0068ca] bg-slate-900/50 backdrop-blur-md py-4 px-10 rounded-xl transition-all">
                Agendar Consultoría Técnica
              </Link>
            </div>
          </div>

          {/* Visual de Código / IA */}
          <div className="hidden lg:block relative">
            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6 font-mono text-sm shadow-2xl backdrop-blur-xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-slate-500">inventory_sync.py</span>
              </div>
              <p className="text-blue-400">import <span className="text-white">tensorflow as tf</span></p>
              <p className="text-blue-400">from <span className="text-white">cloudworks_ai import AutomationEngine</span></p>
              <p className="text-slate-500 mt-4"># Iniciando análisis de inventario B2B</p>
              <p className="text-green-400">engine = AutomationEngine(api_key="CW-992")</p>
              <p className="text-green-400">engine.sync_stock(provider="Shopify", erp="SAP")</p>
              <p className="text-white mt-4 animate-pulse">{`> Processing neural weights... 98%`}</p>
            </div>
            {/* Logo de fondo sutil */}
            <div className="absolute -bottom-10 -right-10 opacity-20 grayscale">
               <Image src="/cloudworks ms-icon-310x310.png" width={200} height={200} alt="Logo Background" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: CORE ENGINE (TECNOLOGÍAS WEB) */}
<section className="py-24 bg-black relative overflow-hidden border-t border-slate-800">
  <div className="container mx-auto px-6">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
        Nuestra <span className="text-[#49c5b6]">Stack de Alto Rendimiento</span>
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto">
        No elegimos herramientas al azar. Utilizamos el estándar de oro de la industria para garantizar escalabilidad, seguridad y velocidad extrema.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity">
      {[
        { name: "Next.js", url: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
        { name: "React", url: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
        { name: "Shopify Plus", url: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" },
        { name: "HubSpot", url: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
        { name: "WordPress", url: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg" },
      ].map((tech, i) => (
        <div key={i} className="flex flex-col items-center group cursor-default">
          <div className="w-16 h-16 mb-4 p-3 bg-slate-900 rounded-2xl border border-slate-800 group-hover:border-[#49c5b6] transition-all duration-300 flex items-center justify-center">
            <Image 
              src={tech.url} 
              alt={tech.name} 
              width={64} 
              height={64} 
              className="grayscale group-hover:grayscale-0 transition-all object-contain" 
            />
          </div>
          <span className="text-[10px] font-mono text-slate-500 group-hover:text-white uppercase tracking-widest text-center">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SECCIÓN: AUDITORÍA DE PAGE SPEED & OPTIMIZACIÓN */}
<section className="py-32 bg-[#020617] relative">
  <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
    
    {/* Visual de Performance (Dashboard) */}
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#0068ca] to-[#49c5b6] rounded-[2.5rem] blur-2xl opacity-10"></div>
      <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-2xl">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[#49c5b6] font-mono text-xs mb-1 uppercase tracking-tighter">// Performance Audit</p>
            <h3 className="text-2xl font-bold text-white">Lighthouse Vitals</h3>
          </div>
          <div className="text-right">
             <span className="text-5xl font-black text-[#49c5b6]">100</span>
             <p className="text-[10px] text-slate-500 uppercase tracking-widest">Score</p>
          </div>
        </div>

        <div className="space-y-6">
          {[
            { label: "Largest Contentful Paint (LCP)", value: "0.8s", width: "98%" },
            { label: "First Input Delay (FID)", value: "12ms", width: "99%" },
            { label: "Cumulative Layout Shift (CLS)", value: "0.01", width: "97%" },
          ].map((metric, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-xs mb-2 font-mono">
                <span className="text-slate-300">{metric.label}</span>
                <span className="text-[#49c5b6]">{metric.value}</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#0068ca] to-[#49c5b6]" 
                  style={{ width: metric.width }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 p-4 bg-black/50 border border-slate-800 rounded-xl font-mono text-[10px] text-slate-500 italic">
          <p>{`> node audit --url cloudworksglobal.tech --optimize`}</p>
          <p>{`> Status: Optimization complete. SEO indexing 100%.`}</p>
        </div>
      </div>
    </div>

    {/* Texto de Auditoría */}
    <div className="text-left">
      <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter text-white">
        No permitas que una <br /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068ca] to-[#49c5b6]">web lenta</span> mate tus ventas.
      </h2>
      <p className="text-slate-400 text-lg mb-8 leading-relaxed">
        Cada milisegundo cuenta. En <strong>Cloudworks Global</strong>, realizamos auditorías profundas de <strong>Core Web Vitals</strong>. Optimizamos el renderizado para que tu sitio cargue instantáneamente.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="flex items-center gap-3 text-slate-300 font-mono text-xs">
          <span className="text-[#49c5b6]">✔</span> SEO Técnico Avanzado
        </div>
        <div className="flex items-center gap-3 text-slate-300 font-mono text-xs">
          <span className="text-[#49c5b6]">✔</span> Image Compression AI
        </div>
        <div className="flex items-center gap-3 text-slate-300 font-mono text-xs">
          <span className="text-[#49c5b6]">✔</span> Code Splitting
        </div>
        <div className="flex items-center gap-3 text-slate-300 font-mono text-xs">
          <span className="text-[#49c5b6]">✔</span> CDN Edge Delivery
        </div>
      </div>
    </div>

  </div>
</section>

{/* SECCIÓN: DATA ARCHITECTURE & AUTOMATION BLUEPRINT */}
<section className="py-24 bg-black relative border-t border-slate-800/50">
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      
      {/* Texto Descriptivo */}
      <div className="lg:w-1/3">
        <div className="w-12 h-1 bg-[#49c5b6] mb-6"></div>
        <h2 className="text-4xl font-black mb-6 tracking-tighter text-white">
          Arquitectura de <br />
          <span className="text-[#0068ca]">Datos Conectados</span>
        </h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          No creamos silos de información. Diseñamos <strong>pipelines de datos</strong> que sincronizan tu inventario en Shopify con tu ERP, mientras nuestra IA analiza el comportamiento de compra para disparar automatizaciones en HubSpot.
        </p>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <h4 className="text-[#49c5b6] font-bold text-sm mb-1 uppercase tracking-widest">Inventory Sync</h4>
            <p className="text-xs text-slate-500">Actualización en milisegundos vía Webhooks.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <h4 className="text-[#0068ca] font-bold text-sm mb-1 uppercase tracking-widest">AI Scoring</h4>
            <p className="text-xs text-slate-500">Modelos predictivos para calificación de leads.</p>
          </div>
        </div>
      </div>

      {/* Diagrama Visual Estilo Tech */}
      <div className="lg:w-2/3 w-full relative">
        <div className="bg-[#020617] border border-slate-800 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden shadow-3xl">
          {/* Líneas de conexión animadas (CSS puro) */}
          <div className="grid grid-cols-3 gap-4 lg:gap-8 relative z-10">
            
            {/* Columna 1: Captación */}
            <div className="flex flex-col gap-6">
              <div className="h-20 bg-slate-800/50 rounded-2xl border border-slate-700 flex items-center justify-center p-4 text-center">
                <span className="text-[10px] font-mono text-slate-300">Traffic (Ads/SEO)</span>
              </div>
              <div className="h-20 bg-slate-800/50 rounded-2xl border border-slate-700 flex items-center justify-center p-4 text-center">
                <span className="text-[10px] font-mono text-slate-300">Shopify / Web</span>
              </div>
            </div>

            {/* Columna 2: El Cerebro (Tu Script) */}
            <div className="flex flex-col justify-center">
              <div className="h-40 bg-gradient-to-br from-[#0068ca] to-[#49c5b6] rounded-3xl flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(0,104,202,0.4)] animate-pulse">
                <div className="w-10 h-10 bg-white/20 rounded-full mb-3 flex items-center justify-center">
                   <span className="text-white text-xl font-bold">Py</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-tighter text-center">Cloudworks Engine</span>
                <span className="text-[8px] font-mono text-white/70 mt-1">Logic & AI</span>
              </div>
            </div>

            {/* Columna 3: Destinos */}
            <div className="flex flex-col gap-6">
              <div className="h-20 bg-slate-800/50 rounded-2xl border border-slate-700 flex items-center justify-center p-4 text-center">
                <span className="text-[10px] font-mono text-slate-300">ERP / SAP Sync</span>
              </div>
              <div className="h-20 bg-slate-800/50 rounded-2xl border border-slate-700 flex items-center justify-center p-4 text-center">
                <span className="text-[10px] font-mono text-slate-300">CRM / Hubspot</span>
              </div>
            </div>

          </div>
          
          {/* Fondo decorativo de red */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* SECCIÓN DE LOGROS: WORKFLOWS & DATA */}
      <section id="automation" className="py-32 relative bg-[#020617]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Card 1: Workflows */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-800 to-transparent border border-slate-800 hover:border-[#49c5b6]/50 transition-all group">
              <div className="w-14 h-14 bg-[#0068ca]/20 rounded-2xl flex items-center justify-center mb-6 text-[#49c5b6] group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Workflows Dinámicos</h3>
              <p className="text-slate-400 leading-relaxed">Diseñamos el flujo lógico desde la captación del lead hasta la facturación automática en el ERP.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-500 font-mono">
                <li>+ Hubspot / Salesforce Sync</li>
                <li>+ Stripe Automation</li>
              </ul>
            </div>

            {/* Card 2: AI Chatbots */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-800 to-transparent border border-slate-800 hover:border-[#49c5b6]/50 transition-all group">
              <div className="w-14 h-14 bg-[#49c5b6]/20 rounded-2xl flex items-center justify-center mb-6 text-[#49c5b6] group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">IA & Chatbots Propios</h3>
              <p className="text-slate-400 leading-relaxed">Entrenamos modelos LLM con tu documentación interna para soporte técnico y ventas 24/7.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-500 font-mono">
                <li>+ RAG (Retrieval-Augmented)</li>
                <li>+ WhatsApp Business API</li>
              </ul>
            </div>

            {/* Card 3: Integraciones */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-800 to-transparent border border-slate-800 hover:border-[#49c5b6]/50 transition-all group">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-[#49c5b6] group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Docs & Auditoría API</h3>
              <p className="text-slate-400 leading-relaxed">Documentación técnica robusta para asegurar que cada integración sea escalable y segura.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-500 font-mono">
                <li>+ Postman Collections</li>
                <li>+ Swagger / OpenAPI</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN DE "NERD POWER": TECH STACK DINÁMICO */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-16 text-slate-500 uppercase tracking-[0.3em]">Neural Stack & Partners</h2>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity">
                {/* Los logos que tenías pero más pequeños y elegantes */}
                <span>Next.js</span>
                <span>Python / FastAPI</span>
                <span>OpenAI</span>
                <span>Shopify Plus</span>
                <span>AWS</span>
                <span>Node.js</span>
            </div>
        </div>
      </section>

      {/* CTA FINAL: DARK GLASSMORFISM */}
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

    </div>
  );
}