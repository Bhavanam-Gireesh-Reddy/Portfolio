import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-left">
          <a href="#hero" className="logo">
            Bhavanam Gireesh Reddy
          </a>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}