import React from "react";
import "../styles/Skills.css"; // Import styles
import { Icon } from "@iconify/react";

// Skill data with icons
const skillsData = [
  { id: 1, name: "JavaScript", icon: "logos:javascript" },
  { id: 2, name: "Python", icon: "logos:python" },
  { id: 3, name: "Java", icon: "logos:java" },
  { id: 4, name: "C++", icon: "logos:c-plusplus" },
  { id: 5, name: "HTML", icon: "logos:html-5" },
  { id: 6, name: "CSS", icon: "logos:css-3" },
  { id: 7, name: "React", icon: "logos:react" },
  { id: 8, name: "Node.js", icon: "logos:nodejs" },
  { id: 9, name: "MongoDB", icon: "logos:mongodb" },
  { id: 10, name: "SQL", icon: "logos:mysql" },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skill-card">
            {<Icon icon={skill.icon} className="skill-icon" />}
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;