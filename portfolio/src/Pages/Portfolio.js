import React from "react";
import fammsWebsiteImg from "../Images/fammsWebsiteImg.png";
import portfolioImg from "../Images/portfolioImg.png";
import quickPickerImg from "../Images/ecommerce.png";
import weatherImg from "../Images/weather.png";
import quizAppImg from "../Images/quiz.png";
import todoAppImg from "../Images/todoAppImg.png";

const projects = [
  
  {
  title: "FAMMS – Responsive Multi-Page Website",
  img: fammsWebsiteImg,
  link: "https://sowmiya-shanmugam.github.io/FammsWebsite/",
  description: "Built using HTML & CSS with mobile-friendly responsive design. Added multi-page navigation (Home, About, Services, Contact, etc.).",
  skills: ["HTML", "CSS", "Responsive Design", "Multi-Page Navigation"],
  },
  {
  title: "First Portfolio – Personal Portfolio Website",
  img: portfolioImg,
  link: "https://sowmiya-shanmugam.github.io/first-portfolio-template/",
  description: "Personal portfolio built with HTML & CSS. Includes About, services ,Projects, and Contact sections with responsive layout for mobile devices.",
  skills: ["HTML", "CSS", "Responsive Design", "Portfolio Design"],
  },
  {
    title: "Quick Picker Ecommerce (Admin Side)",
    img: quickPickerImg, 
    link: "https://sowmiya-shanmugam.github.io/ecommerce/",
    description:
      "An ecommerce website for managing products, built with React.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Weather App",
    img: weatherImg,
    link: "https://sowmiya-shanmugam.github.io/weather-app/",
    description:
      "A simple weather app built using React (not real-time data).",
    skills: ["HTML", "CSS", "React"],
  },
  {
  title: "React Quiz App with Sidebar",
  img: quizAppImg,
  link: "https://sowmiya-shanmugam.github.io/quiz-app/",
  description:
    "An interactive quiz application with a right-side sidebar for navigating questions, built using React and Open Trivia API.",
  skills: ["HTML", "CSS", "JavaScript", "React", "API"],
},
{
  title: "React To-Do Mission App",
  img: todoAppImg,
  link: "https://sowmiya-shanmugam.github.io/to-do-list/",
  description:
    "A goal-based to-do application where users set a daily task limit, add tasks, and track progress. Includes features like completion popups, limit alerts, restart option, and localStorage support for persistence.",
  skills: ["HTML", "CSS", "JavaScript", "React", "LocalStorage"],
}


];

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((p, index) => (
          <div className="card" key={index}>
            <img src={p.img} alt={p.title} />

            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p>
              <strong>Skills:</strong> {p.skills.join(", ")}
            </p>

            {/* Project Button */}
            <a href={p.link} target="_blank" rel="noreferrer">
              <button className="project-btn">View Project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;