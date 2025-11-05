import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-neutral-900/90 backdrop-blur-md text-white z-50 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="text-2xl font-bold text-blue-400">
          Fernando<span className="text-white">Dev</span>
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-blue-300 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
          <ul className="flex flex-col p-4 space-y-2 text-white">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 hover:text-blue-300 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
