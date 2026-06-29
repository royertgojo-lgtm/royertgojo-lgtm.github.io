export default function About() {
  const qualities = [
    {
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Performance",
      description: "Optimizing for speed and delivering lightning-fast user experiences.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "Staying ahead with the latest technologies and best practices.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      {/* Scroll indicator */}
      <div className="text-center mb-8">
        <span className="text-[10px] font-mono text-muted-foreground tracking-wider">SCROLL</span>
      </div>

      {/* Título de la Sección */}
      <div className="text-center mb-12">
        <h2 className="text-xs font-mono text-emerald-400 tracking-wider mb-3">ABOUT ME</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Building the future, <br />
          one component at a time.
        </h3>
      </div>

      {/* Contenedor Grid de 2 Columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* Columna Izquierda: Texto biográfico */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            I'm a passionate software engineer with over 5 years of experience crafting digital products that make a difference. My journey started with a curiosity for how things work on the web, and it has evolved into a deep expertise in modern frontend technologies.
          </p>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            I specialize in React, Next.js, and TypeScript, building everything from sleek landing pages to complex enterprise applications. My approach combines technical excellence with a keen eye for design and user experience.
          </p>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>

          {/* Cita destacada */}
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-white italic text-sm leading-relaxed">
              "My mission is to create digital experiences that are not just functional, but truly delightful — products that users love to use and developers love to maintain."
            </p>
          </div>
        </div>

        {/* Columna Derecha: Grid de 4 cualidades con iconos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {qualities.map((quality, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-5 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-3">
                {quality.icon}
              </div>
              <h4 className="text-base font-semibold text-white mb-2">{quality.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {quality.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}