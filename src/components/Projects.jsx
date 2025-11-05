import { motion } from "framer-motion";

const projects = [
  {
    title: "Controlador IoT con ESP32",
    description: "Sistema de monitoreo y control de temperatura, humedad y energía usando ESP32 y dashboard web.",
    image: "https://via.placeholder.com/400x250?text=Proyecto+ESP32",
    github: "https://github.com/fernandosk8er/esp32-project",
    demo: "#",
  },
  {
    title: "Portafolio React + Tailwind",
    description: "Diseño moderno, minimalista y completamente responsivo para mostrar tus proyectos y habilidades.",
    image: "https://via.placeholder.com/400x250?text=Portafolio",
    github: "https://github.com/fernandosk8er/portafolio",
    demo: "#",
  },
  {
    title: "Gestor de Tareas Vite",
    description: "Aplicación web ligera para crear y organizar tareas, hecha con React, Vite y almacenamiento local.",
    image: "https://via.placeholder.com/400x250?text=Gestor+de+Tareas",
    github: "https://github.com/fernandosk8er/task-manager",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🚀 Proyectos
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-blue-600 font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Código
                  </a>
                  <a
                    href={project.demo}
                    className="text-green-600 font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
