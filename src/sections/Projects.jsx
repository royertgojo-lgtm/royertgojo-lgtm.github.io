export default function Projects() {
  // Datos de tus proyectos para automatizar las tarjetas
  const projectList = [
    {
      title: "Plataforma de E-Commerce",
      description:
        "Un carrito de compras completo con pasarela de pagos simulada, filtros avanzados por categoría y precio, y un panel de administración para gestionar stock.",
      tags: ["React", "Tailwind CSS", "Context API", "Firebase"],
      githubLink: "https://github.com",
      demoLink: "https://vercel.app",
      image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Aplicación del Clima Pro",
      description:
        "Aplicación meteorológica que consume una API externa para mostrar el pronóstico en tiempo real basado en la ubicación del usuario, con gráficos de temperatura cambiantes.",
      tags: ["JavaScript", "React", "REST API", "Tailwind"],
      githubLink: "https://github.com",
      demoLink: "https://vercel.app",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Dashboard de Finanzas",
      description:
        "Panel de control interactivo para registrar ingresos y gastos mensuales, mostrando métricas financieras clave mediante gráficos visuales estilizados con Chart.js.",
      tags: ["React", "Chart.js", "Tailwind CSS", "LocalStorage"],
      githubLink: "https://github.com",
      demoLink: "https://vercel.app",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12">
      {/* Título de la Sección */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Mis <span className="text-emerald-400">Proyectos</span>
        </h2>
        <div className="h-1 w-12 bg-emerald-500 rounded mt-2 mx-auto"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Una selección de las aplicaciones web más recientes que he diseñado y programado.
        </p>
      </div>

      {/* Grid Responsivo (1 columna en móvil, 2 en tablets, 3 en pantallas grandes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="group bg-[#111827] border border-gray-800 hover:border-gray-700 rounded-2xl overflow-hidden shadow-xl flex flex-col h-full transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Contenedor de la Imagen con efecto hover */}
            <div className="relative overflow-hidden aspect-video bg-gray-900">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Contenido de la Tarjeta */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tecnologías utilizadas (Tags) */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs bg-[#0b0f19] text-gray-400 px-2.5 py-1 rounded-md border border-gray-800/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Enlaces y Botones de Acción */}
              <div className="flex items-center gap-4 pt-2 border-t border-gray-800/80">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-xl border border-gray-800 text-gray-300 hover:bg-gray-800 text-sm font-medium transition duration-200"
                >
                  GitHub
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-xl bg-emerald-500 text-black hover:bg-emerald-600 text-sm font-semibold transition duration-200 shadow-md shadow-emerald-500/10"
                >
                  En Vivo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}