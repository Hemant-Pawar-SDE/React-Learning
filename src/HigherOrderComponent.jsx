import React, { useState } from "react";

function HigherOrderComponent() {
  return (
    <div>
      <HOCred comp={<CounterComponent />} />
      <HOCblue comp={<CounterComponent />} />
    </div>
  );
}

function HOCred({ comp }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        background: "red",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      {comp}
    </div>
  );
}

function HOCblue({ comp }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        background: "blue",
        padding: "10px",
      }}
    >
      {comp}
    </div>
  );
}

function CounterComponent() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ color: "white" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Update</button>
    </div>
  );
}

export default HigherOrderComponent;
