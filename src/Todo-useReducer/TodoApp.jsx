import React, { useReducer } from "react";
import TodoList from "../Todo-useContext/TodoList";
import { nanoid } from "nanoid";

function TodoApp() {
  function reducer(todos, action) {
    switch (action.type) {
      case "ADD_TODO": {
        return [...todos, newTodo];
      }
    }
    return todos;
  }

  const initialTodo = [
    {
      id: 1,
      title: "waking up",
      completed: false,
    },
  ];

  const [todos, dispatch] = useReducer(reducer, initialTodo);

  function addTodo(newTodo) {
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  }

  return (
    <div>
      <h1>Todo Application</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList />
    </div>
  );
}

export default TodoApp;
