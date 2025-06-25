gitimport React, { useRef } from "react";
 
export default function UserefDemo() {
  const inputRef = useRef(null);
  function handleclick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleclick}>submit</button>
    </div>
  );
}
 
 