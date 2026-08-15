import { skills, languages } from "../content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="section container" aria-labelledby="skills-heading">
      <Reveal className="section-header">
        <p className="eyebrow">Skills</p>
        <h2 id="skills-heading" className="display">
          Grouped by what they do.
        </h2>
      </Reveal>
      <Reveal className="skills-grid">
        {skills.map(({ group, items }) => (
          <div className="skills-group" key={group}>
            <h3>{group}</h3>
            <ul className="tags">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
      <Reveal>
        <p className="skills-langs">{languages}</p>
      </Reveal>
    </section>
  );
}
