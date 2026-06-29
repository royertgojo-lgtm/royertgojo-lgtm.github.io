import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contacts";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 font-sans antialiased selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main className="container mx-auto px-4 space-y-32 pt-24 pb-16">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;