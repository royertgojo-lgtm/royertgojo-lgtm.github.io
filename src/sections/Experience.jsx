export default function Experience() {
  // Datos de tus trabajos o proyectos importantes
  const experiences = [
    {
      role: "Desarrollador Frontend Freelance",
      company: "Proyectos Independientes",
      period: "2024 - Presente",
      description:
        "Diseño y desarrollo de portafolios web, landing pages y aplicaciones a medida utilizando React y Tailwind CSS. Optimización de rendimiento y SEO básico para clientes locales.",
    },
    {
      role: "Desarrollador Web Junior",
      company: "Agencia Digital XYZ",
      period: "2023 - 2024",
      description:
        "Colaboré en la maquetación de interfaces responsivas y la integración de APIs REST en aplicaciones web de comercio electrónico. Mantuve código limpio y participé en revisiones de código semanales.",
    },
    {
      role: "Estudiante y Desarrollador Autónomo",
      company: "Formación e Iniciativas Propias",
      period: "2022 - 2023",
      description:
        "Construcción de múltiples proyectos de práctica para dominar JavaScript moderno, lógica de componentes en React, estados, hooks y despliegues automáticos en plataformas como Vercel.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12">
      {/* Título de la Sección */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Mi <span className="text-emerald-400">Trayectoria</span>
        </h2>
        <div className="h-1 w-12 bg-emerald-500 rounded mt-2 mx-auto"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Un repaso por mi experiencia laboral y académica en el mundo del código.
        </p>
      </div>

      {/* Contenedor Principal del Timeline */}
      <div className="relative border-l border-gray-800 md:border-l-0 md:before:absolute md:before:top-0 md:before:bottom-0 md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-[2px] md:before:bg-gray-800">
        
        {experiences.map((exp, index) => {
          // Lógica para alternar izquierda/derecha en pantallas grandes
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative mb-12 md:mb-8 flex flex-col md:flex-row items-start ${
                isEven ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Punto indicador de la línea de tiempo */}
              <div className="absolute top-1.5 -left-[7px] md:left-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0b0f19] border-2 border-emerald-400 z-10 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />

              {/* Tarjeta de Experiencia */}
              <div
                className={`w-full md:w-[46%] pl-6 md:pl-0 ${
                  isEven ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-[#111827] border border-gray-800 hover:border-gray-700 p-6 rounded-2xl shadow-xl transition-all duration-200 group relative">
                  {/* Pequeña flecha decorativa para pantallas grandes */}
                  <div
                    className={`hidden md:block absolute top-6 w-3 h-3 bg-[#111827] border-t border-l border-gray-800 transform rotate-45 ${
                      isEven
                        ? "-right-[7px] border-t-transparent border-l-transparent border-r border-b"
                        : "-left-[7px]"
                    }`}
                  />

                  {/* Encabezado de la Tarjeta */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-400/10 px-2.5 py-1 rounded-md w-fit">
                      {exp.period}
                    </span>
                    <h4 className="text-sm font-medium text-gray-500 font-mono">
                      {exp.company}
                    </h4>
                  </div>

                  {/* Cargo e Información */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}