function Header() {
  return (
    <header className="bg-blue-600 p-4 shadow-lg">
      <nav className="flex justify-between items-center text-white">
        <h1 className="text-3xl font-bold">Cloudworks</h1>
        <ul className="flex space-x-8">
          <li><a href="/" className="hover:text-teal-300 transition">Home</a></li>
          <li><a href="/about" className="hover:text-teal-300 transition">About</a></li>
          <li><a href="/services" className="hover:text-teal-300 transition">Services</a></li>
          <li><a href="/work" className="hover:text-teal-300 transition">Work</a></li>
          <li><a href="/contact" className="hover:text-teal-300 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
