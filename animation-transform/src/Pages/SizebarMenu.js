import React, { useState } from "react";
import "../App.css";

function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setOpen(!open)}>Toggle Menu</button>
     
        <div className={`sidebar ${open ? "open" : ""}`}>

        <h2>Menu</h2>
        <p>Home</p>
        <p>About</p>
      </div>
    </div>
  );
}
export default SidebarMenu;