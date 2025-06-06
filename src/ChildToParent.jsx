import React, { useState } from "react";

function ChildToParent() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <div>
      <h2>Count:{count}</h2>
      <UpdateCount increment={increment} />
    </div>
  );
}

export default ChildToParent;

function UpdateCount({ increment }) {
  function handleUpdate() {
    increment();
  }
  return (
    <div>
      <button onClick={handleUpdate}>UPDATE</button>
    </div>
  );
}
