export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center">
        <div className="container mx-auto">
          <p className="text-gray-400">© {new Date().getFullYear()} Cloudworks. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
  