"use client";
import { motion } from "framer-motion";

const CaseCard = ({ client, title, results, description, stack, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 hover:border-[#49c5b6]/40 transition-all group relative overflow-hidden"
  >
    {/* Decoración de fondo sutil */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0068ca] rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[#49c5b6] font-mono text-[10px] uppercase tracking-[0.3em] mb-2">// Case Study: {client}</p>
          <h3 className="text-2xl font-black text-white tracking-tighter">{title}</h3>
        </div>
        <div className="bg-white/5 p-2 rounded-lg border border-white/10 group-hover:border-[#49c5b6]/50 transition-colors">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {results.map((res, i) => (
          <div key={i} className="bg-black/40 p-4 rounded-2xl border border-slate-800">
            <p className="text-3xl font-black text-white">{res.value}</p>
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{res.label}</p>
          </div>
        ))}
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-8">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {stack.map((item, i) => (
          <span key={i} className="text-[9px] font-mono px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700">
            {item}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Cases() {
  const cases = [
    {
      client: "Global Retail Corp",
      title: "Automatización de Inventario & ERP",
      description: "Desarrollamos un orquestador en Python que sincroniza stock en tiempo real entre SAP y Shopify Plus, eliminando errores de facturación manual.",
      results: [{ value: "+45%", label: "Eficiencia Operativa" }, { value: "0", label: "Errores de Stock" }],
      stack: ["Python", "FastAPI", "SAP Integration", "Shopify API"],
    },
    {
      client: "Fintech Solutions",
      title: "Neural Lead Scoring & CRM Hub",
      description: "Implementamos un modelo de IA que califica leads basándose en comportamiento de navegación e integra automáticamente con HubSpot para nutrición.",
      results: [{ value: "60%", label: "Faster Response" }, { value: "3x", label: "Conversion Rate" }],
      stack: ["OpenAI RAG", "HubSpot", "Node.js", "React"],
    },
    {
      client: "Tech Logistics",
      title: "Core Web Vitals Optimization",
      description: "Rediseño completo de arquitectura legacy a Next.js (SSR). Optimizamos el renderizado crítico y la entrega de datos en el borde (Edge).",
      results: [{ value: "99/100", label: "Lighthouse Score" }, { value: "-70%", label: "Load Time" }],
      stack: ["Next.js", "Vercel", "Tailwind CSS", "TypeScript"],
    }
  ];

  return (
    <section className="py-32 bg-[#020617] min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#0068ca] rounded-full blur-[120px] opacity-[0.03]"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#49c5b6] rounded-full blur-[120px] opacity-[0.03]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-[#49c5b6]"></div>
            <span className="text-[#49c5b6] font-mono text-sm tracking-[0.4em] uppercase">Impacto Real</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8">
            Casos de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068ca] to-[#49c5b6]">Éxito</span>
          </h1>
          
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            No entregamos proyectos, entregamos resultados medibles. <br />
            Explora cómo la arquitectura de software correcta transforma negocios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <CaseCard key={index} {...item} index={index} />
          ))}
        </div>

        {/* Footer de la sección */}
        <div className="mt-32 p-12 bg-gradient-to-r from-[#0068ca]/10 to-transparent border border-white/5 rounded-[3rem] text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Tu próximo hito empieza aquí?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto italic font-mono text-sm">
              {"> "} Iniciando diagnóstico de escalabilidad... [OK] <br />
              {"> "} Analizando workflows de automatización... [OK]
            </p>
            <button className="bg-white text-black hover:bg-[#49c5b6] hover:text-white font-black py-4 px-12 rounded-2xl transition-all uppercase tracking-widest">
                Contactar Ingeniería
            </button>
        </div>
      </div>
    </section>
  );
}