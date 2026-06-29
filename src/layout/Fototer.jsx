export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pedro Machado. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/royertgojo-lgtm/royertgojo-lgtm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-muted-foreground hover:text-emerald-400 transition font-mono"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/tu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-muted-foreground hover:text-emerald-400 transition font-mono"
          >
            LinkedIn
          </a>
          <a 
            href="https://twitter.com/tu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-muted-foreground hover:text-emerald-400 transition font-mono"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}