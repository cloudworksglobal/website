"use client";

export default function OptimizacionEcommerce() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Optimización de eCommerce: Velocidad, UX y Conversión
        </h1>

        <p className="text-lg text-gray-700 text-left max-w-3xl mx-auto mb-8">
          La optimización de tiendas eCommerce no es un reto solo de diseño. Es un trabajo técnico que requiere entender performance, estructura y experiencia de usuario. En Cloudworks ayudamos a marcas como 310 Nutrition, SomosReyes y Kingsman a mejorar la conversión de sus sitios.
        </p>

        <ul className="list-disc text-left text-gray-700 max-w-3xl mx-auto mb-8 pl-5">
          <li>
            <strong>310 Nutrition:</strong> Redujimos el LCP de 4.2s a 2.1s optimizando carga crítica en Shopify y lazy-loading con JavaScript nativo.
          </li>
          <li>
            <strong>SomosReyes:</strong> Auditamos todo el código Liquid y detectamos cuellos de botella en snippets. Resultado: +17% en velocidad y mayor retención mobile.
          </li>
          <li>
            <strong>Kingsman:</strong> Implementamos un sistema de bundles con lógica condicional y rebuy personalizado. Aumentó 22% el AOV en campañas de pago.
          </li>
        </ul>

        <div className="flex justify-center mb-12">
          <img
  src="/ecommerce-performance-graph.png"
  alt="Gráfico de performance eCommerce"
  className="rounded-lg shadow-md w-full max-w-2xl"
/>
        </div>

        <p className="text-lg text-gray-700 text-left max-w-3xl mx-auto mb-8">
          Usamos herramientas como Google Lighthouse, GTmetrix, Hotjar y Clarity para medir cada etapa. A nivel técnico, trabajamos sobre Shopify, WooCommerce, y sistemas headless con Next.js y API REST.
        </p>

        <p className="text-lg text-gray-700 text-left max-w-3xl mx-auto mb-8">
          Nuestros ajustes no son teóricos: cada mejora se mide. La velocidad no solo impacta el SEO, también mejora la experiencia de compra y reduce el abandono del carrito.
        </p>

        <div className="mt-10">
          <a
            href="/blog"
            className="text-blue-600 font-bold hover:underline"
          >
            ← Volver al Blog
          </a>
        </div>
      </div>
    </section>
  );
}
