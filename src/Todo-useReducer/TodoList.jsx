import React, { useState } from "react";

function TodoList({ todos, dispatch }) {
  const [mark, setMark] = useState(false);
  function handleDelete(X) {
    dispatch({
      type: "DELETE_TODO",
      payload: X,
    });
  }

  function handleToggle(Y) {
    dispatch({
      type: "TOGGLE_TODO",
      payload: Y,
    });
  }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>
              <strong>ID:</strong>:{todo.id}
            </p>
            <p
              style={
                todo.completed && mark
                  ? { textDecoration: "line-through" }
                  : null
              }
            >
              <strong>Title:</strong>:{todo.title}
            </p>
            <p>
              <strong>Completed:</strong>:
              <input
                type="checkbox"
                value={mark}
                onChange={() => {
                  setMark(!mark);
                  handleToggle(todo);
                }}
              />
              {todo.completed && mark ? "completed" : "not completed"}
            </p>

            <button
              onClick={() => {
                handleDelete(todo);
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
