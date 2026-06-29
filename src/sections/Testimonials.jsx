import { useState } from "react";

export default function Testimonials() {
  // Lista de testimonios (pueden ser de profesores, clientes o compañeros)
  const testimonialsList = [
    {
      name: "Carlos Mendoza",
      role: "Project Manager en TechSolutions",
      text: "Trabajar con Angel fue una experiencia excelente. Demostró un dominio absoluto de React y Tailwind CSS, entregando la interfaz del proyecto antes de la fecha límite y con un nivel de detalle impecable.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Sofía Rodríguez",
      role: "Diseñadora UI/UX Senior",
      text: "Tiene una habilidad increíble para traducir fielmente los diseños de Figma a código limpio y responsivo. Su código es ordenado y siempre está dispuesto a iterar para conseguir la mejor experiencia de usuario.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "David Silva",
      role: "Cliente Freelance",
      text: "Me desarrolló una landing page para mi negocio que superó mis expectativas. Aumentamos nuestras conversiones gracias a la velocidad de carga y lo limpio que se ve el sitio en teléfonos móviles.",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop"
    }
  ];

  // Estado para controlar qué testimonio se está mostrando
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones para navegar en el carrusel
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonialsList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonialsList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Título de la Sección */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Recomendaciones y <span className="text-emerald-400">Testimonios</span>
        </h2>
        <div className="h-1 w-12 bg-emerald-500 rounded mt-2 mx-auto"></div>
      </div>

      {/* Tarjeta Principal del Carrusel */}
      <div className="relative bg-[#111827] border border-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden max-w-3xl mx-auto">
        
        {/* Icono de Comillas Gigantes en el fondo decorativo */}
        <div className="absolute top-6 right-8 text-gray-800/40 text-7xl font-serif pointer-events-none select-none">
          “
        </div>

        {/* Contenido Dinámico del Testimonio */}
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Foto de Perfil */}
          <div className="w-20 h-20 rounded-full p-1 border-2 border-emerald-500/50 shadow-lg shadow-emerald-500/10 overflow-hidden">
            <img
              src={testimonialsList[currentIndex].avatar}
              alt={testimonialsList[currentIndex].name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Mensaje */}
          <p className="text-gray-300 text-base sm:text-lg italic leading-relaxed max-w-2xl">
            "{testimonialsList[currentIndex].text}"
          </p>

          {/* Información del Autor */}
          <div>
            <h3 className="text-lg font-bold text-white">
              {testimonialsList[currentIndex].name}
            </h3>
            <p className="text-xs font-mono text-emerald-400 mt-0.5">
              {testimonialsList[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Botones de Navegación (Flechas Izquierda / Derecha) */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-xl border border-gray-800 bg-[#0b0f19] text-gray-400 hover:text-white hover:border-emerald-500 transition-colors shadow-md"
            aria-label="Testimonio anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Indicadores de bolitas (Dots) */}
          <div className="flex gap-2">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-emerald-500" : "w-2 bg-gray-700"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2.5 rounded-xl border border-gray-800 bg-[#0b0f19] text-gray-400 hover:text-white hover:border-emerald-500 transition-colors shadow-md"
            aria-label="Siguiente testimonio"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}