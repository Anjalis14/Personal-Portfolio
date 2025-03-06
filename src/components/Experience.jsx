import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css"; // Import CSS file for animation



const experienceData = [
  {
    title: "Full Stack MERN Developer Intern",
    company: "Innomatics Research Labs",
    years: "January (2025) - Present",
    image: "https://static.thenounproject.com/png/390336-200.png", // Replace with actual image URL
    technologies: ["HTML", "CSS", "JavaScript","React","Node.js","Express.js","Mongo DB"],
    mainTech: ["React"],
  },
  
  {
    title: "Open Source Developer",
    company: "GirlScript Summer of Code (GSSOC'24)",
    years: "Oct-Dec (2024)",
    image: "https://static.thenounproject.com/png/390336-200.png",
    technologies: ["HTML","CSS","Javascript","React"],
    mainTech: ["Open Source COntributor"],
  },

  {
    title: "Data Analyst Intern",
    company: "VOIS",
    years: "Oct-Nov (2024)",
    image: "https://static.thenounproject.com/png/390336-200.png",
    technologies: ["Python","MS Excel", "EDA", "Data Handling"],
    mainTech: ["Data Analysis"],
  },

  {
    title: "AI-ML Virtual Intern",
    company: "EduSkill",
    years: "July-Sep (2024)",
    image: "https://static.thenounproject.com/png/390336-200.png",
    technologies: [ "MS Excel", "EDA", "Data Handling"],
    mainTech: ["Data Analysis"],
  },
];

const Experience = () => {
  return (
    <section id="experience" style={{ backgroundColor: "#f8f9fa", padding: "50px 0" }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "30px", color: "black" }}>
          Experience
        </h2>
        <VerticalTimeline>
          {/* Rotating Hourglass Icon */}
          <VerticalTimelineElement
            iconStyle={{
              background: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            icon={<i className="fas fa-hourglass-half rotating-hourglass"></i>}
          />

          {experienceData.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={exp.years}
              contentStyle={{
                background: "white",
                color: "black",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              iconStyle={{
                background: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              icon={
                <img
                  src={exp.image}
                  alt={exp.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%", // Circular image
                    objectFit: "cover",
                  }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
              <div style={{ marginTop: "10px" }}>
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;