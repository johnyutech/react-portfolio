import { hero, site } from "../content";
import { DeltaMark } from "./Ledger";

export default function Hero() {
  let order = 0;
  const rise = () => ({ "data-rise": true, style: { "--rise-order": order++ } });

  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <p className="eyebrow hero-eyebrow" {...rise()}>
        {hero.eyebrow}
      </p>
      <h1 id="hero-heading" className="display-xl">
        {hero.headlineLines.map((line, i) => (
          <span key={line} className="line" {...rise()}>
            {/* Real whitespace, so the heading reads correctly to screen
                readers and when copied, not just when rendered as blocks. */}
            {i > 0 ? " " : null}
            {line}
          </span>
        ))}
      </h1>
      <p className="ledger hero-proof" {...rise()}>
        <DeltaMark />
        <span>{hero.proof}</span>
      </p>
      <p className="body-lg hero-sub" {...rise()}>
        {hero.sub}
      </p>
      <div className="hero-actions" {...rise()}>
        <a className="btn btn--primary" href={`mailto:${site.email}`}>
          Email me
        </a>
        <a className="text-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <a className="text-link" href={site.resumeHref} download>
          Resume ↓
        </a>
      </div>
    </section>
  );
}
