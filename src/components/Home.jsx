import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import About from "./About"; // Import About component
import Project from "./Project"; // Import Projects component
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numStars = 100; // Total number of stars
    let newStars = [];

    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100 + "vw", // Random horizontal position
        size: Math.random() * 7 + 1 + "px", // Varying star sizes
        animationDuration: Math.random() * 20 + 10 + "s", // Slower movement
        animationDelay: Math.random() * 5 + "s", // Delayed start for smooth effect
      });
    }

    setStars(newStars);
  }, []);

  return (
    <div id="home"> {/* Ensure you have this id */}
      {/* Home Section with Stars */}
      <div className="home-section">
        <div className="stars-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: star.left,
                width: star.size,
                height: star.size,
                animationDuration: star.animationDuration,
                animationDelay: star.animationDelay,
              }}
            ></div>
          ))}
        </div>

        {/* Home Content */}
        <div className="home-content">
          <center><h1>I'm  
            <br/>
            <span>Anjali Sharma </span></h1>
          <br />
          <p>Passionate Full-Stack MERN Developer with a strong foundation in building scalable web applications.
             Experienced in developing dynamic user interfaces and robust backend solutions.
             <br/>
              Always eager to learn new technologies and contribute to innovative projects.</p>
          
          </center>
        </div>
      </div>

      
      <About />
      <Project />
      <Experience />
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;