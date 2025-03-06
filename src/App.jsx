import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import rocketImage from "./assets/rocket.gif";//Ensure the image is in the correct path
import "./App.css";

function App() {
  const [rocketPosition, setRocketPosition] = useState(10); // Initial position
  const [isFacingDown, setIsFacingDown] = useState(true); // Initially downward
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let newPosition = 10;
      const scrollY = window.scrollY;
      let isLastSection = false;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - window.innerHeight / 3) {
          newPosition = 14 + index * 18;
          if (index === sections.length - 1) isLastSection = true;
        }
      });

      // Determine scroll direction
      if (scrollY > lastScrollTop) {
        setIsFacingDown(!isLastSection); // Face down unless last section
      } else {
        setIsFacingDown(false); // Face up when scrolling up
      }

      setLastScrollTop(scrollY);
      setRocketPosition(newPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  // 🚀 Click event to scroll to top
  const handleRocketClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsFacingDown(true); // Ensure it faces downward after reaching top
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Rocket Image */}
      <img
        src={rocketImage}
        alt="Rocket"
        className="rocket"
        style={{
          top: `${rocketPosition}%`,
          transform: isFacingDown ? "rotate(180deg)" : "rotate(0deg)", // Rotate based on section
        }}
        onClick={handleRocketClick} // Click to scroll up
      />
    </Router>
  );
}

export default App; 