export default function Contact() {
    return (
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900">Contacto</h1>
          <p className="text-lg text-gray-700 mt-4">
            ¿Tienes un proyecto en mente? Contáctanos y te ayudaremos a hacerlo realidad.
          </p>
          <form className="mt-8 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold" htmlFor="name">Nombre</label>
              <input type="text" id="name" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold" htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold" htmlFor="message">Mensaje</label>
              <textarea id="message" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700">
              Enviar Mensaje
            </button>
          </form>
          <div className="mt-8 text-gray-600">
            <p><strong>Email:</strong> contacto@cloudworks.com</p>
            <p><strong>Teléfono:</strong> +54 11 2345-6789</p>
            <p><strong>Ubicación:</strong> Buenos Aires, Argentina</p>
          </div>
        </div>
      </section>
    );
  }
  