import React from 'react';

function Skills() {
  const skills = [
    { name: "Java", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "HTML & CSS", level: 95 },
    { name: "Express.js", level: 80 },
    { name: "Redux", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "TypeScript", level: 65 },
    { name: "Git & GitHub", level: 85 },
    { name: "REST API", level: 80 },
    { name: "Firebase", level: 70 },
     
  ];

  return (
    <section className="skills" data-aos="fade-up">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <h3>{skill.name}</h3>
            <div className="skill-progress">
              <div
                className="skill-progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
