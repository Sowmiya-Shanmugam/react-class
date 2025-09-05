import { useEffect, useState } from "react";

const App = () => {
  const [font, setFont] = useState(5);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFont((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timeOut);
    };
  });

  return (
    <div>
      <p style={{ fontSize: `${font}px` }}>&#x1F337;</p> 
    </div>
  );
};

export default App;
