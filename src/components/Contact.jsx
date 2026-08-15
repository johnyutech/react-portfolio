import { contact, site } from "../content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section container contact" aria-labelledby="contact-heading">
      <Reveal>
        <h2 id="contact-heading" className="display-xl">
          {contact.heading}
        </h2>
        <p className="body-lg contact-body">{contact.body}</p>
        <div className="contact-actions">
          <a className="btn btn--primary" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="text-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a className="text-link" href={site.resumeHref} download>
            Resume ↓
          </a>
        </div>
        <ul className="contact-details">
          <li>{site.phone}</li>
          <li>{site.location}</li>
        </ul>
      </Reveal>
    </section>
  );
}
