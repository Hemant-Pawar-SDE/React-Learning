import React, { useRef, useState } from "react";

export default function UseRefExample() {
  const [submitted, setSubmitted] = useState("");
  const name = useRef(null);

  function submitbtn(e) {
    e.preventDefault();
    setSubmitted(name.current.value); // Store the input value
    name.current.value = ""; // Clear the input field
  }

  return (
    <div>
      <input type="text" placeholder="Enter the name" ref={name} />
      <button onClick={submitbtn}>Submit</button>
      <br />
      <h1>Submitted value: {submitted}</h1>
    </div>
  );
}
