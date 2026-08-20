import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ThroughLine from "./components/ThroughLine";
import CaseStudies from "./components/CaseStudies";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import EarlierProjects from "./components/EarlierProjects";
import Contact from "./components/Contact";
import { site } from "./content";

export default function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <ThroughLine />
        <CaseStudies />
        <Experience />
        <Skills />
        <EarlierProjects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 {site.name}</p>
          <p>{site.location}</p>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
