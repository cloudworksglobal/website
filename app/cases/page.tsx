export default function cases() {
    return (
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900">Casos de Éxito</h1>
          <p className="text-lg text-gray-700 mt-4">
            En Cloudworks hemos trabajado con diversas empresas para mejorar su presencia digital,
            optimizar su rendimiento y automatizar sus procesos clave.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">Cliente A - Plataforma eCommerce</h3>
              <p className="text-gray-700 mt-2">
                Implementamos una tienda online optimizada para SEO y conversiones, logrando aumentar las ventas en un 40% en los primeros 6 meses.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">Cliente B - Automatización CRM</h3>
              <p className="text-gray-700 mt-2">
                Integración de HubSpot y Salesforce con automatización de workflows, reduciendo el tiempo de respuesta a clientes en un 60%.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">Cliente C - Optimización de Performance</h3>
              <p className="text-gray-700 mt-2">
                Rediseñamos la arquitectura de su sitio web, mejorando la velocidad de carga en un 70% y reduciendo el rebote en un 30%.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }