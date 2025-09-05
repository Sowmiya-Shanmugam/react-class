import React from 'react';

function ColorPalette({ colors, onColorSelect }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      {colors.map((clr, index) => (
        <div
          key={index}
          onClick={() => onColorSelect(clr)}
          style={{
            backgroundColor: clr,
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            borderRadius: '50%'
          }}
        ></div>
      ))}
    </div>
  );
}

export default ColorPalette;