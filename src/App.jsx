import React from "react";
import TodoApp from "./Todo-useReducer/TodoApp";
import TodoAppContext from "./Todo-useContext/TodoApp";
import ChildToParent from "./ChildToParent";
import FetchDemo from "./API/Fetch-Example";
import FetchDemo2 from "./API/Fetch-Search";
import FetchingDataOnly from "./API/FetchingDataOnly";
import HandlingFormInputs from "./HandlinFormInputsData";
import HigherOrderComponent from "./HigherOrderComponent";

function App() {
  return (
    <div>
      <HigherOrderComponent />
    </div>
  );
}

export default App;
