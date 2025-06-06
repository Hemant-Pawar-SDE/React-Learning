import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, title: "waking up", completed: true },
  ]);

  function deleteTodo(data) {
    setTodos((prev) => {
      return prev.filter((X) => {
        return data !== X;
      });
    });
  }

  function toggleComplete(X) {
    setTodos((prev) => {
      return prev.map((item) => {
        return { ...item, completed: !item.completed };
      });
    });
  }
  return (
    <div>
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo}  toggleComplete={toggleComplete}/>
    </div>
  );
}

export default TodoApp;
