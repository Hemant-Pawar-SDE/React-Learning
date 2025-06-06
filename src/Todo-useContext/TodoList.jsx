import React, { useContext, useState } from "react";
import { todoContext } from "./TodoApp";

function TodoList() {
  const { todos, setTodos } = useContext(todoContext);
  const [marked, setMarked] = useState(false);

  function deleteTodo(data) {
    setTodos((prev) => {
      return prev.filter((x) => {
        return data !== x;
      });
    });
  }

  function handleToggle(data) {
    setTodos((prev) => {
      return prev.map((x) => {
        if (data === x) {
          return { ...x, completed: !x.completed };
        }
      });
    });
  }
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <p>
              <strong>ID</strong>:{item.id}
            </p>
            <p
              style={item.completed ? { textDecoration: "line-through" } : null}
            >
              <strong>Title</strong>:{item.title}
            </p>
            <p>
              <strong>Status</strong>:
              <input
                type="checkbox"
                value={marked}
                onChange={() => {
                  setMarked(!marked);
                  handleToggle(item);
                }}
              />
              {item.completed && marked ? "Completed" : "Not Completed"}
            </p>

            <button
              onClick={() => {
                deleteTodo(item);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
