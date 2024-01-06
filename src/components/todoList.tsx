import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import TodoItem from "./todoItem";
import { TodoItemType } from "../types/todoItem.type";
import { RootState } from "../redux/store";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);
  const CompletedTodos = todos.filter((item) => item.completed).length;
  return (
    <>
      {todos.length > 0 && (
        <ul className="list-group">
          {todos.map(({ id, title, completed }: TodoItemType) => (
            <TodoItem id={id} title={title} completed={completed} />
          ))}
        </ul>
      )}
      {CompletedTodos > 0 && <>{CompletedTodos} Tasks completed.</>}
    </>
  );
}
