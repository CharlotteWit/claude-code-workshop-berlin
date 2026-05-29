import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Benefits } from "../components/Benefits";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { business } from "../content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-ink text-paper/60 px-6 py-10 text-center text-sm">
        © {new Date().getFullYear()} {business.name} · Mit ❤️ gebaut für Berliner Familien
      </footer>
    </>
  );
}
