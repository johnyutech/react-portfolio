export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-name" href="#top">
          John Yu
        </a>
        <nav aria-label="Site">
          <ul className="nav-links">
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
