

import React, { useState } from 'react';
import TextPage from '../TextPage';
import ColorPalette from '../ColorPalette';

function Page2() {
  const [color, setColor] = useState('black');
  const colors = ['purple', 'cyan', 'brown', 'pink'];

  return (
    <div>
      <h2>Page 2</h2>
      <ColorPalette colors={colors} onColorSelect={setColor} />
      <TextPage text="This is Page 2 content." color={color} />
    </div>
  );
}

export default Page2;