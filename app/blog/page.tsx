"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPage() {
  const posts = [
    {
      title: "Infraestructura digital orientada a Ventas",
      desc: "Descubre cómo aprovechar un ecosistema digital para optimizar el desarrollo comercial mediante arquitecturas escalables.",
      href: "/blog/Infraestructura_Digital",
      tag: "Arquitectura",
      readTime: "5 min read"
    },
    {
      title: "Optimización de eCommerce",
      desc: "Estrategias avanzadas para mejorar velocidad, UX y conversión en tiendas Shopify y WooCommerce utilizando Edge Computing.",
      href: "/blog/optimizacion-ecommerce",
      tag: "Performance",
      readTime: "4 min read"
    },
    {
      title: "Automatización con APIs",
      desc: "Cómo integrar herramientas y APIs personalizadas para hacer que tu negocio trabaje de forma automática y sin errores.",
      href: "/blog/automatizacion-apis",
      tag: "Automation",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen text-white overflow-hidden">
      
      {/* --- HERO DEL BLOG (DARK & TECH) --- */}
      <section className="relative py-32 border-b border-white/5">
        {/* Glows de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#0068ca10_0%,transparent_70%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#49c5b6] font-mono text-xs tracking-[0.4em] uppercase mb-4 block">
              // Cloudworks Knowledge Hub
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85]">
              Insights <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068ca] via-[#49c5b6] to-white">
                Tecnológicos
              </span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">
              Explora ideas, documentación técnica y estrategias para potenciar tu infraestructura digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- LISTADO DE ARTÍCULOS (GRID DE CRISTAL) --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-full flex flex-col bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] hover:border-[#49c5b6]/50 transition-all duration-500 shadow-2xl"
              >
                {/* Badge del Post */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-mono text-[#49c5b6] border border-[#49c5b6]/30 px-3 py-1 rounded-full uppercase tracking-widest">
                    {post.tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 italic">
                    {post.readTime}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#49c5b6] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {post.desc}
                  </p>
                </div>

                <Link
                  href={post.href}
                  className="mt-auto group/btn flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest"
                >
                  Continuar Lectura 
                  <span className="group-hover/btn:translate-x-2 transition-transform duration-300 text-[#49c5b6]">→</span>
                </Link>

                {/* Efecto de luz interna al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0068ca]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL (DISEÑO TERMINAL) --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-black border border-slate-800 p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#49c5b6] rounded-full blur-[120px] opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                ¿Listo para transformar tu <br />
                <span className="text-[#49c5b6]">infraestructura digital?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
                Trabajemos juntos en la expansión y automatización de tus procesos comerciales.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="bg-white text-black font-black py-5 px-12 rounded-2xl text-sm uppercase tracking-[0.2em] hover:bg-[#49c5b6] hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  Agendar Consultoría
                </Link>
              </motion.div>
              
              <div className="mt-12 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                {`> Initializing growth_engine.exe... [OK]`}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}