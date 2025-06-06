import React, { useContext, useState } from "react";
import { todoContext } from "./TodoApp";
import { nanoid } from "nanoid";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { todos, setTodos } = useContext(todoContext);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prev) => {
      return [...prev, { id: nanoid(), title: title, completed: false }];
    });

    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
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
