import React from 'react';

function ColorPalette({ onColorChange }) {
  const handleChange = (event) => {
    onColorChange(event.target.value);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <label>Select Color: </label>
      <input type="color" onChange={handleChange} />
    </div>
  );
}

export default ColorPalette;