export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-6 bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <span className="text-2xl font-bold text-white tracking-tight">PM.</span>
        
        {/* Links centrales */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition">About</a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition">Projects</a>
          <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition">Experience</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition">Testimonials</a>
          
          {/* Botón Contact Me separado y en verde, como en la imagen */}
          <a 
            href="#contact" 
            className="ml-4 px-5 py-2 text-sm font-medium text-white bg-emerald-500 rounded-full hover:bg-emerald-600 transition shadow-md shadow-emerald-500/20"
          >
            Contact Me
          </a>
        </div>
        
        {/* Espacio vacío para mantener el balance */}
        <div className="w-10"></div>
      </div>
    </header>
  );
}