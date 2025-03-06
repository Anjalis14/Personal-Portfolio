import React from "react";
import "../styles/Project.css"; // Import styles

// Sample project data with external links
const projectData = [
  
  {
    id: 1,
    title: "Personal Portfolio",
    image: "personal.png",
    languages: "HTML, CSS, React",
    link: "https://github.com/Anjalis14", 
  },
  {
    id: 2,
    title: "Memory Game",
    image: "memory.png",
    languages: "HTML, CSS, JAVASCRIPT",
    link: "https://anjalis14.github.io/Simon-Game/", // Add your external link
  },
  {
    id: 3,
    title: "E-Commerce Website",
    image: "commerce.png",
    languages: "HTML, CSS, JAVASCRIPT",
    link: "https://anjalis14.github.io/E-commerce-website/", // Add your external link
  },
  {
    id: 4,
    title: "Coffee Order Website",
    image: "coffee.png",
    languages: "HTML, CSS, JAVASCRIPT",
    link: "https://github.com/Anjalis14", // Add your external link
  },
  {
    id: 5,
    title: "Scientific-Calculator",
    image: "calc.png",
    languages: "HTML, CSS, JAVASCRIPT",
    link: "https://anjalis14.github.io/Scientific-Calculator/", // Add your external link
  },
  {
    id: 6,
    title: "Innomatics Clone",
    image: "innomatics.png",
    languages: "HTML, CSS",
    link: "https://github.com/Anjalis14", 
  },
];

const Project = () => {
  return (
    <section id="project">
      <h2 className="section-title">Glimps of My Work</h2>
      <div className="projects-container">
        {projectData.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h1 className="project-title">{project.title}</h1>
            <p className="project-languages"><b>Tech Stack:-</b> {project.languages}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;