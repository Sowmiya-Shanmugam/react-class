import React from "react";

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>

      {/* Personal Details */}
      <section className="about-section">
        <h3>Personal Details</h3>
        <p>
          Hi, I'm <strong>Sowmiya</strong>.  
          I am passionate about technology and web development.  
          I enjoy building modern, responsive web applications and learning new skills.
        </p>
      </section>


      {/* Education */}
      <section className="about-section">
        <h3>Education</h3>
        <p>
       I have completed my<strong> BCA degree</strong> at 
          <strong> Fatima College, Madurai</strong> with an aggregate of 
          <strong> 85%</strong>.
        </p>
      </section>
      
      {/* Skills */}
      <section className="about-section">
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>
    </div>
  );
}

export default About;