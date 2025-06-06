import React, { useState } from "react";
import { nanoid } from "nanoid";

function TodoForm({ dispatch }) {
  const [title, setTitle] = useState("");

  const newTodo = {
    id: nanoid(),
    title: title,
    completed: false,
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
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
