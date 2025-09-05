

import React, { useState } from 'react';
import TextPage from '../TextPage';
import ColorPalette from '../ColorPalette';

function Page3() {
  const [color, setColor] = useState('black');
  const colors = ['teal', 'gray', 'gold', 'maroon'];

  return (
    <div>
      <h2>Page 3</h2>
      <ColorPalette colors={colors} onColorSelect={setColor} />
      <TextPage text="This is Page 3 content." color={color} />
    </div>
  );
}

export default Page3;