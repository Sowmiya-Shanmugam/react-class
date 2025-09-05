import React, { useRef, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div>
      <h2>{time}s</h2>
      <button className="btn1" onClick={start}>Start</button>
      <button className="btn2" onClick={stop}>Stop</button>
      <button className="btn3" onClick={reset}>Reset</button>
    </div>
  );
}
export default Stopwatch;