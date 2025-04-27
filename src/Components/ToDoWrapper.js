import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import { v4 as uuidv4 } from "uuid";


const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, complete: false, editing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo=>todo.id!==id)
    )
  }
  const pendingTasksCount = todos.filter((todo) => !todo.complete).length;

  return (
    <div className="todo-wrapper">
      <h1>Get Things Done...</h1>
      <ToDoForm addTodo={addTodo} />
      <p className="pending-task">{pendingTasksCount} task{pendingTasksCount !== 1 ? 's' : ''} pending</p>
      {todos.map((todo) => (
        <ToDo
          task={todo}
          key={todo.id}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default ToDoWrapper;
