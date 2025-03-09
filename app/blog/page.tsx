export default function blog() {
    return (
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900">Blog</h1>
          <p className="text-lg text-gray-700 mt-4">
            Explora nuestros artículos sobre tecnología, desarrollo web y estrategias digitales.
            En Cloudworks nos enfocamos en compartir conocimientos y tendencias clave para la innovación digital.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">Últimas Tendencias en Next.js</h3>
              <p className="text-gray-700 mt-2">
                Descubre cómo aprovechar las nuevas funcionalidades de Next.js para optimizar el desarrollo web moderno.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">Optimización de eCommerce</h3>
              <p className="text-gray-700 mt-2">
                Estrategias para mejorar la velocidad, UX y conversión en tiendas Shopify y WooCommerce.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">Automatización con APIs</h3>
              <p className="text-gray-700 mt-2">
                Cómo integrar herramientas y APIs para hacer que tu negocio trabaje de manera más eficiente y automática.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  