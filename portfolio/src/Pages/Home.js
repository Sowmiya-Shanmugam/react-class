import React from "react";
import myImg from "../Images/photo.jpg"; 

function Home() {
  return (
    <div className="home page-content">
      <img
        src={myImg} 
        alt="My Profile"
        className="profile-img"
      />
      <h2>PHP Fullstack Developer</h2>
      <p>
        Hi 👋, I am Sowmiya. I specialize in PHP, React, and Fullstack
        development. You will explore more about my skills and projects in this
        portfolio.
      </p>
    </div>
  );
} 
export default Home;
