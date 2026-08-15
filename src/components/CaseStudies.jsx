import { caseStudies } from "../content";
import Reveal from "./Reveal";
import { LedgerStat } from "./Ledger";

function CasePart({ label, children }) {
  return (
    <div className="case-part">
      <p className="eyebrow">{label}</p>
      {children}
    </div>
  );
}

function CaseStudy({ study }) {
  return (
    <Reveal as="article" className="case" aria-labelledby={`case-${study.id}`}>
      <div className="case-rail">
        <p className="eyebrow">Case study {study.number}</p>
        <h3 id={`case-${study.id}`} className="title">
          {study.title}
        </h3>
        {study.metric && <LedgerStat value={study.metric.value} label={study.metric.label} />}
      </div>
      <div>
        <CasePart label="The problem">
          <p>{study.problem}</p>
        </CasePart>
        <CasePart label="What I built">
          <p>{study.built}</p>
        </CasePart>
        <CasePart label="The outcome">
          <p>{study.outcome}</p>
        </CasePart>
        <div className="case-part case-analyst">
          <p className="eyebrow">The analyst takeaway</p>
          <p>{study.analyst}</p>
        </div>
        <ul className="tags" aria-label="Stack">
          {study.stack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="section container" aria-labelledby="work-heading">
      <Reveal className="section-header">
        <p className="eyebrow">Selected work</p>
        <h2 id="work-heading" className="display">
          Built while selling, measured like an analyst.
        </h2>
      </Reveal>
      {caseStudies.map((study) => (
        <CaseStudy key={study.id} study={study} />
      ))}
    </section>
  );
}
