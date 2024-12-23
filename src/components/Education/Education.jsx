import "./Education.css";

const educationDetails = [
  {
    degree: "Btech in Computer Science",
    institution: "Symbiosis Institute of Technology",
    year: "2021 - 2025",
  },
  {
    degree: "Class XII (Intermediate)",
    institution: "Bhashyam Junior Collage",
    year: "2019 - 2021",

  },
  {
    degree: "Class X (High School)",
    institution: "Bhashyam Blooms",
    year: "2019",

  },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <h2 className="edu">Education</h2>
      <div className="education-container">
        {educationDetails.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.degree}</h3>
            <p><strong>Institution:</strong> {item.institution}</p>
            <p><strong>Year:</strong> {item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
