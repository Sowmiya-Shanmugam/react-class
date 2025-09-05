
import React, { useState } from 'react';
import TextPage from '../TextPage';
import ColorPalette from '../ColorPalette';

function Page1() {
  const [color, setColor] = useState('black');
  const colors = ['red', 'blue', 'green', 'orange'];

  return (
    <div>
      <h2>Page 1</h2>
      <ColorPalette colors={colors} onColorSelect={setColor} />
      <TextPage text="This is Page 1 content." color={color} />
    </div>
  );
}

export default Page1;