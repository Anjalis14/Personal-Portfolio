import React, { useEffect } from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
      <div className="contact-content">
        <h1 className="contact">Contact Me</h1>
        <div className="about-details">

          <div className="about-text">
            <p className="para">
            Feel free to reach out to me for any inquiries, collaborations, or project discussions. 
            <br/>
            I'm always open to connecting with like-minded individuals and exploring new opportunities
            </p>
            <div className="link">
            <h3>E-mail:  <a href="anjalii0914@gmail.com">anjalii0914@gmail.com</a>
            </h3>
            <h3>Linkedin :<a href="https://www.linkedin.com/in/anjalisharma2004/">Anjali Sharma</a>
            </h3>
            <h3>Github:  <a href="https://github.com/Anjalis14">Anjalis14</a>
            </h3>
        
           
            </div>
            
              
          </div>
        </div>
      </div>
    
  );
};

export default Contact;