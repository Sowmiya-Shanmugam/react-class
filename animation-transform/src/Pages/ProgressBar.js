import React, { useState } from "react";
import "../App.css";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const fill = () => {
    setProgress(100);
  };

  return (
    <div>
      <button className="btn" onClick={fill}>Fill</button>
      <div className="progress-container">
        <div className="progress" style={{ width: progress + "%" }}></div>
      </div>
    </div>
  );
}
export default ProgressBar;