import React from "react";
import "../App.css";
import img from '../images/about-left-image.png'
function ZoomImage() {
  return (
    <div>
      <h2>Zoom Image on Hover</h2>
      <img src={img} alt="example" className="zoom-img" />
    </div>
  );
}
export default ZoomImage;