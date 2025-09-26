
import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { FaPalette, FaMoon, FaSun } from "react-icons/fa";

function ThemeControls() {
  const { mode, toggleMode, changeColor } = useTheme();
  const [showPalette, setShowPalette] = useState(false);

  const colors = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12"];

  return (
    <div className="theme-controls">
      {/* Color Palette */}
      <div className="palette-wrapper">
        <FaPalette
          className="icon-btn"
          onClick={() => setShowPalette(!showPalette)}
        />
        {showPalette && (
          <div className="palette-dropdown">
            {colors.map((c) => (
              <span
                key={c}
                className="color-circle"
                style={{ backgroundColor: c }}
                onClick={() => changeColor(c)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Dark/Light Toggle */}
      <button className="icon-btn" onClick={toggleMode}>
        {mode === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}

export default ThemeControls;
