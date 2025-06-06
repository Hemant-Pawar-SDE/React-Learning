import React from "react";
import TodoApp from "./Todo-useState/TodoApp";
import TodoAppContext from "./Todo-useContext/TodoApp";
import ChildToParent from "./ChildToParent";

function App() {
  return (
    <div>
      <ChildToParent />
    </div>
  );
}

export default App;
