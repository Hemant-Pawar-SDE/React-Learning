import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  const newTodo = {
    id: nanoid(),
    title: title,
    completed: false,
  };

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(newTodo);
  }

  return (
    <div onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add your todo...."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit">ADD</button>
    </div>
  );
}

export default TodoForm;
