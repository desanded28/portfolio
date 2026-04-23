import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Colophon } from "@/components/Colophon";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollAnimations } from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollAnimations />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Colophon />
    </>
  );
}
