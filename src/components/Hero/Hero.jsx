import "./Hero.css";
import profilePhoto from "../../assets/Photo.jpg";
import resume from "../../assets/Gireesh's Resume.pdf";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hi, Myself Bhavanam Gireesh Reddy</h1>
          <p>
            A passionate AI Developer & building powerful applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-button">View Projects</a>
            <a href={resume} className="secondary-button" download="Gireesh_Reddy_Resume">
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profilePhoto} alt="Gireesh Reddy" />
        </div>
      </div>
    </section>
  );
}
