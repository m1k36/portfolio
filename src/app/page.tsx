import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Skills from "@/src/components/sections/Skills";
import Projects from "@/src/components/sections/Projects";
import Contact from "@/src/components/sections/Contact";
import Footer from "@/src/components/sections/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
