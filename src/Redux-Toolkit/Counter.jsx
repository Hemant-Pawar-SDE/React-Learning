import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";

function Counter() {
  const { count } = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleReset() {
    dispatch(reset());
  }

  function handleDecrement() {
    dispatch(decrement());
  }
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
}

export default Counter;
