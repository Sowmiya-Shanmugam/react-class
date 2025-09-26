// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import VideoPage from "./Pages/VideoPage";
import Contact from "./Pages/Contact";
import ThemeControls from "./Components/ThemeControls";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";
import "./App.css";

function Layout() {
  const { mode, color } = useTheme();

  return (
    <div className={`app-container ${mode}`} style={{ "--main-color": color }}>
      {/* Sidebar */}
      <div className="sidebar">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Top Controls */}
        <ThemeControls />

        {/* Page Content */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/videos" element={<VideoPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
     <Router basename={process.env.PUBLIC_URL}>
    <ThemeProvider>
        <Layout/>
    </ThemeProvider>
    </Router>
  );
}

export default App;
