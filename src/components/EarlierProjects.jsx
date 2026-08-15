import { earlierProjects } from "../content";
import Reveal from "./Reveal";

export default function EarlierProjects() {
  return (
    <section className="section container" aria-labelledby="early-heading">
      <Reveal className="section-header">
        <p className="eyebrow">Earlier projects</p>
        <h2 id="early-heading" className="display">
          Where the data habit started.
        </h2>
      </Reveal>
      <ul className="early-list">
        {earlierProjects.map((project) => (
          <Reveal as="li" className="early-row" key={project.title}>
            <div>
              <h3 className="early-title">{project.title}</h3>
              <p className="early-year">{project.year}</p>
            </div>
            <div>
              <p className="early-desc">{project.description}</p>
              <p className="early-stack">{project.stack}</p>
            </div>
            <a
              className="text-link"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkLabel} ↗
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
