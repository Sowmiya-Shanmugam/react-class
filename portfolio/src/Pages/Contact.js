import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact page-content">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        {/* Phone */}
        <div className="contact-card">
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <p>6374948346</p>
        </div>

        {/* Email */}
        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>sowmiyadav512@gmail.com</p>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <FaGithub className="icon" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/Sowmiya-Shanmugam"
            target="_blank"
            rel="noreferrer"
          >
            github.com/yourgithub
          </a>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <FaLinkedin className="icon" />
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/sowmiya-shanmugam-029932317"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/yourlinkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
