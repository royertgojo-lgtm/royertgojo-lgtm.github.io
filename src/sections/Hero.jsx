import Button from "../components/Button.jsx";

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto min-h-[85vh] flex items-center py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="flex flex-col space-y-6 text-left order-2 lg:order-1">
          
          {/* Badge superior */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Software Engineer • React Specialist</span>
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight">
            Crafting <span className="text-primary font-serif italic">digital</span> <br />
            experiences with precision.
          </h1>

          {/* Descripción */}
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg leading-relaxed">
            Hi, I'm Pedro Machado — a software engineer specializing in React, Next.js, and TypeScript. I build scalable, performant web applications that users love.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button href="#contact" className="gap-2">
              Contact Me 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
            
            <Button href="#cv" variant="outline" className="gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </Button>
          </div>

          {/* Redes Sociales - Solo GitHub, Instagram y Facebook */}
          <div className="flex items-center gap-4 pt-8 text-muted-foreground text-xs font-mono">
            <span>Follow me:</span>
            <div className="flex gap-3">
              {/* GitHub */}
              <a 
                href="https://github.com/royertgojo-lgtm/royertgojo-lgtm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-full border border-border hover:text-primary transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.tiktok.com/es-419" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-full border border-border hover:text-primary transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="https://www.youtube.com/watch?v=cIYdiRDFWQw&t=5046s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-full border border-border hover:text-primary transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: FOTO CON TARJETAS FLOTANTES */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          
          {/* Aura difuminada detrás */}
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform scale-75 pointer-events-none"></div>
          
          {/* Marco de la foto */}
          <div className="relative w-full max-w-[360px] aspect-[4/5] bg-card border border-border rounded-3xl p-3 shadow-2xl overflow-visible">
            
            {/* Imagen */}
            <img 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop"
              alt="Pedro Machado Profile" 
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Tarjeta flotante: "5+ Years Exp." */}
            <div className="absolute -top-5 -left-5 bg-card/80 backdrop-blur-md border border-border p-3 rounded-2xl shadow-xl flex flex-col items-start min-w-[90px]">
              <span className="text-xl font-bold text-primary leading-none">5+</span>
              <span className="text-[10px] text-muted-foreground font-mono mt-1">Years Exp.</span>
            </div>

            {/* Tarjeta flotante: "Available for work" */}
            <div className="absolute -bottom-4 right-4 bg-card/90 backdrop-blur-md border border-border px-4 py-2 rounded-full shadow-xl flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-medium text-white tracking-wide">Available for work</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}