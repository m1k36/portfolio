import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/about/About";
import Skills from "@/src/components/sections/Skills";
import Projects from "@/src/components/sections/Projects";
import Contact from "@/src/components/sections/Contact";
import Footer from "@/src/components/sections/Footer";
import { getDictionary } from "@/src/lib/i18n";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Skills dict={dict.skills} />
      <Projects dict={dict.projects} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} />
    </div>
  );
}
