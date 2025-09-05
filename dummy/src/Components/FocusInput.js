import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button className="btn" onClick={handleClick}>Focus Input</button>
    </div>
  );
}
export default FocusInput;