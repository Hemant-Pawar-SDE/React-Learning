import React, { useReducer } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  function reducer(todos, action) {
    switch (action.type) {
      case "ADD_TODO": {
        return [...todos, action.payload];
      }
      case "DELETE_TODO": {
        return todos.filter((item) => {
          return item !== action.payload;
        });
      }

      case "TOGGLE_TODO": {
        return todos.map((item) => {
          return { ...item, completed: !item.completed };
        });
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

  function addTodo(newTodo) {}

  return (
    <div>
      <h1>Todo Application</h1>
      <TodoForm addTodo={addTodo} dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default TodoApp;
