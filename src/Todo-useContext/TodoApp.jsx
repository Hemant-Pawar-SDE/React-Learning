import React, { createContext, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
export const todoContext = createContext();
function TodoAppContext() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "waking up",
      completed: false,
    },
  ]);
  return (
    <div>
      <todoContext.Provider value={{ todos, setTodos }}>
        <h1>Todo Application</h1>
        <TodoForm />
        <TodoList />
      </todoContext.Provider>
    </div>
  );
}

export default TodoAppContext;
