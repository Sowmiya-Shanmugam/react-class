import React from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Color Palette Text Pages</h1>
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default App;