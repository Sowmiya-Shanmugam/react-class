import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FadeButton from "./Pages/FadeButton";
import SidebarMenu from "./Pages/SizebarMenu";
import FlipCard from "./Pages/FlipCard";
import ProgressBar from "./Pages/ProgressBar";
import ZoomImage from "./Pages/ZoomImage";
import RotateSquare from "./Pages/RotateSquare";

import TiltButton from "./Pages/TiltButton";

function App() {
  return (
    <Router>
      <div>
       
        <nav>
          <h3>Animation</h3>
          <ul>
            <li><Link to="/fade">Fade In/Out</Link></li>
            <li><Link to="/sidebar">Sidebar Menu</Link></li>
            <li><Link to="/flip">Flip Card</Link></li>
            <li><Link to="/progress">Progress Bar</Link></li>
          </ul>

          <h3>Transform</h3>
          <ul>
            <li><Link to="/zoom">Zoom Image</Link></li>
            <li><Link to="/rotate">Rotate Square</Link></li>
          
            <li><Link to="/tilt">Tilt Button</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Animation Routes */}
          <Route path="/fade" element={<FadeButton />} />
          <Route path="/sidebar" element={<SidebarMenu />} />
          <Route path="/flip" element={<FlipCard />} />
          <Route path="/progress" element={<ProgressBar />} />

          {/* Transform Routes */}
          <Route path="/zoom" element={<ZoomImage />} />
          <Route path="/rotate" element={<RotateSquare />} />
        
          <Route path="/tilt" element={<TiltButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;