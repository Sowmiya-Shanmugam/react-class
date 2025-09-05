import React from 'react';

function TextPage({ text, color }) {
  return (
    <div>
      <p style={{ color: color, fontSize: '20px' }}>{text}</p>
    </div>
  );
}

export default TextPage;