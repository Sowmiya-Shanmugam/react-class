import React, { useState, useRef, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h2>Current: {count}</h2>
      <h3>Previous: {prevCount.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Counter;