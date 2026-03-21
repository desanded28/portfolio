import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GridBackground } from "@/components/GridBackground";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <SmoothScroll />
      <GridBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-white/[0.08] py-8 text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto px-6">
          Built by Sander Floria &middot; {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}
