  "use client";

  import Link from "next/link";
  import { motion } from "framer-motion";

  export default function BlogPage() {
    return (
      <>
        {/* Hero del Blog */}
        <section className="bg-blue-50 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Blog de Cloudworks
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explora ideas, tendencias y estrategias para potenciar tu infraestructura comercial y digital.
            </p>
          </motion.div>
        </section>

        {/* Artículos */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 text-center mb-16"
            >
              Últimos Artículos
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                     title: "Infraestructura digital orientada a Ventas",
                  desc: "Descubre cómo aprovechar un ecosistema digital para optimizar el desarrollo comercial.",
                  href: "/blog/Infraestructura_Digital" 
                },
                {
                title: "Optimización de eCommerce",
                desc: "Estrategias para mejorar velocidad, UX y conversión en tiendas Shopify y WooCommerce.",
                href: "/blog/optimizacion-ecommerce"
              },
                {
                  title: "Automatización con APIs",
                  desc: "Cómo integrar herramientas y APIs para hacer que tu negocio trabaje de forma automática.",
                  href: "/blog/automatizacion-apis"
                  }
              ].map((post, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.2 }}
                  className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition text-center flex flex-col justify-between h-full"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">{post.title}</h3>
                    <p className="text-gray-600">{post.desc}</p>
                  </div>
                  <Link
  href={post.href}
  className="text-blue-600 font-semibold hover:underline mt-6 inline-block"
>
  Leer artículo →
</Link>

                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-blue-600 text-center text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6"
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para transformar tu infraestructura digital?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Trabajemos juntos en la expansión y automatización de tus procesos de ventas.
            </p>
            <Link
              href="{post.href} "
              className="bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition"
            >
           Leer artículo →

            </Link>
          </motion.div>
        </section>
      </>
    );
  }
