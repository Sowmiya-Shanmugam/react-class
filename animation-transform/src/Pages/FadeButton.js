import React, { useState } from "react";


function FadeButton() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setShow(!show)}>Toggle</button>

        <div className={`fade ${show ? "show" : ""}`}>

        Hello, I fade in and out!
      </div>
    </div>
  );
}
export default FadeButton;