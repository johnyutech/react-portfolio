import { throughline } from "../content";
import Reveal from "./Reveal";

export default function ThroughLine() {
  return (
    <section className="section container" aria-labelledby="throughline-heading">
      <Reveal className="section-header">
        <p className="eyebrow">{throughline.eyebrow}</p>
        <h2 id="throughline-heading" className="display">
          {throughline.heading}
        </h2>
      </Reveal>
      <Reveal className="throughline measure">
        {throughline.body.map((para) => (
          <p key={para} className="body-lg">
            {para}
          </p>
        ))}
      </Reveal>
    </section>
  );
}
