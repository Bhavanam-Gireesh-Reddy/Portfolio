import "./Skills.css";

const skills = [
  { category: "Machine Learning", items: ["Classification", "Regression", "Clustering Problems", "etc..",] },
  { category: "Deep Learning", items: ["CNN", "RNN", "LSTM", "Transformers"] },
  { category: "Tools", items: ["Git", "VsCode", "Kaggle"] },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((group, index) => (
          <div className="skill-group" key={index}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
