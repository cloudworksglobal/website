export default function Home() {
    return (
      <>
        {/* Sección Hero */}
        <section className="bg-gray-100 py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900">Bienvenido a Cloudworks</h1>
            <p className="text-lg text-gray-700 mt-4">
              Soluciones innovadoras en desarrollo web y automatización.
            </p>
            <a
              href="/services"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700"
            >
              Descubre nuestros servicios
            </a>
          </div>
        </section>
        
        {/* Sección de Introducción */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900">¿Quiénes Somos?</h2>
            <p className="text-lg text-gray-700 mt-4">
              En Cloudworks, transformamos ideas en soluciones digitales eficientes.
              Con más de 10 años de experiencia en desarrollo web, eCommerce y automatización,
              ayudamos a empresas a crecer en el entorno digital.
            </p>
          </div>
        </section>
        
        {/* Servicios */}
        <section className="py-16 bg-gray-100 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Desarrollo Web</h3>
                <p className="text-gray-700 mt-2">
                  Creamos sitios web a medida con tecnologías modernas como Next.js, React y Tailwind CSS.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">eCommerce</h3>
                <p className="text-gray-700 mt-2">
                  Especialistas en Shopify y WooCommerce para potenciar tu tienda online.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Automatización</h3>
                <p className="text-gray-700 mt-2">
                  Integramos APIs y herramientas para optimizar procesos empresariales.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Casos de Éxito */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900">Casos de Éxito</h2>
            <p className="text-lg text-gray-700 mt-4">
              Hemos trabajado con empresas líderes en distintos sectores, ayudándolas a escalar sus negocios.
            </p>
          </div>
        </section>
        
        {/* Blog */}
        <section className="py-16 bg-gray-100 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900">Blog</h2>
            <p className="text-lg text-gray-700 mt-4">
              Explora nuestros artículos sobre tecnología, desarrollo y estrategias digitales.
            </p>
          </div>
        </section>
        
        {/* Contacto */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900">Contáctanos</h2>
            <p className="text-lg text-gray-700 mt-4">
              Estamos listos para ayudarte con tu próximo proyecto. ¡Hablemos!
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700"
            >
              Contacto
            </a>
          </div>
        </section>
      </>
    );
  }
  