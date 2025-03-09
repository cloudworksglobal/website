export default function services() {
    return (
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900">Nuestros Servicios</h1>
          <p className="text-lg text-gray-700 mt-4">
            En Cloudworks, ofrecemos soluciones digitales personalizadas para negocios de todos los tamaños. Nos especializamos en el desarrollo de plataformas web avanzadas,
            optimización de tiendas eCommerce y automatización de procesos para maximizar la eficiencia de las empresas.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">Desarrollo Web</h3>
              <p className="text-gray-700 mt-2">
                Construimos sitios web modernos, escalables y optimizados para rendimiento y SEO utilizando tecnologías como Next.js, React y TailwindCSS.
                Diseñamos plataformas personalizadas que se adaptan a las necesidades de cada cliente, asegurando una experiencia de usuario fluida y atractiva.
              </p>
              <ul className="mt-4 text-gray-600 text-left list-disc list-inside">
                <li>Desarrollo de sitios web corporativos y landing pages.</li>
                <li>Creación de plataformas SaaS a medida.</li>
                <li>Optimización de velocidad y rendimiento web.</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">eCommerce</h3>
              <p className="text-gray-700 mt-2">
                Desarrollamos y optimizamos tiendas en Shopify y WooCommerce para maximizar conversiones. Nos enfocamos en la experiencia del usuario, velocidad de carga
                y estrategias de venta avanzadas para aumentar la rentabilidad.
              </p>
              <ul className="mt-4 text-gray-600 text-left list-disc list-inside">
                <li>Configuración y personalización de tiendas Shopify y WooCommerce.</li>
                <li>Integración con pasarelas de pago y métodos de envío.</li>
                <li>Optimización de fichas de producto y UX para mejorar la conversión.</li>
                <li>Automatización de procesos de venta y gestión de stock.</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">Automatización</h3>
              <p className="text-gray-700 mt-2">
                Integramos herramientas avanzadas para automatizar flujos de trabajo y mejorar la eficiencia operativa. Utilizamos APIs y plataformas de automatización para conectar
                sistemas y reducir el tiempo de ejecución de tareas repetitivas.
              </p>
              <ul className="mt-4 text-gray-600 text-left list-disc list-inside">
                <li>Automatización de procesos con Zapier, Make y APIs personalizadas.</li>
                <li>Integración con CRM como HubSpot y Salesforce.</li>
                <li>Sincronización de datos entre plataformas.</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">Optimización de Performance</h3>
              <p className="text-gray-700 mt-2">
                Mejoramos el rendimiento de sitios web y tiendas online para garantizar tiempos de carga rápidos y mejores posiciones en los motores de búsqueda.
                Aplicamos técnicas avanzadas de optimización para reducir el uso de recursos y mejorar la experiencia del usuario.
              </p>
              <ul className="mt-4 text-gray-600 text-left list-disc list-inside">
                <li>Optimización de imágenes y archivos estáticos.</li>
                <li>Implementación de técnicas de lazy loading.</li>
                <li>Reducción de tiempos de carga en mobile.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  