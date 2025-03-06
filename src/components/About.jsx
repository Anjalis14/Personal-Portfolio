import React from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify-icons/logos/angular";
import reactIcon from "@iconify-icons/logos/react";
import vueIcon from "@iconify-icons/logos/vue";
import "../styles/About.css"; // Make sure you create this CSS file

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-details">
          {/* Profile Image */}
          <div className="profile-image">
          <img src="image.jpg" alt="Profile" />

          </div>

          {/* Bio and Tech Stack */}
          <div className="about-text">
            <p>
              Hi, I'm <strong>Anjali Sharma</strong>, currently pursuing <b>Bachelor of Engineering (B.E.) in E&TC </b> from <b>SPPU</b>
            </p>
            <p>
            With expertise in <b>React.js, Node.js,</b> and <b>MongoDB,</b> I specialize in building scalable, high-performance applications that are not only functional but also intuitive and user-friendly. 
            </p>
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;