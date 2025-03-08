import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-2xl font-bold">
          Cloudworks
        </Link>
        <div className="flex space-x-6">
          <Link href="/services" className="hover:text-gray-400">
            Servicios
          </Link>
          <Link href="/cases" className="hover:text-gray-400">
            Casos de Éxito
          </Link>
          <Link href="/blog" className="hover:text-gray-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
