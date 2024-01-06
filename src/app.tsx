import React from "react";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import PageHeader from "./components/header";

export default function App() {
  return (
    <>
      <PageHeader />
      <div className="todo-header">
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
}
