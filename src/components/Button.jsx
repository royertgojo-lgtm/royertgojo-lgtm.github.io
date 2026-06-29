export default function Button({ children, variant = "primary", href, className = "", ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer text-sm shadow-sm";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-emerald-600 shadow-lg shadow-primary/20",
    secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-muted",
    outline: "bg-transparent text-foreground border border-border hover:bg-muted hover:text-primary",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}