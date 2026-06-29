import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Usar variables de entorno
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // LOG PARA VERIFICAR LAS VARIABLES DE ENTORNO
  console.log("Service ID:", SERVICE_ID);
  console.log("Template ID:", TEMPLATE_ID);
  console.log("Public Key:", PUBLIC_KEY);

  const contactInfo = [
    {
      icon: (
        <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "abdbon12@gmail.com",
      href: "mailto:abdbon12@gmail.com"
    },
    {
      icon: (
        <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+52 2411954474",
      href: "tel:+522411954474"
    },
    {
      icon: (
        <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "San Jose Teacalco, Tlaxcala, Mexico",
      href: "#"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      // Obtener los valores del formulario
      const name = formRef.current.user_name.value;
      const email = formRef.current.user_email.value;
      const message = formRef.current.message.value;

      // LOG PARA VER LOS DATOS DEL FORMULARIO
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error("Faltan variables de entorno:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
        throw new Error("EmailJS configuration is missing");
      }

      // Enviar con los parámetros correctos
      const result = await emailjs.send(
        SERVICE_ID, 
        TEMPLATE_ID, 
        {
          user_name: name,
          user_email: email,
          message: message,
        }, 
        PUBLIC_KEY
      );

      // LOG DE RESPUESTA EXITOSA
      console.log("EmailJS Response:", result);

      setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      formRef.current.reset();
    } catch (error) {
      // LOG DEL ERROR COMPLETO
      console.error("Error sending email:", error);
      console.error("Error details:", {
        text: error.text,
        status: error.status,
        message: error.message
      });
      setStatus({ type: "error", message: error.text || "Something went wrong. Please try again later." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <span className="text-[10px] font-mono text-muted-foreground tracking-wider">GET IN TOUCH</span>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Let's build something great.
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* Formulario */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
          </p>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-mono text-muted-foreground mb-1.5">Name</label>
              <input 
                type="text" 
                name="user_name"
                placeholder="Your name" 
                required
                className="w-full bg-card border border-border rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-mono text-muted-foreground mb-1.5">Email</label>
              <input 
                type="email" 
                name="user_email"
                placeholder="your@email.com" 
                required
                className="w-full bg-card border border-border rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-mono text-muted-foreground mb-1.5">Message</label>
              <textarea 
                name="message"
                placeholder="Tell me about your project..." 
                rows="4" 
                required
                className="w-full bg-card border border-border rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none"
              ></textarea>
            </div>
            
            {status.message && (
              <div className={`flex items-center gap-2 text-xs p-3 rounded-xl ${
                status.type === "success" 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                  : "bg-red-500/10 text-red-400 border border-red-500/20"
              }`}>
                {status.type === "success" ? (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {status.message}
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={isSending}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-5 rounded-xl transition duration-200 shadow-lg shadow-emerald-500/20 text-sm disabled:opacity-50 disabled:cursor-not-allowed w-full justify-center"
            >
              {isSending ? (
                <>
                  <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h4 className="text-sm font-semibold text-white">Contact Information</h4>
            
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-muted-foreground">{item.label}</div>
                    <div className="text-sm text-white">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability Card */}
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">Currently Available</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              I'm currently available for work. If you have any questions or would like to get in touch, please don't hesitate to reach out.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}