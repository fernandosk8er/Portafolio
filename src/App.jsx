import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Sección Inicio */}
      <section
        id="home"
        className="pt-32 text-center flex flex-col items-center justify-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          Fernando Sequera
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-300 mb-4"
        >
          Técnico en Electrónica & Desarrollador Autodidacta
        </motion.h2>

        <p className="max-w-2xl text-gray-400 text-lg mb-6">
          Soy técnico en electrónica con amplia experiencia en reparación de
          equipos y sistemas eléctricos, apasionado por la tecnología y la
          creación de soluciones prácticas. Mi objetivo es unir el mundo físico
          con el digital mediante proyectos que integren hardware, software y
          creatividad.
        </p>

        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Ver proyectos ↓
        </a>
      </section>

      {/* Sección Sobre mí */}
      <section id="about" className="max-w-4xl mx-auto mt-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">👨‍🔧 Sobre mí</h2>
        <p className="text-gray-400 leading-relaxed">
          Soy técnico en electrónica con experiencia en reparación de equipos
          eléctricos y sistemas de control. Me gusta aprender nuevas tecnologías
          y desarrollar proyectos que mezclen hardware, software y creatividad.
          Mi meta es seguir creciendo como profesional y aportar soluciones que
          generen impacto real.
        </p>
      </section>

      {/* Sección Proyectos */}
      <section id="projects" className="max-w-6xl mx-auto mt-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">🚀 Proyectos Destacados</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-3">
              Sistema IoT con ESP32
            </h3>
            <p className="text-gray-400 mb-4">
              Control y monitoreo de dispositivos eléctricos desde una aplicación
              web, integrando hardware y software en tiempo real.
            </p>
            <a
              href="https://github.com/fernandosk8er"
              className="text-blue-500 hover:text-blue-400 font-semibold"
            >
              Ver en GitHub →
            </a>
          </motion.div>

          {/* Proyecto 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-3">
              Portafolio Interactivo
            </h3>
            <p className="text-gray-400 mb-4">
              Sitio web moderno y responsivo construido con React, Vite y
              TailwindCSS para destacar habilidades técnicas y creatividad
              visual.
            </p>
            <a
              href="https://github.com/fernandosk8er"
              className="text-blue-500 hover:text-blue-400 font-semibold"
            >
              Ver en GitHub →
            </a>
          </motion.div>

          {/* Proyecto 3 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-3">
              Automatización de Taller
            </h3>
            <p className="text-gray-400 mb-4">
              Sistema local de gestión de reparaciones, clientes y repuestos,
              optimizando el trabajo diario con herramientas digitales simples.
            </p>
            <a
              href="https://github.com/fernandosk8er"
              className="text-blue-500 hover:text-blue-400 font-semibold"
            >
              Ver en GitHub →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contact" className="max-w-3xl mx-auto mt-24 px-6 text-center pb-24">
        <h2 className="text-3xl font-semibold mb-4">📞 Contacto</h2>
        <p className="text-gray-400 mb-6">
          Si quieres colaborar o saber más sobre mis proyectos, contáctame:
        </p>
        <div className="space-y-2 text-gray-300">
          <p>📧 fernandosk8er@hotmail.com</p>
          <p>📱 +55 41 99539 2327</p>
          <p>
            <a
              href="https://github.com/fernandosk8er"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/fernando-sequera-72a39b26a/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
