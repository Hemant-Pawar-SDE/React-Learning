import React, { useState } from "react";
import TodoList from "./TodoList";
import { nanoid } from "nanoid";

function TodoForm({ setTodos, todos }) {
  const [title, setTitle] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: title,
      completed: false,
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });

    setTitle("");
  }

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={title}
        placeholder="Enter your todo...."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit" disabled={title.length === 0}>
        ADD
      </button>
    </form>
  );
}

export default TodoForm;
