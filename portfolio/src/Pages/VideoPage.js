
import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import fammsWebsiteImg from "../Images/famms-thumnail.jpg";
import portfolioImg from "../Images/portfolio-thumnail.jpg"
import ecommerceThumb from "../Images/ecommerce-thumnail.jpg";
import weatherThumb from "../Images/weather-thumnail.jpg"; 
import quizThumb from "../Images/quizthumnail.png"; 
import  todoThumb from "../Images/todo thumnail.jpg"; 
function VideoPage() {
  const { color } = useTheme();
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: "FAMMS (Responsive Multi-Page Website)",
     description:
      "Built using HTML & CSS with mobile-friendly responsive design. Added multi-page navigation (Home, About, Services, Contact, etc.).",
     thumbnail: fammsWebsiteImg,
     url: "https://www.youtube.com/embed/jUDQvEDNlG4",
    },
    {
     title: "First Portfolio (Personal Portfolio Website)",
     description:
      "Personal portfolio built with HTML & CSS. Includes About, Services, Projects, and Contact sections with a responsive layout for mobile devices.",
     thumbnail: portfolioImg,
     url: "https://www.youtube.com/embed/ipiawCq6sv8",
    },
    {
      title: "Quick Picker (E-commerce Admin Panel)",
      description:
        "An admin panel for managing products, categories, and orders built with React + FakeStore API.",
         thumbnail: ecommerceThumb,
      url: "https://www.youtube.com/embed/q7ckPPbF5_s",
    },
    {
      title: "Weather App (React Project)",
      description:
        "A simple weather app made using React. Shows temperature and conditions in real time.",
          thumbnail: weatherThumb,
   url: "https://www.youtube.com/embed/TD-_dDCqu2k", 
    },
    {
  title: "Quiz App (React Project)",
  description:
    "An interactive quiz app with a right-side sidebar for navigating questions, built using React and Open Trivia API.",
  thumbnail: quizThumb,
  url: "https://www.youtube.com/embed/Hn0Sqec_zxM"
},
{
  title: "To-Do Mission App (React Project)",
  description:
    "A fun task manager where users add daily missions, complete them, and get congratulatory popups. Includes task limit alerts, restart option, and localStorage support to save progress.",
  thumbnail: todoThumb,
  url: "https://www.youtube.com/embed/TE8FrfM0BvQ"
}
  ];

  return (
    <div className="video-page">
      <h2 style={{ color: color }}>🎥 My Project Videos</h2>
      <div className="video-grid">
        {videos.map((vid, index) => (
          <div
            className="video-card"
            key={index}
            onClick={() => setActiveVideo(vid.url)}
          >
            {activeVideo === vid.url ? (
              <iframe
                width="100%"
                height="200"
                src={vid.url}
                title={vid.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="video-thumbnail"
              />
            )}
            <div className="video-info">
              <h3>{vid.title}</h3>
              <p>{vid.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPage;
