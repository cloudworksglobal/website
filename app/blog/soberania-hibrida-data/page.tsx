 "use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function SoberaniaHibridaPage() {
  return (
    <div className="bg-[#020617] min-h-screen text-white pt-32 pb-20 overflow-x-hidden">
      <article className="container mx-auto px-6 max-w-5xl">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-l-4 border-[#49c5b6] pl-8"
        >
          <span className="text-[#49c5b6] font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
            // Intelligence Report 2026 _ Cloudgworks Global
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.85]">
            La Paradoja <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068ca] via-[#49c5b6] to-white">
              de la Nube
            </span>
          </h1>
          <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
            Soberanía, Control y la Nueva Era Híbrida
          </p>
        </motion.div>

        {/* --- HERO IMAGE CONTAINER --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] md:h-[500px] mb-20 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(73,197,182,0.1)]"
        >
          <Image 
            src="/hibrida.png" 
            alt="Cloudgworks Hybrid Infrastructure" 
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <div className="bg-black/50 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl">
              <p className="text-[10px] font-mono text-[#49c5b6] uppercase tracking-widest">Visualización de Sistema v3.1</p>
              <p className="text-white text-xs font-bold uppercase">Hybrid Core Orchestrator</p>
            </div>
          </div>
        </motion.div>

        {/* --- CONTENIDO PRINCIPAL --- */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-16">
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="space-y-10 text-slate-300 leading-relaxed text-lg"
          >
            <p className="text-2xl text-white font-light leading-snug">
              Durante la última década, la narrativa empresarial fue unidireccional: migrar todo a la nube pública era el estándar. Sin embargo, al llegar al 2026, nos encontramos en un punto de inflexión estratégico.
            </p>

            <p>
              Muchas organizaciones han descubierto que el modelo <span className="text-white font-bold italic">"Cloud-Only"</span> presenta grietas críticas, especialmente en lo que respecta a la **soberanía de datos**. La dependencia total de proveedores externos ha generado una pérdida de control sobre la ubicación física de la información y, lo que es más preocupante, una exposición a cambios geopolíticos y regulatorios que pueden paralizar una operación en cuestión de horas.
            </p>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0068ca]/10 to-transparent border-l-2 border-[#0068ca]">
              <h3 className="text-white font-black mb-4 uppercase tracking-tighter">La Visión de Cloudgworks</h3>
              <p className="text-sm italic">
                "Observamos que la verdadera eficiencia no reside en la migración masiva, sino en la orquestación inteligente. La Nube Híbrida surge no como una alternativa, sino como la evolución necesaria."
              </p>
            </div>

            <p>
              Este modelo permite que las empresas mantengan sus cargas de trabajo críticas y datos sensibles en infraestructura privada —bajo su propio control legal y técnico— mientras aprovechan la elasticidad y los servicios de IA avanzada de las nubes públicas como AWS o Azure para sus capas de cara al cliente. Es el equilibrio perfecto entre seguridad blindada y escalabilidad infinita.
            </p>

            <h2 className="text-3xl font-black text-white mt-16 flex items-center gap-4 uppercase tracking-tighter">
              <span className="text-[#49c5b6]">01.</span> Edge Computing
            </h2>
            <p>
              Con el auge de las aplicaciones de IA generativa en tiempo real y la automatización industrial, la latencia se ha convertido en el nuevo cuello de botella. Enviar terabytes de datos a una región de servidor a miles de kilómetros de distancia para recibir una respuesta en milisegundos ya no es viable. La infraestructura híbrida permite procesar los datos en el lugar donde se generan, optimizando así el ancho de banda.
            </p>

            <h2 className="text-3xl font-black text-white mt-16 flex items-center gap-4 uppercase tracking-tighter">
              <span className="text-[#49c5b6]">02.</span> Estrategia FinOps
            </h2>
            <p>
              El fenómeno conocido como <span className="text-white font-mono">"Cloud Bill Shock"</span> ha llevado a cuestionar la rentabilidad de la nube pública. Al implementar una arquitectura híbrida, las empresas pueden mover cargas de trabajo de "estado estacionario" a servidores locales donde los costos son predecibles y amortizables, dejando la nube pública exclusivamente para picos de tráfico.
            </p>

            <p className="border-t border-white/10 pt-10">
              El futuro de la tecnología no es 100% nube, es **100% control**. En **Cloudgworks**, no solo construimos conexiones; diseñamos fortalezas digitales que permiten a las empresas escalar sin ceder su soberanía.
            </p>
          </motion.div>

          {/* --- SIDEBAR INFO --- */}
          <aside className="space-y-8">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl">
              <h4 className="text-[#49c5b6] font-mono text-[10px] uppercase tracking-[0.2em] mb-4">Key Takeaways</h4>
              <ul className="text-xs space-y-4 text-slate-400">
                <li className="flex gap-2 font-medium">
                  <span className="text-[#49c5b6] font-bold">✓</span> Reducción de costos operativos hasta 40% anual.
                </li>
                <li className="flex gap-2 font-medium">
                  <span className="text-[#49c5b6] font-bold">✓</span> Latencia reducida a niveles sub-5ms.
                </li>
                <li className="flex gap-2 font-medium">
                  <span className="text-[#49c5b6] font-bold">✓</span> Cumplimiento total de normativas GDPR y locales.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-[#49c5b6]/20 to-transparent p-[1px] rounded-3xl">
              <div className="bg-[#020617] p-6 rounded-3xl">
                <h4 className="text-white font-black text-sm uppercase mb-4 tracking-tighter">Stack Recomendado</h4>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Kubernetes", "AWS Outposts", "Next.js", "Python"].map((tech) => (
                    <span key={tech} className="text-[9px] font-mono bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* --- CTA FINAL --- */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 p-12 md:p-20 rounded-[4rem] mt-24 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#49c5b6] rounded-full blur-[150px] opacity-10"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">¿Tu arquitectura está lista <br /> para el <span className="text-[#49c5b6]">2026?</span></h3>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
              Analicemos juntos cómo una estrategia híbrida diseñada por Cloudgworks puede disparar tu eficiencia comercial.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-black font-black py-5 px-14 rounded-2xl hover:bg-[#49c5b6] hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              Agendar Auditoría Tech
            </Link>
            <div className="mt-8 text-[10px] font-mono text-slate-600 uppercase">
              {`> status: ready_to_deploy [OK]`}
            </div>
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <Link href="/blog" className="text-slate-600 hover:text-[#49c5b6] transition-colors font-mono text-xs uppercase tracking-[0.4em]">
            {`[ Return to Hub ]`}
          </Link>
        </div>
      </article>
    </div>
  );
}