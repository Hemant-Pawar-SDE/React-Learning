import { useState } from "react";

export default function Parent() {
  const [count, setCount] = useState(0);

  function update() {
    setCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <div>
      <h1>count:{count}</h1>
      <Child update={update} />
    </div>
  );
}

function Child({ update }) {
  function handleClick() {
    update();
  }

  return (
    <div>
      <button onClick={handleClick}> update</button>
    </div>
  );
}
