import React, { useState } from 'react';

const ColorChanger = () => {
  const [textColor, setTextColor] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleColorChange = (color) => {
    setTextColor(color);
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const backgroundStyle = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
    minHeight: '100vh',
    padding: '20px',
    transition: '0.3s',
  };

  return (
    <div style={backgroundStyle}>
      
    
      <h1>Color Your Text & Toggle the Theme...!</h1>

      <div style={{ margin: '20px ' }} className='colorPalette'>
        <button className='color1' onClick={() => handleColorChange('red')}></button>
        <button className='color2' onClick={() => handleColorChange('blue')}></button>
        <button className='color3' onClick={() => handleColorChange('green')}></button>
        <button className='color4' onClick={() => handleColorChange('orange')}></button>
        <button className='color5' onClick={() => handleColorChange('purple')}></button>
      </div>

  
      <button className='dark' onClick={toggleMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

     <p style={{ marginTop: '20px' }}>
  Did you know that octopuses have three hearts and blue blood?{' '}
  <span style={{ color: textColor }}>
    Two of the octopus's hearts pump blood to the gills, while the third pumps it to the rest of the body. 
    Their blood is blue because it contains a copper-rich protein called hemocyanin, which helps transport oxygen in cold and low-oxygen environments.
  </span>{' '}
  Isn't that mind-blowing?
</p>

    </div>
  );
};

export default ColorChanger;

