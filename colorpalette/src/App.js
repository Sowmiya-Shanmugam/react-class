 import React, { useState } from 'react';
import ColorPalette from './Colorpalette'; 

function App() {
  const [textColor, setTextColor] = useState('black');
  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1 style={{ color: textColor }}>Error Makes clever.....!</h1>
      <ColorPalette onColorChange={setTextColor} /> 
    </div>
  );
}

export default App;
       