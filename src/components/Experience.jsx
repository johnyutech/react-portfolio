import { experience, education } from "../content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section container" aria-labelledby="xp-heading">
      <Reveal className="section-header">
        <p className="eyebrow">Experience</p>
        <h2 id="xp-heading" className="display">
          Four teams, one habit: measure it.
        </h2>
      </Reveal>
      {experience.map((job) => (
        <Reveal as="article" className="xp-row" key={job.company}>
          <p className="xp-dates">{job.dates}</p>
          <div>
            <h3 className="xp-role">{job.role}</h3>
            <p className="xp-company">{job.company}</p>
            <ul className="xp-bullets">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
      <Reveal>
        <p className="xp-education">{education}</p>
      </Reveal>
    </section>
  );
}
