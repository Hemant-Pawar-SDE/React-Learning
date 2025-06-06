import React, { useState } from "react";

function TodoList({ todos, deleteTodo, toggleComplete }) {
  const [markComplete, setMarkComplete] = useState(false);

  return (
    <div>
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "2px solid red",
              marginBottom: "15px",
              padding: "15px",
            }}
          >
            <p>
              <strong>ID</strong>:{item.id}
            </p>
            <p style={markComplete ? { textDecoration: "line-through" } : null}>
              <strong>Title</strong>:{item.title}
            </p>
            <p>
              <strong>Status</strong>:
              <input
                type="checkbox"
                value={markComplete}
                onChange={(e) => {
                  setMarkComplete(!markComplete);
                  toggleComplete(item);
                }}
              />
              {markComplete ? "completed" : "Not completed"}
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
